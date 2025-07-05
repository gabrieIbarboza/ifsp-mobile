import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23272f',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoBox: {
    width: 74,
    height: 74,
    borderRadius: 16,
    backgroundColor: '#1f2935',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    color: '#bdbdbd',
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
  footerLink: {
    color: '#4da3ff',
    fontWeight: 'bold',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
