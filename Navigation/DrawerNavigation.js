import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TractorP from '../components/TractorPurchase';
import TractorS from '../components/TractorSale';
import CustomSidebarMenu from '../components/customesidebarmenu'
import ITL from '../components/ITL'
import Stock from '../components/Stock'
import TractorSale from '../components/Bill'

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component
{
  

  render()
  {
    return(
      <Drawer.Navigator  
      drawerContentOptions={{
          activeTintColor: "#e91e63",
          inactiveTintColor:  "white",
          itemStyle: { marginVertical: 5 }
        }}
drawerContent={props => <CustomSidebarMenu {...props} />}
       
      >
       <Drawer.Screen
        name="Tractor Purchase"
        component={TractorP}
         options={{ unmountOnBlur: true }}
      />
     
       
       <Drawer.Screen
        name="Tractor Sale"
        component={TractorS}
         options={{ unmountOnBlur: true }}
      />
       <Drawer.Screen
        name="Stock"
        component={Stock}
         options={{ unmountOnBlur: true }}
      />
       
      
       <Drawer.Screen
        name="Purchase Data"
        component={ITL}
         options={{ unmountOnBlur: true }}
      />
     <Drawer.Screen
        name="Sale Data"
        component={TractorSale}
         options={{ unmountOnBlur: true }}
      />
      
     
      
     
      
      
      
      </Drawer.Navigator>
    );
  }  
}