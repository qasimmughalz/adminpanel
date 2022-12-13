import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../../Components/spinner/Spinner';
import DummyUser from '../../../Assets/img/user-img.svg';
import { getAllUsers } from '../../../Utils/HelperFunctions';

const ReportedUsersData = () => {
  const [usersData, setUsersData] = useState(null);
  const token = useSelector((state) => state?.Auth.user.data.token);

  const getUsersData = async () => {
    let data = await getAllUsers(token);
    setUsersData(data.data);
  };

  // Get Dummy Users Data
  useEffect(() => {
    getUsersData();
  }, []);

  if (!usersData) {
    return <Spinner />;
  }
  return (
    <div className='max-h-[75vh] '>
      <div className='container mx-auto w-[95%] h-[75vh]  overflow-y-scroll custom-scroll-bar lg:w-[1070px] responsive-container'>
        {usersData &&
          usersData.map((data, index) => (
            <div
              className='bg-white w-[95%] mx-auto h-[170px] flex flex-col justify-center px-4 mb-4 rounded-[10px]  shadow-sm lg:w-[1045px] lg:h-[134px] md:m-auto md:mb-4 responsive-inner-container'
              key={index}
            >
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <img
                    src={
                      data.profilePicture.url !== null
                        ? data.profilePicture.url
                        : DummyUser
                    }
                    className='bg-gray-100 w-[92px] h-[92px] rounded-full'
                  />
                  <h3 className='text-base ml-4  md:text-xl text-[#000000]  font-g-bold line-height-[23.44px] mb-2'>
                    {data.name}
                  </h3>
                </div>
                <div className='flex flex-col items-center lg:flex-row'>
                  <button className='block-btn mb-3 lg:mb-0 lg:mr-3'>
                    Block
                  </button>
                  <button className='warning-btn'>Warning </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReportedUsersData;
