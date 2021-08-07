import React from "react";

export interface ComponentLocation {
  left: number
  top: number
}

export interface ComponentStyle extends ComponentLocation {
  width: number
  height: number
}

export interface DragListContent {
  number: string
  title: string
  content?: string
  type?: string
}

export interface InnerHTML {
  __html: string
}

export interface ResizeProps extends ComponentStyle {
  children?: React.ReactElement
}

export interface EditorProps {
  width: number
  height: number
  top: number
  left: number
  parentStyle?: ComponentStyle
}

export interface EditorBlockProps extends EditorProps {
  isMouseOver: boolean
  isClicked: boolean
  onMouseClick: ()=> void
  onMouseOver: ()=> void
  onMouseLeave: ()=> void
  componentRef: React.Ref<HTMLDivElement>
}

export interface ColorProps {
  color: string
}

export type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;

export interface DropDownContent {
  id: string
  label: string
}

export interface DropDownProps {
  items: DropDownContent[]
}

export interface Location {
  left?: number
  right?: number
  top?: number
  bottom?: number
}
