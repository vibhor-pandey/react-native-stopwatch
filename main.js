//Import
import React, { Component } from 'react';
import {
    StyleSheet,
    View, Text,
    ScrollView
} from 'react-native';

import FormatTime from 'minutes-seconds-milliseconds';
import RoundButton from './component/round-button';
import LapCell from './component/lap-cell-component';

//Create Component
class Main extends Component {

    constructor(props) {
        super(props);

        this.timer = null;
        this.state = {
            timeElapsed: null,
            isRunning: false,
            laps: [],
            startTime: null
        }
    }

    lapList(){

        return this.state.laps.map((lap, index) => {
            return (
                <LapCell key={index} lapTime={FormatTime(lap)} lapNumber={index + 1}/>
            );
        });
    }


    render() {
        return (
            <View style={[styles.container]}>

                <View style={[styles.topContainer]}>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timerText}>

                            {
                                this.state.timeElapsed == null ? "00:00:00" :
                                    FormatTime(this.state.timeElapsed)
                            }
                        </Text>
                    </View>

                    <View style={[styles.buttonContainer]}>
                        <RoundButton title={this.state.isRunning?"STOP":  "START"} onPress={() => { this.state.isRunning ? this.stopTimer() : this.startTimer() }} />
                        <RoundButton title="LAP" onPress={() => {this.onHandleLapPress()}}/>
                    </View>
                </View>

                <ScrollView
                showsVerticalScrollIndicator={false}
                style={[styles.bottomContainer]}
                >
                    {this.lapList()}
                </ScrollView>

            </View>
        );
    }

    startTimer() {
        this.setState({
            startTime: new Date(),
            isRunning: true
        })
        this.timer = setInterval(() => {
            this.setState({
                timeElapsed: new Date() - this.state.startTime
            })
        }, 30);
    }

    stopTimer() {
        clearInterval(this.timer);
        this.setState({
            isRunning: false
        })
    }


    onHandleLapPress(){
        let lap = this.state.timeElapsed;

        this.setState({
            laps: this.state.laps.concat(lap),
            startTime: new Date()
        }, () => {
            console.log(this.state.laps);
        });
    }

    border(color) {
        return {
            borderWidth: 4,
            borderColor: color
        }
    }
}

//Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    topContainer: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "#FFF"
    },

    timeContainer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    timerText: {
        fontSize: 30
    },

    buttonContainer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-around'

    },

    bottomContainer: {
        flex: 0.5,
        backgroundColor: "#EEE",
    }
});

//Export
export default Main;
