import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Dashboard from '../Pages/Dashboard/Dashboard'
import FeaturedVendors from '../Pages/FeaturedVendors/FeaturedVendors'
import ProcessedOrder from '../Pages/ProcessedOrder/ProcessedOrder'
import RequestPosting from '../Pages/RequestPosting/RequestPosting'

const Authenticated = () => {
  return (
    <>
        <Layout>


            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='processedOrder' element={<ProcessedOrder/>}/>
                <Route path='requestPosting'  element={<RequestPosting/>} />
                <Route path='featuredVendors' element={<FeaturedVendors/>} />

            </Routes>    

        </Layout>
      
    </>
  )
}

export default Authenticated
