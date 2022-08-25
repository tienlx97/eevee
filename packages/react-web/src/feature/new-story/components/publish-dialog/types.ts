import * as React from 'react';

export type PublishDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;

  tags: any;
  setTagChange: (tags: string[]) => void;

  isSchedule: boolean;
  setSchedule: React.Dispatch<React.SetStateAction<boolean>>;

  datePickerRef: any;
  onPublishClick: () => void;
};
