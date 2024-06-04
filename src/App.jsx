
import './App.css'
function App() {

  const handlerAddUser = event=>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value
    const users = {name, email, password}
    console.log(users);

   fetch('http://localhost:5000/users', {
    method: 'post',
    headers: {
      "Content-Type" : 'application/json'
    },
    body: JSON.stringify(users)
   })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
    console.log(name,email,password);
  }

  return (
    <>
      <h1>Simple Conceptual session crud operation</h1>

      <form onSubmit={handlerAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value="Add user" />
      </form>

    </>
  )
}

export default App
