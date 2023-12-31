import { useState } from "react";
import { getRegEx, getSpanishFromRegEx } from "../../services/regex";
import { toast } from "sonner";
import ToggleTranslator from "../ToggleTranslator/ToggleTranslator";
import Loader from "../Loader/Loader";
import "./Translator.css";

const Translator = () => {
  const [result, setResult] = useState("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(prompt === "") {
      toast.error('Por favor, escribe una petición.')
      return;
    }

    setLoading(true);
    setPrompt("");

    if (!toggle) {
      getRegEx(prompt)
        .then((response) => {
          setResult(response);
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getSpanishFromRegEx(prompt)
        .then((response) => {
          setResult(response);
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const onCopy = async () => {
    await navigator.clipboard.writeText(result);
    toast.success('Copiado al portapapeles')
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
        <button>Generar</button>
      </form>
      <p>
        Consejo: Intenta ser lo más explícito posible con la pregunta. Piensa
        que le estas pidiendo a una persona.
      </p>

      <button className="outcome" onClick={onCopy}>
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
      </button>
    </div>
  );
};

export { Translator };
