import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import MovieDetailsScreen from '../screens/MovieDetails/MovieDetailsScreen';
import { Home, Search } from 'lucide-react-native';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeMain" component={HomeScreen} />
            <HomeStack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        </HomeStack.Navigator>
    );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                if (route.name === 'Home') return <Home color={color} size={size} />;
                if (route.name === 'Search') return <Search color={color} size={size} />;
            },
            tabBarLabelStyle: { fontSize: 12 },
            tabBarActiveTintColor: '#007aff',
            tabBarInactiveTintColor: '#888',
            })}
        >
            <Tab.Screen name="Home" component={HomeStackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}