import Constants from 'expo-constants'
import { View, Dimensions, Text } from 'react-native'
import { Shadow } from 'react-native-shadow-2'

import Header from '../components/Header'
import PartlyCloudy from '../../assets/weather/partly_cloudy'

const Home = () => {
  const windowWidth = Dimensions.get('window').width

  return (
    <View>
      <View
        style={{
          position: 'absolute',
          bottom: -windowWidth / 2 - 24,
          right: -24
        }}>
        <Shadow startColor="#00000003" finalColor="#00000000" distance={44}>
          <View
            style={{
              width: windowWidth + 48,
              height: windowWidth + 48,
              borderRadius: windowWidth / 2 + 48,
              backgroundColor: 'white'
            }}></View>
        </Shadow>
      </View>
      <View
        style={{
          position: 'absolute',
          marginTop: Constants.statusBarHeight
        }}>
        <Header city="Buenos Aires" />
        <View style={{ alignSelf: 'center' }}>
          <Text style={{ textAlign: 'center' }}>Parcialmente Nublado</Text>
          <Text style={{ textAlign: 'center' }}>
            Última Actualización 10:30
          </Text>
          <PartlyCloudy />
        </View>
      </View>
    </View>
  )
}

export default Home