import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Dialog.module.scss';
import Card from '../Card';
import fade from '../../animation/dialogBgFadeAnimation.module.scss';
import dialogReveal from '../../animation/dialogRevealAnimation.module.scss';

import PropTypes from 'prop-types';

const Dialog = ({
  children,
  visible,
  header,
  onEnter,
  onExited,
  onOutsideClick,
  positiveLabel,
  onPositiveClicked,
  negativeLabel,
  onNegativeClicked,
}) => {
  const handleBackgroundClick = ({ target }) => {
    if (target.id === 'bg' && onOutsideClick) onOutsideClick();
  };

  return (
    <CSSTransition
      in={visible}
      timeout={400}
      classNames={fade}
      unmountOnExit
      onEnter={onEnter}
      onExited={onExited}
    >
      <div id="bg" className={styles.container} onClick={handleBackgroundClick}>
        <CSSTransition
          in={visible}
          appear
          timeout={400}
          classNames={dialogReveal}
        >
          <Card superClass={styles.dialog}>
            <div className={styles.header}>{header}</div>
            {children}
            <div className={styles.buttonContainer}>
              {onNegativeClicked && (
                <div
                  className={`${styles.button} ${styles.negative}`}
                  onClick={onNegativeClicked}
                >
                  {negativeLabel}
                </div>
              )}
              {onPositiveClicked && (
                <div
                  className={`${styles.button} ${styles.positive}`}
                  onClick={onPositiveClicked}
                >
                  {positiveLabel}
                </div>
              )}
            </div>
          </Card>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  header: PropTypes.string,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  onOutsideClick: PropTypes.func,
  positiveLabel: PropTypes.string,
  onPositiveClicked: PropTypes.func,
  negativeLabel: PropTypes.string,
  onNegativeClicked: PropTypes.func,
};

export default Dialog;
