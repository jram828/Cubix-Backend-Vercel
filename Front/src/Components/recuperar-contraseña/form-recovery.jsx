import { ConfigProvider } from "antd";
import EmailForm from "./EmailForm";
import { useState } from "react";

import PropTypes from "prop-types";

export const FormRecovery = ({ onclose }) => {
  const [, setEmail] = useState("");
  const [error] = useState("");

  const handleEmailFormSubmit = (values) => {
    console.log("Form submitted with email:", values.email);
    setEmail(values.email); // Almacena el correo electrónico en el estado
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorBgContainer: "#20242A",
            colorText: "#9DC7F1",
            colorBorder: "#9DC7F1",
          },
          Input: {
            colorPrimary: "#030303",
            colorBgContainer: "#2C323A",
            colorTextPlaceholder: "#808080",
            colorText: "#FFFF",
            colorBorder: "",
            algorithm: true,
            colorBgBase: "#2C323A",
          },
        },
      }}
    >
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <EmailForm onSubmit={handleEmailFormSubmit} onclose={onclose} />
    </ConfigProvider>
  );
};

FormRecovery.propTypes = {
  onclose: PropTypes.func.isRequired,
};
