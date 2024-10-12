import React from 'react'
import { FaEbay } from 'react-icons/fa'
import { GrAmazon } from 'react-icons/gr'
import { SiRakuten } from 'react-icons/si'
import { TbBrandWalmart, TbBrandZalando } from 'react-icons/tb'

const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
        <h5 className='tagline mb-6 text-center text-n-1/50'>Your Virtual Reality Journey Starts Here</h5>
        <ul className='flex'>
                <li className='flex items-center justify-center flex-1 text-2xl '>
                <GrAmazon />
                </li>
                <li className='flex items-center justify-center flex-1 text-2xl '>
                <TbBrandWalmart />
                </li>
                <li className='flex items-center justify-center flex-1 text-3xl'>
                <FaEbay />
                </li>
                <li className='flex items-center justify-center flex-1 text-2xl'>
                <SiRakuten />
                </li>
                <li className='flex items-center justify-center flex-1 text-2xl'>
                <TbBrandZalando />
                </li>
        </ul>
    </div>
  )
}

export default CompanyLogos