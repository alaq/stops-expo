import React from 'react'
import { View, Image } from 'react-native'
import {
  Container,
  Header,
  Title,
  Subtitle,
  Icon,
  Body,
  Content,
  Text,
  StyleProvider,
  Item,
  Input,
  List,
  ListItem,
  Right,
  Left,
  Badge,
  H1
} from 'native-base'
import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'
// import commonColor from './native-base-theme/variables/commonColor'
// import material from './native-base-theme/variables/material'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
}
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      latitude: null,
      longitude: null,
      error: null
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        })
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        {/* <StyleProvider style={getTheme(commonColor)}> */}
        {/* <StyleProvider style={getTheme(material)}> */}
        <Container>
          <Header searchBar>
            <Item>
              <Icon name="md-map" />
              <Input placeholder="Enter a stop, or an address" />
              <Icon name="md-cog" />
            </Item>
          </Header>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <H1>Stops</H1>
            <Text>Don't worry, we'll wake you up</Text>
            <Text>
              {this.state.latitude} : {this.state.longitude}
            </Text>
            <GooglePlacesAutocomplete
              placeholder="Search"
              minLength={2} // minimum length of text to search
              autoFocus={true}
              returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
              listViewDisplayed="auto" // true/false/undefined
              fetchDetails={true}
              renderDescription={row => row.description} // custom description render
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details)
              }}
              getDefaultValue={() => ''}
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyBa2s7Y4_idfCl6UQOhAOJtasI01mQwv0g',
                language: 'en', // language of the results
                types: 'establishment' // default: 'geocode'
              }}
              styles={{
                textInputContainer: {
                  width: '100%'
                },
                description: {
                  fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                  color: '#1faadb'
                }
              }}
              currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
              currentLocationLabel="Current location"
              nearbyPlacesAPI="GoogleReverseGeocoding" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
              GoogleReverseGeocodingQuery={
                {
                  // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                }
              }
              GooglePlacesSearchQuery={{
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                rankby: 'distance',
                types: 'food'
              }}
              filterReverseGeocodingByTypes={[
                'locality',
                'administrative_area_level_3'
              ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
              predefinedPlaces={[homePlace, workPlace]}
              debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
              // renderLeftButton={() => <Image source={require('./i.png')} />}
              // renderRightButton={() => <Text>Custom text after the input</Text>}
            />
          </View>
        </Container>
      </StyleProvider>
    )
  }
}
