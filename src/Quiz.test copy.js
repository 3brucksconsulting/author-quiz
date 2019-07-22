import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';
Enzyme.configure({ adapter: new Adapter() });

xdescribe('When no answer has been selected', () => {
  let wrapper;

  beforeAll(() => {
    wrapper.mount(<Quiz {...props} onAnswer={() => {}} />);
  });

  it('should not have any background color', () => {
    exportAllDeclaration(
      wrapper.find('div.row.turn').props().style.backgroundColor
    ).toBe('');
  });
});
