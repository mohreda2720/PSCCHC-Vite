import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreeTerms: true // Defaulting to true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };

  return (
    <section>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-7 mx-auto d-flex justify-content-center flex-column">
            <form role="form" id="contact-form" onSubmit={handleSubmit} autoComplete="off">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-group input-group-dynamic mb-4">
                      <label className="form-label">First Name</label>
                      <div className="w-100"></div>

                      <input className="form-control" aria-label="First Name..." type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-md-6 ps-2">
                    <div className="input-group input-group-dynamic">
                      <label className="form-label">Last Name</label>
                      <div className="w-100"></div>

                      <input type="text" className="form-control" placeholder="" aria-label="Last Name..." name="lastName" value={formData.lastName} onChange={handleChange} />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="input-group input-group-dynamic">
                    <label className="form-label">Email Address</label>
                    <div className="w-100"></div>

                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="input-group mb-4 input-group-static">
                  <label>Your message</label>
                  <div className="w-100"></div>

                  <textarea name="message" className="form-control" id="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-check form-switch mb-4 d-flex align-items-center">
                    
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
                      <label className="form-check-label ms-3 mb-0" htmlFor="flexSwitchCheckDefault">I agree to the <a href="javascript:;" className="text-dark"><u>Terms and Conditions</u></a>.</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="btn bg-dark text-white w-100">Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
