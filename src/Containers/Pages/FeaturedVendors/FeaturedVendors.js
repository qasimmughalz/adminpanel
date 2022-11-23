import React from 'react';
import TopNav from '../../../Components/TopNav/TopNav';
import Article from './Article';
import Giveaays from './Giveaays';
import Vendors from './Vendors';

const FeaturedVendors = () => {
  return (
    <div className='w-full'>
      <TopNav title='Featured Vendors' />
      <div className='container mx-auto flex flex-col lg:flex-row responsive-container'>
        <Vendors />
        <div className='flex flex-col gap-2'>
          <Giveaays />
          <Article />
        </div>
      </div>
    </div>
  );
};

export default FeaturedVendors;
