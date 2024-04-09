import { GestureHandlerRootView } from "react-native-gesture-handler";
import type { LinkingOptions } from "@react-navigation/native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { StackParamList } from "./types";
import Wallet  from "./Examples/Wallet/Wallet";
import {View} from "react-native"

import SkiaExample from "./Examples/SkiaExample";

const App = () => {

 // const Stack = createNativeStackNavigator<StackParamList>();
 console.log("Math.PI", Math.PI)
 
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <View>

      {/*
      <Wallet/>
      */}

      <SkiaExample />

    
      </View>
                  

    </GestureHandlerRootView>

  );
};



export default App