import React from "react"
import "./serviceCard.css"

function ServiceCard({ service, description, imgUrl }) {
  return (
    <div class="services-card">
      <div class="service-face service-face1">
        <div class="service-content">
          <img src={imgUrl} alt={service} />
          <h3>{service}</h3>
        </div>
      </div>
      <div class="service-face service-face2">
        <div class="service-content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
export default ServiceCard
