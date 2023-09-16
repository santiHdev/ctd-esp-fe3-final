import { useState } from 'react';


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [errorMessage, setErrorMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

 const onChangeName = (e) => {
  setName(e.target.value)
 }

 const onChangeEmail = (e) => {
  setEmail(e.target.value.trim())
 }

  const onSubmitForm = (e) => {

    setName(name.trim())

    e.preventDefault()
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const regexName = /^[A-Za-z]+\s[A-Za-z]+$/
    
    if (regexEmail.test(email) && regexName.test(name)){
      setSuccessMessage(true)
      setErrorMessage(false)
      console.log("Los datos de contacto se han cargado correctamente")
    } else {
      setSuccessMessage(false)
      setErrorMessage(true)
    }

   


  }

  return (
    <div>
      <h1>Ingrese sus datos para contacto</h1>
      <form onSubmit={onSubmitForm}>
            <label htmlFor="nombre">Nombre y Apellido:</label>
            <input type="text" name="nombre" value={name} onChange={onChangeName} />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={email} onChange={onChangeEmail} />
            <button type='submit'>Enviar</button>

    </form>
    {errorMessage && <h3 style={{color: '#e63946'}}>Por favor verifique su informacion nuevamente!</h3>}
    {successMessage && <h3 style={{color: '#ffba08'}}>Gracias {name}!, te contactaremos cuando antes vía mail</h3>}
    </div>
  );
};

export default Form;
