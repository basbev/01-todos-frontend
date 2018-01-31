<template>
  <div>
    <div v-for="(todo , index) in todos" :key="todo.title" v-if="checkTodo(todo)">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" v-model="todo.complete" @input="checkbox(index)">
          <strike v-if="todo.completed">{{ todo.title }}</strike>
          <span v-else>{{ todo.title }}</span>
        </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click=DELETE_TODO(index)></a>
      <div class="is-clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['todos',
      'visibility'
    ])
  },
  methods: {
    ...mapActions(['DELETE_TODO', 'CLEAR_TODO', 'checkbox']),
    checkTodo (todo) {
      if (this.visibility === 'all') {
        return true
      } else if (this.visibility === 'active' && todo.completed === false) {
        return true
      } else if (this.visibility === 'completed' && todo.completed === true) {
        return true
      } else return false
    }
  }
}
</script>
