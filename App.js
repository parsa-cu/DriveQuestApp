import * as React from 'react'

import { Provider as PaperProvider, Button, Appbar, BottomNavigation, DefaultTheme, Provider, Drawer, Text, Menu, Divider, IconButton } from "react-native-paper";

import LogIn from './navigation/screens/LogIn';
import MainHome from './AllScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PreDriveScreen from './navigation/screens/PreDriveScreen';
import Residential from './navigation/screens/Residential'
import FreewayDriving from './navigation/screens/FreewayDriving'
import TurnScreenLeft from './navigation/screens/TurnScreenLeft';
import TurnScreenRight from './navigation/screens/TurnScreenRight';
import FreewayLaneChangeScreen from './navigation/screens/FreewayLaneChange'
import ParkingLot from './navigation/screens/ParkingLot';
import TestResult from './navigation/screens/TestResult';
import AutoDQ from './navigation/screens/AutoDQ';
import LaneChangeScreen from './navigation/screens/LaneChangeScreen';
import LaneChangeScreenLeft from './navigation/screens/LaneChangeScreenLeft';
import LaneChangeScreenRight from './navigation/screens/LaneChangeScreen';
import { clearAllStoredData } from './StorageHandler';
import Settings from './navigation/screens/Settings';

import Traffic from './navigation/screens/Traffic';

import FreewayLaneChangeRightScreen from './navigation/screens/FreewayLaneChangeRight';

import IntersectionScreen from './navigation/screens/IntersectionScreen';
import HomeScreen from './navigation/screens/HomeScreen';

const Stack = createStackNavigator();

const _goBack = () => console.log('Went back');

let isLoggedIn = false;

let chosenScreen = <LogIn />

global.test = true;
function CustomNavigationBarFirst({ navigation, back }) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Action icon={'logout'} onPress={() => {clearAllStoredData(); alert("Cleared Saved Data");}}/>
      <Appbar.Content title="DriveQuest" />
      <Appbar.Action icon={'cog'} onPress={ ()=> navigation.navigate('settings')}/>
    </Appbar.Header>
  );
}
function CustomNavigationBarSecond({ navigation, back }) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="DriveQuest" />
    </Appbar.Header>
  );
}
function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LogIn">

          <Stack.Group screenOptions={{ header: CustomNavigationBarFirst, gestureEnabled: false}}>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="PreDrive" component={PreDriveScreen} />
            <Stack.Screen name="Home" component={MainHome} />
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          </Stack.Group>

          <Stack.Group screenOptions={{ header: CustomNavigationBarSecond}}>
            <Stack.Screen name="freelanechange" component={FreewayLaneChangeScreen} />
            <Stack.Screen name="freelanechangeRight" component={FreewayLaneChangeRightScreen} />
            <Stack.Screen name="testresult" component={TestResult} />
            <Stack.Screen name="parkinglot" component={ParkingLot} />
            <Stack.Screen name="Freeway" component={FreewayDriving} />
            <Stack.Screen name="Residential" component={Residential} />
            <Stack.Screen name="autodq" component={AutoDQ} />
            <Stack.Screen name="turnscreenleft" component={TurnScreenLeft} />
            <Stack.Screen name="turnscreenright" component={TurnScreenRight} />
            <Stack.Screen name='lanechangeleft' component={LaneChangeScreenLeft}/>
            <Stack.Screen name='lanechangeright' component={LaneChangeScreenRight}/>
            <Stack.Screen name='intersection' component={IntersectionScreen}/>
            <Stack.Screen name='traffic' component={Traffic}/>
            <Stack.Screen name='settings' component={Settings}/>
          </Stack.Group>


        </Stack.Navigator>
      </NavigationContainer>

    </PaperProvider>


  );

}


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#12414F',
    accent: '#90C96A',
     
  },
};

export default App;