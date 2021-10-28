import React, { createContext, useReducer } from "react";

const INITIAL_STATE = {
  isOpen: false,
};

const ModalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        isOpen: true,
      };

    case "CLOSE_MODAL":
      return {
        isOpen: false,
      };

    default:
      return { ...state };
  }
};

export const ModalContext = createContext(INITIAL_STATE);

export const ModalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ModalReducer, INITIAL_STATE);

  return (
    <ModalContext.Provider
      value={{
        isOpen: state.isOpen,
        openModal: () => {
          dispatch({ type: "OPEN_MODAL" });
        },
        closeModal: () => {
          dispatch({ type: "CLOSE_MODAL" });
        },
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
