import { useEffect } from 'react';

type OwnProps = {
  disabled?: boolean;
};

const useScrollDisabler = ({ disabled }: OwnProps) => {
  useEffect(() => {
    if (!disabled) {
      return;
    }

    const { overflow, position, width, height, top } = document.body.style;

    // const oldOverflow = document.body.style.overflow;
    // const oldPosition = document.body.style.position;
    // const oldWidth = document.body.style.width;
    // const oldHeight = document.body.style.height;
    // const oldTop = document.body.style.top;

    const oldScrollY = window.scrollY;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = `calc(100% + ${oldScrollY}px)`;
    document.body.style.top = `-${oldScrollY}px`;

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.position = position;
      document.body.style.width = width;
      document.body.style.height = height;
      document.body.style.top = top;

      window.scrollTo(0, oldScrollY);
    };
  }, [disabled]);
};

export { useScrollDisabler };
export default useScrollDisabler;
