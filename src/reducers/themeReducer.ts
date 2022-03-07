
import { reducerActionType } from "../types/reducersActionTypes";

export type ThemeType = {
    status: 'dark' | 'light'
}

export const ThemeInitialState : ThemeType = {
   status: "light"
}

export const themeReducer = (state: ThemeType, action: reducerActionType) =>{
    switch(action.type) {
        case 'CHANGE_STATUS':
        return {...state, status: action.payload.status}
        break;
    }




    return state;
}