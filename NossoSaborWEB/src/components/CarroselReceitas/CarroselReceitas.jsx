import React from "react";
import Receita from "../../components/CartaoReceita/CartaoReceita";
import "../CarroselReceitas/styles.css";

const CarroselReceitas = () => {


  
  return (
    <>
      <div className="w-100 ">
          <ul className="d-flex align-items-flex-start ulComentario">
            <Receita></Receita>
            <Receita></Receita>
            <Receita></Receita>
            <Receita></Receita>
            <Receita></Receita>
            <Receita></Receita>
            <Receita></Receita>
            <Receita></Receita>
            <Receita></Receita>
            <Receita></Receita>
          
          </ul>
      </div>
    </>
  );
};

export default CarroselReceitas;
