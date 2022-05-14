export interface IToolbarProps {
  title?: string;
  isFullscreened?: boolean;
  handleToggleFullscreen?: () => void;
  handleReset: () => void;
  handleFormat: () => void;
}
