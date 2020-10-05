/**
 * Action TYPES
 */
export const CHANGE_THEME = 'CHANGE_THEME'
export const GET_THEME = 'GET_THEME'

/**
 * Action Creators
 */
export const changeTheme = () => ({
  type: CHANGE_THEME
})
export const getTheme = () => ({
  type: GET_THEME
})

export function changeThemeAction() {
  return async (disptach) => {
    return disptach(changeTheme())
  }
}
export function getThemeAction() {
  return (dispatch) => {
    return dispatch(getTheme())
  }

}