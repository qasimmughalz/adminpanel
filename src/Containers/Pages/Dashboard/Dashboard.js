import React, { useEffect } from 'react';
import './Dashboard.css';
import userImg from '../../../Assets/img/user.svg';
import bannerImgOne from '../../../Assets/img/banner-one-img.svg';
import bannerImgTwo from '../../../Assets/img/banner-img-two.svg';
import TopNav from '../../../Components/TopNav/TopNav';
import TrashIcon from '../../../Components/TrashIcon';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllVendors,
  getAllShoppers,
} from '../../Redux/actions/action-creators/VendorsAction';

const Dashboard = () => {
  let number = [...'98765432123456'];
  const token = useSelector((state) => state?.Auth.user.data.token);
  const dispatch = useDispatch();
  const vendorsData = useSelector((state) => state?.admin.vendors);
  const shoppersData = useSelector((state) => state?.admin.shoppers);

  useEffect(() => {
    dispatch(getAllVendors(token));
    dispatch(getAllShoppers());
  }, []);

  return (
    <div className='w-full dashboard '>
      <TopNav title='Dashboard' />

      {/* =============== Banners ======== */}

      <div className='flex flex-col   gap-5 justify-center px-3 md:px-0 lg:flex-row'>
        <div className='flex  items-center m-auto h-full  w-full   banner-card'>
          <img src={bannerImgOne} className='banner-style' />
          <div className=' pl-8'>
            <h1 className='font-g-bold'>{vendorsData?.totalResult}</h1>
            <p className='font-g-medium'>Total Number Of Vendors</p>
          </div>
        </div>

        <div className='flex h-full w-full m-auto  items-center banner-card'>
          <img src={bannerImgTwo} className='banner-style' />
          <div className=' pl-8'>
            <h1 className='font-g-bold'>{shoppersData?.totalResult}</h1>
            <p className='font-g-medium'>Total Number Of Shoppers</p>
          </div>
        </div>
      </div>

      {/* =============== Registered List  ======== */}

      <div className='flex flex-col gap-5 justify-center mt-11 px-3 md:px-0 lg:flex-row'>
        <div className='list-cards w-full m-auto  pl-8 pt-6'>
          <h1 className='font-g-bold'>Vendors Registered</h1>
          <ul className='vendor-registered-list pr-4 mr-5 mt-6'>
            {vendorsData?.result.length > 0 &&
              vendorsData.result.map((data, index) => (
                <li className='vendor-registered-list-item mb-5' key={index}>
                  <div className='flex justify-between items-center h-full px-5'>
                    <div className='flex  items-center'>
                      <img src={userImg} className='user-img' />
                      <p className='font-g-bold mb-0 ml-5 capitalize'>
                        {data?.businessName}
                      </p>
                    </div>
                    <div>
                      <div className='trash-circle text-center flex items-center justify-center'>
                        <TrashIcon />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div className='list-cards w-full m-auto  pl-8 pt-6'>
          <h1 className='font-g-bold'>Shopper Registered</h1>
          <ul className='vendor-registered-list pr-4 mr-5 mt-5'>
            {shoppersData?.data.length > 0 &&
              shoppersData.data.map((data, index) => (
                <li className='vendor-registered-list-item mb-5' key={index}>
                  <div className='flex justify-between items-center h-full px-5'>
                    <div className='flex  items-center'>
                      <img src={userImg} className='user-img' />
                      <p className='font-g-bold mb-0 ml-5 capitalize'>
                        {data.name}
                      </p>
                    </div>
                    <div className='trash-circle text-center flex items-center justify-center'>
                      <TrashIcon />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* =============== Total Users  ======== */}

      <div className='total-users mt-10 mx-auto mb-16 px-3 md:px-0'>
        <h2 className='font-g-bold'>Total Number of Users</h2>

        <div className='num-container bg-primary mt-5'>
          <ul className='flex items-center justify-center h-full gap-0.5 md:gap-5'>
            {number.map((num, index) => {
              return (
                <li
                  className='num-box text-center flex items-center justify-center'
                  key={index}
                >
                  <span className='num-text font-g-bold'>{num}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
