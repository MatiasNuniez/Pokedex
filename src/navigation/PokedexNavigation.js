import React from 'react'
import Pokedex from '../Screen/Pokedex'
import Pokemon from '../Screen/Pokemon';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Pokedex" component={ Pokedex } options = {{title:"",
      headerTransparent:true}}/>
      <Stack.Screen name = "Pokemon" component= { Pokemon } />
    </Stack.Navigator>
  )
}