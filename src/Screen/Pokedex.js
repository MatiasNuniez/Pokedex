import { SafeAreaView } from 'react-native'
import React , { useEffect, useState } from 'react'
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList'


export default function Pokedex() {
  
  const [pokemons, setPokemons] = useState([])
  const [next, setNextUrl] = useState(null)

  useEffect(() => {
    (async () => {
      await loadPokemon();
    })()
  }, [])
  

  const loadPokemon = async () =>{
    try {
      const pokemonsArray = [];

      const response = await getPokemonApi(next);
      setNextUrl (response.next)
      
      for await (const pokemon of response.results){

        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id : pokemonDetails.id,
          name : pokemonDetails.name,
          type : pokemonDetails.types[0].type.name,
          order : pokemonDetails.order,
          imagen : pokemonDetails.sprites.other['official-artwork'].front_default
      })

      }
      setPokemons([...pokemons, ...pokemonsArray])
      console.log(pokemons);
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    
    <SafeAreaView>

      <PokemonList pokemons = { pokemons } loadPokemons = {loadPokemon} next = { next } />

    </SafeAreaView>

  )
}