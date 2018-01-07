import React from 'react'
import { View } from 'react-native'
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

export default class App extends React.Component {
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
              // backgroundColor: 'grey'
            }}
          >
            <H1>Stops</H1>
            <Text>Don't worry, we'll wake you up</Text>
          </View>
          {/* <Content padder>
              <List>
                <ListItem>
                  <Badge>
                    <Text success>L</Text>
                  </Badge>
                  <Text>Bedford Ave</Text>
                </ListItem>
                <ListItem>
                  <Badge>
                    <Text success>L</Text>
                  </Badge>
                  <Text>Brooklyn College</Text>
                </ListItem>
                <ListItem>
                  <Text>Central Park</Text>
                </ListItem>
              </List>
          </Content> */}
        </Container>
      </StyleProvider>
    )
  }
}
