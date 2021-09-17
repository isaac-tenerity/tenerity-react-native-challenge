import React from 'react';
import { SafeAreaView, Image, View, Text, StyleSheet } from 'react-native';
import Logo from '../../application/assets/logo.png';
import { text } from '../../application/common/sizes';
import Button from '../../infrastructure/globalComponents/Button';
import Error from '../../infrastructure/globalComponents/Error';
import Input from '../../infrastructure/globalComponents/Input';
import ReduxContainer from '../containers/ReduxContainer';

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  onChangeText = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  render() {
    let { registerUser, registrationError, isRegisterLoading } = this.props;
    let { username } = this.state;
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.formContainer}>
          <View>
            <Input
              placeholder="your name"
              onChangeText={username => this.onChangeText('username', username)}
            />
            {registrationError && <Error errorMessage={registrationError} />}
          </View>
          <Button
            title="start discovering"
            isButtonLoading={isRegisterLoading}
            isDisabled={username === ''}
            onPress={() => registerUser(username)}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  logo: {
    height: null,
    width: null,
    flex: 1,
    margin: 40,
  },
  logoContainer: {
    flex: 0.5,
  },
  formContainer: {
    flex: 1.4,
    justifyContent: 'space-around',
  },
});

export default ReduxContainer(WelcomeScreen);
