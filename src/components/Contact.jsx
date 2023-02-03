import React from 'react'
import image from "../assets/images/contact.png"

const Contact = () => {
  const imgcontact =[{img:image}]
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have some Question ?</h1>
            <hr />
          </div>
          <div className="row">
            <div className="col-md 5 d-flex justify-content-center">
              <img src={imgcontact[0].img} alt="Contact Us" height="300px" width="450px" />
            </div>
            <div className='col-md-6'>
              <form action="">
                <div className="mb-3">
                  <label htmlFor="exampleForm" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="exampleForm" placeholder="Name"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">Send Message</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact