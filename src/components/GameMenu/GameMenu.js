
import React from 'react';//Подключаем React библиотеку

import Controller from '../MVC/Controller.js';//Подключаем Controller

import ButtonComponent from './components/ButtonComponent.js';//Подключаем ButtonComponent

//Создаем компонент GameMenu который будет отображать Меню
class GameMenu extends Controller{

	 constructor(props) {
		super(props);

    this.recordsButtonHandler = this.recordsButtonHandler.bind(this);//Обработчик события клика
    this.rulsButtonHandler = this.rulsButtonHandler.bind(this);//Обработчик события клика
    this.playButtonHandler = this.playButtonHandler.bind(this);//Обработчик события клика
    this.finishButtonHandler = this.finishButtonHandler.bind(this);//Обработчик события клика

    this.general_object = this.props.general_object;//Объект с игровой информацией, хранящийся в состоянии (state) App компонента

	 }

   //Метод отображения информации
   render(){

      return(
          <div id = 'GameMenu'>

              <ButtonComponent
                button_className = {'play_button'}
                i1_className = {'fa fa-circle fa-stack-2x'}
                i2_className = {'fa fa-gamepad fa-stack-1x fa-inverse'}
                button_name = {'ИГРАТЬ'}
                general_object = {this.props.general_object}
                //disabled = {'disabled'}
                ButtonHandler = {this.playButtonHandler}
              />

              <ButtonComponent
                button_className = {'ruls_button'}
                i1_className = {'fa fa-circle fa-stack-2x'}
                i2_className = {'fa fa-book fa-stack-1x fa-inverse'}
                button_name = {'ПРАВИЛА'}
                ButtonHandler = {this.rulsButtonHandler}
              />

              <ButtonComponent
                button_className = {'record_button'}
                i1_className = {'fa fa-circle fa-stack-2x'}
                i2_className = {'fa fa-trophy fa-stack-1x fa-inverse'}
                button_name = {'РЕКОРДЫ'}
                ButtonHandler = {this.recordsButtonHandler}


              />

              <ButtonComponent
                button_className = {'finish_button'}
                i1_className = {'fa fa-gamepad fa-stack-1x'}
                i2_className = {'fa fa-ban fa-stack-2x text-danger fa-red-style'}
                button_name = {'ФИНИШ'}
                ButtonHandler = {this.finishButtonHandler}
              />

          </div>
      );

    }

}

//export default - дает возможность использовать компонент GameMenu в других файлах
export default GameMenu;
