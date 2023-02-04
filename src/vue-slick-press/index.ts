import type { DirectiveBinding } from 'vue';
import './style.css';

type Interactions =
  | 'click'
  | 'contextmenu'
  | 'touchstart'
  | 'touchend'
  | 'touchcancel'
  | 'touchmove'
  | 'mousedown'
  | 'mouseleave';

const noSelectClass = 'slick-press-no-context';
const defaults = {
  waitTime: 300,
  disableRightClickMenu: false,
};

let timeout: null | ReturnType<typeof setTimeout> = null;

const clear = (): void => {
  // Clear the timeout if it's active
  if (timeout !== null) clearTimeout(timeout);
  timeout = null;
};

const prevent = (event: Event): void => {
  event.preventDefault();
};

// TODO: I'm sure there's some sort of Vue-TS thing that
// can give accurate typings for all this, but for now...
export default {
  beforeMount(
    el: HTMLElement,
    binding: Partial<
      DirectiveBinding<{
        longPress: () => void;
        click: () => void;
        press: () => void;
        wait: number;
        disableRightClickMenu: boolean;
      }>
    >,
  ) {
    const {
      // callbacks
      longPress,
      click,
      press,
      // values
      wait,
      disableRightClickMenu,
    } = {
      // load defaults then override with the binding
      ...defaults,
      ...binding.value,
    };

    const onPress = (event: MouseEvent | TouchEvent): void => {
      event.stopPropagation();

      // only left click or touch
      if (event.which > 1) return;

      timeout = setTimeout(() => {
        timeout = null;

        if (longPress !== undefined) {
          longPress();
        }
      }, wait);

      if (press !== undefined) {
        press();
      }
    };

    const onClick = (event: Event): void => {
      if (timeout !== null && click !== undefined) {
        click();
      }

      clear();
    };

    const outOfBoundsClear = (event: TouchEvent): void => {
      // no need to continue if timeout is already expired
      if (timeout === null) return;

      const touch = event.targetTouches[0];
      const elementAtPoint = document.elementFromPoint(
        touch.pageX,
        touch.pageY,
      );

      // check if the element under the pointer is the binded element
      // or a descendent
      if (!el.isSameNode(elementAtPoint) && !el.contains(elementAtPoint)) {
        clear();
      }
    };

    let events: Array<[Interactions, (event: any) => void]> = [
      ['click', onClick],
    ];

    // is using touch events
    if ('ontouchstart' in document.documentElement) {
      events = [
        ...events,
        ['touchstart', onPress],
        ['touchend', clear],
        ['touchcancel', clear],
        // if the input leaves the area, cancel long press
        ['touchmove', outOfBoundsClear],
      ];
    }

    // using mouse events
    if ('onmousedown' in document.documentElement) {
      events = [...events, ['mousedown', onPress], ['mouseleave', clear]];
    }

    if (disableRightClickMenu) {
      events.push(['contextmenu', prevent]);
    }

    events.forEach((event) => {
      el.addEventListener(event[0], event[1]);
    });

    // for removing them later
    // el.events = events;
    el.classList.add(noSelectClass);
  },

  updated(el: HTMLElement) {
    el.classList.add(noSelectClass);
  },

  /* unbind(el){
    // cleanup
    el.classList.remove(noSelectClass);
    el.events.forEach(event => el.removeEventListener(event[0], event[1]));
    el.events = null;
  } */
};
