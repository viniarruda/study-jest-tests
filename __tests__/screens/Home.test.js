import React from 'react';
import {mount} from 'enzyme';

import CommentBox from '../../src/screens/components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('Unit test', () => {
  it('has textinput and button', () => {
    expect(wrapped.find('textInput').length).toEqual(1);
  });
});
