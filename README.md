# Vue Slick Press

A simple Vue 3 directive that intercepts typical clicks and "long presses". Intended to work across touch browsers and mouse browsers.

## Usage

First, import the directive like so and configure your events:

```ts
import vSlickPress from 'vue-slick-press';

function singleClick () {
  alert('click detected!');
}

function longPress () {
  alert('long press detected!');
}
```

And then use it on a component.

```vue
<div
  v-slickPress="{
    click: singleClick,
    longPress: longPress,
    wait: 500,
    disableRightClickMenu: true
  }"
> click/press here
</div>
```

## API

There are a few configurable options per directive, these are:

| Option                       | Type        | Description                                                                                                 |
|------------------------------|-------------| ------------------------------------------------------------------------------------------------------------|
| click                        | () => void  | Function to call when clicked.                                                                              |
| longPress                    | () => void  | Function to call when a press extends into a long press.                                                    |
| press                        | () => void  | Function to call whenever the component is 'pressed'. Equivalent of touchdown/mousedown.                    |
| wait                         | number      | The period of time in miliseconds from first press to when to call a long press.                            |
| disableRightClickMenu        | boolean     | If enabled, custom css will be applied to prevent the context menu appearing when held down/right click.    |

## TODOs

- Fix the demo so it actually works haha. Right now it's working in the project it spawned from.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
