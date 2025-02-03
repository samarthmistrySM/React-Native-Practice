import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
const minusIcon = require("../assets/minus.png")
const plusIcon = require("../assets/plus.png")

const Item = ({ product, setProducts }) => {

  const increase = (id, quantity) => {
    setProducts(products =>
      products.map(product => 
        product.id === id 
          ? { ...product, quantity: quantity + 1 } 
          : product
      )
    );
  };

  const decrease = (id, quantity) => {
    setProducts(products =>
      products.map(product => 
        product.id === id 
          ? { ...product, quantity: quantity > 1 ? quantity - 1 : 1 } 
          : product
      )
    );
  };
  


  return (
    <View style={styles.item}>
      <Image style={styles.img} source={{ uri: product.imgUri }} />
      <View style={styles.details}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.quantity}>Quantity: {product.quantity}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹ {product.quantity*product.price}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={()=>decrease(product.id, product.quantity)}>
              <Image style={styles.icons} source={minusIcon} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{product.quantity}</Text>
            <TouchableOpacity onPress={()=>increase(product.id, product.quantity)}>
              <Image style={styles.icons} source={plusIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  img: {
    width: 100,
    height: 100,
  },
  details: {
    flexDirection: 'column',
    width: '70%',
    marginLeft: 20,
  },
  title: {
    fontWeight: 600,
    fontSize: 18,
    marginBottom: 10,
    color: '#5d0096'
  },
  quantity: {
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 22,
    fontWeight: 600,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    width: 18,
    height: 18,
    marginHorizontal: 15,
  },
  quantityText: {
    fontSize: 20,
  },
});
