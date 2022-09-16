import * as React from 'react';

export type PublishContentProps = {
  tags: any;
  setTagChange: (tags: string[]) => void;

  isSchedule: boolean;
  setSchedule: React.Dispatch<React.SetStateAction<boolean>>;

  datePickerRef: any;
  onPublishClick: () => void;
};
