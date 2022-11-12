export function jobs(state, action) {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, jobs: action.payload };
    default:
      return state;
  }
}
