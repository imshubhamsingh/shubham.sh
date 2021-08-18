import * as React from 'react';

function useDrag(ref: React.RefObject<HTMLElement>) {
  const data = React.useRef({
    startX: 0,
    scrollLeft: 0,
    isDown: false,
  }).current;

  const mouseDownCb = React.useCallback(
    (e: MouseEvent) => {
      const el = ref.current as HTMLElement;
      data.isDown = true;
      el.classList.add('active');
      data.startX = e.pageX - el.offsetLeft;
      data.scrollLeft = el.scrollLeft;
    },
    [data, ref],
  );

  const mouseLeaveCb = React.useCallback(
    (e: MouseEvent) => {
      const el = ref.current as HTMLElement;
      data.isDown = false;
      el.classList.remove('active');
    },
    [data, ref],
  );

  const mouseMoveCb = React.useCallback(
    (e: MouseEvent) => {
      // Return if mouse was not down before
      if (!data.isDown) return;
      e.preventDefault();
      const el = ref.current as HTMLElement;
      const x = e.pageX - el.offsetLeft;
      const dx = x - data.startX;
      el.scrollLeft = data.scrollLeft - dx;
      data.isDown = true;
      data.startX = e.pageX - el.offsetLeft;
      data.scrollLeft = el.scrollLeft;
    },
    [data, ref],
  );

  React.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    el.addEventListener('mousedown', mouseDownCb);
    el.addEventListener('mouseleave', mouseLeaveCb);
    el.addEventListener('mouseup', mouseLeaveCb);
    el.addEventListener('mousemove', mouseMoveCb);

    return () => {
      el.removeEventListener('mousedown', mouseDownCb);
      el.removeEventListener('mouseleave', mouseLeaveCb);
      el.removeEventListener('mouseup', mouseLeaveCb);
      el.removeEventListener('mousemove', mouseMoveCb);
    };
  }, [mouseDownCb, mouseLeaveCb, mouseMoveCb, ref]);
}

export default useDrag;
