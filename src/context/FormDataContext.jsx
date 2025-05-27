// src/context/FormDataContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const FormDataContext = createContext();

// export const InvitationProvider = ({ children }) => {
//   const [formData, setFormData] = useState({});

//   // Load from sessionStorage on mount
//   useEffect(() => {
//     const storedData = sessionStorage.getItem('invitationFormData');
//     if (storedData) {
//       setFormData(JSON.parse(storedData));
//     }
//   }, []);

  // Sync to sessionStorage whenever formData changes
  // useEffect(() => {
  //   console.log("Syncing form data to sessionStorage:", formData); // Debugging line
  //   sessionStorage.setItem('invitationFormData', JSON.stringify(formData));
  // }, [formData]);

  // const updateFormData = (key, data) => {
  //   console.log("Updating form data:", key, data); // Debugging line
  //   setFormData(prev => ({
  //     ...prev,
  //     [key]: {
  //       ...prev[key],
  //       ...data,
  //     },
  //   }));
  // };


  export const InvitationProvider = ({ children }) => {
    const [formData, setFormData] = useState(() => {
      const stored = sessionStorage.getItem('invitationFormData');
      return stored ? JSON.parse(stored) : {};
    });
  
    useEffect(() => {
      sessionStorage.setItem('invitationFormData', JSON.stringify(formData));
    }, [formData]);
  
    const updateFormData = (key, data) => {
      setFormData(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          ...data,
        },
      }));
    };
  
    return (
      <FormDataContext.Provider value={{ formData, updateFormData }}>
        {children}
      </FormDataContext.Provider>
    );
  };
  

//   return (
//     <FormDataContext.Provider value={{ formData, updateFormData }}>
//       {children}
//     </FormDataContext.Provider>
//   );
// };

export const useFormData = () => useContext(FormDataContext);
