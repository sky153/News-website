<template>
    <div class="error" :class="{ 'txt-center': isCenter }"
    :style="{visibility: msg ? 'visible' : 'hidden'}">
        {{ msg }}
        </div>
</template>

<script>
export default {
    props: {
        isCenter: {
            default: false,
            type: Boolean
        },
        msg: {
            default: "",
            type: String
        },
    }
}
</script>

<style scoped>
    .error{
        font-size: 14px;
        text-align: center;
        color: #a44242;
        height: 30px;
        line-height: 30px;
    }
</style>