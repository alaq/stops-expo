import React from 'react'
import { View, Image, ImageBackground } from 'react-native'
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
  H1,
  Button
} from 'native-base'
import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'
// import commonColor from './native-base-theme/variables/commonColor'
// import material from './native-base-theme/variables/material'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      searchInput: '',
      searchResult: [],
      isLoading: false
    }
    this.handleSearch = this.handleSearch.bind(this)
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

  handleSearch(text) {
    function placesAutocomplete(text) {
      fetch(
        'https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyBa2s7Y4_idfCl6UQOhAOJtasI01mQwv0g&input=' +
          text
      ).then(console.log)
    }

    if (text.length > 2 && !this.state.isLoading) {
      this.setState({ searchInput: text, isLoading: true })
      placesAutocomplete(text)
      setTimeout(() => {
        this.setState({ isLoading: false })
        placesAutocomplete(this.state.searchInput)
      }, 2000)
    } else {
      this.setState({ searchInput: text })
    }
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        {/* <StyleProvider style={getTheme(commonColor)}> */}
        {/* <StyleProvider style={getTheme(material)}> */}
        <Container>
          <Header searchBar rounded>
            <Item>
              <Icon name="md-map" />
              <Input
                placeholder="Enter a stop, or an address"
                onChangeText={text => this.handleSearch(text)}
                value={this.state.searchInput}
              />
              {this.state.searchInput ? (
                <Icon
                  name="ios-close-circle"
                  onPress={() => this.setState({ searchInput: '' })}
                />
              ) : (
                <Text />
              )}
            </Item>
          </Header>
          <Content>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                height: 680,
                backgroundColor: 'white'
              }}
            >
              {this.state.searchInput ? (
                <List
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    zIndex: 2
                  }}
                >
                  <ListItem
                    icon
                    onPress={() =>
                      this.props.navigation.navigate('Details', {
                        place: this.state.searchInput
                      })
                    }
                  >
                    <Left>
                      <Icon
                        name="plane"
                        style={{
                          backgroundColor: 'red',
                          borderRadius: 4,
                          borderWidth: 1,
                          overflow: 'hidden',
                          paddingLeft: 2,
                          paddingRight: 2,
                          borderColor: 'red'
                        }}
                      />
                    </Left>
                    <Body>
                      <Text>{this.state.searchInput}</Text>
                    </Body>
                  </ListItem>
                  <ListItem icon>
                    <Left>
                      <Icon name="md-map" />
                    </Left>
                    <Body>
                      <Text>{this.state.searchInput}</Text>
                    </Body>
                  </ListItem>
                  <ListItem icon>
                    <Left>
                      <Icon name="bus" />
                    </Left>
                    <Body>
                      <Text>{this.state.searchInput}</Text>
                    </Body>
                  </ListItem>
                </List>
              ) : (
                <Text style={{ height: 0 }} />
              )}
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1
                }}
              >
                <H1>Stops</H1>
                <Text>Don't worry, we'll wake you up</Text>
                <Text>
                  {this.state.latitude} : {this.state.longitude}
                </Text>
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
                <Text />
              </View>
            </View>
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}

const DetailsScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{navigation.state.params.place}</Text>
    <Button onPress={() => navigation.goBack(null)}>
      <Text>Go back</Text>
    </Button>
  </View>
)

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      path: 'stop/:place',
      screen: DetailsScreen
    }
  },
  {
    headerMode: 'none'
  }
)

export default RootNavigator
