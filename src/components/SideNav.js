import  "../theme/styles";
import "./SideNav.css";
import React from 'react';
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

}) 

{
  return (
    <div>
      <div className="row">
      <div
      className="col-md-1"
      style={{
        backgroundColor: "#EBF0F6",
        width: "100%",
        height: `${window.innerHeight * 0.073 * 0.9}px`,
        position: "absolute"
      }}
      />

        <div
          className="multi-button col-md-1 icon-bar"
          style={{
            marginTop : "38px",
            position: "absolute",
            backgroundColor: "#EBF0F6",
            height:"88vh",
            width: `${window.innerWidth * 0.073 * 0.8}px`,
          }}
        >
       
        <button
        
            id="line"
            data-toggle="tooltip"
            data-placement="top"
            title="Line"
          
            onClick={() => {
              setToolType("line");
              setWidth(1);
              setShapeWidth(1);
              
            }}
          >
            <Line  />
          </button>

          <button
          
            id="rectangle"
            data-toggle="tooltip"
            data-placement="top"
            title="Rectangle"
           
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
        
            onClick={() => {
              setToolType("triangle");
              setWidth(1);
              setShapeWidth(1);
            
            }}
          >
            <Triangle toolType={toolType} colorWidth={colorWidth} />
          </button>

          <button
          class="btn"
            id="pencil"
            data-toggle="tooltip"
            data-placement="top"
            title="Pencil"
     
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
          
            onClick={() => {
              setToolType("eraser");
              setWidth(1);
              setShapeWidth(1);
            
            }}
          >
            <Eraser toolType={toolType} colorWidth={colorWidth} />
          </button>
        </div>

        <div
      className="col-md-1"
      style={{
        backgroundColor: "#EBF0F6",
        
        width: "100%",
        height: `${window.innerHeight * 0.073 * 0.9}px`,
        position: "absolute",
        bottom: "0"
        
      }}
      />

<div
      className="col-md-1"
      style={{
        backgroundColor: "#EBF0F6",
        
        height:"100%",
        width: `${window.innerWidth * 0.073 * 0.5}px`,
        position: "absolute",
        right: "0"
        
      }}
      />

      </div>
    </div>
 
  );
}

