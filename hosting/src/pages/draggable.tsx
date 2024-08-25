import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import Draggable from "react-draggable";
export function PageDraggable() {
  return (
    <Box>
      <Typography variant="h3" sx={{ my: 4 }}>
        ライブラリ: react-draggable
      </Typography>
      <Typography variant="body1">
        画像にはdraggable="false"を入れないと、画像のドラッグアンドドロップが先に発動してしまう
      </Typography>
      <Draggable>
        <img
          src="./img/kkrn_icon_techou_7.svg"
          alt="card"
          style={{ width: "300px" }}
          draggable="false"
        />
      </Draggable>
    </Box>
  );
}
interface draggableProps {
  children: React.ReactNode[];
  onDragStop?: () => {};
  onDragging?: () => {};
  onClick?: () => {};
}
export function DraggController(props: draggableProps) {
  const isDraggingRef = useRef(false);

  const onDrag = () => {
    isDraggingRef.current = true;
  };
  const onStop = () => {
    if (!isDraggingRef.current) {
      //Drag完了
      if (props.onDragStop) {
        props.onDragStop();
      }
    }
    isDraggingRef.current = false;
  };
  return (
    <Draggable onStop={onStop} onDrag={onDrag}>
      {props.children}
    </Draggable>
  );
}
