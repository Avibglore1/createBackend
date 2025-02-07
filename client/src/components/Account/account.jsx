import React, { Component } from "react";
import account from "../../assets/Account/Rectangle 52.png";
import account2 from "../../assets/Account/icons8-message-50 1.png";

export default class Account extends Component {
  render() {
    return (
      <div className="pt-[75px] md:pt-[130px]">
        {/* Refer a Friend Section */}
        <div className="pl-[16px] md:pl-[36px] pb-2 flex flex-row items-center">
          <img src={account2} alt="" className="w-[15px] md:w-[24px]" />
          <p className="font-[Montserrat] text-[16px] md:text-[20px] font-medium leading-[20px] md:leading-[24.38px] pl-2 md:pl-4">
            Refer a Friend
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative">
          <img
            src={account}
            alt=""
            className="w-screen h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-4 md:p-6">
            {/* My Account Heading */}
            <p className="font-[Montserrat] text-[32px] md:text-[64px] font-medium leading-[40px] md:leading-[78.02px]">
              My Account
            </p>

            {/* Name */}
            <div className="container text-center items-center">
              <p className="font-[Kugile] text-[48px] md:text-[128px] font-normal leading-[60px] md:leading-[211.5px]">
                Vedant Nair
              </p>
            </div>

            {/* Coupon Section */}
            <div className="container flex flex-col items-end text-right pr-4 md:pr-28">
              <p className="font-[Montserrat] text-[18px] md:text-[28px] font-normal leading-[24px] md:leading-[39px] pb-2 md:pb-4">
                Apply coupon for your order
              </p>
              <textarea
                className="w-[250px] md:w-[410px] h-[40px] md:h-[55px] text-[16px] md:text-[23px] text-left rounded-[20px] md:rounded-[42px] opacity-50 resize-none pl-3 md:pl-4 pt-1 md:pt-2 whitespace-nowrap overflow-x-auto"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Orders and Account Details Section */}
        <div className="pl-5 md:pl-10 pt-[30px] md:pt-[50px]">
          <span className="font-bold text-[24px] md:text-3xl">Your Orders</span>
          <span className="pl-[10px] md:pl-[25px] text-3xl md:text-5xl font-extralight">
            |
          </span>
          <span className="font-[Montserrat] text-[20px] md:text-[32px] font-normal leading-[24px] md:leading-[39.01px] pl-[10px] md:pl-[30px]">
            Account Details
          </span>
        </div>

        {/* Empty Orders Message */}
        <div className="container flex justify-center items-center text-center font-[Montserrat] text-[18px] md:text-[24px] font-normal leading-[22px] md:leading-[29.26px] py-[50px] md:py-[100px]">
          You haven’t ordered anything
        </div>
      </div>
    );
  }
}