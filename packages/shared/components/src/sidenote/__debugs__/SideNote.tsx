/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import SideNote from '../SideNote';
import { Paragraph } from '../../paragraph';
const SideNoteDebug = () => {
  return (
    <>
      <SideNote type="warning" title="It's like semantic versioning">
        <Paragraph>
          I recognize that not everyone has experience with software like
          Photoshop / Figma / Sketch. If the analogy above didn't resonate, I
          have another one that you're more likely to be familiar with: semantic
          versioning.
        </Paragraph>
        <Paragraph>
          I recognize that not everyone has experience with software like
          Photoshop / Figma / Sketch. If the analogy above didn't resonate, I
          have another one that you're more likely to be familiar with: semantic
          versioning.
        </Paragraph>
      </SideNote>
    </>
  );
};

export default SideNoteDebug;
