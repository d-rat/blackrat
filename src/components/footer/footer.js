import React from "react"
import "./footer.css"
import Facebook from "../../images/facebook.svg"
import Instagram from "../../images/instagram.svg"
import Twitter from "../../images/twitter.svg"
import Github from "../../images/github-octocat.svg"
import Linkedin from "../../images/linkedin.svg"

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <h2>BLACKRAT</h2>
          <h3>A company for innovative future!</h3>
        </div>
        <div className="footer-socials">
          <a href="#" className="social-link">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="#" className="social-link">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="#" className="social-link">
            <img src={Twitter} alt="twitter" />
          </a>
          <a href="#" className="social-link">
            <img src={Linkedin} alt="linkedin" />
          </a>
          <a href="#" className="social-link">
            <img src={Github} alt="github" />
          </a>
        </div>
      </div>
      <h2>BLACKRAT @copyright 2021</h2>
    </footer>
  )
}

export default Footer
