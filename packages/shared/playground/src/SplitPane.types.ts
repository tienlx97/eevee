export interface ISplitPaneProps {
  appendClasses?: string;
  splitRatio: number;
  isFullscreened?: boolean;
  leftChild: React.ReactNode;
  rightChild: React.ReactNode;
}
