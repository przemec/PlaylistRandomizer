import React from "react";

const useResizeObserverAsRef = (onResize) => {
  const resizeObserver = React.useRef(new ResizeObserver((entries) => onResize(entries[0])));
  const resizedContainerRef = React.useCallback(
    (container) => {
      if (container !== null) {
        resizeObserver.current.observe(container);
      } else {
        if (resizeObserver.current) resizeObserver.current.disconnect();
      }
    },
    [resizeObserver]
  );
  return resizedContainerRef;
};

export default useResizeObserverAsRef;
