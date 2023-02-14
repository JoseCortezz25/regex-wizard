import React, {useState} from "react";
import "./Translator.css";

const Translator = () => {
  const [result, setResult] = useState("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$")
  
  return (
    <div className="Translator">
      <form>
        <textarea placeholder="Coincide con cualquier cosa que tenga una longitud mínima de ocho dígitos" cols="30" rows="10"></textarea>
        <button>De una</button>
      </form>

        <div className="outcome">
          <div className="result">{result}</div>
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
