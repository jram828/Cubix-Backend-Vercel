// import  { useState } from "react";
import { Button, Form, Input, ConfigProvider } from "antd";
import { ModalRecovery } from "../recuperar-contraseña/modal-recovery";
import { useDispatch } from "react-redux";
import { Login, setLogged } from "../../../Redux/Actions/createUser";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const FormSignIn = ({ onClose }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const navegate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(Login(values.username, values.password));
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if(loggedUser) dispatch(setLogged(true));
    onClose();
    navegate("/");
    // window.location.reload();
  };

  // window.localStorage.setItem("loggedUser", JSON.stringify(data.usuario));
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorBgContainer: "#20242A",
            colorText: "#9DC7F1",
            colorBorder: "#9DC7F1",
            colorBgContainerDisabled: "#434343",
            colorTextDisabled: "#808080",
            borderColorDisabled: "#434343",
          },
          Input: {
            colorPrimary: "#030303",
            colorBgContainer: "#2C323A",
            colorTextPlaceholder: "#808080",
            colorText: "#FFFF",
            colorBorder: "#2C323A",
            algorithm: true,
            colorBgBase: "#2C323A",
          },
          Divider: {
            colorText: "#556171",
            algorithm: true,
            colorBgContainer: "#556171",
          },
        },
      }}
    >
      <p className="text-2xl mb-4">Sign In</p>

      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input placeholder="Username" size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <ModalRecovery />

        <div className="flex flex-col">
          <Button
            block
            className="mb-2"
            type="primary"
            size="large"
            htmlType="submit"
          >
            Enter
          </Button>
          <Button
            block
            className="mb-2"
            type="default"
            size="large"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
        <p className="text-white text-center my-3">
          Don’t have an account yet? <a href="#">Sign up</a>
        </p>
      </Form>
    </ConfigProvider>
  );
};

FormSignIn.propTypes = {
  onClose: PropTypes.func.isRequired,
};
