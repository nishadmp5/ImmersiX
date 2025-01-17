import React from 'react'
import { vrgame } from '../assets'

const Notification = ({className, title}) => {
  return (
    <div className={`${className || ""} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}>
        <img src={vrgame} width={62} height={62}  alt="image" className='rounded-xl'/>
        <div className='flex-1'>
            <h6 className='mb-1 font-semibold text-base'>{title}</h6>
            <div className='flex items-center justify-between'>
               
                <div className='body-2 text-n-13'>explore VR gaming</div>
            </div>
        </div>
    </div>
  )
}

export default Notification