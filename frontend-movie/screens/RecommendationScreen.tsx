import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface AppState {
    value : string;
}

class RecommendationScreen extends Component<{}, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            value : ""
        }
    }

    testData = async () => {
        try {
            let response = await fetch("http://192.168.0.7:4567/searchMovies");
            if (!response.ok) {
                alert("BAD");
                return;
            }
            let parsed = await response.json();
            this.setState({
                value : parsed.results[0].title
            })
        } catch (e) {
            alert(e.toString());
        }
    }

    reset = () => {
        this.setState({
            value : ""
        })
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>Recommendation Screen {this.state.value}</Text>
                <Button onPress={this.testData} title={"recommend"}/>
                <Button onPress={this.reset} title={"reset"}/>
                <StatusBar style="auto" />
            </View>
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

export default RecommendationScreen;
