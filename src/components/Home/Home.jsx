import React, { useEffect, Fragment } from "react";
import Header from "../Header/Header.jsx";
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux"
import { fetchAllCars, removeCar, editCar, addCar } from "../../actions/cars";
import { tableDataCreate, tableIcons } from "../../utils/cars-utils";

const Home = () => {
  const data = useSelector(state => state.carsReducer.data);
  const user = useSelector(state => state.userReducer.user);
  const userToken = useSelector(state => state.userReducer.userToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  // const user = JSON.parse(localStorage.getItem('user'));
  // const userToken = JSON.parse(localStorage.getItem('userToken'));

  console.log(user, userToken)

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
          onRowAdd: async newData => dispatch(addCar(newData, user, userToken)),
          onRowUpdate: newData => dispatch(editCar(newData, userToken)),
          onRowDelete: oldData => dispatch(removeCar(oldData, userToken))
        }}
      />
    </Fragment>
  )
};

export default Home;