import { StyleSheet ,View ,Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import getColorByPokemonType from '../../utils/getColorByPokemonType'
import { capitalize } from "lodash"

export default function Header(props) {

  const { name, image, order, type } = props;

  const color = getColorByPokemonType(type);
  
  const bgStyle = [{backgroundColor : color, ...styles.bg}]

  return (
    <>
        <View style = {bgStyle}/>
        <SafeAreaView style = {styles.content}>
            <View style = {styles.header}>
                <Text style = {styles.name}>
                    {capitalize(name)}
                </Text>
                <Text style = {styles.order}>
                    #{`${order}`.padStart(3,0)}
                </Text>
            </View>
            <View style = {styles.contentImage}>
                <Image 
                source = {{uri:image}}
                style = {styles.image}
                />
            </View>
        </SafeAreaView>
    </>
  )
}


const styles = StyleSheet.create({
    bg : {
        width:"100%",
        height:400,
        position:'absolute',
        borderBottomEndRadius:300,
        borderBottomLeftRadius:300,
        transform:[{scaleX:2}]
    },
    content :{
        marginHorizontal:20,
        marginTop:30,
    },
    name : {
        color:'white',
        fontWeight:'bold',
        fontSize:27
    },
    order : {
        color:'white',
        fontWeight:'bold',
    },
    header :{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        paddingTop:40
    },
    contentImage: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width:250,
        height:300,
        resizeMode:"contain"
    }
})