import { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigation } from '@react-navigation/native';

export function useLoginViewModel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const { login } = useAuth();
  const navigation = useNavigation();

  const onEmailChange = (value: string) => setEmail(value);
  const onPasswordChange = (value: string) => setPassword(value);

  const onSubmit = async () => {
    setLoading(true);
    setErrorMessage(undefined);
    const ok = await login(email, password);
    setLoading(false);
    if (!ok) setErrorMessage('E-mail ou senha inválidos');
  };

  return {
    email,
    password,
    loading,
    errorMessage,
    onEmailChange,
    onPasswordChange,
    onSubmit,
  };
}
