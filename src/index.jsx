import React from 'react';
import SVGResourceHelper from './svg-resource-helper';

export default React.createClass({

  displayName: 'ReactIconSVGSymbol',

  propTypes: {
    fileURL: React.PropTypes.string.isRequired,
    symbolId: React.PropTypes.string.isRequired,
    iconClassName: React.PropTypes.string
  },

  getInitialState() {
    const fileURL = this.props.fileURL || '';
    const xlinkHref = `${ fileURL }#${ this.props.symbolId }`;

    return {
      xlinkHref
    };
  },

  componentDidMount() {
    let useElement = this.refs.useElement;

    if (!useElement) {
      return;
    }

    let useElementBCR;
    let iconDisplayed = false;

    // External SVG Resource Detection
    try {
      useElementBCR = useElement.getBoundingClientRect();

      if (useElementBCR && useElementBCR.width !== 0 && useElementBCR.height !== 0) {
        iconDisplayed = true;
      }

    } catch (e) {
      // failed to get bounding rectangle of the use element
      useElementBCR = false;
    }

    if (useElementBCR) {

      if (!iconDisplayed) {
        SVGResourceHelper.load(this.props.fileURL, () => {
          this.setState({
            xlinkHref: `#${ this.props.symbolId }`
          });
        });
      }

    } else {
      // console.log('Older browsers which don\'t even support <use> element, we\'ll deal with that later');
    }
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.symbolId === this.props.symbolId && nextProps.fileURL === this.props.fileURL) {
      return;
    }

    const currentXLinkHref = this.state.xlinkHref;
    let nextXLinkHref = '';

    if (currentXLinkHref.indexOf('#') === 0 && nextProps.fileURL === this.props.fileURL) {
      nextXLinkHref = `#${ nextProps.symbolId }`;
    } else {
      nextXLinkHref = `${ nextProps.fileURL }#${ nextProps.symbolId }`;
    }

    this.setState({
      xlinkHref: nextXLinkHref
    });
  },

  shouldComponentUpdate(nextProps, nextState) {
    return !(nextProps.symbolId === this.props.symbolId &&
        nextProps.fileURL === this.props.fileURL &&
        nextProps.iconClassName === this.props.iconClassName &&
        nextState.xlinkHref === this.state.xlinkHref);
  },

  render() {
    return (
      <svg className={ this.props.iconClassName }>
        <use xlinkHref={ this.state.xlinkHref } ref="useElement" />
      </svg>
    );
  }
});
