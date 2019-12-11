import React from 'react';
import {mount} from 'enzyme';

import CommentBox from '../../src/screens/components/CommentBox';

describe('Unit test with CommentBox', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(<CommentBox />);
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('has TextInput and Button', () => {
    expect(wrapped.find('Button').length).toEqual(1);
    expect(
      wrapped.find('[testID="comment-box-textinput"]').first().length,
    ).toEqual(1);
  });

  it('has a textinput that users can type in', () => {
    wrapped
      .find('[testID="comment-box-textinput"]')
      .first()
      .prop('onChangeText')('new comment');

    wrapped
      .find('[testID="comment-box-textinput"]')
      .first()
      .update();

    expect(
      wrapped
        .find('[testID="comment-box-textinput"]')
        .first()
        .prop('value'),
    ).toEqual('new comment');
  });
});
