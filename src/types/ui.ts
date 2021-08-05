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

export interface ResizeProps extends ComponentStyle {
  minWidth: number
  minHeight: number
  children?: React.ReactElement
}

export interface EditorProps {
  width: number
  height: number
  top: number
  left: number
  minWidth: number
  minHeight: number
  parentStyle?: ComponentStyle
}

export interface EditorBlockProps extends EditorProps {
  isMouseOver: boolean
  isClicked: boolean
  onMouseClick: ()=> void
  onMouseOver: ()=> void
  onMouseLeave: ()=> void
}

export interface ColorProps {
  color: string
}

export type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;
