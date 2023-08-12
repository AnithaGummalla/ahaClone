import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import '../../../assets/images/khakhee.png';

const LanguageSelect = () => {
  const [isselected, setIsSelected] = useState([
    {
      id: 1,
      language: 'Telugu',
      original_lang: 'ఆహా',
      image: require('../../../assets/images/balaya.png'),
      selected: false,
    },
    {
      id: 2,
      language: 'Tamil',
      original_lang: 'ஆஹா',
      image: require('../../../assets/images/khakhee.png'),
      selected: false,
    },
  ]);
  const [nextProcess, setNextProcess] = useState(false);
  const onRadioBtnClick = (item: any) => {
    console.log('select lang');
    let updatedState = isselected.map(x =>
      x.id === item.id ? {...x, selected: true} : {...x, selected: false},
    );
    setIsSelected(updatedState);
    // setNextProcess(true);
  };

  const selectItem = item => {
    setIsSelected(val => {
      const index = val.findIndex(x => x.id === item.id);
      return [
        ...val.slice(0, index),
        {
          ...item,
          selected: !item.selected,
        },
        ...val.slice(index + 1),
      ];
    });
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
        paddingHorizontal: 16,
      }}>
      <View style={{marginTop: 60, marginBottom: 30}}>
        <Text style={{fontSize: 18}}>
          Watch <Text style={{color: 'orange'}}>100%</Text> content in
        </Text>
      </View>
      <FlatList
        data={isselected}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => selectItem(item)}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: item.selected ? '#954535' : 'gray',
              opacity: 0.6,
              width: Dimensions.get('screen').width / 1.1,
              marginVertical: 10,
              height: Dimensions.get('screen').width / 4,
            }}>
            {item.selected ? (
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
              {item.language}
            </Text>
            <Text
              style={{fontWeight: 'bold', fontSize: 20, alignSelf: 'center'}}>
              {item.original_lang}
            </Text>
            <Image
              source={item.image}
              style={{
                width: Dimensions.get('screen').width / 4,
                height: Dimensions.get('screen').width / 4,
                alignSelf: 'center',
                marginLeft: 10,
                resizeMode: 'cover',
              }}
            />
          </TouchableOpacity>
        )}
      />
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

export default LanguageSelect;
