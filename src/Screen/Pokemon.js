import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getPokemonDetailByIdApi } from '../api/pokemon';

export default function Pokemon(props) {

  const { navigation, route:{params} } = props;

  console.log(params);

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {

    ( async () => {

      try {

        const response = await getPokemonDetailByIdApi(params.id);
        setPokemon(response)

      } catch (error) {

        navigation.goBack();
      }

    })();
  }, [params])
  

  if (!pokemon) return null;

  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  )
}