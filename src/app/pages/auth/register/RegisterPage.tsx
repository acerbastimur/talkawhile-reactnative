import * as React from 'react';
import { Text, ImageBackground, View, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { Form, Item, Input, Label, Button } from 'native-base';
import RegisterStyles from './RegisterStyles';
export interface RegisterProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface RegisterState {
  email: string;
  password: string;
  username: string;
}

export default class Register extends React.PureComponent<RegisterProps, RegisterState> {

  private passwordInputReference: any;
  private emailInputReference: any;
  constructor(props: RegisterProps) {
    super(props);
  }
  state = {
    username: '',
    email: '',
    password: ''
  }

  public render() {
    return (
      <ImageBackground source={require("../../../../assets/images/register.jpg")} style={RegisterStyles.container}>
        <Text style={RegisterStyles.registerText}>Sign up to Talk a While</Text>
        <Form>
          <Item floatingLabel style={RegisterStyles.formItem}>
            <Label style={RegisterStyles.inputLabel}>Username</Label>
            <Input
              onChangeText={(text) => this.setState({ username: text })}
              value={this.state.username}
              returnKeyType={"next"}
              onSubmitEditing={() => { this.emailInputReference._root.focus(); }}
            />
          </Item>
          <Item floatingLabel style={RegisterStyles.formItem}>
            <Label style={RegisterStyles.inputLabel}>Email</Label>
            <Input
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}
              returnKeyType={"next"}
              onSubmitEditing={() => { this.passwordInputReference._root.focus(); }}
            />
          </Item>
          <Item floatingLabel style={RegisterStyles.formItem}>
            <Label style={RegisterStyles.inputLabel}>Password</Label>
            <Input
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
              secureTextEntry={true}
              getRef={(input) => { this.passwordInputReference = input; }}
            />
          </Item>
          <View style={RegisterStyles.registerBtnContainer}>
            <Button style={RegisterStyles.registerBtn}>
              <Text style={RegisterStyles.registerBtnText}> SIGN UP </Text>
            </Button>
          </View>
          <TouchableOpacity style={RegisterStyles.loginRoute} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={RegisterStyles.loginRouteText}> Aldready a member ? <Text style={RegisterStyles.loginRouteTextInner}>Sign in</Text></Text>
          </TouchableOpacity>
        </Form>
      </ImageBackground>
    );
  }

}

