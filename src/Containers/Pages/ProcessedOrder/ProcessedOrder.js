import React from 'react';
import userImg from '../../../Assets/img/user.svg';
import TopNav from '../../../Components/TopNav/TopNav';
import TrashIcon from '../../../Components/TrashIcon';
import { BsThreeDots } from 'react-icons/bs';
import './ProcessedOrder.css';
import { useState } from 'react';

const ProcessedOrder = () => {
  const [active, setActive] = useState(true);

  let data = [1, 2, 3, 4, 5, 6, 7];

  const handleDropdown = (id) => {
    let div = document.getElementById(id);
    div.classList.toggle('dropdown-active');
  };

  return (
    <div className='w-full dashboard '>
      <TopNav title='Processed Order' />

      {/* =============== Banners ======== */}

      <div className='px-4 lg:px-0'>
        <div className='processed-container responsive-dashboard-container '>
          <div className='table-head flex justify-between items-center px-4 md:px-8  pt-4 md:pt-7 responsive-dashboard-inner-container'>
            <div>
              <h2 className='font-g-bold'>List of Orders</h2>
            </div>
            <div className='flex gap-5'>
              <div className='table-search-box flex justify-between items-center px-3 md:px-5'>
                <input
                  placeholder='Search Here'
                  className='font-g-medium outline-none'
                />
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z'
                    stroke='#12C4E0'
                    stroke-width='3'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M16.4437 16.4438L21 21'
                    stroke='#12C4E0'
                    stroke-width='3'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <div className='hidden md:flex option-btn  items-center justify-center'>
                <svg
                  width='34'
                  height='34'
                  viewBox='0 0 34 34'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M29.75 22.3125C29.75 22.0307 29.6381 21.7605 29.4388 21.5612C29.2395 21.3619 28.9693 21.25 28.6875 21.25H22.3125C22.0307 21.25 21.7605 21.3619 21.5612 21.5612C21.3619 21.7605 21.25 22.0307 21.25 22.3125C21.25 22.5943 21.3619 22.8645 21.5612 23.0638C21.7605 23.2631 22.0307 23.375 22.3125 23.375H28.6875C28.9693 23.375 29.2395 23.2631 29.4388 23.0638C29.6381 22.8645 29.75 22.5943 29.75 22.3125ZM29.75 15.9375C29.75 15.6557 29.6381 15.3855 29.4388 15.1862C29.2395 14.9869 28.9693 14.875 28.6875 14.875H13.8125C13.5307 14.875 13.2605 14.9869 13.0612 15.1862C12.8619 15.3855 12.75 15.6557 12.75 15.9375C12.75 16.2193 12.8619 16.4895 13.0612 16.6888C13.2605 16.8881 13.5307 17 13.8125 17H28.6875C28.9693 17 29.2395 16.8881 29.4388 16.6888C29.6381 16.4895 29.75 16.2193 29.75 15.9375ZM29.75 9.5625C29.75 9.28071 29.6381 9.01046 29.4388 8.8112C29.2395 8.61194 28.9693 8.5 28.6875 8.5H5.3125C5.03071 8.5 4.76046 8.61194 4.5612 8.8112C4.36194 9.01046 4.25 9.28071 4.25 9.5625C4.25 9.84429 4.36194 10.1145 4.5612 10.3138C4.76046 10.5131 5.03071 10.625 5.3125 10.625H28.6875C28.9693 10.625 29.2395 10.5131 29.4388 10.3138C29.6381 10.1145 29.75 9.84429 29.75 9.5625Z'
                    fill='#12C4E0'
                  />
                </svg>
              </div>
            </div>
          </div>

          <hr className='mt-4 divider-line' />

          <div className='table-container mt-12'>
            <table class='table w-full text-center processed-table pl-3'>
              <thead>
                <tr>
                  <th className='font-g-bold text-primary'>Id</th>
                  <th className='font-g-bold text-primary'>Vendor</th>
                  <th className='font-g-bold text-primary'>Product</th>
                  <th className='font-g-bold text-primary'>Stack</th>
                  <th className='font-g-bold text-primary'>Price</th>
                  <th className='font-g-bold text-primary'>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-black font-g-regular'>
                  <td>32</td>
                  <td>
                    <div className='flex items-center justify-center  gap-2'>
                      <div className='user-img'>
                        <img src={userImg} />
                      </div>
                      James Robert
                    </div>
                  </td>
                  <td>Cake</td>
                  <td>24 items</td>
                  <td>$10</td>
                  <td>
                    <button className='table-btn btn-pending font-g-regular'>
                      Pending
                    </button>{' '}
                  </td>
                  <td>
                    {' '}
                    <div className='trash-circle m-auto text-center flex items-center justify-center'>
                      <TrashIcon />
                    </div>
                  </td>
                </tr>
                <tr className='text-black font-g-regular'>
                  <td>33</td>
                  <td>
                    <div className='flex items-center justify-center  gap-2'>
                      <div className='user-img'>
                        <img src={userImg} />
                      </div>
                      James Robert
                    </div>
                  </td>
                  <td>Cake</td>
                  <td>24 items</td>
                  <td>$10</td>
                  <td>
                    <button className='table-btn btn-cancel font-g-regular'>
                      Cancel
                    </button>{' '}
                  </td>
                  <td>
                    {' '}
                    <div className='trash-circle text-center m-auto flex items-center justify-center'>
                      <TrashIcon />
                    </div>
                  </td>
                </tr>
                {data.map((data, index) => {
                  return (
                    <tr className='text-black font-g-regular' key={index}>
                      <td>{data}</td>
                      <td>
                        <div className='flex items-center justify-center gap-2'>
                          <div className='user-img'>
                            <img src={userImg} />
                          </div>
                          James Robert
                        </div>
                      </td>
                      <td>Cake</td>
                      <td>24 items</td>
                      <td>$10</td>
                      <td>
                        <button className='table-btn btn-completed font-g-regular'>
                          Completed
                        </button>{' '}
                      </td>
                      <td>
                        <div className='trash-circle text-center m-auto flex items-center justify-center'>
                          <BsThreeDots onClick={() => handleDropdown(data)} />
                        </div>
                        {active ? (
                          <div className='hidden' id={data}>
                            <div className='bg-white shadow-lg rounded-md  '>
                              <div className='flex flex-col items-center px-2 '>
                                <p className=' py-2 text-sm text-red-500 font-g-regular'>
                                  Cancel
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ''
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessedOrder;
