import React from 'react';
import './index.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comment: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', this.state);
    // You can send the data to an API, update state, or perform other actions here.
  };

  render() {
    return (
      <div className="container ">
        <div className='testi'>
       <h1><b>Contact US</b></h1></div>
        <div className="row">
          <div className="col-lg-6">
            <h2>Contact Us</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  className="form-control"
                  required/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="form-control"
                  required/>
              </div>
              <div className="form-group">
                <label htmlFor="comment">Comment:</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={this.state.comment}
                  onChange={this.handleChange}
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className=" button8">
                Submit
              </button>
              </form>
              </div>
              <div className="col-lg-6">
              <div className="row">
                <iframe title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-71.123456!3d42.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDLCsDIwJzE3LjQiTiA3McKwNTYnMzYuMCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                ></iframe>
                </div>
                </div>
            </div>
        </div>

    );
  }
}

export default Contact;

