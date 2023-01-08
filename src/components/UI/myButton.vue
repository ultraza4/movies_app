<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style>
.btn{
    display: flex;
    width: fit-content;
    justify-items: center;
    padding: 20px 15px;
    gap: 5px;
    border-radius: 15px;
    background-color: rgb(21 128 61);
    margin-top: 20px;
    transition: 0.5s;
    border: none;
    font-size: medium;
    color: white;
    font-weight: bold;
}
.btn:hover{
    background-color: rgb(38 38 38);
}
</style>