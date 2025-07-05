
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import MovieDetailsScreen from '../screens/MovieDetails/MovieDetailsScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import { Home, Search } from 'lucide-react-native';
import { useAuth, AuthProvider } from '../viewmodels/AuthContext';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Main" component={HomeScreen} />
            <HomeStack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        </HomeStack.Navigator>
    );
}

function SearchStackNavigator() {
    return (
        <SearchStack.Navigator screenOptions={{ headerShown: false }}>
            <SearchStack.Screen name="Main" component={SearchScreen} />
            <SearchStack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        </SearchStack.Navigator>
    );
}


function MainTabs() {
  return (
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
      <Tab.Screen name="Search" component={SearchStackNavigator} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const { user } = useAuth();
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="MainTabs" component={MainTabs} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}