import React from 'react';
import TopNav from '../../../Components/TopNav/TopNav';
import ReportedBugUsers from './ReportedBugUsers';

const ReportedBugs = () => {
  return (
    <div className='w-full'>
      <TopNav title={'Reported Bugs'} />
      <ReportedBugUsers />
    </div>
  );
};

export default ReportedBugs;
