<template>
<div
    v-longPress="{
        click: singleClick,
        longPress: longPress
    }"
>
    test
</div>
</template>
<script setup lang="ts">
import vLongPress from "../vue-long-press";

function singleClick(){

}

function longPress(){

}
</script>
