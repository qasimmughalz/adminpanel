import React, { useEffect, useState } from 'react';
import Spinner from '../../../Components/spinner/Spinner';
import { dummyUsersData } from '../../../Utils/DummyUsers';

const ReportedBugUsers = () => {
  const [usersData, setUsersData] = useState(null);

  // Get Dummy Users Data
  useEffect(
    () => async () => {
      let data = await dummyUsersData();
      setUsersData(data);
    },
    []
  );
  if (!usersData) {
    return <Spinner />;
  }
  return (
    <div className=' max-h-[75vh]'>
      <div className='container mx-auto w-[95%] h-[75vh]  overflow-y-scroll custom-scroll-bar lg:w-[1070px]'>
        {usersData &&
          usersData.map((data, index) => (
            <div
              className=' bg-white py-6 w-[95%] mx-auto min-h-[228px] flex flex-col justify-center px-4 mb-4 rounded-[10px]  shadow-sm lg:py-0 lg:w-[1045px] lg:h-[228px] md:m-auto md:mb-4 '
              key={index}
            >
              <div className='flex flex-col md:flex-row items-center'>
                <img
                  src={data.image}
                  className='bg-gray-100 w-[92px] h-[92px] rounded-full mb-3 lg:mb-0'
                />

                <div className='flex flex-col ml-4 '>
                  <h3 className='text-base  md:text-xl text-[#000000]  font-g-bold line-height-[23.44px] mb-2'>
                    {data.firstName} {data.lastName}
                  </h3>
                  <p className='text-base line-height-[23.44px] font-g-regular text-customGray'>
                    {data.userAgent}
                  </p>
                </div>
              </div>

              <div className='flex items-center mt-6'>
                <button className='bugs-btn '>Coding</button>
                <button className='bugs-btn mx-2  md:mx-3 '>UI Design</button>
                <button className='bugs-btn '>HTML</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReportedBugUsers;
