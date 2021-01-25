export const scrollToBottom = () => {
  let prevScrollPosition = 0;

  return (target: HTMLElement) => {
    const tmp = prevScrollPosition;

    const element = target as HTMLElement;

    const scrollTop = element.scrollTop;

    prevScrollPosition = scrollTop;

    const result = tmp - scrollTop;

    return result < 0 && scrollTop > 20;
  };
};
