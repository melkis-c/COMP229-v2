import React, { useState } from 'react';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    qualification: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form Data:
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Mobile: ${formData.mobile}
Qualification: ${formData.qualification}`);
  };
  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      qualification: ''
    });
  };
  return (
    <div className="form-container">
    <div className="employee-form">
    <h2 class="form-title">Employee Registration Form</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="form-row">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="(Minimum 5 Char)"
            minLength={5}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="qualification-wrapper">
          <span>Qualification</span>
          <div className="radio-buttons">
            <label>
            <input
                type="radio"
                name="qualification"
                value="High School(10th)"
                onChange={handleChange}
            /> High School(10th)
        </label>
        <br />
        <label>
            <input
                type="radio"
                name="qualification"
                value="Higher School(12th)"
                onChange={handleChange}
            /> Higher School(12th)
        </label>
        <br />
        <label>
            <input
                type="radio"
                name="qualification"
                value="Graduation(Bachelors)"
                onChange={handleChange}
            /> Graduation(Bachelors)
        </label>
        <br />
        <label>
            <input
                type="radio"
                name="qualification"
                value="Post Graduation(Masters)"
                onChange={handleChange}
            /> Post Graduation(Masters)
        </label>
        <br />
        <label>
            <input
                type="radio"
                name="qualification"
                value="Other"
                onChange={handleChange}
            /> Other
        </label>
    </div>
</div>

<div class="button-container">
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" onClick={handleReset} />
</div>




        </form>
    </div>
  </div>
  );


}

export default EmployeeForm;