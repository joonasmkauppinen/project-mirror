const handleScroll = container => {
  const element = container.current;
  const offsetHeight = element.offsetHeight;
  const scrollHeight = element.scrollHeight;
  if (element.scrollTop === 0) {
    element.scrollTop += 1;
  }
  if (element.scrollTop + offsetHeight === scrollHeight) {
    element.scrollTop -= 1;
  }
};

export default handleScroll;
