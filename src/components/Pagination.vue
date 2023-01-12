<template>
   <div class="pagination">
      <div 
         class="prevAndNext"
         @click="$emit('currentPage', selectedPage - 1)">
         Prev
      </div>
      <div v-for="page in range(pageRangeStart,pageRangeEnd)" class="page-item" @click="currentPage(page)">
         {{ page }}
      </div>
      <div 
         class="prevAndNext"
         @click="$emit('currentPage', selectedPage + 1)">
         Next
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         pageRangeStart: this.selectedPage,
         pageRangeEnd: this.selectedPage + 6
      }
   },
   props: {
      totalPage: {
         type: Number
      },
      selectedPage: {
         type: Number
      }
   },
   methods: {
      currentPage(page) {
         this.pageRangeStart = page <= 3 ? 1 : page - 3
         this.pageRangeEnd = page <= 4 ? 7 : page + 3
         this.$emit('currentPage', page);
      },
      range(start, end) {
         return Array(end - start + 1).fill().map((_, idx) => start + idx)
      }
   },
}
</script>

<style scoped>
.pagination {
   display: flex;
   gap: 5px;
   margin: 15px 100px;
}

.page-item {
   padding: 5px 10px;
   border: 1px solid black;
   border-radius: 5px;
   cursor: pointer;
   color: white;
}
.prevAndNext {
   padding: 5px 10px;
   border: 1px solid black;
   border-radius: 5px;
   cursor: pointer;
   color: white;
}
</style>
