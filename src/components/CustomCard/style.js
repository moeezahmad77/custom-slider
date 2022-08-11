import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const containerWidth = windowWidth - 230;

const styles = StyleSheet.create({
  cardContainer: {
    width: containerWidth,
    height: 300,
  },
  cardImage: {
    flex: 1,
  },
  cardImageStyle: {
    borderRadius: 20,
    resizeMode: 'cover',
  },
  cityName: {
    color: 'white',
    marginVertical: 2,
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
  },
  viewContainer: {
    width: 'auto',
    padding: '5%',
    alignContent: 'center',
    justifyContent: 'center',
    top: '68%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 20,
  },
  infoContainer: {
    width: 50,
    height: 50,
    padding: '5%',
    alignContent: 'center',
    justifyContent: 'center',
    top: '90%',
    backgroundColor: 'black',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 50,
  },
  infoContainerImg: {
    alignSelf: 'center',
    height: 40,
    width: 40,
  },
});

export default styles;
