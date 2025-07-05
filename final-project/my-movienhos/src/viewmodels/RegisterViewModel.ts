import { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigation } from '@react-navigation/native';

export function useRegisterViewModel() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const { register } = useAuth();
  const navigation = useNavigation();

  const onNameChange = (value: string) => setName(value);
  const onEmailChange = (value: string) => setEmail(value);
  const onPasswordChange = (value: string) => setPassword(value);
  const onConfirmPasswordChange = (value: string) => setConfirmPassword(value);

  const onSubmit = async () => {
    setLoading(true);
    setErrorMessage(undefined);
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('Preencha todos os campos');
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem');
      setLoading(false);
      return;
    }
    await register(name, email, password);
    setLoading(false);
  };

  return {
    name,
    email,
    password,
    confirmPassword,
    loading,
    errorMessage,
    onNameChange,
    onEmailChange,
    onPasswordChange,
    onConfirmPasswordChange,
    onSubmit,
  };
}
