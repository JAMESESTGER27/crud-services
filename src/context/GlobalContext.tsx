/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  useEffect,
  useReducer,
} from "react";
import { v4 } from "uuid";
import appReducer from "./AppReducer";
import { initialState } from "./InitialState";

type TInitialState = typeof initialState;

interface IContext extends TInitialState {
  addService: (service: any) => void;
  deleteService: (id: any) => void;
  updateService: (service: any) => void;
  setTypeSelect: (type: any) => void;
  setCategorys: (cat: any) => void;
  updateCategorys: () => void;
}

const GlobalContext = createContext<IContext>({
  ...initialState,
  ...{
    addService: () => {},
    deleteService: () => {},
    updateService: () => {},
    setTypeSelect: () => {},
    setCategorys: () => {},
    updateCategorys: () => {},
  },
});

const ContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(
    appReducer,
    initialState
  );

  const addService = (service: any) => {
    dispatch({
      type: "ADD_SERVICE",
      payload: { ...service, id: v4() },
    });
  };
  const deleteService = (id: any) => {
    dispatch({ type: "DELETE_SERVICE", payload: id });
  };

  const updateService = (service: any) => {
    dispatch({ type: "UPDATE_SERVICE", payload: service });
  };

  const setTypeSelect = (type: any) => {
    dispatch({
      type: "SET_TYPE_SELECTED",
      payload: type,
    });
  };

  const setCategorys = (cat: any) => {
    dispatch({
      type: "SET_TYPE_CATEGORY",
      payload: cat,
    });
  };

  const updateCategorys = () => {
    // const newSet = new Set(
    //   state.services.map((item: any) => item.category)
    // );

    const allCategories = [
      "Todos",
      "Hogar",
      "Autos",
      "Salud",
    ];
    setCategorys(allCategories);
  };

  useEffect(() => {
    updateCategorys();
  }, [state.services]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        addService,
        deleteService,
        updateService,
        setTypeSelect,
        setCategorys,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, ContextProvider };
