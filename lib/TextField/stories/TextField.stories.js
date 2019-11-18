import { storiesOf } from '@storybook/react';
import React from 'react';
import withReadme from 'storybook-readme/with-readme';
import BasicUsage from './BasicUsage';
import Stateful from './Stateful';
import readme from '../Readme.md';

storiesOf('TextField', module)
  .addDecorator(withReadme(readme))
  .add('Basic Usage', BasicUsage)
  .add('Clear field', () => <Stateful />);
