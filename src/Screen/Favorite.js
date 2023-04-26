import { SafeAreaView, Text } from 'react-native'
import React , {useEffect} from 'react'
import { getPokemonApi } from '../api/pokemon'

export default function Favorite() {

  useEffect(() => {
    getPokemonApi();
  }, [])
  

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
    </SafeAreaView>
  )
}