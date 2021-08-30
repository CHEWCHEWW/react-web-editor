declare module "react-web-editor" {
  import React from "react";

  export interface ComponentSize {
    width: number;
    height: number;
  }

  export interface ComponentStyle extends ComponentSize {
    top: number;
    left: number;
  }

  export interface EditorProps extends ComponentStyle {
    parentStyle?: ComponentSize;
    unit: string;
  }

  export interface StyleEditorBlockProps extends EditorProps {
    initialColor?: string;
    initialImage?: string;
  }

  export interface TextEditorBlockProps extends EditorProps {
    initialFontSize?: number;
    initialFontColor?: string;
    initialFontStyle?: string;
    initialText?: string;
    initialFontName?: string;
  }

  export interface DragAndDropTableProps {
    color?: string;
    isVertical?: boolean;
  }

  export type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;

  export interface UseDraggableProps extends ComponentStyle {
    onDrag: Dispatcher<ComponentStyle>;
    dragBoardOption?: ComponentSize;
    unit: string;
  }

  export interface UseImageProps {
    initialImage?: string;
  }

  export interface ResizeProps extends ComponentStyle {
    children?: React.ReactElement;
  }

  export interface UseResizeProps extends ComponentStyle {
    onResize: Dispatcher<ResizeProps>;
    resizeBoardOption?: ComponentSize;
    unit: string;
  }

  export interface UseColorProps {
    initialColor?: string;
  }

  export interface EditableBoardProps extends ComponentSize {
    backgroundColor: string;
    unit: string;
  }

  export interface EditorBlockWrapperProps extends ComponentStyle {
    unit: string;
  }

  export interface UseDraggableReturns {
    handleDragEnd: () => void;
    handleDragStart: (ev: React.MouseEvent<HTMLDivElement>) => void;
    isDragging: boolean;
  }

  export interface UseImageReturns {
    imageSrc: string;
    handleFileChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export interface UseResizeReturns {
    handleMouseDown: (ev: React.MouseEvent<HTMLDivElement>) => void;
    isResizing: boolean;
  }

  export interface UseColorReturns {
    color: string;
    handleColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    handleFontColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export const StyleEditorBlock: React.FC<StyleEditorBlockProps>;
  export const TextEditorBlock: React.FC<TextEditorBlockProps>;
  export const DragAndDropTable: React.FC<DragAndDropTableProps>;

  export const EditableBoard: React.FC<EditableBoardProps>;
  export const EditorBlockWrapper: React.FC<EditorProps>;
  export const ResizeHandlersWrapper: React.FC;

  export const useDraggable: ({
    left,
    top,
    onDrag,
    width,
    height,
    dragBoardOption,
    unit,
  }: UseDraggableProps) => UseDraggableReturns;
  export const useResize: ({
    width,
    height,
    top,
    left,
    onResize,
    resizeBoardOption,
    unit,
  }: UseResizeProps) => UseResizeReturns;
  export const useImage: ({ initialImage }: UseImageProps) => UseImageReturns;
  export const useColor: ({ initialColor }: UseColorProps) => UseColorReturns;
}
