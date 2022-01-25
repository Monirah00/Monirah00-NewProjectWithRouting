import React from 'react'
import Hoc from './Hocs/Hoc'
import Aboutpic from '../Images/About-pic.jpg'
import AnotherAbout from '../AnotherAbout/AnotherAbout'

const About = () => {
    return (
        <div>
           <section>
               <div className="container">
                   <div className="About">
                       <h4>About Me</h4>
                       <hr className='hr' />
                   </div>
                   <div className="row">
                       <div className="col-lg-6 col-sm-12">
                           <img className='About-img' src={Aboutpic} alt="Aboutpic" />
                       </div>
                       <div className="col-lg-6 col-sm-12">
                           <div className="About-content">
                               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci perferendis libero quidem labore doloremque necessitatibus qui quod sequi cupiditate quaerat nihil quae cumque odit veritatis ipsam, laudantium ducimus tempore. Velit, inventore repellendus! Libero consequatur praesentium soluta nobis laborum quisquam ad dolores impedit vitae at voluptatibus ipsam, cupiditate similique sapiente qui totam amet excepturi inventore voluptates! Qui placeat minus quibusdam debitis minima, rerum quos et officia perspiciatis aliquam, enim dicta eaque voluptate deserunt soluta nam molestias! Voluptas dolorem voluptatem laudantium, nulla iure non? Reiciendis nam eligendi perferendis eveniet commodi. Rem quo provident eaque labore quisquam libero explicabo saepe aspernatur velit?</p>
                           </div>
                       </div>
                   </div>
               </div>
               <AnotherAbout />
           </section>
        </div>
    )
}

export default Hoc(About)
