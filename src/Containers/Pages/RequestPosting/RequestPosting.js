import React from 'react';
import TopNav from '../../../Components/TopNav/TopNav';
import RequestUsers from './RequestUsers';

const RequestPosting = () => {
  return (
    <div className='w-full'>
      <TopNav title='Request Posting' />
      <RequestUsers />
    </div>
  );
};

export default RequestPosting;
