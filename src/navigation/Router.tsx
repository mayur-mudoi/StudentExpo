import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../contexts/AuthContext';
import AuthStack from './AuthStack';
import StudentStack from './StudentStack';

const Router = () => {
  const { user, authLoading } = useAuth();

  if (authLoading) {
    return null; // Or a splash/loading screen if you have one
  }

  return (
    <NavigationContainer>
      {!user ? <AuthStack /> : <StudentStack />}
    </NavigationContainer>
  );
};

export default Router; 