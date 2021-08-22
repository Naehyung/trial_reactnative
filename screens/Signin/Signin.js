import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';
import styles from './style';

export default function Signin(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();

  /**
   * Sign in handler
   */
  const signin = () => {
    Axios.post('http://192.168.1.100:5000/user/signin', {
      email,
      password,
    })
      .then(response => {
        props.navigation.navigate('Home', {user: response.data});
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <TouchableOpacity
          style={{paddingLeft: 10}}
          onPress={() => props.navigation.goBack()}>
          <Ionicons name="caret-back" size={35} color={'#fefddf'} />
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.bodyUpperText}>TeamPro</Text>
        </View>
        <View>
          <Text style={styles.bodyTextInputText}>Email</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={setEmail}
            placeholder="Name"
            style={styles.bodyTextInput}
          />
          <Text style={styles.bodyTextInputText}>Password</Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={setPassword}
            placeholder="Password"
            style={styles.bodyTextInput}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => signin()}
        style={styles.bodyLowerButton}>
        <Text
          style={styles.bodyLowerButtonText}>
          Continue
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
