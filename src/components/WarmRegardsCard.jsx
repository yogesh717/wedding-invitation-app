import React, { useEffect, useState } from 'react';
import { useFormData } from '../context/FormDataContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const WarmRegardsCard = ({ onBack, onNext, showOnlyCard, formKey }) => {
  const { formData, updateFormData } = useFormData();


  
  const defaultData = {
    greeting: 'Warm Regards',
    family1: 'RANJANI FAMILY',
    family2: 'SANJAY FAMILY',
    message: 'Looking forward to celebrating with you!'
  };

  // Initialize local data based on context or default values
   const [localData, setLocalData] = useState(formData[formKey] || defaultData);
 
   // Sync the form data with the context whenever localData changes
   useEffect(() => {
     if (formData[formKey] !== localData) {
       updateFormData(formKey, localData);
     }
   }, [formKey, localData, updateFormData, formData]);
 
   const handleChange = (e) => {
     const { name, value } = e.target;
     setLocalData((prev) => ({
       ...prev,
       [name]: value,
     }));
   };
 
   // Custom label mapping to improve form field names
   const labelMapping = {
    greeting: 'Greeting',
    family1: 'Family1',
    family2: 'Family2',
    message: 'Message',
   };
 

  return (
    <div className="container my-4">
      <div className="row">
        {/* Left: Preview */}
        <div className="col-md-6" >
          <div className="card p-4 invite-preview text-center">
            <h4 className="greeting">{localData.greeting}</h4>
            <h5 className="family">{localData.family1}</h5>
            <h5 className="family">{localData.family2}</h5>
            <p className="message mt-3">{localData.message}</p>
          </div>
        </div>

        {/* Right: Input Form */}
        {!showOnlyCard && (
        <div className="col-md-6">
          {Object.keys(localData).map((key) => (
            <div className="mb-3" key={key}>
               <label>{labelMapping[key] || key}</label> {/* Use custom labels */}
              <input
                type="text"
                name={key}
                className="form-control"
                value={localData[key]}
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-outline-secondary" onClick={onBack}>← Back</button>
            <button className="btn btn-success" onClick={onNext}>Next →</button>
            
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default WarmRegardsCard;
