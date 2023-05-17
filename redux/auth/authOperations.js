import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from '../../firebase/config';
import {authSlice} from "./authReducer";


export const authSignUpUser = ({login, email, password}) => async (dispatch, getState) => {
    try {
         await createUserWithEmailAndPassword(auth, email, password);

        // const auth = getAuth();

       await updateProfile(auth.currentUser, {
           displayName: login,
       }).then(() => {
           dispatch(
               authSlice.actions.updateUserProfile({
                   userId: auth.currentUser.uid,
                   nickName: auth.currentUser.displayName,
               }));
       }).catch((error) => {
           console.log('not work update', error.message)
        });

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

// export const authStateChangeUser = ({ email, password}) => async (dispatch, getState) => {
//     try {
//         await signInWithEmailAndPassword(auth, email, password);
//
//     } catch (error) {
//         console.log('error.message', error.message);
//     }
// }