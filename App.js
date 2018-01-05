import React from 'react'
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
  ListItem
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
            <Body>
              <Title>Stops</Title>
              <Subtitle>We'll wake you up at your destination</Subtitle>
            </Body>
          </Header>
          <Header searchBar rounded style={{ paddingTop: 0 }}>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Enter a stop, or an address" />
              <Icon name="ios-bus" />
            </Item>
          </Header>
          <Content padder>
            <Content>
              <List>
                <ListItem>
                  <Text>Bedford Ave</Text>
                </ListItem>
                <ListItem>
                  <Text>Brooklyn College</Text>
                </ListItem>
                <ListItem>
                  <Text>Central Park</Text>
                </ListItem>
              </List>
            </Content>
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}
