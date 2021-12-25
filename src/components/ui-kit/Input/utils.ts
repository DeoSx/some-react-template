import React, { ForwardedRef, MutableRefObject } from 'react';

type Ref<T> = ForwardedRef<T> | MutableRefObject<T>;

export function useCombinedRefs<T>(...refs: Ref<T>[]): MutableRefObject<T | null> {
  const targetRef = React.useRef<T | null>(null);

  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current || null);
      } else {
        // eslint-disable-next-line
        ref.current = targetRef.current || null;
      }
    });
  }, [refs]);

  return targetRef;
}
