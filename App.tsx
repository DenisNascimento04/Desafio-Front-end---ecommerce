import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { KumbhSans_400Regular, KumbhSans_700Bold } from '@expo-google-fonts/kumbh-sans';
import { Larning } from './src/Larning';

export default function App() {

  let [fontsLoaded] = useFonts({
    KumbhSans_400Regular,
    KumbhSans_700Bold
  });

  if (!fontsLoaded) {
    return <View />
  }else{
    return (
      <Larning />
    );
  }

}
