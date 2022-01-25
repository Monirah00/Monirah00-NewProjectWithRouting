import React,{useState,useEffect} from 'react'
import Hoc from './Hocs/Hoc'
import Data3 from '../OurData/Data3'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {

    const [state] = useState({
        Header:'Our Service',
        Para:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendi at dignissimos perferendis? Saepe nemo eaque molestiae enim quosrepellendus, iure ea aut magni vero ut atque quod repudiandae et ullam eveniet provident culpa consequatur quia maiores! Sunt facerquis id Quisquam omnis aspernatur iure quibusdam perspiciatis    temporibus doloremque assumenda totam?'
    })

    useEffect(() => {
     Aos.init()
    }, )
    return (
        <div>
            <div className="container">
                <div className="col-sm-12 Head-section">
                    <h3>{state.Header}</h3>
                    <hr />
                    <p>{state.Para}</p>
                </div>

                <div className="row">
                   {
                       Data3.CardData3.map((item,index) => {
                           return(
                            <div className="col-lg-4 col-sm-6"key={index}>
                            <div className="Card" data-aos='fade-up'>
                                <h4 data-aos='fade-down'>{item.Title}</h4>
                                <p data-aos='fade-left'>{item.Desc}</p>
                            </div>
                        </div>
                           )
                       })
                   }
                    
                </div>
            </div>
        </div>
    )
}

export default Hoc(Services)
