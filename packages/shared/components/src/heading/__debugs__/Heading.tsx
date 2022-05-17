/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Heading from '../Heading';

const HeadingDebug = () => {
  return (
    <>
      <Heading type="section-title">This is section</Heading>
      <Heading type="small-title">This is small</Heading>
      <Heading type="medium-title">This is medium</Heading>
      <Heading type="large-title">This is large</Heading>
      <Heading type="major-heading">This is major</Heading>
      <Heading type="normal-heading">This is normal</Heading>
      <Heading type="minor-heading">This is minor</Heading>
    </>
  );
};

export default HeadingDebug;
