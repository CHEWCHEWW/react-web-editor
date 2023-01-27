import React, { ReactNode } from "react";

export interface ComponentLocation {
  left: number;
  top: number;
}

export interface ComponentStyle extends ComponentLocation {
  width: number;
  height: number;
}

export type DragAndDropItem = React.ReactChild | React.ReactFragment;

export interface InnerHTML {
  __html: string;
}

export interface ResizeProps extends ComponentStyle {
  children?: React.ReactElement;
}

export interface ComponentSize {
  width: number;
  height: number;
}

export interface EditorProps extends ComponentStyle {
  parentStyle?: ComponentSize;
  unit: string;
  children?: ReactNode;
}

export interface EditorBlockProps extends EditorProps {
  isMouseOver: boolean;
  isClicked: boolean;
  onMouseClick: () => void;
  onMouseOver: () => void;
  onMouseLeave: () => void;
  componentRef: React.Ref<HTMLDivElement>;
}

export interface ColorProps {
  color: string;
}

export type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;

export interface DropDownContent {
  label: string;
  id: string;
}

export interface DropDownProps {
  items: DropDownContent[];
  onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
}

export interface Location {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}
