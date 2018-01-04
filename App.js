import React from 'react'
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  StyleProvider
} from 'native-base'
import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'
// import commonColor from './native-base-theme/variables/commonColor'
// import material from './native-base-theme/variables/material'

export default class App extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        {/* <StyleProvider style={getTheme(commonColor)}> */}
        {/* <StyleProvider style={getTheme(material)}> */}
        <Container>
          <Header>
            <Left>
              <Button
                transparent
                // onPress={() => this.props.navigation.navigate('DrawerOpen')}
              >
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Stops</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <Card>
              <CardItem>
                <Body>
                  <Text>Where are you going?</Text>
                </Body>
              </CardItem>
            </Card>
            <Button
              full
              rounded
              dark
              style={{ marginTop: 10 }}
              // onPress={() => this.props.navigation.navigate('Chat')}
            >
              <Text>Navigate to your destination</Text>
            </Button>
            <Button
              full
              rounded
              primary
              style={{ marginTop: 10 }}
              // onPress={() => this.props.navigation.navigate('Profile')}
            >
              <Text>Pre-download a city</Text>
            </Button>
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}
