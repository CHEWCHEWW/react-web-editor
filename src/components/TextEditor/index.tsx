import React from "react";
import styled from "styled-components";

import { InnerHTML } from "../../types/ui";
import MenuBoard from "../MenuBoard";

interface TextEditorProps {
  html: InnerHTML
  isEditing: boolean
  onChange: () => void
  componentRef: React.Ref<HTMLDivElement>
  sliderRef: React.Ref<HTMLInputElement>
  onColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  sliderValue: number
  onSliderChange: () => void
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
  fontStyle: string
  onFontClick: (ev: React.MouseEvent<HTMLDivElement>) => void
  fontName: string
}

interface TextBoardStyle {
  fontSize: number
  fontName?: string
}

const TextEditor: React.FC<TextEditorProps> = ({
  html,
  onChange,
  componentRef,
  isEditing,
  sliderRef,
  onColorChange,
  sliderValue,
  onSliderChange,
  onClick,
  fontStyle,
  onFontClick,
  fontName,
}): React.ReactElement => {
  return (
    <>
      <FontStyle>
        <TextBoard 
          className={`${fontStyle} ${fontName}`}
          contentEditable
          ref={componentRef}
          dangerouslySetInnerHTML={html}
          onInput={onChange}
          fontSize={sliderValue}
          fontName={fontName}
        />
      </FontStyle>
      {isEditing && (
        <MenuBoard 
          sliderRef={sliderRef}
          onColorChange={onColorChange}
          onSliderChange={onSliderChange}
          sliderValue={sliderValue}
          onClick={onClick}
          onFontClick={onFontClick}
        />
      )}
      
    </>
  );
};

const TextBoard = styled.div.attrs<TextBoardStyle>(
  ({ fontSize }) => ({
    style: {
      fontSize: fontSize && `${fontSize * 100}px`,
    },
  })
)<TextBoardStyle>`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 0;

  p {
    margin: 0;
    padding: 0;
  }
`;

const FontStyle = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Andada+Pro&family=Bebas+Neue&family=MonteCarlo&family=Roboto:wght@100&family=STIX+Two+Text&family=Style+Script&display=swap");

  .twin-color-text {
    font-size: 26px;
    font-weight: 600;
    text-shadow: rgb(10 189 240 / 30%) 3px 3px 0px, rgb(254 1 1 / 30%) -2px -2px 0px;
  }

  .box-text {
    border-radius: 8px;
    text-shadow: rgb(238, 235, 84) 3px 3px 0px, rgba(0, 0, 0, 0.2) 3px 3px 0px;  
    border: none;
    outline: none;
    font-weight: 600;
  }

  .down-side-text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    text-shadow: 
      0px 4px 3px rgba(0,0,0,0.4),
      0px 8px 13px rgba(0,0,0,0.1),
      0px 18px 23px rgba(0,0,0,0.1);
  }

  .out-line-text {
    font-weight: 600;
    -webkit-text-stroke: 1px white;
    text-shadow: 0px 1px 4px #3899ec;
  }

  .bubble-shadow-text {
    font-weight: 600;
    text-shadow: 0 4px 8.896px #247aca, 0 -2px 1px #6499fd;
    color: #5fb4e6;
  }

  .andada-pro {
    font-family: "Andada Pro", serif;
  }

  .bebas-nenu {
    font-family: "Bebas Neue", cursive;
  }

  .montecarlo {
    font-family: "MonteCarlo", cursive;
  }

  .roboto {
    font-family: "Roboto", sans-serif;
  }

  .stix-two-text {
    font-family: "STIX Two Text", serif;
  }

  .style-script {
    font-family: "Style Script", cursive;
  }
`;

export default TextEditor;
