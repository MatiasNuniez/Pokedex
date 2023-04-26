import React from 'react'
import Favorite from '../Screen/Favorite'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Favorite" component={ Favorite } />
    </Stack.Navigator>
  )
}