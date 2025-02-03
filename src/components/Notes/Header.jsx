import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Image
          style={styles.icon}
          source={require('../../assets/sidebar.left.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/profile.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconContainer: {
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 35,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
    backgroundColor: '#333',
    objectFit: 'contain',
  },
});
