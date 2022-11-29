import React, { useState } from "react";
import { styles } from "../theme/styles";
import {
  Line,
  Triangle,
  Rectangle,
  Circle,
  Pencil,
  Eraser,
} from "../theme/svg";


export default function SideNav({
  toolType,
  setToolType,
  setWidth,
  colorWidth,
  setShapeWidth,
}) {


  return (
    <div>
      <div className="row">
        <div
          className="col-md-1 icon-bar"
          style={{
            position: "absolute",
            backgroundColor: "#f3f3f3",
            height: `${window.innerHeight * 0.09 * 6}px`,
            width: `${window.innerWidth * 0.073 * 0.8}px`,
            left: "2px",
            top: `${
              (window.innerHeight - window.innerHeight * 0.09 * 6) / 2
            }px`,
            borderRadius: "10px",
          }}
        >
          <button
            id="line"
            data-toggle="tooltip"
            data-placement="top"
            title="Line"
            style={styles.righticons}
            onClick={() => {
              setToolType("line");
              setWidth(1);
              setShapeWidth(1);
            }}
          >
            <Line toolType={toolType} colorWidth={colorWidth} />
          </button>

          <button
            id="rectangle"
            data-toggle="tooltip"
            data-placement="top"
            title="Rectangle"
            style={styles.righticons}
            onClick={() => {
              setToolType("rectangle");
              setWidth(1);
              setShapeWidth(1);
            }}
          >
            <Rectangle toolType={toolType} colorWidth={colorWidth} />
          </button>

          <button
            id="circle"
            data-toggle="tooltip"
            data-placement="top"
            title="Circle"
            style={styles.righticons}
            onClick={() => {
              setToolType("circle");
              setWidth(1);
              setShapeWidth(1);
            }}
          >
            <Circle toolType={toolType} colorWidth={colorWidth} />
          </button>

          <button
            id="triangle"
            data-toggle="tooltip"
            data-placement="top"
            title="Triangle"
            style={styles.righticons}
            onClick={() => {
              setToolType("triangle");
              setWidth(1);
              setShapeWidth(1);
            }}
          >
            <Triangle toolType={toolType} colorWidth={colorWidth} />
          </button>

          <button
            id="pencil"
            data-toggle="tooltip"
            data-placement="top"
            title="Pencil"
            style={styles.righticons}
            onClick={() => {
              setToolType("pencil");
              setWidth(1);
              setShapeWidth(1);
            }}
          >
            <Pencil toolType={toolType} colorWidth={colorWidth} />
          </button>

          <button
            id="eraser"
            data-toggle="tooltip"
            data-placement="top"
            title="Eraser"
            style={styles.righticons}
            onClick={() => {
              setToolType("eraser");
              setWidth(10);
              setShapeWidth(1);
            }}
          >
            <Eraser toolType={toolType} colorWidth={colorWidth} />
          </button>
        </div>

      </div>
    </div>
  );
}
