import React, { useState } from 'react';
import './TopNav.css';
import userImg from '../../Assets/img/user-img.svg';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Containers/Redux/actions/action-creators/AuthActions';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../Assets/img/logo.svg';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo2 from '../../Assets/img/logo2.svg';
import { useEffect } from 'react';
import UserCircle from '../../Assets/img/user-circle.png';
import Password from '../../Assets/img/password.png';
import Logout from '../../Assets/img/logout.png';
const TopNav = ({ title }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [margin, setMargin] = useState(true);
  const [mobileSideBar, setMobileSidebar] = useState(false);

  useEffect(() => {
    if (location.pathname === '/profile') {
      setMargin(false);
    }
  }, [location]);

  return (
    <div className={`bg-white ${margin ? 'mb-12' : 'mb-0'}  relative`}>
      <div className='flex justify-between top-nav items-center m-auto px-8 md:px-0'>
        <div>
          <h2 className='font-g-bold'>{title}</h2>
        </div>
        <div>
          <ul className=' gap-5 items-center md:flex hidden'>
            <li className='search-box '>
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
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M16.4437 16.4438L21 21'
                  stroke='#12C4E0'
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </li>

            <li className='notification-box'>
              <svg
                width='24'
                height='27'
                viewBox='0 0 24 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M23.6 18.9875C22.8625 17.7125 21.975 15.2875 21.975 11V10.1125C21.975 4.575 17.5375 0.0375 12.075 0H12C10.6884 0.0016405 9.38999 0.2616 8.17888 0.765035C6.96777 1.26847 5.86768 2.00552 4.94141 2.93411C4.01515 3.86269 3.28085 4.96463 2.78045 6.177C2.28005 7.38936 2.02334 8.68842 2.02498 10V11C2.02498 15.2875 1.13748 17.7125 0.399982 18.9875C0.221621 19.2913 0.126686 19.6369 0.124785 19.9892C0.122884 20.3415 0.214085 20.6881 0.389157 20.9938C0.564229 21.2996 0.81696 21.5536 1.12177 21.7303C1.42659 21.907 1.77266 22 2.12498 22H6.99998C6.99998 23.3261 7.52677 24.5979 8.46445 25.5355C9.40213 26.4732 10.6739 27 12 27C13.3261 27 14.5978 26.4732 15.5355 25.5355C16.4732 24.5979 17 23.3261 17 22H21.875C22.2272 22.0022 22.5737 21.9108 22.8791 21.7351C23.1844 21.5594 23.4375 21.3057 23.6125 21C23.786 20.6926 23.8761 20.3451 23.8739 19.9921C23.8717 19.6391 23.7773 19.2928 23.6 18.9875ZM12 25C11.2053 24.9967 10.4442 24.6796 9.8823 24.1177C9.3204 23.5558 9.00327 22.7946 8.99998 22H15C14.9967 22.7946 14.6796 23.5558 14.1177 24.1177C13.5558 24.6796 12.7946 24.9967 12 25Z'
                  fill='white'
                />
              </svg>
            </li>

            <li className='user-box dropdown'>
              <img src={userImg} />
              <div className='dropdown-content'>
                <div
                  className='flex items-center border-b-2 border-b-[#BFBFBF] py-5 px-4'
                  onClick={() => navigate('/profile')}
                >
                  <img
                    src={UserCircle}
                    alt='user'
                    className='h-[36px] w-[36px]'
                  />
                  <p className='font-regular text-[18px] ml-2 line-height-[30px] cursor-pointer'>
                    Profile
                  </p>
                </div>
                <div className='flex items-center border-b-2 border-b-[#BFBFBF] py-5 px-4'>
                  <img
                    src={Password}
                    alt='user'
                    className='h-[36px] w-[36px]'
                  />
                  <p className='font-regular text-[18px] ml-2 line-height-[30px] cursor-pointer'>
                    Change Password
                  </p>
                </div>
                <div
                  className='flex items-center  py-5 px-4'
                  onClick={() => dispatch(logoutUser())}
                >
                  <img src={Logout} alt='user' className='h-[36px] w-[36px]' />
                  <p className='font-regular text-[18px] ml-2 line-height-[30px] cursor-pointer'>
                    Logout
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <i
            className='fas fa-bars fa-2x inline-block md:hidden cursor-pointer'
            id='bars'
            onClick={() => setMobileSidebar(true)}
          ></i>
        </div>
      </div>
      {/*Mobile Side bar */}

      <div
        className={`mobile-sidebar block md:hidden pl-4 ${
          mobileSideBar ? 'menu-active' : ''
        }`}
      >
        <div className='logo-section h-[90px] flex justify-between  items-center p-4 '>
          <div className='logo-section'>
            <img src={logo} />
            <img src={logo2} className='img-2' />
          </div>
          <i
            className='fas fa-times fa-2x inline-block cursor-pointer '
            onClick={() => setMobileSidebar(false)}
          ></i>
        </div>
        <div className='menu-section px-4'>
          <ul className='list-none'>
            <NavLink
              to='/dashboard'
              className='nav-item flex gap-3 mt-5'
              onClick={() => setMobileSidebar(false)}
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 10H7C7.26522 10 7.51957 9.89464 7.70711 9.70711C7.89464 9.51957 8 9.26522 8 9V1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10ZM0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H7C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17V13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12H1C0.734784 12 0.48043 12.1054 0.292893 12.2929C0.105357 12.4804 0 12.7348 0 13V17ZM10 17C10 17.2652 10.1054 17.5196 10.2929 17.7071C10.4804 17.8946 10.7348 18 11 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V10C18 9.73478 17.8946 9.48043 17.7071 9.29289C17.5196 9.10536 17.2652 9 17 9H11C10.7348 9 10.4804 9.10536 10.2929 9.29289C10.1054 9.48043 10 9.73478 10 10V17ZM11 7H17C17.2652 7 17.5196 6.89464 17.7071 6.70711C17.8946 6.51957 18 6.26522 18 6V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0H11C10.7348 0 10.4804 0.105357 10.2929 0.292893C10.1054 0.48043 10 0.734784 10 1V6C10 6.26522 10.1054 6.51957 10.2929 6.70711C10.4804 6.89464 10.7348 7 11 7Z'
                  fill='#A1A1A1'
                />
              </svg>
              <p className=' font-g-regular '>Dashboard</p>
            </NavLink>

            <NavLink
              to='/processedOrder'
              className='nav-item flex gap-3 mt-5'
              onClick={() => setMobileSidebar(false)}
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M19.41 9.58L10.41 0.58C10.05 0.22 9.55 0 9 0H2C0.9 0 0 0.9 0 2V9C0 9.55 0.22 10.05 0.59 10.42L9.59 19.42C9.95 19.78 10.45 20 11 20C11.55 20 12.05 19.78 12.41 19.41L19.41 12.41C19.78 12.05 20 11.55 20 11C20 10.45 19.77 9.94 19.41 9.58ZM3.5 5C2.67 5 2 4.33 2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5C5 4.33 4.33 5 3.5 5Z'
                  fill='#A1A1A1'
                />
              </svg>

              <p className=' font-g-regular  '>Processed Order</p>
            </NavLink>

            <NavLink
              to='/requestPosting'
              className='nav-item flex gap-3 mt-5'
              onClick={() => setMobileSidebar(false)}
            >
              <svg
                width='25'
                height='13'
                viewBox='0 0 25 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M22.5 7.16667C23.2 7.16667 23.7833 7.40001 24.1333 7.86667C24.6 8.33334 24.8333 8.91667 24.8333 9.5L15.5 13L7.33331 10.6667V0.166672H9.54998L18.0666 3.31667C18.65 3.55 19 4.01667 19 4.60001C19 4.95001 18.8833 5.30001 18.65 5.53334C18.4166 5.76667 18.0666 6 17.6 6H14.3333L12.35 5.18334L12 6.23334L14.3333 7.16667H22.5ZM0.333313 0.166672H4.99998V13H0.333313V0.166672Z'
                  fill='#A1A1A1'
                />
              </svg>
              <p className='font-g-regular'>Request Posting</p>
            </NavLink>

            <NavLink
              to='/featuredVendors'
              className='nav-item flex gap-3 mt-5'
              onClick={() => setMobileSidebar(false)}
            >
              <svg
                width='24'
                height='18'
                viewBox='0 0 24 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.26 0.263997C16.849 0.263997 20.619 3.657 21.256 8.064H23.96L19.41 13.264L14.86 8.064H17.876C17.5851 6.79143 16.8714 5.65507 15.8514 4.84048C14.8314 4.02588 13.5653 3.58118 12.26 3.579C10.375 3.579 8.71098 4.502 7.65798 5.893L5.43498 3.358C6.28584 2.38502 7.33516 1.60549 8.51238 1.07182C9.6896 0.538144 10.9674 0.262698 12.26 0.263997ZM11.74 17.736C7.16398 17.736 3.38098 14.343 2.74398 9.936H0.039978L4.58998 4.736C6.11098 6.465 7.61898 8.207 9.13998 9.936H6.12398C6.41481 11.2086 7.12851 12.3449 8.14852 13.1595C9.16854 13.9741 10.4346 14.4188 11.74 14.421C13.625 14.421 15.289 13.498 16.342 12.107L18.565 14.642C17.7149 15.616 16.6658 16.3962 15.4884 16.9299C14.311 17.4637 13.0327 17.7386 11.74 17.736Z'
                  fill='#A2A2A2'
                />
              </svg>

              <p className=' font-g-regular  '>Featured Vendors</p>
            </NavLink>

            <NavLink
              to='/helpRequest'
              className='nav-item flex gap-3 mt-5'
              onClick={() => setMobileSidebar(false)}
            >
              <svg
                width='16'
                height='20'
                viewBox='0 0 16 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16 6L10 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H14C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18V6ZM5 17H3V8H5V17ZM9 17H7V11H9V17ZM13 17H11V14H13V17ZM10 7H9V2L14 7H10Z'
                  fill='#A2A2A2'
                />
              </svg>
              <p className=' font-g-regular  '>Help Requests</p>
            </NavLink>

            <NavLink
              to='/reportedUsers'
              className='nav-item flex gap-3 mt-5'
              onClick={() => setMobileSidebar(false)}
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.32 0H5.68C5.42 0 5.16 0.11 4.98 0.29L0.29 4.98C0.11 5.16 0 5.42 0 5.68V12.31C0 12.58 0.11 12.83 0.29 13.02L4.97 17.7C5.16 17.89 5.42 18 5.68 18H12.31C12.58 18 12.83 17.89 13.02 17.71L17.7 13.03C17.7931 12.9369 17.8668 12.8261 17.9165 12.7042C17.9663 12.5823 17.9913 12.4517 17.99 12.32V5.68C17.99 5.41 17.88 5.16 17.7 4.97L13.02 0.29C12.84 0.11 12.58 0 12.32 0ZM9 14.3C8.28 14.3 7.7 13.72 7.7 13C7.7 12.28 8.28 11.7 9 11.7C9.72 11.7 10.3 12.28 10.3 13C10.3 13.72 9.72 14.3 9 14.3ZM9 10C8.45 10 8 9.55 8 9V5C8 4.45 8.45 4 9 4C9.55 4 10 4.45 10 5V9C10 9.55 9.55 10 9 10Z'
                  fill='#A2A2A2'
                />
              </svg>

              <p className='font-g-regular '>Reported Users</p>
            </NavLink>

            <NavLink
              to='/reportedBugs'
              className='nav-item flex gap-3 mt-5'
              onClick={() => setMobileSidebar(false)}
            >
              <svg
                width='16'
                height='18'
                viewBox='0 0 16 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 5H13.19C12.739 4.21774 12.1168 3.54767 11.37 3.04L12.3 2.11C12.3926 2.01742 12.466 1.90751 12.5161 1.78655C12.5662 1.66558 12.592 1.53593 12.592 1.405C12.592 1.27407 12.5662 1.14442 12.5161 1.02346C12.466 0.902495 12.3926 0.792584 12.3 0.700002C12.2074 0.607421 12.0975 0.53398 11.9765 0.483876C11.8556 0.433771 11.7259 0.407982 11.595 0.407982C11.3306 0.407982 11.077 0.513025 10.89 0.700002L9.42 2.17C8.96 2.06 8.49 2 8 2C7.51 2 7.04 2.06 6.59 2.17L5.11 0.700002C5.01742 0.607421 4.90751 0.53398 4.78654 0.483876C4.66558 0.433771 4.53593 0.407982 4.405 0.407982C4.27407 0.407982 4.14442 0.433771 4.02346 0.483876C3.90249 0.53398 3.79258 0.607421 3.7 0.700002C3.51302 0.88698 3.40798 1.14058 3.40798 1.405C3.40798 1.66943 3.51302 1.92302 3.7 2.11L4.62 3.04C3.88 3.55 3.26 4.22 2.81 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7H2.09C2.04 7.33 2 7.66 2 8V9H1C0.45 9 0 9.45 0 10C0 10.55 0.45 11 1 11H2V12C2 12.34 2.04 12.67 2.09 13H1C0.45 13 0 13.45 0 14C0 14.55 0.45 15 1 15H2.81C3.85 16.79 5.78 18 8 18C10.22 18 12.15 16.79 13.19 15H15C15.55 15 16 14.55 16 14C16 13.45 15.55 13 15 13H13.91C13.96 12.67 14 12.34 14 12V11H15C15.55 11 16 10.55 16 10C16 9.45 15.55 9 15 9H14V8C14 7.66 13.96 7.33 13.91 7H15C15.55 7 16 6.55 16 6C16 5.45 15.55 5 15 5ZM9 13H7C6.45 13 6 12.55 6 12C6 11.45 6.45 11 7 11H9C9.55 11 10 11.45 10 12C10 12.55 9.55 13 9 13ZM9 9H7C6.45 9 6 8.55 6 8C6 7.45 6.45 7 7 7H9C9.55 7 10 7.45 10 8C10 8.55 9.55 9 9 9Z'
                  fill='#A2A2A2'
                />
              </svg>
              <p className='y font-g-regular '>Reported Bugs</p>
            </NavLink>

            <NavLink
              to='/callBacks'
              className='nav-item flex gap-3 mt-5'
              onClick={() => setMobileSidebar(false)}
            >
              <svg
                width='14'
                height='18'
                viewBox='0 0 14 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.94332 6.48333L5.56499 7.72C5.74593 8.34408 6.00049 8.94442 6.32332 9.50833C6.65931 10.0684 7.06351 10.5845 7.52665 11.045L9.31165 10.495C10.3117 10.1867 11.4033 10.5033 12.0683 11.295L13.085 12.505C13.4966 12.9907 13.703 13.6177 13.6603 14.2529C13.6177 14.8882 13.3295 15.4819 12.8567 15.9083C11.1983 17.4217 8.64499 17.9333 6.73332 16.4317C5.0532 15.1087 3.63162 13.4872 2.53998 11.6483C1.44595 9.81816 0.713791 7.79481 0.383318 5.68833C0.0166516 3.31833 1.75165 1.42167 3.91499 0.775001C5.20499 0.388334 6.58165 1.05167 7.05499 2.28833L7.61332 3.74667C7.97998 4.70667 7.71665 5.78833 6.94332 6.48167V6.48333Z'
                  fill='#A2A2A2'
                />
              </svg>

              <p className='font-g-regular '>Call Backs </p>
            </NavLink>

            <NavLink
              to='/manageFaqs'
              className='nav-item flex gap-3 mt-5'
              onClick={() => setMobileSidebar(false)}
            >
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='ant-design:question-circle-outlined'>
                  <path
                    id='Vector'
                    d='M11 1.375C5.68477 1.375 1.375 5.68477 1.375 11C1.375 16.3152 5.68477 20.625 11 20.625C16.3152 20.625 20.625 16.3152 20.625 11C20.625 5.68477 16.3152 1.375 11 1.375ZM11 18.9922C6.58711 18.9922 3.00781 15.4129 3.00781 11C3.00781 6.58711 6.58711 3.00781 11 3.00781C15.4129 3.00781 18.9922 6.58711 18.9922 11C18.9922 15.4129 15.4129 18.9922 11 18.9922Z'
                    fill='#A2A2A2'
                  />
                  <path
                    id='Vector_2'
                    d='M13.3977 6.8041C12.7531 6.23906 11.9023 5.92969 11 5.92969C10.0977 5.92969 9.24687 6.24121 8.60234 6.8041C7.93203 7.39063 7.5625 8.1791 7.5625 9.02344V9.18672C7.5625 9.28125 7.63984 9.35859 7.73438 9.35859H8.76562C8.86016 9.35859 8.9375 9.28125 8.9375 9.18672V9.02344C8.9375 8.07598 9.86348 7.30469 11 7.30469C12.1365 7.30469 13.0625 8.07598 13.0625 9.02344C13.0625 9.6916 12.5898 10.3039 11.8572 10.5854C11.4018 10.7594 11.015 11.0645 10.7379 11.4641C10.4564 11.8723 10.3104 12.3621 10.3104 12.8584V13.3203C10.3104 13.4148 10.3877 13.4922 10.4822 13.4922H11.5135C11.608 13.4922 11.6854 13.4148 11.6854 13.3203V12.8326C11.6865 12.624 11.7504 12.4207 11.8688 12.249C11.9872 12.0773 12.1547 11.9453 12.3492 11.8701C13.6168 11.3824 14.4354 10.2652 14.4354 9.02344C14.4375 8.1791 14.068 7.39063 13.3977 6.8041ZM10.1406 15.7266C10.1406 15.9545 10.2312 16.1731 10.3923 16.3342C10.5535 16.4954 10.7721 16.5859 11 16.5859C11.2279 16.5859 11.4465 16.4954 11.6077 16.3342C11.7688 16.1731 11.8594 15.9545 11.8594 15.7266C11.8594 15.4986 11.7688 15.2801 11.6077 15.1189C11.4465 14.9577 11.2279 14.8672 11 14.8672C10.7721 14.8672 10.5535 14.9577 10.3923 15.1189C10.2312 15.2801 10.1406 15.4986 10.1406 15.7266Z'
                    fill='#A2A2A2'
                  />
                </g>
              </svg>

              <p className='font-g-regular '>FAQ's</p>
            </NavLink>
            <NavLink
              to='/profile'
              className='nav-item flex gap-3 mt-5'
              onClick={() => setMobileSidebar(false)}
            >
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='#A2A2A2'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 25.8C11.25 25.8 7.935 23.88 6 21C6.045 18 12 16.35 15 16.35C18 16.35 23.955 18 24 21C23.0083 22.4766 21.6688 23.6867 20.0993 24.5238C18.5299 25.3608 16.7787 25.7991 15 25.8ZM15 4.5C16.1935 4.5 17.3381 4.97411 18.182 5.81802C19.0259 6.66193 19.5 7.80653 19.5 9C19.5 10.1935 19.0259 11.3381 18.182 12.182C17.3381 13.0259 16.1935 13.5 15 13.5C13.8065 13.5 12.6619 13.0259 11.818 12.182C10.9741 11.3381 10.5 10.1935 10.5 9C10.5 7.80653 10.9741 6.66193 11.818 5.81802C12.6619 4.97411 13.8065 4.5 15 4.5ZM15 0C13.0302 0 11.0796 0.387987 9.25975 1.14181C7.43986 1.89563 5.78628 3.00052 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C5.78628 26.9995 7.43986 28.1044 9.25975 28.8582C11.0796 29.612 13.0302 30 15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 6.705 23.25 0 15 0Z'
                  fill='#A2A2A2'
                />
              </svg>

              <p className='font-g-regular '>Profile</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
