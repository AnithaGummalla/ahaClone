import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import '../../../assets/images/khakhee.png';

const ContentRead = () => {
  const [isselected, setIsSelected] = useState([
    {
      id: 1,
      language: 'English',
      uri: 'https://www.gojustonline.in/wp-content/uploads/2021/12/Aha-logo.jpg',
      image: require('../../../assets/images/balaya.png'),
      selected: false,
    },
    {
      id: 2,
      language: 'Tamil',
      original_lang: 'ஆஹா',
      image: require('../../../assets/images/balaya.png'),
      selected: false,
    },
  ]);
  const [nextProcess, setNextProcess] = useState(false);
  const onRadioBtnClick = (item: any) => {
    let updatedState = isselected.map(x =>
      x.id === item.id ? {...x, selected: true} : {...x, selected: false},
    );
    setIsSelected(updatedState);
    setNextProcess(true);
  };
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
        '#E97451',
      ]}
      style={{
        height: Dimensions.get('screen').width * 2.2,
      }}>
      <View style={{marginTop: 60, marginLeft: 20, marginBottom: 30}}>
        <Text style={{fontSize: 18}}>
          Read <Text style={{color: 'orange'}}>content</Text> in English
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', gap: 20}}>
        {isselected.map(s => (
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: s.selected ? '#954535' : 'gray',
              opacity: 0.6,
              width: Dimensions.get('screen').width / 1.1,
              borderRadius: 10,
            }}
            key={s.id}
            onPress={() => onRadioBtnClick(s)}>
            {s.selected ? (
              <Image
                source={require('../../../assets/images/checked.png')}
                style={{
                  width: 15,
                  height: 15,
                  alignSelf: 'center',
                  marginLeft: 10,
                }}
              />
            ) : (
              <Image
                source={require('../../../assets/images/non-checked.png')}
                style={{
                  width: 15,
                  height: 15,
                  alignSelf: 'center',
                  marginLeft: 10,
                }}
              />
            )}

            <Text
              style={{fontWeight: 'bold', fontSize: 20, alignSelf: 'center'}}>
              {s.language}
            </Text>
            <Text
              style={{fontWeight: 'bold', fontSize: 20, alignSelf: 'center'}}>
              {s.original_lang}
            </Text>
            <Image
              source={s.image}
              style={{
                width: 90,
                height: 90,
                alignSelf: 'center',
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flex: 1,
          marginBottom: 60,
          marginRight: 30,
        }}>
        {nextProcess ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#ff4500',
              height: Dimensions.get('screen').width / 8,
              width: Dimensions.get('screen').width / 2,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <Text>Next</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </LinearGradient>
  );
};

export default ContentRead;
