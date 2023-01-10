import React, { useEffect, useState } from 'react';
import Spinner from '../../../Components/spinner/Spinner';
import { dummyUsersData } from '../../../Utils/DummyUsers';
import Trash from '../../../Assets/img/trash.svg';
import SearchInput from '../../../Components/SearchInput/SearchInput';
import { toast } from 'react-toastify';

const RequestUsers = () => {
  const [usersData, setUsersData] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filterUsers, setFilterUsers] = useState(null);

  // Get Dummy Users Data
  useEffect(() => {
    setUsersData(dummyUsersData);
  }, [dummyUsersData]);
  // useEffect(() => {
  //   const filter = usersData?.filter((data) =>
  //     data.firstName.toLowerCase().includes(searchText)
  //   );
  //   setFilterUsers(filter);
  // }, [searchText]);

  if (!usersData) {
    return <Spinner />;
  }

  return (
    <div className=' max-h-[85vh] w-full'>
      {/* <SearchInput
        setSearchText={setSearchText}
        placeholder='Search Users by Name'
      /> */}
      <div className='container mx-auto w-[95%] h-[75vh]  overflow-y-scroll custom-scroll-bar  lg:w-[1070px] responsive-container'>
        <p className='text-base p-4 font-g-bold text-[#000000] line-height-[28.13px] md:text-[24px]'>
          List Of Request
        </p>

        {filterUsers == null ? (
          usersData.length > 0 ? (
            usersData.map((data, index) => (
              <div
                className=' bg-white py-6 w-[95%] mx-auto min-h-[170px] flex flex-col justify-center px-4 mb-4 rounded-[10px]  shadow-sm lg:py-0 lg:w-[1045px] lg:h-[151px] md:m-auto md:mb-4 responsive-inner-container'
                key={index}
              >
                <div className='flex flex-col  items-center md:flex-row md:justify-between'>
                  <div className='flex flex-col md:flex-row items-center'>
                    <img
                      src={data.image}
                      className='bg-gray-100 w-[92px] h-[92px] rounded-full mb-3 lg:mb-0'
                    />

                    <div className='flex flex-col ml-4 '>
                      <h3 className='text-base  md:text-xl text-[#000000]  font-g-bold line-height-[23.44px] mb-2'>
                        {data.firstName} {data.lastName}
                      </h3>
                      <p className='text-base w-full line-height-[23.44px] font-g-regular text-customGray lg:w-[545px]'>
                        {data.userAgent}
                      </p>
                    </div>
                  </div>
                  <div className='bg-[#F80D0D] w-[33px] h-[33px] flex items-center justify-center rounded-full'>
                    <img src={Trash} className='' />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center'>No Data Found</p>
          )
        ) : filterUsers.length > 0 ? (
          filterUsers.map((data, index) => (
            <div
              className=' bg-white py-6 w-[95%] mx-auto min-h-[170px] flex flex-col justify-center px-4 mb-4 rounded-[10px]  shadow-sm lg:py-0 lg:w-[1045px] lg:h-[151px] md:m-auto md:mb-4 responsive-inner-container'
              key={index}
            >
              <div className='flex flex-col  items-center md:flex-row md:justify-between'>
                <div className='flex flex-col md:flex-row items-center'>
                  <img
                    src={data.image}
                    className='bg-gray-100 w-[92px] h-[92px] rounded-full mb-3 lg:mb-0'
                  />

                  <div className='flex flex-col ml-4 '>
                    <h3 className='text-base  md:text-xl text-[#000000]  font-g-bold line-height-[23.44px] mb-2'>
                      {data.firstName} {data.lastName}
                    </h3>
                    <p className='text-base w-full line-height-[23.44px] font-g-regular text-customGray lg:w-[545px]'>
                      {data.userAgent}
                    </p>
                  </div>
                </div>
                <div className='bg-[#F80D0D] w-[33px] h-[33px] flex items-center justify-center rounded-full'>
                  <img src={Trash} className='' />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center'>No Data Found</p>
        )}
      </div>
    </div>
  );
};

export default RequestUsers;
