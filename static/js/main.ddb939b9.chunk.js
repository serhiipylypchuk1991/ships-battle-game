/*! For license information please see main.ddb939b9.chunk.js.LICENSE.txt */
(this["webpackJsonpships-battle-react-app"]=this["webpackJsonpships-battle-react-app"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(7),r=a.n(s),l=a(13),i=a.n(l),o=a(3),c=a(4),d=a(2),u=a(6),h=a(5),m=a(0),p=a.n(m),f=(a(19),a(10),a.p+"static/media/shut_animation.10a2bb90.gif"),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).self=Object(d.a)(n),n}return Object(c.a)(a,[{key:"dateOfPublication",value:function(){function e(e,t){for(var a=e.toString();a.length<t;)a="0"+a;return a}return function(t){var a=t.getFullYear(),n=t.getMonth()+1,s=t.getDate(),r=t.getHours(),l=t.getMinutes();return t.getSeconds(),e(s,2)+"."+e(n,2)+"."+a+" "+e(r,2)+":"+e(l,2)}(new Date)}},{key:"alertMessage",value:function(e,t){var a=document.querySelector("body"),n=document.createElement("div"),s=document.createElement("p"),r=document.createTextNode(t);if(!1===isNaN(e)&&e>=1e3&&e<=1e4)var l=e;else l=3e3;t.length>0&&t.length<100?(n.id="lockBody",s.className="messageBox",s.appendChild(r),n.appendChild(s),a.appendChild(n),setTimeout((function(){a.removeChild(n)}),l)):alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043b\u0438\u043d\u044b \u0441\u0442\u0440\u043e\u043a\u0438")}},{key:"confirmMessage",value:function(e,t){var a=document.querySelector("body"),n=document.createElement("div"),s=document.createElement("p"),r=document.createElement("button"),l=document.createElement("button"),i=document.createTextNode(e);r.innerHTML="\u0414\u0430",l.innerHTML="\u041d\u0435\u0442",e.length>0&&e.length<100?(n.id="lockBody",s.className="confirmBox",r.className="confirmTrue",l.className="confirmTrue",s.appendChild(i),s.appendChild(r),s.appendChild(l),n.appendChild(s),a.appendChild(n),l.addEventListener("click",(function(){t(!1,a,n)}),!1),r.addEventListener("click",(function(){t(!0,a,n)}),!1)):alert("\u041e\u0448\u0438\u0431\u043a\u0430")}},{key:"closeMessage",value:function(e){var t=document.querySelector("body"),a=document.createElement("div"),n=document.createElement("p"),s=document.createElement("button");if(s.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>',arguments.length>1){for(var r=document.createElement("ul"),l=0;l<arguments.length;l++){var i=document.createElement("li");if("string"===typeof arguments[l])var o=document.createTextNode(arguments[l]);else o=document.createTextNode("\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435 \u0441\u0442\u0440\u043e\u043a\u0443");i.appendChild(o),r.appendChild(i)}a.id="lockBody",n.className="confirmBox",n.appendChild(r),n.appendChild(s),a.appendChild(n),t.appendChild(a),s.addEventListener("click",(function(){t.removeChild(a)}))}else if(e.length>0&&e.length<300){o=document.createTextNode(e);a.id="lockBody",n.className="confirmBox",s.className="confirmTrue",n.appendChild(o),n.appendChild(s),a.appendChild(n),t.appendChild(a),s.addEventListener("click",(function(){t.removeChild(a)}))}else alert("\u041e\u0448\u0438\u0431\u043a\u0430")}},{key:"getRandomInt",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},{key:"findValInArr",value:function(e,t){if(!(t.length>0))return!0;for(var a=0;a<t.length;a++){if(t[a]===+e)return!1;if(a===t.length-1)return!0}}}]),a}(r.a.Component),v=new(function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"ShipLocationAlgoritm",value:function(){return[[1,8,9],[0,2,8,9,10],[1,3,9,10,11],[2,4,10,11,12],[3,5,11,12,13],[4,6,12,13,14],[5,7,13,14,15],[6,14,15],[0,1,9,16,17],[0,1,2,8,10,16,17,18],[1,2,3,9,11,17,18,19],[2,3,4,10,12,18,19,20],[3,4,5,11,13,19,20,21],[4,5,6,12,14,20,21,22],[5,6,7,13,15,21,22,23],[6,7,14,22,23],[8,9,17,24,25],[8,9,10,16,18,24,25,26],[9,10,11,17,19,25,26,27],[10,11,12,18,20,26,27,28],[11,12,13,19,21,27,28,29],[12,13,14,20,22,28,29,30],[13,14,15,21,23,29,30,31],[14,15,22,30,31],[16,17,25,32,33],[16,17,18,24,26,32,33,34],[17,18,19,25,27,33,34,35],[18,19,20,26,28,34,35,36],[19,20,21,27,29,35,36,37],[20,21,22,28,30,36,37,38],[21,22,23,29,31,37,38,39],[22,23,30,38,39],[24,25,33,40,41],[24,25,26,32,34,40,41,42],[25,26,27,33,35,41,42,43],[26,27,28,34,36,42,43,44],[27,28,29,35,37,43,44,45],[28,29,30,36,38,44,45,46],[29,30,31,37,39,45,46,47],[30,31,38,46,47],[32,33,41,48,49],[32,33,34,40,42,48,49,50],[33,34,35,41,43,49,50,51],[34,35,36,42,44,50,51,52],[35,36,37,43,45,51,52,53],[36,37,38,44,46,52,53,54],[37,38,39,45,47,53,54,55],[38,39,46,54,55],[40,41,49,56,57],[40,41,42,48,50,56,57,58],[41,42,43,49,51,57,58,59],[42,43,44,50,52,58,59,60],[43,44,45,51,53,59,60,61],[44,45,46,52,54,60,61,62],[45,46,47,53,55,61,62,63],[46,47,54,62,63],[48,49,57],[48,49,50,56,58],[49,50,51,57,59],[50,51,52,58,60],[51,52,53,59,61],[52,53,54,60,62],[53,54,55,61,63],[54,55,62]]}}]),a}(r.a.Component)),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).self=Object(d.a)(n),n.model=Object(d.a)(n),n.view=Object(d.a)(n),n.uf=Object(d.a)(n),n}return Object(c.a)(a,[{key:"makeDraggable",value:function(){p()("img.ship").draggable({containment:"#GameRoom",revert:"invalid",cursor:"move",snap:"#FildBattlePlayer > div.cell:empty"})}},{key:"makeDroppable",value:function(e,t,a){var n=a;p()("#FildBattlePlayer > div.cell").droppable({accept:"img.ship",tolerance:"intersect",over:function(e,t){p()(this).filter(":empty").addClass("hoverCell");for(var a=+p()(this).attr("val"),s=n.myDisabledCellsArr.length,r=0;r<s;r++)for(var l=0;l<n.myDisabledCellsArr[r].length;l++)a===n.myDisabledCellsArr[r][l]&&p()(this).droppable("disable")},out:function(e,t){p()(this).removeClass("hoverCell")},drop:function(a,s){for(var r=+p()(this).attr("val"),l=+s.draggable.attr("num"),i=s.draggable.remove().removeAttr("style"),o=e.SHIP_LOCATION_ALGORITM[r].length,c=0;c<o;c++)n.myDisabledCellsArr[l][0]=r,n.myDisabledCellsArr[l][c+1]=e.SHIP_LOCATION_ALGORITM[r][c],p()("#FildBattlePlayer > div.cell").eq(e.SHIP_LOCATION_ALGORITM[r][c]).addClass("lockCell");n.myShipNumbInFild.push(l),p()(this).prepend(i),p()(this).removeClass("hoverCell"),n.myShipsLocationArr.push(r),n.my_ship_count++,t.updatePlayButtonStyleAndMode(n),e.saveInLocalStorage(n)}})}},{key:"playButtonHandler",value:function(e,t){!0===t.mode_of_game?(t.mode_of_play=!0,this.view.updateStyleOnChangeGameMode(t),this.model.opShipLocation(t),this.model.saveInLocalStorage(t)):this.uf.alertMessage(2e3,"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0441\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0432\u0441\u0435 \u043a\u043e\u0440\u0430\u0431\u043b\u0438 \u043d\u0430 \u0441\u0432\u043e\u0435\u043c \u043f\u043e\u043b\u0435")}},{key:"rulsButtonHandler",value:function(e){this.uf.closeMessage("\u0420\u0430\u0441\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u0440\u0430\u0431\u043b\u0438 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0418\u0413\u0420\u0410\u0422\u042c","\u041a\u043e\u0433\u0434\u0430 \u043f\u043e\u043f\u0430\u0434\u0435\u0442\u0435 \u043f\u043e \u043a\u043e\u0440\u0430\u0431\u043b\u044e \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430 - \u0441\u0442\u0440\u0435\u043b\u044f\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437, \u0435\u0441\u043b\u0438 \u043c\u0438\u043c\u043e - \u0441\u0442\u0440\u0435\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a","\u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0439\u0442\u0435, \u0447\u0442\u043e \u043a\u043e\u0440\u0430\u0431\u043b\u0438 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0441\u0442\u043e\u044f\u0442\u044c \u0432 \u0441\u043e\u0441\u0435\u0434\u043d\u0438\u0445 \u044f\u0447\u0435\u0439\u043a\u0430\u0445","\u041a\u043e\u0433\u0434\u0430 \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u043f\u043e\u0434\u0431\u0438\u0432\u0430\u0435\u0442 \u0412\u0430\u0441 - \u043e\u043d \u0441\u0442\u0440\u0435\u043b\u044f\u0435\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e","\u0415\u0441\u043b\u0438 \u0412\u044b \u043f\u043e\u0431\u0435\u0436\u0434\u0430\u0435\u0442\u0435 - \u043d\u0430 \u044d\u043a\u0440\u0430\u043d \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e \u0432\u0430\u0448\u0438\u0445 \u0431\u0430\u043b\u043b\u0430\u0445","\u0412 \u043b\u044e\u0431\u043e\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0438\u0433\u0440\u0443 \u043d\u0430\u0436\u0430\u0432 \u043a\u043d\u043e\u043f\u043a\u0443 \u0424\u0418\u041d\u0418\u0428")}},{key:"recordsButtonHandler",value:function(e){alert("\u041c\u043e\u0434\u0443\u043b\u044c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435!!!")}},{key:"finishButtonHandler",value:function(e){localStorage.removeItem("ShipBattleStorageInformation"),window.location.reload()}},{key:"playerClickHandler",value:function(e,t){if(!0===t.mode_of_game&&!0===t.mode_of_play&&t.opHitsArr.length<6&&t.myHitsArr.length<6){var a=p()(e.target),n=+a.attr("val"),s=this.uf.findValInArr(n,t.opShipsLocationArr),r=this.self;!0===s&&Number.isInteger(n)&&this.uf.findValInArr(n,t.myMissesArr)?(t.myMissesArr.push(n),a.addClass("mishitShot"),this.view.shotAnimation(a),setTimeout((function(){r.answerShot(r.updateStatisticTable,t)}),300),this.view.updateStatisticTable(t)):!1===s&&Number.isInteger(n)&&this.uf.findValInArr(n,t.myHitsArr)&&(t.myHitsArr.push(n),a.addClass("accurateShot"),this.view.shotAnimation(a),this.view.updateStatisticTable(t),this.model.accurateShot(t)),this.model.saveInLocalStorage(t)}else 6===t.opHitsArr.length||6===t.myHitsArr.length?this.model.progressOfGame(t):this.uf.alertMessage(2500,"\u0420\u0430\u0441\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u0440\u0430\u0431\u043b\u0438 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0418\u0413\u0420\u0410\u0422\u042c")}},{key:"updateGameOnLoad",value:function(e){this.model.progressOfGame(e),this.view.updateView(e)}}]),a}(function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).self=Object(d.a)(n),n.model=Object(d.a)(n),n}return Object(c.a)(a,[{key:"updateModeGameStyle",value:function(e){var t=p()("#GameRoom");e.my_ship_count<e.ships_amount?t.addClass("style1"):!0===e.mode_of_game&&!1===e.mode_of_play?(t.addClass("style1"),this.self.updatePlayButtonStyleAndMode(e)):(t.addClass("style2"),p()(".play_button").removeClass("activeButton").attr("disabled","disabled"))}},{key:"updateMyShipsLocation",value:function(e){var t=p()("#ShipsPort > div > img.ship"),a=p()("#FildBattlePlayer > div.cell");if(e.myShipNumbInFild.length>0)for(var n=0;n<e.myShipNumbInFild.length;n++){var s=e.myShipNumbInFild[n];if(e.myDisabledCellsArr[s].length>0)for(var r=0;r<e.myDisabledCellsArr[s].length;r++)if(0===r){var l=t.eq(s).remove();a.eq(e.myDisabledCellsArr[s][r]).prepend(l)}else!1!==e.mode_of_game&&!1!==e.mode_of_play||a.eq(e.myDisabledCellsArr[s][r]).addClass("lockCell")}}},{key:"updateMyShotStyle",value:function(e){if(e.myHitsArr.length>0)for(var t=0;t<e.myHitsArr.length;t++)p()("#FildBattleRival > div.cell").eq(e.myHitsArr[t]).addClass("accurateShot");if(e.myMissesArr.length>0)for(var a=0;a<e.myMissesArr.length;a++)p()("#FildBattleRival > div.cell").eq(e.myMissesArr[a]).addClass("mishitShot")}},{key:"updateOpShotStyle",value:function(e){if(e.opHitsArr.length>0)for(var t=0;t<e.opHitsArr.length;t++)p()("#FildBattlePlayer > div.cell").eq(e.opHitsArr[t]).addClass("accurateShot"),p()("#FildBattlePlayer > div.cell").eq(e.opHitsArr[t]).find("img").addClass("hideElement");if(e.opMissesArr.length>0)for(var a=0;a<e.opMissesArr.length;a++)p()("#FildBattlePlayer > div.cell").eq(e.opMissesArr[a]).addClass("mishitShot")}},{key:"updateStatisticTable",value:function(e){p()(".my_hits").text(e.myHitsArr.length),p()(".op_hits").text(e.opHitsArr.length),p()(".my_misses").text(e.myMissesArr.length),p()(".op_misses").text(e.opMissesArr.length),p()(".my_losses").text(e.opHitsArr.length),p()(".op_losses").text(e.myHitsArr.length)}},{key:"updateView",value:function(e){this.self.updateModeGameStyle(e),this.self.updateMyShipsLocation(e),this.self.updateMyShotStyle(e),this.self.updateOpShotStyle(e)}},{key:"updateStyleOnChangeGameMode",value:function(e){var t=p()("#FildBattlePlayer > div.cell");if(!0===e.mode_of_game&&!0===e.mode_of_play){for(var a=0;a<=63;a++)t.eq(a).removeClass("lockCell hoverCell");p()("#GameRoom").fadeOut(500,(function(){p()(this).removeClass().addClass("style2").fadeIn(500),p()(".play_button").removeClass("activeButton").attr("disabled","disabled")}))}}},{key:"updatePlayButtonStyleAndMode",value:function(e){e.my_ship_count===e.ships_amount&&!1===e.mode_of_game?(p()(".play_button").addClass("activeButton"),e.mode_of_game=!0):e.my_ship_count===e.ships_amount&&!0===e.mode_of_game&&!1===e.mode_of_play&&p()(".play_button").addClass("activeButton")}},{key:"shotAnimation",value:function(e){e.html("<img src = "+f+">"),e.find("img").fadeOut(3e3,(function(){p()(this).remove()}))}}]),a}(function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).self=Object(d.a)(n),n.uf=Object(d.a)(n),n.SHIP_LOCATION_ALGORITM=v.ShipLocationAlgoritm(),n}return Object(c.a)(a,[{key:"getObjectFromLocalStorage",value:function(){return"undefined"!==typeof Storage&&localStorage.ShipBattleStorageInformation?JSON.parse(localStorage.ShipBattleStorageInformation):{myDisabledCellsArr:[[],[],[],[],[],[]],opDisabledCellsArr:[],myShipsLocationArr:[],opShipsLocationArr:[],myMissesArr:[],opMissesArr:[],myHitsArr:[],opHitsArr:[],answerShotArr:[],my_ship_count:0,ships_amount:6,mode_of_game:!1,mode_of_play:!1,myShipNumbInFild:[]}}},{key:"forMapIndexArray",value:function(e){var t=[];if(e>7)for(var a=0;a<=e;a++)t.push(a);else for(a=0;a<e;a++)t.push(a);return t}},{key:"gameResolt",value:function(e){return 200*e.myHitsArr.length-50*e.opHitsArr.length-10*e.myMissesArr.length}},{key:"getOpponentShipPosition",value:function(e){var t=this.uf.getRandomInt(0,63),a=this.uf.findValInArr(t,e.opDisabledCellsArr);if(!0===a){for(var n=0;n<this.self.SHIP_LOCATION_ALGORITM[t].length;n++)0===n?(e.opShipsLocationArr.push(t),e.opDisabledCellsArr.push(t),e.opDisabledCellsArr.push(this.self.SHIP_LOCATION_ALGORITM[t][n])):e.opDisabledCellsArr.push(this.self.SHIP_LOCATION_ALGORITM[t][n]);return t}if(!1===a&&e.opShipsLocationArr.length<e.ships_amount)return this.self.getOpponentShipPosition(e);console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0430\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u0440\u0430\u0431\u043b\u0435\u0439")}},{key:"pushIndexInAnswerShotArr",value:function(e,t){for(var a=0;a<this.self.SHIP_LOCATION_ALGORITM[e].length;a++)t.answerShotArr.push(this.self.SHIP_LOCATION_ALGORITM[e][a])}},{key:"getIndexForAnswerShot",value:function(e){var t=this.uf.getRandomInt(0,63);return!0===this.uf.findValInArr(t,e.answerShotArr)?(e.answerShotArr.push(t),t):this.self.getIndexForAnswerShot(e)}},{key:"opShipLocation",value:function(e){for(var t=0;t<e.ships_amount;t++)this.self.getOpponentShipPosition(e);this.self.saveInLocalStorage(e)}},{key:"answerShot",value:function(e,t){var a=this.self.getIndexForAnswerShot(t),n=this.uf.findValInArr(a,t.myShipsLocationArr),s=p()("#FildBattlePlayer > div.cell"),r=this.self;!0===n?(t.opMissesArr.push(a),this.view.shotAnimation(s.eq(a)),s.eq(a).addClass("mishitShot"),"function"===typeof e&&e(t)):!1===n?(this.self.pushIndexInAnswerShotArr(a,t),t.opHitsArr.push(a),s.eq(a).addClass("accurateShot"),s.eq(a).find("img").addClass("hideElement"),"function"===typeof e&&e(t),t.opHitsArr.length<t.ships_amount?(this.uf.alertMessage(2e3,"\u0412\u044b \u043f\u043e\u0442\u0435\u0440\u044f\u043b\u0438 \u043a\u043e\u0440\u0430\u0431\u043b\u044c!!!"),setTimeout((function(){r.answerShot(e,t)}),2100)):this.self.progressOfGame(t)):console.log("\u041e\u0448\u0438\u0431\u043a\u0430 answerShot - Model"),this.self.saveInLocalStorage(t)}},{key:"accurateShot",value:function(e){e.myHitsArr.length<e.ships_amount?this.uf.alertMessage(2e3,"\u0412\u044b \u043f\u043e\u0434\u0431\u0438\u043b\u0438 \u043a\u043e\u0440\u0430\u0431\u043b\u044c \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430!!!"):this.self.progressOfGame(e),this.self.saveInLocalStorage(e)}},{key:"progressOfGame",value:function(e){if(e.myHitsArr.length===e.ships_amount){var t=this.self.gameResolt(e);this.uf.alertMessage(5e3,"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0412\u044b \u0412\u042b\u0418\u0413\u0420\u0410\u041b\u0418!!! \u0412\u0430\u0448\u0438 \u0431\u0430\u043b\u043b\u044b: "+t),p()(".finish_button").addClass("activeButton")}else e.opHitsArr.length===e.ships_amount&&(this.uf.alertMessage(6e3,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0412\u044b \u041f\u0420\u041e\u0418\u0413\u0420\u0410\u041b\u0418. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0424\u0418\u041d\u0418\u0428"),p()(".finish_button").addClass("activeButton"))}},{key:"saveInLocalStorage",value:function(e){localStorage.ShipBattleStorageInformation=JSON.stringify(e)}}]),a}(b))),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).general_object=n.props.general_object,n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.$node=p()(this.refs.droppable),this.makeDroppable(this,this,this.general_object)}},{key:"render",value:function(){return Object(n.jsx)("div",{id:"FildBattlePlayer",children:this.model.forMapIndexArray(63).map((function(e){return Object(n.jsx)("div",{className:"cell",val:e},e)}))})}},{key:"componentWillUnmount",value:function(){this.$node.droppable("destroy")}}]),a}(g),y=a.p+"static/media/ship.cdfc5979.png",_=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).general_object=n.props.general_object,n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.$node=p()(this.refs.draggable),this.makeDraggable(this.$node)}},{key:"render",value:function(){return Object(n.jsx)("div",{id:"ShipsPort",children:this.model.forMapIndexArray(this.general_object.ships_amount).map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("img",{className:"ship",num:""+e,src:y,title:"ship "+(e+1),alt:"ship "+(e+1)})},e)}))})}},{key:"componentWillUnmount",value:function(){this.$node.draggable("destroy")}}]),a}(g),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).cell_className=n.props.cell_className,n.cell_val=n.props.cell_val,n.general_object=n.props.general_object,n.playerClickHandler=n.props.playerClickHandler,n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:this.cell_className,val:this.cell_val,onClick:function(t){e.playerClickHandler(t,e.general_object)}})}}]),a}(r.a.Component),A=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).playerClickHandler=n.playerClickHandler.bind(Object(d.a)(n)),n.general_object=n.props.general_object,n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{id:"FildBattleRival",children:this.model.forMapIndexArray(63).map((function(t){return Object(n.jsx)(O,{cell_className:"cell",cell_val:t,general_object:e.general_object,playerClickHandler:e.playerClickHandler},t)}))})}}]),a}(g),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).self=Object(d.a)(n),n.button_className=n.props.button_className,n.i1_className=n.props.i1_className,n.i2_className=n.props.i2_className,n.button_name=n.props.button_name,n.general_object=n.props.general_object,n.ButtonHandler=n.props.ButtonHandler.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("button",{className:this.button_className,onClick:function(t){e.ButtonHandler(t,e.general_object)},children:[Object(n.jsxs)("span",{className:"fa-stack fa-fw",children:[Object(n.jsx)("i",{className:this.i1_className}),Object(n.jsx)("i",{className:this.i2_className})]})," ",this.button_name]})}}]),a}(r.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).recordsButtonHandler=n.recordsButtonHandler.bind(Object(d.a)(n)),n.rulsButtonHandler=n.rulsButtonHandler.bind(Object(d.a)(n)),n.playButtonHandler=n.playButtonHandler.bind(Object(d.a)(n)),n.finishButtonHandler=n.finishButtonHandler.bind(Object(d.a)(n)),n.general_object=n.props.general_object,n}return Object(c.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{id:"GameMenu",children:[Object(n.jsx)(S,{button_className:"play_button",i1_className:"fa fa-circle fa-stack-2x",i2_className:"fa fa-gamepad fa-stack-1x fa-inverse",button_name:"\u0418\u0413\u0420\u0410\u0422\u042c",general_object:this.props.general_object,ButtonHandler:this.playButtonHandler}),Object(n.jsx)(S,{button_className:"ruls_button",i1_className:"fa fa-circle fa-stack-2x",i2_className:"fa fa-book fa-stack-1x fa-inverse",button_name:"\u041f\u0420\u0410\u0412\u0418\u041b\u0410",ButtonHandler:this.rulsButtonHandler}),Object(n.jsx)(S,{button_className:"record_button",i1_className:"fa fa-circle fa-stack-2x",i2_className:"fa fa-trophy fa-stack-1x fa-inverse",button_name:"\u0420\u0415\u041a\u041e\u0420\u0414\u042b",ButtonHandler:this.recordsButtonHandler}),Object(n.jsx)(S,{button_className:"finish_button",i1_className:"fa fa-gamepad fa-stack-1x",i2_className:"fa fa-ban fa-stack-2x text-danger fa-red-style",button_name:"\u0424\u0418\u041d\u0418\u0428",ButtonHandler:this.finishButtonHandler})]})}}]),a}(g),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).general_object=n.props.general_object,n}return Object(c.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"statistic",children:[Object(n.jsxs)("p",{className:"my_resolt",children:[Object(n.jsx)("i",{className:"fa fa-user fa-lg"}),Object(n.jsx)("span",{children:"\u041f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u044f:"})," ",Object(n.jsx)("span",{className:"my_hits",children:this.general_object.myHitsArr.length}),Object(n.jsx)("span",{children:"\u041f\u0440\u043e\u043c\u0430\u0445\u0438:"})," ",Object(n.jsx)("span",{className:"my_misses",children:this.general_object.myMissesArr.length}),Object(n.jsx)("span",{children:"\u041f\u043e\u0442\u0435\u0440\u0438:"})," ",Object(n.jsx)("span",{className:"my_losses",children:this.general_object.opHitsArr.length})]}),Object(n.jsxs)("p",{className:"op_resolt",children:[Object(n.jsx)("i",{className:"fa fa-android fa-lg"}),Object(n.jsx)("span",{children:"\u041f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u044f:"})," ",Object(n.jsx)("span",{className:"op_hits",children:this.general_object.opHitsArr.length}),Object(n.jsx)("span",{children:"\u041f\u0440\u043e\u043c\u0430\u0445\u0438:"})," ",Object(n.jsx)("span",{className:"op_misses",children:this.general_object.opMissesArr.length}),Object(n.jsx)("span",{children:"\u041f\u043e\u0442\u0435\u0440\u0438:"})," ",Object(n.jsx)("span",{className:"op_losses",children:this.general_object.myHitsArr.length})]})]})}}]),a}(g),N=(a(26),a(27),a(28),a(29),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).controller=Object(d.a)(n),n.model=Object(d.a)(n),n.state={general_object:n.model.getObjectFromLocalStorage()},n}return Object(c.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{id:"GameRoom",children:[Object(n.jsx)(j,{general_object:this.state.general_object}),Object(n.jsx)(_,{general_object:this.state.general_object}),Object(n.jsx)(A,{general_object:this.state.general_object}),Object(n.jsx)(C,{general_object:this.state.general_object}),Object(n.jsx)(k,{general_object:this.state.general_object})]})}},{key:"componentDidMount",value:function(){this.controller.updateGameOnLoad(this.state.general_object)}}]),a}(g));i.a.render(Object(n.jsx)(N,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.ddb939b9.chunk.js.map