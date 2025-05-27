// src/components/DownloadPDFButton.jsx
import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';

import WeddingCard from './WeddingCard';
import WeddingDetailsCard from './WeddingDetailsCard';
import MehendiCeremonyCard from './MehendiCeremonyCard';
import EngagementSangeetCard from './EngagementSangeetCard';
import HaldiCeremonyCard from './HaldiCeremonyCard';
import WeddingCeremonyCard from './WeddingCeremonyCard';
import ReceptionCard from './ReceptionCard';
import WarmRegardsCard from './WarmRegardsCard';
import { InvitationProvider } from '../context/FormDataContext';

const componentList = [
  WeddingCard,
  WeddingDetailsCard,
  MehendiCeremonyCard,
  EngagementSangeetCard,
  HaldiCeremonyCard,
  WeddingCeremonyCard,
  ReceptionCard,
  WarmRegardsCard,
];

const formKeys = [
  'weddingCard',
  'weddingDetailsCard',
  'mehendiCard',
  'engagementCard',
  'haldiCard',
  'weddingCeremonyCard',
  'receptionCard',
  'warmRegardsCard',
];

const DownloadPDFButton = ({ onBack }) => {
  const navigate = useNavigate();

  const exportToPDF = async () => {
    const images = [];

    for (let i = 0; i < componentList.length; i++) {
      const Component = componentList[i];
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '0';
      container.style.width = '1000px';
      container.style.background = 'white';
      document.body.appendChild(container);

      const root = ReactDOM.createRoot(container);
      root.render(
        <InvitationProvider>
          <Component showOnlyCard={true} formKey={formKeys[i]} />
        </InvitationProvider>
      );

      await new Promise((res) => setTimeout(res, 1500));

      const canvas = await html2canvas(container, {
        backgroundColor: '#ffffff',
        useCORS: true,
        scale: 2,
      });

      const imgData = canvas.toDataURL('image/png');
      const pxToMm = 0.264583;
      const imgWidthMm = canvas.width * pxToMm;
      const imgHeightMm = canvas.height * pxToMm;

      images.push({
        data: imgData,
        width: imgWidthMm,
        height: imgHeightMm,
      });

      root.unmount();
      document.body.removeChild(container);
    }

    let pdf;
    images.forEach((img, index) => {
      if (index === 0) {
        pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: [img.width, img.height],
        });
      } else {
        pdf.addPage([img.width, img.height]);
      }
      pdf.addImage(img.data, 'PNG', 0, 0, img.width, img.height);
    });

    pdf.save('wedding-invitation.pdf');
  };

  return (
    <div className="text-center mt-4 d-flex justify-content-center gap-3 flex-wrap">
      {onBack && <button onClick={onBack} className="btn btn-warning">← Back</button>}
      <button onClick={() => navigate('/preview')} className="btn btn-info">👁️ Preview Fullscreen</button>
      <button onClick={exportToPDF} className="btn btn-success">📄 Download PDF</button>
    </div>
  );
};

export default DownloadPDFButton;







// // DownloadPDFButton.jsx
// import React from 'react';
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';
// import ReactDOM from 'react-dom/client';

// import WeddingCard from './WeddingCard';
// import WeddingDetailsCard from './WeddingDetailsCard';
// import MehendiCeremonyCard from './MehendiCeremonyCard';
// import EngagementSangeetCard from './EngagementSangeetCard';
// import HaldiCeremonyCard from './HaldiCeremonyCard';
// import WeddingCeremonyCard from './WeddingCeremonyCard';
// import ReceptionCard from './ReceptionCard';
// import WarmRegardsCard from './WarmRegardsCard';
// import { InvitationProvider } from '../context/FormDataContext';

// const componentList = [
//   WeddingCard,
//   WeddingDetailsCard,
//   MehendiCeremonyCard,
//   EngagementSangeetCard,
//   HaldiCeremonyCard,
//   WeddingCeremonyCard,
//   ReceptionCard,
//   WarmRegardsCard,
// ];

// const DownloadPDFButton = () => {
//   const exportToPDF = async () => {
//     const images = [];

//     for (let i = 0; i < componentList.length; i++) {
//       const Component = componentList[i];
//       const container = document.createElement('div');
//       container.style.position = 'absolute';
//       container.style.left = '-9999px';
//       container.style.top = '0';
//       container.style.width = '1000px'; // high-res width
//       container.style.background = 'white';
//       container.style.padding = '0';
//       container.style.margin = '0';
//       document.body.appendChild(container);

//       const root = ReactDOM.createRoot(container);
//       root.render(
//         <InvitationProvider>
//           <Component showOnlyCard={true} formKey={`step${i}`} />
//         </InvitationProvider>
//       );

//       // Wait for render
//       await new Promise((res) => setTimeout(res, 1500));

//       const canvas = await html2canvas(container, {
//         backgroundColor: '#ffffff',
//         useCORS: true,
//         scale: 2,
//       });

//       const imgData = canvas.toDataURL('image/png');
//       const imgWidthPx = canvas.width;
//       const imgHeightPx = canvas.height;

//       // Convert px to mm (1 px = 0.264583 mm)
//       const pxToMm = 0.264583;
//       const pageWidthMm = imgWidthPx * pxToMm;
//       const pageHeightMm = imgHeightPx * pxToMm;

//       images.push({
//         data: imgData,
//         width: pageWidthMm,
//         height: pageHeightMm,
//       });

//       root.unmount();
//       document.body.removeChild(container);
//     }

//     // Generate PDF
//     let pdf;

//     images.forEach((img, index) => {
//       if (index === 0) {
//         pdf = new jsPDF({
//           orientation: 'portrait',
//           unit: 'mm',
//           format: [img.width, img.height],
//         });
//       } else {
//         pdf.addPage([img.width, img.height]);
//       }
//       pdf.addImage(img.data, 'PNG', 0, 0, img.width, img.height);
//     });

//     pdf.save('wedding-invitation.pdf');
//   };

//   return (
//     <button
//       onClick={exportToPDF}
//       className="bg-blue-600 text-black px-4 py-2 rounded shadow hover:bg-blue-700"
//     >
//       📄 Download Exact-Size PDF
//     </button>
//   );
// };

// export default DownloadPDFButton;


// // DownloadPDFButton.jsx
// import React from 'react';
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';
// import ReactDOM from 'react-dom/client';

// import WeddingCard from './WeddingCard';
// import WeddingDetailsCard from './WeddingDetailsCard';
// import MehendiCeremonyCard from './MehendiCeremonyCard';
// import EngagementSangeetCard from './EngagementSangeetCard';
// import HaldiCeremonyCard from './HaldiCeremonyCard';
// import WeddingCeremonyCard from './WeddingCeremonyCard';
// import ReceptionCard from './ReceptionCard';
// import WarmRegardsCard from './WarmRegardsCard';
// import { InvitationProvider } from '../context/FormDataContext';

// const componentList = [
//   WeddingCard,
//   WeddingDetailsCard,
//   MehendiCeremonyCard,
//   EngagementSangeetCard,
//   HaldiCeremonyCard,
//   WeddingCeremonyCard,
//   ReceptionCard,
//   WarmRegardsCard,
// ];

// const DownloadPDFButton = () => {
//   const exportToPDF = async () => {
//     const pdf = new jsPDF('p', 'mm', 'a4'); // A4 page size (210mm x 297mm)
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = pdf.internal.pageSize.getHeight();

//     const images = [];

//     for (let i = 0; i < componentList.length; i++) {
//       const Component = componentList[i];
//       const container = document.createElement('div');
//       container.style.position = 'absolute';
//       container.style.left = '-9999px';
//       container.style.top = '0';
//       container.style.width = '794px'; // For higher resolution
//       container.style.background = 'white';
//       document.body.appendChild(container);

//       const root = ReactDOM.createRoot(container);
//       root.render(
//         <InvitationProvider>
//           <Component showOnlyCard={true} formKey={`step${i}`} />
//         </InvitationProvider>
//       );

//       // Wait for DOM to render
//       await new Promise((res) => setTimeout(res, 1500));

//       const canvas = await html2canvas(container, {
//         backgroundColor: '#ffffff',
//         useCORS: true,
//         scale: 2,
//       });

//       const imgData = canvas.toDataURL('image/png');
//       images.push(imgData);

//       root.unmount();
//       document.body.removeChild(container);
//     }

//     // Add each image to the PDF after the previous image is fully loaded
//     for (let i = 0; i < images.length; i++) {
//       const img = images[i];
//       const imgElement = new Image();
//       imgElement.src = img;

//       imgElement.onload = () => {
//         // Get the original image dimensions
//         const imgWidth = imgElement.width;
//         const imgHeight = imgElement.height;

//         // Calculate the scale factor to fit the image inside the A4 page
//         const scaleFactor = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
//         const scaledWidth = imgWidth * scaleFactor;
//         const scaledHeight = imgHeight * scaleFactor;

//         if (i !== 0) pdf.addPage(); // Add new page for every new image

//         // Add the image to the PDF
//         pdf.addImage(img, 'PNG', 0, 0, scaledWidth, scaledHeight);

//         // Save the PDF once all images have been processed
//         if (i === images.length - 1) {
//           pdf.save('wedding-invitation.pdf');
//         }
//       };
//     }
//   };

//   return (
//     <button
//       onClick={exportToPDF}
//       className="bg-blue-600 text-black px-4 py-2 rounded shadow hover:bg-blue-700"
//     >
//       📄 Download Scaled PDF
//     </button>
//   );
// };

// export default DownloadPDFButton;

















// // DownloadPDFButton.jsx
// import React from 'react';
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';
// import ReactDOM from 'react-dom/client';

// import WeddingCard from './WeddingCard';
// import WeddingDetailsCard from './WeddingDetailsCard';
// import MehendiCeremonyCard from './MehendiCeremonyCard';
// import EngagementSangeetCard from './EngagementSangeetCard';
// import HaldiCeremonyCard from './HaldiCeremonyCard';
// import WeddingCeremonyCard from './WeddingCeremonyCard';
// import ReceptionCard from './ReceptionCard';
// import WarmRegardsCard from './WarmRegardsCard';

// import { InvitationProvider } from '../context/FormDataContext';

// const componentList = [
//   WeddingCard,
//   WeddingDetailsCard,
//   MehendiCeremonyCard,
//   EngagementSangeetCard,
//   HaldiCeremonyCard,
//   WeddingCeremonyCard,
//   ReceptionCard,
//   WarmRegardsCard,
// ];

// const DownloadPDFButton = () => {
//   const exportToPDF = async () => {
//     const pdf = new jsPDF('p', 'mm', 'a4');
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = pdf.internal.pageSize.getHeight();

//     const container = document.createElement('div');
//     container.style.position = 'absolute';
//     container.style.left = '-9999px';
//     container.style.top = '0';
//     container.style.width = '794px';
//     container.style.background = 'white';
//     container.style.padding = '20px';
//     container.style.boxSizing = 'border-box';
//     document.body.appendChild(container);

//     // Render each component separately and add it to the PDF
//     for (let i = 0; i < componentList.length; i++) {
//       const Component = componentList[i];

//       const element = document.createElement('div');
//       container.appendChild(element);

//       const root = ReactDOM.createRoot(element);
//       root.render(
//         <InvitationProvider>
//           <Component showOnlyCard={true} formKey={`step${i}`} />
//         </InvitationProvider>
//       );

//       // Wait for component to render
//       await new Promise((res) => setTimeout(res, 1000));

//       const canvas = await html2canvas(element, {
//         backgroundColor: '#ffffff',
//         useCORS: true,
//         scale: 2,
//       });

//       const imgData = canvas.toDataURL('image/png');
//       const imgProps = pdf.getImageProperties(imgData);
//       const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

//       if (i > 0) pdf.addPage();
//       pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight);

//       root.unmount();
//     }

//     document.body.removeChild(container);
//     pdf.save('wedding-invitation.pdf');
//   };

//   return (
//     <button
//       onClick={exportToPDF}
//       className="bg-blue-600 text-black px-4 py-2 rounded shadow hover:bg-blue-700"
//     >
//       📄 Download Seamless PDF
//     </button>
//   );
// };

// export default DownloadPDFButton;
