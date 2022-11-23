import React from 'react';
import GiveImg from '../../../Assets/img/giveaay.png';

const Giveaays = () => {
  return (
    <div className='w-full lg:w-[483px] h-[359px] bg-white m-auto rounded-[15px] p-4 sm:mt-4 lg:my-0 responsive-inner-container'>
      <p className='text-base text-[#121212] font-g-bold p-4 line-height-[28px] md:text-[24px]'>
        Giveaays
      </p>
      <div className='w-[162px] h-[98px] bg-[#F2F2F2] rounded-lg flex items-center justify-center'>
        <img src={GiveImg} className='w-[44.69px] h-[37.81px] ' />
      </div>
      <input
        type={'text'}
        placeholder='Text'
        className='w-full h-[32px] lg:w-[432px] border border-[#A2A2A2] rounded-[5px] px-4 font-g-medium text-base line-height-[19px] text-[#A2A2A2] mt-2 focus:outline-blue-500 responsive-container'
      />
      <input
        type={'text'}
        placeholder='Description'
        className='w-full h-[89px] lg:w-[432px] border border-[#A2A2A2] rounded-[5px] px-4 font-g-medium text-base line-height-[19px] text-[#A2A2A2] mt-2 focus:outline-blue-500 responsive-container'
      />
      <button className='w-[77px] h-[31px] bg-primary text-white rounded-[5px] mt-2 text-[15px] font-g-regular line-height-[18px]'>
        Submit
      </button>
    </div>
  );
};

export default Giveaays;
