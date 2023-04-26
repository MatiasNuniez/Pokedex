import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import getColorByPokemonType from '../utils/getColorByPokemonType'
import { capitalize } from 'lodash'
import { useNavigation } from '@react-navigation/native'


export default function PokemonCard(props) {

    const { pokemon } = props;

    const colorPokemonType = getColorByPokemonType(pokemon.type)

    const bgStyles = { backgroundColor: colorPokemonType, ...styles.bgStyles }


    const navigation = useNavigation();

    const goToPokemon = () => {

        navigation.navigate("Pokemon", { id: pokemon.id})
        
    }

    return (

        <TouchableNativeFeedback onPress={goToPokemon} >

            <View style={styles.card}>

                <View style={styles.spacing}>

                    <View style={bgStyles}>
                        
                        <Text style = { styles.order }>#{`${pokemon.order}`.padStart(3,0 )}</Text>
                        <Text style = { styles.name }>{capitalize(pokemon.name)}</Text>
                        <Image source = {{uri: pokemon.imagen}} style = {styles.image} />

                    </View>

                </View>

            </View>

        </TouchableNativeFeedback>

    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        flex:1,
        borderRadius:15,
        padding:10,
    },
    image:{
        position:"absolute",
        bottom:2,
        right:2,
        height:90,
        width:90
    },
    name:{
        color:"white",
        fontWeight:'bold',
        fontSize:15,
        paddingTop:10
    },
    order: {
        position:'absolute',
        right:10,
        top:10,
        fontSize:11,
        color:"white"
    }

})