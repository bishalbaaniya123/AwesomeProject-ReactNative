import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {testAction} from "../redux-stuffs/actions/test_action";

import GetStore from '../AsyncStorage/GetStore';


class Home extends Component {

    constructor() {
        super();
        GetStore()
            .then(wholeStore => {
                console.warn("From Cheers whole stores ", wholeStore)
            })
    }

    onPress = (val) => {
        this.props.navigation.navigate('Home')
    };


    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.onPress("as")}
                >
                    <Text>Home PAGE</Text>
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