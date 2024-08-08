import { Button } from "antd";
import { useState } from "react";
import "./settingWallet.css";
import Withdrawal from "../Withdrawal/Withdrawal";
import clock from "../../../assets/clock.png";
import email from "../../../assets/email.png";
import TransactionHistory from "../Transaction History/TransactionHistory";
import Tether from "../../../assets/Tether.svg";
import arrowDown from "../../../assets/arrow-down.svg";
import arrowright from "../../../assets/arrow-right.svg";

export default function SettingWallet() {
  const [selectedButton, setSelectedButton] = useState("deposit");
  const [showTetherComponent, setShowTetherComponent] = useState(false);
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);

  const handleButtonClick = (key) => {
    setSelectedButton(key);
    setShowTetherComponent(false);
    setShowTransactionHistory(false); // Reset when other buttons are clicked
  };

  const handleTetherClick = () => {
    setShowTetherComponent(true);
  };

  const handleTransactionHistoryClick = () => {
    setShowTransactionHistory(true);
  };

  return (
    <div className="content-wallet">
      {!showTetherComponent && !showTransactionHistory ? (
        <div className="flex flex-col gap-4">
          <h2>Wallet</h2>
          <div className="coin sm:w-[485px] w-[350px] m-auto flex justify-between mt-5 h-[60px] rounded-xl relative bg-[#181C20] items-center p-[16px] ">
            <div className="flex items-center ">
              <div className="image mr-3 ">
                <img src={Tether} alt="" />
              </div>
              <div className="">
                <p className="text-[22px] text-white font-semibold  ">Tether</p>
                <p className="text-white text-[13px] ">Withdrawal USDT</p>
              </div>
            </div>
            <div className="flex items-center ">
              <div className="text-white mr-3 ">
                <p>0.00 USDT</p>
                <p>U$ 0.00</p>
              </div>
              <div>
                <img src={arrowDown} alt="" />
              </div>
            </div>
          </div>

          <div
            selectedKeys={[selectedButton]}
            className="sm:w-[400px] w-[350px] border border-slate-400 rounded-lg flex justify-center m-auto h-[45px] p-1 "
          >
            <Button
              key="deposit"
              className={`wallet-button  no-hover ${
                selectedButton === "deposit" ? "wallet-button-selected" : ""
              }`}
              onClick={() => handleButtonClick("deposit")}
            >
              Deposit
            </Button>
            <Button
              key="withdrawal"
              className={`wallet-button no-hover ${
                selectedButton === "withdrawal" ? "wallet-button-selected" : ""
              }`}
              onClick={() => handleButtonClick("withdrawal")}
            >
              Withdrawal
            </Button>
          </div>

          <div className="wallet-content">
            {selectedButton === "deposit" && (
              <div>
                <h3 className="text-[#778393]">Deposit Network</h3>

                <div className=" sm:w-[485px] w-[350px] flex mt-5 h-[60px] mb-2 justify-between  rounded-xl relative bg-[#181C20] items-center p-[16px]  ">
                  <div className="flex items-center">
                    <div className="image mr-3 ">
                      <img src={Tether} alt="" />
                    </div>
                    <div className="">
                      <p className="text-[22px] text-white font-semibold  ">
                        Tron Network
                      </p>
                      <p className="text-white text-[13px] ">Tether</p>
                    </div>
                  </div>
                  <img src={arrowDown} alt="" />
                </div>

                <div className="mt-5">
                  <p className="text-[#778393] text-[16px]">Quick Tips</p>
                  <p className="text-white text-[14px] p-2 bg-[#181C20] rounded-lg">
                    Please always check the address of your deposit wallet on
                    our website before making your transactions.
                  </p>
                </div>
              </div>
            )}

            {selectedButton === "withdrawal" && (
              <div
                className="coin sm:w-[485px] flex mt-5 h-[60px] justify-between rounded-xl relative cursor-pointer bg-[#181C20] items-center p-[16px] "
                onClick={handleTetherClick}
              >
                <div className="flex items-center  ">
                  <div className="image mr-3 ">
                    <img src={Tether} alt="" />
                  </div>
                  <div className="">
                    <p className="text-[22px] text-white font-semibold  ">
                      Tether
                    </p>
                    <p className="text-white text-[13px] ">Withdrawal USDT</p>
                  </div>
                </div>
                <div>
                  <img src={arrowright} alt="" />
                </div>
              </div>
            )}

            <div className="mt-5 border-t-[.25px] border-[#556171]   ">
              <p className="text-[#778]">Options</p>

              <div
                className="flex mt-3"
                onClick={handleTransactionHistoryClick}
              >
                <img className="w-[24px] mr-3" src={clock} alt="" />
                <p className="text-white cursor-pointer">Transaction History</p>
              </div>
              <div className="flex mt-3">
                <img className="w-[24px] mr-3" src={email} alt="" />
                <p className="text-white">Help by E-mail</p>
              </div>
            </div>
          </div>
        </div>
      ) : showTransactionHistory ? (
        <TransactionHistory />
      ) : (
        <Withdrawal />
      )}
    </div>
  );
}
