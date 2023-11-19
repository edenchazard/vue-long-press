<template>
  <div id="container">
    <header>
      <div id="menu">
        <h1>Vue Slick Press</h1>
        <a
          href="https://github.com/edenchazard/vue-slick-press"
          id="github"
          target="_blank"
        >
          <span class="label">Github</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            class="icon"
          >
            <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            />
          </svg>
        </a>
      </div>
      <p>
        Two simple Vue composables to enable components to detect clicks and
        long presses.
      </p>
    </header>

    <main>
      <section>
        <code class="code-block">npm install @edenchazard/vue-slick-press</code>
      </section>

      <section id="demo">
        <h2>Demo</h2>

        <section id="useSlickPress">
          <h3>useSlickPress</h3>
          <div class="section-demo">
            <button ref="button" class="item">Click me uwu</button>
            <div>
              <p>
                The <code>useSlickPress</code> composable can reference a single
                element and determine long presses or clicks. Try the button, I
                dare you.
              </p>
              <p v-show="lastAction">
                You just <span class="bold">{{ lastAction }}</span> the button!
                {{ times > 1 ? `${times} times, in fact.` : '' }}
              </p>
            </div>
          </div>
        </section>

        <section id="useSlickPressContainer">
          <h3>useSlickPressContainer</h3>
          <div class="section-demo">
            <p>
              The <code>useSlickPressContainer</code> composable works great for
              cases where you have a container with many child nodes, and you
              want to create an Android photo gallery selection/click
              experience.
            </p>
            <p>Long press to begin selection mode.</p>
            <div id="select">
              <span
                >Selected {{ selectionCount }} out of
                {{ items.length }} items</span
              >
              <button
                v-show="hasSelections"
                type="button"
                title="Unselect all"
                @click="unselectAll"
                class="button unselect"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  class="icon"
                >
                  <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                  />
                </svg>
              </button>
            </div>
            <div id="grid" ref="grid">
              <button
                :data-item="$index"
                data-slick
                v-for="(item, $index) in items"
                :aria-pressed="item.selected"
                class="item"
                type="button"
                :class="{ clicked: item.clicked, selected: item.selected }"
                @animationend="item.clicked = false"
              >
                click or press here
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useSlickPress, useSlickPressContainer } from './vue-slick-press';

const button = ref();
const lastAction = ref('');
const times = ref<number>(0);

useSlickPress(button, {
  onClick: () => {
    if (['clicked', ''].includes(lastAction.value)) times.value++;
    else {
      times.value = 0;
    }
    lastAction.value = 'clicked';
  },
  onLongPress: () => {
    if (['long pressed', ''].includes(lastAction.value)) times.value++;
    else {
      times.value = 0;
    }
    lastAction.value = 'long pressed';
  },
  wait: 800,
  disableRightClickMenu: true,
});

const grid = ref();

const items = ref(
  Array.from({ length: 20 }).map((e) => ({
    selected: false,
    clicked: false,
  })),
);

const selectionCount = computed<number>(
  () => items.value.filter((e) => e.selected).length,
);

const hasSelections = computed(() => selectionCount.value > 0);

useSlickPressContainer(grid, {
  onLongPress(e) {
    const id = parseInt(e.target.dataset.item);
    items.value[id].selected = !items.value[id].selected;
  },
  onClick(e) {
    const id = parseInt(e.target.dataset.item);

    if (hasSelections.value) {
      items.value[id].selected = !items.value[id].selected;
    } else {
      items.value[id].clicked = !items.value[id].clicked;
    }
  },
});

function unselectAll() {
  items.value = items.value.map((item) => ({ ...item, selected: false }));
}
</script>

<style scoped>
*:focus-visible {
  outline: 5px solid rgba(100, 148, 237, 0.521);
}
input,
select {
  padding: 0.5rem;
  box-shadow: inset 0px 0px 10px 0px #00000017;
  border-radius: 0.25rem;
}

h1,
h2,
h3 {
  margin: 0.5rem 0;
}
h1 {
  line-height: 1.4rem;
}

header {
  padding: 0.5rem 0 0 0;
}

section {
  margin-top: 1rem;
}
code,
code::before {
  font-family: 'Ubuntu Mono', monospace;
}
p {
  line-height: 1.5em;
  margin: 0.5em 0;
}

.bold {
  font-weight: bold;
}
main .icon {
  width: 100%;
  height: 100%;
}

.code-block {
  background: hsl(0, 0%, 90%);
  border: 1px solid hsl(0, 0%, 40%);
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  width: 100%;
  box-sizing: border-box;
  display: block;
  cursor: pointer;
  word-break: break-all;
  line-height: 1.3em;
}

.code-block:hover {
  background: hsl(0, 0%, 90%) linear-gradient(to right, hsl(0, 0%, 90%), #fff)
    no-repeat;
  background-size: 25%;
  animation: shine 3s infinite linear;
}

.code-block::before {
  content: 'chaz@slick:~$';
  color: hsl(120, 100%, 40%);
  font-weight: 900;
  margin-right: 1rem;
  user-select: none;
}

#container {
  max-width: 30rem;
  margin: 0 auto;
}

#menu {
  min-height: 4.2rem;
  box-shadow: 0 4px 2px -2px #000;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr auto;
  position: relative;
}

#github {
  display: inline-block;
  width: 3rem;
}

#github .icon {
  height: 3rem;
  animation: wiggle 2s infinite;
  bottom: -1.9rem;
  transition: bottom 100ms linear;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
}

#github:hover .icon {
  animation: none;
  bottom: 0;
}

#github .label {
  color: #000;
  position: absolute;
  transform: translateY(-150%);
  transition: transform 100ms;
}

#github:hover .label {
  transform: translateY(0%);
}

#settings {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

#useSlickPress .section-demo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

#useSlickPress .section-demo .item {
  height: 4rem;
  display: inline-block;
  text-wrap: nowrap;
  overflow: visible;
}

#select {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  background: hsl(185, 28%, 40%);
  border-radius: 0.25rem;
  padding: 0.5rem;
  color: #fff;
  min-height: 3rem;
}

#select .button {
  border-radius: 50%;
  border: none;
  width: 1rem;
  height: 1rem;
  padding: 0.5rem;
  box-sizing: content-box;
  cursor: pointer;
}

#select .unselect {
  background: red;
  fill: #fff;
}
#grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 6rem);
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.item {
  background: #c08497;
  cursor: pointer;
  height: 6rem;
  text-align: center;
  overflow: hidden;
  display: flex;
  color: #fff;
  border-radius: 1rem;
  position: relative;
  box-sizing: border-box;
  border: 0px solid transparent;
  transition:
    border 200ms linear,
    transform 200ms linear;
  padding: 0.5rem;
  flex: 1;
  align-items: center;
}

.item.selected {
  transform: scale(0.8);
  border: 5px solid #00e1ffa4;
}

.item.clicked {
  animation: nice-gradient 500ms linear forwards;
  background: #c08497 radial-gradient(#c08497 30%, #f7e3af80 60%, #c08497 70%)
    no-repeat;
  background-size: 1% 1%;
  background-position: center;
}

@media (min-width: 20rem) {
  #useSlickPress .section-demo {
    flex-direction: row;
  }
}

@keyframes nice-gradient {
  0% {
    background-size: 10% 10%;
  }
  50% {
    background-size: 100% 100%;
  }
  100% {
    background-size: 300% 300%;
  }
}

@keyframes wiggle {
  0% {
    transform: rotate(-10deg);
  }
  10% {
    transform: rotate(10deg);
  }
  20% {
    transform: rotate(0deg);
  }
}

@keyframes shine {
  0% {
    background-position: -100%;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 200%;
  }
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');

body {
  min-height: 100%;
  background: #b0d0d3;
}
</style>
