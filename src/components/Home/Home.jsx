import React, { useEffect, Fragment } from "react";
import Header from "../Header/Header.jsx";
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux"
import { fetchAllCars } from "../../actions/cars";
import { deleteCar, tableDataCreate, addNewCar, updateCar, tableIcons } from "../../utils/cars-utils";

const Home = () => {
  const data = useSelector(state => state.carsReducer.data);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

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
            await addNewCar(newData, user, userToken);
          },
          onRowUpdate: async (newData, oldData) => {
            const dataUpdate = [...data];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;

            await updateCar(newData, userToken)
          },
          onRowDelete: async oldData => {
            const dataDelete = [...data];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);

            await deleteCar(oldData, userToken);
          }
        }}
      />
    </Fragment>
  )
};

export default Home;