type LongPressEvent<T extends Event = Event> = T;

interface useSlickPressOptions {
  wait?: number;
  disableRightClickMenu?: boolean;
  onLongPress?: (e: LongPressEvent) => void;
  onClick?: (e: LongPressEvent) => void;
  onPress?: (e: LongPressEvent) => void;
}

export type { LongPressEvent, useSlickPressOptions };
