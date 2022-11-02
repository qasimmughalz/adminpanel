import React, { useEffect, useState } from 'react';
import Spinner from '../../../Components/spinner/Spinner';
import { dummyUsersData } from '../../../Utils/DummyUsers';

const HelpRequestUsers = () => {
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
            className='container bg-white  px-4 py-4 mb-4 rounded-md grid grid-cols-1 w--full shadow-md md:w-[90%] md:m-auto md:mb-4 '
            key={index}
          >
            <div className='flex items-center'>
              <img
                src={data.image}
                className='bg-gray-100 w-[92px] h-[92px] rounded-full'
              />

              <div className='flex flex-col ml-4 '>
                <h3 className='text-base  md:text-xl font-g-medium mb-2'>
                  {data.firstName} {data.lastName}
                </h3>
                <p className='text-base font-g-regular text-gray-700'>
                  {data.userAgent}
                </p>
              </div>
            </div>
            <input
              type='text'
              value=''
              placeholder='write a reply'
              className='h-[72px] w-full text-base my-4 px-6 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 focus:outline-blue-300'
            />
            <button className='help-btn'>Comment</button>
          </div>
        ))}
    </div>
  );
};

export default HelpRequestUsers;
