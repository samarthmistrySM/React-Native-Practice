import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const homeIcon = require('../../assets/home.png');
const homeActiveIcon = require('../../assets/house.fill.png');
const searchIcon = require('../../assets/search.png');
const exploreIcon = require('../../assets/explore.png');
const exploreActiveIcon = require('../../assets/safari.fill.png');
const profileIcon = require('../../assets/profile.png');
const profileActiveIcon = require('../../assets/person.crop.circle.fill.png');
const createIcon = require('../../assets/plus.png');

const BottomTabBar = () => {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = tabId => {
    navigation.navigate(tabId);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      getActiveTab();
    });
    return unsubscribe;
  }, [navigation]);

  const getActiveTab = () => {
    const state = navigation.getState();
    if (state) {
      const currentTab = state.routes[state.index].name;
      setActiveTab(currentTab);
    }
  };

  useEffect(() => {
    getActiveTab();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => handleTabPress('Home')}
        activeOpacity={0.7}>
        <View
          style={[
            styles.iconContainer,
            activeTab === 'Home' && styles.activeIconContainer,
          ]}>
          <Image
            style={[
              styles.tabIcon,
              activeTab === 'Home' && styles.activeTabIcon,
            ]}
            source={activeTab === 'Home' ? homeActiveIcon : homeIcon}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => handleTabPress('Search')}
        activeOpacity={0.7}>
        <View
          style={[
            styles.iconContainer,
            activeTab === 'Search' && styles.activeIconContainer,
          ]}>
          <Image
            style={[styles.tabIcon, activeTab === 'Search' && styles.search]}
            source={searchIcon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => handleTabPress('Explore')}
        activeOpacity={0.7}>
        <View
          style={[
            styles.iconContainer,
            activeTab === 'Explore' && styles.activeIconContainer,
          ]}>
          <Image
            style={[
              styles.tabIcon,
              activeTab === 'Explore' && styles.activeTabIcon,
            ]}
            source={activeTab === 'Explore' ? exploreActiveIcon : exploreIcon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => handleTabPress('Create')}
        activeOpacity={0.7}>
        <View
          style={[
            styles.iconContainer,
            activeTab === 'Create' && styles.activeIconContainer,
          ]}>
          <Image
            style={[
              styles.tabIcon,
              activeTab === 'Create' && styles.activeTabIcon,
            ]}
            source={createIcon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => handleTabPress('Profile')}
        activeOpacity={0.7}>
        <View
          style={[
            styles.iconContainer,
            activeTab === 'Profile' && styles.activeIconContainer,
          ]}>
          <Image
            style={[
              styles.tabIcon,
              activeTab === 'Profile' && styles.activeTabIcon,
            ]}
            source={activeTab === 'Profile' ? profileActiveIcon : profileIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginHorizontal: 20,
    height: 70,
    borderRadius: 35,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    flex: 1,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 25,
  },
  activeIconContainer: {
    backgroundColor: '#000',
    tintColor: '#ffffff',
  },
  tabIcon: {
    width: 24,
    height: 24,
    objectFit: 'contain',
    tintColor: '#666',
  },
  activeTabIcon: {
    tintColor: '#fff',
  },
});
