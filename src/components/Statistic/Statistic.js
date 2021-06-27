
import React from 'react';//Подключаем React библиотеку

import Controller from '../MVC/Controller.js';//Подключаем Controller

//Создаем компонент Statistic который будет отображать статистику игры
class Statistic extends Controller{

   constructor(props) {
     super(props);

     this.general_object = this.props.general_object;//Объект с игровой информацией, хранящийся в состоянии (state) App компонента

   }

	 //Метод отображения информации
   render(){

        return(
            <div className = 'statistic'>

                <p className = "my_resolt">

                  <i className = "fa fa-user fa-lg" ></i>
                  <span>Попадания:</span>	<span className = 'my_hits'>{this.general_object.myHitsArr.length}</span>
                  <span>Промахи:</span>	<span className = 'my_misses'>{this.general_object.myMissesArr.length}</span>
                  <span>Потери:</span>	<span className = 'my_losses'>{this.general_object.opHitsArr.length}</span>

                </p>

                <p className = "op_resolt">

                  <i className = "fa fa-android fa-lg" ></i>
                  <span>Попадания:</span>	<span className = 'op_hits'>{this.general_object.opHitsArr.length}</span>
                  <span>Промахи:</span>	<span className = 'op_misses'>{this.general_object.opMissesArr.length}</span>
                  <span>Потери:</span>	<span className = 'op_losses'>{this.general_object.myHitsArr.length}</span>

                </p>

            </div>
        );

      }
}

//export default - дает возможность использовать компонент Statistic в других файлах
export default Statistic;
