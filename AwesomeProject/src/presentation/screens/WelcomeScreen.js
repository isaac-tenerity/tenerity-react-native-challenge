import React from 'react';
import { SafeAreaView, Image, View, Text, StyleSheet } from 'react-native';
import Logo from '../../application/assets/logo.png';
import { text } from '../../application/common/sizes';
import Button from '../../infrastructure/globalComponents/Button';
import Input from '../../infrastructure/globalComponents/Input';

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.welcomeText}>Welcome To</Text>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.formContainer}>
          <Input placeholder="your name" />
          <Button title="start discovering" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  welcomeText: {
    flex: 0.1,
    textAlign: 'center',
    fontSize: text.TITLE,
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

export default WelcomeScreen;
