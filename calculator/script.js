//Определить все элементы с которыми работаем
//Сделать проверку на пустоту инпутов чтобы разблокировать кнопки
//При вводе данных нужно расчитать их после нажатия "расчитать" + появится окошко с результатами
//После нажатия "сбросить" установить все значения в исходное и убрать окошко

//var genderMale = document.querySelector("#male");
//var genderFemale = document.querySelector("#female")


//ОПРЕДЕЛЕНИЕ ВСЕХ ЭЛЕМЕНТОВ, С КОТОРЫМИ БУДЕМ РАБОТАТЬ
var calcBtn;
var resetBtn;

var form = document.querySelector(".main");

var age = document.querySelector("#age");
var heigth = document.querySelector("#heigth");
var weigth = document.querySelector("#weigth");

var activity = document.querySelectorAll(".activity");



//ПРОВЕРЯЕМ НА ЗАПОЛНЕННОСТЬ ИНПУТЫ, ЕСЛИ ЗАПОЛНЕНЫ ВСЕ - РАЗБЛОВИРУЕМ КНОПКИ "РАСЧИТАТЬ" И "СБРОСИТЬ"
var inputs = [].slice.call(document.querySelectorAll('input[type="text"]'));

calcBtn = document.querySelector(".form-submit-button");
resetBtn = document.querySelector(".form-reset-button");

inputs.forEach(function(el){
  el.addEventListener('input', checkInputs, false);
});
function checkInputs(){
	var empty = inputs.filter(function(el){
    return el.value.trim() === '';
  }).length;
  calcBtn.disabled = empty !== 0;
  resetBtn.disabled = empty !== 0;

}
checkInputs();
//СБРОС ПОЛЕЙ И НАСТРОЕК

var section = document.querySelector(".results-counter");
resetBtn.onclick = function(e){
	e.preventDefault();
	form.reset();
	section.classList.add("results-counter-hidden");
	checkInputs();

	
}

//ОПРЕДЕЛЕНИЕ ЭЛЕМЕНТОВ БЛОКА С РЕЗУЛЬТАТАМИ
var normWeigth = document.querySelector("#norm-weigth");
var dropWeigth = document.querySelector("#drop-weigth");
var upWeigth = document.querySelector("#up-weigth");

//ПО НАЖАТИЮ НА КНОПКУ РАСЧЕТ ККАЛ
calcBtn.onclick = function(e){
	e.preventDefault();
	var checkedGender = document.querySelector("input[name='gender']:checked");
	var checkedActive = document.querySelector("input[name='activity']:checked");
	section.classList.remove("results-counter-hidden");

	var NN = ((10 * +weigth.value) + (6.25 * +heigth.value) - (5 * +age.value) - +checkedGender.value) * +checkedActive.value;

	normWeigth.textContent = Math.round(NN) + " ккал";
	dropWeigth.textContent = Math.round(NN - (NN / 100 * 15)) + " ккал";
	upWeigth.textContent = Math.round((NN / 100 * 15) + NN) + " ккал";



}









/*
Для женщин:
N = ((10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) − 161) * koef

Для мужчин:
N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) + 5
+- 15%
for(var i = 0; i < gender.length; i++){
	gender[i].onclick = function(e){
		g = +this.value;
		console.log(g)
	}
}

*/