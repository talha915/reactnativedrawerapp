import React, { Component } from 'react';
import { Drawer, Container, Content, List, ListItem, Header, Right, Button, Icon } from 'native-base';
import {Text} from 'react-native';
import SideBar from './Sidebar';
export default class RouterDrawer extends Component {
    closeDrawer(){
        this.drawer._root.close()
    };
    openDrawer(){
        this.drawer._root.open()
    };
    render(){
        

        return(
            <Container>
                <Header>
                    <Right>
                        <Button transparent onPress={()=>this.drawer._root.open()}>
                            <Icon name="menu"/>
                        </Button>
                    </Right>
                </Header>
                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.navigator} />}
                    onClose={() => this.closeDrawer()} >     
                </Drawer>
            </Container>
        );
    }
}