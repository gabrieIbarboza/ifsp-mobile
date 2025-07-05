import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './LoginScreen.styles';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useLoginViewModel } from '../../viewmodels/LoginViewModel';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/Navigation';

const LoginScreen: React.FC = () => {
  const vm = useLoginViewModel();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoBox}>
          <Image
            source={require('../../../assets/mymovienhos-square-logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>Boas-vindas ao My Movienhos!!</Text>
        <Text style={styles.subtitle}>Entre para iniciar as maratonas no sofá</Text>
      </View>
      <AuthForm
        form={{
          mode: 'login',
          email: vm.email,
          password: vm.password,
          onEmailChange: vm.onEmailChange,
          onPasswordChange: vm.onPasswordChange,
          onSubmit: vm.onSubmit,
          loading: vm.loading,
          errorMessage: vm.errorMessage,
          submitLabel: 'Entre',
        }}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Ainda possui acesso? Clique aqui e </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.footerLink}>Registre-se agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default LoginScreen;
