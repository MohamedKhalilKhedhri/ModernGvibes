import React from 'react'
import {motion} from "framer-motion"
function Zap({children , padding}) {

    const duration = 0.2;

  return (

    <motion.div initial={"initial"} whileHover={"hover"} className={`${padding} w-full  whitespace-nowrap overflow-hidden relative`}>
         <motion.span className='block'  variants={{initial:{y:0},hover:{y:"-100%"}}}  transition={{duration:duration, ease:"easeInOut"}}>{children}</motion.span>
         <motion.span className={`absolute inset-0 block ${padding}`} variants={{initial:{y:"100%"},hover:{y:0}}}  transition={{duration:duration, ease:"easeInOut"}}>{children}</motion.span>
    </motion.div>
  )
}

export default Zap