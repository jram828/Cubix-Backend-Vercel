import { useState } from "react";
import { Button, Modal } from "antd";

import { ConfigProvider } from "antd";
import { FormSignIn } from "./form-sign-in";

export const ModalSingIn = () => {
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
          },
        }}
      >
        <Button
          type="primary"
          onClick={showModal}
          size="large"
          className="px-3 md:px-10"
        >
          Enter
        </Button>
        <Modal
          style={{}}
          onOk={handleOk}
          onCancel={handleCancel}
          open={isModalOpen}
          footer={[<div key={""}></div>]}
        >
          <FormSignIn onClose={handleCancel} />
        </Modal>
      </ConfigProvider>
    </div>
  );
};
