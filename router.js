import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import {RegistrationScreen} from "./Screens/auth/RegistrationScreen";
import {LoginScreen} from "./Screens/auth/LoginScreen";
import {PostsScreen} from "./Screens/mainScreen/PostsScreen";
import {CreateScreen} from "./Screens/mainScreen/CreateScreen";
import {ProfileScreen} from "./Screens/mainScreen/ProfileScreen";


import GridIcon from './assets/images/grid.svg';
import User from './assets/images/user.svg';
import PlusIcon from './assets/images/plus.svg';
import LogoutIcon from './assets/images/logout.svg';


import {TouchableOpacity} from "react-native-gesture-handler";

const HeaderLogOut = () => (
    <TouchableOpacity style={{ marginRight: 10 }} onPress={() => console.log('Logout')}>
        <LogoutIcon width={24} height={24} />
    </TouchableOpacity>
);

export const useRoute = (isAuth) => {
    if (!isAuth) {
        return (
            <AuthStack.Navigator >
                <AuthStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Registration"
                    component={RegistrationScreen} />
                <AuthStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Login"
                    component={LoginScreen} />

            </AuthStack.Navigator>

        );
    }
    return (
        <MainTab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 83,
            },
        }}>
            <MainTab.Screen
                name="Posts"
                component={PostsScreen}
                options={{
                    tabBarIcon: ({size, color }) => (
                        <GridIcon
                            width={size}
                            height={size}
                            // fill={focused ? 'white' : 'orange'}
                            color={color}
                        />
                    ),

                    // title: "Публикации",
                    headerTintColor: "#212121",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 17,
                        lineHeight: 22,
                    },
                    headerStyle: {
                        height: 88,
                        shadowColor: 'rgba(0,0,0,0.3)',
                        borderBottomWidth: 1,
                        borderBottomColor: '#ccc',
                    },
                    headerTitleAlign: 'center',
                    headerRight: () => <HeaderLogOut/>,
                }}
            />
            <MainTab.Screen
                name="Create"
                component={CreateScreen}
                options={{
                    tabBarIcon: ({color }) => (
                        <PlusIcon
                            width={70}
                            height={40}
                            // fill={focused ? 'white' : 'orange'}
                            color={color}
                        />
                    ),
                    title: "Создать публикацию",
                    headerTintColor: "#212121",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 17,
                        lineHeight: 22,
                    },
                    headerStyle: {
                        height: 88,
                        shadowColor: 'rgba(0,0,0,0.3)',
                        borderBottomWidth: 1,
                        borderBottomColor: '#ccc',
                    },
                    headerTitleAlign: 'center',
                }}
            />
            <MainTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({size, color }) => (
                        <User
                            width={size}
                            height={size}
                            // fill={focused ? 'black' : 'orange'}
                            color={color}
                        />
                    ),
                }}/>
        </MainTab.Navigator>
    );
};