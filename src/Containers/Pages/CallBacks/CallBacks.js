import React from 'react';
import TopNav from '../../../Components/TopNav/TopNav';
import CallBackUsers from './CallBackUsers';

const CallBacks = () => {
  return (
    <div className='w-full'>
      <TopNav title='Call Backs' />
      <CallBackUsers />
    </div>
  );
};

export default CallBacks;
