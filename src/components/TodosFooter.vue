<template>
  <div>
    <div class="columns">
      <div class="column ">
        <p class="is-pulled-left"> {{count}} items left</p>
        <visibility-input/>
        <center><button class="button" style="background-color:#FF6600" @click="clearCompeleted()">Clear</button></center>
      </div>

    </div>
    <div class="columns">
      <div class="column is-4">

      </div>
    </div>

  </div>
</template>

<script>
import VisibilityInput from '@/components/VisibilityInput'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    VisibilityInput
  },
  computed: {
    ...mapGetters(['count', 'countActives', 'countCompleted'])
  },
  methods: {
    ...mapActions(['clearCompeleted'])
  }
}
</script>
