
import $ from 'jquery';//Подключаем библиотеку jquery

import UsefulFunctions from './UsefulFunctions/UsefulFunctions.js';//Подключаем скрипт с алгоритмом расстановки кораблей

import LocationAlgoritm from './Algoritm/LocationAlgoritm.js';//Подключаем скрипт с алгоритмом расстановки кораблей
const Algoritm  = new LocationAlgoritm();//Cоздаем объект класа, для доступа к алгоритму расстановки кораблей игрока и противника

class Model extends UsefulFunctions{
	constructor(props) {

    super(props);
    this.self = this;//Ссылка на контекст собственных методов
		this.uf = this;//Ссылка на контекст методов из класса UsefulFunctions
    this.SHIP_LOCATION_ALGORITM = Algoritm.ShipLocationAlgoritm();//Ссылка на объект Algoritm класа LocationAlgoritm, для получения алгоритма расстановки кораблей

	}

	//!Функция возвращает объект из хранилища если он там есть, а при его отсутствии - формирует новый объект
	//Вызывается в конструкторе компонента App, и формирует объект состояния этого компонента
	getObjectFromLocalStorage(){

		if (typeof(Storage) !== "undefined" && localStorage.ShipBattleStorageInformation) {//Проверяет работоспособность хранилища и нужную инфоррмацию в нем
			//console.log('Запрос к хранилищу');
			return JSON.parse(localStorage.ShipBattleStorageInformation)//Возвращает массив из хранилища в розкодированом виде
		}
		else {
			//console.log('Хранилище localStorage пустое или не работает');
			return {
				myDisabledCellsArr : [  [],[],[],[],[],[]  ],//,[],[] - Изначально было 8 кораблей
				opDisabledCellsArr : [],//Массив с индексами ячеек, в которых нельзя оставлять корабль противника
				myShipsLocationArr : [],//Массив с индексами ячеек, в которых находятся корабли игрока
				opShipsLocationArr : [],//Массив с индексами ячеек, в которых находятся корабли противника
				myMissesArr : [],//Массив с индексами ячеек, в которых игрок промахнулся
				opMissesArr : [],//Массив с индексами ячеек, в которых противник промахнулся
				myHitsArr : [],//Массив с индексами ячеек противника, в которые игрок попал
				opHitsArr : [],//Массив с индексами ячеек игрока, в которые противник попал
				answerShotArr : [],//Массив с индексами ячеек игрока, в которые противник стрелять не будет
				my_ship_count : 0,//Количество кораблей на поле игрока
				ships_amount : 6,//Количество кораблей в порту по умолчанию
				mode_of_game : false,//Режим игры по умолчанию false
				mode_of_play : false,//Режим плей по умолчанию
				myShipNumbInFild : []//Массив со значениями атрибутов num кораблей, расставленых в поле игрока
			}
		}

	}

	//!Возвращает массив с индексами, для формирования ячеек игрока и противника, а также корабли в порту(for Controller)
	//!Массив перебирается функцией map() - единствинным цыклом, доступным в жизненном цыкле render() компонента
	forMapIndexArray(count){//count - количество индексов
		 var indexArray = [];//Обявляем массив
		 if(count > 7){//Для ячеек игрока и противника
			 for(var i = 0; i <= count; i++){//Заполняем массив
				 indexArray.push(i)
			 }
		 }else{//Для кораблей
			 for(var i = 0; i < count; i++){//Заполняем его
	 			indexArray.push(i)
	 		 }
		 }
		 return indexArray;//Возвращаем массив с указаным в аргументе количеством индексов
	}

	//!Производит подсчет баллов в конце игры (вызывается в progressOfGame)
	gameResolt(general_object){
		var a = general_object.myHitsArr.length * 200,
			b = general_object.opHitsArr.length * 50,
			c = general_object.myMissesArr.length * 10,
			resolt = a - b - c;
		return resolt;
	}

	//!Возвращает число, которое равно индексу ячейки в которой будет вражеский корабль(учитывает положение остальных кораблей и заблокированных ячеек)
	getOpponentShipPosition(general_object){

		var integer = this.uf.getRandomInt(0, 63),
				resolt = this.uf.findValInArr(integer,general_object.opDisabledCellsArr);

		if(resolt === true){
			for(var i = 0; i < this.self.SHIP_LOCATION_ALGORITM[integer].length; i++){

				if(i === 0){
					general_object.opShipsLocationArr.push(integer);
					general_object.opDisabledCellsArr.push(integer);
					general_object.opDisabledCellsArr.push( this.self.SHIP_LOCATION_ALGORITM[integer][i] );
				} else {
					general_object.opDisabledCellsArr.push( this.self.SHIP_LOCATION_ALGORITM[integer][i] );
				}

			}
			return integer;
		}else if(resolt === false && general_object.opShipsLocationArr.length < general_object.ships_amount){
			return this.self.getOpponentShipPosition(general_object); //Функция повторяется пока не найдено нужное число
		}else {console.log('Ошибка расстановки кораблей');}

	}

	//!Заталкивает индексы потенциально-заблокированных(те што находятся вокруг корабля) ячеек в массив, во избежании попадения в них компютером
	pushIndexInAnswerShotArr(index,general_object){
		for(var i = 0; i < this.self.SHIP_LOCATION_ALGORITM[index].length; i++){
			general_object.answerShotArr.push( this.self.SHIP_LOCATION_ALGORITM[index][i]);
		}
	}

	//!Возвращает оригинальный индекс ячейки, который не повторяется в массиве выстрелов противника (вызывается в Model answerShot())
	getIndexForAnswerShot(general_object){
		var integer = this.uf.getRandomInt(0, 63),
				resolt = this.uf.findValInArr(integer,general_object.answerShotArr);//Ищет совпадения числа в массиве заблокированных ячеек поля игрока

		if(resolt === true){
			general_object.answerShotArr.push(integer);
			return integer;
		}else{
			return this.self.getIndexForAnswerShot(general_object);//Функция повторяется пока не найдено нужное число
		}

	}

	//!Функция расстановки кораблей оппонента (вызывается в Controller playButtonHandler())
	opShipLocation(general_object){
		for(var i = 0; i < general_object.ships_amount; i++){
			this.self.getOpponentShipPosition(general_object);//Расставляет корабли по одному с учетом правил
		}
		this.self.saveInLocalStorage(general_object);//Сохраняет расстановку в хранилище
		//console.log('Корабли противника расставлены');
	}

	//!Ответный выстрел противника (вызывается в Controller playerShotHandler())
	answerShot(statisticCallback,general_object){

		var index_of_answer_shot = this.self.getIndexForAnswerShot(general_object),//Получает индекс потенциального ответного выстрела
				resolt_of_answer_shot = this.uf.findValInArr(index_of_answer_shot,general_object.myShipsLocationArr),//Проверяет наличие индекса в массиве расстановки кораблей игрока (промах или попадение)
				my_cells = $("#FildBattlePlayer > div.cell"),//Коллекция ячеек игрока
				model_context = this.self;
				//resolt_of_answer_shot === true - промах противника
				//resolt_of_answer_shot === false - попадание противника

		if(resolt_of_answer_shot === true){//Промах противника

			general_object.opMissesArr.push(index_of_answer_shot);//Заполняет массив промахов
			this.view.shotAnimation(my_cells.eq(index_of_answer_shot));//Анимация выстрела в ячейке противника
			my_cells.eq(index_of_answer_shot).addClass('mishitShot');//Вешает класс промаха

			if(typeof statisticCallback === 'function'){
				statisticCallback(general_object);//Обновляет статистику; statisticCallback - функция обновления статистики которая недоступна MyModel
			}

		} else if(resolt_of_answer_shot === false){//Попадание противника

			this.self.pushIndexInAnswerShotArr(index_of_answer_shot,general_object);//Заполняет массив потенциально заблокированными индексами ячеек
			general_object.opHitsArr.push(index_of_answer_shot);//Заполняет массив попаданий
			my_cells.eq(index_of_answer_shot).addClass('accurateShot');//Вешает класс попаданий
			my_cells.eq(index_of_answer_shot).find("img").addClass('hideElement');//Прячет корабль в ячейке игрока, куда попал противник

			if(typeof statisticCallback === 'function'){
				statisticCallback(general_object);//Обновляет статистику; statisticCallback - функция обновления статистики которая недоступна Model
			}

			if(general_object.opHitsArr.length < general_object.ships_amount){

				this.uf.alertMessage(2000,"Вы потеряли корабль!!!");
				setTimeout(function(){ model_context.answerShot(statisticCallback,general_object) },2100);//Повторный выстрел при попадании по кораблю игрока
			}else{
				this.self.progressOfGame(general_object);//Проверяет прогресс и завершает игру, блокируя ячейки оппонента от кликов функцией callback
			}

		} else {console.log('Ошибка answerShot - Model')}

		this.self.saveInLocalStorage(general_object);//Cохраняет информацию в хранилище
	}

	//!Функция реагирует на точный выстрес игрока (вызывается в Controller playerShotHandler)
	accurateShot(general_object){

		if(general_object.myHitsArr.length < general_object.ships_amount){
			this.uf.alertMessage(2000,"Вы подбили корабль противника!!!");//Выводит сообщение о точном попадании
		}else{
			this.self.progressOfGame(general_object);//Проверяет прогресс и завершает игру, блокируя ячейки оппонента от кликов функцией callback
		}
		this.self.saveInLocalStorage(general_object);//Сохраняет объект в хранилище (не избыточно)

	}

	//!Проверяет прогресс игры, выводит сообщение о выиграше или проиграше
	//!Вызывается в Controller	updateGameOnLoad и Model accurateShot
	progressOfGame(general_object){

		if(general_object.myHitsArr.length === general_object.ships_amount){

			var resolt = this.self.gameResolt(general_object);
			this.uf.alertMessage(5000,"Поздравляем, Вы ВЫИГРАЛИ!!! Ваши баллы: " + resolt);
			$(".finish_button").addClass('activeButton');

		}else if(

			general_object.opHitsArr.length === general_object.ships_amount){
			this.uf.alertMessage(6000,"К сожалению, Вы ПРОИГРАЛИ. Нажмите кнопку ФИНИШ");
			$(".finish_button").addClass('activeButton');

		}

	}

	//!Сохраняет информацию в локал сторидж (вызывается в Controller)
	saveInLocalStorage(object){
		localStorage.ShipBattleStorageInformation = JSON.stringify(object);//Переводит массив ShipBattleStorageInformation в формат JSON и сохраняет в localStorage
	}

}
//export default - дает возможность использовать компонент Model в других файлах
export default Model;
