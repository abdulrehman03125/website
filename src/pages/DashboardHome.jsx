import React from 'react'
import DashboardCards from '../components/dashboardcomponets/DashboardCards'

const DashboardHome = () => {
  return (
    <>
      <div className='mb-3'>
        <h1 className='text-3xl mb-4'>Dashboard <br/> wellcome , Bashir Ahmad </h1>
       <DashboardCards/>
         {/* <DashboardCardsa/> */}
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <div>
        
          </div>

        </div>
        <div className="col-span-2">
          {/* Right column content */}
          {/* <ChannelsVisitChart />
          <SalesChart /> */}
        </div>
      </div>
    </>

  )
}

export default DashboardHome