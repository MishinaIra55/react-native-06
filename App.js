import { NavigationContainer } from "@react-navigation/native";

import 'react-native-gesture-handler';
import {useRoute} from "./router";

import { Provider } from 'react-redux'
import {store} from "./redux/store";






export default function App() {
    const routing = useRoute(false);

  return (
      <Provider store={store}>
          <NavigationContainer>
              {routing}
          </NavigationContainer>
      </Provider>

  );
}


