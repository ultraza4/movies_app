<template>
   <MyButton class="scroll-btn" ref="scrlBtn" @click="scrollToTop">
      <Icon icon="ic:outline-arrow-circle-up" width="40" />
   </MyButton>
</template>

<script>
import MyButton from '@/components/UI/myButton.vue';
import { Icon } from '@iconify/vue';

export default {
   name: 'my-scroll-btn',
   components: {
      MyButton,
      Icon
   },
   methods: {
      scrollToTop() {
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
         });
      }
   }
}
</script>

<style scoped>
.scroll-btn {
   position: fixed;
   top: 50px;
   right: 20px;
   padding: 0px 5px;
   cursor: pointer;
   transition: 0.5s;
   background-color: inherit;
}

.scroll-btn-hidden {
   display: none;
}
</style>