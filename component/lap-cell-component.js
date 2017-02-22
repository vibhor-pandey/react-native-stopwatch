//Import
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';


//Create
export default class LapCell extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.lapNumberContainer}>

                    <Text style={styles.lapNumber}>
                        {this.props.lapNumber}
                    </Text>

                </View>

                <View style={styles.lapTimeContainer}>

                    <Text style={styles.lapTime}>
                        {this.props.lapTime}
                    </Text>
                </View>
            </View>
        );
    }
}

LapCell.propTypes = {
    lapNumber: React.PropTypes.number.isRequired,
    lapTime: React.PropTypes.string.isRequired
}

//Styling
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: "#456",
        borderRadius: 5,
        borderBottomWidth: 1,
    },

    lapNumberContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#B87333",
        justifyContent: 'center',
        alignItems: 'center'
    },

    lapTimeContainer: {
        height: 50,
        borderColor: "#B87333",
        justifyContent: 'center',
        alignItems: 'center'
    },

    lapNumber: {
        fontSize: 12,
        fontWeight: "500"
    },

    lapTime: {
        fontSize: 18,
        fontWeight: "500"
    }
});