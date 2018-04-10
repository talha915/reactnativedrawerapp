import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import { Content, Container, List, ListItem } from 'native-base';
export default class Sidebar extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>
                                HOME
                            </Text>
                        </ListItem>
                        <TouchableHighlight>
                        <ListItem>
                            
                            <Text>
                                Home
                            </Text>
                            
                        </ListItem>
                        </TouchableHighlight>
                        <ListItem itemDivider>
                            <Text>
                                Sports
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>
                                Football
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>
                                Hockey
                            </Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>
                                Technology
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>
                                Technology
                            </Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>
                                Contact Us
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text>
                                Contact Us
                            </Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}