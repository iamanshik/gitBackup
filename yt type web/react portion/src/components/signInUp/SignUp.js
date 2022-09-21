import React from "react";
import "./sign.css";
export default function SignUp() {
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

  // fetch('http://localhost/signup',{
  //   method: 'POST',
  //   mode: "no-cors",
  //   headers: {
      
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //       email: 'hgfdfghgf',
  //       password: 'jhgfjjhgfdfhj gf'
  //   }) 
  // })
  // .then(res=> res.json())
  // .then(data=> console.log(data))

  

  function SignUpDataBase() {

    // console.log(formData.password,formData.email)
    fetch(`http://localhost/login/${formData.email}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 404) {
          return false;
        } else if (res.status === 500) {
          alert("serverside problem");
          return "error";
        }
      })
      .then((data) => {
        // console.log(data.email)
        if (data) {
          if (data.email === formData.email) {
            alert("account already exist..");
            return;
          }
        } else {
          // working till here..
          
          fetch('http://localhost/signup',{
            method: 'POST',
            mode: "cors",
            headers: {
              
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": `${formData.email}`,
                "password":`${formData.password}`
            }) 
          })
            
        .then(res=> res.json())
        .then(data=> console.log(data))         
        }
      });
  }
  function handleSubmit(event) {
    event.preventDefault(); // to dont refresh the page. and also to not paste credentials in url.
    if (formData.email.length === 0) {
      alert("please Provide Credentials");
    } else {
      if (formData.password.length < 8) {
        alert("password must be eigth laters");
      } else {
        // alert('you  are loggged in')
        SignUpDataBase();
      }
    }
  }

  return (
    <>
      <div className="LoginContainer">
        <div className="LoginBox">
          <form onSubmit={handleSubmit} method="POST">
            <h1>My Web App</h1>
            <h2>Sign Up</h2>
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
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}
