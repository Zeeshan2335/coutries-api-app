import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/CardDetails.css";

const CardDetail = ({ setToggle, ItemName, trfData, setDisplayNone }) => {
  console.log("trfData==>", trfData);
  console.log("item name==>", ItemName);
  const [showDetails, setShowDetails] = useState([]);
  const [saveDt, setSaveDt] = useState([...trfData]);
  const [saveName, setSaveName] = useState(ItemName);

  const handleBack = () => {
    setToggle(true);
    setDisplayNone("");
  };

  // fiter the card details here
  const moveToCard = (CrdIndex) => {
    console.log(" moveToCard ", CrdIndex);
    const showCard = saveDt.filter((item) => item.name === CrdIndex);
    setShowDetails([...showCard]);

    console.log("showCade==>", showCard);
  };

  useEffect(() => {
    trfData !== "" && moveToCard(saveName);
  }, []);

  return (
    <div>
      {showDetails.map((item) => (
        <div>
          <div className="btn_div">
            <button className="btn" onClick={handleBack}>
              Bank
            </button>
          </div>
          <div className="card_details">
            <div className="img">
              <img src={item.flag} alt="" className="img1" />
            </div>
            <div className="details">
              <div className="txt1">
                <h4>Native Name : {item.nativeName} </h4>
                <h4>Population : {item.population} </h4>
                <h4>Region : {item.region} </h4>
                <h4>Sub Region : {item.subregion} </h4>
                <h4>Capital : {item.capital} </h4>
              </div>
              <div className="txt2">
                <h4>Top LEvel Domain: </h4>
                <h4> Curreies: {item.currencies[0].code}</h4>
                <h4>
                  Larguages : {item.languages[0].iso639_1} ,<br />
                  {item.languages[0].iso639_2} ,{item.languages[0].name}
                </h4>
              </div>
            </div>
          </div>
        </div>
      ))}

      <h1></h1>
    </div>
  );
};

export default CardDetail;
