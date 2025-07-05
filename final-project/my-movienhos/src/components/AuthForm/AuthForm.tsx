import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

export type BaseFormProps = {
  email: string;
  password: string;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmit: () => void;
  loading: boolean;
  errorMessage?: string;
  submitLabel: string;
};

export type LoginFormProps = {
  mode: 'login';
} & BaseFormProps;

export type RegisterFormProps = {
  mode: 'register';
  confirmPassword: string;
  name: string;
  onConfirmPasswordChange: (value: string) => void;
  onNameChange: (value: string) => void;
} & BaseFormProps;

export type AuthFormProps = {
  form: LoginFormProps | RegisterFormProps;
};

const AuthForm: React.FC<AuthFormProps> = ({ form }) => {
  const isRegister = form.mode === 'register';

  return (
    <View style={styles.container}>
      {isRegister && (
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={form.name}
          onChangeText={form.onNameChange}
          autoCapitalize="words"
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={form.email}
        onChangeText={form.onEmailChange}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={form.password}
        onChangeText={form.onPasswordChange}
        secureTextEntry
      />
      {isRegister && (
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          value={form.confirmPassword}
          onChangeText={form.onConfirmPasswordChange}
          secureTextEntry
        />
      )}
      {form.errorMessage ? (
        <Text style={styles.error}>{form.errorMessage}</Text>
      ) : null}
      <TouchableOpacity
        style={[styles.button, form.loading && styles.buttonDisabled]}
        onPress={form.onSubmit}
        disabled={form.loading}
        activeOpacity={0.8}
      >
        {form.loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>{form.submitLabel}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#23272f',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 12,
    color: '#23272f',
  },
  button: {
    backgroundColor: '#4da3ff',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: '#ff4d4f',
    marginBottom: 8,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default AuthForm;
