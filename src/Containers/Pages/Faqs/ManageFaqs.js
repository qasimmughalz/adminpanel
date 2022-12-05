import React, { useEffect } from 'react';
import TopNav from '../../../Components/TopNav/TopNav';
import { addFaqs, getFaqs } from '../../../Utils/HelperFunctions';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const ManageFaqs = () => {
  const [faqsData, setFaqsData] = useState([]);
  const [faqs, setFaqs] = useState({
    title: '',
    body: '',
  });
  const token = useSelector((state) => state?.Auth.user.data.token);

  // Get Faqs Data
  const getData = async () => {
    let response = await getFaqs();
    console.log(response);
    setFaqsData(response.result);
  };
  useEffect(() => {
    getData();
  }, []);

  // Handle Change
  const handleChange = (e) => {
    setFaqs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // Add Faqs
  const handleAddFaqs = async () => {
    if (faqs.title.trim === '' || faqs.body.trim() === '') {
      toast.error('Please Fill Required Fields');
    } else {
      let data = await addFaqs(faqs, token);
      getData();
      toast.success(data.message);
      setFaqs({
        title: '',
        body: '',
      });
    }
  };
  return (
    <div className='w-full'>
      <TopNav title={`Manage FAQ's`} />
      <div className='responsive-container'>
        {/*---Faqss Data */}
        {faqsData.length > 0 &&
          faqsData.map((data, index) => (
            <div
              className=' bg-white w-[95%] mx-auto min-h-[200] flex flex-col justify-center px-4 mb-4 rounded-[10px] py-4 shadow-sm lg:w-[1045px] lg:h-[186px] md:m-auto md:mb-4  lg:py-0 responsive-inner-container'
              key={index}
            >
              <h3 className='text-base  md:text-[21px] text-[#000000]  font-g-bold line-height-[24.61px] mb-2'>
                {data?.title}
              </h3>
              <p className='text-base md:text-[18px] line-height-[30.42px] font-g-regular text-[#000000]'>
                {data?.body}
              </p>
              <div className='flex items-center mt-6'>
                <button className='help-btn '>Active</button>
                <button className='warning-btn mx-2  md:mx-3 '>InActive</button>
                <button className='block-btn '>Delete</button>
              </div>
            </div>
          ))}

        {/*---Faqs3 */}
        <div className=' bg-white w-[95%] py-4 mx-auto min-h-[280] flex flex-col justify-center px-4 mb-4 rounded-[10px]  shadow-sm  lg:py-0 lg:w-[1045px] lg:h-[254px] md:m-auto md:mb-4 responsive-inner-container'>
          <label className='block text-gray-500 '>Title</label>
          <input
            type={'text'}
            name='title'
            id='title'
            value={faqs.title}
            onChange={handleChange}
            placeholder='Title'
            className='w-full h-[35px] lg:w-[988px] border-2 border-[#A2A2A2] rounded-[5px] px-4 font-g-medium text-base line-height-[19px] text-[#A2A2A2] mt-2 focus:outline-blue-500 responsive-container'
          />
          <label className='block text-gray-500 mb-2 mt-2'>Description</label>
          <textarea
            rows={'4'}
            type={'text'}
            value={faqs.body}
            onChange={handleChange}
            name='body'
            id='body'
            placeholder='Description'
            className='w-full py-2 lg:py-4 min-h-[70px] border-2 px-4 rounded-[6px]  border-[#A1A1A1]  lg:w-[988px] lg:h-[122px] responsive-inner-container'
          />
        </div>
        <button
          className=' bg-primary w-[95%] mx-auto h-[50px] flex justify-center items-center text-white text-xl font-g-bold mb-4   rounded-[10px] md:text-[32px] lg:w-[1045px] lg:h-[74px] md:m-auto  md:mb-4 responsive-inner-container'
          onClick={() => handleAddFaqs()}
        >
          Add FAQ
        </button>
      </div>
    </div>
  );
};

export default ManageFaqs;
