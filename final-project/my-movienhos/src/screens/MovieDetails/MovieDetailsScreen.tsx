
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './MovieDetailsScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header/Header';
import ActionButton from '../../components/ActionButton/ActionButton';
import { Star, ChevronLeft } from 'lucide-react-native';


const MovieDetailsScreen = () => {
  const navigation = useNavigation();
  const [watched, setWatched] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header
        title="Detalhes"
        leftButton={
          <ActionButton
            active={false}
            onActivate={() => navigation.goBack()}
            onDeactivate={() => {}}
            iconOn={<ChevronLeft color="#fff" size={24} />}
            iconOff={<ChevronLeft color="#fff" size={24} />}
            style={{ backgroundColor: 'transparent', padding: 0 }}
          />
        }
        rightButton={
          <ActionButton
            active={watched}
            onActivate={() => setWatched(true)}
            onDeactivate={() => setWatched(false)}
            iconOn={<Star color="#e3b341" size={22} />}
            iconOff={<Star color="#888" size={22} />}
            style={{ backgroundColor: 'transparent', padding: 0 }}
          />
        }
        style={{ backgroundColor: '#23272f' }}
      />
      <View style={styles.container}>
        <Text>Movie Details Screen</Text>
      </View>
    </View>
  );
};

export default MovieDetailsScreen;
