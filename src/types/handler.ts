import { Dispatcher } from "./ui";

export interface CustomInputProps {
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ClickState {
  isClicked: boolean
  onClicked: Dispatcher<boolean>
}
