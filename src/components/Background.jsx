// import { Canvas } from '@react-three/fiber';
// import { Stars } from '@react-three/drei';
// import { useEffect, useState } from 'react';

// export default function Background({ darkMode }) {
//   const [starColor, setStarColor] = useState('white');

//   useEffect(() => {
//     setStarColor(darkMode ? '#00d1cd' : '#4a3f2f');
//   }, [darkMode]);

//   return (
//     <div className="absolute inset-0 -z-10">
//       <Canvas>
//         <Stars
//           radius={100}
//           depth={50}
//           count={5000}
//           factor={4}
//           saturation={0}
//           fade
//           speed={1}
//           color={starColor}
//         />
//       </Canvas>
//     </div>
//   );
// }
