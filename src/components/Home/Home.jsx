import React, { useState, useEffect, Fragment } from "react";
import Header from "../Header/Header.jsx";
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux"
import { fetchAllCars, removeCar, editCar, addCar } from "../../actions/cars";
import { setUserFromLocalStorage } from "../../actions/user";
import { tableDataCreate, tableIcons } from "../../utils/cars-utils";
import _ from "lodash";

const Home = () => {
  const { data } = useSelector(state => state.carsReducer);
  const { user, userToken } = useSelector(state => state.userReducer);
  const [ dataInToState, setDataInToState ] = useState(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  useEffect(() => {
    if (!user || !userToken || userToken === "" || Object.keys(user).length === 0) {
      const user = localStorage.getItem("user")
      const userToken = localStorage.getItem("userToken")
      if (user && userToken && userToken !== "") {
        dispatch(setUserFromLocalStorage());
      }
    }
  }, [dispatch, user, userToken])

  useEffect(() => {
    if(!_.isEmpty(data)){
      setDataInToState(data);
    }
  }, [data])

  const handleAddNewCar = (newData, user, userToken) => {
    const currentState = [...dataInToState];
    const newCar = {...newData, user};
    currentState.push(newCar);
    setDataInToState([...currentState]);
    dispatch(addCar(newData, user, userToken))
  }

  const handleUpdateCar = (newData, oldData, userToken) => {
    const currentState = [...dataInToState];
    const index = oldData.tableData.id;
    currentState[index] = newData;
    console.log(currentState);
    setDataInToState([...currentState]);
    dispatch(editCar(newData, userToken))
  }

  const handleDeleteCar = (oldData, userToken) => {
    const currentState = [...dataInToState];
    const index = oldData.tableData.id;
    currentState.splice(index, 1);
    setDataInToState([...currentState]);
    dispatch(removeCar(oldData, userToken))
  }

  // console.log(updatedCar);

  return (
    <Fragment>
      <Header user={user} userToken={userToken}/>
      <MaterialTable
        title="CARS"
        columns={tableDataCreate}
        data={dataInToState}
        icons={tableIcons}
        editable={user && {
          isEditable: rowData => rowData.user && user && rowData.user.id === user.id,
          isDeletable: rowData => rowData.user && user && rowData.user.id === user.id,
          onRowAdd: async newData => await handleAddNewCar(newData, user, userToken),
          onRowUpdate: async (newData, oldData) => await handleUpdateCar(newData, oldData, userToken),
          onRowDelete: async oldData => await handleDeleteCar(oldData, userToken)
        }}
      />
    </Fragment>
  )
};

export default Home;