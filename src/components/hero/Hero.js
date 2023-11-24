import React from 'react';
import './Hero.css';
import HeroImg from "../../assets/phone.svg"


const Hero = ({ myTheme }) => {
  return (
   <section className="hero" data-theme={myTheme}>
    <div className="container --grid-15">
      <div className="hero-text">
        <h1>Visit Villa Shop Landing Page.</h1>
        <p>Lorem ispum dolor sit emet consectetur adipisicing alit. cilpa perferendis eveniet animi in, voluptas cumque its sisu recanding illo incident?</p>
        <div className="--flex-start">
          <button className="--btn --btn-p">Learn More</button>
          <button className="--btn --btn-danger">Sign Up</button>
        </div>
      </div>
      <div className="hero-img --text-center">
       <img src={HeroImg} alt="Hero Img" width={200} />
      </div>
    </div>
   </section>
  )
}

export default Hero