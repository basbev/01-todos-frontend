<template>
  <div>
    <b-field class="is-pulled-right">
      <b-radio-button v-model="visibility"
        native-value="all">
        <span>All ({{all}})</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="active">
        <span>Active ({{all - completed}})</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="completed">
        <span>Completed ({{completed}})</span>
      </b-radio-button>
    <button class="button is-dark" @click="CLEAR_TODO">
      <b-icon icon="check"></b-icon>
      <span>Clear</span>
    </button>
    </b-field>
  </div>
</template>

<script>
import { store } from '@/store'
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['todos']),
    all () {
      if (this.todos) {
        return this.todos.length
      } else return 0
    },
    completed () {
      let count = 0
      for (let i = 0; this.todos && i < this.todos.length; i++) {
        if (this.todos[i].completed) {
          count++
        }
      }
      return count
    },
    visibility: {
      get: function () {
        return store.state.visibility
      },
      set: function (newValue) {
        store.dispatch('changeVisibility', newValue)
      },
      ...mapGetters(['todos', 'visibility'])
    }
  },
  methods: {
    ...mapActions(['CLEAR_TODO'])
  }
}
</script>
