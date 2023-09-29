import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { carTypeData } from '../data/carTypeData';


const CarTypes = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={[styles.card, { backgroundColor: item.bgColor }]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text} >{item.name} </Text>
      </View>
    );
  };

  return (
    <View style={styles.container} >
        <FlatList
        data={carTypeData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.container}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 35,
    backgroundColor: "#f4f4f4",
  },
  card: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "100%", 
    height: undefined,
    aspectRatio: 1.5,
    resizeMode: "contain",
    marginBottom: 4,
  },
  text: {
    color : "#fff",
    fontFamily: "MyFontMedium",

  }
});

export default CarTypes;
