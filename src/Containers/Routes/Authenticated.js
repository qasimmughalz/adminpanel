import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Dashboard from '../Pages/Dashboard/Dashboard';
import FeaturedVendors from '../Pages/FeaturedVendors/FeaturedVendors';
import HelpRequest from '../Pages/HelpRequest/HelpRequest';
import ProcessedOrder from '../Pages/ProcessedOrder/ProcessedOrder';
import ReportedBugs from '../Pages/ReportedBug/ReportedBugs';
import ReportedUsers from '../Pages/ReportedUsers/ReportedUsers';
import RequestPosting from '../Pages/RequestPosting/RequestPosting';
import CallBacks from '../Pages/CallBacks/CallBacks';
import ManageFaqs from '../Pages/Faqs/ManageFaqs';

const Authenticated = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/processedOrder' element={<ProcessedOrder />} />
          <Route path='/requestPosting' element={<RequestPosting />} />
          <Route path='/featuredVendors' element={<FeaturedVendors />} />
          <Route path='/helpRequest' element={<HelpRequest />} />
          <Route path='/reportedUsers' element={<ReportedUsers />} />
          <Route path='/reportedBugs' element={<ReportedBugs />} />
          <Route path='/callBacks' element={<CallBacks />} />
          <Route path='/manageFaqs' element={<ManageFaqs />} />
          <Route path='*' element={<Dashboard />} />
        </Routes>
      </Layout>
    </>
  );
};

export default Authenticated;
