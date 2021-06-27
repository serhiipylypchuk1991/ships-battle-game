
import ShutAnimation from '../images/shut_animation.gif';//Подключаем картинку анимации выстрела
import $ from 'jquery';//Подключаем библиотеку jquery

import Model from './Model.js';//Подключаем класс Model

class View extends Model{

	constructor(props) {
    super(props);

    this.self = this;
		this.model = this;

	}

	//!Устанавливает стили для игры при загрузке страницы (вызывается в View updateView)
	updateModeGameStyle(general_object){

		var game_room = $('#GameRoom');

		if(general_object.my_ship_count < general_object.ships_amount){

			game_room.addClass('style1');//Устанавливаем нужный клас, пока корабли еще не расставлены и игра не начата

		} else if(general_object.mode_of_game === true && general_object.mode_of_play === false) {

			game_room.addClass('style1');//Устанавливаем нужный клас, если корабли уже расставлены, но игра не начата
			this.self.updatePlayButtonStyleAndMode(general_object);//Подсвечиваем кнопку ИГРАТЬ зеленым цветом

		} else{//Все условия соблюдены и игра уже началась

			game_room.addClass('style2');//Устанавливаем нужный клас после перезагрузки, если игра уже началось
			$(".play_button").removeClass("activeButton").attr('disabled','disabled');//Блокируем кнопку Играть при перезагрузке, если игра уже началось

		}

	}

	//!Возобновляет расстановку кораблей на поле игрока, при загрузке (вызывается в View updateView)
	updateMyShipsLocation(general_object){

		var ships_in_port = $("#ShipsPort > div > img.ship");//Массив с кораблями в порту
		var player_cells = $("#FildBattlePlayer > div.cell");//Массив с ячейками для поля игрока

		if(general_object.myShipNumbInFild.length > 0){

				for(var i = 0; i < general_object.myShipNumbInFild.length; i++){//Перебирает корабли от 0 до 5 (по атрибутам num)

					var ship_num = general_object.myShipNumbInFild[i];//Получаем значение атрибута num корабля по порядку размещения

					if(general_object.myDisabledCellsArr[ship_num].length > 0){//Если длинна массива с заблокированными ячейками вокруг корабля (i - это num корабля) больше 0 то ...

							for(var j = 0; j < general_object.myDisabledCellsArr[ship_num].length; j++){ //Проходимся цыклом по массиву с заблокированными ячейками вокруг корабля, num которого равен ship_num

									if(j === 0){

										var currently_ship = ships_in_port.eq(ship_num).remove();//Вырезает корабль, индекс в выборке которго совпадает с индексом соответствуещего элемента массива
										player_cells.eq(general_object.myDisabledCellsArr[ship_num][j]).prepend(currently_ship);//ячейка принимает вырезаный корабль

								} else if (

										general_object.mode_of_game === false || general_object.mode_of_play === false){
										player_cells.eq(general_object.myDisabledCellsArr[ship_num][j]).addClass("lockCell");//Закрашевает заблокированные ячейки

									}

							}
					}

				}
			}
	}

	//!Обновляет стили  попаданий и промахов игрока на поле соперника (вызывается в View updateView)
	updateMyShotStyle(general_object){

		if(general_object.myHitsArr.length > 0){

			for(var i = 0; i < general_object.myHitsArr.length; i++){
				$("#FildBattleRival > div.cell").eq(general_object.myHitsArr[i]).addClass('accurateShot');//Обновление попаданий игрока (черный цвет ячейки)
			}

		}

		if(general_object.myMissesArr.length > 0){

			for(var j = 0; j < general_object.myMissesArr.length; j++){
				$("#FildBattleRival > div.cell").eq(general_object.myMissesArr[j]).addClass('mishitShot');//Обновление промахов игрока (красный цвет ячейки)
			}

		}

	}

	//!Обновляет стили  попаданий и промахов противника на поле игрока (вызывается в View updateView)
	updateOpShotStyle(general_object){

		if(general_object.opHitsArr.length > 0){

			for(var i = 0; i < general_object.opHitsArr.length; i++){
				$("#FildBattlePlayer > div.cell").eq(general_object.opHitsArr[i]).addClass('accurateShot');//Обновление попаданий игрока (черный цвет ячейки)
				$("#FildBattlePlayer > div.cell").eq(general_object.opHitsArr[i]).find('img').addClass('hideElement');
			}

		}

		if(general_object.opMissesArr.length > 0){

			for(var j = 0; j < general_object.opMissesArr.length; j++){
				$("#FildBattlePlayer > div.cell").eq(general_object.opMissesArr[j]).addClass('mishitShot');//Обновление промахов игрока (красный цвет ячейки)
			}

		}

	}

	//!Обновляет таблицу статистики игры (вызывается в View updateView и Controller playerShotHandler)
	updateStatisticTable(general_object){

		$(".my_hits").text(general_object.myHitsArr.length);//Обновляет количество попаданий игрока
		$(".op_hits").text(general_object.opHitsArr.length);//Обновляет количество попаданий противника

		$(".my_misses").text(general_object.myMissesArr.length);//Обновляет количество промахов игрока
		$(".op_misses").text(general_object.opMissesArr.length);//Обновляет количество промахов противника

		$(".my_losses").text(general_object.opHitsArr.length);//Обновляет количество потерь игрока, которое равно количеству попаданий противника
		$(".op_losses").text(general_object.myHitsArr.length);//Обновляет количество потерь противника, которое равно количеству попаданий игрока

	}

	//!Обновляет отображение прогреса игры (вызывается в Controller updateGameOnLoad)
	updateView(general_object){

		this.self.updateModeGameStyle(general_object);//Возобновляет стили для game_room учитывая прогрес игры
		this.self.updateMyShipsLocation(general_object);//Возобновляет расстановку кораблей на поле игрока
		this.self.updateMyShotStyle(general_object);//Возобновляет попадания и промахи игрока на поле противника
		this.self.updateOpShotStyle(general_object);//Возобновляет попадания и промахи противника на поле игрока
		//this.self.updateStatisticTable(general_object);//Возобновляет таблицу статистики - по факту оказалась излишней здесь

	}

	//!Меняет стили игры  (вызывается в Controller playButtonHandler() при клике на кнопку ИГРАТЬ)
	updateStyleOnChangeGameMode(general_object){

		var player_cells = $("#FildBattlePlayer > div.cell");//Массив с ячейками для поля игрока

		//Если игра начата, убираем ненужные классы подсветки поля игрока
		if(general_object.mode_of_game === true && general_object.mode_of_play === true){

			for(var i = 0; i <= 63; i++){
				player_cells.eq(i).removeClass('lockCell hoverCell');
			}

			$('#GameRoom').fadeOut( 500,function(){

				$(this).removeClass().addClass('style2').fadeIn( 500 );//Устанавливает нужный класс и делает плавную анимацию между стилями
				$(".play_button").removeClass("activeButton").attr('disabled','disabled');//Блокирует кнопку ИГРАТЬ

			});

		}

	}

	//!Проверяет состояние игры, а затем активирует кнопку и режим игры
	//!Вызывается в Controller makeDraggable(), и View updateModeGameStyle() при активации кнопки Играть (подсветка зеленым цветом)
	updatePlayButtonStyleAndMode(general_object){

		if(general_object.my_ship_count === general_object.ships_amount && general_object.mode_of_game === false){

			//Для Controller makeDraggable() когда все корабли расставлены
			$(".play_button").addClass('activeButton');//Вешает класс активности (зеленая подсветка), когда все корабли уже расставлены
			general_object.mode_of_game = true; //Устанавливает режим игры true (при перезагрузке установится стиль style2)

		}else if(general_object.my_ship_count === general_object.ships_amount && general_object.mode_of_game === true && general_object.mode_of_play === false){

			//для View updateModeGameStyle() при перезагрузке
			$(".play_button").addClass('activeButton');//Убирает атрибут с кнопки и вешает класс активности (зеленая подсветка)

		}

	}

	//!Воспроизводит анимацию выстрела (вызывается в Controller)
	shotAnimation(currently_element){

			currently_element.html('<img src = '+ ShutAnimation +'>');//Вставляет анимацию выстрела
			currently_element.find('img').fadeOut(3000,function(){//Скрывает анимацию выстрела
				$(this).remove();//Вырезает анимацию
			})
			
	}

}
//export default - дает возможность использовать компонент View в других файлах
export default View;
