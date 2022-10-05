import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../flora.png";
import "./Signup.css";
import { Firebase } from "../../firebase/config";
import { useHistory } from "react-router";
import SignUpLoading from "../Loading/SignUpLoading";

export default function Signup() {
  const history = useHistory();
  let [region, setRegion] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let [loading,setLoading]=useState(false)
  
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: name }).then(() => {
          Firebase.firestore().collection("users").doc(result.user.uid).set({
            id: result.user.uid,
            name: name,
            phone: phone,
            region: region,
          });
        });
      })
      .then(() => {
        history.push("/login");
      });
  };
  return (<>
    {loading && <SignUpLoading/> } <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
          <br />
          <label>Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <br />
          <label>Category:</label>
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
        <br/>
          <label>Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </div> 
    </>
  );

}
