import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PokedexScreen } from './screens/PokedexScreen';
import { PokemonDetailsScreen } from './screens/PokemonDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="PokedexScreen">
                <Stack.Screen name="PokedexScreen" component={PokedexScreen} options={{ title: 'Pokédex' }} />
                <Stack.Screen name="PokemonDetailScreen" component={PokemonDetailsScreen} options={{ title: 'Detalhes do Pokémon' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
