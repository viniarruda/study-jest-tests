import React from 'react';
import {mount} from 'enzyme';

import commentsReducer from '../../src/store/comments/reducers';
import {SAVE_COMMENT} from '../../src/store/comments/action-types';

import Root from '../../src/Root';
import ReposBox from '../../src/screens/Home/components/ReposBox';

describe('Implementation test redux', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <ReposBox />
      </Root>,
    );
  });

  it('handles actions of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'New Comment',
    };

    const newState = commentsReducer({list: []}, action);

    expect(newState).toEqual({list: ['New Comment']});
  });

  it('handles action with unknown type', () => {
    const newState = commentsReducer({list: []}, {type: 'ASDADSADAA'});

    expect(newState).toEqual({list: []});
  });
});
