import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { carData } from '../data/carData';


  const CarDetail = () => {
    return (
        <ImageBackground source={require('../../assets/img/bg.png')} // Replace with your background image path
        style={styles.backgroundImage} >
      <View style={styles.container}>
        <Text style={styles.batch}>Sedan</Text>
        <Text style={styles.carName}>{carData.carName}</Text>
        <Text style={styles.engineType}>{carData.engineType}</Text>
  
        <View style={[styles.carSpecs, styles.flexBox]}>
          <View style={styles.specs}>
            <View style={styles.specsCircle}>
              <Text style={styles.specsValue}>{carData.enginePower}</Text>
              <Text style={styles.fixText}>cc</Text>
            </View>
            <Text style={styles.specsName}>Engine Power</Text>
          </View>
          <View style={styles.specs}>
            <View style={styles.specsCircle}>
              <Text style={styles.specsValue}>{carData.peakTorque}</Text>
              <Text style={styles.fixText}>Nm</Text>
            </View>
            <Text style={styles.specsName}>Peak Torque</Text>
          </View>
          <View style={styles.specs}>
            <View style={styles.specsCircle}>
              <Text style={styles.specsValue}>{carData.peakPower}</Text>
              <Text style={styles.fixText}>RPM</Text>
            </View>
            <Text style={styles.specsName}>Peak Power</Text>
          </View>
        </View>
  
        <Text style={styles.carPrice}>{carData.carPrice}</Text>
  
        <View style={[styles.carInfoBox, styles.flexBox]}>
          <View style={[styles.carInfo, styles.flexBox]}>
            <Text style={styles.infoName}>Reg. State</Text>
            <Text style={styles.infoDetail}>{carData.regState}</Text>
          </View>
          <View style={[styles.carInfo, styles.flexBox]}>
            <Text style={styles.infoName}>Reg. Year</Text>
            <Text style={styles.infoDetail}>{carData.regYear}</Text>
          </View>
          <View style={[styles.carInfo, styles.flexBox]}>
            <Text style={styles.infoName}>Ownership</Text>
            <Text style={styles.infoDetail}>{carData.ownership}</Text>
          </View>
        </View>
  
        {/* Buy Now Button */}
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowButtonText}>Buy Now</Text>
        </TouchableOpacity>
  
        <View style={styles.imgBox}>
          <Image source={carData.carImage} style={styles.carImage} />
        </View>
        <View style={styles.tabBox}>
          <Image
            source={require('../../assets/img/tab.png')}
            style={styles.tabIcon}
          />
        </View>
      </View>
      </ImageBackground>
    );
  };

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 30,
        overflow: "hidden",
        paddingBottom: 40,
        marginTop: 30,
      },
      
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    // backgroundColor: '#F40B0B', 
    borderRadius: 30,
  },
  batch: {
    fontSize: 10,
    paddingVertical: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    color: "#F40B0B",
    marginBottom: 8,
    alignSelf: "flex-start",
    borderRadius: 30,
  },
  carName: {
    fontSize: 21,
    fontFamily: "MyFontBold",
    marginBottom: 2,
    color: '#fff',
  },
  engineType: {
    fontSize: 12,
    marginBottom: 30,
    textTransform: "uppercase",
    color: "#fff",
    fontFamily: 'MyFontRegular'
  },
  carSpecs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  specs: {
    alignItems: 'center',
  },
  specsCircle: {
    width: 75,
    height: 75,
    borderRadius: 40,
    borderColor: '#fff',
    borderWidth: 2, 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,

  },

  specsValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",

  },
  fixText: {
    fontSize: 14,
    color: "#fff",
    fontFamily: 'MyFontRegular',
  },
  specsName: {
    fontSize: 12,
    color: "#fff",
  },
  carPrice: {
    fontSize: 25,
    fontFamily: "MyFontBold",
    marginBottom: 15,
    color: "#fff",
  },
  carInfoBox: {
    flexDirection: 'row',
    justifyContent: "flex-start",

    marginBottom: 25,
  },
  carInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  infoName: {
    fontSize: 11,
    marginRight: 5,
    color: "#fff",
  },
  infoDetail: {
    fontSize: 11,
    fontWeight: 'bold',
    color: "#fff",
  },
  buyNowButton: {
    backgroundColor: '#000',
    paddingVertical: 6,
    alignItems: 'center',
    width: 120,
  },
  buyNowButtonText: {
    fontSize: 13,
    color: '#fff', 
    fontFamily: 'MyFontMedium',
  },
  imgBox:{
   flex: 1,
    overflow: "hidden",
    height: 300,
  },
  carImage:{
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",

  },
  tabBox: {
    flex: 1,
    alignItems: "center"
  },
  tabIcon:{
    width: 100,
    height: 100,
    marginTop: -90,
    resizeMode: "cover"
  }





});

export default CarDetail;
