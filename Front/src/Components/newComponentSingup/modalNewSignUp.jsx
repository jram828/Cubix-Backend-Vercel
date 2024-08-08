import { useState } from "react";
import { Button, Modal } from "antd";
import { ConfigProvider } from "antd";

import { NewSignUp } from "./NewSignUp";

export const NewModalSignUp = () => {
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
            },
            Button: {
              colorBgContainer: "#20242A",
              colorText: "#9DC7F1",
              colorBorder: "#9DC7F1",
            },
          },
        }}
      >
        <Button
          type="default"
          onClick={showModal}
          size="large"
          className="px-2 md:px-10"
        >
          Sign Up
        </Button>
        <Modal
          style={{}}
          onOk={handleOk}
          onCancel={handleCancel}
          open={isModalOpen}
          footer={[<div key={""}></div>]}
        >
          <NewSignUp onClose={handleCancel} />
        </Modal>
      </ConfigProvider>
    </div>
  );
};
