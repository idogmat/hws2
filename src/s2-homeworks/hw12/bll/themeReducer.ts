export const initState = {
    themeId: 1,
}
export type StateType={
    themeId:number
}
export type ActionType={
    type:'SET_THEME_ID'
    id:number
}
export const themeReducer = (state:StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId:Number(action.id)
            }

        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }) // fix any
