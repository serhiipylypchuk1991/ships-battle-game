import React from 'react';//Подключаем React библиотеку

import $ from 'jquery';//Подключаем jquery библиотеку
import 'jquery-ui/ui/widgets/droppable.js';//Подключаем виджет jquery-ui

import Controller from '../MVC/Controller.js';//Подключаем Controller

 //Создаем компонент FildBattlePlayer который будет отображать поле игрока
 class FildBattlePlayer extends Controller{

   constructor(props) {
     super(props);

     this.general_object = this.props.general_object;//Объект с игровой информацией, хранящийся в состоянии (state) App компонента

   }

   //Подключает виджет droppable
   componentDidMount(){

     this.$node = $(this.refs.droppable);
     this.makeDroppable(this,this,this.general_object);

   }

    //Метод отображения информации
    render(){

      return(
          <div id = 'FildBattlePlayer'>

              {//Выводит на экран ячейки для поля игрока
                this.model.forMapIndexArray(63).map((i) => {return (<div className = 'cell' val = {i} key = {i}></div>)})
              }

          </div>
      );

    }

    //Отключает виджет droppable
    componentWillUnmount(){

        this.$node.droppable('destroy');

    }

}

//export default - дает возможность использовать компонент FildBattlePlayer в других файлах
export default FildBattlePlayer;
