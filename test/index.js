import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import ReactIconSVGSymbol from '../src/index.jsx';

test('Available Props', nest => {

  nest.test('All Props: fileURL, symbolId, iconClassName', assert => {

    let props = {
      fileURL: 'http://localhost:8080/icon-svg-symbol.svg',
      symbolId: 'icon-skill',
      iconClassName: 'icon-skill-klass'
    };

    let $ = shallow(<ReactIconSVGSymbol { ...props } />);
    let output = $.find('.icon-skill-klass').html();
    let expected = '<svg class="icon-skill-klass"><use xlink:href="http://localhost:8080/icon-svg-symbol.svg#icon-skill"></use></svg>';

    assert.equal(output, expected, `should be rendered as expected: ${ expected }`);
    assert.end();
  });

  nest.test('Required Props: fileURL, symbolId', assert => {

    let props = {
      fileURL: 'http://localhost:8080/icon-svg-symbol.svg',
      symbolId: 'icon-skill'
    };

    let $ = shallow(<ReactIconSVGSymbol { ...props } />);
    let output = $.find('svg').html();
    let expected = '<svg><use xlink:href="http://localhost:8080/icon-svg-symbol.svg#icon-skill"></use></svg>';

    assert.equal(output, expected, `should be rendered as expected: ${ expected }`);
    assert.end();
  });
});

test('Update according to props change', nest => {
  nest.test('Change xlinkHref on use element', assert => {
    let props = {
      fileURL: 'http://localhost:8080/icon-svg-symbol.svg',
      symbolId: 'icon-skill',
      iconClassName: 'icon-skill-klass'
    };

    let newSymbolIdProps = {
      fileURL: 'http://localhost:8080/icon-svg-symbol.svg',
      symbolId: 'icon-thumbup',
      iconClassName: 'icon-skill-thumbup'
    };

    let newFileURLProps = {
      fileURL: 'http://localhost:9090/icon-svg-symbol.svg',
      symbolId: 'icon-thumbup',
      iconClassName: 'icon-skill-thumbup'
    };

    let $ = shallow(<ReactIconSVGSymbol { ...props } />);

    $.setProps(newSymbolIdProps);

    let output = $.find('svg').html();
    let expected = '<svg class="icon-skill-thumbup"><use xlink:href="http://localhost:8080/icon-svg-symbol.svg#icon-thumbup"></use></svg>';

    assert.equal(output, expected, `should be rendered as expected: ${ expected }`);

    $.setProps(newFileURLProps);

    output = $.find('svg').html();
    expected = '<svg class="icon-skill-thumbup"><use xlink:href="http://localhost:9090/icon-svg-symbol.svg#icon-thumbup"></use></svg>';

    assert.equal(output, expected, `should be rendered as expected: ${ expected }`);
    assert.end();
  });
})
