

import $ from 'jquery';//Подключаем библиотеку jquery
import 'jquery-ui/ui/widgets/draggable.js';//Подключаем виджет jquery-ui
//import 'jquery-ui-touch-punch';//Подключаем событие тач для мобильных устройств

import View from './View.js';////Подключаем класс View

class Controller extends View{

	constructor(props) {
    super(props);

    this.self = this;
		this.model = this;
		this.view = this;
		this.uf = this;

	}

	//!Устанавливает правила для перемещения кораблей
	makeDraggable(){

			$('img.ship').draggable({
				 containment : '#GameRoom',//Перемещать можно только в пределах #game_room
				 revert : 'invalid',//Если корабль не попал на свое место, он возвращается обратно
				 cursor : 'move',//Форма курсора
				 snap: '#FildBattlePlayer > div.cell:empty'//Привязка корабля при передвижении к ячейкам поля
		 	})

	}

	//!Устанавливает правила для розмещения кораблей в результате их перемещения
	makeDroppable(model_context,view_context,general_object_from_state) {//Использую model_context и view_context для передачи контекста this

			var general_object = general_object_from_state;//Ссылка на глобальный объект из состояния

		 $('#FildBattlePlayer > div.cell').droppable({//Указывает куда можна ронять корабли
				 accept:'img.ship',//Указывает какие элементы принимать
				 tolerance: 'intersect',//Указывает условие перетаскивания, intersect - событие срабатывает если корабль на половину в ячейке

				 //activate: function( event, ui ) {},
				 over: function(event, ui) {//Действия программы, когда корабль над местом потенциального приземления (событие dragover)

		 				$(this).filter(":empty").addClass("hoverCell");//Вешает класс только если ячейка пуста

			 			var val_of_cell = +($(this).attr("val")),//Достает атрибут val из ячейки над которой сработало событие drop, и делает из строки число (унарный "+")
			 					//num_of_ship = +(ui.draggable.attr("num")),//Достает атрибут num из корабля над которым сработало событие draggable, и делает из строки число (унарный "+")
			 					arr_length = general_object.myDisabledCellsArr.length;//Длинна массива з индексами заблокированных ячеек игрока

			 			for(var i = 0; i < arr_length; i++){//Проверяет какие ячейки можно блокировать, а какие нет и запрещает оставлять корабль в заблокированных ячейках
			 				for(var j = 0; j < general_object.myDisabledCellsArr[i].length; j++){
			 					if(val_of_cell === general_object.myDisabledCellsArr[i][j]){
			 						$( this ).droppable( "disable" );//Запрет ронения в ячейку, если ее индекс находится в model.shipBattleGeneralObj.myDisabledCellsArr
			 					}
			 				}
			 			}

		 		 },

				 out: function(event, ui) {//Действия программы, когда корабль выходит из места потенциального приземления (событие dragout)
							$(this).removeClass("hoverCell");//$(this) - поточная ячейка
				 },

				 drop:function(event, ui){//Действия программы, когда корабль приземлился на место (сработало событие drop)

				 			var val_of_cell = +($(this).attr("val")),//Достает атрибут val из ячейки над которой сработало событие drop, и делает из строки число (унарный "+")
					 				num_of_ship = +(ui.draggable.attr("num")),//Достает атрибут num из корабля над которым сработало событие draggable, и делает из строки число (унарный "+")
					 				currently_ship = ui.draggable.remove().removeAttr("style"),//ui.draggable - элемент который перетаскивается (сначала вырезается из дома, затем у него удаляется атрибут style)
					 				arr_length = model_context.SHIP_LOCATION_ALGORITM[val_of_cell].length;

				 			for(var i = 0; i < arr_length; i++ ){
					 				general_object.myDisabledCellsArr[num_of_ship][0] = val_of_cell;//Первый элемент массива - всегда место на котором стоит корабль
					 				general_object.myDisabledCellsArr[num_of_ship][i+1] = model_context.SHIP_LOCATION_ALGORITM[val_of_cell][i];//Индексы заблокированных ячеек прописываются в массиве
					 				$("#FildBattlePlayer > div.cell").eq(model_context.SHIP_LOCATION_ALGORITM[val_of_cell][i]).addClass("lockCell");//Заблокированные ячейки закрашиваются красноватым цветом
							}
							general_object.myShipNumbInFild.push(num_of_ship);//Формируется массив с индексами (num) кораблей
				 			$(this).prepend(currently_ship);//Вставляет draggable-элемент в ячейку над которой сработало событие
				 			$(this).removeClass("hoverCell");//Убирает клас временной подсветки

		 			general_object.myShipsLocationArr.push(val_of_cell);//Добавляет позицию корабля в массив
		 			general_object.my_ship_count++;//Щитает корабли, которые были урaнены в поле

		 			view_context.updatePlayButtonStyleAndMode(general_object);//Проверяет информацию о игре, и вешает класс активности(зеленая кнопка) при успешной проверке
		 			model_context.saveInLocalStorage(general_object); //Сохраняет глобальный объект с информацией

		 		}
		 })
	}

	//!Событие кнопки ИГРАТЬ
	playButtonHandler(e,general_object){

		if(general_object.mode_of_game === true){//Если условие истинно, значит корабли расставлены правильно и можно изменить режим плей и начать игру

			general_object.mode_of_play = true;//Меняем режим плей

			this.view.updateStyleOnChangeGameMode(general_object);//Меняет стили после нажатия кнопки ИГРАТЬ

			this.model.opShipLocation(general_object);//Делает расстановку кораблей противника

			this.model.saveInLocalStorage(general_object);//Сохраняем глобальный объект с информацией в хранилище

		}else{//Выводит предуприждение, если корабли еще не расставлены

			this.uf.alertMessage(2000,'Сначала расставьте все корабли на своем поле');

		}
	}

	//!Событие кнопки ПРАВИЛА
	rulsButtonHandler(e){

		var mes_of_ruls1 = "Расставьте корабли и нажмите кнопку ИГРАТЬ",
				mes_of_ruls2 = "Когда попадете по кораблю противника - стреляйте еще раз, если мимо - стреляет противник",
				mes_of_ruls3 = "Когда соперник подбивает Вас - он стреляет повторно",
				mes_of_ruls4 = "Если Вы побеждаете - на экран выводится сообщение о ваших баллах",
				mes_of_ruls5 = "В любой момент можно закончить игру нажав кнопку ФИНИШ",
				mes_of_ruls6 = 'Учитывайте, что корабли противника не могут стоять в соседних ячейках';

		this.uf.closeMessage(mes_of_ruls1, mes_of_ruls2, mes_of_ruls6, mes_of_ruls3, mes_of_ruls4, mes_of_ruls5);

	}

	//Cобытие кнопки РЕКОРДЫ
	recordsButtonHandler(e){
			alert('Модуль находится в разработке!!!');
	}

	//!Событие кнопки КОНЕЦ ИГРЫ
	finishButtonHandler(e){

		localStorage.removeItem("ShipBattleStorageInformation");//Удаляет информацию из хранилища
		window.location.reload();//Перезагружает страницу

	}

	//!Событие клика по ячейке противника (попадание - промах)
	playerClickHandler(e,general_object){

		if(
			general_object.mode_of_game === true &&
			general_object.mode_of_play === true &&
			general_object.opHitsArr.length < 6 &&
			general_object.myHitsArr.length < 6
		){

				var currently_cell = $(e.target),//Ячейка на которой сработал клик
						index = +currently_cell.attr('val'),//Вытягивает значение атрибута val и преобразует в число (унарный +)
						resolt = this.uf.findValInArr(index,general_object.opShipsLocationArr),
						context = this.self;
						//resolt === true - промах (функция возвращает true если индекс ячейки не совпадает с индексом росстановки кораблей в массиве)
						//resolt === false - попадание (функция возвращает false если индекс ячейки совпадает с индексом росстановки кораблей в массиве)

				if(resolt === true && Number.isInteger(index) && this.uf.findValInArr(index,general_object.myMissesArr)){//Промах игрока

					//console.log('Ваш промах');
					general_object.myMissesArr.push(index);//Заполняет массив индексами промахов игрока
					currently_cell.addClass('mishitShot');//Вешает клас выстрела мимо на ячейку противника
					this.view.shotAnimation(currently_cell);//Анимация выстрела в ячейке противника

					setTimeout(function(){ context.answerShot(context.updateStatisticTable,general_object);},300);
					//this.model.answerShot(this.view.updateStatisticTable,general_object);//Ответный выстрел противника при промахе игрока  opCellsEventOff - callback + сохраняет инфу в хранилище и обновляет статистику

					this.view.updateStatisticTable(general_object);//Обновляет статистику

				}else if(resolt === false && Number.isInteger(index) && this.uf.findValInArr(index,general_object.myHitsArr)){//Попадание игрока

					//console.log('Ваше попадание');
					general_object.myHitsArr.push(index);//Заполняет массив индексами попаданий игрока
					currently_cell.addClass('accurateShot');//Вешает клас точного выстрела
					this.view.shotAnimation(currently_cell);//Анимация выстрела

					this.view.updateStatisticTable(general_object);//Обновляет статистику
					this.model.accurateShot(general_object);//Реагирует на точьный вестрел игрока*/

				}

				this.model.saveInLocalStorage(general_object);//Cохраняет информацию в хранилище

		}else if(
			general_object.opHitsArr.length === 6 ||
			general_object.myHitsArr.length === 6
		){

			this.model.progressOfGame(general_object);//Проверяет прогресс игры при условии проиграша или поражения

		}else {

			this.uf.alertMessage(2500,"Расставьте корабли и нажмите кнопку ИГРАТЬ");

		}

	}

	//!Обновляет  игру при полной загрузке страницы, вызывается в App.js
	updateGameOnLoad(general_object_from_state){

		this.model.progressOfGame(general_object_from_state);//Проверяет прогресс игры	при загрузке
		this.view.updateView(general_object_from_state);//Обновляет отображение игры

	}

}
//export default - дает возможность использовать компонент Controller в других файлах
export default Controller;
