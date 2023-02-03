import React from 'react'
import Product from './Product'
import img1 from '../assets/images/home/img1.jpg'
import img2 from '../assets/images/home/img2.jpg'
import img3 from '../assets/images/home/img3.png'
import img4 from '../assets/images/home/img4.png'

const Home = () => {
  const imgproducts = [{img1:img1},{img2:img2},{img3:img3},{img4:img4}]
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imgproducts[0].img1} className="d-block w-100" alt="Iphone" height="530px"/>
          </div>
          <div className="carousel-item">
            <img src={imgproducts[1].img2} className="d-block w-100" alt="Iphone" height="530px"/>
          </div>
          <div className="carousel-item">
            <img src={imgproducts[2].img3} className="d-block w-100" alt="Iphone" height="530px"/>
          </div>
          <div className="carousel-item">
            <img src={imgproducts[3].img4} className="d-block w-100" alt="Iphone" height="530px"/>
          </div>
        </div>  
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product/>
    </div>
    
  )
}

export default Home