import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

const Card = ({
  text,
  image,
  containerStyle,
  showInfoIcon,
  activeOpacity,
  imageStyle,
  textContaner,
  textStyle,
  onClick,
  infoContainer,
  infoImageStyle,
  infoImage,
  isUri,
  imageUri,
}) => {
  return (
    <TouchableOpacity
      style={[styles.cardContainer, containerStyle]}
      activeOpacity={activeOpacity}
      onPress={onClick}>
      <ImageBackground
        style={styles.cardImage}
        imageStyle={[styles.cardImageStyle, imageStyle]}
        source={image}>
        {text ? (
          <View style={[styles.viewContainer, textContaner]}>
            <Text numberOfLines={2} style={[styles.cityName, textStyle]}>
              {text}
            </Text>
          </View>
        ) : null}
        {showInfoIcon ? (
          <View style={[styles.infoContainer, infoContainer]}>
            <Image
              style={[styles.infoContainerImg, infoImageStyle]}
              source={isUri ? {uri: imageUri} : infoImage}
            />
          </View>
        ) : null}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card;
