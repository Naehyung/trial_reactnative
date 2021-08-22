import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

export default function Signup(props) {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  /**
   * Sign up handler
   */
  const signup = () => {

    //Check that all the fields are typed
    if (!name || !email || !password) {
      Alert.alert('Please type all the required fields');
      return false;
    }

    //Check passwords match
    if (password !== confirmPassword) {
      Alert.alert('Password do not match');
      return false;
    }

    Axios.post('http://192.168.1.100:5000/user/signup', {
      name,
      email,
      password,
    })
      .then(response => {
        console.log(response.data);
        props.navigation.navigate('Landing');
      })
      .catch(function (err) {
        Alert.alert(err.response.data.message);
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
          <Text style={styles.bodyTextInputText}>Name</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={setName}
            placeholder="Name"
            style={styles.bodyTextInput}
          />
          <Text style={styles.bodyTextInputText}>Email</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={setEmail}
            placeholder="Email"
            style={styles.bodyTextInput}
          />
          <Text style={styles.bodyTextInputText}>Password</Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={setPassword}
            placeholder="Password"
            style={styles.bodyTextInput}
          />
          <Text style={styles.bodyTextInputText}>Confirm Password</Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            style={styles.bodyTextInput}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => signup()} style={styles.bodyLowerButton}>
        <Text style={styles.bodyLowerButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
