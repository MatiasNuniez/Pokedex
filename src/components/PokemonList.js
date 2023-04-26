import { View, Text,FlatList, StyleSheet, ActivityIndicator, Platform} from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'


export default function PokemonList(props) {
    const  { pokemons, loadPokemons, next } = props


    console.log(Platform.OS);

    const loadMore = () => {
      loadPokemons();
      console.log("cargando mas ...");
    }

  return (

    <FlatList
        data = { pokemons }
        numColumns = { 2 }
        showsVerticalScrollIndicator = { false }
        keyExtractor = { (pokemon) => String (pokemon.id) }
        renderItem = { ({ item }) => <PokemonCard  pokemon = { item }/> }
        contentContainerStyle = { styles.flatListContainer }
        onEndReached = {next && loadMore }
        onEndReachedThreshold = { 0.1 }
        ListFooterComponent = { 
        next && (
        <ActivityIndicator
        size = "large"
        style = {styles.spinner}
        color = "#AEAEAE"
        />)}
        />

  )
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal:5,
        marginTop: Platform.OS === "android" ? 30 : 0,
    },
    spinner : {
      marginTop:20,
      marginBottom:Platform.OS === "android" ? 90 : 60
    }
})