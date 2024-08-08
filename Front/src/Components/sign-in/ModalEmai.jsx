import { Modal } from "antd";
import PropTypes from "prop-types";

const ModalEmai = ({ email, onClose }) => {
  return (
    <Modal visible={true} footer={null} onCancel={onClose}>
      <p className="text-white">
        Please verify your email for password recovery instructions: {email}
      </p>
    </Modal>
  );
};

ModalEmai.propTypes = {
  email: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalEmai;
