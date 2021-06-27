
import React from "react";//Подключаем React библиотеку

import FildBattlePlayer from "./components/FildBattlePlayer/FildBattlePlayer.js";//Подключаем компонент FildBattlePlayer
import ShipsPort from "./components/ShipsPort/ShipsPort.js";//Подключаем компонент ShipsPort
import FildBattleRival from "./components/FildBattleRival/FildBattleRival.js";//Подключаем компонент FildBattleRival
import GameMenu from "./components/GameMenu/GameMenu.js";//Подключаем компонент GameMenu
import Statistic from "./components/Statistic/Statistic.js";//Подключаем компонент Statistic


import 'less';//Подключаем less препроцессор
import './less/app.less';//Подключаем стили less

import './css/removable_classes.css';//Подключаем стили css, так как less выдает ошибку на эти стили font-awesome.css
import './css/font-awesome.css';//Подключаем стили (шрифты) для кнопок GameMenu

import Controller from './components/MVC/Controller.js';//Подключаем Controller

class App extends Controller{
  constructor(props) {
    super(props);

    this.controller = this;
    this.model = this;

    this.state = {
      general_object : this.model.getObjectFromLocalStorage()
    }

  }

  render() {

    return (

      <div id = 'GameRoom'>

        <FildBattlePlayer
          general_object = {this.state.general_object}
        />
        <ShipsPort
          general_object = {this.state.general_object}
        />
        <FildBattleRival
          general_object = {this.state.general_object}
        />
        <GameMenu
          general_object = {this.state.general_object}
        />
        <Statistic
          general_object = {this.state.general_object}
        />

      </div>

    );
  }

  //Запускает скрипты после рендеринга всего приложения
  componentDidMount() {
    this.controller.updateGameOnLoad(this.state.general_object);
  }

}

//export default - дает возможность использовать компонент App в других файлах
export default App;
