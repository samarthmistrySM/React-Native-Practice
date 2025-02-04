import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const UCampus = () => {
  const navigation = useNavigation();
  const data2 = [
    {
      title1: 'Beverages',
      image1: require('../assets/bevrages.png'),
      title2: 'Chai',
      image2: require('../assets/chai.png'),
    },
    {
      title1: 'Snacks',
      image1: require('../assets/snacks.png'),
      title2: 'Maggi',
      image2: require('../assets/meggi.png'),
    },
    {
      title1: 'Breakfast',
      image1: require('../assets/breakfast.png'),
      title2: 'Sandwiches',
      image2: require('../assets/sandwich.png'),
    },
    {
      title1: 'Beverages',
      image1: require('../assets/bevrages.png'),
      title2: 'Chai',
      image2: require('../assets/chai.png'),
    },
    {
      title1: 'Snacks',
      image1: require('../assets/snacks.png'),
      title2: 'Maggi',
      image2: require('../assets/meggi.png'),
    },
    {
      title1: 'Breakfast',
      image1: require('../assets/breakfast.png'),
      title2: 'Sandwiches',
      image2: require('../assets/sandwich.png'),
    },
  ];

  const data = [
    {
      title: 'Juice Bar',
      image: require('../assets/juicebar.jpg'),
    },
    {
      title: 'Punjab 13',
      image: require('../assets/punjab.jpg'),
    },
    {
      title: 'Sip-Stop',
      image: require('../assets/sipstop.jpg'),
    },
    {
      title: 'Juice Bar',
      image: require('../assets/juicebar.jpg'),
    },
    {
      title: 'Punjab 13',
      image: require('../assets/punjab.jpg'),
    },
    {
      title: 'Sip-Stop',
      image: require('../assets/sipstop.jpg'),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#f80000', '#f83e3e', '#f87c7c']}
        style={styles.linearGradient}>
        <View style={styles.headerUpperContainer}>
          <View>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Image
                style={{
                  width: 15,
                  height: 15,
                  tintColor: '#fff',
                  objectFit: 'contain',
                  marginRight: 5,
                }}
                source={require('../assets/location.png')}
              />
              <Text style={{paddingRight: 5, color: '#fff'}}>
                Campus Punjab
              </Text>
              <Image
                style={{
                  width: 15,
                  height: 15,
                  tintColor: '#fff',
                  objectFit: 'contain',
                }}
                source={require('../assets/chevron.down.png')}
              />
            </View>
            <Text style={{color: '#fff'}}>Chitkara University, Punjab</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#fff',
              paddingHorizontal: 15,
              borderRadius: 50,
              paddingVertical: 2,
            }}>
            <Image
              style={{
                width: 20,
                height: 20,
                objectFit: 'contain',
                tintColor: '#fff',
                backgroundColor: '#333',
                marginRight: 10,
                borderRadius: 50,
              }}
              source={require('../assets/indianrupeesign.circle.fill.png')}
            />
            <View>
              <Text style={{color: '#fff'}}>Umoney</Text>
              <Text style={{color: '#fff'}}>₹ 1000</Text>
            </View>
          </View>
        </View>

        <View>
          <TextInput
            style={{
              borderRadius: 50,
              width: '90%',
              backgroundColor: '#fff',
              marginHorizontal: 20,
              paddingHorizontal: 20,
              paddingVertical: 15,
              marginTop: 20,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowRadius: 4,
            }}
            placeholder="Search Food..."
          />
        </View>
        <View
          style={{
            backgroundColor: '#dadada',
            width: '100%',
            height: 100,
            borderRadius: 25,
            bottom: -80,
            position: 'absolute',
            zIndex: -20,
          }}></View>
      </LinearGradient>

      <ScrollView style={{flex: 1, padding: 10, marginBottom: 70}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
            marginBottom: 15,
            marginTop: 3,
          }}>
          <View
            style={{
              width: '48%',
              height: 90,
              borderRadius: 20,
              padding: 10,
              backgroundColor: '#f7f5f5',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{width: '70%'}}>
              <Text>Gym</Text>
              <Text style={{color: 'gray'}}>Get Membership</Text>
            </View>
            <Image
              style={{width: 50, height: 50}}
              source={require('../assets/gym-animation.gif')}
            />
          </View>
          <View
            style={{
              width: '48%',
              height: 90,
              borderRadius: 20,
              padding: 10,
              backgroundColor: '#f7f5f5',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{width: '70%'}}>
              <Text>Uniform</Text>
              <Text style={{color: 'gray'}}>Professionalism starts here</Text>
            </View>
            <Image
              style={{width: 50, height: 50}}
              source={require('../assets/uniform-animation.gif')}
            />
          </View>
        </View>
        <View
          style={{
            padding: 10,
            borderColor: 'green',
            borderWidth: 1,
            width: '100%',
            borderRadius: 12,
          }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <View>
              <View
                style={{
                  backgroundColor: '#8ad468',
                  width: '60%',
                  padding: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  borderColor: 'green',
                  borderWidth: 1,
                  borderRadius: 10,
                }}>
                <Image
                  style={{width: 10, height: 10}}
                  source={require('../assets/star.png')}
                />
                <Text style={{fontSize: 9, color: 'green'}}>
                  Newly Launched
                </Text>
              </View>
              <View style={{marginTop: 10}}>
                <Text>Venky's</Text>
                <Text style={{color: 'gray', fontSize: 10}}>
                  Venky's - CU Punjab Rajpura
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                }}
                style={{
                  width: '60%',
                  marginTop: 10,
                  backgroundColor: '#c70202',
                  padding: 3,
                  borderRadius: 10,
                }}>
                <Text style={{textAlign: 'center', color: '#fff'}}>
                  Full menu
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              style={{width: 130, height: 130, objectFit: 'contain'}}
              source={require('../assets/store-animation.gif')}
            />
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                width: 80,
                height: 80,
                marginRight: 10,
                backgroundColor: '#8ad468',
                borderRadius: 20,
                position: 'relative',
                alignItems: 'center',
              }}>
              <Image
                style={{width: '100%', height: '100%', zIndex: 0}}
                source={require('../assets/burger.png')}
              />
              <Text
                style={{
                  zIndex: 10,
                  position: 'absolute',
                  bottom: 2,
                  textAlign: 'center',
                  fontSize: '12',
                }}>
                Burger
              </Text>
            </View>
            <View
              style={{
                width: 80,
                height: 80,
                marginRight: 10,
                backgroundColor: '#8ad468',
                borderRadius: 20,
                position: 'relative',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  zIndex: 0,
                  objectFit: 'contain',
                }}
                source={require('../assets/wrap.png')}
              />
              <Text
                style={{
                  zIndex: 10,
                  position: 'absolute',
                  bottom: 2,
                  textAlign: 'center',
                  fontSize: '12',
                }}>
                wrap
              </Text>
            </View>
            <View
              style={{
                width: 80,
                height: 80,
                marginRight: 10,
                backgroundColor: '#8ad468',
                borderRadius: 20,
                position: 'relative',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  zIndex: 0,
                  objectFit: 'contain',
                }}
                source={require('../assets/cballs.png')}
              />
              <Text
                style={{
                  zIndex: 10,
                  position: 'absolute',
                  bottom: 2,
                  textAlign: 'center',
                  fontSize: '10',
                }}>
                Cheese Balls
              </Text>
            </View>
            <View
              style={{
                width: 80,
                height: 80,
                marginRight: 10,
                backgroundColor: '#8ad468',
                borderRadius: 20,
                position: 'relative',
                alignItems: 'center',
              }}>
              <Image
                style={{width: '100%', height: '100%', zIndex: 0}}
                source={require('../assets/burger.png')}
              />
              <Text
                style={{
                  zIndex: 10,
                  position: 'absolute',
                  bottom: 2,
                  textAlign: 'center',
                  fontSize: '12',
                }}>
                Burger
              </Text>
            </View>
            <View
              style={{
                width: 80,
                height: 80,
                marginRight: 10,
                backgroundColor: '#8ad468',
                borderRadius: 20,
                position: 'relative',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  zIndex: 0,
                  objectFit: 'contain',
                }}
                source={require('../assets/wrap.png')}
              />
              <Text
                style={{
                  zIndex: 10,
                  position: 'absolute',
                  bottom: 2,
                  textAlign: 'center',
                  fontSize: '12',
                }}>
                wrap
              </Text>
            </View>
            <View
              style={{
                width: 80,
                height: 80,
                marginRight: 10,
                backgroundColor: '#8ad468',
                borderRadius: 20,
                position: 'relative',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  zIndex: 0,
                  objectFit: 'contain',
                }}
                source={require('../assets/cballs.png')}
              />
              <Text
                style={{
                  zIndex: 10,
                  position: 'absolute',
                  bottom: 2,
                  textAlign: 'center',
                  fontSize: '10',
                }}>
                Cheese Balls
              </Text>
            </View>
          </ScrollView>
        </View>

        <View style={{marginTop: 20, paddingHorizontal: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={{marginRight: 10}}>Colletions</Text>
            <View
              style={{
                borderBottomWidth: 1,
                width: '80%',
                borderColor: '#a3a0a0',
                marginBottom: 3,
              }}></View>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{marginTop: 10}}>
            {data2.map((item, index) => (
              <View key={index}>
                <View style={styles.item}>
                  <Image style={styles.itemImage} source={item.image1} />
                  <Text>{item.title1}</Text>
                </View>
                <View style={styles.item}>
                  <Image style={styles.itemImage} source={item.image2} />
                  <Text>{item.title2}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={{marginTop: 20, paddingHorizontal: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={{marginRight: 10}}>Trending Outlets</Text>
            <View
              style={{
                borderBottomWidth: 1,
                width: '80%',
                borderColor: '#a3a0a0',
                marginBottom: 3,
              }}></View>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{marginTop: 15}}>
            {data.map((item, index) => (
              <View
                key={index}
                style={{
                  padding: 10,
                  backgroundColor: '#fff',
                  borderRadius: 15,
                  marginRight: 10,
                }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 15,
                    borderWidth: 0.2,
                  }}
                  source={item.image}
                />
                <Text style={{textAlign: 'center', marginTop: 5}}>
                  {item.title}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={{marginTop: 20, paddingHorizontal: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={{marginRight: 10}}>Order Again</Text>
            <View
              style={{
                borderBottomWidth: 1,
                width: '80%',
                borderColor: '#a3a0a0',
                marginBottom: 3,
              }}></View>
          </View>
          <View>
            <View
              style={{
                marginTop: 10,
                borderRadius: 15,
                padding: 5,
                backgroundColor: '#fff',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: '#FAF4E8',
                  padding: 10,
                  alignItems: 'center',
                  borderRadius: 15,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{width: 50, height: 50, marginRight: 5}}
                    source={require('../assets/punjab.jpg')}
                  />
                  <View>
                    <Text>Punjab 13</Text>
                    <Text>Punjab 13 - CU Punjab, Rajpura</Text>
                  </View>
                </View>
                <Text>#orderId</Text>
              </View>
              <View style={{width: '100%', alignItems: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 13,
                    paddingVertical: 8,
                    width: '100%',
                  }}>
                  <Text>Quantity</Text>
                  <Text>1</Text>
                </View>
                <View
                  style={{
                    width: '95%',
                    borderBottomWidth: 1,
                    marginHorizontal: 11,
                    borderColor: '#dadada',
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 13,
                    paddingVertical: 8,
                    width: '100%',
                  }}>
                  <Text>Total Amount</Text>
                  <Text>₹ 275</Text>
                </View>

                <TouchableOpacity
                  style={{
                    width: '90%',
                    borderRadius: 50,
                    backgroundColor: '#f80000',
                    padding: 10,
                    marginVertical: 10,
                  }}>
                  <Text style={{textAlign: 'center', color: '#fff'}}>
                    Reorder
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{marginTop: 20, paddingHorizontal: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={{marginRight: 10}}>Explore All Outlets</Text>
            <View
              style={{
                borderBottomWidth: 1,
                width: '80%',
                borderColor: '#a3a0a0',
                marginBottom: 3,
              }}></View>
          </View>
          <View
            style={{
              width: '100%',
              borderRadius: 15,
              backgroundColor: '#fff',
              marginTop: 15,
            }}>
            <Image
              style={{
                width: '100%',
                height: '200',
                objectFit: 'contain',
                borderRadius: 15,
              }}
              source={require('../assets/br.png')}
            />
            <View style={{flexDirection:'row',padding:10,}}>
              <Image style={{width:80,height:80,borderColor:"green", borderWidth:1,padding:10,borderRadius:20}} source={require("../assets/br.png")}/>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomTab}>
        <TouchableOpacity>
          <View style={styles.tabIconContainer}>
            <Image
              style={{
                width: 25,
                height: 25,
                objectFit: 'contain',
                tintColor: 'red',
              }}
              source={require('../assets/house.fill.png')}
            />
            <Text style={styles.iconText}>Outlets</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.tabIconContainer}>
            <Image
              style={{width: 25, height: 25, objectFit: 'contain'}}
              source={require('../assets/repeat.circle.png')}
            />
            <Text style={styles.iconText}>Orders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.tabIconContainer}>
            <Image
              style={{width: 25, height: 25, objectFit: 'contain'}}
              source={require('../assets/wallet.bifold.png')}
            />
            <Text style={styles.iconText}>Umoney</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.tabIconContainer}>
            <Image
              style={{width: 25, height: 25, objectFit: 'contain'}}
              source={require('../assets/profile.png')}
            />
            <Text style={styles.iconText}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UCampus;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#dadada',
    position: 'relative',
  },
  linearGradient: {
    width: '100%',
    height: 200,
    marginTop: -65,
    justifyContent: 'space-between',
    position: 'relative',
  },
  headerUpperContainer: {
    paddingTop: 90,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemImage: {
    width: 70,
    height: 70,
    objectFit: 'contain',
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#822828',
  },
  item: {
    marginHorizontal: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomTab: {
    width: '95%',
    height: 70,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 25,
    left: 10,
    borderRadius: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  tabIconContainer: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    marginTop: 3,
  },
});
