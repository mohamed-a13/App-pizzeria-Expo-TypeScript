import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabRouteParams } from "../interface/TabInterface";
import HomeScreen from "../screens/HomeScreen";
import StackNavigator from "./StackNavigation";
import Icon from "../components/Icon";

const Tab = createBottomTabNavigator<TabRouteParams>();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "#2B353B",
          tabBarStyle: {
            elevation: 0,
            position: "absolute",
            bottom: 0,
            paddingTop: 2,
            paddingBottom: 2,
            backgroundColor: "#fdb813",
          },
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "Accueil",
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="StackNavigator"
          component={StackNavigator}
          options={{
            tabBarLabel: "Pizzas",
            tabBarIcon: ({ color }) => (
              <Icon name="pizza" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
