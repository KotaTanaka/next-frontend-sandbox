/** メディアクエリフック */
const useMedia = () => {
  /** ブレークポイント */
  const BREAKPOINT = 600;

  /** SPサイズかどうか */
  const isSP = window.matchMedia(`screen and (max-width: ${BREAKPOINT - 1}px)`);

  /** PCサイズかどうか */
  const isPC = window.matchMedia(`screen and (min-width: ${BREAKPOINT}px)`);

  return {
    isSP,
    isPC,
  };
};

export default useMedia;
