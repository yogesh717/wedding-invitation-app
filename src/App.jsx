// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InvitationProvider } from './context/FormDataContext';

import WeddingCard from './components/WeddingCard';
import WeddingDetailsCard from './components/WeddingDetailsCard';
import MehendiCeremonyCard from './components/MehendiCeremonyCard';
import EngagementSangeetCard from './components/EngagementSangeetCard';
import HaldiCeremonyCard from './components/HaldiCeremonyCard';
import WeddingCeremonyCard from './components/WeddingCeremonyCard';
import ReceptionCard from './components/ReceptionCard';
import WarmRegardsCard from './components/WarmRegardsCard';
import DownloadPDFButton from './components/DownloadPDFButton';
import PreviewPage from './components/PreviewPage'; // NEW

function StepFlow() {
  const [step, setStep] = useState(1);
  const [videoUrl, setVideoUrl] = useState(null);

  const renderSlide = () => {
    switch (step) {
      case 1:
        return <WeddingCard onNext={() => setStep(2)} formKey="weddingCard" />;
      case 2:
        return <WeddingDetailsCard onNext={() => setStep(3)} onBack={() => setStep(1)} formKey="weddingDetailsCard" />;
      case 3:
        return <MehendiCeremonyCard onNext={() => setStep(4)} onBack={() => setStep(2)} formKey="mehendiCard" />;
      case 4:
        return <EngagementSangeetCard onNext={() => setStep(5)} onBack={() => setStep(3)} formKey="engagementCard" />;
      case 5:
        return <HaldiCeremonyCard onNext={() => setStep(6)} onBack={() => setStep(4)} formKey="haldiCard" />;
      case 6:
        return <WeddingCeremonyCard onNext={() => setStep(7)} onBack={() => setStep(5)} formKey="weddingCeremonyCard" />;
      case 7:
        return <ReceptionCard onNext={() => setStep(8)} onBack={() => setStep(6)} formKey="receptionCard" />;
      case 8:
        return <WarmRegardsCard onNext={() => setStep(9)} onBack={() => setStep(7)} formKey="warmRegardsCard" />;
      case 9:
        return (
          <DownloadPDFButton
            onBack={() => setStep(8)}
            onGenerate={(file) => setVideoUrl(URL.createObjectURL(file))}
            videoUrl={videoUrl}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-light">
      {renderSlide()}
    </div>
  );
}

function App() {
  return (
    <InvitationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StepFlow />} />
          <Route path="/preview" element={<PreviewPage />} />
        </Routes>
      </Router>
    </InvitationProvider>
  );
}

export default App;




// // src/App.js
// import React, { useState } from 'react';
// import { InvitationProvider } from './context/FormDataContext';
// import WeddingCard from './components/WeddingCard';
// import WeddingDetailsCard from './components/WeddingDetailsCard';
// import MehendiCeremonyCard from './components/MehendiCeremonyCard';
// import EngagementSangeetCard from './components/EngagementSangeetCard';
// import HaldiCeremonyCard from './components/HaldiCeremonyCard';
// import WeddingCeremonyCard from './components/WeddingCeremonyCard';
// import ReceptionCard from './components/ReceptionCard';
// import WarmRegardsCard from './components/WarmRegardsCard';
// import DownloadPDFButton from './components/DownloadPDFButton';

// function App() {
//   const [step, setStep] = useState(1);
//   const [videoUrl, setVideoUrl] = useState(null);

//   const renderSlide = () => {
//     switch (step) {
//       case 1:
//         return <WeddingCard onNext={() => setStep(2)} formKey="weddingCard" />;
//       case 2:
//         return <WeddingDetailsCard onNext={() => setStep(3)} onBack={() => setStep(1)} formKey="weddingDetailsCard" />;
//       case 3:
//         return <MehendiCeremonyCard onNext={() => setStep(4)} onBack={() => setStep(2)} formKey="mehendiCard" />;
//       case 4:
//         return <EngagementSangeetCard onNext={() => setStep(5)} onBack={() => setStep(3)} formKey="engagementCard" />;
//       case 5:
//         return <HaldiCeremonyCard onNext={() => setStep(6)} onBack={() => setStep(4)} formKey="haldiCard" />;
//       case 6:
//         return <WeddingCeremonyCard onNext={() => setStep(7)} onBack={() => setStep(5)} formKey="weddingCeremonyCard" />;
//       case 7:
//         return <ReceptionCard onNext={() => setStep(8)} onBack={() => setStep(6)} formKey="receptionCard" />;
//       case 8:
//         return <WarmRegardsCard onNext={() => setStep(9)} onBack={() => setStep(7)} formKey="warmRegardsCard" />;
//       case 9:
//         return (
//           <DownloadPDFButton
//             onBack={() => setStep(8)}
//             onGenerate={(file) => setVideoUrl(URL.createObjectURL(file))}
//             videoUrl={videoUrl}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <InvitationProvider>
//       <div className="h-screen w-full flex items-center justify-center bg-light">
//         {renderSlide()}
//       </div>
//     </InvitationProvider>
//   );
// }

// export default App;









// // App.js
// import React, { useState } from 'react';
// import WeddingCard from './components/WeddingCard';
// import WeddingDetailsCard from './components/WeddingDetailsCard';
// import MehendiCeremonyCard from './components/MehendiCeremonyCard';
// import EngagementSangeetCard from './components/EngagementSangeetCard';
// import HaldiCeremonyCard from './components/HaldiCeremonyCard';
// import WeddingCeremonyCard from './components/WeddingCeremonyCard';
// import ReceptionCard from './components/ReceptionCard';
// import WarmRegardsCard from './components/WarmRegardsCard';
// import DownloadPDFButton from './components/DownloadPDFButton';
// import Slider from './components/Slider';

// function App() {
//   const [step, setStep] = useState(1);
//   const [videoUrl, setVideoUrl] = useState(null);

//   const renderSlide = () => {
//     switch (step) {
//       case 1: return <WeddingCard onNext={() => setStep(2)} />;
//       case 2: return <WeddingDetailsCard onNext={() => setStep(3)} onBack={() => setStep(1)} />;
//       case 3: return <MehendiCeremonyCard onNext={() => setStep(4)} onBack={() => setStep(2)} />;
//       case 4: return <EngagementSangeetCard onNext={() => setStep(5)} onBack={() => setStep(3)} />;
//       case 5: return <HaldiCeremonyCard onNext={() => setStep(6)} onBack={() => setStep(4)} />;
//       case 6: return <WeddingCeremonyCard onNext={() => setStep(7)} onBack={() => setStep(5)} />;
//       case 7: return <ReceptionCard onNext={() => setStep(8)} onBack={() => setStep(6)} />;
//       case 8: return <WarmRegardsCard onNext={() => setStep(9)} onBack={() => setStep(7)} />;
//       case 9: return <DownloadPDFButton onBack={() => setStep(8)} onGenerate={(file) => setVideoUrl(URL.createObjectURL(file))} videoUrl={videoUrl} />;
//       default: return null;
//     }
//   };

//   return (
//     <div className="h-screen w-full flex items-center justify-center bg-gray-100">
//       {renderSlide()}
//       {step === 9 && (
//         <div className="absolute bottom-4 left-4 right-4 p-4 flex justify-between">
//           {/* <Slider /> */}
//           <DownloadPDFButton />
//         </div>
//       )}
//     </div>



//   );
// }

// export default App;








// import React, { useState } from 'react';
// import WeddingCard from './components/WeddingCard';
// import WeddingDetailsCard from './components/WeddingDetailsCard';
// import MehendiCeremonyCard from './components/MehendiCeremonyCard';
// import EngagementSangeetCard from './components/EngagementSangeetCard';
// import HaldiCeremonyCard from './components/HaldiCeremonyCard';
// import WeddingCeremonyCard from './components/WeddingCeremonyCard';
// import ReceptionCard from './components/ReceptionCard';
// import WarmRegardsCard from './components/WarmRegardsCard';
// import MusicSelectionPage from './components/MusicSelectionPage';

// function App() {
//   const [step, setStep] = useState(1);

//   return (
//     <>
//       {step === 1 && (
//         <div className="slide">
//           <WeddingCard onNext={() => setStep(2)} />
//         </div>
//       )}
//       {step === 2 && (
//         <div className="slide">
//           <WeddingDetailsCard onNext={() => setStep(3)} onBack={() => setStep(1)} />
//         </div>
//       )}
//       {step === 3 && (
//         <div className="slide">
//           <MehendiCeremonyCard onNext={() => setStep(4)} onBack={() => setStep(2)} />
//         </div>
//       )}
//       {step === 4 && (
//         <div className="slide">
//           <EngagementSangeetCard onNext={() => setStep(5)} onBack={() => setStep(3)} />
//         </div>
//       )}
//       {step === 5 && (
//         <div className="slide">
//           <HaldiCeremonyCard onNext={() => setStep(6)} onBack={() => setStep(4)} />
//         </div>
//       )}
//       {step === 6 && (
//         <div className="slide">
//           <WeddingCeremonyCard onNext={() => setStep(7)} onBack={() => setStep(5)} />
//         </div>
//       )}
//       {step === 7 && (
//         <div className="slide">
//           <ReceptionCard onNext={() => setStep(8)} onBack={() => setStep(6)} />
//         </div>
//       )}
//       {step === 8 && (
//         <div className="slide">
//           <WarmRegardsCard onNext={() => setStep(9)}  onBack={() => setStep(7)} />
//         </div>
//       )}
//       {step === 9 && (
//         <div className="slide">
//           <MusicSelectionPage  onBack={() => setStep(8)} />
//         </div>
//       )}
//     </>
//   );
// }

// export default App;
