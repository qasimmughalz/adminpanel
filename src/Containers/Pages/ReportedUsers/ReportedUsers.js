import React from 'react';
import TopNav from '../../../Components/TopNav/TopNav';
import ReportedUserData from './ReportedUserData';

const ReportedUsers = () => {
  return (
    <div className='w-full'>
      <TopNav title='Reported Users' />
      <ReportedUserData />
    </div>
  );
};

export default ReportedUsers;
