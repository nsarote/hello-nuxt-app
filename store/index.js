export const state = () => ({
  myState: 'this is state',
  counter: 0,
  name: 'Sarote State',
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setLoggedIn(state, value) {
    state.auth.loggedIn = value;
  }
}
