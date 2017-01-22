// @flow

// https://facebook.github.io/react/docs/react-component.html

import React from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Keyboard,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import Styles from './Styles/LoginScreenStyle';
import { Images, Metrics } from '../Themes';
import LoginActions from '../Redux/LoginRedux';
// import { Actions as NavigationActions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';

type LoginScreenProps = {
    dispatch: () => any,
    error: string,
    fetching: boolean,
    attemptLogin: () => void
};

class LoginScreen extends React.Component {

    props: LoginScreenProps;

    state: {
        email: string,
        password: string,
        visibleHeight: number,
        topLogo: { width: number }
    };

    isAttempting: boolean;
    keyboardDidShowListener: Object;
    keyboardDidHideListener: Object;


    /* Mounting */

    constructor(props: LoginScreenProps) {
        super(props);
        this.state = {
            // email: 'john@smartboxasia.com',
            // password: 'password',
            visibleHeight: Metrics.screenHeight,
            topLogo: { width: Metrics.screenWidth }
        }
        this.isAttempting = false;
    }

    componentWillMount() {
        // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
        // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }

    // componentDidMount() {}


    /* Updating */

    componentWillReceiveProps(newProps) {
        // console.tron.log(`loginScreen - componentWillReceiveProps`);
        const { fetching, error } = newProps;
        this.forceUpdate();
        // Did the login attempt complete?
        if (this.isAttempting && !fetching) {
            this.isAttempting = false;
            if (error) {
                return console.tron.log(`logain fail: ${error}`);
            }
            console.tron.log(`login success`);
            // NavigationActions.pop();
        }
    }

    // shouldComponentUpdate() {}
    // componentWillUpdate() {}
    // componentDidUpdate() {}


    /* Unmounting */

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }


    /* Others */

    keyboardDidShow = (e) => {
        // Animation types easeInEaseOut/linear/spring
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        let newSize = Metrics.screenHeight - e.endCoordinates.height;
        this.setState({
            visibleHeight: newSize,
            topLogo: { width: 100, height: 70 }
        });
    }

    keyboardDidHide = (e) => {
        // Animation types easeInEaseOut/linear/spring
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({
            visibleHeight: Metrics.screenHeight,
            topLogo: { width: Metrics.screenWidth }
        });
    }

    handlePressLogin = () => {
        const { email, password } = this.state;
        this.isAttempting = true;
        // attempt a login - a saga is listening to pick it up from here.
        this.props.attemptLogin(email, password);
    }

    handleChangeEmail = (text) => {
        this.setState({ email: text });
    }

    handleChangePassword = (text) => {
        this.setState({ password: text });
    }

    render() {
        const { email, password } = this.state;
        const { fetching } = this.props;
        const editable = !fetching;
        const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly;
        return (
            <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container, {height: this.state.visibleHeight}]} keyboardShouldPersistTaps>
                <Image source={Images.logo} style={[Styles.topLogo, this.state.topLogo]} />
                <View style={Styles.form}>
                    <View style={Styles.row}>
                        <Text style={Styles.rowLabel}>{I18n.t('email')}</Text>
                        <TextInput
                            ref='email'
                            style={textInputStyle}
                            value={email}
                            editable={editable}
                            keyboardType='default'
                            returnKeyType='next'
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={this.handleChangeEmail}
                            underlineColorAndroid='transparent'
                            onSubmitEditing={() => this.refs.password.focus()}
                            placeholder='email@example.com' />
                    </View>
        
                    <View style={Styles.row}>
                        <Text style={Styles.rowLabel}>{I18n.t('password')}</Text>
                        <TextInput
                            ref='password'
                            style={textInputStyle}
                            value={password}
                            editable={editable}
                            keyboardType='default'
                            returnKeyType='go'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry
                            onChangeText={this.handleChangePassword}
                            underlineColorAndroid='transparent'
                            onSubmitEditing={this.handlePressLogin}
                            placeholder='password' />
                    </View>
        
                    <View style={[Styles.loginRow]}>
                        <TouchableOpacity style={Styles.loginButtonWrapper} onPress={this.handlePressLogin}>
                            <View style={Styles.loginButton}>
                                <Text style={Styles.loginText}>{I18n.t('signIn')}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
       
            </ScrollView>
        );
    }

}

// https://github.com/reactjs/react-redux/blob/master/docs/api.md
const mapStateToProps = (state) => {
    console.tron.log(`loginscreen mapStateToProps ${JSON.stringify(state,null,2)}`);
    const { error, fetching } = state.login;
    return { error, fetching };
};

const mapDispatchToProps = (dispatch) => {
    return {
        attemptLogin: (email, password) =>
            dispatch(LoginActions.loginRequest(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
