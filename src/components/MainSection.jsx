import React from 'react'
import Devices from '../assets/images/webp/Devices.webp'
import Treatments from '../assets/images/webp/Treatments.webp'
import LeavesTop from '../assets/images/webp/LeavesTop.webp'
import LeavesBottom from '../assets/images/webp/LeavesBottom.webp'
const MainSection = () => {
  return (
  <section className=' min-h-screen relative'>
    <img src={LeavesTop} alt="LeavesTop" className=' absolute -z-[1]' />
    <img src={LeavesBottom} alt="LeavesBottom" className=' absolute -z-[1] bottom-0 right-0' />
    <div className=" max-w-[1180px] mx-auto sm:py-[42px]">
  <div className=" flex  flex-col px-5 md:px-10 bg-shade-green  py-10 z-10">
  <div className=" flex items-center justify-center">
      <h4 className=' text-center text-[28px] md:text-[32px] leading-[46.4px] font-KaushanScript text-light-green inline-block relative after:absolute sm:after:w-[60px] after:h-[2px] after:bg-light-green after:top-[50%] after:right-[-23%] before:absolute sm:before:w-[60px] before:h-[2px] before:bg-light-green before:top-[50%] before:left-[-22%]'>Cutting Edge Technology</h4>

      </div>
      <h1 className=' max-w-[800px] text-center text-[38px] md:text-[48px] leading-[48px] md:leading-[62.4px] font-Archivo font-semibold mx-auto pt-[10px] pb-8 md:pb-14 mb-1'>Devices and Treatments to meet your needs</h1>
      <div className=" flex gap-8 md:gap-10 flex-col md:flex-row justify-center items-center">
    
        <div className=" bg-white border border-light-black max-w-[510px] xl:min-h-[627px]">
          <img src={Devices} alt="Devices" className=' w-full' />
         <div className="p-6 sm:p-[30px]">
         <p className=' font-Archivo text-[25px] leading-[32.5px] text-custom-black font-semibold'>Devices</p>
          <p className=' text-base font-Archivo font-normal leading-[24px] pt-[16.3px] pb-6 sm:pb-[27.2px]'>Our state-of-the-art devices are designed to target a variety of skin concerns with precision and efficacy.</p>
          <button className=' max-w-[156.5px] w-full min-h-[52.7px] bg-light-green text-white text-[18px] leading-[19.5px] font-semibold'>Our Devices</button>
         </div>
        </div>
        <div className=" bg-white border border-light-black max-w-[510px] xl:min-h-[627px]">
          <img src={Treatments} alt="Devices" className=' w-full' />
         <div className="p-6 sm:p-[30px]">
         <p className=' font-Archivo text-[25px] leading-[32.5px] text-custom-black font-semibold'>Treatments</p>
          <p className=' text-base font-Archivo font-normal leading-[24px] pt-[16.3px] pb-6 sm:pb-[27.2px]'>At Halsey Dermatology, we offer a comprehensive range of treatments to address your unique skin care needs.</p>
          <button className=' max-w-[182.5px] w-full min-h-[52.7px] bg-light-green text-white text-[18px] leading-[19.5px] font-semibold'>Our Treatments</button>
         </div>
        </div>
        </div>
      
  </div>
    </div>
  </section>
  )
}

export default MainSection