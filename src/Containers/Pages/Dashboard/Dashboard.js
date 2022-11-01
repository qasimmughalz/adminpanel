import React from "react";
import "./Dashboard.css";
import userImg from "../../../Assets/img/user.svg";
import bannerImgOne from "../../../Assets/img/banner-one-img.svg";
import bannerImgTwo from "../../../Assets/img/banner-img-two.svg";
import TopNav from "../../../Components/TopNav/TopNav";
import TrashIcon from "../../../Components/TrashIcon";

const Dashboard = () => {

    
    let number = [...'98765432123456']


  return (
    <div className="w-full dashboard ">

        <TopNav title='Dashboard'/>

      {/* =============== Banners ======== */}

      <div className="flex flex-wrap gap-5 justify-center px-3 md:px-0">
        <div className="flex items-center h-full  w-full   banner-card">
            <img src={bannerImgOne} className='banner-style'/>
          <div className=" pl-8">
            <h1 className="font-g-bold">987,654</h1>
            <p className="font-g-medium">Total Number Of Vendors</p>
          </div>
        </div>

        <div className="flex h-full w-full   items-center banner-card">
        <img src={bannerImgTwo} className='banner-style'/>
          <div className=" pl-8">
            <h1 className="font-g-bold">987,654</h1>
            <p className="font-g-medium">Total Number Of Vendors</p>
          </div>
        </div>
      </div>

     

       {/* =============== Registered List  ======== */}

      <div className="flex flex-wrap gap-5 justify-center mt-11 px-3 md:px-0">
        <div className="list-cards w-full  pl-8 pt-6">
          <h1 className="font-g-bold">Vendors Registered</h1>
          <ul className="vendor-registered-list pr-4 mr-5 mt-6">
            <li className="vendor-registered-list-item ">
                <div className="flex justify-between items-center h-full px-5">
                    <div className="flex  items-center">
                    <img src={userImg} className="user-img" />
                    <p className="font-g-bold mb-0 ml-5 ">James Robert</p>
                    </div>
                <div>
                  <div className="trash-circle text-center flex items-center justify-center">
                        <TrashIcon/>
                  </div>
                </div>
              </div>
            </li>

            <li className="vendor-registered-list-item mt-5">
              <div className="flex justify-between items-center h-full px-5">
                <div className="flex  items-center">
                  <img src={userImg} className="user-img" />
                  <p className="font-g-bold mb-0 ml-5">John Smith</p>
                </div>
                <div className="trash-circle text-center flex items-center justify-center">
                        <TrashIcon/>
                  </div>
              </div>
            </li>

            <li className="vendor-registered-list-item mt-5">
              <div className="flex justify-between items-center h-full px-5">
                <div className="flex  items-center">
                  <img src={userImg} className="user-img" />
                  <p className="font-g-bold mb-0 ml-5">Albot Sevrus </p>
                </div>
                <div className="trash-circle text-center flex items-center justify-center">
                        <TrashIcon/>
                  </div>
              </div>
            </li>

            <li className="vendor-registered-list-item mt-5">
              <div className="flex justify-between items-center h-full px-5">
                <div className="flex  items-center">
                  <img src={userImg} className="user-img" />
                  <p className="font-g-bold mb-0 ml-5">Simon Alex</p>
                </div>
                <div className="trash-circle text-center flex items-center justify-center">
                        <TrashIcon/>
                  </div>
              </div>
            </li>

            <li className="vendor-registered-list-item mt-5">
              <div className="flex justify-between items-center h-full px-5">
                <div className="flex  items-center">
                  <img src={userImg} className="user-img" />
                  <p className="font-g-bold mb-0 ml-5">Dean Ambros</p>
                </div>
                <div className="trash-circle text-center flex items-center justify-center">
                        <TrashIcon/>
                  </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="list-cards w-full  pl-8 pt-6">
          <h1 className="font-g-bold">Shopper Registered</h1>
          <ul className="vendor-registered-list pr-4 mr-5 mt-5">
            <li className="vendor-registered-list-item ">
              <div className="flex justify-between items-center h-full px-5">
                <div className="flex  items-center">
                  <img src={userImg} className="user-img" />
                  <p className="font-g-bold mb-0 ml-5">Simon Alex</p>
                </div>
                <div className="trash-circle text-center flex items-center justify-center">
                        <TrashIcon/>
                  </div>
              </div>
            </li>

            <li className="vendor-registered-list-item mt-5">
              <div className="flex justify-between items-center h-full px-5">
                <div className="flex  items-center">
                  <img src={userImg} className="user-img" />
                  <p className="font-g-bold mb-0 ml-5">Peter Parker</p>
                </div>
                <div className="trash-circle text-center flex items-center justify-center">
                        <TrashIcon/>
                  </div>
              </div>
            </li>

            <li className="vendor-registered-list-item mt-5">
              <div className="flex justify-between items-center h-full px-5">
                <div className="flex  items-center">
                  <img src={userImg} className="user-img" />
                  <p className="font-g-bold mb-0 ml-5">James Robert</p>
                </div>
                <div className="trash-circle text-center flex items-center justify-center">
                        <TrashIcon/>
                  </div>
              </div>
            </li>

            <li className="vendor-registered-list-item mt-5">
              <div className="flex justify-between items-center h-full px-5">
                <div className="flex  items-center">
                  <img src={userImg} className="user-img" />
                  <p className="font-g-bold mb-0 ml-5">James Robert</p>
                </div>
                <div className="trash-circle text-center flex items-center justify-center">
                        <TrashIcon/>
                  </div>
              </div>
            </li>

            <li className="vendor-registered-list-item mt-5">
              <div className="flex justify-between items-center h-full px-5">
                <div className="flex  items-center">
                  <img src={userImg} className="user-img" />
                  <p className="font-g-bold mb-0 ml-5">James Robert</p>
                </div>
                <div className="trash-circle text-center flex items-center justify-center">
                        <TrashIcon/>
                  </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

    {/* =============== Total Users  ======== */}


    <div className="total-users mt-10 mx-auto mb-16 px-3 md:px-0">  
        <h2 className="font-g-bold">Total Number of Users</h2>

        <div className="num-container bg-primary mt-5">

            <ul className="flex items-center justify-center h-full gap-0.5 md:gap-5">
              { number.map((num, index) =>{
                  return <li className="num-box text-center flex items-center justify-center" key={index}>
                  <span className="num-text font-g-bold">{num}</span>
              </li>
               
              })
                }
            </ul>
        </div>
    </div>

    









    </div>
  );
};

export default Dashboard;
