import React from 'react';

export default React.createClass({

  displayName: 'ReactIconSVGSymbol',

  propTypes: {
    fileURL: React.PropTypes.string.isRequired,
    symbolId: React.PropTypes.string.isRequired,
    iconClassName: React.PropTypes.string
  },

  render() {

    let fileURL = this.props.fileURL || '';
    let xlinkHref = `${ fileURL }#${ this.props.symbolId}`;

    return (
      <svg className={ this.props.iconClassName }>
        <use xlinkHref={ xlinkHref } />
      </svg>
    );
  }
});
