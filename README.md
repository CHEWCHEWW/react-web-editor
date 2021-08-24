
<div align="center">

# react-web-editor
<p><p>

### A Simple **WYSIWYG** editor for react users
#### You can make your own editor using our library
<p></p>

<img src="https://drive.google.com/uc?id=11zbcKjowailmDhLqmRATeOkguVjtBCGj" alt="demo gif image" >

### You can explore various features on the website. [Visit My Website!](https://www.reactwebeditor.com)

### You can also try on CodeSandBox. [CodeSandBox](https://codesandbox.io/s/react-web-editor-my626?file=/src/App.js)

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
<p></p>

- Resizing, Draggable, Drag and Drop 등의 기능을 지원하고, 또한 동적으로 이미지를 업로드하거나, component의 색상과 텍스트를 스타일링 할 수 있습니다.
<p></p>

- 보조적으로, 현재 component의 위치를 알 수 있는 coordinates tag, 그리고 현재 component가 중앙 정렬 되었는지를 알려주는 guide line이 block 형식의 컴포넌트에 내장되어 있습니다.
<p></p>

- 궁극적으로, 사용자가 동적으로 웹의 ui를 변경할 수 있는 editor page를 제작할 수 있습니다.

## 💭 Core characteristics
- 사용자 친화적으로 제작한 라이브러리로, 사용하기 쉽습니다.
  - core 기능은 hook을 이용해 제작 했지만, 이를 최대한 단순하게 사용할 수 있도록 block component로 래핑했습니다. 따라서 간단하게 사용하고 싶은 사용자들은 block component를 import한 후 props에 원하는 값을 대입하면 됩니다.
  <p></p>

- 무겁지 않게 만들기 위해 노력했습니다.
  - 간단하고 가볍게 제작 하는 것을 제일의 목표로 삼았기에, component의 무게를 가볍게 만들기 위해 노력했습니다. 따라서 필수적인 library를 제외하고는 최소한의 dependency를 가지고 있습니다.
- hook 친화적으로 만든 library로, 사용자가 최근의 react style을 이용하여 커스터마이징 할 수 있습니다.
  - core한 기능들은 모두 hook으로 구현되어 있습니다. 사용자는 hook을 이용하여 자신들만의 component 및 library를 제작할 수 있습니다.
- customize를 위한 도구들이 존재합니다.
  - styled component들을 import하여 새로 component를 확장할 수 있도록 지원하고 있습니다.
- custom 설정으로 configuration 관리 및 프로젝트 확장을 온전히 제어 할 수 있도록 webpack을 이용해 빌드했습니다.

## 💁 Getting started

### installing
```
npm -i react-web-editor
```

### import
```
import { StyleEditorBlock, TextEditorBlock, ... } from "react-web-editor;
```

or you can import as below

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
These components are designed to be user friendly. Easily control components using no more than props.
<p></p>

### Style Editor Block
  <p></p>

  The Style Editor Component(SEC) is a block component which can change size and location of components. Another powerful usage of The SEC is uploading images on the screen or changing a component's background color. By wrapping a component with the SEC and setting the position of the component ‘absolute’, the component becomes editable on an website. This component also can be used without your own component.

  Two tabs will appear on the screen when you hover a cursor on the component. The First tab is a uploading image tab, which is help you add an image. The Second tab is a color handler. It changes component's background color.

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
  <p></p>
  The Text Editor Component(TEC) is a block component. This component has a simple rich text editor features.
  TEC has two functions. It enables you to type and change the style of it using the settings window.
  <p></p>
  Two tabs will appear on the screen when you hover a cursor on the component. It helps you change a location of components. The second tab is the Settings window handler. The window will appear on the screen when you click the second tab.

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
  <p></p>
  The Drag and Drop Table(DNDT) component makes all child components draggable within the DNDT area. You can use the DNDT by wrapping your components that you desire to be draggable.

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
<p></p>
Our library structured with "hooks" friendly. Use the hook when you need a single feature from hooks or when you want to make a custom component.
<p></p>
With the React-Web-Editor you can generate editor pages and your own library.
These need a more precise usage. So If you want to use our library's features simply, We recommend using block components.

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
This component can be used with DraggableHandler, and EditorBlockWrapper.

### useResize
It returns Resize handlers. It can be used with "ResizeHandlerWrapper", The helper component to resize.
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
This component can be used with ResizeHandlerWrapper and EditorBlockWrapper.

### useImage
The UseImage hook helps upload and display images on the screen.

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

These components help you customize and generate your own component. You can make your own library using this feature. It lets you easily handle hooks and editor components.

### Editable Board
  <p></p>
    The Editable Board component is a helper component. If you put a block component (like StyleEditorBlock, or TextEditorBlock) to this component's children and define parentStyle, the children components will bound in the Editable board area.

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
The Editor Block Wrapper is a style component. The size and location of the component are received in props. It changes style dynamically with these props.
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
This component is specialized for the useResize hook. It generates vertices in the four directions of the component.

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
