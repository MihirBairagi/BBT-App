import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    type: 'Diesel',
    name: 'Land Cruiser 200 VX',
    price: '₹ 1,79,00,000',
    engine: '3993cc Engine',
    kmDriven: '4500 Km Driven',
    image: require('../../assets/img/carA.png'),
    batchText: 'Sedan',
  },
  {
    id: '2',
    type: 'Petrol',
    name: 'Audi R8 V10 Plus',
    price: '₹ 2,79,00,000',
    engine: '3993cc Engine',
    kmDriven: '4500 Km Driven',
    image: require('../../assets/img/carB.png'),
    batchText: 'SUV',
  },
  {
    id: '3',
    type: 'Diesel',
    name: 'Land Cruiser 200 VX',
    price: '₹ 1,79,00,000',
    engine: '3993cc Engine',
    kmDriven: '4500 Km Driven',
    image: require('../../assets/img/carA.png'),
    batchText: 'Convertible',
  },
  {
    id: '4',
    type: 'Petrol',
    name: 'Audi R8 V10 Plus',
    price: '₹ 2,79,00,000',
    engine: '3993cc Engine',
    kmDriven: '4500 Km Driven',
    image: require('../../assets/img/carB.png'),
    batchText: 'Performance',
  },
];

const RecentLaunch = () => {
    const renderItem = ({ item }) => {
        return (
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.batch}>
                <Text style={styles.batchText}>{item.batchText}</Text>
              </View>
            </View>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <View style={styles.flexBox}>
              <Text style={styles.engine}>{item.engine}</Text>
              <Text style={styles.kmDriven}>{item.kmDriven}</Text>
            </View>
          </View>
        );
      };
      

  return (
    <View>
      <View style={[styles.flexBox, styles.cardBox]}>
        <Text style={styles.heading} > Recent Launch</Text>
        <TouchableOpacity >
          <Text style={styles.seeAll} >See All</Text>

        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({

    heading:{
        
        fontSize: 20,
        fontWeight: "500",
    },

    seeAll:{
        color: '#F40B0B',   
        fontFamily: "MyFontBold",
        fontSize: 14,
    },

  cardBox: {
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  container: {
    padding: 20,
    paddingBottom: 25,
  },
  card: {
    width: 155,
    borderRadius: 8,
    padding: 6,
    marginRight: 14,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: 6,
  },
  batch: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'red',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  batchText: {
    color: 'white',
    fontSize: 8,
  },
  type: {
    fontSize: 10,
    fontFamily: 'MyFontRegular',
    textTransform: "uppercase",
    marginBottom: 2,
  },
  name: {
    fontSize: 12,
    fontFamily: 'MyFontMedium',
    marginBottom: 2,
  },
  price: {
    fontSize: 12,
    marginBottom: 3,
    color: "#F40B0B",
    fontFamily: 'MyFontBold',
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  engine: {
    fontSize: 8.5,
    borderRightWidth: 0.5,
    borderColor: "#9A9A9A",
    paddingRight: 11,
  },
  kmDriven: {
    fontSize: 8.5,
  },
});

export default RecentLaunch;
