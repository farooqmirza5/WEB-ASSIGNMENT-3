import React from 'react'
import { useState, useEffect } from "react";
import "./form.css";
import "./styles.css";

function Contact(){

  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.ph) {
      errors.ph = "Phone No is required!";
    } else if (values.ph.length < 4) {
      errors.phone= "Phone No must be more than 4 characters";
    } else if (values.ph.length > 10) {
      errors.ph = "Phone No cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container row rows-col-auto w-4">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
         alert("Thankyou for contacting me!")
      ) : (
        <pre></pre>
      )}

<div className="google-map-code col-lg-6 m-3">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57893.15601095933!2d67.05638584236124!3d24.9210897103269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1655987266787!5m2!1sen!2s" width="600" height="450" ></iframe>

        </div>

      <form onSubmit={handleSubmit} className="col-lg-6">
      <h1 class="text-center">Contact Me</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" class="form-control" name="username" placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input type="text" class="form-control" name="email" placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Phone No:</label>
            <input type="number" class="form-control" name="ph" placeholder="Phone No:"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.ph}</p>

          <button className=" button">Submit</button>
          
        </div>
      </form>
    </div>
    
  );
}
export default Contact