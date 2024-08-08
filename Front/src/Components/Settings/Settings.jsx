import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Menu, Button } from "antd";
import userIcon from "../../assets/user.svg";
import walletIcon from "../../assets/wallet.svg";
import { CloseOutlined, LeftOutlined } from "@ant-design/icons";
import "./Settings.css";
import SettingsAccount from "./Settings Account/SettingsAccount";
import TransactionHistory from "./Transaction History/TransactionHistory";
import SettingWallet from "./SettingsWallet/SettingWallet";

const Settings = ({ visible, onClose }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("account");
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key);
    setShowTransactionHistory(false);
  };

  const handleBackToMenu = () => {
    setSelectedMenuItem(null);
  };

  const handleBackToWallet = () => {
    setShowTransactionHistory(false);
  };

  return (
    <div>
      <div
        className={`settings-sidebar ${
          visible ? "settings-sidebar-visible" : "settings-sidebar-hidden"
        }`}
      >
        <Button
          type="link"
          onClick={onClose}
          className="settings-close-button"
          icon={<CloseOutlined />}
        />
        <div className="flex h-full">
          {!isMobile ? (
            <Menu
              onClick={handleMenuClick}
              selectedKeys={[selectedMenuItem]}
              mode="inline"
              className={`settings-menu ${
                visible ? "settings-menu-visible" : "settings-menu-hidden"
              }`}
            >
              <Menu.Item
                key="account"
                className={`settings-menu-item ${
                  selectedMenuItem === "account"
                    ? "settings-menu-item-selected"
                    : ""
                }`}
              >
                <div className="settings-menu-item-content">
                  <img src={userIcon} alt="user" />
                  <span>Account</span>
                </div>
              </Menu.Item>

              <Menu.Item
                key="wallet"
                className={`settings-menu-item ${
                  selectedMenuItem === "wallet"
                    ? "settings-menu-item-selected"
                    : ""
                }`}
              >
                <div className="settings-menu-item-content">
                  <img src={walletIcon} alt="wallet" />
                  <span>Wallet</span>
                </div>
              </Menu.Item>
            </Menu>
          ) : (
            !selectedMenuItem && (
              <Menu
                onClick={handleMenuClick}
                mode="inline"
                className={`settings-menu settings-menu-mobile ${
                  visible ? "settings-menu-visible" : "settings-menu-hidden"
                }`}
              >
                <span className="text-white text-xl ml-4 mb-4 ">Settings</span>
                <Menu.Item key="account" className="settings-menu-item">
                  <div className="settings-menu-item-content">
                    <img src={userIcon} alt="user" />
                    <span>Account</span>
                  </div>
                </Menu.Item>

                <Menu.Item key="wallet" className="settings-menu-item">
                  <div className="settings-menu-item-content">
                    <img src={walletIcon} alt="wallet" />
                    <span>Wallet</span>
                  </div>
                </Menu.Item>
              </Menu>
            )
          )}
          <div
            className={`settings-content ${
              isMobile && !selectedMenuItem ? "hidden" : ""
            }`}
          >
            {isMobile && selectedMenuItem && (
              <Button
                className="settings-back-button"
                onClick={handleBackToMenu}
                icon={<LeftOutlined />}
              />
            )}
            {selectedMenuItem === "account" && <SettingsAccount />}
            {showTransactionHistory && (
              <TransactionHistory onBack={handleBackToWallet} />
            )}
            {selectedMenuItem === "wallet" && <SettingWallet />}
          </div>
        </div>
      </div>
      <div
        className={`settings-overlay ${
          visible ? "settings-overlay-visible" : "settings-overlay-hidden"
        }`}
        onClick={onClose}
      />
    </div>
  );
};

Settings.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Settings;
