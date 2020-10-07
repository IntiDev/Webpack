import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader";
import logo from "../images/platzi.png";
import video from "../video/que-es-core.mp4";
import "../less/styles.less";
import "../sass/styles.scss";
import "../stylus/styles.styl";

function App() {
  const [loaderList, setLoaderList] = useState([]);

  function handleClick() {
    setLoaderList(data.loaders);
  }

  return (
    <div>
      App con React
      <p className="sass">
          Sass
      </p>
      <p className="less">
          Less
      </p>
      <p className="stylus">
          Stylus
      </p>
      <br />
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img src={logo} alt="" width={40} />
      </p>
      <ul>
        {/* loaderList.map(item => <Loader data={item} key={item.id} /> ) */}
        {
          loaderList.map((item) => (
            <Loader {...item} key={item.id} />
          )) //Usando spread operator
        }
      </ul>
      <button onClick={handleClick}> Click!</button>
    </div>
  );
}

export default App;
