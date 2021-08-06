import { Dispatcher, Location } from "./ui";

export interface TypedCustomInputProps extends Location {
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ClickState {
  isClicked: boolean
  onClicked: Dispatcher<boolean>
}
