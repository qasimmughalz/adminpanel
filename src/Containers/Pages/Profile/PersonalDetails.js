import React, { useState } from 'react';

const PersonalDetails = () => {
  const [profileValues, setProfileValues] = useState({
    fName: 'Leonard',
    lName: 'Compbell',
    gender: 'Male',
    date: '2022-07-22',
    email: 'abc@xyz.com',
    phone: '+01 (02) 3456-789',
    address: '225 Cherry Streets #24, New York',
    whatsapp: '+01 (02) 3456-789',
    about:
      'Curabitur vestibulum arcu turpis,quis egestas lacus fringilla sit amet.Duis posuere enim vitae urna placerat placerat. Aenean  tincidunt magna rutrum urna euismod dapibus. Maecenas vel augue auctor, dictum orci non, fermentum diam. In vehicula vestibulum ligula nec ultricies. Curabitur aliquam nibh nibh, a fermentum massa pretium semper. Aenean et massa fermentum, ullamcorper urna at, auctor odio. In tincidunt placerat rutrum. Donec volutpat hendrerit maximus.',
  });

  const handleChange = (e) => {
    setProfileValues({
      ...profileValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className='bg-white px-8 py-4 mb-8 mt-[125px] lg:mt-[160px] lg:w-[921px] lg:h-[870px] rounded-[5px] lg:ml-[165px] profile-field-container'>
      <div className='container'>
        <h3 className='text-[20px] font-g-bold text-[#00000] line-height-[23.44px]'>
          Personal Details
        </h3>

        <div className='grid sm:grid-cols-1 gap-x-[5px] lg-gap-x-0 md:grid-cols-2'>
          <div className='mt-3'>
            <p className='text-[18px]  mb-1 font-g-medium text-[#00000] line-height-[21.09px'>
              First Name
            </p>
            <input
              className='profile-field text-base  tex-[#858585] line-height-[19px] px-4 font-g-regular w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '
              type='text'
              name='fName'
              value={profileValues.fName}
              onChange={handleChange}
            />
          </div>
          <div className='mt-3'>
            <p className='text-[18px] mb-1 font-g-medium text-[#00000] line-height-[21.09px'>
              Last Name
            </p>
            <input
              className='profile-field text-base  tex-[#858585] line-height-[19px] px-4 font-g-regular w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '
              type='text'
              name='lName'
              value={profileValues.lName}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4'>
            <p className='text-[18px] mb-1 font-g-medium text-[#00000] line-height-[21.09px'>
              Gender
            </p>
            <select
              className='profile-field text-base  tex-[#858585] line-height-[19px] px-4 font-g-regular w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '
              name='gender'
              value={profileValues.gender}
              onChange={handleChange}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className='mt-4'>
            <p className='text-[18px] mb-1 font-g-medium text-[#00000] line-height-[21.09px'>
              Date
            </p>
            <input
              className='profile-field text-base  tex-[#858585] line-height-[19px] px-4 font-g-regular w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '
              type='date'
              name='date'
              value={profileValues.date}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className='container mt-4'>
        <h3 className='text-[20px] font-g-bold text-[#00000] line-height-[23.44px]'>
          Contact Details
        </h3>

        <div className='grid sm:grid-cols-1 gap-x-[5px] lg-gap-x-0 md:grid-cols-2'>
          <div className='mt-3'>
            <p className='text-[18px] mb-1 font-g-medium text-[#00000] line-height-[21.09px'>
              Email
            </p>
            <input
              className='profile-field text-base  tex-[#858585] line-height-[19px] px-4 font-g-regular w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '
              type='email'
              name='email'
              value={profileValues.email}
              onChange={handleChange}
            />
          </div>
          <div className='mt-3'>
            <p className='text-[18px] mb-1 font-g-medium text-[#00000] line-height-[21.09px'>
              Phone
            </p>
            <input
              className='profile-field text-base  tex-[#858585] line-height-[19px] px-4 font-g-regular w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '
              type='tel'
              name='phone'
              value={profileValues.phone}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4'>
            <p className='text-[18px] mb-1 font-g-medium text-[#00000] line-height-[21.09px'>
              Address
            </p>
            <input
              className='profile-field text-base  tex-[#858585] line-height-[19px] px-4 font-g-regular w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '
              type='text'
              name='address'
              value={profileValues.address}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4'>
            <p className='text-[18px] mb-1 font-g-medium text-[#00000] line-height-[21.09px'>
              Whatsapp
            </p>
            <input
              className='profile-field text-base  tex-[#858585] line-height-[19px] px-4 font-g-regular w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '
              type='tel'
              name='whatsapp'
              value={profileValues.whatsapp}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-[18px] mb-1 font-g-bold text-[#00000] line-height-[21.09px'>
          About
        </p>
        <textarea
          className='about-field  w-full h-[auto] border border-[#BFBFBF] lg:w-[840px] lg:h-[225px] rounded-[3px] flex items-center text-base lg:text-[18px]  tex-[#858585] line-height-[30px] font-g-regular px-4 py-2 lg-py-0'
          type='text'
          rows='3'
          name='about'
          value={profileValues.about}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
