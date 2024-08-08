import { useState } from "react";
import { Button, Modal } from "antd";
import { ConfigProvider } from "antd";
import { FormPhoneV } from "./form-phone-verification";

export const ModalPhoneV = () => {
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
        <Button type="primary" onClick={showModal}>
          Modal Phone
        </Button>
        <Modal
          onOk={handleOk}
          onCancel={handleCancel}
          open={isModalOpen}
          footer={[<div key={""} />]}
        >
          <FormPhoneV onClose={handleCancel} />
        </Modal>
      </ConfigProvider>
    </div>
  );
};
