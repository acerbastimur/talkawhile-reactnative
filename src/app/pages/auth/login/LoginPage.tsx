import * as React from 'react';
import { Text, ImageBackground, View, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { Form, Item, Input, Label, Button } from 'native-base';
import LoginStyles from './LoginStyles';
export interface LoginProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface LoginState {
  email: string;
  password: string;
}

export default class Login extends React.PureComponent<LoginProps, LoginState> {

  private passwordInputReference: any;
  constructor(props: LoginProps) {
    super(props);
  }
  state = {
    email: '',
    password: ''
  }

  public render() {
    return (
      <ImageBackground source={require("../../../../assets/images/login.jpg")} style={LoginStyles.container}>
        <Text style={LoginStyles.loginText}>Login to Talk a While</Text>
        <Form>
          <Item floatingLabel style={LoginStyles.formItem} >
            <Label style={LoginStyles.inputLabel}>Email</Label>
            <Input
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}
              returnKeyType={"next"}
              onSubmitEditing={() => { this.passwordInputReference._root.focus(); }}
            />
          </Item>
          <Item floatingLabel style={LoginStyles.formItem}>
            <Label style={LoginStyles.inputLabel}>Password</Label>
            <Input
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
              secureTextEntry={true}
              getRef={(input) => { this.passwordInputReference = input; }}
            />
          </Item>
          <View style={LoginStyles.loginBtnContainer}>
            <Button style={LoginStyles.loginBtn} onPress={() => this.props.navigation.navigate('Tabs')}>
              <Text style={LoginStyles.loginBtnText}> SIGN IN </Text>
            </Button>
          </View>
          <TouchableOpacity style={LoginStyles.registerRoute} onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={LoginStyles.registerRouteText}> Not a Member ? <Text style={LoginStyles.registerRouteTextInner}>Sign up</Text></Text>
          </TouchableOpacity>
        </Form>
      </ImageBackground>
    );
  }

}

