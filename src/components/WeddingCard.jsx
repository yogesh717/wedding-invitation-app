// src/components/WeddingCard.jsx
import React, { useState } from 'react';
import { useFormData } from '../context/FormDataContext';

const WeddingCard = ({ onNext, showOnlyCard, formKey }) => {
  const { formData, updateFormData } = useFormData();
  const savedData = formData[formKey] || {};

  const [initial1, setInitial1] = useState(savedData.initial1 || 'S');
  const [initial2, setInitial2] = useState(savedData.initial2 || 'R');
  const [coupleName, setCoupleName] = useState(savedData.coupleName || 'Sanjay & Ranjini');
  const [subtitle, setSubtitle] = useState(savedData.subtitle || 'ARE GETTING MARRIED!');

  const handleInputChange = (setter, key, format = (val) => val) => (e) => {
    const value = format(e.target.value);
    setter(value);
    updateFormData(formKey, {
      ...formData[formKey],
      [key]: value,
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className={showOnlyCard ? "col-12 d-flex justify-content-center" : "col-md-8 d-flex justify-content-center"}>
          <div style={cardStyle}>
            <div style={emojiStyle}>
              <div style={emojiTextStyle}>🌸💐🌸</div>
              <div style={emojiTextStyle}>🎋🎊🎋</div>
            </div>
            <div style={{ marginTop: '160px', fontSize: '36px', color: 'darkgreen' }}>
              🪷 {initial1} & {initial2} 🪷
            </div>

            <h2 style={{ marginTop: '40px', color: 'green' }}>{coupleName}</h2>
            <p style={{ fontSize: '20px', marginTop: '20px', color: '#555' }}>{subtitle}</p>
          </div>
        </div>

        {!showOnlyCard && (
          <div className="col-md-4 mt-4 mt-md-0">
            <div className="mb-3">
              <label>Initial 1</label>
              <input
                type="text"
                className="form-control"
                maxLength={1}
                value={initial1}
                onChange={handleInputChange(setInitial1, 'initial1', (val) => val.toUpperCase())}
              />
            </div>
            <div className="mb-3">
              <label>Initial 2</label>
              <input
                type="text"
                className="form-control"
                maxLength={1}
                value={initial2}
                onChange={handleInputChange(setInitial2, 'initial2', (val) => val.toUpperCase())}
              />
            </div>
            <div className="mb-3">
              <label>Couple Name</label>
              <input
                type="text"
                className="form-control"
                value={coupleName}
                onChange={handleInputChange(setCoupleName, 'coupleName')}
              />
            </div>
            <div className="mb-3">
              <label>Subtitle</label>
              <input
                type="text"
                className="form-control"
                value={subtitle}
                onChange={handleInputChange(setSubtitle, 'subtitle')}
              />
            </div>

            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-outline-secondary" disabled>← Back</button>
              <button className="btn btn-danger" onClick={onNext}>Next →</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const cardStyle = {
  width: '600px',
  height: '850px',
  border: '2px solid #ccc',
  borderRadius: '20px',
  background: 'linear-gradient(to bottom, #e0f7fa, #fff)',
  padding: '40px 20px',
  fontFamily: 'cursive',
  textAlign: 'center',
  position: 'relative',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const emojiStyle = {
  position: 'absolute',
  top: 20,
  left: 20,
};

const emojiTextStyle = {
  fontSize: '24px',
};

export default WeddingCard;




// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';



// const WeddingCard = ({ onNext ,showOnlyCard}) => {
//   const [initial1, setInitial1] = useState('S');
//   const [initial2, setInitial2] = useState('R');
//   const [coupleName, setCoupleName] = useState('Sanjay & Ranjini');
//   const [subtitle, setSubtitle] = useState('ARE GETTING MARRIED!');

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {/* Preview Card */}
//         <div className="col-md-6 d-flex justify-content-center" >
//           <div
//             style={{
//               width: '300px',
//               height: '520px',
//               border: '2px solid #ccc',
//               borderRadius: '15px',
//               background: 'linear-gradient(to bottom, #e0f7fa, #fff)',
//               position: 'relative',
//               padding: '20px',
//               fontFamily: 'cursive',
//               textAlign: 'center',
//               overflow: 'hidden'
//             }}
//           >
//             {/* Top Garlands */}
//             <div style={{ position: 'absolute', top: 10, left: 10 }}>
//               <div>🌸💐🌸</div>
//               <div>🎋🎊🎋</div>
//             </div>
//             <div style={{ position: 'absolute', top: 10, right: 10 }}>
//               <div>🌸💐🌸</div>
//               <div>🎋🎊🎋</div>
//             </div>

//             {/* Monogram */}
//             <div style={{ marginTop: '120px', fontSize: '28px', color: 'darkgreen' }}>
//               🪷 {initial1} & {initial2} 🪷
//             </div>

//             {/* Couple Name */}
//             <h4 style={{ marginTop: '30px', color: 'green' }}>{coupleName}</h4>

//             {/* Subtitle */}
//             <p style={{ fontSize: '14px', marginTop: '10px', color: '#555' }}>{subtitle}</p>
//           </div>
//         </div>

//         {/* Form Inputs */}
//         {!showOnlyCard && (
//         <div className="col-md-6">
//           <div className="mb-3">
//             <label>Initial 1</label>
//             <input type="text" className="form-control" maxLength={1} value={initial1} onChange={(e) => setInitial1(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label>Initial 2</label>
//             <input type="text" className="form-control" maxLength={1} value={initial2} onChange={(e) => setInitial2(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label>Couple Name</label>
//             <input type="text" className="form-control" value={coupleName} onChange={(e) => setCoupleName(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label>Subtitle</label>
//             <input type="text" className="form-control" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
//           </div>

//           <div className="d-flex justify-content-between mt-4">
//             <button className="btn btn-outline-secondary" disabled>← Back</button>
//             {/* <button className="btn btn-outline-primary">👁️ Preview</button> */}
//             <button className="btn btn-danger" onClick={onNext}>Next →</button>
//           </div>
//         </div>
//          )}
//       </div>
//     </div>
//   );
// };

// export default WeddingCard;



// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const WeddingCard = ({ onNext }) => {
//   const [initial1, setInitial1] = useState('S');
//   const [initial2, setInitial2] = useState('R');
//   const [coupleName, setCoupleName] = useState('Sanjay & Ranjini');
//   const [subtitle, setSubtitle] = useState('ARE GETTING MARRIED!');

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {/* Preview Card */}
//         <div className="col-md-6 d-flex justify-content-center">
//           <div
//             style={{
//               width: '300px',
//               height: '520px',
//               border: '2px solid #ccc',
//               borderRadius: '15px',
//               background: 'linear-gradient(to bottom, #e0f7fa, #fff)',
//               position: 'relative',
//               padding: '20px',
//               fontFamily: 'cursive',
//               textAlign: 'center',
//               overflow: 'hidden'
//             }}
//           >
//             {/* Top Garlands */}
//             <div style={{ position: 'absolute', top: 10, left: 10 }}>
//               <div>🌸💐🌸</div>
//               <div>🎋🎊🎋</div>
//             </div>
//             <div style={{ position: 'absolute', top: 10, right: 10 }}>
//               <div>🌸💐🌸</div>
//               <div>🎋🎊🎋</div>
//             </div>

//             {/* Monogram */}
//             <div style={{ marginTop: '120px', fontSize: '28px', color: 'darkgreen' }}>
//               🪷 {initial1} & {initial2} 🪷
//             </div>

//             {/* Couple Name */}
//             <h4 style={{ marginTop: '30px', color: 'green' }}>{coupleName}</h4>

//             {/* Subtitle */}
//             <p style={{ fontSize: '14px', marginTop: '10px', color: '#555' }}>{subtitle}</p>
//           </div>
//         </div>

//         {/* Form Inputs */}
//         <div className="col-md-6">
//           <div className="mb-3">
//             <label>Initial 1</label>
//             <input type="text" className="form-control" maxLength={1} value={initial1} onChange={(e) => setInitial1(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label>Initial 2</label>
//             <input type="text" className="form-control" maxLength={1} value={initial2} onChange={(e) => setInitial2(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label>Couple Name</label>
//             <input type="text" className="form-control" value={coupleName} onChange={(e) => setCoupleName(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label>Subtitle</label>
//             <input type="text" className="form-control" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
//           </div>

//           <div className="d-flex justify-content-between mt-4">
//             <button className="btn btn-outline-secondary">← Back</button>
//             <button className="btn btn-outline-primary">👁️ Preview</button>
//             <button className="btn btn-danger">Next →</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeddingCard;
