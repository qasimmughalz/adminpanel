import React from 'react';
import TopNav from '../../../Components/TopNav/TopNav';
import Cake from '../../../Assets/img/cake.png';

const ArticleDetails = () => {
  return (
    <div className='w-full'>
      <TopNav title='Details' />
      <div className='max-h-[75vh] '>
        <div className='container mx-auto w-[95%] h-[75vh]   custom-scroll-bar lg:w-[1070px] responsive-container'>
          <div className='bg-white py-2 w-[95%] mx-auto min-h-[auto] flex flex-col justify-center px-4 mb-4 rounded-[10px]  shadow-sm lg:w-[1045px] lg:h-[450px] md:m-auto md:mb-4 responsive-inner-container'>
            <div className='flex flex-col'>
              <img
                src={Cake}
                className='w-[200px] mb-2 md:mb-4 h-[200px] md:w-[300px] md:h-[250px] rounded-[10px]'
                alt='article-img'
              />
              <h3 className='text-base   md:pt-2 lg:pt-0  md:text-[22px] text-[#000000]  font-g-bold line-height-[25.78px] '>
                Consectetur Adipiscing Elit
              </h3>
              <div className='flex items-center justify-between my-2 md:my-4  w-[158px] h-[34px] bg-lightBlue rounded-[5px]'>
                <p className='text-base  md:text-[18px] font-g-regular text-white line-height-[26px] w-[80px] text-center h-full flex items-center justify-center rounded-[5px] bg-primary'>
                  Active
                </p>
                <p className='text-base px-2  md:text-[18px] font-g-regular text-white line-height-[26px]  text-center '>
                  Inactive
                </p>
              </div>
              <p className=' text-base line-height-[23px] font-g-regular text-customGray  '>
                Morbi sapien elit, dapibus vitae tortor vitae, euismod facilisis
                elit. Vivamus a justo sed odio venenatis sollicitudin. Fusce
                pharetra erat vitae purus fringilla iaculis sit amet sit amet
                lectus. Curabitur vel consectetur est. Donec eu aliquet velit,
                in aliquam nisl. Morbi porta mauris quis sollicitudin lacinia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
