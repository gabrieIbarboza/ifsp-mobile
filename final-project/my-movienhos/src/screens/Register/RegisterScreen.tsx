import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './RegisterScreen.styles';
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


export default RegisterScreen;
