import { NavigationContainer } from "@react-navigation/native";

import 'react-native-gesture-handler';
import {useRoute} from "./router";

import { Provider } from 'react-redux'
import {store} from "./redux/store";

import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase/config';
import {useState} from "react";






export default function App() {
const [user, setUser] = useState(null);
    onAuthStateChanged(auth, (user) => setUser(user));

    const routing = useRoute(user);

    return (
      <Provider store={store}>
          <NavigationContainer>
              {routing}
          </NavigationContainer>
      </Provider>

  );
}


