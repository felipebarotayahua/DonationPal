import { useState } from "react"

export default function LoginForm() {
  const [inputs, setInputs] = useState({});

  //Handler function for form field changes
  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setInputs(values => ({...values, [fieldName]: fieldValue}));
  }

  //Handler function
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You entered ${inputs.email} and ${inputs.password}`);
  }
  return(
    //Login form goes here
    <form method="post" onSubmit={handleSubmit}>
      <label> Input your email address: 
        <input
          type="text"
          value = {inputs.email || ""}
          name = "email"
          onChange={handleChange}
          />
      </label><br/>

      <label> Input your password: 
        <input
          type="password"
          value={inputs.password || ""}
          name = "password"
          onChange={handleChange}
          
          />

      </label><br/>

      <input type="submit" value = "Log In"/>
    </form>
  )
}