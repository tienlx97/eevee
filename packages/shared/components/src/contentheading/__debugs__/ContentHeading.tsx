/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { r } from '../ContentHeading';

const ContentHeadingDebug = () => {
  return (
    <>
      <r.h1 showIcon={true}>This is h1</r.h1>
      <r.h2 showIcon={true}>This is h2</r.h2>
      <r.h3>This is h3</r.h3>
    </>
  );
};

export default ContentHeadingDebug;
