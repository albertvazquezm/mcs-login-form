<template>
    <button :disabled="isLoading" @click="onClick()" class="btn btn-primary">
        {{text}}
        <span v-if="isLoading">...</span>
    </button>
</template>
<script>
export default {
    props: ['text', 'isLoading', 'disabled'],
    methods: {
        onClick() {
            this.$emit(`on-click`);
        }
    }
}
</script>