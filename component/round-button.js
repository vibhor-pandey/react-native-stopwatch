//Import
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';

//Create Component
class RoundButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight  style={styles.button}
                    underlayColor="#999"
                    onPress={this.props.onPress}>
                        <Text style={styles.title}>{this.props.title}</Text>
                </TouchableHighlight>
            </View>
        );
    }

    onSubmit() {
        console.log("Hello You are pressed");
    }
}

//Styling for that Component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        height: 80,
        width: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#456"
    },
     
     title: {
        fontSize: 18,
        color: "#FFF"
     }
});

//Export it
export default RoundButton;

