import React from "react"
import "./hero.css"
import Icon from "../../images/hero.svg"

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>Elegent websites for everyone!</h2>
        <p>
          Hire us and forget your worries about a professional responsive
          website that works for you.
        </p>
      </div>
      <img src={Icon} alt="hero" />
    </div>
  )
}

export default Hero
