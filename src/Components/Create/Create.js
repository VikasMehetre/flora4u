import React, { Fragment, useState, useContext,useEffect } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { Firebase } from "../../firebase/config";
import { AuthContext } from "../../contextStore/AuthContext";
import { useHistory } from "react-router";
import GoLoading from "../Loading/GoLoading";
const Create = () => {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  let [name, setName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [description, setDescription] = useState("");
  let [image, setImage] = useState();
  let [loading,setLoading]=useState(false);

  const [userDetails, setUserDetails] = useState();
  const [adminDetails, setAdminDetails] = useState();
  const [adminDetails1, setAdminDetails1] = useState();

  useEffect(() => {
    let  userId  = (user.uid);
 
    
      console.log(user.uid)
  
      // console.log(user)
      Firebase.firestore()
        .collection("users")
        .where("id", "==", userId)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            setUserDetails(doc.data());
            // console.log(userDetails.region)
          });
        });
       
    
  });

  const handleSubmit = () => {

    // Firebase.firestore()
    //     .collection("Admin")
    //     .where("id", "==","xUxDL4u9fQMQ4MSI0eI2uQWW0vw2")
    //     .get()
    //     .then((res) => {
    //       res.forEach((doc) => {
    //         setAdminDetails(doc.data());
    //         console.log(adminDetails)
    //         setAdminDetails1(adminDetails.Profit+adminDetails.Price)
            
    //       });
    //     })
    //    ; 
 


    setLoading(true);
    let date = new Date().toDateString();
    // let { userId } = user.uid;

    Firebase.storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          Firebase.firestore()
            .collection("products")
            .add({
              name,
              category,
              price,
              description,
              url,
              userId: user.uid,
              createdAt: date,
              region: userDetails.region,
            })
            .then(() => {
              history.push("/");
            });
        });
      });
  };
  return (
    <Fragment>
      <Header />
    { loading && <GoLoading/> }
      <div className="centerDiv">
        <label>Name</label>
        <br />
        <input
          className="input"
          type="text"
          name="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Category:</label>
        <select
          name="Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="input"
        > <option >Select Category</option>
              <option value="Pothos">Pothos</option>
              <option value="snake plant">snake plant</option>
              <option value="Cacti">Cacti</option>
              <option value="Aloe vera">Aloe vera</option>
              <option value="Aglaonema">Aglaonema</option>
              <option value="Caladium">Caladium</option>
              <option value="Other">Other</option>
        </select>
        <br />
        <label>Price</label>
        <br />
        <input
          className="input"
          type="number"
          name="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <label>Description</label>
        <br />
        <input
          className="input"
          type="text"
          name="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />

        <br />
        <img
          alt="Posts"
          width="200px"
          height="200px"
          src={image ? URL.createObjectURL(image) : ""}
        ></img>

        <br />
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        <div className="charge">Charge Rs 20</div>
        <button className="uploadBtn" onClick={handleSubmit}>
          upload and Submit
        </button>
      </div> 
    </Fragment>

  );
};

export default Create;
// dropdown - region 