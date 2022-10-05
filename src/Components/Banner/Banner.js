import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

  // let Reg=(regio)=>{
  //   let [region,setRegion]=useState();
  //   setRegion(regio)
  // }
function Banner() {
  
  let [category, setCategory] = useState();
  let [region,setRegion]=useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Pothos">Pothos</option>
              <option value="snake plant">snake plant</option>
              <option value="Cacti">Cacti</option>
              <option value="Aloe vera">Aloe vera</option>
              <option value="Aglaonema">Aglaonema</option>
              <option value="Caladium">Caladium</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Pothos")} >Pothos</span>
            <span onClick={()=>setCategory("Snake plant")} >snake plant</span>
            <span onClick={()=>setCategory("Cacti")} >Cacti</span>
            <span onClick={()=>setCategory("Aloe vera")} >Aloe vera</span>
            <span onClick={()=>setCategory("Aglaonema")} >Aglaonema</span>
            <span onClick={()=>setCategory("Caladium")} >Caladium</span>
            <span onClick={()=>setCategory("Other")} >Other</span>
          </div>
          <span className= "region">   
             <label>Region:</label>
        <select
          name="Category"
          onChange={(e) => {
            setRegion(e.target.value);
          }}
          className="input"
        > <option >Select Region</option>
              <option value="Andheri">Andheri</option>
              <option value="Malad">Malad</option>
              <option value="Goregaon">Goregaon</option>
              <option value="Kurla">Kurla</option>
              <option value="Vashi">Vashi</option>
              <option value="Panvel">Panvel</option>
              <option value="Other">Other</option>
        </select>
         </span>
        </div>
        <div className="banner">
          {/* <img src="../../../Images/banner copy.png" alt="" /> */}
          <img src="../../../Images/By And sell plants.png" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category} region={region}/>  }
    </div>
  );
}


export default Banner;
// export {Reg}