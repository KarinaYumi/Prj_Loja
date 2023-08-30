import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import Stack from './stack';
import About from '../Screens/About';
import style from "./styles";

export default function Routes(){

    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator>

            <Drawer.Screen name = 'Home' component = {Stack} />
            <Drawer.Screen name = 'Sobre' component = {About} />

        </Drawer.Navigator>
    )
}