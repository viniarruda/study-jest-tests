import React from 'react';
import {mount} from 'enzyme';

import commentsReducer from '../../src/store/comments/reducers';
import {SAVE_COMMENT} from '../../src/store/comments/action-types';

import Root from '../../src/Root';
import CommentBox from '../../src/screens/components/CommentBox';

describe('Implementation test redux', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <CommentBox />
      </Root>,
    );
  });

  it('handles actions of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'New Comment',
    };

    const newState = commentsReducer({}, action);

    expect(newState).toEqual({list: ['New Comment']});
  });
});
