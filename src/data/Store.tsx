import { createContext, ReactNode, useReducer, useState } from "react";
import { Action, initialState, reducer } from "../reducer";


type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  produto: string
  setProduto: React.Dispatch<string>
  counter: number
  dispatch: React.Dispatch<Action>
  userName: string
  LOG_IN: { userEmail: string; userLogado: number; };
  Logar: () => void;
};


export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [produto, setProduto] = useState<string>("")

  const [{ counter, userName, LOG_IN }, dispatch] = useReducer(reducer, initialState)
  console.log(counter, userName);


  function updateAdress() {
    dispatch({
      type: "updadeAdress",
      data: {
        city: "Liboa",
        street: "Rua das Palmeiras"
      }
    })
  }
  function Logar() {
    dispatch({
      type: 'estadoLogado',
      estado: {
        userEmail: userName,
        userLogado: 1
      }
    })
  }

  return (
    <UserContext.Provider
      value={{
        produto,
        setProduto,
        counter,
        userName,
        LOG_IN,
        dispatch,
        Logar
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
