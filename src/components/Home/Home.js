import React, { forwardRef, useState } from "react";
import MaterialTable from "material-table";

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userToken = JSON.parse(localStorage.getItem('userToken'));

  const [columns, setColumns] = useState([
    { title: 'Make', field: 'make' },
    { title: 'Model', field: 'model' },
    { title: 'Year', field: 'Year', type: 'numeric' },
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
      field: 'engineType',
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
    { title: 'Miliage', field: 'miliage', type: 'numeric' },
    { title: 'Extras', field: 'extras' },
  ]);

  const [data, setData] = useState([
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  ]);

  const tableIcons = {
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

  return (
    <MaterialTable
      title="CARS"
      columns={columns}
      data={data}
      icons={tableIcons}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
      }}
    />
  )
};

export default Home;