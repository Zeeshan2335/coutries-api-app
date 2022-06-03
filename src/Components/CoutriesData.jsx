import React, { useState, useEffect } from "react";
import axios from "axios";
import ContryCards from "./ContryCards";
import CardDetail from "./CardDetail";

const CoutriesData = () => {
  const [coutries, setCoutries] = useState([]);
  const [fltrCountry, setFltrCountry] = useState([]);
  const [trfData, setTrfData] = useState([]);
  const [search, setSearch] = useState("");
  const [fltrRegion, setFltrRegion] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [displayNone, setDisplayNone] = useState("");
  const [ItemName, setItemName] = useState([]);

  console.log("item Name==>  ", ItemName);

 
  console.log(fltrRegion);

  const handleRegionFltr = (region) => {
    const FilterAfrica = fltrRegion.filter((item) => item.region == "Africa");
    const FilterAmericas = fltrRegion.filter(
      (item) => item.region == "Americas"
    );
    const FilterEurope = fltrRegion.filter((item) => item.region == "Europe");
    const FilterAsia = fltrRegion.filter((item) => item.region == "Asia");
    const FilterOceania = fltrRegion.filter((item) => item.region == "Oceania");

    if (region === "Africa") setCoutries([...FilterAfrica]);
    if (region === "Americas") setCoutries([...FilterAmericas]);
    if (region === "Europe") setCoutries([...FilterEurope]);
    if (region === "Asia") setCoutries([...FilterAsia]);
    if (region === "Oceania") setCoutries([...FilterOceania]);
  };
  ////////////////////////////////////////////////////////////////////////
  const goToCard = () => {
    setToggle(false);
    setDisplayNone("display");
  };
  ////////////////////////////////////////////////////////////////////////////

  const getApi = async () => {
    const result = await axios.get("https://restcountries.com/v2/all");
    console.log(result.data);
    setCoutries([...result.data]);
    setFltrCountry([...result.data]);
    setFltrRegion([...result.data]);
    setTrfData([...result.data]);
  };

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    const filtered = fltrCountry.filter((item) =>
      item.name.toUpperCase().includes(search.toUpperCase())
    );
    console.log("filter data", filtered);
    setCoutries([...filtered]);
  }, [search]);

  return (
    <>
      {" "}
      <div className="head_container" id={displayNone}>
        <div className="input_container">
          <input
            type="text"
            placeholder="Search Country Name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter_div">
          <select
            id="filter_option"
            onChange={(e) => handleRegionFltr(e.target.value)}
          >
            <option value=""> Filter By Region</option>
            <option value="Africa"> Africa </option>
            <option value="Americas">America </option>
            <option value="Europe">Europe </option>
            <option value="Asia">Asia </option>
            <option value="Oceania">Oceania </option>
          </select>
        </div>
      </div>
      {toggle ? (
        <div className="card_rap" onClick={goToCard}>
          {coutries.map((item, ind) => (
            <div>
              <ContryCards key={ind} item={item} setItemName={setItemName} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div>
            <CardDetail
              setToggle={setToggle}
              ItemName={ItemName}
              trfData={trfData}
              setDisplayNone={setDisplayNone}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CoutriesData;
