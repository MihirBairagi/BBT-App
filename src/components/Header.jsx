import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={[styles.flexBox, styles.headerBox, styles.alignCenter, styles.justifyBetween]} >
        <View style={[styles.flexBox, styles.alignCenter,  styles.infoBox ]} >
            <View style={styles.roundBorder} >
                <Image
                    source={require('../../assets/img/user-img.png')}
                    style={styles.userImage}
                  />
            </View>
            <View >
                <Text style={styles.smallPara} >
                 New Delhi
                </Text>
                <Text style={styles.heading4} >
                    Shubham Sharma 
                </Text>
            </View>
        </View>

        <View style={[styles.flexBox, styles.justifyBetween, styles.alignCenter, styles.menuBox]} >
                
             <Text style={styles.menuText} >
                Menu    
            </Text>  
            <Text style={[styles.menuImgBox]} >
                <Image
                    source={require('../../assets/img/menu-icon.png')}
                    style={styles.menuIcon}
                    />
            </Text> 

        </View>

    </View>
  ) 
}

export default Header

const styles = StyleSheet.create({

    flexBox:{
        display: "flex",
        flexDirection: "row",
    },
    justifyBetween:{
        justifyContent: "space-between",
    },  
    alignCenter:{
        alignItems: "center",
    },  
    headerBox:{
            paddingTop: 15,
            paddingBottom: 15,
            paddingHorizontal: 20,
            backgroundColor: "#fff",
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.13,
            shadowRadius: 4,
            elevation: 4,


    },
    infoBox:{
        width: "60%",
        height: 20,
    },
    menuBox:{
        width: 85,
        backgroundColor: "#F40B0B",
        alignSelf: "center",
        paddingHorizontal: 10,
        paddingVertical: 9,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    menuText:{
        flex: 2,
        color: "#fff",
        textTransform: "uppercase",
        fontSize: 13,
        letterSpacing: -0.5,
    },
    menuImgBox:{
        flex: 1,
        paddingLeft: 0,
    },
    menuIcon:{
        resizeMode: "contain",
        width: 17,
        height: 11,
        marginLeft: 5,

    },

    roundBorder:{
        borderColor: "#F40B0B",
        overflow: "hidden",
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 2,
        marginRight: 8,

    },
    userImage:{
        resizeMode: "contain",
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    smallPara:{
        color: '#959595',
        fontFamily: 'MyFontRegular',
        fontSize: 10,
    },
    heading4:{
        fontFamily: 'MyFontMedium',
        fontSize: 14,
        lineHeight: 18,
    },


})