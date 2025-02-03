import {StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const Flipkart = () => {
  const {width, height} = Dimensions.get('window');
  const [isSearch, setIsSearch] = useState(false);

  const data = [
    {id: 1, source: require('../assets/bds.png')},
    {id: 2, source: require('../assets/bbd.png')},
    {id: 3, source: require('../assets/bbd2.png')},
    {id: 4, source: require('../assets/bbd3.png')},
  ];

  const [carouselData, setCarouselData] = useState(data);

  const handleSearchClick = () => {
    setIsSearch(!isSearch);
  };


  const data2 = [
    {
      title1: 'kilos',
      image1: require('../assets/surf.png'),
      title2: 'SuperCoin',
      image2: require('../assets/supercoin.png'),
    },
    {
      title1: 'Fashion',
      image1: require('../assets/fashion.png'),
      title2: 'Gadgets',
      image2: require('../assets/gadgets.png'),
    },
    {
      title1: 'Mobiles',
      image1: require('../assets/mobile.png'),
      title2: 'Appliances',
      image2: require('../assets/appliances.png'),
    },
    {
      title1: 'kilos',
      image1: require('../assets/surf.png'),
      title2: 'SuperCoin',
      image2: require('../assets/supercoin.png'),
    },
    {
      title1: 'Fashion',
      image1: require('../assets/fashion.png'),
      title2: 'Gadgets',
      image2: require('../assets/gadgets.png'),
    },
    {
      title1: 'Mobiles',
      image1: require('../assets/mobile.png'),
      title2: 'Appliances',
      image2: require('../assets/appliances.png'),
    },
    {
      title1: 'kilos',
      image1: require('../assets/surf.png'),
      title2: 'SuperCoin',
      image2: require('../assets/supercoin.png'),
    },
    {
      title1: 'Fashion',
      image1: require('../assets/fashion.png'),
      title2: 'Gadgets',
      image2: require('../assets/gadgets.png'),
    },
    {
      title1: 'Mobiles',
      image1: require('../assets/mobile.png'),
      title2: 'Appliances',
      image2: require('../assets/appliances.png'),
    },
  ];

  const data3 = [
    {
      name: 'Toothpaste',
      quantity: '300 g',
      price: '₹172',
      discountPrice: '₹265',
      image: require('../assets/toothpaste.png'),
    },
    {
      name: 'Ghee',
      quantity: '1 L',
      price: '₹500',
      discountPrice: '₹650',
      image: require('../assets/ghee.png'),
    },
    {
      name: 'Soap',
      quantity: '100 g',
      price: '₹120',
      discountPrice: '₹384',
      image: require('../assets/soap.png'),
    },
    {
      name: 'Toothpaste',
      quantity: '300 g',
      price: '₹172',
      discountPrice: '₹265',
      image: require('../assets/toothpaste.png'),
    },
    {
      name: 'Ghee',
      quantity: '1 L',
      price: '₹500',
      discountPrice: '₹650',
      image: require('../assets/ghee.png'),
    },
    {
      name: 'Soap',
      quantity: '100 g',
      price: '₹120',
      discountPrice: '₹384',
      image: require('../assets/soap.png'),
    }
  ]

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 600,
            fontStyle: 'italic',
            color: '#fff',
          }} onPress={()=>navigation.navigate('Home')}>
          Flipkart
        </Text>
        <View style={{flexDirection: 'row', padding: 10}}>
          <TouchableOpacity onPress={handleSearchClick}>
          <Image
            source={require('../assets/magnifyingglass.png')}
            style={styles.headerIcons}
          />
          </TouchableOpacity>
          <Image
            source={require('../assets/cart.fill.png')}
            style={styles.headerIcons}
          />
          <Image
            source={require('../assets/bell.fill.png')}
            style={styles.headerIcons}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        {isSearch && (
          <View style={{width:'100%',padding:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#dadada'}}>
            <TextInput placeholder='Search item' style={{width:'80%',height:50,backgroundColor:'#fff',paddingHorizontal:10,borderRadius:7}}/>
            <View style={{width:'17%',height:50,backgroundColor:'#1F74BA',justifyContent:'center',alignItems:'center',borderRadius:7}}>
            <Image style={{width:30,height:30,objectFit:'contain',tintColor:'#fff'}} source={require("../assets/magnifyingglass.png")}/>
            </View>
          </View>
          )}
        <View>
          <Carousel
            loop
            width={width}
            height={240}
            autoPlay={true}
            data={carouselData}
            scrollAnimationDuration={1000}
            renderItem={({item}) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 240, width: '100%', resizeMode: 'cover'}}
                  source={item.source}
                />
              </View>
            )}
          />
        </View>
        <View style={{width: '100%', padding: 10, flexDirection: 'row',marginVertical:10}}>
          <View
            style={{
              width: '35%',
              backgroundColor: '#815129',
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderBottomStartRadius: 20,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: 14,
                fontWeight: 600,
                color: '#fff',
                textAlign: 'center',
              }}>
              Save up to
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#fff',
                textAlign: 'center',
              }}>
              ₹125
            </Text>
          </View>
          <View
            style={{
              width: '65%',
              backgroundColor: '#633d1e',
              borderStartEndRadius: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}>
            <View>
              <Text style={{color: '#fff', fontSize: 15}}>
                On grocery orders
              </Text>
              <Text style={{color: '#fff', fontSize: 15}}>above ₹299</Text>
            </View>
            <Image
              style={{width: 70, height: 70, objectFit: 'contain'}}
              source={require('../assets/groceries.png')}
            />
          </View>
        </View>

        <ScrollView showsHorizontalScrollIndicator={false}
          style={{paddingHorizontal: 5}}
          horizontal={true}>
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

        <View style={styles.brownContainer}>
          <View style={styles.brownContainerHeader}>
            <Text style={{color: '#fff', fontSize: 17, fontWeight: 600}}>
              Stock up for the month
            </Text>
            <Text style={{color: 'yellow', fontSize: 29, fontWeight: 800}}>
              KilOS
            </Text>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data3.map((item, index) => (
               <View key={index} style={{width: 160, marginRight: 10}}>
               <View style={styles.yellowContainer}>
                 <Text style={styles.quantityLabel}>{item.quantity}</Text>
                 <Image
                   style={{width: 150, height: 150, objectFit: 'contain'}}
                   source={item.image}
                 />
                 <Text>Toothpaste</Text>
               </View>
               <View style={styles.priceLabel}>
                 <Text style={styles.priceText}>{item.price}</Text>
                 <Text
                   style={[
                     styles.priceText,
                     {
                       textDecorationLine: 'line-through',
                       color: '#fff',
                       fontSize: 15,
                     },
                   ]}>
                   {item.discountPrice}
                 </Text>
               </View>
             </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Flipkart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#1F74BA',
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
  },
  headerIcons: {
    width: 50,
    height: 50,
    objectFit: 'contain',
    paddingHorizontal: 15,
    tintColor: '#fff',
  },
  itemImage: {
    width: 70,
    height: 70,
    objectFit: 'contain',
    marginBottom: 5,
  },
  item: {
    backgroundColor: '#dadada',
    margin: 3,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brownContainer: {
    backgroundColor: '#815129',
    margin: 10,
    borderRadius: 15,
    padding: 10,
    marginTop:20,

  },
  brownContainerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yellowContainer: {
    backgroundColor: '#fae889',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStartEndRadius: 15,
    borderStartStartRadius: 15,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  quantityLabel: {
    backgroundColor: '#a17654',
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderEndStartRadius: 10,
    borderEndEndRadius: 10,
    color: '#fff',
  },
  priceLabel: {
    backgroundColor: '#000',
    borderEndEndRadius: 15,
    borderEndStartRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  priceText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 600,
    paddingVertical: 7,
    paddingRight: 10,
  },
});
