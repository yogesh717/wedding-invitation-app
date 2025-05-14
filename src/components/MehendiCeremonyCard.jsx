import React, { useEffect, useState } from 'react';
import { useFormData } from '../context/FormDataContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const MehendiCeremonyCard = ({ onBack, onNext, showOnlyCard, formKey }) => {
  const { formData, updateFormData } = useFormData();

  const defaultData = {
    title: 'Color Me Happy',
    subtitle: 'MEHENDI CEREMONY',
    day: '15',
    date: 'December 2024',
    time: '8 pm onwards',
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
    location: 'Location',
  };

  return (
    <div className="container my-4">
      <div className="row">
        {/* Left: Preview Card */}
        <div className="col-md-6">
          <div className="card p-4 invite-preview text-center">
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
              <button className="btn btn-success" onClick={onNext}>Next →</button> {/* Enable Next */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MehendiCeremonyCard;
