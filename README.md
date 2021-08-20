<h1 align="center">react-beautiful-dnd</h1>

<div align="center">

## A Simple **WYSIWYG** editor for react users
<p></p>

<img src="https://drive.google.com/uc?id=11zbcKjowailmDhLqmRATeOkguVjtBCGj" alt="demo gif image" >

### You can test library features on the website. [Visit My Website!](https://www.reactwebeditor.com)

### You can also try on CodeSandBox [CodeSandBox](https://codesandbox.io/s/react-web-editor-my626?file=/src/App.js)
</div>

<p></p>

## 🗂️ Table of contents
1. [What is React Web Editor](#what-is-react-web-editor)
2. [Core characteristics](#core-characteristics)
3. [get started](#get-started)
4. [Version up log](#version-up-log)
5. [Documents](#Documents)
    - [Block Components](#block-components)
      - [Style Editor Block](#style-editor-block)
      - [Text Editor Block](#text-editor-block)
      - [Drag and Drop Table](#drag-and-drop-table)
    - [Hooks](#hooks)
      - [useDraggable](#useDraggable)
      - [useResize](#useResize)
      - [useImage](#useImage)
      - [useColor](#useColor)
    - [Helper Components](#helper-components)
      - [Editable Board](#editable-board)
      - [EditorBlockWrapper](#editorblockwrapper)
      - [ResizeHandlerWrapper](#resizehandlerwrapper)
---

## 🎨 What is React Web Editor
- React Web editor는 ui를 동적으로 변경할 수 있는 component의 및 훅들을 제공하는 라이브러리입니다.
- Resizing, Draggable, Drag and Drop 등의 기능을 지원하고, 또한 동적으로 이미지를 업로드하거나, component의 색상과 텍스트를 스타일링 할 수 있습니다.
- 보조적으로, 현재 component의 위치를 알 수 있는 coordinates tag, 그리고 현재 component가 중앙 정렬 되었는지를 알려주는 guide line이 block 형식의 컴포넌트에 내장되어 있습니다.
- 궁극적으로, 사용자가 동적으로 웹의 ui를 변경할 수 있는 editor page를 제작할 수 있습니다.

## 💭 Core characteristics
- 사용자 친화적으로 제작한 라이브러리로, 사용하기 쉽습니다.
  - core 기능은 hook을 이용해 제작 했지만, 이를 최대한 단순하게 사용할 수 있도록 block component로 래핑했습니다. 따라서 간단하게 사용하고 싶은 사용자들은 block component를 import한 후 props에 원하는 값을 대입하면 됩니다.
- 무겁지 않게 만들기 위해 노력했습니다.
  - 간단하고 가볍게 제작 하는 것을 제일의 목표로 삼았기에, component의 무게를 가볍게 만들기 위해 노력했습니다. 따라서 필수적인 library를 제외하고는 최소한의 dependency를 가지고 있습니다.
- hook 친화적으로 만든 library로, 사용자가 최근의 react style을 이용하여 커스터마이징 할 수 있습니다.
  - core한 기능들은 모두 hook으로 구현되어 있습니다. 사용자는 hook을 이용하여 자신들만의 component 및 library를 제작할 수 있습니다.
- customize를 위한 도구들이 존재합니다.
  - styled component들을 import하여 새로 component를 확장할 수 있도록 지원하고 있습니다.
- custom 설정으로 configuration 관리 및 프로젝트 확장을 온전히 제어 할 수 있도록 webpack을 이용해 빌드했습니다.

## 💁 Get started

### installing
```
npm -i react-web-editor
```

### import
```
import { StyleEditorBlock, TextEditorBlock, ... } from "react-web-editor;
```

or You can also import like this.

```
import ReactWebEditor from "react-web-editor";
```
## 🔥 Version up log

|Version     | Log|
|------------|--------------|
|2.2.0        | Upgrade Ui, Fix Hooks usage |
|2.1.0        | Upgrade Drag and Drop feature |
|2.0.0        | Create Editable Board, minor bug update |
|1.2.0        | Upgrade Text Editor to initialize options |
|1.1.0        | Upgrade editor to use unit like "rem" |
|~ 1.0.5        | Use helmet, Update helmet to async |
|~ 1.0.2         | Upgrade Drag and Drop feature, Solve minor Ui bug |
|1.0.0       | Add Text Editor  |
|0.1.6         | Upgrade Style editor features |
|~ 0.1.5         | Solve Next.js Font disappear bug |

------

# 📃 Documents

## Block components
These components are already designed easy to use for users.It only needs some props to use.
<p></p>

### Style Editor Block

  - What is?
  <p></p>

  The Style Editor Component is a block component which is handle resize and drag. It can also upload image. If you put your component to children and set css property
  **position: absolute**,
  You can change your component width, height, and location dynamically. If you won't to use this component without Your Own Component, just use this component alone.
  <p></p>
  If you hover your cursor to this component, Two tabs will appear on the screen. First tab is a image upload tab, which is help you add an image. Second tab is a color handler. It can change components's background color.
  <p></p>

  - Props
```
    type StyledEditorBlockProps {
      width: number;
      height: number;
      top: number;
      left: number;
      parentStyle?: ParentStyle; // It defines area where component can't escape. If you don't define it, then your component can move in all screen.
      unit: string;
      initialColor?: string; // default: transparent
      initialImage?: string; // default: none
    }

    type ParentStyle {
      width: number;
      height: number;
    }
```

  - Usage
```
    import { StyleEditorBlock } from "react-web-editor"
    ...
    return (
      <StyleEditorBlock
        width={200}
        height={300}
        left={left}
        top={top}
        parentStyle={{ width: 600, height: 800 }}
        unit={"px"}
      >
        <YourOwnComponent color={color} /> // It is just a option.
      </StyleEditorBlock>
    );
```
### Text Editor Block

  - What is?
  <p></p>
  The Text Editor Component is a block component. A settings window is built in this component. You can type message using this component, and change style by using settings window.
  <p></p>
  If you hover your cursor to this compoenent, then two tabs appear on the screen. First tab is a drag handler. It helps you change component location. Second tab is a Setting window handler. If you put your cursor to second tab, this window will be appear on the screen.
  <p></p>

  - Props
```
    type TextEditorBlockProps {
      width: number;
      height: number;
      top: number;
      left: number;
      parentStyle?: ParentStyle; // It defines area where component can't escape. If you don't define it, then your component can move in all screen.
      unit: string;
      // Initial- props are options just for first rendering.
      initialFontSize?: number; // default: 0.22
      initialFontColor?: string; // default: "black"
      initialFontStyle?: InitialFontStyle; // default: ""
      initialText?: string; // default: ""
      initialFontName?: string; // default: ""
    }

    type ParentStyle {
      width: number;
      height: number;
    }

    type InitialFontStyle = "twin-color-text" | "box-text" | "down-side-text" | "out-line-text" | "bubble-shadow-text";

    type InitialFontName = "andada-pro" | "bebas-nenu" | "montecarlo" | "roboto" | "stix-two-text" | "style-script";
```
  - Usage
```
    import { TextEditorBlock } from "react-web-editor"

    ...

    return (
      <TextEditorBlock
        width={200}
        height={300}
        left={left}
        top={top}
        parentStyle={{ width: 600, height: 800 }}
        unit={"px"}
      />
    );
```

### Drag and Drop Table

  - What is?
  <p></p>
  The Drag and Drop Table component makes all children component can drag and drop. You just have to put your own component to Drag and Drop table component's children.

  - Props
```
    type DragAndDropTableProps {
      color?: string;
      isVertical: boolean;
    }
```
  - Usage
```
    import { DragAndDropTable } from "react-web-editor"

    ...

    return (
      <DragAndDropTable
        color={"pink"}
        isVertical={true}
      >
        <YourOwnComponent src={cat} />
        <YourOwnComponent src={flower} />
        <YourOwnComponent src={bee} />
        // These components can drag and drop in the DragAndDropTable component.
      </DragAndDropTable>
    );
```

## Hooks

Our library made by "hooks" friendly. Each hook has only one feature. If you want to make custom component or just use only one feature, You can use hook.
<p></p>
These need a more precise use. So If you want to use it simply, We recommend using block components.

### useDraggable
- props
```
  type useDraggableProps {
    left: number;
    top: number;
    width: number;
    height: number;
    dragBoardOption?: DragBoardOption;
    unit: string;
    onDrag: Dispatcher<ComponentStyle>; // It is a setState. Its state is Componentstyle.
  }

  type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;

  type ComponentStyle {
    left: number;
    top: number;
    width: number;
    height: number;
  }

  type DragBoardOption {
    width: number;
    height: number;
  }
  // It's like a parentStyle.
```
- usage
```
  import { useState } from "react";
  import { useDraggable } from "react-web-editor";

  const [componentStyle, setComponentStyle] = useState({
    width: 20,
    height: 40,
    top: 40,
    left: 40,
  });
  // this state can be used for your own component.
  const {
    handleDragEnd, // onMouseUp handler
    handleDragStart, // onMouseDown handler
  } = useDraggable({
    ...componentStyle,
    onDrag: setComponentStyle,
    unit: "px",
  });
```

- returns

|return     | usage|
|------------|--------------|
|handleDragStart      | onMouseDown handler |
|handleDragEnd    | onMouseUp handler |
------
This component can use with DraggableHandler, and EditorBlockWrapper.

### useResize
It returns resize handler. It can be used with "ResizeHandlerWrapper", The helper component to resizing.
- props
```
  type useResizeProps {
    left: number;
    top: number;
    width: number;
    height: number;
    resizeBoardOption?: ResizeBoardOption;
    unit: string;
    onResize: Dispatcher<ComponentStyle>; // It is a setState. Its state is Componentstyle.
  }

  type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;

  type ComponentStyle {
    left: number;
    top: number;
    width: number;
    height: number;
  }

  type ResizeBoardOption {
    width: number;
    height: number;
  }
  // It's like a parentStyle.
```
- usage
```
  import { useState } from "react";
  import { useResize, ResizeHandlerWrapper } from "react-web-editor";

  const [componentStyle, setComponentStyle] = useState({
    width: 20,
    height: 40,
    top: 40,
    left: 40,
  });

  const { handleMouseDown } = useDraggable({
    ...componentStyle,
    onResize: setComponentStyle,
    unit: "px",
  });

```
- returns

|return     | usage|
|------------|--------------|
|handleMouseDown      | onMouseDown handler |
------
This component can use with ResizeHandlerWrapper, and EditorBlockWrapper.

### useImage
The UseImage hook helps upload image file.

- props
```
type UseImageProps {
  initialImage?: string;
}
```

- usage
```
import { useImage } from "react-web-editor";
...
const { imageSrc, handleImageChange } = useImage({ initialImage });
```

- returns

|return     | usage|
|------------|--------------|
|imageSrc      | string |
|handleFileChange      | onChangeHandler of InputElement |
------

### useColor
The UseColor hook returns color change handler.

- props
```
type UseColorProps {
  initialColor?: string;
}
```

- usage
```
import { useColor } from "react-web-editor";
...
const { color, handleColorChange } = useColor({ initialColor });
```

- returns

|return     | usage|
|------------|--------------|
|color      | string |
| handleColorChange | onChangeHandler of InputElement |
------

## Helper Components

These components help you to customize component. It makes easy to handle editor component and hooks.

### Editable Board

  - What is?
  <p></p>
    The Editable Board component is a helper component. If you put a block component (like StyleEditorBlock, or TextEditorBlock) to this component's children and define parentStyle, Children components will bound in the Editable board area.

  - Props
```
    type EditableBoardProps {
      width: number;
      height: number;
      backgroundColor: string;
      left?: number;
      top?: number;
      unit: string;
    }
```
  - Usage
```
    import { EditableBoard, StyleEditorBlock } from "react-web-editor"

    ...
    const boardWidth = 500;
    const boardHeight = 500;
    const boardStyleUnit = "px";

    return (
      <EditableBoard
        width={boardWidth}
        height={boardHeight}
        backgroundColor={boardStyleUnit}
        color={"pink"}
        left={20}
        top={20}
      >
        <StyleEditorBlock
          ...
          parentStyle={{
            width: boardWidth,
            height: boardHeight,
          }}
          unit={"px"}
        />
      </EditableBoard>
    );
```

### EditorBlockWrapper
The Editor Block Wrapper is a style component. The size and location of the component are received in props. It changes dynamically by props.
It can be used with useResize and useDraggable

- props
```
type EditorBlockWrapperProps {
  width: number;
  height: number;
  left: number;
  top: number;
}
```

- Usage Example

```
import { useState } from "react";
import { EditorBlockWrapper, useDraggable } from "react-web-editor";

const [componentStyle, setComponentStyle] = useState({
  width: 20,
  height: 40,
  top: 40,
  left: 40,
});
// this state can be used for your own component.
const {
  handleDragEnd, // onMouseUp handler
  handleDragStart, // onMouseDown handler
} = useDraggable({
  ...componentStyle,
  onDrag: setComponentStyle,
  unit: "px",
});

return (
  <EditorBlockWrapper
    width={componentStyle.width}
    height={componentStyle.height}
    top={componentStyle.top}
    left={componentStyle.left}
    onMouseDown={handleDragStart}
    onMouseUp={handleDragEnd}
  >
    <YourOwnComponent style={{ position: "absolute" }}>
  </EditorBlcokWrapper> // Now, This component dynamically change location.
);
```

### ResizeHandlerWrapper
This component is specilized for useResize. It generates vertexes at the 4 direction of the component.

- Usage Example

```
import { useState } from "react";
import { EditorBlockWrapper, ResizeHandlerWrapper, useResize } from "react-web-editor";

const [componentStyle, setComponentStyle] = useState({
  width: 20,
  height: 40,
  top: 40,
  left: 40,
});
// this state can be used for your own component.
const { handleMouseDown } = useDraggable({
  ...componentStyle,
  onResize: setComponentStyle,
  unit: "px",
});

return (
  <EditorBlockWrapper
    width={componentStyle.width}
    height={componentStyle.height}
    top={componentStyle.top}
    left={componentStyle.left}
  >
    <ResizeHandlersWrapper>
      {DIRECTIIONS.map((item) => (
        <div key={item} className={item} onMouseDown={handleMouseDown} />
      ))}
    </ResizeHandlersWrapper>
  </EditorBlcokWrapper> // Now, This component can change size.
);
```
