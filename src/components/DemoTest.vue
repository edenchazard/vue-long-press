<template>
<div
  class="area"
  v-longPress="{
    click: singleClick,
    longPress: longPress,
    wait: longPressWait,
    disableRightClickMenu: rightClick
  }"
>
  click/press here {{ rightClick }}
</div>
</template>
<script setup lang="ts">
import vLongPress from '../vue-long-press';

defineProps({
  longPressWait: {
    type: Number,
    default: 300
  },
  rightClick: {
    type: Boolean,
    default: false
  }
});

function singleClick () {
  alert('click detected!');
}

function longPress () {
  alert('long press detected!');
}
</script>

<style scoped>
.area{
  border: 2px solid blue;
  padding:5px;
  display: inline-block;
  width:100px;
  height:100px;
  text-align: center;
}
</style>
