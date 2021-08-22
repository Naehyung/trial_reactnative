import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Alert, FlatList} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import Axios from 'axios';
import styles from './style';

export default function Home(props) {
  const [messages, setMessages] = useState();
  const [loading, setLoading] = useState(false);

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  useEffect(() => {
    requestUserPermission();
    getMessages();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      if (Platform.OS === 'android') {
        PushNotification.localNotification({
          channelId: 'trial',
          message: remoteMessage.notification.body,
          title: remoteMessage.notification.title,
          bigPictureUrl: remoteMessage.notification.android.imageUrl,
          smallIcon: remoteMessage.notification.android.imageUrl,
        });
      }
    });
    return unsubscribe;
  }, []);

  /**
   * Get all the messages of the user
   */
  const getMessages = () => {
    console.log(props.route.params.user.result._id);
    Axios.post('http://192.168.1.100:5000/message/getallmessages', {
      id: props.route.params.user.result._id,
    })
      .then(response => {
        setMessages(response.data.messages);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  /**
   * Request push notification permission to user
   */
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFcmToken();
      console.log('Authorization status:', authStatus);
    }
  };

  /**
   * Get push notification token
   */
  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
      console.log('Your Firebase Token is:', fcmToken);
      sendPushToken(fcmToken);
    } else {
      console.log('Failed', 'No token received');
    }
  };

  /**
   * Store push notification token in the datebase
   */
  const sendPushToken = pushToken => {
    Axios.post('http://192.168.1.100:5000/user/updateUser', {
      pushToken: pushToken,
      id: props.route.params.user.result._id,
    })
      .then(response => {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  /**
   * Refresh the page
   */
  const onRefresh = () => {
    getMessages();
  };

  return (
    <>
      <SafeAreaView style={styles.aboveSafeAreaView} />
      <SafeAreaView style={styles.container}>
        <View style={styles.bodyUpperContainer}>
          <Text style={styles.bodyUpperText}>TeamPro</Text>
        </View>
        <View style={styles.container}>
          <FlatList
            data={messages}
            renderItem={({item, index}) => (
              <View style={styles.mainMessageContainer}>
                <View style={styles.mainMessageUppderContainer}>
                  <Text style={styles.mainMessageUpperText}>Messages</Text>
                </View>
                <View style={styles.mainMessageBodyContainer}>
                  <Text style={styles.mainMessageBodyText}>{item.content}</Text>
                </View>
              </View>
            )}
            onRefresh={() => onRefresh()}
            refreshing={loading}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
