import React, { useState } from "react";
import { getRegEx, getSpanishFromRegEx } from "../../services/regex";
import Loader from "../Loader/Loader";
import ToggleTranslator from "../ToggleTranslator/ToggleTranslator";
import "./Translator.css";

const Translator = () => {
  const [result, setResult] = useState("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setPrompt("");

    if (!toggle) {
      getRegEx(prompt)
        .then(({ data }) => {
          setResult(data.message);
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getSpanishFromRegEx(prompt)
        .then(({ data }) => {
          setResult(data.message);
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="Translator">
      <form onSubmit={handleSubmit}>
        <div className="Textarea">
          <textarea
            placeholder="Escribe tu petición"
            cols="30"
            rows="10"
            value={prompt}
            onChange={({ target }) => setPrompt(target.value)}
          />
          <ToggleTranslator setToggle={setToggle} toggle={toggle} />
        </div>
        <button>De una</button>
      </form>
      <p>
        Consejo: Intenta ser lo más explícito posible con la pregunta. Piensa
        que le estas pidiendo a una persona.
      </p>

      <div className="outcome">
        {!loading && !!result ? (
          <div className="result">{result}</div>
        ) : (
          <Loader />
        )}
        <p className="disclamer">
          Advertencia: A menudo, el resultado puede ser inexacta debido a
          imperfecciones en el modelo. Por favor, verifique estos resultados
          antes de ponerlos en producción.
        </p>
      </div>
    </div>
  );
};

export { Translator };
