import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import {useState} from 'react'
import BeShowed from './BeShowed'

const PhotoDetail = ({title, imageUrl}) => {
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    buttonExtend
  } = styles;

  const [showImagePrev,setShowImagePrev] = useState(false);

  const changeShowImage = () => {
    setShowImagePrev(!showImagePrev)
  }

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{uri: imageUrl}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title.toUpperCase()}</Text>
        </View>
        <View style={buttonExtend}>
          <Button onPress={changeShowImage}>{showImagePrev?'-':'+'}</Button>
        </View>
      </CardSection>
      <BeShowed show={showImagePrev}>
        <CardSection>
          <Image style={imageStyle} source={{uri: imageUrl}} />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(imageUrl)}>See Now!</Button>
        </CardSection>
      </BeShowed>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    width:200,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null,
  },
  buttonExtend: {
    width: 60,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    
  }
};

export default PhotoDetail;
