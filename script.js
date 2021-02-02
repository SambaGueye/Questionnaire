const questionList = [
	{
		question: 'Selon le pacte de stabilite et de croissance, le defcit public des pays de la zone Euro, ne doit pas excede?',
		a: '3% du PIB',
		b: '5% du PIB',
		c: '60% du PIB',
		d: 'Aucun',
		correct: 'a'
	},
	{
		question: 'Qui est le premier ministre de la France?',
		a: 'Emanuel Macron',
		b: 'Edouard Philipe',
		c: 'Kery James',
		d: 'Andre Aoun',
		correct: 'b'
	},
	{
		question: 'Quelle est le langage de programmation le plus populaire en 2020?',
		a: 'Python',
		b: 'Java',
		c: 'JavaScript',
		d: 'Pascal',
		correct: 'a'
	},
	{
		question: 'Ou se trouve le Maroc?',
		a: 'Europe',
		b: 'Amérique',
		c: 'asie',
		d: 'Afrique',
		correct: 'd'
	}
]



const questions = document.querySelector("#question")
const a = document.getElementById("rada");
const b = document.getElementById("radb");
const c = document.getElementById("radc");
const d = document.getElementById("radd");
const validate = document.getElementById("butt");
const answers = document.querySelectorAll(".answer")
const afficheScore = document.querySelector('span')
let score = 0;

// verification
const check = document.querySelector("input");


function getSelected(){
	for (var i = 0; i < questionList.length; i++) {
		if(answers[i].checked){
			idAnswer = answers[i].id;
		}
	}
	return idAnswer;
}

function getDeselect(){
	for (var i = 0; i < questionList.length; i++) {
		answers[i].checked = false;
	}
}

let num =0;
	questions.innerHTML = questionList[num].question;
	a.innerHTML = questionList[num].a;
	b.innerHTML = questionList[num].b;
	c.innerHTML = questionList[num].c;
	d.innerHTML = questionList[num].d;

function displayQuestion(){
	getDeselect();
	questions.innerHTML = questionList[num].question;
	a.innerHTML = questionList[num].a;
	b.innerHTML = questionList[num].b;
	c.innerHTML = questionList[num].c;
	d.innerHTML = questionList[num].d;
	
}

function nextQuestion() {
	reponse = getSelected();
	if(reponse === questionList[num].correct){
			score ++;
		}
	num = num+1;
	if(num < questionList.length){
		displayQuestion();
	}
	else {
		if(score>=3)
		afficheScore.innerHTML = 'Fin de la partie, Votre score est '+score+' FELICITATION';
	else
		afficheScore.innerHTML = 'Fin de la partie, Votre score est '+score+' Vous n\'avez pas eu la moyenne... revise bien next time';
	}
}
butt.addEventListener('click',nextQuestion);

