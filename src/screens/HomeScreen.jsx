import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
          <Text style={styles.text}>Go to CartList</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Weather")}>
          <Text style={styles.text}>Go to Weather App</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Flipkart")}>
          <Text style={styles.text}>Go to Flipkart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Notes")}>
          <Text style={styles.text}>Go to Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("UCampus")}>
          <Text style={styles.text}>Go to UCampus</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color:"#0000EE",
    fontSize:17,
    marginTop:10,
  }
});
