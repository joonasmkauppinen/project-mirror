import slideUp from '../animation/slideUpAnimation.module.scss';
import slideDown from '../animation/slideDownAnimation.module.scss';

// return values ['duration', 'animation']
const getTransitionParams = action => {
  switch (action) {
    case 'PUSH':
      return [400, slideUp];
    case 'POP':
      return [400, slideDown];
    default:
      return [0, {}];
  }
};

export { getTransitionParams };
