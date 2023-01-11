<template>
   <div class="pagination">
      <div v-for="page in totalPage" class="page-item" @click="setCurrentPage">
         {{ page }}
      </div>
   </div>
</template>

<script>
export default {
   props: {
      totalPage: {
         type: Number
      },
   },
   methods: {
      setCurrentPage(page){
         this.$emit()
      }
   },
}
</script>

<style scoped>
.pagination {
   display: flex;
   gap: 5px;
}

.page-item {
   padding: 5px 10px;
   border: 1px solid black;
   border-radius: 5px;
}
</style>
