import { Button, ConfigProvider, Form, Input } from "antd";
import { useState } from "react";
import userSquare from "../../../assets/user-square.svg";
import wallet from "../../../assets/wallet-3.svg";
import campana from "../../../assets/campana.svg";
import vector from "../../../assets/Vector.svg";
import closeCircle from "../../../assets/close-circle.svg";
import reloj from "../../../assets/relojj.svg";
import email from "../../../assets/email.svg";

const SidebarWallet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBorder: "#2C323A",
            colorTextPlaceholder: "#808080",
            hoverBg: "#2C323A",
            hoverBorderColor: "#2C323A",
            algorithm: true,
            activeBg: "#2C323A",
            colorBgBase: "#2C323A",
          },
          Button: {
            colorBgContainer: "#20242A",
            colorText: "#9DC7F1",
            colorBorder: "#9DC7F1",
          },
        },
      }}
    >
      <div>
        <button
          onClick={openSidebar}
          className="p-2 bg-blue-500 text-white rounded fixed top-4 right-4 z-50"
        >
          Abrir Sidebar
        </button>
        <div
          className={`fixed inset-y-0 right-0 bg-[#20242A] text-white transform transition-transform  ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:w-6/12 w-full p-4 z-50`}
        >
          <div className="flex flex-row h-full ">
            <div className="hidden h-full md:flex flex-col bg-[#20242A] w-auto border-r-[1px] mr-4 border-[#556171] p-3">
              <Button className="m-3 p-5">
                <img src={userSquare} />
                <p className=""> Accounts</p>
              </Button>
              <Button className="m-3 p-5" type="primary">
                <img src={wallet} />
                Wallet
              </Button>
              <Button className="m-3 p-5">
                <img src={campana} />
                Accounts
              </Button>
            </div>
            <div className="h-full flex flex-col w-auto">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <button>
                    <img src={vector} />
                  </button>
                  <p className="text-xl">Withdrawal Confirmation </p>
                </div>
                <button
                  onClick={closeSidebar}
                  className="text-white text-2xl text-end "
                >
                  <img src={closeCircle} />
                </button>
              </div>

              <div className="">
                <p className="text-slate-500 flex gap-2">
                  You are about to withdraw{" "}
                  <p className="text-white"> 50.000USDT</p>
                </p>
              </div>

              <div className="text-sm m-4">
                <p className="bg-[#181C20] rounded-lg p-3 text-xs lg:text-base">
                  To confirm your withdrawal, enter the verification code we
                  send to your registered cell phone number. This helps ensure
                  the security of your transaction.
                </p>
              </div>
              <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item
                  name="code"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter the 6-digit code"
                    className="bg-[#2C323A]"
                  ></Input>
                </Form.Item>

                <a href="" className="text-end block text-white">
                  Resend code
                </a>
                <div className="flex flex-col gap-4">
                  <Button block size="large" type="primary">
                    Check code
                  </Button>
                  <Button block size="large" type="default">
                    Cancel
                  </Button>
                </div>
              </Form>

              <div>
                <p className="text-lg mb-4 text-[#778393]">Options</p>
                <div className="flex flex-col gap-5 gap-y-10">
                  <div className="flex gap-4">
                    <img src={reloj} />
                    <p className="">Transaction History</p>
                  </div>
                  <div className="flex gap-4">
                    <img src={email} />
                    <p className="">Transaction History</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default SidebarWallet;
