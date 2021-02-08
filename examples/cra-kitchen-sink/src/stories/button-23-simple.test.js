import * as React from 'react';
import renderer from 'react-test-renderer';
import * as button from './button-23.stories';

Object.entries(button).forEach(([name, Story]) => {
  if (typeof Story !== 'function') return;

  test(`button ${name} matches snapshot`, () => {
    const result = renderer.create(<Story />);
    expect(result.toJSON()).toMatchSnapshot();
  });
});
