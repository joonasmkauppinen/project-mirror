import slideUp from '../animation/slideUpAnimation.module.scss';
import slideDown from '../animation/slideDownAnimation.module.scss';

// return values ['duration', 'animation']
const getTransitionParams = action => {
  switch (action) {
    case 'PUSH':
      return [300, slideUp];
    case 'POP':
      return [300, slideDown];
    default:
      return [0, {}];
  }
};

export { getTransitionParams };
