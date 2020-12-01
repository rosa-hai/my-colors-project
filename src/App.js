import "./App.css";
import React, { useState } from "react";
import Content from "./components/Content";
import { SApp } from "./styles/styles";
import Loader from "./components/Loader";

function App() {
  const [image, setImage] = useState("");
  const [load, setLoad] = useState(true);
  return (
    <SApp>
      <Content
        image={image}
        setImage={setImage}
        load={load}
        setLoad={setLoad}
      />
      <div className="image">
        {load ? <Loader /> : <img src={image && image} alt="random" />}
      </div>
    </SApp>
  );
}

export default App;
