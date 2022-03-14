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
import CommentsScreen from './navigation/screens/CommentsScreen';



const Stack = createStackNavigator();

const _goBack = () => console.log('Went back');

let isLoggedIn = false;

let chosenScreen = <LogIn />

global.test = true;
function CustomNavigationBar({ navigation, back }) {
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
        <Stack.Navigator initialRouteName="LogIn" screenOptions={{ header: CustomNavigationBar }}>

          <Stack.Group>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="PreDrive" component={PreDriveScreen} />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen name="freelanechange" component={FreewayLaneChangeScreen} />
            <Stack.Screen name="testresult" component={TestResult} />
            <Stack.Screen name="parkinglot" component={ParkingLot} />
            <Stack.Screen name="Freeway" component={FreewayDriving} />
            <Stack.Screen name="Home" component={MainHome} />
            <Stack.Screen name="Residential" component={Residential} />
            <Stack.Screen name="commentscreen" component={CommentsScreen} options={{ presentation: 'transparentModal', cardOverlayEnabled: true }} />
            <Stack.Screen name="autodq" component={AutoDQ} options={{ presentation: 'transparentModal', cardOverlayEnabled: true }} />
            <Stack.Screen name="turnscreenleft" component={TurnScreenLeft} />
            <Stack.Screen name="turnscreenright" component={TurnScreenRight} />
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