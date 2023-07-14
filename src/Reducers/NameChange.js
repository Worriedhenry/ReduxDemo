const initialState = ""
const initialAge = 25
export const ChangeName = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGENAME': return action.payload;
    default: return state;
  }
}
export const ChangeAge = (state = initialAge, action) => {
  switch (action.type) {
    case 'CHANGEAGE': return action.payload;
    default: return state;
  }
}