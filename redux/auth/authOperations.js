import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../firebase/config';


export const authSignUpUser = ({login, email, password }) => async (dispatch, getState) => {

    console.log("email operation, password operation,  login operation", email, password, login);
    try {
        await createUserWithEmailAndPassword(auth, email, password);



    } catch (error) {
        console.log('error.message', error.message);
    }
}