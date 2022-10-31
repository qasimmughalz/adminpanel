import React from 'react'
import './TopNav.css'
import userImg from '../../Assets/img/user-img.svg'

const TopNav = ({title}) => {
  return (
    <div className="bg-white mb-12 px-4 ">
        <div className='flex justify-between top-nav items-center m-auto px-1 md:px-0'>
            <div>
                <h2 className='font-g-bold'>{title}</h2>
            </div>
            <div>
                <ul className=' gap-5 items-center md:flex hidden'>
                    <li className='search-box '>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="#12C4E0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.4437 16.4438L21 21" stroke="#12C4E0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </li>
                    
                    <li className='notification-box'>
                    <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.6 18.9875C22.8625 17.7125 21.975 15.2875 21.975 11V10.1125C21.975 4.575 17.5375 0.0375 12.075 0H12C10.6884 0.0016405 9.38999 0.2616 8.17888 0.765035C6.96777 1.26847 5.86768 2.00552 4.94141 2.93411C4.01515 3.86269 3.28085 4.96463 2.78045 6.177C2.28005 7.38936 2.02334 8.68842 2.02498 10V11C2.02498 15.2875 1.13748 17.7125 0.399982 18.9875C0.221621 19.2913 0.126686 19.6369 0.124785 19.9892C0.122884 20.3415 0.214085 20.6881 0.389157 20.9938C0.564229 21.2996 0.81696 21.5536 1.12177 21.7303C1.42659 21.907 1.77266 22 2.12498 22H6.99998C6.99998 23.3261 7.52677 24.5979 8.46445 25.5355C9.40213 26.4732 10.6739 27 12 27C13.3261 27 14.5978 26.4732 15.5355 25.5355C16.4732 24.5979 17 23.3261 17 22H21.875C22.2272 22.0022 22.5737 21.9108 22.8791 21.7351C23.1844 21.5594 23.4375 21.3057 23.6125 21C23.786 20.6926 23.8761 20.3451 23.8739 19.9921C23.8717 19.6391 23.7773 19.2928 23.6 18.9875ZM12 25C11.2053 24.9967 10.4442 24.6796 9.8823 24.1177C9.3204 23.5558 9.00327 22.7946 8.99998 22H15C14.9967 22.7946 14.6796 23.5558 14.1177 24.1177C13.5558 24.6796 12.7946 24.9967 12 25Z" fill="white"/>
                        </svg>
                    </li>

                    <li className='user-box'>
                       <img src={userImg}/>
                    </li> 
                </ul>
                <i className="fas fa-bars inline-block md:hidden" id='bars'></i>
            </div>
            </div>
   </div>
  )
}

export default TopNav
