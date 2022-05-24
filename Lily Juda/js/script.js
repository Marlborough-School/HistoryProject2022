/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	},
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

//DEFINE THE IMAGES YOU WANT HERE
monogatari.assets ('images', {
	//'nickname for the image': 'actual name of the image',
	'ss7': 'ss7.jpg',
	'ss5': 'ss5.jpg',
	'ss2': 'ss2.jpg',
	'ss6': 'ss6.jpg',
	'ss4': 'ss4.jpg',
	'ss8': 'ss8.jpg',
	'ss1': 'ss1.jpg',
	'ss3': 'ss3.jpg',
	'ss12': 'ss12.jpg',

});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'duck':'ducksong.jpg',
	'duck2':'duck2.jpeg',
	'black':'black.jpeg',
	'grape':'blackgrape.jpeg',
	'potatocat': 'potatocat.jpeg',
	'crycat':'crycat2.jpeg',
	'ss7': 'ss7.jpg',
	'ss5': 'ss5.jpg',
	'ss2': 'ss2.jpg',
	'ss6': 'ss6.jpg',
	'ss4': 'ss4.jpg',
	'ss8': 'ss8.jpg',
	'ss1': 'ss1.jpg',
	'ss3': 'ss3.jpg',
	'ss12': 'ss12.jpg',


});


//
monogatari.script ({
	'Start': [
		'show background black with fadeIn',
		'show image ss7 with fadeIn',
		'Colette Catherine Marin was a French resistance member who shares the horrific story of her family’s experience of World War II. Coletteß’s older brother was taken from their home and brought to Camp Mittelbau-Dora, a German concentration camp; he was a resistance member as well. Colette has refused to set foot into Germany for 74 years because she believed that no one should be profifting from morbid tourism and all destruction that happened in the Holocaust.',
		'How many French resistance members died in WW2?',
		'hide image ss7 with fadeOut',
		'show image ss5 with fadeIn',

	 	{'Choice':{
			'Y':{
				'Text': ' 2,000',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': ' 40,000',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show image ss5 with fadeIn',
		'Actually there were around 40,000 French people that perished in concentration camps throughout World War II.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show image ss5 with fadeIn',
		'Yay, Correct!! There were around 40,000 french people that died in WW2',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'hide image ss5 with fadeOut',
		'show background black with fadeIn',
		'show image ss11 with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Early Life',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Time of Impact',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'Later in Life',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'redGrape':[
		'show background black with fadeIn',
		'show image ss2 with fadeIn',
		'Colette had been a member of the resistance from a very young age, and she was always sharp. She understood that it was a large commitment. She teaches us a lesson that once we start something we can never turn back and she related this to the core values of the French Resistance and that the fighter gave her all into ending the war and fighting for what they believed.',
		'“You stepped in and there was no turning back”(Colette Cathrine-Marin).',
		'hide image ss2 with fadeOut',
		'show image ss6 with fadeIn',
		'Colette and her brother were 3 years apart in age and he was the smart and mathematical older brother, whereas she was the forgotten younger sister. She says in the documentary that she does not believe that they were that close and that, since they were not the closest of siblings, she doesn think she can  necessarily speak about that specific kind of grief. This shows the strong honesty and pride that she has.',
		'jump choiceScreen',
		'Colette and her family joined the French resistance after France surrendered to the Nazi party, only 1% of the french population actively resisted the surender. In a film called “Colette” a young history student, Lucie explores the true emotion behind the miserable times.'],



	'greenGrape':[
		'show image ss4 with fadeIn',
		'hide image ss6 with fadeOut',
		' Colette and her mother were separated from her brother Jean- Pierre, he was arrested and taken  to a concentration camp because he was found stockpiling weapons with other French resistance members.  Colette is very strong and she looks up to her mother, and when the two were together and Jean- Pierre was arrested her mother said “ It should have been you” and Colette describes this as something that she still has not forgotten to this day, and she believes was something that her mother forgot instantly. ',
		'hide image ss4 wth fadeOut',
		'show image ss8 with fadeIn',
		'This is a very hard situation for Colette to talk about because she is so hurt by something her mother said so long ago and even though her mother says it with thinking it is stuck with colette and this a lesson that sometimes words can be very harmful even when things around are stressful hurting and taking pain out of others is never right.',
		'hide image ss8 with fadeOut',
		'jump choiceScreen',
	],

	'blackGrape':[
		'show image ss1 with fadeIn',
		'hide image ss6 with fadeOut',
		'Once Colette arrives at Mittelbau-Dora, the concentration camp where her brother was killed, she becomes emotional because she saw first hand the inhuman conditions that the prisoners were given, they lived in with no blankets to sleep or food, and no breaks between work. Colette is going outside of her comfort zone to experience the concentration camp because she knows how important it is for Lucie and the growth of knowledge of what happened in the history so that we can prevent that from happening in the future.',
		'hide image ss1 with fadeOut',
		'show image ss6 with fadeIn',
		'Jean- Pierre Cathrine was Colettes older brother, she looks up to him and believes that he is a hero to all of France for his acts of service, and for dedicating his life for his country. This photo is taken of Jean-Pierre after he was arrested, and this photo was taken very secretively.',
		'hide image ss6 with fadeOut',
		'show image ss12 with fadeIn',
		'The photo was very secret because Colette and her father had to sneak in a camera to take a photo of him during one of their visits to see him before he was taken to Mittelbau- Dora, ther risked their lives trying to save one last picture of him. Colette’s family wanted the photo of Jean- Pierre because they were told to memorialize their family member before they were killed',
		'hide image ss12 with fadeOut',
		'jump Ending',

	],

	'Ending':[
		'show image ss7 with fadeIn',
		'hide image ss6 with fadeOut',
		{'Choice':{
			'Closing':{
				'Text': 'Conclusion',
				'Do': 'jump Closing',
			}
		}
		}
	],

	'Closing':[
		'show background black',
		'Colette is a very strong woman that is a very stubborn person with a lot of pride and the lesson she tries to teach Lucie and the viewers of her documentary is to remember that even after many years you can still fight for what you believe and do what is best for yourself and not others around you.',
		' She is an example of this, because when she went back to Germany she was doing to help others gain knowledge, even though she does not agree with morid tourism and the tours of concentration camps and she knew that knowledge was more important and went to Germany with her head held high.',
		'end'
	]
});

monogatari.component ('main-screen').template (() => {
    return `
				<center>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<p>
        <b>Colette Catherine- Marin, Overcomes her pride and shows the audience raw emotion</b>
				<br/>
				<br/>
        By: Lily Juda
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
