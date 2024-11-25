import { AboutStackNavigator } from "./StackNavigator";
import { AboutStackNavigator } from "./StackNavigator";
import { MaterialCommunityIcons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const createBottomTabNavigator = () => {
    return(
        <Tab.Navigator tabBarOptions = {{
            activeTintColor: 'white',
            inactiveTintColor: 'lightgray',
            style: {
                backgroundColor: '#FF6347',
            },
            labelStyle: {
                fontSize: 12,
            }
        }}
        >
            <Tab.Screen 
            name = 'Home'
            component = {{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name='Home' size={10} color={color}></MaterialCommunityIcons>
                )    
            }}
            ></Tab.Screen>
            <Tab.Screen
                name='About'
                component={AboutStackNavigator}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name='video-stabilization' size={10} color={color}></MaterialCommunityIcons>
                    )
                }}
            ></Tab.Screen>

        </Tab.Navigator>
    )
}