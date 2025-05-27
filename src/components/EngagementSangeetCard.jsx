import React, { useEffect, useState } from 'react';
import { useFormData } from '../context/FormDataContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const EngagementSangeetCard = ({ onBack, onNext, showOnlyCard, formKey }) => {
   const { formData, updateFormData } = useFormData();
   
     const defaultData = {
      title: 'A Harry Night',
      subtitle: 'ENGAGEMENT & SANGEET',
      day: '16',
      date: 'December 2024',
      time: '6 pm onwards',
      location: 'Near - Dev Ganesh Apartment Chenpur - Godrej Garden City Road'
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
    title: 'Event Title',
    subtitle: 'Event Subtitle',
    day: 'Day',
    date: 'Date',
    time: 'Time',
    location: 'Location'
  };

  // const isFormValid = Object.values(localData).every((val) => val && val.trim() !== '');

  const previewCardStyle = {
    width: '600px',
    height: '850px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    padding: '40px',
    backgroundColor: '#fffaf0',
    textAlign: 'center',
    fontFamily: "'Georgia', serif"
  };


  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {/* Preview Card */}
        <div className={showOnlyCard ? "col-12 d-flex justify-content-center" : "col-md-6 d-flex justify-content-center"}>
        <div className="shadow" style={previewCardStyle}>
            <h2 className="text-uppercase mb-3" style={{ color: '#b22222' }}>{localData.title}</h2>
            <h4 className="text-muted mb-5">{localData.subtitle}</h4>
            <div style={{ fontSize: '72px', fontWeight: 'bold', color: '#d2691e' }}>{localData.day}</div>
            <p className="mt-3" style={{ fontSize: '20px' }}>{localData.date}</p>
            <p style={{ fontSize: '18px' }}>{localData.time}</p>
            <hr style={{ width: '60%', margin: '20px auto' }} />
            <p className="mt-4 px-3" style={{ fontSize: '16px', color: '#444' }}>
              📍 {localData.location}
            </p>
          </div>
        </div>

        {/* Input Form */}
        {!showOnlyCard && (
          <div className="col-md-6 mt-4 mt-md-0">
            {Object.keys(localData).map((key) => (
              <div className="mb-3" key={key}>
                <label className="form-label text-capitalize">{labelMapping[key] || key}</label> {/* Custom labels */}
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
              <button
                className="btn btn-success"
                onClick={onNext}
                disabled={!localData.title || !localData.subtitle || !localData.day || !localData.location}  
              >
                Next → 
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EngagementSangeetCard;
