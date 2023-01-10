import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cake from '../../../Assets/img/cake.png';
import Trash from '../../../Assets/img/trash.svg';
import SearchInput from '../../../Components/SearchInput/SearchInput';
import { dummyArticlesData } from './DummyData';

const ArticlesData = () => {
  const [usersData, setUsersData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterArticles, setFilterArticles] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUsersData(dummyArticlesData);
  }, []);

  // useEffect(() => {
  //   if (searchText.trim() !== '') {
  //     const filter = usersData?.filter((data) =>
  //       data.title.toLowerCase().includes(searchText)
  //     );
  //     console.log(filter);
  //     setFilterArticles(filter);
  //   } else {
  //     setFilterArticles(null);
  //   }
  // }, [searchText]);
  return (
    <div className='max-h-[85vh] '>
      {/* <SearchInput
        setSearchText={setSearchText}
        placeholder='Search Article by Name'
      /> */}
      <div className='container mx-auto w-[95%] h-[75vh]  overflow-y-scroll custom-scroll-bar lg:w-[1070px] responsive-container'>
        {filterArticles == null ? (
          usersData.length > 0 ? (
            usersData.map((data, index) => (
              <div
                className='bg-white py-2 cursor-pointer w-[95%] mx-auto min-h-[150px] flex flex-col justify-center px-4 mb-4 rounded-[10px]  shadow-sm lg:w-[1045px] lg:h-[228px] md:m-auto md:mb-4 responsive-inner-container'
                key={index}
                onClick={() => navigate('/articles/1')}
              >
                <div className='flex items-center justify-between'>
                  <div className=' flex flex-col lg:flex-row lg:items-center'>
                    <img
                      src={Cake}
                      alt='article-img'
                      className='w-[170px] h-[150px] md:w-[200px] lg:w-[223px] md:h-[176px] rounded-[10px]'
                    />
                    <div className='flex flex-col '>
                      <div className='flex flex-col lg:flex-row md:justify-between mb-2'>
                        <h3 className='text-base lg:ml-4  md:pt-2 lg:pt-0  md:text-[22px] text-[#000000]  font-g-bold line-height-[25.78px] '>
                          {data.title}
                        </h3>
                        <div className='flex items-center '>
                          <div className='flex items-center justify-between  w-[158px] h-[34px] bg-lightBlue rounded-[5px]'>
                            <p className='text-base  md:text-[18px] font-g-regular text-white line-height-[26px] w-[80px] text-center h-full flex items-center justify-center rounded-[5px] bg-primary'>
                              Active
                            </p>
                            <p className='text-base px-2  md:text-[18px] font-g-regular text-white line-height-[26px]  text-center '>
                              Inactive
                            </p>
                          </div>
                          <div className='w-[23px] h-[23px] rounded-full bg-[#F80D0D] flex items-center justify-center ml-2 md:ml-3 lg:ml-4'>
                            <img src={Trash} alt='trash-icon' />
                          </div>
                        </div>
                      </div>
                      <p className='lg:px-4 text-base line-height-[23px] font-g-regular text-customGray articles-text '>
                        Morbi sapien elit, dapibus vitae tortor vitae, euismod
                        facilisis elit. Vivamus a justo sed odio venenatis
                        sollicitudin. Fusce pharetra erat vitae purus fringilla
                        iaculis sit amet sit amet lectus. Curabitur vel
                        consectetur est. Donec eu aliquet velit, in aliquam
                        nisl. Morbi porta mauris quis sollicitudin lacinia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center'>No Data Found </p>
          )
        ) : filterArticles.length > 0 ? (
          filterArticles.map((data, index) => (
            <div
              className='bg-white py-2 cursor-pointer w-[95%] mx-auto min-h-[150px] flex flex-col justify-center px-4 mb-4 rounded-[10px]  shadow-sm lg:w-[1045px] lg:h-[228px] md:m-auto md:mb-4 responsive-inner-container'
              key={index}
              onClick={() => navigate('/articles/1')}
            >
              <div className='flex items-center justify-between'>
                <div className=' flex flex-col lg:flex-row lg:items-center'>
                  <img
                    src={Cake}
                    alt='article-img'
                    className='w-[170px] h-[150px] md:w-[200px] lg:w-[223px] md:h-[176px] rounded-[10px]'
                  />
                  <div className='flex flex-col '>
                    <div className='flex flex-col lg:flex-row md:justify-between mb-2'>
                      <h3 className='text-base lg:ml-4  md:pt-2 lg:pt-0  md:text-[22px] text-[#000000]  font-g-bold line-height-[25.78px] '>
                        {data.title}
                      </h3>
                      <div className='flex items-center '>
                        <div className='flex items-center justify-between  w-[158px] h-[34px] bg-lightBlue rounded-[5px]'>
                          <p className='text-base  md:text-[18px] font-g-regular text-white line-height-[26px] w-[80px] text-center h-full flex items-center justify-center rounded-[5px] bg-primary'>
                            Active
                          </p>
                          <p className='text-base px-2  md:text-[18px] font-g-regular text-white line-height-[26px]  text-center '>
                            Inactive
                          </p>
                        </div>
                        <div className='w-[23px] h-[23px] rounded-full bg-[#F80D0D] flex items-center justify-center ml-2 md:ml-3 lg:ml-4'>
                          <img src={Trash} alt='trash-icon' />
                        </div>
                      </div>
                    </div>
                    <p className='lg:px-4 text-base line-height-[23px] font-g-regular text-customGray articles-text '>
                      Morbi sapien elit, dapibus vitae tortor vitae, euismod
                      facilisis elit. Vivamus a justo sed odio venenatis
                      sollicitudin. Fusce pharetra erat vitae purus fringilla
                      iaculis sit amet sit amet lectus. Curabitur vel
                      consectetur est. Donec eu aliquet velit, in aliquam nisl.
                      Morbi porta mauris quis sollicitudin lacinia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center'>No Data Found </p>
        )}
      </div>
    </div>
  );
};

export default ArticlesData;
