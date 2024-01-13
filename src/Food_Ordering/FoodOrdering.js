import { useEffect, useState } from "react";
import "./style.css";
import restdata from "./data";

function FoodOrdering() {
  return (
    <div className="App text-center justify-content-center">
      <div className="row justify-content-center">
        <div className="col-lg-8 ">
          <h1 className="appheading mb-5">Food Ordering 🍔</h1>
          <hr></hr>
          <div className="foododeringmain">
            <Allrestaurants />
          </div>
        </div>
      </div>
    </div>
  );
}

function Allrestaurants() {
  const [restaurants, setRestaurants] = useState(restdata);
  const [filtered, setFiltered] = useState(restdata);
  const [searchquery, setSearchquery] = useState("");

  const handlesearchtext = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchquery(query);
    setFiltered(restaurants.filter((item) => item.name.toLowerCase().includes(query)));
  };

  const handleoptions = (e) => {
    const filterOption = e.target.value;
    setFiltered(restaurants.filter((item) => item.veg_or_nonveg === filterOption));
  };

  const handlesort = (e) => {
    const sortOption = e.target.value;
    if (sortOption === "High to low rating") {
      setFiltered([...restaurants].sort((a, b) => b.rating - a.rating));
    } else if (sortOption === "Name : Descending") {
      setFiltered([...restaurants].sort((a, b) => b.name.localeCompare(a.name)));
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <h4 className="mb-3">All Restaurants</h4>
        <input type="text" value={searchquery} className="search" onChange={(e) => handlesearchtext(e)} />
        <br />
        <select onChange={(e) => handleoptions(e)}>
          <option>Vegetarian</option>
          <option>Non-Vegetarian</option>
        </select>
        <select onChange={(e) => handlesort(e)}>
          <option>Sort</option>
          <option>High to low rating</option>
          <option>cost_for_two</option>
          <option>Name : Ascending</option>
          <option>Name : Descending</option>
        </select>
        <hr />
        <div className="row allres">
          {filtered.map((item) => (
            <Singlerestaurant itemobj={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Singlerestaurant({ itemobj }) {
  return (
    <div className="col-lg-4 ">
      <div className="res_card">
        <img src={itemobj.image} alt={itemobj.name} className="resimage"></img>
        <div className="res_details">
          <h6>{itemobj.name}</h6>
          <p className="m-0">{itemobj.etp}</p>
          <p className="m-0">{itemobj.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default FoodOrdering;
