import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const BottomHomeNavigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {

                    if (route.name === "Home") {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Foundation name="home" size={size} color={color} />
                                {color === "#08E280"
                                    ?
                                    <View style={{ top: 6.2, backgroundColor: color, width: 25, height: 2 }}>

                                    </View> : <View></View>

                                }
                            </View>
                        );
                    }
                    if (route.name === "Discovery") {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Feather name="search" size={size} color={color} />
                                {color === "#08E280"
                                    ?
                                    <View style={{ top: 6.2, backgroundColor: color, width: 25, height: 2 }}>

                                    </View> : <View></View>

                                }
                            </View>
                        );
                    }
                    if (route.name === "Post") {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Feather name="music" size={size} color={color} />
                                {color === "#08E280"
                                    ?
                                    <View style={{ top: 6.2, backgroundColor: color, width: 25, height: 2 }}>

                                    </View> : <View></View>

                                }
                            </View>
                        );
                    }
                    if (route.name === "Notification") {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <FontAwesome name="user-o" size={size} color={color} />
                                {color === "#08E280"
                                    ?
                                    <View style={{ top: 6.2, backgroundColor: color, width: 25, height: 2 }}>

                                    </View> : <View></View>

                                }
                            </View>
                        );
                    }

                },

                tabBarActiveTintColor: '#08E280',
                tabBarInactiveTintColor: 'gray',

                tabBarStyle: {
                    backgroundColor: "#262626",
                    elevation: 0.0

                },

                tabBarShowLabel: false

            })}

        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Discovery" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Post" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Notification" component={HomeScreen} options={{ headerShown: false }} />

        </Tab.Navigator>
    );
}
export default BottomHomeNavigation;