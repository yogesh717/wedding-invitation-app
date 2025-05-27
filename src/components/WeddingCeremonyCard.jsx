import React, { useEffect, useState } from 'react';
import { useFormData } from '../context/FormDataContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const WeddingCeremonyCard = ({ onBack, onNext, showOnlyCard, formKey }) => {
  const { formData, updateFormData } = useFormData();

  const defaultData = {
    title: 'Happy Ever After',
    subtitle: 'WEDDING CEREMONY',
    day: '18',
    date: 'December 2024',
    sehrabandi: 'Sehrabandhi: 4 pm',
    jaimala: 'Jaimala: 6 pm',
    pheras: 'Pheras: 8 pm',
    location: 'Near - Dev Ganesh Apartment Chenpur - Godrej Garden City Road'
  }

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

  // Custom label mapping for user-friendly labels
  const labelMapping = {
    title: 'Event Title',
    subtitle: 'Event Subtitle',
    day: 'Day',
    date: 'Date',
    sehrabandi: 'Sehrabandhi Time',
    jaimala: 'Jaimala Time',
    pheras: 'Pheras Time',
    location: 'Location'
  };


    // Custom preview card style
    const previewCardStyle = {
      width: '600px',
      height: '850px',
      border: '1px solid #ccc',
      borderRadius: '20px',
      padding: '40px',
      backgroundColor: '#fff8dc',
      textAlign: 'center',
      fontFamily: "'Georgia', serif",
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      fontSize: '18px'
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
            <p>{localData.sehrabandi}</p>
            <p>{localData.jaimala}</p>
            <p>{localData.pheras}</p>
            <p className="address">{localData.location}</p>
          </div>
        </div>

        {/* Right: Editable Form */}
        {!showOnlyCard && (
          <div className="col-md-6">
            {Object.keys(localData).map((key) => (
              <div className="mb-3" key={key}>
                <label className="form-label text-capitalize">
                  {labelMapping[key] || key} {/* Use custom label mapping */}
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
                disabled={!localData.title || !localData.subtitle || !localData.location || !localData.sehrabandi || !localData.jaimala || !localData.pheras}
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

export default WeddingCeremonyCard;
