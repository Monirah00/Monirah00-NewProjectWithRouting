import React, { useState } from "react";
import Data2 from "../Data2/Data2";

const AnotherAbout = () => {
  const [state] = useState({
    Header: "Our Futures Service",
    para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque   porro atque, facere nemo fugit ab quos, praesentium, veniam obcaecati tenetur tempora perspiciatis ad assumenda vero eos aliquid  repudiandae. Quisquam, voluptate.",
  });

  return (
    <div>
      <div className="AnotherAbout">
        <div className="col-lg-12 col-sm-12">
          <h4 className="AboutHeader">{state.Header}</h4>
          <hr className="hr2" />
          <p className="text-center">{state.para}</p>
        </div>
        <div className="row">
          {Data2.CardData2.map((item, index) => {
            return (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="Card">
                  <h4>{item.Title}</h4>
                  <p>{item.Desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnotherAbout;
