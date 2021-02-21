import React from "react"
import "./services.css"
import ServiceCard from "../service-card/serviceCard"
import webDesign from "../../images/web-design.png"
import webDevelopment from "../../images/web-development.png"
import webOptimization from "../../images/web-optimization.png"

function Services() {
  return (
    <>
      <h2 className="services-heading">SERVICES</h2>
      <div className="services">
        <ServiceCard
          service="web design"
          imgUrl={webDesign}
          description="  We design websites and also redesign existing websites. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque
                minus iste veritatis provident at."
        />
        <ServiceCard
          service="web development"
          imgUrl={webDevelopment}
          description="   We make your designs possible by coding them in your website.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at."
        />
        <ServiceCard
          service="web optimization"
          imgUrl={webOptimization}
          description="   We optimize your existing websites and make it faster and
              smoother. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque
                minus iste veritatis provident at."
        />
      </div>
    </>
  )
}

export default Services
