import React from "react";
import "./sign.css";
export default function SignIn() {
  let response, jsonData;
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function loginDataBase() {
    // console.log(formData.password,formData.email)
    fetch(`http://localhost/login/${formData.email}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 404) {
          alert("invalid Creadentials");
          return false;
        } else if (res.status === 500) {
          alert("serverside problem");
          return false;
        }
      })
      .then((data) => {
        console.log(data);
        if (data) {
          return 'fdddd';
        } else {
          setFormData(data);
        }
      });
    // console.log(formData)
  }
  // console.log(formData.password.length);
  function handleSubmit(event) {
    event.preventDefault(); // to dont refresh the page. and also to not paste credentials in url.
    if (formData.email.length === 0) {
      alert("please Provide Credentials");
    } else {
      if (formData.password.length < 8) {
        alert("password must be eigth laters");
      } else {
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
