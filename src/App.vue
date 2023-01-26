<template>
  <header>
    <div class="wrapper">
    </div>
  </header>

  <main>
    <section>
      <h2>Options</h2>
      <form>
        <div>
          <input
            type="number"
            id="waitTime"
            v-model="waitTime" />
          <label for="waitTime">
            Wait time before a press is interpreted as a "long press".
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="disableRightClick"
            v-model="disableRightClick" />
          <label for="waitTime">
            Disable the right click menu. If enabled, some css will be applied to the element disabling the right click menu.
          </label>
        </div>
      </form>
    </section>
    <section>
      <h2>Preview</h2>
      <GridItem
        :longPressWait="waitTime"
        :rightClick="disableRightClick" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GridItem from './components/DemoTest.vue';

const waitTime = ref<number>(300);
const disableRightClick = ref<boolean>(false);
</script>

<style scoped>
</style>
