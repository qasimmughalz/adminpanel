import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../../Components/spinner/Spinner';
import { getCallBacksData } from '../../../Utils/HelperFunctions';

const CallBackUsers = () => {
  const [usersData, setUsersData] = useState(null);
  const token = useSelector((state) => state?.Auth.user.data.token);

  const getData = async () => {
    let data = await getCallBacksData(token);
    setUsersData(data.result);
  };

  // Get Dummy Users Data
  useEffect(() => {
    getData();
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
              className='bg-white py-2 w-[95%] mx-auto min-h-[150px] flex flex-col justify-center px-4 mb-4 rounded-[10px]  shadow-sm lg:w-[1045px] lg:h-[134px] md:m-auto md:mb-4 responsive-inner-container'
              key={index}
            >
              <div className='flex items-center justify-between'>
                <div className=' flex flex-col md:flex-row md:items-center'>
                  <img
                    src={data.user.profilePicture}
                    className='bg-gray-100 w-[92px] h-[92px] rounded-full'
                  />
                  <div className='flex flex-col '>
                    <h3 className='text-base md:ml-4  md:text-xl text-[#000000]  font-g-bold line-height-[23.44px] mb-2'>
                      {data.user.name}
                    </h3>
                    <p className='md:px-4 text-base line-height-[23.44px] font-g-regular text-customGray'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam voluptatem vero aperiam at blanditiis architecto
                      obcaecati dolore id, atque placeat nemo accusamus
                      necessitatibus
                    </p>
                  </div>
                </div>
                <div className='flex flex-col items-center md:flex-row'>
                  <a
                    href='tel:+12345678'
                    className='callback-btn flex items-center justify-center '
                  >
                    12345678
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CallBackUsers;
