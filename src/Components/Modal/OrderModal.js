import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const OrderModal = (props) => {
  const orders = ['Vanila', 'Chocolate', 'Red Valvet', 'Strawberry'];
  return (
    <div className='fixed z-10 overflow-y-auto top-0 w-full left-0 ' id='modal'>
      <div className='flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div className='fixed inset-0 transition-opacity'>
          <div className='absolute inset-0 bg-gray-900 opacity-75' />
        </div>
        <span className='hidden sm:inline-block sm:align-middle sm:h-screen'>
          &#8203;
        </span>
        <div
          className='inline-block align-center bg-white rounded-[15px]   shadow-md transform transition-all sm:my-8 sm:align-middle    w-[95%] h-auto md:w-[688px] md:min-h-[371px]'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'
        >
          <div className='bg-primary rounded-t-[15px] w-full h-[75px] flex items-center justify-between px-4 md:px-4'>
            <h3 className='text-[22px] md:text-lg lg:text-[30px] font-g-bold text-white text-start'>
              Products
            </h3>
            <AiOutlineCloseCircle
              className='text-white cursor-pointer'
              size={30}
              onClick={props.onConfirm}
            />
          </div>
          <div className='h-[50px] flex items-center border border-b-[#BEBEBE]'>
            <h3 className='text-[18px] md:text-lg lg:text-[22px] font-g-bold text-[#00000] text-start px-4 md:px-4'>
              Cup Cake
            </h3>
          </div>
          {orders.map((data, index) => (
            <div
              className='h-[50px] flex items-center justify-between border border-b-[#BEBEBE] px-4 md:px-4'
              key={index}
            >
              <p className='text-base md:text-lg lg:text-[20px] font-g-regular text-[#3A3A3A] text-start '>
                {data}
              </p>
              <p className='text-base md:text-lg lg:text-[20px] font-g-regular text-[#3A3A3A] text-start '>
                $30
              </p>
            </div>
          ))}
          <div className='h-[50px] flex items-center justify-between px-4 md:px-4'>
            <p className='text-base md:text-lg lg:text-[20px] font-g-bold text-[#000000] text-start '>
              Total
            </p>
            <p className='text-base md:text-lg lg:text-[20px] font-g-bold text-[#000000] text-start '>
              $120
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
