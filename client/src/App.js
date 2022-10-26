import React, { Component } from 'react';
import {BrowserRouter ,Route } from 'react-router-dom';
import AddItems from './components/Shop/AddItems';
import EditItems from './components/Shop/EditItems';
import ItemDetails from './components/Shop/ItemDetails';
import HomeShop from './components/Shop/HomeShop';
import Navbar from './components/Navbar';
import Login from './components/Login';

import CreateMeal from './components/Meal/CreateMeal';
import MealDetails from './components/Meal/MealDetails';
import EditMeal from './components/Meal/EditMeal';
import HomeMeal from './components/Meal/HomeMeal';

import CreateMembers from './components/Member/CreateMembers';
import MemberDetails from './components/Member/MemberDetails';
import EditMembers from './components/Member/EditMembers';
import HomeMember from './components/Member/HomeMember';

import HomeEquip from './components/Equipment/HomeEquip';
import AddEquipment from "./components/Equipment/AddEquipment";
import EditEquipment from "./components/Equipment/EditEquipment";
import EquipmentDetails from "./components/Equipment/EquipmentDetails";

import Createworkoutplan from './components/Workout/Createworkoutplan';
import workoutplanDetails from './components/Workout/workoutplanDetails';
import Editworkoutplan from './components/Workout/Editworkoutplan';
import HomeWorkout from './components/Workout/HomeWorkout';


//import Landing from './components/Landing';
const user = localStorage.getItem('username');

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='container'>
      <Navbar/>
        <Route path="/" exact component={Login}></Route> 
        <Route path="/dash" exact component={HomeShop}></Route>
        <Route path="/add" component={AddItems}></Route>
        <Route path="/edit/:id" component={EditItems}></Route>
        <Route path="/Shop/:id" component={ItemDetails}></Route>

        <Route path="/dash" exact component={HomeMeal}></Route>
        <Route path="/add" component={CreateMeal}></Route>
        <Route path="/edit/:id" component={EditMeal}></Route>
        <Route path="/meal/:id" component={MealDetails}></Route>

        <Route path="/dash" exact component={HomeMember}></Route>
        <Route path="/add" component={CreateMembers}></Route>
        <Route path="/edit/:id" component={EditMembers}></Route>
        <Route path="/Member/:id" component={MemberDetails}></Route>

        <Route path="/dash" exact component={HomeEquip}></Route>
        <Route path="/add" component={AddEquipment}></Route>
        <Route path="/edit/:id" component={EditEquipment}></Route>
        <Route path="/equipment/:id" component={EquipmentDetails}></Route>

        <Route path="/dash" exact component={HomeWorkout}></Route>
        <Route path="/add" component={Createworkoutplan}></Route>
        <Route path="/edit/:id" component={Editworkoutplan}></Route>
        <Route path="/workout_plan/:id" component={workoutplanDetails}></Route>
       
      </div>
      </BrowserRouter>
      
    )
  }
}
