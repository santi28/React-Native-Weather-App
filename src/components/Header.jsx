// NodeModules
import { Text, View, Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { string } from 'prop-types'

// Icons
import MapIcon from '../../assets/map'
import SearchIcon from '../../assets/search'

const vw = Dimensions.get('window').width

const styles = EStyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: vw
  },
  headerTitle: {
    fontFamily: 'outfit_medium',
    fontSize: '1.25rem'
  }
})

EStyleSheet.build()

const Header = ({ city }) => {
  return (
    <View style={styles.header}>
      <MapIcon style={{ width: 25, height: 25 }} fill="black" />
      <Text style={styles.headerTitle}>{city ?? 'ReWeather'}</Text>
      <SearchIcon style={{ width: 25, height: 25 }} fill="black" />
    </View>
  )
}

Header.propTypes = {
  city: string
}

export default Header
