export interface ICheckBoxProps {
  size?: number;
  checked: boolean;
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
