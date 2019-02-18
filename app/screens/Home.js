import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {testAction} from "../redux-stuffs/actions/test_action";
import api from '../api/index';

import * as Constants from '../AsyncStorage/Constants';
import setItem from '../AsyncStorage/SetItem';
import GetStore from '../AsyncStorage/GetStore';

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
};

class Home extends Component {

    constructor() {
        super();
        this.state = {
            cheers: "Hello man",
            random: 1,
            random2: 200,
        };
        console.warn("rand", [1, 2, 3, 4].sample());
    }

    componentDidMount() {
        this.setState({random2: Math.random()})
        GetStore()
            .then(result => {
                console.warn("this is the GETSTORE Result ", result, Constants.CHEERS);
                if (result[Constants.CHEERS]) {
                    console.warn("it has cheers", result[Constants.CHEERS])
                } else {
                    console.warn("there is no cheer")
                }
            })
    }

    componentWillMount(){
        console.warn("From COMPONENTWILLMOUNT");
        this.setState({random: Math.random()})
    }

    onPress = (val) => {
        this.props.navigation.navigate("Cheers");
    };

    getCheersApi = () => {
        api.getCheers()
            .then(result => {
                console.warn("this is the result", result);
                console.log("this is logged");
                if (result.status === 200) {
                    return result.json()
                }
                return {error: result.status}.json();
            })
            .catch(err => {
                console.warn("error occured ", err);
                return {error: err}.json();
            })
            .then(response => {
                console.warn("this is the response ", response);
                setItem(Constants.CHEERS, response)
                    .then(result => {
                        console.warn("this is response after saving ", result);
                    })
            })
            .catch(err => {
                console.warn("error in final ", err);
            })
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    {this.state.random2}
                </Text>
                <Text>
                    {this.state.random}
                </Text>
                <TouchableOpacity
                    onPress={() => this.onPress("as")}
                >
                    <Text>Cheers Page</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.getCheersApi()}
                >
                    <Text>Call Get Cheers Api</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        testAction: testAction
    }, dispatch)
};
const mapStateToProps = (state) => {
    return {
        mapState: state,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
