// Slider.js
import React, { useState, useEffect } from 'react';
import WeddingCard from './WeddingCard';
import WeddingDetailsCard from './WeddingDetailsCard';
import MehendiCeremonyCard from './MehendiCeremonyCard';
import EngagementSangeetCard from './EngagementSangeetCard';
import HaldiCeremonyCard from './HaldiCeremonyCard';
import WeddingCeremonyCard from './WeddingCeremonyCard';
import ReceptionCard from './ReceptionCard';
import WarmRegardsCard from './WarmRegardsCard';

const Slider = () => {
  const slides = [
    <WeddingCard showOnlyCard={true} key="1" />,
    <WeddingDetailsCard showOnlyCard={true} key="2" />,
    <MehendiCeremonyCard showOnlyCard={true} key="3" />,
    <EngagementSangeetCard showOnlyCard={true} key="4" />,
    <HaldiCeremonyCard showOnlyCard={true} key="5" />,
    <WeddingCeremonyCard showOnlyCard={true} key="6" />,
    <ReceptionCard showOnlyCard={true} key="7" />,
    <WarmRegardsCard showOnlyCard={true} key="8" />,
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true); // fade in new slide
      }, 500);
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {slides[current]}
      </div>
    </div>
  );
};

export default Slider;

// components/SliderRecorder.jsx

// import { createRoot } from 'react-dom/client';

// import React, { useState, useEffect, useRef } from 'react';

// import WeddingCard from './WeddingCard';
// import WeddingDetailsCard from './WeddingDetailsCard';
// import MehendiCeremonyCard from './MehendiCeremonyCard';
// import EngagementSangeetCard from './EngagementSangeetCard';
// import HaldiCeremonyCard from './HaldiCeremonyCard';
// import WeddingCeremonyCard from './WeddingCeremonyCard';
// import ReceptionCard from './ReceptionCard';
// import WarmRegardsCard from './WarmRegardsCard';
// import html2canvas from 'html2canvas';

// const slides = [
//   <WeddingCard showOnlyCard={true} key="1" />,
//   <WeddingDetailsCard showOnlyCard={true} key="2" />,
//   <MehendiCeremonyCard showOnlyCard={true} key="3" />,
//   <EngagementSangeetCard showOnlyCard={true} key="4" />,
//   <HaldiCeremonyCard showOnlyCard={true} key="5" />,
//   <WeddingCeremonyCard showOnlyCard={true} key="6" />,
//   <ReceptionCard showOnlyCard={true} key="7" />,
//   <WarmRegardsCard showOnlyCard={true} key="8" />,
// ];

// const Slider = ({ onRecordingComplete, backgroundMusic }) => {
//   const [current, setCurrent] = useState(0);
//   const canvasRef = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const chunksRef = useRef([]);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');



//     const renderSlideToCanvas = () => {
//       const slideElement = slides[current];
//       const container = document.createElement('div');
//       container.style.position = 'absolute';
//       container.style.width = '800px';
//       container.style.height = '600px';
//       document.body.appendChild(container);

//       const root = React.createElement(() => slideElement);
//       const reactRoot = createRoot(container);
//       reactRoot.render(root);

//       setTimeout(() => {
//         html2canvas(container).then((canvasSnapshot) => {
//           ctx.clearRect(0, 0, canvas.width, canvas.height);
//           ctx.drawImage(canvasSnapshot, 0, 0, canvas.width, canvas.height);
//           document.body.removeChild(container);
//         });
//       }, 1000);
//     };


//     renderSlideToCanvas();
//   }, [current]);

//   const startRecording = () => {
//     const canvas = canvasRef.current;
//     const stream = canvas.captureStream(30);

//     if (backgroundMusic) {
//       const audio = new Audio(URL.createObjectURL(backgroundMusic));
//       audio.loop = false;
//       const audioCtx = new AudioContext();
//       const source = audioCtx.createMediaElementSource(audio);
//       const dest = audioCtx.createMediaStreamDestination();
//       source.connect(dest);
//       source.connect(audioCtx.destination);

//       const combinedStream = new MediaStream([
//         ...stream.getVideoTracks(),
//         ...dest.stream.getAudioTracks()
//       ]);

//       mediaRecorderRef.current = new MediaRecorder(combinedStream, {
//         mimeType: 'video/webm'
//       });

//       audio.play();
//     } else {
//       mediaRecorderRef.current = new MediaRecorder(stream, {
//         mimeType: 'video/webm'
//       });
//     }

//     mediaRecorderRef.current.ondataavailable = (event) => {
//       chunksRef.current.push(event.data);
//     };

//     mediaRecorderRef.current.onstop = () => {
//       const blob = new Blob(chunksRef.current, { type: 'video/webm' });
//       const url = URL.createObjectURL(blob);
//       onRecordingComplete(blob, url);
//     };

//     mediaRecorderRef.current.start();
//     setTimeout(() => mediaRecorderRef.current.stop(), slides.length * 3000); // Stop after all slides
//   };

//   return (
//     <div>
//       <canvas ref={canvasRef} width="800" height="600" style={{ display: 'none' }} />
//       <button onClick={startRecording} className="bg-green-500 text-white px-4 py-2 rounded">
//         🎥 Start Recording
//       </button>
//     </div>
//   );
// };

// export default Slider;
