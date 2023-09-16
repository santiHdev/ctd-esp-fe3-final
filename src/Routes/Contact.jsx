import React from 'react'
import Form from '../components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Quieres mas informacion?</h2>
      <p>Envianos tus datos y nos contactaremos</p>
      <Form/>
    </div>
  )
}

export default Contact