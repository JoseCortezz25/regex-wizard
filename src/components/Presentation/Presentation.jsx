import React from 'react'
import arrowIcon from '../../../public/static/icons/arrow-double.svg'
import { Translator } from '../Translator/Translator'
import './Presentation.css'

const Presentation = () => {
  return (
    <section className="section">
      <div className="Presentation container">
        <h1 className=''>Habla claro sin esfuerzo</h1>
        <p className='Presentation__subtitle'>Convierte tus palabras en expresiones regulares con ayuda de un asistente.</p>
        <span className="Presentation__explain flex">
          <p>Español</p>
          <span>
            <img src={arrowIcon} alt="" />
          </span>
          <p>Regex</p>
        </span>

        <Translator />
      </div>
    </section>
  )
}

export default Presentation