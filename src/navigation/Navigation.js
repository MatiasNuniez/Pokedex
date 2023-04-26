import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation';
import FavoriteNavigation from './FavoriteNavigation';



export default function Navigation() {
    
    const Tab = createBottomTabNavigator();

    return (

    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name = "Account" component={ AccountNavigation } options={{
            tabBarLabel : 'Mi cuenta',
            tabBarIcon : ({color, size}) => (
                <Icon name = "user"
                color= {color}
                size={size} />
            )
        }}/>
        <Tab.Screen name = "Pokedexx" component={ PokedexNavigation } options={{
            tabBarLabel : '',
            tabBarIcon : () => renderPokeball(),
        }} />
        <Tab.Screen name = "Favorites" component={ FavoriteNavigation } options={{
            tabBarLabel : 'Favoritos',
            tabBarIcon : ({color, size}) => (
                <Icon name = "heart"
                color= {color}
                size={size} />
            )
        }} />
    </Tab.Navigator>

  )
}

const renderPokeball = () => {
    return(
        <Image
            source={require('../assets/pokeball.webp')}
            style={{width:75, height:75, top: -15}}
        />
    )
}