import { useState } from "react";
import { Button, Form, Input, ConfigProvider } from "antd";
import { useDispatch } from "react-redux";
import { createUser, twilioVerify } from "../../../Redux/Actions/createUser";
import PropTypes from "prop-types";
import loader from "../../assets/loader.svg";
import flechaPhone from "../../assets/flecha-phone-v.svg";

export const FormPhoneV = ({ onClose, formData }) => {
  const [submitted, setSubmitted] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setSubmitted(true);
    // dispatch(twilioVerify(formData.phoneNumber, verificationCode));
    const NumeroCompleto = "+" + formData.prefix + formData.phoneNumber;
    console.log(NumeroCompleto);
    try {
      const response = await dispatch(
        twilioVerify(formData.phoneNumber, verificationCode)
      );
      console.log(response);
      if (response.data === "approved") {
        const response =await createUser(formData);
        console.log("Respuesta crear usaurio:", response);
        console.log("User created successfully!");
      } else {
        console.error("Verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during verification or user creation:", error);
      console.error("An error occurred. Please try again.");
    }
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
    console.log(setVerificationCode);
  };
  console.log(verificationCode);
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
        },
      }}
    >
      {submitted ? (
        <div className="flex flex-col">
          <p className="text-white text-2xl mb-4">Completed Check!</p>
          <p className="text-white text-md">
            Your phone number has been successfully verified. Now you&apos;re
            ready to explore all the features of our platform.
          </p>
          <p className="text-white text-md mt-3">
            You will be redirected to our platform in no time.
          </p>
          <img
            src={loader}
            className="flex items-start w-8 h-8 mt-4 animate-spin"
          />
        </div>
      ) : (
        <div>
          <div className="flex gap-3">
            <button onClick={onClose}>
              <img src={flechaPhone} />
            </button>
            <p className="text-3xl text-white">Phone Verification</p>
          </div>

          <Form className="">
            <p className="text-white my-4">
              To complete your registration, we need to verify your phone
              number. We have sent a 6-digit code to{" "}
              <a>{"+" + formData.prefix + formData.phoneNumber}</a>
            </p>
            <Form.Item>
              <p className="text-white mb-5">
                Please enter the code below to continue
              </p>
              <Input
                value={verificationCode}
                onChange={handleVerificationCodeChange}
              />
              <a className="block text-white text-end mt-1 text-xs">
                Resend Code
              </a>
            </Form.Item>
            <div className="flex flex-col ">
              <Button
                block
                className="mb-2"
                type="primary"
                size="large"
                onClick={handleSubmit}
              >
                Check code
              </Button>
              <Button block size="large" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      )}
    </ConfigProvider>
  );
};

FormPhoneV.propTypes = {
  onClose: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};
