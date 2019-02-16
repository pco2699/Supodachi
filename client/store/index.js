export const state = () => ({
  markers: [],
  pageStack: []
})

export const getters = {
  pageStack: state => state.pageStack
}

export const mutations = {
  pushPage(state, page) {
    state.pageStack = [
      ...state.pageStack,
      ...(page instanceof Array ? page : [page])
    ]
  },
  popPage(state) {
    if (state.pageStack.length > 1) {
      state.pageStack.pop()
    }
  }
}

export const actions = {}
