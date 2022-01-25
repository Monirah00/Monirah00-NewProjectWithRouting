import React,{useState,useEffect} from "react";
import Hoc from "./Hocs/Hoc";
import Data from "./Data/Sdata";
import AnotherHome from "../AnotherHome/AnotherHome";
import SecondAnotherPages from "../AnotherHome/SecondAnotherPages";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
const [state] = useState({
    Header:'My Web Skill',
    Para:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendi at dignissimos perferendis? Saepe nemo eaque molestiae enim quosrepellendus, iure ea aut magni vero ut atque quod repudiandae et ullam eveniet provident culpa consequatur quia maiores! Sunt facerquis id Quisquam omnis aspernatur iure quibusdam perspiciatis    temporibus doloremque assumenda totam?'
})
useEffect(() => {
 Aos.init()
},)
  return (
    <div>
      <div className="container">  
        <div className="col-sm-12 Head-section">
          <h3>{state.Header}</h3>
          <hr className="hr" />
          <p>{state.Para}</p>
        </div>
        <div className="row">
          {Data.CardData.map((item, index) => {
            return (
              <>
                <div className="col-lg-4 col-sm-6 " key={index}  data-aos='fade-up'>
                  <div className="Card">
                      <h5 className="icon"  data-aos='fade-down'>{item.icon}</h5 >
                  <h4  data-aos='fade-left'>{item.Title}</h4>
                    <p  data-aos='fade-right'>{item.Desc}</p>
                  </div>                
                </div>
              </>
            );
          })}
        </div>
        <AnotherHome /> 
        
      </div>
      <SecondAnotherPages />
    </div>
  );
};

export default Hoc(Home);
