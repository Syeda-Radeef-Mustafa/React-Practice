import React, { useState } from "react";
import './index.css';
import Map from "../../component/map";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
       <div class="col-lg-12">
      <div className='test7'>
       <h1><b>Contact Us</b></h1></div>
      <div className="row">
        <div className="col-lg-6">
          <form className='contact' onSubmit={handleSubmit}>
            <input
              className='contact'
              type="text"
              id="name-contact"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
            <div className="space">
              <input
                className='contact'
                type="email"
                id="email-contact"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleInputChange}/>
            </div>
            <div className="space">
              <input
                className='contact'
                type="tel"
                id="phone-contact"
                name="phone"
                placeholder="Phone No"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="space">
              <textarea
                className='contact'
                id="comments-contact"
                name="comments"
                placeholder="Comments"
                rows="4"
                cols="50"
                value={formData.comments}
                onChange={handleInputChange}
              />
            </div>
            <div className="button-space">
              <input
                className='contact'
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <div className="form-map">
          <Map/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
