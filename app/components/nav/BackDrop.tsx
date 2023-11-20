import React from 'react'
interface BackDropProp{
    onClick:()=>void;
}
const BackDrop:React.FC<BackDropProp> = ({onClick}) => {
  return (
      <div onClick={onClick} className='z-20
       bg-slate-200 
      opacity-50
      w-screen
       h-screen
       fixed top-0
        left-0'>
          
      </div>
  )
}

export default BackDrop