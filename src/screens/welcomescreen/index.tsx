import {Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = ({navigation}) => {
  // const navigate = navigation
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('lang');
    }, 1000);
  });
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[
        '#E97451',
        'black',
        'black',
        'black',
        'black',
        'black',
        'black',
        '#E97451',
      ]}
      style={{
        backgroundColor: 'black',
        height: Dimensions.get('screen').width * 2.2,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={{
          uri: 'https://www.gojustonline.in/wp-content/uploads/2021/12/Aha-logo.jpg',
        }}
        style={{
          width: 320,
          height: 180,
        }}
      />
    </LinearGradient>
  );
};

export default WelcomeScreen;
