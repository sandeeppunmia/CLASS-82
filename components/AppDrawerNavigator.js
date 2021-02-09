import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MyDonationScreen from '../screens/MyDonationScreen';
import SettingScreen from '../screens/SettingScreen';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    MyDonations:{
        screen:MyDonationScreen 
    },
    Setting:{
        screen:SettingScreen
    }
   },
   {
       contentComponent:CustomSideBarMenu 
   },
   {
       initialRouteName:'Home'
   }
)