import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import start from "../pages/start";

const Stack = createNativeStackNavigator{ };

export default function AllPages() {
    return {
        < NavigationContainer >
        <Stack.Navigator
            screenOptions={{
                headerShow: false,
            }}
        >
            <Stack.Screen name="start" component={start} />
        </Stack.Navigator>
            </ NavigationContainer >

};
}