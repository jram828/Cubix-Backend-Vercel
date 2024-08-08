import { Form, Button, Input, Select, ConfigProvider, Checkbox } from "antd";

import { useDispatch } from "react-redux";
import { twilioConfirm } from "../../../Redux/Actions/createUser";

import PropTypes from "prop-types";

export const SignUp = ({ onClose }) => {
  const [form] = Form.useForm();

  const handleChange = (e) => {
    form.setFieldsValue({
      ...form.getFieldsValue(),
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
        console.log("+" + values.prefix + values.phoneNumber);
        // const NumeroCompleto = values.prefix+values.phoneNumber
        // dispatch(twilioConfirm(NumeroCompleto))
        const NumeroCompleto = "+" + values.prefix + values.phoneNumber;
        // const Verificacion = (NumeroCompleto) =>{
        dispatch(twilioConfirm(NumeroCompleto));
        // }

        // dispatch(createUser(values))
        console.log({
          message: "Registro Exitoso",
          description: "La información fue enviada correctamente.",
        });
      })

      .catch((errorInfo) => {
        console.error("Validation Failed:", errorInfo);

        console.error({
          message: "Error en el Registro",
          description: "Por favor, revisa los campos e intenta de nuevo.",
        });
      });
  };

  const dateFormat = "YYYY/MM/DD";

  // const disabledUnder18Date = (current) => {
  //   const today = new Date();
  //   const minDate = new Date(
  //     today.getFullYear() - 18,
  //     today.getMonth(),
  //     today.getDate()
  //   );

  //   return current && current.toDate() > minDate;
  // };

  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 100 }}>
        <Option value="1">+1</Option>
        <Option value="44">+44</Option>
        <Option value="33">+33</Option>
        <Option value="49">+49</Option>
        <Option value="34">+34</Option>
        <Option value="39">+39</Option>
        <Option value="81">+81</Option>
        <Option value="86">+86</Option>
        <Option value="91">+91</Option>
        <Option value="61">+61</Option>
        <Option value="54">+54</Option>
        <Option value="55">+55</Option>
        <Option value="57">+57</Option>
        <Option value="82">+82</Option>
        <Option value="27">+27</Option>
        <Option value="20">+20</Option>
        <Option value="52">+52</Option>
        <Option value="41">+41</Option>
        <Option value="31">+31</Option>
        <Option value="46">+46</Option>
        <Option value="47">+47</Option>
        <Option value="48">+48</Option>
        <Option value="60">+60</Option>
        <Option value="65">+65</Option>
        <Option value="63">+63</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="h-full">
      <ConfigProvider
        theme={{
          components: {
            Select: {
              colorPrimary: "#030303",
              colorBgContainer: "#2C323A",
              colorTextPlaceholder: "#808080",
              colorText: "#FFFF",
              colorBorder: "",
              algorithm: true,
              colorBgBase: "#2C323A",
            },
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
              colorBorder: "#2C323A",
              algorithm: true,
              colorBgBase: "#2C323A",
              colorIcon: "#FFFF",
            },
            DatePicker: {
              colorText: "#FFFF",
              colorBgElevated: "#20242A",
              hoverBorderColor: "#030303",
              colorTextPlaceholder: "#808080",
              colorBgContainer: "#2C323A",
              colorTextHeading: "#FFFF",
              colorIcon: "#FFFF",
              cellBgDisabled: "#555353",
            },
            Checkbox: {
              colorBgContainer: "#626262",
              colorBorder: "#2C323A",
            },
            Form: {
              controlHeight: "",
              algorithm: true,
            },
          },
        }}
      >
        <p className="text-2xl mb-4">Sign Up</p>
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Por favor agregar un usuario" },
            ]}
          >
            <Input
              className="border-0"
              placeholder="User"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { type: "email", message: "The input is not valid E-mail!" },
              { required: true, message: "Please input your E-mail!" },
            ]}
          >
            <Input
              className="border-0"
              placeholder="E-mail"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            name="birthdate"
            rules={[
              {
                required: true,
                message: "Por favor agregar una fecha de nacimiento",
              },
            ]}
          >
            <input
              type="date"
              onChange={handleChange}
              format={dateFormat}
              className="border-0 rounded-xl p-2"
              placeholder="Fecha de nacimiento"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              className="form-input-number"
              placeholder="Phone number"
              addonBefore={prefixSelector}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor introduzca una contraseña",
              },
            ]}
          >
            <Input.Password
              className="border-0"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Item>
          <div className="flex flex-col gap-3">
            <Button block type="primary" size={"large"} htmlType="submit">
              Next
            </Button>
            <Button block type="default" size={"large"} onClick={onClose}>
              Cancelar
            </Button>
          </div>

          <p className="text-white text-center">
            Do you already have an account? <a href="">Sign In</a>
          </p>
          <div className="flex justify-center mt-4">
            <Checkbox className="text-white flex">
              I confirm that I am over 18 years of age, and I accept the{" "}
              <a className="flex">Terms and Conditions</a>
            </Checkbox>
          </div>
        </Form>
      </ConfigProvider>
    </div>
  );
};

SignUp.propTypes = {
  onClose: PropTypes.func.isRequired,
};
