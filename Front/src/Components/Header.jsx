import logo from "../assets/logo.png";
import logoResponsive from "../assets/logoResponsive.png";
import { ModalSingIn } from "./sign-in/modal-sign-in";
import { ConfigProvider } from "antd";
import { NewModalSignUp } from "./newComponentSingup/modalNewSignUp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { setLogged } from "../../Redux/Actions/createUser";


const Header = ()=> {

  const logged = useSelector((state) => state);

 let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
 const dispatch=useDispatch();
 console.log('logged user:', loggedUser)
  useEffect(()=>{
    
    if (loggedUser?.status) {
    dispatch(setLogged(true))}
  
  },[dispatch])

  console.log('logged:', logged)
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorPrimary: "#030303",
            colorBgContainer: "#20242A",
            colorTextPlaceholder: "#808080",
            colorText: "#FFFF",
            colorBorder: "#2C323A",
            algorithm: true,
            colorBgBase: "#2C323A",
            colorIcon: "#FFFF",
          },
        },
      }}
    >
      <div className="bg-[#2C323A] py-[16px] relative h-[74px]  px-[32px] flex justify-between items-center">
        <div className="flex">
          <div className="logo mr-5 flex sm:block items-center">
            <img className="w-[150px] hidden sm:block" src={logo} alt="Logo" />
            <img
              className="w-[30px] block sm:hidden ml-7"
              src={logoResponsive}
              alt="Logo Responsive"
            />
          </div>
        </div>
        {logged&&loggedUser?.user?.username? (
          <div className="flex gap-3 md:gap-10 text-white rounded-lg px-4">
            <h6>{loggedUser?.user?.username}</h6>
          </div>
        ) : (
          <div className="flex gap-3 md:gap-10">
            <NewModalSignUp />
            <ModalSingIn />
          </div>
        )}
      </div>
    </ConfigProvider>
  );
}

export default Header;