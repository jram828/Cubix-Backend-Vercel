import { useState } from "react";
import arrow from "../../../assets/arrowLeft.png";
import clock from "../../../assets/clock.png";
import email from "../../../assets/email.png";
import SettingWallet from "../SettingsWallet/SettingWallet";
import { Button, Input } from "antd";

export default function Withdrawal() {
  const [returnWallet, setReturnWallet] = useState(false);

  const handleShowClick = () => {
    setReturnWallet(true);
  };

  return (
    <div>
      {!returnWallet ? (
        <>
          <div className="flex items-center w-[350px] m-auto ">
            <img
              className="w-[24px] h-[24px] cursor-pointer "
              onClick={handleShowClick}
              src={arrow}
              alt=""
            />
            <h1 className="text-white text-center text-[24px] sm:ml-2 ml-12 ">
              Withdrawal USDT
            </h1>
          </div>
          <div className="flex mt-6 w-[350px]  ">
            <p className="text-[#778393] mr-1">Current balance: </p>
            <p className="text-white">00.00 USDT</p>
          </div>
          <div className="mt-5 flex justify-center">
            <Input
              className="sm:w-[485px] w-[350px]  h-[45px] rounded-[8px] bg-[#2C323A] text-[#808080] border-none "
              placeholder="Enter the USDT value"
            />
          </div>
          <p className="text-white  text-[12px]">
            The minimum withdrawal is 20 USDT{" "}
          </p>

          <div className="buttons">
            <div className="flex justify-around mt-5   ">
              <Button className="sm:w-[130px] w-[110px] h-[45px] rounded-[8px] bg-[#2C323A] text-[#808080] border-none ">
                25%
              </Button>
              <Button className="sm:w-[130px] w-[110px] h-[45px] rounded-[8px] bg-[#2C323A] text-[#808080] border-none ">
                50%
              </Button>
              <Button className="sm:w-[130px] w-[110px] h-[45px] rounded-[8px] bg-[#2C323A] text-[#808080] border-none ">
                100%
              </Button>
            </div>
            <div className=" flex justify-center mt-4 ">
              <Button className="bg-[#434343] sm:w-[450px] w-[350px]  h-[45px] text-[#808080] border-none ">
                Next
              </Button>
            </div>
            <div></div>
          </div>

          <div className="mt-5 border-t-[.25px] border-[#556171]   ">
            <p className="text-[#778]">Options</p>

            <div className="flex mt-3">
              <img className="w-[24px] mr-3" src={clock} alt="" />
              <p className="text-white cursor-pointer">Transaction History</p>
            </div>
            <div className="flex mt-3">
              <img className="w-[24px] mr-3" src={email} alt="" />
              <p className="text-white">Help by E-mail</p>
            </div>
          </div>
        </>
      ) : (
        <SettingWallet />
      )}
    </div>
  );
}
