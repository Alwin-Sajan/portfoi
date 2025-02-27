import { motion } from 'framer-motion';
import React from 'react';


const Extra = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
       
 
 {items.map(item => (
   <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
     <motion.h5>{item.subtitle}</motion.h5>
     <motion.h2>{item.title}</motion.h2>
   </motion.div>
 ))}
 
 <AnimatePresence>
   {selectedId && (
     <motion.div layoutId={selectedId}>
       <motion.h5>{item.subtitle}</motion.h5>
       <motion.h2>{item.title}</motion.h2>
       <motion.button onClick={() => setSelectedId(null)} />
     </motion.div>
   )}
 </AnimatePresence>
    </div>
  )
}

export default Extra