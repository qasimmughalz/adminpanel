import React from 'react';

const PersonalDetails = () => {
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
            <div className='profile-field w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '>
              <p className='text-base  tex-[#858585] line-height-[19px] font-g-regular px-4'>
                Leonard
              </p>
            </div>
          </div>
          <div className='mt-3'>
            <p className='text-[18px] mb-1 font-g-medium text-[#00000] line-height-[21.09px'>
              Last Name
            </p>
            <div className='profile-field w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '>
              <p className='text-base tex-[#858585] line-height-[19px] font-g-regular px-4'>
                Campbell
              </p>
            </div>
          </div>
          <div className='mt-4'>
            <p className='text-[18px] mb-1 font-g-medium text-[#00000] line-height-[21.09px'>
              Gender
            </p>
            <div className='profile-field w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '>
              <p className='text-base tex-[#858585] line-height-[19px] font-g-regular px-4'>
                Male
              </p>
            </div>
          </div>
          <div className='mt-4'>
            <p className='text-[18px] mb-1 font-g-medium text-[#00000] line-height-[21.09px'>
              Date
            </p>
            <div className='profile-field w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '>
              <p className='text-base tex-[#858585] line-height-[19px] font-g-regular px-4'>
                March 23, 1995
              </p>
            </div>
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
            <div className='profile-field w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '>
              <p className='text-base tex-[#858585] line-height-[19px] font-g-regular px-4'>
                abc@xyz.com
              </p>
            </div>
          </div>
          <div className='mt-3'>
            <p className='text-[18px] mb-1 font-g-medium text-[#00000] line-height-[21.09px'>
              Phone
            </p>
            <div className='profile-field w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '>
              <p className='text-base tex-[#858585] line-height-[19px] font-g-regular px-4'>
                +01 (02) 3456-789
              </p>
            </div>
          </div>
          <div className='mt-4'>
            <p className='text-[18px] mb-1 font-g-medium text-[#00000] line-height-[21.09px'>
              Address
            </p>
            <div className='profile-field w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '>
              <p className='text-base tex-[#858585] line-height-[19px] font-g-regular px-4'>
                225 Cherry Streets #24, New York
              </p>
            </div>
          </div>
          <div className='mt-4'>
            <p className='text-[18px] mb-1 font-g-medium text-[#00000] line-height-[21.09px'>
              Whatsapp
            </p>
            <div className='profile-field w-full h-[40px] border border-[#BFBFBF] lg:w-[407px] lg:h-[56px] rounded-[3px] flex items-center '>
              <p className='text-base tex-[#858585] line-height-[19px] font-g-regular px-4'>
                +01 (02) 3456-789
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-[18px] mb-1 font-g-bold text-[#00000] line-height-[21.09px'>
          About
        </p>
        <div className='about-field w-full h-[auto] border border-[#BFBFBF] lg:w-[840px] lg:h-[225px] rounded-[3px] flex items-center '>
          <p className='about-field text-base lg:text-[18px] lg:w-[793px] lg:h-[177px] tex-[#858585] line-height-[30px] font-g-regular px-4 py-2 lg-py-0'>
            Curabitur vestibulum arcu turpis, quis egestas lacus fringilla sit
            amet. Duis posuere enim vitae urna placerat placerat. Aenean
            tincidunt magna rutrum urna euismod dapibus. Maecenas vel augue
            auctor, dictum orci non, fermentum diam. In vehicula vestibulum
            ligula nec ultricies. Curabitur aliquam nibh nibh, a fermentum massa
            pretium semper. Aenean et massa fermentum, ullamcorper urna at,
            auctor odio. In tincidunt placerat rutrum. Donec volutpat hendrerit
            maximus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
