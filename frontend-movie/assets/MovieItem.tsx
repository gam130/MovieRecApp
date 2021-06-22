import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from "react-native";

interface MovieItemProps {
    title: string;
    poster_path: string;
    date: string;
    id: number;
}

class MovieItem extends Component<MovieItemProps, {}> {

    getSource = () => {
        console.log("http://image.tmdb.org/t/p/w154" + this.props.poster_path);
        return "http://image.tmdb.org/t/p/w154" + this.props.poster_path;
    }

    render() {
        console.log(this.getSource());
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: this.getSource()}}
                    style={{width: 154, height: 231}}
                />
                <Text style={styles.movieText}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 10
    },
    movieText: {
        color: 'white',
        margin: 10,
        fontFamily: 'System',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default MovieItem;
