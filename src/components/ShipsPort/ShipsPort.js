import React from 'react';//Подключаем React библиотеку

import $ from 'jquery';//Подключаем библиотеку jquery
import 'jquery-ui/ui/widgets/draggable.js';//Подключаем виджет jquery-ui
//import 'jquery-ui-touch-punch';//Подключаем событие тач для мобильных устройств

import Controller from '../MVC/Controller.js';//Подключаем Controller

import Ship from '../images/ship.png';//Подключаем изображение корабля

 //Создаем компонент ShipsPort который будет отображать корабли
 class ShipsPort extends Controller{

   constructor(props) {
     super(props);

     this.general_object = this.props.general_object;//Объект с игровой информацией, хранящийся в состоянии (state) App компонента

   }

   //Подключает виджет draggable
   componentDidMount() {

     this.$node = $(this.refs.draggable);
     this.makeDraggable(this.$node);

   }

   //Метод отображения информации
   render(){

      return(

        <div id = 'ShipsPort'>

            {//Выводит на корабли в контейнер порта
              this.model.forMapIndexArray(this.general_object.ships_amount).map((i) => {return (
                <div key = {i}>

                  <img  className = 'ship' num = {'' + i} src = {Ship} title = {'ship '+ (i+1)} alt = {'ship ' + (i+1)} />

                </div>
              )})
            }

        </div>

      );

    }

   //Отключает виджет draggable
   componentWillUnmount() {

      this.$node.draggable("destroy");

    }

}




//export default - дает возможность использовать компонент ShipsPort в других файлах
export default ShipsPort;
