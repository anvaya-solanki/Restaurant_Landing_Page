import React, { useState } from 'react';

const Contact = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      //onSubmit(inputValue);  //This does not work together
      alert(`Email recorded`);
    } else {
      alert('Please enter some text before submitting.');
    }
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container"><form>
        <input type="email" value={inputValue} onChange={handleInputChange} placeholder="yourmail@gmail.com" /><br /><br />
        <button onClick={handleSubmit} className="secondary-button">Submit</button></form>
      </div>
    </div>
  );
};

export default Contact;