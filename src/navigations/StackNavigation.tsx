import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackRouteParams } from "../interface/StackInterface";
import ProductScreen from "../screens/ProductScreen";
import MenuScreen from "../screens/MenuScreen/index";

const Stack = createNativeStackNavigator<StackRouteParams>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          animation: "slide_from_left",
        }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
