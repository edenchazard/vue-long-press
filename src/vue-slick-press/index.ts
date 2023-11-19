import { type Ref } from 'vue';
import { onMounted } from 'vue';
import type { LongPressEvent, useSlickPressOptions } from './types';
import './style.css';

const noSelectClass = 'vue-slick-press-no-select';

let timeout: number;
let longPressActivated: boolean = false;

function prevent(event: Event) {
  event.preventDefault();
}

function isRightMouseButton(e: PointerEvent): boolean {
  return e.pointerType === 'mouse' && e.button === 2;
}

function clearPress() {
  clearTimeout(timeout);
  longPressActivated = false;
}

function handleDown<T extends Event>(
  e: T,
  wait: number,
  onPress?: (e: LongPressEvent) => void,
  onLongPress?: (e: LongPressEvent) => void,
) {
  longPressActivated = false;

  if (e instanceof PointerEvent && isRightMouseButton(e)) return;

  timeout = window.setTimeout(() => {
    longPressActivated = true;
    if (onLongPress) {
      onLongPress(e);
    }
  }, wait);

  if (onPress) {
    onPress(e);
  }
}

function handleUp<T extends Event>(
  e: T,
  onClick?: (e: LongPressEvent) => void,
) {
  if (e instanceof PointerEvent && isRightMouseButton(e)) return;

  // it's a click if the threshold for a long press hasn't been
  // activated
  clearTimeout(timeout);

  if (!longPressActivated && onClick) {
    setTimeout(() => onClick(e), 20);
  }
}

export function useSlickPress(
  el: Ref<HTMLElement | undefined>,
  options?: useSlickPressOptions,
) {
  const _options = {
    wait: 500,
    disableRightClickMenu: true,
    ...options,
  };

  onMounted(() => {
    if (!el.value) return;

    el.value.classList.add(noSelectClass);

    el.value.addEventListener('pointerdown', (e) =>
      handleDown(e, _options.wait, _options.onPress, _options.onLongPress),
    );

    el.value.addEventListener('pointerup', (e) =>
      handleUp(e, _options.onClick),
    );

    el.value.addEventListener('pointerout', clearPress);

    el.value.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.code === 'Space') handleUp<KeyboardEvent>(e);
    });

    if (_options.disableRightClickMenu) {
      el.value.addEventListener('contextmenu', prevent);
    }

    el.value.classList.add(noSelectClass);
  });
}

export function useSlickPressContainer(
  container: Ref<HTMLElement | undefined>,
  options?: useSlickPressOptions,
) {
  const _options = {
    wait: 500,
    disableRightClickMenu: true,
    ...options,
  };

  function isSlickItem(e: Event) {
    return e.target instanceof HTMLElement && 'slick' in e.target.dataset;
  }

  onMounted(() => {
    if (!container.value) return;

    container.value.classList.add(noSelectClass);

    container.value.addEventListener('pointerdown', (e) => {
      if (!isSlickItem(e)) return;

      handleDown(e, _options.wait, _options.onPress, _options.onLongPress);
    });

    container.value.addEventListener('pointerup', (e) => {
      if (!isSlickItem(e)) return;

      handleUp(e, _options.onClick);
    });

    container.value.addEventListener('pointerout', (e) => {
      if (!isSlickItem(e)) return;

      clearPress();
    });

    container.value.addEventListener('keyup', (e: KeyboardEvent) => {
      if (!isSlickItem(e)) return;

      if (e.code === 'Space') handleUp<KeyboardEvent>(e);
    });

    if (_options.disableRightClickMenu) {
      container.value.addEventListener('contextmenu', prevent);
    }

    container.value.classList.add(noSelectClass);
  });
}
