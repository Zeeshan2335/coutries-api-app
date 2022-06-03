import React from "react";
import "./css/ContryCard.css";

const ContryCards = ({ item,setItemName }) => {
  return (
    <div  onClick={()=>setItemName(item.name)} >
      <div className="card_container"  >
        <div>
          <img id="img_cntry" src={item.flag} alt="countrypic" />
        </div>
        <div className="txt_div">
          <h3>{item.name.substr(0, 20)} </h3>
          <p>
            <span className="span1">
              <b>Population:</b> {item.population}
            </span>
            <br />
            <span className="span2">
              <b>Region:</b> {item.region}
            </span>
            <br />
            <span className="span3">
              <b>Capital:</b>
              {item.capital} <br />
            </span>
          </p>
        </div>
        {/* <button className="btn">More</button> */}
      </div>
    </div>
  );
};

export default ContryCards;
