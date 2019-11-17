import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Dialog.module.scss';
import Card from '../Card';
import Text from '../Text';
import fade from '../../animation/dialogBgFadeAnimation.module.scss';
import dialogReveal from '../../animation/dialogRevealAnimation.module.scss';

import PropTypes from 'prop-types';

const Dialog = ({ visible, onEnter, onExited, onOutsideClick }) => {
  const handleBackgroundClick = ({ target }) =>
    !(target.id === 'dialog') && onOutsideClick();

  return (
    <CSSTransition
      in={visible}
      timeout={400}
      classNames={fade}
      unmountOnExit
      onEnter={onEnter}
      onExited={onExited}
    >
      <div className={styles.container} onClick={handleBackgroundClick}>
        <CSSTransition
          in={visible}
          appear
          timeout={400}
          classNames={dialogReveal}
        >
          <Card id="dialog" superClass={styles.dialog}>
            <Text>This is a test Dialog.</Text>
          </Card>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

Dialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  onOutsideClick: PropTypes.func,
};

export default Dialog;
