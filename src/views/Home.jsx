import Constants from 'expo-constants'
import { View, Dimensions, Text } from 'react-native'
import { Shadow } from 'react-native-shadow-2'

import Header from '../components/Header'

import Wind from '../../assets/icons/wind'
import Humidity from '../../assets/icons/rain_drops'
import Umbrella from '../../assets/icons/umbrella'

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
        <View
          style={{ alignSelf: 'center', alignItems: 'center', marginTop: 10 }}>
          <Text style={{ fontFamily: 'outfit', fontSize: 18 }}>
            Parcialmente Nublado
          </Text>
          <Text
            style={{
              fontFamily: 'outfit_light',
              fontSize: 14,
              opacity: 0.3,
              marginTop: 5
            }}>
            Última Actualización 10:30
          </Text>
          <PartlyCloudy style={{ marginTop: 15 }} width={125} height={125} />
        </View>
        <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              justifyContent: 'space-between'
            }}>
            <Text style={{ fontFamily: 'outfit_bold', fontSize: 55 }}>10°</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start'
              }}>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Wind width={28} height={28} />
                  <Text
                    style={{
                      fontFamily: 'outfit_medium',
                      marginLeft: 10,
                      fontSize: 18
                    }}>
                    9 km/h
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5
                  }}>
                  <Humidity width={28} height={28} />
                  <Text
                    style={{
                      fontFamily: 'outfit_medium',
                      marginLeft: 10,
                      fontSize: 18
                    }}>
                    43%
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 10
                }}>
                <Umbrella width={28} height={28} />
                <Text
                  style={{
                    fontFamily: 'outfit_medium',
                    marginLeft: 10,
                    fontSize: 18
                  }}>
                  100
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Home
