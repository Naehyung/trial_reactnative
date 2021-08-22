import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#002e27',
    paddingVertical: 20,
  },
  bodyUpperText: {
    fontSize: 70,
    paddingTop: 70,
    fontWeight: 'bold',
    color: '#fefddf',
  },
  bodyLowerSignupButton: {
    height: 50,
    backgroundColor: '#fefddf',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  bodyLowerSignupButtonText: {
    color: '#002e27',
    fontWeight: 'bold',
    fontSize: 20,
  },
  bodyLowerSigninButton: {
    height: 50,
    backgroundColor: '#002e27',
    borderColor: '#fefddf',
    borderWidth: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  bodyLowerSigninText: {
    color: '#fefddf',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
