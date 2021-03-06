/**
 * Icon: icon position example
 */

import React, { Fragment } from 'react';
import Icon from '../Icon';

export default () => (
  <Fragment>
    <Icon
      icon="trash"
    >
      {'iconPosition="start" (default)'}
    </Icon>
    <br />
    <br />
    <Icon
      icon="trash"
      iconPosition="end"
    >
      {'iconPosition="end"'}
    </Icon>
  </Fragment>
);
