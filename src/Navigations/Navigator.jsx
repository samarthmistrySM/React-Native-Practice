import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import CartList from '../screens/CartList';
import WeatherApp from '../screens/WeatherApp';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Flipkart from '../screens/Flipkart';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createDrawerNavigator} from '@react-navigation/drawer';
import NoteHome from '../screens/Notes/NoteHome';
import UCampus from '../screens/UCampus';

const AuthStack = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="UCampus">
        <AuthStack.Screen name="Home" component={HomeScreen} />
        <AuthStack.Screen name="Cart" component={CartList} />
        <AuthStack.Screen name="Weather" component={WeatherApp} />
        
        <AuthStack.Screen
          name="Flipkart"
          component={Flipkart}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Notes"
          component={NotesNavigator}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen name="UCampus" component={UCampus} options={{
          headerShown: false,
        }} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

const Drawer = createDrawerNavigator();

const NotesNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#1A1A1A',
          width: 280,
        },
        drawerActiveBackgroundColor: '#333',
        drawerInactiveBackgroundColor: 'transparent',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#999',
        drawerLabelStyle: {
          marginLeft: 20,
          fontSize: 16,
        },
        headerStyle:{
          backgroundColor:'#1A1A1A',
        },
        headerTintColor:'#fff',
      }}>
      <Drawer.Screen
        name="Home"
        component={NoteHome}
        options={{
          drawerIcon: ({color}) => (
            <Image
              style={{width: 20, height: 20, tintColor: color}}
              source={require('../assets/home.png')}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Search"
        component={NoteHome}
        options={{
          drawerIcon: ({color}) => (
            <Image
              style={{width: 20, height: 20, tintColor: color}}
              source={require('../assets/search.png')}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Explore"
        component={NoteHome}
        options={{
          drawerIcon: ({color}) => (
            <Image
              style={{width: 20, height: 20, tintColor: '#fff'}}
              source={require('../assets/explore.png')}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Create"
        component={NoteHome}
        options={{
          drawerIcon: ({color}) => (
            <Image
              style={{width: 20, height: 20, tintColor: '#fff'}}
              source={require('../assets/create.png')}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={NoteHome}
        options={{
          drawerIcon: ({color}) => (
            <Image
              style={{width: 20, height: 20, tintColor: '#fff'}}
              source={require('../assets/profile.png')}
            />
          ),
        }}
      />
    </Drawer.Navigator>
    
  );
};

export default Navigation;
