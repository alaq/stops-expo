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
  ListItem,
  Right,
  Badge
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
          <Content padder>
            <Content>
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
                  <Badge>
                    <Text success>1</Text>
                  </Badge>
              <Text>Stops</Text>
              <Text>Don't worry, we'll wake you up</Text>
            </Content>
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}
