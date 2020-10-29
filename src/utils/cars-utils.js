import React, { forwardRef } from "react";
import axios from "axios";

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';

export const tableDataCreate = [
  { title: 'Make', field: 'make' },
  { title: 'Model', field: 'model' },
  { title: 'Year', field: 'year', type: 'numeric' },
  {
    title: 'Engine Type',
    field: 'engineType',
    lookup: { 'DIESEL': 'DIESEL', 'HYBRID': 'HYBRID', 'ELECTRIC': 'ELECTRIC', 'GASOLINE':'GASOLINE' },
  },
  {
    title: 'Gear Box',
    field: 'gearBox',
    lookup: {  'AUTOMATIC':'AUTOMATIC', 'MANUAL': 'MANUAL' },
  },
  {
    title: 'Condition',
    field: 'condition',
    lookup: { 'NEW': 'NEW', 'USED': 'USED', 'PARTS': 'PARTS' },
  },
  { title: 'Horse Power', field: 'horsePower', type: 'numeric' },
  { title: 'Color', field: 'color' },
  { title: 'Price', field: 'price', type: 'numeric' },
  {
    title: 'City',
    field: 'city',
    lookup: { 'Sofia': 'Sofia', 'Prague': 'Prague', 'Amsterdam': 'Amsterdam' },
  },
  { title: 'Mileage', field: 'mileage', type: 'numeric' },
  { title: 'Extras', field: 'extras' },
];

export const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />)
};

export const getAllCars = async () => {
  try {
    return await axios.get("http://localhost:8083/cars/all");
  }catch(e) {
    console.log(e)
  }
}

export const addNewCar = async (data, user, userToken) => {
  const newData = {...data, user: user};
  const config = {
    headers: { Authorization: `Bearer ${userToken}` }
  };

  try {
    await axios.post(
      'http://localhost:8083/cars',
      newData,
      config
    )
  } catch(e) {
    console.log(e);
  }
}

export const deleteCar = async (data, userToken) => {
  const carID = data.id;
  const userID = data.user.id;
  const config = {
    headers: { Authorization: `Bearer ${userToken}` }
  };

  try {
    await axios.delete(
      `http://localhost:8083/cars/${carID}/${userID}`,
      config
    )
  } catch(e) {
    console.log(e);
  }
}

export const updateCar = async (data, userToken) => {
  const userID = data.user.id;
  const config = {
    headers: { Authorization: `Bearer ${userToken}` }
  };

  try {
    await axios.put(
      `http://localhost:8083/cars/${userID}`,
      data,
      config
    )
  } catch(e) {
    console.log(e);
  }
}