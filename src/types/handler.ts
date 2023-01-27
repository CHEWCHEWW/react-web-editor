import { ReactNode } from "react";
import { Dispatcher, Location } from "./ui";

export interface TypedCustomInputProps extends Location {
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  children?: ReactNode;
}

export interface ClickState {
  isClicked: boolean;
  onClicked: Dispatcher<boolean>;
}
