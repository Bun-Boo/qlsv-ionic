import {
  ADD_ST_INPUT,
  DELETE_ST_INPUT,
  EDIT_ST_INPUT,
  SET_ST_INPUT,
} from "./constants";
const initState = {
  student: {
    id: "",
    name: "",
    address: "",
    avatar: "",
    score: 0,
  },

  students: JSON.parse(localStorage.getItem("st")) ?? [],
};

function reducer(state, action) {
  let newState;
  switch (action.type) {
    case SET_ST_INPUT:
      newState = {
        ...state.student,
        student: {
          ...state.student,
          id: action.payload.id,
          name: action.payload.name,
          address: action.payload.address,
          avatar: action.payload.avatar,
          score: action.payload.score,
        },
      };
      console.log(newState);
      break;
    case ADD_ST_INPUT:
      newState = {
        ...state,
        students: [...state.students, action.payload],
      };
      localStorage.setItem("st", JSON.stringify(newState.students));
      break;

    default:
      throw new Error("Invalid in actions");
  }
  return newState;
}

export { initState };
export default reducer;
