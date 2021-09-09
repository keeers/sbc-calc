(()=>{"use strict";var t=document.querySelector(".ratings__final"),e=document.querySelector(".ratings__team"),a=document.querySelector(".ratings__average"),i=document.querySelectorAll(".inputs__input"),n=".ratings__text",s=document.querySelector(".sidebar"),r=document.querySelector(".sidebar__button"),u=document.querySelector(".sidebar__text"),o=document.querySelector(".sidebar__links"),c=document.querySelector(".inputs__button");function _(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var l=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputList=e}var e,a;return e=t,(a=[{key:"calculateRatings",value:function(){var t=this;this._averageRatingValue=0,this._values=[],this._adjustedValues=[],this._counter=0,this._inputList.forEach((function(e){t._averageRatingValue+=+e.value,t._values.push(+e.value)})),this._values.forEach((function(e){t._adjustedValues.push(Math.max(0,e-t._averageRatingValue/11))})),this._adjustedResults=this._adjustedValues.reduce((function(t,e){return t+e}),0),this._adjustTotal=Math.round(this._adjustedResults+this._averageRatingValue),this._averageRating=(this._adjustTotal/11).toFixed(2),this._teamRating=Math.floor(this._adjustTotal/11)}},{key:"getRatings",value:function(){return{TeamRating:this._teamRating,AverageRating:this._averageRating}}},{key:"teamList",value:function(){var t=this;this._teamArray=[],this._teamCount={},this._teamList="",this._inputList.forEach((function(e){t._teamArray.push(+e.value)}));for(var e=0;e<this._teamArray.length;e++)this._teamCount[this._teamArray[e]]=this._teamCount[this._teamArray[e]]?this._teamCount[this._teamArray[e]]+1:1;for(var a=0;a<100;a++)void 0!==this._teamCount[a]&&(this._teamList=this._teamList+this._teamCount[a]+"@"+a+" ");return this._teamList}}])&&_(e.prototype,a),t}())(i),h=t.querySelector(n),d=a.querySelector(n),g=e.querySelector(n);i.forEach((function(t){t.addEventListener("blur",(function(){l.calculateRatings();var t=l.getRatings();d.textContent=t.AverageRating,h.textContent=t.TeamRating,g.textContent=l.teamList()})),t.addEventListener("focus",(function(t){t.target.select()}))})),r.addEventListener("click",(function(){s.classList.toggle("sidebar_is-active"),r.classList.toggle("sidebar__button_is-active"),u.classList.toggle("sidebar__text_is-active"),o.classList.toggle("sidebar__links_is-active")})),c.addEventListener("click",(function(){document.querySelector(".inputs__input").select()}))})();