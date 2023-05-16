import { NavigationContainer } from "@react-navigation/native";

import 'react-native-gesture-handler';
import {useRoute} from "./router";






export default function App() {
    const routing = useRoute(true);

  return (
      <NavigationContainer>
          {routing}
      </NavigationContainer>
  );
}


