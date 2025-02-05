import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const API_KEY = '1c5515b5f3e08e9a0abf89b3ce4a173d';

const WeatherApp = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('London');
  const [input, setInput] = useState('');
  const [isModalOpen, setIsModalVisible] = useState(false)

  function getFormattedTime() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const now = new Date();
    const day = days[now.getDay()];

    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    return `${day} ${formattedHours}:${minutes} ${amPm}`;
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setData(response.data);

    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  const handleSearch = () => {
    setCity(input);
    getFormattedTime();
    fetchData();
    setIsModalVisible(false)
  };

  const handleModalClose = () => {
    setIsModalVisible(false)
  }

  const handleModalOpen = () => {
    setIsModalVisible(true);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'space-between', height: '100%' }}>
      <View style={styles.container}>
        <Modal
          visible={isModalOpen}
          animationType="fade"
          transparent={true}
          onRequestClose={handleModalClose}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleModalClose}>
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Search City</Text>
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter city name"
                  value={input}
                  onChangeText={setInput}
                />
                <TouchableOpacity style={styles.button} onPress={handleSearch}>
                  <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>


        {data && (
          <View style={{ marginBottom: 30 }}>
            <TouchableOpacity style={{flexDirection:'row-reverse',justifyContent:'center',alignItems:'center'}} onPress={handleModalOpen}>
            <Text style={styles.cityName}>{data.name}</Text>
            <Image style={{width:30,height:30,objectFit:'contain',marginRight:30}} source={require("../assets/magnifyingglass.png")}/>
            </TouchableOpacity>
            <Text style={{ fontWeight: 600, fontSize: 21, textAlign: 'center' }}>{getFormattedTime()}</Text>
          </View>
        )}

        {data && (
          <View style={{ justifyContent: 'center', alignItems: "center" }}>
            <Image style={{ width: 150, height: 150, marginBottom: 50 }} source={require("../assets/sun-cloud.png")} />
            <Text style={styles.temp}>{(data.main.temp).toFixed()} °C</Text>
            <Text style={[styles.description, { fontSize: 20, fontWeight: 500 }]}>Good Afternoon</Text>
            <Text style={styles.description}>{data.weather[0].description}</Text>

            <View style={{ width: 20, height: 1, backgroundColor: '#333', marginTop: 10, }}></View>
          </View>
        )}



        {data && (
          <View style={styles.weatherContainer}>

            <View style={{ marginHorizontal: 20, width: '30%', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 50, height: 50, objectFit: 'contain', marginBottom: 5 }} source={require('../assets/humidity.png')} />
              <Text>{data.main.humidity}</Text>
              <Text>Humidity</Text>
            </View>
            <View style={{ height: 50, width: 1, backgroundColor: '#dadada' }}></View>
            <View style={{ marginHorizontal: 20, width: '30%', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 50, height: 50, objectFit: 'contain', marginBottom: 5 }} source={require('../assets/wind.png')} />
              <Text>{data.wind.speed} <Text style={{fontStyle:'italic'}}>m/s</Text></Text>
              <Text>Windspeed</Text>
            </View>
            <View style={{ height: 50, width: 1, backgroundColor: '#dadada' }}></View>
            <View style={{ marginHorizontal: 20, width: '30%', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 50, height: 50, objectFit: 'contain', marginBottom: 5 }} source={require('../assets/cloud.png')} />
              <Text>{data.clouds.all}</Text>
              <Text>Clouds</Text>
            </View>

          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default WeatherApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f6fa',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#dadada',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  weatherContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  cityName: {
    fontWeight: '200',
    marginBottom: 10,
    fontSize: 40,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  temp: {
    fontSize: 48,
    fontWeight: 300,
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: '30%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    borderRadius: 15,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#333',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
