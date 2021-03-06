import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';

import { createBootstrapComponent } from './ThemeProvider';

class ModalBody extends React.Component {
  static propTypes = {
    bsPrefix: PropTypes.string,
    as: elementType,
  };

  static defaultProps = {
    as: 'div',
  };

  render() {
    const { as: Component, bsPrefix, className, ...props } = this.props;

    return <Component {...props} className={classNames(className, bsPrefix)} />;
  }
}

export default createBootstrapComponent(ModalBody, 'modal-body');
