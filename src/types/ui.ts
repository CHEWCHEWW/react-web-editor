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
