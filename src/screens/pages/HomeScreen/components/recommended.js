import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Color} from '../../../../config/utils/color';
import {useNavigation} from '@react-navigation/native';

const recommended = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Recommended</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={props.data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={[styles.content, styles.shadowProp]}
            onPress={() => navigation.navigate('DetailScreen', {id: item.id})}>
            <Image source={{uri: item.cover_image}} style={styles.bookCover} />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default recommended;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  bookCover: {
    width: 130,
    height: 180,
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 10,
  },
  content: {
    backgroundColor: Color.BACKGROUND_MAIN,
    borderRadius: 10,
    width: 145,
    height: 255,
    marginRight: 25,
    paddingHorizontal: 8,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.BLACK,
    marginBottom: 10,
  },
  bookTitle: {
    paddingTop: 5,
    color: Color.BLACK,
    fontWeight: 'bold',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 6,
  },
});
