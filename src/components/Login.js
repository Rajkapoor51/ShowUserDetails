import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: '',
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    email,
    password,
  } = formFields;

  const navigate = useNavigate();

  const userEmail= localStorage.getItem('email');
  const pass= localStorage.getItem('password');
 
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if(userEmail === email){
      if(pass === password){
        alert('successfully login', navigate('/home'))   
      }
      else{
          alert('wrong password')
      }
    }
    else{
        alert('invalid Details')
    }   
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value }); 
  };

  return (
    <div className="sign-up-container">
      <h2>Login Page</h2>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
          
          
        />
      
        <label htmlFor="password">password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          minLength={6}
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
