import React, { useState, useEffect } from "react";
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
    <MaterialTable
      title="CARS"
      columns={tableDataCreate}
      data={data}
      icons={tableIcons}
      editable={{
        isEditable: rowData => rowData.user && rowData.user.id === user.id,
        isDeletable: rowData => rowData.user && rowData.user.id === user.id,
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
  )
};

export default Home;