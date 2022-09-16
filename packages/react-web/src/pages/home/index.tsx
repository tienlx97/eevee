import * as React from 'react';
import { MiddleLayout } from '@layout/index';
import { ComingSoon } from '@components/coming-soon/index';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <MiddleLayout>
      {/* <Link
        onClick={() => {
          history.pushState({ nick_name: 'tienlx97' }, 'pushState example');
        }}
        to="/b/this-is-a-123"
      >
        Blog 1
      </Link>
      <Link to="/@tienlx97">author 1</Link>
      <Link to="/p/CsEo6HtgBQA/edit">edit</Link> */}
      <ComingSoon date="2022-10-08 00:00:00" />
    </MiddleLayout>
  );
};
