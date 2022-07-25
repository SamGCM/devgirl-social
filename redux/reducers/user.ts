import { USER_RESET, USER_UPDATE } from "../actions/index"
import { IUser } from "../../interfaces/user";

const initialState: IUser = {
    uid: "",
    displayName: "",
    email: "",
    emailVerified: false,
    photoUrl: "",
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_UPDATE:
            const newState = { ...state, ...action.payload };
            return newState;
        case USER_RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;