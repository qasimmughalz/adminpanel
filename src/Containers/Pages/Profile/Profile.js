import React from 'react';
import TopNav from '../../../Components/TopNav/TopNav';
import ProfileBg from '../../../Assets/img/profile-bg.png';
import ProfileUser from '../../../Assets/img/profile-user.png';
import PersonalDetails from './PersonalDetails';

const Profile = () => {
  return (
    <div className='w-full '>
      <TopNav title={'Profile'} />
      {/* Profile Background Image */}
      <div className='w-full'>
        <img
          src={ProfileBg}
          alt='Background-image'
          className='profile-bg w-full h-[150px]  lg:w-[1142px]  lg:h-[225px]'
        />
      </div>
      {/* User Image And Name */}
      <div className=''>
        <img
          src={ProfileUser}
          alt='User-Img'
          className=' z-50 w-[100px] h-[100px] lg:w-[144px] lg:h-[144px] top-[190px] left-[50%] ml-[-50px] md:ml-[-100px] lg:ml-[0] absolute lg:top-[247px] lg:left-[430px]'
        />
        <h5 className='text-[22px] mt-2 text-[#000000] font-g-bold line-height-[26px] lg:w-[189px] absolute top-[280px] left-[42%] ml-[-50px] md:ml-[-100px] md:top-[285px] md:left-[47%] lg:ml-[0] lg:top-[411px] lg:left-[413px]'>
          Leonard Campbell
        </h5>
        <p className='text-[16px] mt-1 line-height-[20px] font-normal text-[#000000] absolute top-[310px] left-[40%] ml-[-50px] md:ml-[-100px] md:top-[315px] md:left-[46%] lg:w-[224px] lg:ml-[0] lg:top-[442px] lg:left-[406px]'>
          New Vendor Registered Today
        </p>
      </div>
      <PersonalDetails />
    </div>
  );
};

export default Profile;
