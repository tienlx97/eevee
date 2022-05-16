/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { r } from '../List';
import { InlineCode } from '../../inlinecode';

const ListDebug = () => {
  return (
    <r.ul>
      <r.li>
        The root context
        <r.ul>
          <r.li>
            <InlineCode>{'<header>'}</InlineCode>
          </r.li>
          <r.li>
            <InlineCode>{'<main>'}</InlineCode>
            <r.ul>
              <r.li>
                <InlineCode>{'<div class="tooltip>'}</InlineCode>
              </r.li>
            </r.ul>
          </r.li>
        </r.ul>
      </r.li>
    </r.ul>
  );
};

export default ListDebug;
