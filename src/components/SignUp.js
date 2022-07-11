import { useEffect, useState } from "react";



const defaultFormFields = {
  displayName: "",
  email: "",
  contact: "",
  country: "",
  state: "",
  password: "",

};

var countries = [
  { name: "India", code: "+91", states: ["Uttar Pradesh", "Madhya Pradesh"] },
  {
    name: "United Arab Emirates",
    code: "+2",
    states: [
      "Abu Dhabi",
      "'Ajman",
      "Al Fujayrah",
      "Sharjah",
      "Dubai",
      "Ra's al Khaymah",
      "Umm al Qaywayn",
    ],
  },
];

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    displayName,
    email,
    contact,
    country,
    state,
    password,
  

  } = formFields;

  console.log(formFields);



 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      displayName &&
      email &&
      contact &&
      country &&
      state &&
      password
    
    ) {

      localStorage.setItem("name", displayName)
      localStorage.setItem("email", email)
      localStorage.setItem("contact", contact)
      localStorage.setItem("country", country)
      localStorage.setItem("state", state)
      localStorage.setItem('password', password)
    } else {
      console.log("incomplete form");
    }
  };

 

  const handleChange = (e) => {
    console.log("e", e.target.value);
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });

  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">Name</label>
        <input
          required
          onChange={handleChange}
          type="text"
          name="displayName"
        />

        <label htmlFor="email">Email</label>
        <input required onChange={handleChange} type="email" name="email" />

        <label htmlFor="password" > Password</label>
        <input
          required
          onChange={handleChange}
          type="password"
          name="password"
          minLength={6}
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
        />

        <label htmlFor="contact">Contact</label>
        <input required onChange={handleChange} type="number" name="contact" />

        <label htmlFor="country">Country</label>
        <select required name="country" onChange={handleChange}>
          {countries.map((country, index) => (
            <option value={country.name}>{country.name}</option>
          ))}
        </select>

        <label htmlFor="state">State</label>
        <select required name="state" onChange={handleChange}>
          {countries.filter((item, index) => item.name === country) &&
            countries
              .filter((item, index) => item.name === country)[0]
              ?.states.map((state) => <option value={state}>{state}</option>)}
        </select>

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};
export default SignUp;
