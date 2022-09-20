import React from "react";
import "./sign.css";
export default function SignIn() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target; // all properties we have to work with each element
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    })); // this time returning whole thing as an object.
  }
  function loginDataBase(){
    console.log(formData.password,formData.email)
      fetch(`http://localhost/login/anshikthind@yahoo.com`)
      .then((res)=>res.json())
      .then((data)=>console.log(data))
  }
  console.log(formData.password.length);
  function handleSubmit(event) {
    event.preventDefault(); // to dont refresh the page. and also to not paste credentials in url.
    if ( formData.email.length === 0) {
      alert("please Provide Credentials");
    }
    else{ 

      if (formData.password.length < 8)
      {
        alert("password must be eigth laters");
      }
      else{
        // alert('you  are loggged in')
        loginDataBase();
      }
      
    }

  }
  return (
    <>
      <div className="LoginContainer">
        <div className="LoginBox">
          <form onSubmit={handleSubmit}>
            <h1>My Web App</h1>
            <h2>Sign in</h2>
            <p>Use your My Web App Account</p>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={handleChange}
              name="password"
              value={formData.password}
              placeholder="Password"
            />
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
}
