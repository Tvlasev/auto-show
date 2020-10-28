import React, { useState, useEffect, Fragment } from "react";
import Header from "../Header/Header.jsx";
import MaterialTable from "material-table";
import axios from "axios";
import { deleteCar, tableDataCreate, addNewCar, updateCar, tableIcons } from "../../utils/cars-utils";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllCars = async () => {
      try {
        const response = await axios.get("http://localhost:8083/cars/all");
        setData(response.data);
      }catch(e) {
        console.log(e)
      }
    }

    getAllCars();
  }, []);

  const user = JSON.parse(localStorage.getItem('user'));
  const userToken = JSON.parse(localStorage.getItem('userToken'));

  return (
    <Fragment>
      <Header user={user} userToken={userToken}/>
      <MaterialTable
        title="CARS"
        columns={tableDataCreate}
        data={data}
        icons={tableIcons}
        editable={user && {
          isEditable: rowData => rowData.user && user && rowData.user.id === user.id,
          isDeletable: rowData => rowData.user && user && rowData.user.id === user.id,
          onRowAdd: async newData => {
            setData([...data, newData]);

            await addNewCar(newData, user, userToken);
          },
          onRowUpdate: async (newData, oldData) => {
            const dataUpdate = [...data];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setData([...dataUpdate]);

            await updateCar(newData, userToken)
          },
          onRowDelete: async oldData => {
            const dataDelete = [...data];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
            setData([...dataDelete]);

            await deleteCar(oldData, userToken);
          }
        }}
      />
    </Fragment>
  )
};

export default Home;