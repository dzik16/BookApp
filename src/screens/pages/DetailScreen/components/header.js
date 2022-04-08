import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {IconBack, IconShare, IconLove} from '../../../../assets';
import {Color} from '../../../../config/utils/color';
import {useNavigation} from '@react-navigation/native';

const header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={IconBack} style={styles.headerIcon} />
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image source={IconLove} style={[styles.headerIcon, styles.love]} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={IconShare} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.SECOND_MAIN_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  poster: {
    height: 180,
  },
  headerIcon: {
    height: 30,
    width: 30,
  },
  love: {
    marginRight: 20,
  },
});
