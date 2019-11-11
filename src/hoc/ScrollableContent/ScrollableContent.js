import React from 'react';
import PropTypes from 'prop-types';
import style from './ScrollableContent.module.scss';
// import handleScroll from '../../utils/scrollHandler';

const ScrollableContent = ({ children }) => {
  // const ref = useRef(null);

  // useEffect(() => {
  //   ref.current.addEventListener('touchstart', () => {
  //     console.log('handleScroll()');
  //     handleScroll(ref);
  //   });
  // }, []);

  return (
    <div
      // ref={ref}
      // onScroll={() => handleScroll(ref)}
      className={style.scrollableContent}
    >
      {children}
    </div>
  );
};

ScrollableContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollableContent;
