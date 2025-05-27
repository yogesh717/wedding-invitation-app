// src/components/PreviewPage.jsx
import React from 'react';
import WeddingCard from './WeddingCard';
import WeddingDetailsCard from './WeddingDetailsCard';
import MehendiCeremonyCard from './MehendiCeremonyCard';
import EngagementSangeetCard from './EngagementSangeetCard';
import HaldiCeremonyCard from './HaldiCeremonyCard';
import WeddingCeremonyCard from './WeddingCeremonyCard';
import ReceptionCard from './ReceptionCard';
import WarmRegardsCard from './WarmRegardsCard';
import DownloadPDFButton from './DownloadPDFButton';
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

const PreviewPage = () => {
  return (
    <InvitationProvider>
      <div className="container mx-auto py-6 bg-white">
        <h2 className="text-center text-2xl font-bold mb-6">👁 Final Preview</h2>

        {componentList.map((Component, index) => (
          <div key={index} className="mb-6 shadow p-4 rounded-xl bg-[#fff5e6]">
            <Component showOnlyCard={true} formKey={formKeys[index]} />
          </div>
        ))}

        <div className="text-center mt-8">
          <DownloadPDFButton />
        </div>
      </div>
    </InvitationProvider>
  );
};

export default PreviewPage;



// // src/components/PreviewPage.jsx
// import React from 'react';
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

// const PreviewPage = () => {
//   return (
//     <InvitationProvider>
//       <div className="container mx-auto py-6 bg-white">
//         <h2 className="text-center text-2xl font-bold mb-6">👁 Final Preview</h2>
//         {componentList.map((Component, index) => (
//           <div key={index} className="mb-6 shadow p-4 rounded-xl bg-[#fff5e6]">
//             <Component showOnlyCard={true} formKey={`step${index}`} />
//           </div>
//         ))}
//       </div>
//     </InvitationProvider>
//   );
// };

// export default PreviewPage;
