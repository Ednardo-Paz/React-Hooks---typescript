export const initialState = {
  counter: 0,
  userName: "",
  adress: {
    city: "",
    street: ""
  },
  LOG_IN: {
    userEmail: "",
    userLogado: 0
  }
}

export type State = {
  counter: number;
  userName: string;
  adress: {
    street: string;
    city: string;
  }
  LOG_IN: {
    userEmail: string,
    userLogado: number
  }
}

export type Action = { type: "increment" }
  | { type: "decrement" }
  | { type: "resetState" }
  | { type: 'updateName', name: string }
  | {
    type: "updadeAdress", data: {
      street: string;
      city: string;
    }
  }
  | {
    type: "estadoLogado", estado: {
      userEmail: string;
      userLogado: number;
    }
  }

export function reducer(state: State, action: Action) {

  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1
      }
    case "updateName":
      return {
        ...state,
        userName: action.name
      }
    case "updadeAdress":
      return {
        ...state,
        adress: action.data
      }
    case "estadoLogado":
      return {
        ...state,
        LOG_IN: action.estado
      }
    case "resetState":
      return initialState
    default:
      return state;
  }
}