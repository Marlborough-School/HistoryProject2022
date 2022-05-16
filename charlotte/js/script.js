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
	'reniapg2':'reniapg2.jpeg',
	'reniapg1':'reniapg1.jpeg',
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
	'renia': 'renia.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show background black with fadeIn',
		'show image reniapg1',
		'When most people hear the name Renia Spiegel, the idea of a young Polish Jewish girl who wrote in a diary during the Holocaust and is often considered a “Polish Anne Frank” likely doesn’t come to mind. Why should it? Renia’s diary was hidden - untouched for 70 years.',
		'How many pages do you think Renia’s journal is?',
		{'Choice':{
			'Y':{
				'Text': '700',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': '376',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background black',
		'show image reniapg2',
		'Yes, Renia wrote over 700 pages and had more than 100 journal entries.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background black',
		'Wrong, try again!',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background duck2 with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Early Life',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'The Przemysl Ghetto',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'The End of Her Story',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'redGrape':[
		'show background duck with fadeIn',
		'Sorry, we have no red grapes! I am sending you back to choose another option.',
		'jump choiceScreen',
	],

	'greenGrape':[
		'show background duck with fadeIn',
		'Sorry, we have no green grapes! I am sending you back to choose another option.',
		'jump choiceScreen',
	],

	'blackGrape':[
		'show background grape with fadeIn',
		'You found the grapes! Now we will go the end of the project',
		'jump Ending',
	],

	'Ending':[
		'show background potatocat with fadeIn',
		{'Choice':{
			'Closing':{
				'Text': 'Conclusion',
				'Do': 'jump Closing',
			}
		}
		}
	],

	'Closing':[
		'show background crycat with fadeIn',
		'I hope you understand what you will be doing. If you do not, ask Senya in class for help.',
		'Go make your own project now have fun lol',
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
        <b>Renia Spiegel: 70 Years in the Future</b>
				<br/>
				<br/>
        By: Charlotte Landis
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
