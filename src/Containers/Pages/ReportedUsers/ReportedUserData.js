import React, { useEffect, useState } from 'react';
import Spinner from '../../../Components/spinner/Spinner';
import { dummyUsersData } from '../../../Utils/DummyUsers';

const ReportedUsersData = () => {
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
    <div className='max-h-[75vh] overflow-y-scroll custom-scroll-bar'>
      {usersData &&
        usersData.map((data, index) => (
          <div
            className='container bg-white  px-4 py-4 mb-4 rounded-md grid grid-cols-1  w--full shadow-md md:w-[90%] md:m-auto md:mb-4 '
            key={index}
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <img
                  src={data.image}
                  className='bg-gray-100 w-[92px] h-[92px] rounded-full'
                />
                <h3 className='text-base ml-4 md:text-xl font-g-medium mb-2'>
                  {data.firstName} {data.lastName}
                </h3>
              </div>
              <div className='flex flex-col items-center md:flex-row'>
                <button className='block-btn mb-3 md:mb-0 md:mr-3'>
                  Block
                </button>
                <button className='warning-btn'>Warning </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReportedUsersData;
