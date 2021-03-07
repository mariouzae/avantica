import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import * as lib from '../../dependencies';
import * as actions from '../../store/actions';
import AvatarImg from '../../assets/images/avatar.png';
import {
  Container,
  Header,
  Row,
  Column,
  Avatar,
  Text,
  Separator,
} from './styles';

export default function DrawerContent(props) {
  const dispatch = useDispatch();

  function handleNavigation(route) {
    const { navigate } = props.navigation;
    navigate(route);
  }

  function handleSignOut() {
    dispatch(actions.authSignOut());
    handleNavigation('Auth');
  }

  return (
    <Container>
      <Header>
        <Row>
          <Avatar source={AvatarImg} />
          <Column>
            <Text bold size={16}>
              Milene Vargas
            </Text>
            <Text>milene.vargas@gmail.com</Text>
          </Column>
        </Row>
      </Header>
      <Separator />
      <lib.DrawerContentScrollView
        {...props}
        style={{ marginTop: -40, backgroundColor: 'white' }}
      >
        <lib.DrawerItem
          icon={({ color, size }) => (
            <Icon name="watch-later" color={color} size={size} />
          )}
          label="Meetings"
          onPress={() => handleNavigation('Meetings')}
        />
        <lib.DrawerItem
          icon={({ color, size }) => (
            <Icon name="notifications" color={color} size={size} />
          )}
          label="Notifications"
          onPress={() => handleNavigation('Notification')}
        />
        <lib.DrawerItem
          icon={({ color, size }) => (
            <Icon name="info" color={color} size={size} />
          )}
          label="About"
          onPress={() => handleNavigation('About')}
        />
      </lib.DrawerContentScrollView>
      <lib.DrawerItem
        icon={({ color, size }) => (
          <Icon name="exit-to-app" color={color} size={size} />
        )}
        label="Sign Out"
        onPress={() => handleSignOut()}
      />
    </Container>
  );
}
