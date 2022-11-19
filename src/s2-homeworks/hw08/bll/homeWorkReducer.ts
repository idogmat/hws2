import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort':
            let stateCopy=[...state]
            switch (action.payload){
                case "up":
                   return  stateCopy.sort(compare)
                case "down":
                    return stateCopy.sort(compare).reverse()
            }
            return stateCopy
        case 'check':
            let stateCopy1=[...state]
            switch (action.payload){
                case 18:
                    return stateCopy1.filter(u=>u.age>=18)
            }
            return stateCopy1

        default:
            return state
    }
}
function compare( a:UserType, b:UserType ) {
    if ( a.name < b.name ){
        return -1;
    }
    if ( a.name > b.name ){
        return 1;
    }
    return 0;
}