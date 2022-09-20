import React from "react";
import "./Body.css";
import img from "./hq720.webp";
import NewsData from './newsapi'
export default function Body() {
let i =0;
  let NewsArr = NewsData.map((dataPacket)=>{
      return (
        <div className="box" >
        <div className="img">
          <img src={dataPacket.urlToImage} alt="" />
        </div>
        <h2>
          {dataPacket.title}
        </h2>
        <h3>{dataPacket.author}</h3>
       </div>
      )

       
    
  })
  {console.log(NewsArr)}
  return (
    <>
      <div className="container">
      {NewsArr}

      </div>
    </>
  );
}
