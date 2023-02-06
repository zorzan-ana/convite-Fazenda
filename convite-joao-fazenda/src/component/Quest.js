import { useEffect, useState } from "react";



export default function Quest(props) {
  
  
  // useEffect(() => {
  //   setTimeout(() => escreverNaTela(props.text), props?.delay ?? 200);
  // }, []);


  return (
    <div>
      <div style={{ paddingn: 10, width: 880 }}>
        <input type="text" className="input" placeholder="Me informe seu nome:" aria-label="Me informe seu nome:" />
      </div>
        <div style={{ padding: 30 }}>
          <input type="checkbox"
            value="confirm"
            id="confirmar"
          />
          <label className="labelQuest">Confirmo minha presença</label>


          <input type="checkbox"
            value="reject"
            id="rejeitar"
           />

          <label className="labelQuest">Infelizmente não irei</label>
        </div>
        <button type="submit" title="Enviar" className="botaoEnviar">
          Enviar
        </button>
    </div>
  );
}
