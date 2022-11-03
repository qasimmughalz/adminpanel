import React from 'react';
import TopNav from '../../../Components/TopNav/TopNav';

const ManageFaqs = () => {
  return (
    <div className='w-full'>
      <TopNav title='Manage ManageFaqs' />
      <div>
        {/*---Faqs1 */}
        <div className=' bg-white w-[95%] mx-auto min-h-[200] flex flex-col justify-center px-4 mb-4 rounded-[10px] py-4 shadow-sm lg:w-[1045px] lg:h-[186px] md:m-auto md:mb-4  lg:py-0'>
          <h3 className='text-base  md:text-[21px] text-[#000000]  font-g-bold line-height-[24.61px] mb-2'>
            Proin sodales facilisis imperdiet. Praesent fermentum imperdiet
            nisi, et sagittis dolor iaculis eget.
          </h3>
          <p className='text-base md:text-[18px] line-height-[30.42px] font-g-regular text-[#000000]'>
            In hac habitasse platea dictumst. Phasellus ac dolor quis orci
            ornare efficitur in sit amet nisi. Cras placerat lectus vel lacinia
            aliquet. Nullam ac mauris sed tortor blandit hendrerit viverra ac
            mauris. Quisque pharetra mauris arcu, vitae elementum erat
            vestibulum at.
          </p>
        </div>
        {/*---Faqs2 */}
        <div className=' bg-white w-[95%] py-4 mx-auto min-h-[180] flex flex-col justify-center px-4 mb-4 rounded-[10px]  shadow-sm lg:w-[1045px] lg:h-[158px] lg:py-0 md:m-auto md:mb-4 '>
          <h3 className='text-base  md:text-[21px] text-[#000000]  font-g-bold line-height-[24.61px] mb-2'>
            Etiam a tellus ac ante blandit posuere. Nullam velit nulla,
            pellentesque in cursus fermentum
          </h3>
          <p className='text-base md:text-[18px] line-height-[30.42px] font-g-regular text-[#000000]'>
            Pellentesque porta justo quis felis ornare mollis. Suspendisse
            laoreet mi nec sem faucibus, sit amet pretium justo aliquam. Integer
            finibus nisl id sollicitudin gravida. Proin congue ex non leo
            consequat tincidunt. In eget nunc ac
          </p>
        </div>
        {/*---Faqs3 */}
        <div className=' bg-white w-[95%] py-4 mx-auto min-h-[280] flex flex-col justify-center px-4 mb-4 rounded-[10px]  shadow-sm  lg:py-0 lg:w-[1045px] lg:h-[254px] md:m-auto md:mb-4 '>
          <div className='flex items-center'>
            <p className='w-[27px] h-[26px] ml-2 bg-[#121212] font-medium text-white rounded-t-[4px] text-center'>
              B
            </p>
            <p className='w-[27px] h-[26px] ml-2 bg-[#A1A1A1] text-white rounded-t-[4px] text-center'>
              U
            </p>
            <p className='w-[27px] h-[26px] ml-2 bg-[#A1A1A1] text-white rounded-t-[4px] text-center'>
              I
            </p>
          </div>
          <div className='w-full border-2 px-4 rounded-[6px] flex flex-col justify-center border-[#A1A1A1]  lg:w-[988px] lg:h-[122px]'>
            <h3 className='text-base  md:text-[19px] text-[#000000]  font-g-bold line-height-[22.27px] mb-2'>
              Etiam a tellus ac ante blandit posuere. Nullam velit nulla,
              pellentesque in cursus fermentum
            </h3>
            <p className='text-base md:text-[18px] line-height-[30.42px] font-g-regular text-[#000000]'>
              Pellentesque porta justo quis felis ornare mollis. Suspendisse
              laoreet mi nec sem faucibus, sit amet pretium justo aliquam.
              Integer finibus nisl id sollicitudin gravida. Proin congue ex non
              leo consequat tincidunt. In eget nunc ac
            </p>
          </div>
          <button className='help-btn mt-2'>Publish</button>
        </div>
        <button className=' bg-primary w-[95%] mx-auto h-[50px] flex justify-center items-center text-white text-xl font-g-bold mb-4   rounded-[10px] md:text-[32px] lg:w-[1045px] lg:h-[74px] md:m-auto  md:mb-4 '>
          Add FAQ
        </button>
      </div>
    </div>
  );
};

export default ManageFaqs;
