import React, { useEffect, useState } from 'react';
import Spinner from '../../../Components/spinner/Spinner';
import { dummyUsersData } from '../../../Utils/DummyUsers';
import { AddComment, getHelpRequest } from '../../../Utils/HelperFunctions';
import DummyUser from '../../../Assets/img/user-img.svg';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const HelpRequestUsers = () => {
  const [usersData, setUsersData] = useState(null);
  const [comment, setComment] = useState([]);
  const token = useSelector((state) => state?.Auth.user.data.token);

  const getData = async () => {
    let data = await getHelpRequest();
    setUsersData(data.result);
  };

  // Get Dummy Users Data
  useEffect(() => {
    getData();
  }, []);

  // Handle On Change
  const handleChange = (e) => {
    const id = e.target.getAttribute('id');
    setComment({
      [id]: e.target.value,
    });
  };

  // Add Comment
  const handleAddComment = async (id) => {
    if (Object.keys(comment).length === 0) {
      toast.error('Please add comment');
    } else {
      let message = comment[id];
      console.log(message);
      let data = await AddComment(id, message, token);
      getData();
      toast.success(data?.message);
      // Clear Input Field Values
      const fieldValue = document.getElementById(id);
      fieldValue.value = '';
      setComment({});
    }
  };

  if (!usersData) {
    return <Spinner />;
  }
  return (
    <div className=' max-h-[75vh]'>
      <div className='container mx-auto w-[95%] h-[75vh]  overflow-y-scroll custom-scroll-bar lg:w-[1070px] responsive-container'>
        {usersData &&
          usersData.map((data, index) => (
            <div
              className=' bg-white w-[95%] mx-auto min-h-[350px] flex flex-col justify-center py-2 px-4 mb-4 rounded-[10px]  shadow-sm lg:w-[1045px] lg:min-h-[304px] md:m-auto md:mb-4 responsive-inner-container'
              key={index}
            >
              <div className='flex items-start '>
                <img
                  src={data.user.profilePicture.url}
                  className='bg-gray-100 w-[92px] h-[92px] rounded-full'
                />

                <div className='flex flex-col ml-4 '>
                  <h3 className='text-base  md:text-xl text-[#000000]  font-g-bold line-height-[23.44px] mb-2'>
                    {data.user.name}
                  </h3>
                  <p className='text-base line-height-[23.44px] font-g-regular text-customGray'>
                    {data.body}
                  </p>
                  {/* Comments */}
                  <div className='my-2 h-[110px]'>
                    <div className=' h-[110px] overflow-y-scroll custom-scroll-bar  w-full  '>
                      <div className='bg-[#efefef] mr-1 rounded-md'>
                        {data.conversation.length > 0
                          ? data.conversation.map((data, index) => (
                              <div
                                className='py-2 px-4 border-b border-gray-300 '
                                key={index}
                              >
                                <div className='flex items-center'>
                                  <img
                                    src={data.authorDetails.profilePicture.url}
                                    className='h-[30px] w-[30px] rounded-full '
                                  />
                                  <h6 className='ml-4 text-base font-medium'>
                                    {data.authorDetails.name}
                                  </h6>
                                </div>
                                <p className='text-base line-height-[23.44px] font-g-regular text-customGray'>
                                  {data?.message}
                                </p>
                              </div>
                            ))
                          : ''}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <input
                id={data?.supportId}
                type='text'
                value={comment[data?.supportId]}
                onChange={handleChange}
                placeholder='write a reply'
                className='min-h-[72px] w-full  text-base my-4 px-6 rounded-[5px] border border-[#A2A2A2] focus:ring-3 focus:ring-blue-300 focus:outline-blue-300 lg:w-[967px] responsive-inner-container'
              />
              <button
                className='help-btn'
                onClick={() => handleAddComment(data?.supportId)}
              >
                Comment
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HelpRequestUsers;
