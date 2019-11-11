import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import TabContainer from '../../../hoc/TabContainer';
import { t } from '../../../utils/translate';
import styles from './HomeTab.module.scss';

const HomeTab = ({ visible }) => (
  <TabContainer active={visible}>
    <Header>
      <div className={styles.headerLight}>{t('HOME.title')}</div>
      {'\n'}
      User
    </Header>
    <Text>1 This is the home tab</Text>
    <Text>2 This is the home tab</Text>
    <Text>3 This is the home tab</Text>
    <Text>4 This is the home tab</Text>
    <Text>5 This is the home tab</Text>
    <Text>6 This is the home tab</Text>
    <Text>7 This is the home tab</Text>
    <Text>8 This is the home tab</Text>
    <Text>9 This is the home tab</Text>
    <Text>10 This is the home tab</Text>
    <Text>11 This is the home tab</Text>
    <Text>12 This is the home tab</Text>
    <Text>13 This is the home tab</Text>
    <Text>14 This is the home tab</Text>
    <Text>15 This is the home tab</Text>
    <Text>16 This is the home tab</Text>
    <Text>17 This is the home tab</Text>
    <Text>18 This is the home tab</Text>
    <Text>19 This is the home tab</Text>
    <Text>20 This is the home tab</Text>
    <Text>21 This is the home tab</Text>
    <Text>22 This is the home tab</Text>
    <Text>23 This is the home tab</Text>
    <Text>24 This is the home tab</Text>
    <Text>25 This is the home tab</Text>
    <Text>26 This is the home tab</Text>
    <Text>27 This is the home tab</Text>
    <Text>28 This is the home tab</Text>
    <Text>29 This is the home tab</Text>
    <Text>30 This is the home tab</Text>
    <Text>31 This is the home tab</Text>
    <Text>32 This is the home tab</Text>
    <Text>33 This is the home tab</Text>
    <Text>34 This is the home tab</Text>
    <Text>35 This is the home tab</Text>
    <Text>36 This is the home tab</Text>
  </TabContainer>
);

HomeTab.propTypes = {
  visible: PropTypes.bool,
};

export default HomeTab;
