import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import Main from './src/Main'

// Expo
// import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts({
    outfit_light: require('./assets/fonts/Outfit-Light.ttf'),
    outfit: require('./assets/fonts/Outfit-Regular.ttf'),
    outfit_medium: require('./assets/fonts/Outfit-Medium.ttf'),
    outfit_bold: require('./assets/fonts/Outfit-Bold.ttf')
  })
  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  )
}
