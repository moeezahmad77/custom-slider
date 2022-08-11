import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import Card from './card';

const windowWidth = Dimensions.get('window').width;

const CustomCardComp = ({
  containerStyle,
  showInfoIcon,
  activeOpacity = 0.5,
  imageStyle,
  textContaner,
  textStyle,
  onClick,
  infoContainer,
  infoImageStyle,
  infoImage,
  isUri = false,
  imageUri,
  listCountries,
  isHorizontal = true,
  itemSeparatorStyle,
  flatListStyle,
}) => {
  return (
    <FlatList
      nestedScrollEnabled={true}
      horizontal={isHorizontal}
      data={listCountries}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => (
        <Card
          text={item.name}
          image={item.image}
          containerStyle={
            isHorizontal
              ? containerStyle
              : {width: windowWidth - 24, ...containerStyle}
          }
          showInfoIcon={showInfoIcon}
          activeOpacity={activeOpacity}
          imageStyle={imageStyle}
          textContaner={textContaner}
          textStyle={textStyle}
          onClick={onClick}
          infoContainer={infoContainer}
          infoImageStyle={infoImageStyle}
          infoImage={infoImage}
          isUri={isUri}
          imageUri={imageUri}
        />
      )}
      ItemSeparatorComponent={() => (
        <View
          style={
            isHorizontal
              ? [{width: 12}, itemSeparatorStyle]
              : [{height: 12}, itemSeparatorStyle]
          }
        />
      )}
      style={
        isHorizontal
          ? [{marginHorizontal: 12}, flatListStyle]
          : [{marginHorizontal: 12, marginBottom: 12}, flatListStyle]
      }
    />
  );
};

export default CustomCardComp;
