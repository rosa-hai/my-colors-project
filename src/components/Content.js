import { SApp, SContent } from "../styles/styles";
import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../images/plant-1.svg";
import { Palette } from "react-palette";
import { Background } from "./svgs";

const Content = ({ image, setImage, load, setLoad }) => {
  // const [colors, setColors] = useState({});

  const fetchImage = async () => {
    setLoad(true);
    let key = "zTj4L2G_eGcmhfhl4HsU9HCiqgnZV574JpOjS8hNfps";
    let url = "https://api.unsplash.com/photos/random/?client_id=" + key;
    url += "&orientation=portrait";
    let url_un = "https://picsum.photos/700/800";

    await fetch(url_un)
      .then((data) => {
        setImage(data.url);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    setLoad(false);
  };
  console.log(image);
  useEffect(() => {
    fetchImage();
  }, []);
  const dataHandler = (data) => {
    // setColors(data);
  };
  return (
    <>
      <Palette src={image || "https://picsum.photos/700/800"}>
        {({ data, loading, error }) => {
          console.log(data);
          return (
            <SContent
              vibrantColor={data.vibrant}
              mutedColor={data.lightVibrant}
              darkVibrantColor={data.darkVibrant}
              darkMutedColor={data.darkMuted}
            >
              {data && (
                <div className="background">
                  <Background color={data.vibrant} />
                </div>
              )}
              <div className="text">
                <nav>
                  <ul>
                    <li className="logo">
                      <Logo />
                      <span>Colors</span>
                    </li>
                    <li />
                    <li />
                  </ul>
                </nav>
                <h1>
                  <span>{data.vibrant}</span>
                  {console.log(data.vibrant)}
                  <br />
                  Colors <br />
                  <span className="title">Project</span>
                </h1>
                <p>
                  Petit projet visant à tester certaines fonctionnalités de
                  différentes lirairires React. <br />
                  Un petit LoremIpsum? <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo, qui.
                </p>
                <div className="new-image" onClick={fetchImage}>
                  Charger une nouvelle image?
                  <div className="contour" />
                </div>
              </div>

              {/*<div style={{ color: colors.vibrant }}>Text with the vibrant color</div>*/}
            </SContent>
          );
        }}
      </Palette>
    </>
  );
};
export default Content;
