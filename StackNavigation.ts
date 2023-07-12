import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";

interface StackNavigationProps {
  // Define the props for StackNavigation here
}

// const StackNavigation: FC<NavigationContainerProps> = (props) => {
//   const Stack = createNativeStackNavigator();
//   const Tab = createBottomTabNavigator();

//   return (
//     <NavigationContainer {...props}>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default StackNavigation;
