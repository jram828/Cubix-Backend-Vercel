import { useState, useEffect } from "react";
import { Button, Menu, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import arrowRight from "../../assets/arrowRight.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import bets from "../../assets/bets.svg";
import slot from "../../assets/slot.svg";
import casino from "../../assets/casino.svg";
import favorites from "../../assets/favorites.svg";
import home from "../../assets/home.svg";
import games from "../../assets/games.svg";
import settingsIcon from "../../assets/settings.svg";
import logout from "../../assets/logout.svg";
import Settings from "../Settings/Settings";
import PropTypes from "prop-types";
import "./SideBar.css";
import { cleanState } from "../../../Redux/Actions/createUser";
import { useDispatch } from "react-redux";

const SideBar = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKey, setSelectedKey] = useState("/");
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!window.localStorage.getItem("loggedUser")
  );
  const [settingsVisible, setSettingsVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
      setMobileMenuVisible(false);
    }
  }, [isMobile]);

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);

    if (e.key === "logout") {
      setIsAuthenticated(false);
      window.localStorage.removeItem("loggedUser");
      dispatch(cleanState());
      // navigate("/");
      window.location.reload();
    } else if (e.key === "settings") {
      setSettingsVisible(true);
    } else {
      navigate(e.key);
    }
    if (isMobile) {
      setMobileMenuVisible(false);
    }
  };

  const handleSettingsClose = () => {
    setSettingsVisible(false);
  };

  const menuItems = [
    {
      key: "/",
      icon: <img src={home} alt="home" />,
      label: "Home",
    },
    isAuthenticated && {
      key: "/favorites",
      icon: <img src={favorites} alt="favorites" />,
      label: "Favorites",
    },
    isAuthenticated && {
      key: "/recent-games",
      icon: <img src={games} alt="recent games" />,
      label: "Recent Games",
    },
    {
      key: "/casino",
      icon: <img src={casino} alt="Casino" />,
      label: "Casino",
    },
    {
      key: "/slot",
      icon: <img src={slot} alt="Slot" />,
      label: "Slot",
    },
    {
      key: "/bets",
      icon: <img src={bets} alt="Bets" />,
      label: "Bets",
    },
  ].filter(Boolean);

  const bottomMenuItems = isAuthenticated
    ? [
        {
          key: "settings",
          icon: <img src={settingsIcon} alt="Settings" />,
          label: "Settings",
        },
        {
          key: "logout",
          icon: <img src={logout} alt="Logout" />,
          label: "Logout",
        },
      ]
    : [];

  return (
    <div className="sidebar-container">
      {isMobile && (
        <div className="fixed top-2 left-2 z-20">
          <Button
            type="text"
            onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
            className="w-14 h-14"
            icon={
              mobileMenuVisible ? (
                <CloseOutlined className="text-blue-600 border-2 border-blue-600 p-1 rounded-full" />
              ) : (
                <MenuOutlined className="text-white" />
              )
            }
          />
        </div>
      )}

      <div
        className={`sidebar-custom ${
          mobileMenuVisible ? "sidebar-mobile-visible" : ""
        }${isMobile ? " sidebar-mobile" : ""}`}
      >
        <div
          className={`sidebar-content ${
            collapsed && !isMobile ? "collapsed" : ""
          }`}
        >
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[selectedKey]}
            onClick={handleMenuClick}
            className={`menu-custom ${
              mobileMenuVisible || !collapsed || !isAuthenticated
                ? ""
                : "no-divider"
            }`}
          >
            {menuItems.slice(0, 3).map((item) => (
              <Menu.Item
                key={item.key}
                icon={
                  <div className="bg-[#6262624D] p-1 rounded-full">
                    {item.icon}
                  </div>
                }
                className={`menu-item ${
                  selectedKey === item.key ? "menu-item-selected" : ""
                }`}
              >
                {item.label}
              </Menu.Item>
            ))}
            <Divider
              className={`menu-divider ${!isAuthenticated ? "hidden" : ""}`}
            />
            {menuItems.slice(3, 6).map((item) => (
              <Menu.Item
                key={item.key}
                icon={
                  <div className="bg-[#6262624D] p-1 rounded-full">
                    {item.icon}
                  </div>
                }
                className={`menu-item ${
                  selectedKey === item.key ? "menu-item-selected" : ""
                }`}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
          <div className="pt-32">
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={[selectedKey]}
              onClick={handleMenuClick}
              className={`menu-custom ${
                mobileMenuVisible || !collapsed || !isAuthenticated
                  ? ""
                  : "no-divider"
              }`}
            >
              <Divider
                className={`menu-divider ${!isAuthenticated ? "hidden" : ""}`}
              />
              {bottomMenuItems.map((item) => (
                <Menu.Item
                  key={item.key}
                  icon={
                    <div className="bg-[#6262624D] p-1 rounded-full">
                      {item.icon}
                    </div>
                  }
                  className={`menu-item ${
                    selectedKey === item.key ? "menu-item-selected" : ""
                  }`}
                >
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </div>
        {!isMobile && (
          <div
            className={`sidebar-toggle-button ${collapsed ? "collapsed" : ""}`}
          >
            <Button
              type="text"
              icon={
                collapsed ? (
                  <img
                    src={arrowRight}
                    alt="Expand"
                    className="w-6 h-6 invert"
                  />
                ) : (
                  <img
                    src={arrowLeft}
                    alt="Collapse"
                    className="w-6 h-6 invert"
                  />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
              className="sidebar-toggle-button-inner"
            />
          </div>
        )}
      </div>

      <Settings visible={settingsVisible} onClose={handleSettingsClose} />

      <div className="content">{children}</div>
    </div>
  );
};

SideBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideBar;
