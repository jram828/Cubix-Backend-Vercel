import { Form, Input, Button } from "antd";
import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import icon from "../../assets/Icon.svg";

const EmailForm = ({ onSubmit, onclose }) => {
  const [, setEmail] = useState("");
  const [form] = Form.useForm();

  const URL = "https://cubix.onrender.com/users/verify-email";

  const showSuccessToast = (email) => {
    toast.success(`Email sent successfully to ${email}!`);
  };

  const showErrorToast = (error) => {
    toast.error(`Error: ${error.message}`);
  };

  const handleFinish = async (values) => {
    const { email } = values;
    setEmail(email);
    try {
      const response = await axios.post(URL, { email });

      if (response.status === 200) {
        console.log("Email enviado con éxito:", email);

        showSuccessToast(email);
        if (onSubmit) {
          onSubmit(values);
        }
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      showErrorToast(error);
    }

    form.resetFields();

    setTimeout(() => {
      onclose();
    }, 3000);
  };

  return (
    <div>
      <button className="flex flex-row gap-2 items-center">
        <img src={icon} />
        <p className="text-2xl text-white">Recovery Password</p>
      </button>

      <p className="text-base mb-5 text-white">
        Enter your email address to receive reset instructions.
      </p>

      <Form form={form} onFinish={handleFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input className="border-0" placeholder="E-mail" size={"large"} />
        </Form.Item>
        <div className="flex flex-col gap-2">
          <Button type="primary" block size={"large"} htmlType="submit">
            Send
          </Button>
          <Button type="default" block size="large" onClick={onclose}>
            Cancelar
          </Button>
          <p className="text-white text-center my-3">
            {" "}
            still need help? <a>Contact us by email</a>
          </p>
        </div>
      </Form>

      <ToastContainer />
    </div>
  );
};

EmailForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onclose: PropTypes.func.isRequired,
};

export default EmailForm;
