<template>
  <form @submit.prevent="AddJournal">
    <button type="button" class="btn btn-warning btn-close position-absolute"
            @click.prevent="closeNote"
    ></button>
    <div class="container">
      <div class="mb-3">
        <label for="journal_title" class="form-label">Title:</label>
        <input type="text"
               class="form-control"
               id="journal_title"
               v-model="title"
        >
      </div>
      <div class="mb-3">
        <label for="journal_body" class="form-label">Body</label>
        <textarea class="form-control"
                  id="journal_body"
                  aria-describedby="bodyHelp"
                  v-model="body"
        ></textarea>
        <div id="bodyHelp" class="form-text">Use the form above to create a post. Make sure you fill the required title and body fields and then press submit.</div>
      </div>
      <button type="submit"
              class="btn btn-primary"
      >Submit</button>
    </div>
  </form>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  name: "NewJournal",
  computed: {
    ...mapFields([
      'currentJournal.title',
      'currentJournal.body',
    ]),
  },
  methods: {
    closeNote() {
      this.$store.dispatch('closeNote')
    },
    AddJournal() {
      this.$store.dispatch('publishNote')
    }
  },
}
</script>

<style scoped>

form {
  margin: 50px 0;
}

.btn-close {
  top: 120px;
  right: 50px;
}

</style>
