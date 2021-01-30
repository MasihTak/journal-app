<template>
  <div class="container mt-5">
    <NewJournal v-show="newNote" />
    <div class="card-container" v-if="hasJournals" >
        <JCard
            v-for="note in notes"
            :key='note.id'
            :id="note.id"
            :card-title="note.title"
            :card-sub-title="note.author"
            :card-body="note.body"
        />
    </div>
    <h4>No Journals found!</h4>
  </div>
</template>

<script>
// @ is an alias to /src
import JCard from "@/components/JCard";
import NewJournal from "@/components/NewJournal";

export default {
  name: 'Home',
  components: {
    NewJournal,
    JCard
  },
  computed: {
    notes() {
      return this.$store.getters.getNotes
    },
    newNote() {
      return this.$store.getters.newNote;
    },
    hasJournals() {
      return this.$store.getters.hasJournals;
    }
  }
}
</script>

<style scoped>

.card-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px 20px;
}

</style>
