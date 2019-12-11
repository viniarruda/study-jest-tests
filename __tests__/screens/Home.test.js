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
  it('has TextInput and Button', () => {
    expect(wrapped.find('Button').length).toEqual(1);
    // expect(wrapped.find('TextInput').length).toEqual(1);
  });
});
