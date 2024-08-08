import { SETGAME, SETLOGGED,CLEANSTATE } from "./Actions/createUser";

let initialState = {
  users: [],
  brandgameid: "",
  isLogged: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEANSTATE:
      return { ...state, users:"", brandgameid:"", isLogged:"" };
    case SETGAME:
      return { ...state, brandgameid: action.payload };
    case SETLOGGED:
      return { ...state, isLogged: action.payload };
  }
};

export default reducer;
