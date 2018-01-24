import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all'
  },
  mutations: {
    checkbox (state, index) {
      state.todos[index].completed = !state.todos[index].completed
    },
    DELETE_TODO (state, index) {
      state.todos.splice(index, 1)
    },
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    CLEAR (state) {
      for (let i = state.todos.length - 1; i >= 0; i--) {
        if (state.todos[i].completed === true) {
          state.todos.splice(i, 1)
        }
      }
    }
  },
  actions: {
    checkbox ({commit}, index) {
      commit('checkbox', index)
    },
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    CLEAR_TODO ({state, commit}) {
      commit('CLEAR')
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    DELETE_TODO ({commit}, newVisibilityValue) {
      commit('DELETE_TODO', newVisibilityValue)
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
