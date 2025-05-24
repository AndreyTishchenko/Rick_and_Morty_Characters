import { useRef, useEffect, useState, useCallback } from 'react';
import { ScrollWrapper, CustomScrollbar } from './scroll.styled';

export function ScrollArea({ maxHeight = 240, children }) {
  const scrollRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTop = 0;
      setScrollTop(0);
      setScrollHeight(el.scrollHeight);
      setClientHeight(el.clientHeight);
    }
  }, [children]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setScrollTop(el.scrollTop);
  }, []);

  const thumbHeight = Math.max(
    (clientHeight / scrollHeight) * clientHeight,
    20
  );
  const thumbTop = (scrollTop / scrollHeight) * clientHeight;

  return (
    <div style={{ position: 'relative', maxHeight }}>
      <ScrollWrapper
        ref={scrollRef}
        onScroll={handleScroll}
        style={{ maxHeight }}
      >
        {children}
      </ScrollWrapper>
      {scrollHeight > clientHeight && (
        <CustomScrollbar style={{ height: thumbHeight, top: thumbTop }} />
      )}
    </div>
  );
}
