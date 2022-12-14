import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../../Components/spinner/Spinner';
import { dummyUsersData } from '../../../Utils/DummyUsers';
import userImg from '../../../Assets/img/user.svg';

const Vendors = () => {
  const vendorsData = useSelector((state) => state?.admin.vendors);
  console.log(vendorsData);

  if (!vendorsData) {
    return <Spinner />;
  }
  return (
    <div className='w-full lg:w-[560px] h-[730px] bg-white m-auto md:m-0 rounded-[15px] p-4 responsive-inner-container'>
      <p className='text-2xl text-[#121212] font-g-bold p-4 line-height-[28px] md:text-[24px]'>
        Vendors
      </p>
      <div className='w-[100%] h-[650px] lg:w-[520px] overflow-y-scroll custom-scroll-bar responsive-container'>
        {vendorsData.result.length > 0 &&
          vendorsData.result.map((data, index) => (
            <div
              className='bg-[#F2F2F2] w-[95%] mx-auto min-h-[150px] flex flex-col justify-center px-4 mb-4 rounded-[10px]  shadow-sm lg:w-[481px] lg:h-[89px] md:m-auto md:mb-4'
              key={index}
            >
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <img
                    src={userImg}
                    className='bg-white w-[60px] h-[60px] rounded-full'
                  />
                  <h3 className='text-base ml-4   text-[#000000]  font-g-bold line-height-[18.75px] '>
                    {data.businessName}
                  </h3>
                </div>
                <div className='flex flex-col items-center md:flex-row'>
                  <button className='w-[95px] h-[26px] bg-primary rounded-[5px] text-[15px] font-g-regular text-white '>
                    Call Back
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Vendors;
