import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase/config';
import {authSlice} from "./authReducer";


export const authSignUpUser = ({login, email, password}) => async (dispatch, getState) => {
    try {
        const {user} = await createUserWithEmailAndPassword(auth, email, password);
        dispatch(authSlice.actions.updateUserProfile({userId:user.uid}));
    } catch (error) {
        console.log('error.message', error.message);
    }
}

export const authSignInUser = ({ email, password}) => async (dispatch, getState) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);

    } catch (error) {
        console.log('error.message', error.message);
    }
}