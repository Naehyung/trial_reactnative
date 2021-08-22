import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from "./style"

export default function Landing(props) {
  return (
    <SafeAreaView
      style={styles.mainContainer}>
      <Text
        style={styles.bodyUpperText}>
        TeamPro
      </Text>
      <View
        style={{
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Signup')}
          style={styles.bodyLowerSignupButton}>
          <Text
            style={styles.bodyLowerSignupButtonText}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Signin')}
          style={styles.bodyLowerSigninButton}>
          <Text
            style={styles.bodyLowerSigninText}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
