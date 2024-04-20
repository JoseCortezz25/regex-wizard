import { useRef, useState } from "react";
import { getRegEx, getSpanishFromRegEx } from "../../services/regex";
import { toast } from "sonner";
import { Modal } from "../Modal/Modal";
import ToggleTranslator from "../ToggleTranslator/ToggleTranslator";
import Loader from "../Loader/Loader";
import "./Translator.css";

const Translator = () => {
  const [result, setResult] = useState("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const inputApiKeyRef= useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (localStorage.getItem("API_KEY") === null) {
      setIsOpen(true);
      return;
    }

    if(prompt === "") {
      toast.error('Por favor, escribe una petición.')
      return;
    }

    setLoading(true);

    if (!toggle) {
      getRegEx(prompt)
        .then((response) => {
          setResult(response);
        })
        .catch((error) => {
          toast.error('Ha ocurrido un error, por favor verifica tu API KEY e intenta de nuevo.')
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
          toast.error('Ha ocurrido un error, por favor verifica tu API KEY e intenta de nuevo.')
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const saveApiKey = (e) => {
    e.preventDefault();
    const value = e.target[0].value;

    if (value === "" || value === null) {
      toast.error('Por favor, añade una API KEY');
      return;
    }
    localStorage.setItem("API_KEY", e.target[0].value);
    toast.success('API KEY guardada con éxito');
  }

  const toggleApiKey = (e) => {
    e.preventDefault();
    inputApiKeyRef.current.type = inputApiKeyRef.current.type === 'password' ? 'text' : 'password';
  };

  const onCopy = async () => {
    await navigator.clipboard.writeText(result);
    toast.success('Copiado al portapapeles')
  };

  return (
    <div className="Translator">
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <h2>Configuración</h2>
          <p>
            Para hacer uso de esta herramienta, necesitas una API KEY de Google Gemini Pro. 
          </p>

          <div className="external-link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>

            <p>
              No te preocupes, esta información se guardará en tu navegador. {""}
              <a href="https://ai.google.dev/gemini-api/docs/api-key?hl=es-419" target="_blank" rel="noopener noreferrer">
                Investiga como obtener la API KEY aquí.
              </a>
            </p>
          </div>

          <form onSubmit={saveApiKey}>
            <label htmlFor="">Añade tu API KEY</label>
            <input type="text" placeholder="Ingresa tu API KEY de Google Gemini" />
            <button type="submit">Guardar API KEY</button>
          </form>

          {localStorage.getItem("API_KEY") && (
            <form onSubmit={toggleApiKey}>
              <label htmlFor="">API KEY guardada</label>
              <input ref={inputApiKeyRef} type="password" value={localStorage.getItem("API_KEY")} disabled />
              <button type="submit" className="btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                <span>Ver mi API KEY</span>
              </button>
            </form>
          )}

        </Modal>
      )}
      <form onSubmit={handleSubmit}>
        <div className="Textarea">
          <textarea
            placeholder="Escribe de forma detallada tu petición"
            cols="30"
            rows="10"
            value={prompt}
            onChange={({ target }) => setPrompt(target.value)}
          />
          <ToggleTranslator setToggle={setToggle} toggle={toggle} />
        </div>
        <div className="buttons-box">
          <button type="button" className="btn-setting" onClick={() => setIsOpen(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </button>
          <button type="submit">Generar</button>
        </div>
      </form>
      <p>
        Consejo: Intenta ser lo más explícito posible con tu petición. Piensa
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
