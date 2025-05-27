import React, { useEffect, useState } from 'react';
import { useFormData } from '../context/FormDataContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const HaldiCeremonyCard = ({  onBack, onNext, showOnlyCard, formKey  }) => {
  const { formData, updateFormData } = useFormData();


  const defaultData = {
    title: 'Color Me Happy',
    subtitle: 'HALDI CEREMONY',
    day: '17',
    date: 'December 2024',
    time: '7 pm onwards',
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


  // Custom label mapping
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
    backgroundColor: '#fff8dc',
    textAlign: 'center',
    fontFamily: "'Georgia', serif"
  };
  

  return (
    <div className="container my-4">
           <div className="row justify-content-center">
        {/* Left: Preview */}
        <div className={showOnlyCard ? "col-12 d-flex justify-content-center" : "col-md-6 d-flex justify-content-center"}>
          <div className="shadow" style={previewCardStyle}>
          {/* <div className="card p-4 invite-preview text-center"> */}
            <h3 className="title">{localData.title}</h3>
            <h5 className="subtitle">{localData.subtitle}</h5>
            <h1 className="day">{localData.day}</h1>
            <p>{localData.date}</p>
            <p>{localData.time}</p>
            <p className="address">{localData.location}</p>
          </div>
        </div>

        {/* Right: Form */}
        {!showOnlyCard && (
          <div className="col-md-6">
            {Object.keys(localData).map((key) => (
              <div className="mb-3" key={key}>
                <label className="form-label text-capitalize">
                  {labelMapping[key] || key} {/* Using custom label mapping */}
                </label>
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

export default HaldiCeremonyCard;
