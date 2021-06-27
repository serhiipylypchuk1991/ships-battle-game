import React from "react";//Подключаем react библиотеку

class UsefulFunctions extends React.Component{
	constructor(props) {
    super(props);
    this.self = this;
	}


	//генерирует дату и время при отправке
	dateOfPublication(){
		// форматирует переданную дату-время в формате дд.мм.гггг чч:мм
		function FormatDateTime(DT){
			var Year = DT.getFullYear(),
				Month = DT.getMonth()+1,
				Day = DT.getDate(),
				Hours = DT.getHours(),
				Minutes = DT.getMinutes(),
				Seconds = DT.getSeconds();
			return  Str0L(Day,2) + '.' + Str0L(Month,2) + '.' + Year +' '+Str0L(Hours,2) + ':' + Str0L(Minutes,2);
		}
		// дополняет строку Val слева нулями до длины Len
		function Str0L(Val,Len)
		{
			var StrVal = Val.toString();
			while ( StrVal.length < Len )
				StrVal = '0' + StrVal;
			return StrVal;
		}
		var CurrTime = new Date();
		return FormatDateTime(CurrTime);
	}

	//выводит информацию на экран, блокирует содержимое страницы; указывается время показа (в милисекундах) и текст сообщения
	alertMessage(time,string){
		var body = document.querySelector('body'),
			lockBody = document.createElement('div'),
			messageBox = document.createElement('p'),
			txt = document.createTextNode(string);

		if(isNaN(time) === false && time >= 1000 && time <= 10000){var timeMc = time;}
		else{var timeMc = 3000}

		if(string.length > 0 && string.length < 100){
			lockBody.id = 'lockBody';//стили находятся в genereal.css
			messageBox.className = 'messageBox';//стили находятся в genereal.css
			messageBox.appendChild(txt);
			lockBody.appendChild(messageBox);
			body.appendChild(lockBody);
			setTimeout(function(){ body.removeChild(lockBody); },timeMc);
		}else{alert('Ошибка длины строки');}

	}

	//спрашивает информацию о дальнейших действиях, блокирует содержимое страницы;
	confirmMessage(string,func){
		var body = document.querySelector('body'),
			lockBody = document.createElement('div'),
			confirmBox = document.createElement('p'),
			trueButton = document.createElement('button'),
			falseButton = document.createElement('button'),
			textMessage  =   document.createTextNode(string);
		trueButton.innerHTML = 'Да';
		falseButton.innerHTML = 'Нет';

		if(string.length > 0 && string.length < 100){
			lockBody.id = 'lockBody';//стили находятся в genereal.css
			confirmBox.className = 'confirmBox';//стили находятся в genereal.css
			trueButton.className = 'confirmTrue';
			falseButton.className = 'confirmTrue';
			confirmBox.appendChild(textMessage);
			confirmBox.appendChild(trueButton);
			confirmBox.appendChild(falseButton);
			lockBody.appendChild(confirmBox);
			body.appendChild(lockBody);
			falseButton.addEventListener('click',function(){func(false,body,lockBody);},false);
			trueButton.addEventListener('click',function(){func(true,body,lockBody);},false);
		}else{alert('Ошибка');}
	}

	//спрашивает информацию о дальнейших действиях, блокирует содержимое страницы;
	closeMessage(string){
		var body = document.querySelector('body'),
			lockBody = document.createElement('div'),
			confirmBox = document.createElement('p'),
			closeButton = document.createElement('button');
		closeButton.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

		if(arguments.length > 1){
			var ul_element = document.createElement('ul');

			for(var i = 0; i < arguments.length; i++){
				var li_element = document.createElement('li');

				if(typeof arguments[i] === "string"){
					var textMessage = document.createTextNode(arguments[i]);
				}else{
					var textMessage = document.createTextNode("Вы ввели не строку");
				}

				li_element.appendChild(textMessage);
				ul_element.appendChild(li_element);
			}

			lockBody.id = 'lockBody';//стили находятся в genereal.css
			confirmBox.className = 'confirmBox';//стили находятся в genereal.css
			confirmBox.appendChild(ul_element);
			confirmBox.appendChild(closeButton);
			lockBody.appendChild(confirmBox);
			body.appendChild(lockBody);
			closeButton.addEventListener('click',function(){body.removeChild(lockBody)});

		}else if(string.length > 0 && string.length < 300){
			var textMessage = document.createTextNode(string);
			lockBody.id = 'lockBody';//стили находятся в genereal.css
			confirmBox.className = 'confirmBox';//стили находятся в genereal.css
			closeButton.className = 'confirmTrue';
			confirmBox.appendChild(textMessage);
			confirmBox.appendChild(closeButton);
			lockBody.appendChild(confirmBox);
			body.appendChild(lockBody);
			closeButton.addEventListener('click',function(){body.removeChild(lockBody)});
		}else{alert('Ошибка');}

	};

	//возвращает случайное число в диапазоне min - max (в нашем случае 0-63)
	getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//принимает элемент(в нашем случае число) и массив, если элемент (число) есть в массиве - возвращает false, если нет - true
	findValInArr(val,arr){
		if(arr.length > 0){
			for(var i = 0; i < arr.length; i++){
				if(arr[i] === +val){
					return false;
				} else if(i === arr.length-1){
					return true;
				}
			}
		} else { return true; }
	}

}
//export default - дает возможность использовать компонент UsefulFunctions в других файлах
export default UsefulFunctions;
