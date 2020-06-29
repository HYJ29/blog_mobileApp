import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import PhotoListScreen from 'screens/Gallery/PhotoListScreen'
import CameraScreen from 'screens/CameraSetting/CameraScreen'
import MapScreen from 'screens/Location/MapScreen'

const defaultNavOptions = {

}

const GalleryStackNavigator = createStackNavigator()
export const GalleryNavigator = () => (
    <GalleryStackNavigator.Navigator screenOptions={defaultNavOptions}>
        <GalleryStackNavigator.Screen 
        name="PhotoList"
        component={PhotoListScreen}
        />
    </GalleryStackNavigator.Navigator>
)

const CameraStackNavigator = createStackNavigator()
export const CameraSettingNavigator = () => (
    <CameraStackNavigator.Navigator screenOptions={defaultNavOptions}>
        <CameraStackNavigator.Screen 
        name="Camera"
        component={CameraScreen}
        />
    </CameraStackNavigator.Navigator>
)

const LocationStackNavigatgor =createStackNavigator()
export const LocationNavigator =() => (
    <LocationStackNavigatgor.Navigator screenOptions={defaultNavOptions}>
        <LocationStackNavigatgor.Screen name="Map" component={MapScreen}/>
    </LocationStackNavigatgor.Navigator>
)

const GalleryBottomTabNavigator = createBottomTabNavigator()
export default function TabNavigator() {
    return (
       <GalleryBottomTabNavigator.Navigator>
           <GalleryBottomTabNavigator.Screen name="Gallery" component={GalleryNavigator} />
           <GalleryBottomTabNavigator.Screen name="CameraSetting" component={CameraSettingNavigator} />
           <GalleryBottomTabNavigator.Screen name="LocationList" component={LocationNavigator} />
       </GalleryBottomTabNavigator.Navigator>
    )
}
