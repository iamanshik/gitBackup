import React from "react";
import "./Navbar.css";
export default function Navbar() {
  const [Menu, setMenu] = React.useState(false);
  const [Findicon, setFindicon] = React.useState(false);
  

  return (
    <>
      <div className="Navbar">
        <div className="left">My Web App</div>

        <div className="mid">
          <input type="text" className="input inputBtn" id={Findicon? "hiddenFind":""} placeholder="Search..." />
          <button className="button searchBtn" id={Findicon? "hiddenFindBtn":""}>Search</button>
          <button onClick={()=>setFindicon(!Findicon)}  className="searchMobile">Find</button>
        </div>

        <div className="right">
          <nav className="links" id={Menu? "hidden":""}>
            <a href="/">About</a>
            <a href="/">Home</a>
            <a href="/">Feedback</a>
            <a href="/">Buckfullminister</a>
          </nav>
          <button onClick={()=>setMenu(!Menu)} >Menu</button>
        </div>
      </div>
    </>
  );
}
