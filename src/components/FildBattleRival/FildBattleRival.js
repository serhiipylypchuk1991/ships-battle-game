
import React from 'react';//Подключаем React библиотеку

import Controller from '../MVC/Controller.js';//Подключаем Controller

import RivalCell from './components/RivalCell.js';//Подключаем RivalCell компонент

//Создаем компонент FildBattleRival который будет отображать поле оппонента
class FildBattleRival extends Controller{

	 constructor(props) {
		super(props);

    this.playerClickHandler = this.playerClickHandler.bind(this);//Обработчик события клика по полю соперника
    this.general_object = this.props.general_object;//Объект с игровой информацией, хранящийся в состоянии (state) App компонента

	}

   //Метод отображения информации
   render(){

        return(
            <div id = 'FildBattleRival'>

                {
                  //Выводит на экран ячейки для поля игрока
                  this.model.forMapIndexArray(63).map((i) => {return (

                    <RivalCell

                      cell_className = {'cell'}
                      cell_val = {i}
                      key = {i}

                      general_object = {this.general_object}
                      playerClickHandler = {this.playerClickHandler}

                    />

                  )})
                }

            </div>
        );

      }
}

//export default - дает возможность использовать компонент FildBattleRival в других файлах
export default FildBattleRival;
