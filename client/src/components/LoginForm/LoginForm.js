import { useState } from "react"

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Handler function
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You entered ${email} and ${password}`);
  }
  return(
    //Login form goes here
    <form method="post" onSubmit={handleSubmit}>
      <label> Input your email address: 
        <input
          type="text"
          value = {email}
          onChange={(e) => setEmail(e.target.value)}
          />
      </label><br/>

      <label> Input your password: 
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
          />

      </label><br/>

      <input type="submit" value = "Log In"/>
    </form>
  )
}