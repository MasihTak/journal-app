<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">{{ cardTitle }}</h5>
    </div>
    <div class="card-body">
      <h6 class="card-subtitle mb-2 text-muted">By {{ cardSubTitle }}</h6>
      <p class="card-text">{{ cardBody }}</p>
    </div>
    <div class="card-footer">
      <a href="#" class="card-link" @click="editJournal">Edit</a>
      <a href="#" class="card-link text-danger" @click="deleteJournal">Delete</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "JCard",
  props: {
    id: {
      type: Number,
      required: true
    },
    cardTitle: {
      type: String,
      required: true,
    },
    cardSubTitle: {
      type: String,
      required: true,
    },
    cardBody: {
      type: String,
      required: false
    }
  },
  methods: {
    editJournal() {
      return this.$store.dispatch('editJournal',
          { id: this.id,
            title: this.cardTitle,
            body: this.cardBody,
          }
      )
    },
    deleteJournal() {
      return this.$store.dispatch('deleteJournal', this.id)
    }
  }
}
</script>

<style scoped>

.card {
  width: 18rem;
  max-height: 450px;
}

.card-body {
  overflow-y: auto;
}

</style>
