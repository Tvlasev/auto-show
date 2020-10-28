import axios from "axios";

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

export const addNewCar = async (data, user, userToken) => {
  const config = {
    headers: { Authorization: `Bearer ${userToken}` }
  };

  const newData = {...data, user: user};
  console.log(newData, user, userToken)

  try {
    const response = await axios.post(
      'http://localhost:8083/cars',
      newData,
      config
    )
    console.log(response)
  } catch(e) {
    console.log(e);
  }
}