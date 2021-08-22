import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#002e27',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  bodyUpperText: {
    fontSize: 70,
    paddingTop: 30,
    fontWeight: 'bold',
    color: '#fefddf',
  },
  bodyTextInputText: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 5,
    color: '#fefddf',
  },
  bodyTextInput: {
    height: 50,
    backgroundColor: 'white',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  bodyLowerButton: {
    height: 50,
    backgroundColor: '#fefddf',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  bodyLowerButtonText: {
    color: '#002e27',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
