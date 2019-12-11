import React from 'react';
import {mount} from 'enzyme';

import CommentBox from '../../src/screens/components/CommentBox';
import Root from '../../src/Root';

describe('Unit test with CommentBox', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <CommentBox />
      </Root>,
    );
    debugger;
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
    const wrappedTextInput = () =>
      wrapped.find('[testID="comment-box-textinput"]').first();

    wrappedTextInput().prop('onChangeText')('new comment');

    wrappedTextInput().update();

    expect(wrappedTextInput().prop('value')).toEqual('new comment');
  });
});
