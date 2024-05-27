import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


function Testimonial() {
    
    const sliderRef = useRef(null);
    let tx = 0;

     const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        
        sliderRef.current.style.transform = `translateX(${tx}%)`;
     }
     const sliderBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        sliderRef.current.style.transform = `translateX(${tx}%)`;
     }

  return (
    <div className='testimonials' id='testimonial'>
        <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
        <img src={back_icon} alt="" className="back-btn"onClick={sliderBackward} />
        <div className="slider">
            <ul ref={sliderRef}>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_1} alt="" />
                             <div>
                                <h3>Willam Jackson 1</h3>
                                <span>Edusity, USA</span>
                            </div>  
                        </div>
                        <p>Choosing to pursue my degree from edusity was one of the best decision i've ever made. The supportive community, state-of-the-art facilities, commitment to academic excellence has truely exceeded my expectations </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                             <div>
                                <h3>Willam Jackson 2</h3>
                                <span>Edusity, USA</span>
                            </div>  
                        </div>
                        <p>Choosing to pursue my degree from edusity was one of the best decision i've ever made. The supportive community, state-of-the-art facilities, commitment to academic excellence has truely exceeded my expectations </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_3} alt="" />
                             <div>
                                <h3>Willam Jackson 3</h3>
                                <span>Edusity, USA</span>
                            </div>  
                        </div>
                        <p>Choosing to pursue my degree from edusity was one of the best decision i've ever made. The supportive community, state-of-the-art facilities, commitment to academic excellence has truely exceeded my expectations </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_4} alt="" />
                             <div>
                                <h3>Willam Jackson 4</h3>
                                <span>Edusity, USA</span>
                            </div>  
                        </div>
                        <p>Choosing to pursue my degree from edusity was one of the best decision i've ever made. The supportive community, state-of-the-art facilities, commitment to academic excellence has truely exceeded my expectations </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial