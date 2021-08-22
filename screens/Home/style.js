import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  aboveSafeAreaView: {flex: 0, backgroundColor: '#fefddf'},
  container: {
    flex: 1,
  },
  bodyUpperContainer: {
    backgroundColor: '#002e27',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyUpperText: {
    color: '#fefddf',
    fontWeight: 'bold',
    fontSize: 20,
  },
  mainMessageContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
  mainMessageUppderContainer: {
    paddingVertical: 5,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#002e27',
  },
  mainMessageUpperText: {
    paddingLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#002e27',
  },
  mainMessageBodyContainer: {
    backgroundColor: '#f3f3f3',
    margin: 10,
    borderRadius: 10,
  },
  mainMessageBodyText: {padding: 10, color: 'black'},
});
