/* 

import React,{createContext} from 'react'

type ContextType = {
    name: string;
    age: number;
}

const initialState = {
    name: 'Cristian',
    age: 24
}

export const Context = createContext<ContextType>(initialState);

export const ContextProvider: React.FC = ({children}) => {
    return(
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )
}

*/

import {createContext, useReducer} from 'react'
import { UserType,userInitialState , userReducer} from '../reducers/useReducer'
import { reducerActionType } from '../types/reducersActionTypes';
import { ThemeType,ThemeInitialState,themeReducer } from '../reducers/themeReducer';



type initialStateType = {
    user: UserType;
    theme: ThemeType;
}



type ContextType = {
    state: initialStateType
    dispatch : React.Dispatch<any>
}




const initialState = {
    user:userInitialState,
    theme: ThemeInitialState
    
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state : initialStateType, action: reducerActionType) => ({

    user: userReducer(state.user,action),
    theme: themeReducer(state.theme, action)
})

export const ContextProvider = ({children }: {children: JSX.Element}) => {

    const [state,dispatch] = useReducer(mainReducer, initialState)


    return (
        <Context.Provider value={{state,dispatch}}>
            {children}    
        </Context.Provider>
    )
}