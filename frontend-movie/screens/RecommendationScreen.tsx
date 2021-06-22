import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {Button, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MovieItem from "../assets/MovieItem";

interface RecommendationScreenState {
    value : string;
}

const testMovies = [
    {
        id: "550",
        title: "Fight Club",
        poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        date: "1999-10-15",
    },
    {
        id: "19404",
        title: "DDLJ",
        poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
        date: "1995-10-20"
    },
    {
        id: "278",
        title: "The Shawshank Redemption",
        poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        date: "1994-09-23"
    },
    {
        id: "724089",
        title: "Gabriel's Inferno Part II",
        poster_path: "/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg",
        date: "2020-07-31"
    },
    {
        id: "238",
        title: "The Godfather",
        poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        date: "1972-03-14",
    },
    {
        id: "761053",
        title: "Gabriel's Inferno Part III",
        poster_path: "/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg",
        date: "2020-11-19",
    },
    {
        id: "424",
        title: "Schindler's List",
        poster_path: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
        date: "1993-11-30",
    },
    {
        id: "240",
        title: "The Godfather: Part II",
        poster_path: "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
        date: "1974-12-20",
    }
]

class RecommendationScreen extends Component<{}, RecommendationScreenState> {

    constructor(props: any) {
        super(props);
        this.state = {
            value : ""
        }
    }

    renderItem = ({ item }:any) => {
        return (
            <MovieItem
                date={item.date}
                id={item.id}
                poster_path={item.poster_path}
                title={item.title}
            />
        );
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

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.headerText}>Recommendations</Text>
                <FlatList
                    keyExtractor={item => item.id}
                    data={testMovies}
                    renderItem={this.renderItem}
                    numColumns={2}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#232228',
    },
    headerText: {
        marginHorizontal: 15,
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        paddingBottom: 5

    }
});

export default RecommendationScreen;
