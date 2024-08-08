export const SETGAME = "SETGAME";
export const SETLOGGED = "SETLOGGED";
export const CLEANSTATE = "CLEANSTATE";
import axios from "axios"

const URL = "https://cubix.onrender.com/users/register"

// const POST_USER = "POST_USER"

export const createUser  =async (form) =>{
    // return async () =>{
        try {
            const response = await axios.post(URL, form)
            console.log(response.status)
            // window.localStorage.setItem("loggedUser", JSON.stringify(response.data));
            // console.log('Logged:',response.data.status)
            // return response.data;
            alert("User was created succesfully!");
            window.location.reload()
            return response
        } catch (error) {
            alert("Error creating user:", error);
            console.error(error)
            
        }
    // }
}


export const twilioConfirm = (number) =>{
    const URL_TWILIO =  `https://cubix.onrender.com/verifyuser/sendOTP/${number}`
    return async () =>{
        try {
            const response = await axios.post(URL_TWILIO)
            console.log(response.status)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
}

export const twilioVerify = (phone , code) => {
    const URL_VERIFY = `https://cubix.onrender.com/verifyuser/verifyOTP`
    console.log("phone Que llega", phone)
    console.log("codigo que llega", code)
    return async () =>{
        try {
            const response = await axios.post(URL_VERIFY, {"phoneNumber" : phone , "OTP": code})
            //{"phoneNumber":"+543152316006", "OTP":"425094"}
            console.log(response.status)
            return response
        } catch (error) {
            console.error(error)
        }
    }

}
export const Login = (username, password) =>{
    const URL_LOGIN = `https://cubix.onrender.com/users/validate-user`
    return async () =>{
        try {
            // {"username":"Intento04",
            //     "password":"Intento@1123456",
            //     "Email":"NuevoIntento02@usuario.com}
            const response = await axios.post(URL_LOGIN, { "username": username, "password": password })
            console.log(response.status)
            window.localStorage.setItem("loggedUser", JSON.stringify(response.data));
            console.log('Logged:',response.data.status)
            // return response.data;
            window.location.reload()
            return {
                type: SETLOGGED,
                payload: true,
              };
        } catch (error) {
            alert("Login error:", error);
            console.error(error)
        }
    }
}

export const setGame = (brandgameid) => {
    console.log("Game Action:", brandgameid);
    return {
      type: SETGAME,
      payload: brandgameid,
    };
  };

  export const setLogged = (isLogged) => {
    console.log("Logged Action:", isLogged);
    return {
      type: SETLOGGED,
      payload: isLogged,
    };
  };

  export const cleanState = () => {
    console.log("Clean Action:", );
    return {
      type: SETLOGGED,
      payload: {},
    };
  };

  export const deletedAccount = (id) =>{
    const URL_DELETE = `https://cubix.onrender.com/deleteAccount/${id}`
    return async () =>{
        try {
            const response = await axios.delete(URL_DELETE)
            console.log(response.status)
        } catch (error) {
            console.error(error)
            
        }
    }
}

  

// export const launchGame = (launchUrl, brandId, brandgameId,token,mode,locale,lobbyUrl) =>{
//     try {
//         const URL = `${launchUrl}?brandid=${brandId}&brandgameid=${brandgameId}&token=${token}&mode=${mode}&locale=${locale}&lobbyurl=${lobbyUrl}`

//     } catch (error) {
        
//     }
  
// }
//const URL = `${launchUrl}?brandid=${brandId}&brandgameid=${brandgameId}&token=${token}&mode=${mode}&locale=${locale}&lobbyurl=${lobbyUrl}`;

