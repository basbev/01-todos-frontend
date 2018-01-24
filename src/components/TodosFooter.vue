<template>
  <div>
    <p class="is-pulled-left">{{countTodos}} items left</p>
    <visibility-input/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VisibilityInput from '@/components/VisibilityInput'
export default {
  components: {
    VisibilityInput
  },
  computed: {
    ...mapGetters(['todos']),
    countTodos () {
      var count = 0
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === false) {
          count += 1
        }
      }
      return count
    }
  }
}
</script>
