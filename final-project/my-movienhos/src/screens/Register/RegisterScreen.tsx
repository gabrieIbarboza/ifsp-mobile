import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useRegisterViewModel } from '../../viewmodels/RegisterViewModel';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/Navigation';

const RegisterScreen: React.FC = () => {
  const vm = useRegisterViewModel();
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
        <Text style={styles.title}>Registre-se para salvar todas suas experiências!</Text>
      </View>
      <AuthForm
        form={{
          mode: 'register',
          name: vm.name,
          email: vm.email,
          password: vm.password,
          confirmPassword: vm.confirmPassword,
          onNameChange: vm.onNameChange,
          onEmailChange: vm.onEmailChange,
          onPasswordChange: vm.onPasswordChange,
          onConfirmPasswordChange: vm.onConfirmPasswordChange,
          onSubmit: vm.onSubmit,
          loading: vm.loading,
          errorMessage: vm.errorMessage,
          submitLabel: 'Registrar',
        }}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tem uma conta? Clique aqui para </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.footerLink}>Entrar</Text>
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

export default RegisterScreen;
