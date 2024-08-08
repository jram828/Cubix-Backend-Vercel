import { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import vector from "../../assets/Vector.svg";

const PasswordReset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const usernameFromQuery = searchParams.get("username");
    if (usernameFromQuery) {
      setUsername(usernameFromQuery);
    }
  }, [location.search]);

  const URL = "https://cubix.onrender.com/users/recovery-password";

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(URL, {
        Username: username,
        NewPassword: password,
      });
      console.log("Data Front" + response.data);
      alert("Password reset successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error response:", error.response);
      alert("Failed to reset password!");
    }
  };

  return (
    <div className="bg-gray-600 absolute top-56 right-[360px] p-5 rounded-lg">
      <Form onFinish={handleSubmit}>
        <div>
          <p className="text-3xl text-white mb-4">Recovery Password</p>
          <div className="text-white w-full bg-[#5561714D]/30 rounded-lg flex p-1 mb-4 gap-3 items-center">
            <img className="w-7 h-7 mt-1" src={vector} alt="info" />
            <p>
              Use a combination of upper and lower case letters, numbers and
              special characters to create a strong password. It must have at
              least one special character(@, $, !, %, *, ?, &)
            </p>
          </div>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
              {
                min: 6,
                message: "The password must be more than six characters long",
              },
            ]}
          >
            <Input.Password
              className="border-0"
              placeholder="Password"
              size="large"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
            ]}
          >
            <Input.Password
              className="border-0"
              placeholder="Confirm Password"
              size="large"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Item>
          <div className="flex flex-col gap-2">
            <Button type="primary" block size="large" htmlType="submit">
              Reset Password
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PasswordReset;
