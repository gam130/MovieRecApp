import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import BottomNavBar from "./BottomNavBar";

interface AppState {
  value : string;
}

class App extends Component<{}, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            value : ""
        }
    }

    testData = async () => {
        let response = await fetch("http://192.168.0.7:4567/searchMovies");
        if (!response.ok) {
            alert("BAD");
            return;
        }
        let parsed = await response.json();
        this.setState({
            value : parsed.results[0].title
        })
    }

    reset = () => {
        this.setState({
            value : ""
        })
    }

    render () {
        return (
            <BottomNavBar />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
