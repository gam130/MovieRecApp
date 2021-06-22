import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecommendationScreen from "./screens/RecommendationScreen";
import AddMovieScreen from "./screens/AddMovieScreen";
import MyMoviesScreen from "./screens/MyMoviesScreen";
import {StyleSheet} from "react-native";

const Tab = createBottomTabNavigator();

class BottomNavBar extends Component<{},{}> {
    render() {
        return(
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{style: styles.navigation}}>
                <Tab.Screen name={"Recommendations"} component={RecommendationScreen}/>
                <Tab.Screen name={"Add"} component={AddMovieScreen}/>
                <Tab.Screen name={"My Movies"} component={MyMoviesScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    navigation: {
        backgroundColor: '#232228'
    }
})

export default BottomNavBar;
