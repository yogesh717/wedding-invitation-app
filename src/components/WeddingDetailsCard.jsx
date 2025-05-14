// src/components/WeddingDetailsCard.js
import React, { useEffect, useState } from 'react';
import { useFormData } from '../context/FormDataContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const WeddingDetailsCard = ({ onNext, onBack, showOnlyCard, formKey }) => {
  const { formData, updateFormData } = useFormData();

  const defaultData = {
    ganesha: '॥ श्री गणेशाय नमः ॥',
    invitationLine: 'We request the honour of your presence on the occasion of the wedding celebrations of',
    groomName: 'Sanjay',
    groomGrandText: 'Grand Son of',
    groomGrandParents: 'Smt. Kalalaxmi & Sh. Sridharkumar Sajnani',
    groomSonText: 'Son of',
    groomParents: 'Smt. Subhakshi & Sh. Sumanthchandra Sajnani',
    andText: '&',
    brideName: 'Ranjini',
    brideGrandText: 'Grand Daughter of',
    brideGrandParents: 'Smt. Shubhlaxmi Devi & Sh. Madhan Rohira',
    brideDaughterText: 'Daughter of',
    brideParents: 'Smt. Anusha & Sh. Rajesh Rohira',
    date: '13th– 15th December 2024',
    location: 'Chandan Nagar, Mumbai'
  };

  const [localData, setLocalData] = useState(formData[formKey] || defaultData);

  // Sync localData to context only when it changes
  useEffect(() => {
    if (formData[formKey] !== localData) {
      updateFormData(formKey, localData);
    }
  }, [formKey, localData, updateFormData, formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to format label text from camelCase
  const formatLabel = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className={showOnlyCard ? "col-12 d-flex justify-content-center" : "col-md-8"}>
          <div className="card p-4 shadow invite-card" style={{
            width: '100%',
            minHeight: '850px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            fontFamily: "'Georgia', serif"
          }}>
            <div className="text-center fs-4 text-danger mb-3">{localData.ganesha}</div>
            <p className="text-center fs-5">{localData.invitationLine}</p>

            <h3 className="text-center text-uppercase mt-4">{localData.groomName}</h3>
            <p className="text-center fw-bold mb-1">{localData.groomGrandText}</p>
            <p className="text-center">{localData.groomGrandParents}</p>
            <p className="text-center fw-bold mb-1">{localData.groomSonText}</p>
            <p className="text-center">{localData.groomParents}</p>

            <h4 className="text-center my-4" style={{ fontSize: '2rem' }}>{localData.andText}</h4>

            <h3 className="text-center text-uppercase">{localData.brideName}</h3>
            <p className="text-center fw-bold mb-1">{localData.brideGrandText}</p>
            <p className="text-center">{localData.brideGrandParents}</p>
            <p className="text-center fw-bold mb-1">{localData.brideDaughterText}</p>
            <p className="text-center">{localData.brideParents}</p>

            <div className="text-center mt-4 fs-5">
              📅 <strong>{localData.date}</strong><br />
              📍 {localData.location}
            </div>
          </div>
        </div>

        {!showOnlyCard && (
          <div className="col-md-4 mt-4 mt-md-0">
            {Object.keys(localData).map((key) => (
              <div className="mb-3" key={key}>
                <label className="form-label text-capitalize">{formatLabel(key)}</label>
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

export default WeddingDetailsCard;
