import React from 'react';
import TopNav from '../../../Components/TopNav/TopNav';
import HelpRequestUsers from './HelpRequestUsers';

const HelpRequest = () => {
  return (
    <div className='w-full'>
      <TopNav title={'Help Request'} />
      <HelpRequestUsers />
    </div>
  );
};

export default HelpRequest;
