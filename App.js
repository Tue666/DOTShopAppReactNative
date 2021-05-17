import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import AppScreen from './screens/AppScreen';
import LoginStack from './routes/loginStack';

export default function App() {
  const loadData = () => {
    return Font.loadAsync({
      'poppins-extralight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
      'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf')
    });
  }
  const [isReady, setIsReady] = useState(false);
  const [isLoginScreen, setIsLoginScreen] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadData}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.warn(error)}
      >
      </AppLoading>
    )
  }
  let container;
  if (isLoginScreen) {
    container = <LoginStack onClickRouteApp={() => setIsLoginScreen(false)}></LoginStack>
  }
  else {
    container = <AppScreen onClickRouteLogin={() => setIsLoginScreen(true)}></AppScreen>
  }
  return (
    <>
      {container}
    </>

  );
}