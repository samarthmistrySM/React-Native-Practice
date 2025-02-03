import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Item from '../components/Item';


const CartList = () => {

  const handlePress = () => {
    Alert.alert('Are you sure?',`Total amount: ₹${calculateSubTotal()}`,[
      {
        text: 'Yes',
        onPress: ()=>console.log('nice')
      },
      {
        text: 'No',
        onPress: ()=>console.log('not nice')
      }
    ]);
  }

  const productsList = [
    {
      id:1,
      title: 'Fastrack Quartz Analog Black',
      imgUri: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5ddc0e28/images/Fastrack/Catalog/3273NM01_1.jpg?sw=600&sh=600',
      quantity: 1,
      price: 999,
    },
    {
      id:2,
      title: 'Fastrack Stunners Blue Dial',
      imgUri: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw155168d9/images/Fastrack/Catalog/3278SM03_1.jpg?sw=600&sh=600',
      quantity: 1,
      price: 1899,
    },
    {
      id:3,
      title: 'Fastrack Kronos Chronograph Black',
      imgUri: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwdbc63551/images/Fastrack/Catalog/3319QM01_1.jpg?sw=360&sh=360',
      quantity: 1,
      price: 1299,
    }
  ]

  const [products, setProducts] = useState(productsList)


  const calculateSubTotal = () =>{
    let total = 0;
    products.forEach(product=>{
      total += (product.price * product.quantity);
    }) 

    return total;
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', justifyContent:'space-between', height:'100%' }}>
      <ScrollView style={styles.upperContainer}>
        {products.map((product)=> (
          <Item key={product.id} product={product} setProducts={setProducts}/>
        ))}
      </ScrollView>
      <View style={styles.lowerContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Sub Total  ...</Text>
          <Text style={styles.totalPrice}>{calculateSubTotal()}</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Shipping  ...</Text>
          <Text style={styles.totalPrice}>200</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Platform Tax  ...</Text>
          <Text style={styles.totalPrice}>100</Text>
        </View>
        <View style={[styles.totalContainer, {marginTop:20}]}>
          <Text style={{fontSize:22,fontWeight:600,color:'#5d0096'}}>Total  ...</Text>
          <Text style={[styles.totalPrice,{color:'#5d0096'}]}>{calculateSubTotal() + 200 + 100}</Text>
        </View>

        <TouchableOpacity onPress={handlePress}
        style={{marginTop: 20, width:'100%',backgroundColor:'#5d0096', paddingVertical: 15, borderRadius:20}}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 600, textAlign: 'center'}}>Place order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartList;

const styles = StyleSheet.create({
  upperContainer: {
    padding: 10,
    minHeight: '55%',
    borderBottomWidth: 1,
    borderColor: '#dadada'
  },
  lowerContainer: {
    padding: 10,
    paddingTop: 20,
    paddingHorizontal:20,
  },
  totalContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems:'center',
    marginBottom:10,
  },
  totalText:{
    fontWeight:600,
    fontSize:17,
    color: '#969696'
  },
  totalPrice:{
    fontWeight:700,
    fontSize:22,
    
  }
});
