import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import AppScreen from './screens/AppScreen';
import LoginStack from './routes/loginStack';

export default function App() {
  const loadData = () => {

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
  if (isLoginScreen){
    container = <LoginStack onClickRouteApp={()=>setIsLoginScreen(false)}></LoginStack>
  }
  else{
    container = <AppScreen onClickRouteLogin={()=>setIsLoginScreen(true)}></AppScreen>
  }
  return (
    <>
      {container}
    </>
  );
}