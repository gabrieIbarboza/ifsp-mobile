import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PokedexScreen } from './screens/PokedexScreen';
import { PokemonDetailsScreen } from './screens/PokemonDetailsScreen'; // Nova tela
import { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Pokedex">
                    <Stack.Screen 
                        name="Pokedex" 
                        component={PokedexScreen} 
                        options={{ title: 'Pokédex' }}
                    />
                    <Stack.Screen 
                        name="PokemonDetails" 
                        component={PokemonDetailsScreen} 
                        options={{ title: 'Detalhes do Pokémon' }} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
