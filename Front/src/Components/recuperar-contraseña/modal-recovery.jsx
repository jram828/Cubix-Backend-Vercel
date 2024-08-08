import { useState } from "react";
import { Modal } from "antd";
import { ConfigProvider } from "antd";
import { FormRecovery } from "./form-recovery";

export const ModalRecovery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              colorBgBase: "#20242A",
              colorBorder: "#556171",
              colorBorderBg: "#556171",
              colorText: "#FFFFFF",
              algorithm: true,
              titleFontSize: 24,
            },
          },
        }}
      >
        <a
          className="bg-none text-white sm:ml-[362px] "
          type=""
          onClick={showModal}
        >
          Forgot Password?
        </a>
        <Modal
          className=" "
          style={{}}
          onOk={handleOk}
          onCancel={handleCancel}
          open={isModalOpen}
          footer={[<div key={""}></div>]}
        >
          <FormRecovery onclose={handleCancel} />
        </Modal>
      </ConfigProvider>
    </div>
  );
};
