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
	'title':'titleslide.jpeg',
	'holocaust':'holocaust.jpeg',
	'buczacz':'buczacz.jpeg',
	'mauthausen':'mauthausencamp.jpeg',
	'simonnazi':'simonnazi.jpeg',
	'simonwithpics':'simonwithpics.jpeg',
	'nonagressionpact':'nonagressionpact.jpeg',
	'gestapo':'gestapo.jpeg',
	'adolffakepapers':'adolffakepapers.jpeg',
	'simoncenter':'simoncenter.jpeg',
	'adolffakepapers': 'adolffakepapers.jpeg',
	'nazitrial':'nazitrial.jpeg',
	'laborcamp':'laborcamo.jpeg',
	'youngsimon':'youngsimon.jpeg',

});


//
monogatari.script ({
	'Start': [
		'show background holocaust with fadeIn',
		'How many out of over 200,00 perpetrators of Nazi-era crimes were prosecuted after World War II?',
		{'Choice':{
			'Y':{
				'Text': 'Over 100,000',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'Under 10,000',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background nazitrial',
		'Wrong- Only 6,656 individuals were actually convicted for crimes committed during World War II. It is estimated that over 9,000 Nazis escaped Europe after the war to avoid criminal charges. ',
		'jump nextSlides',
	],

	'noAnswer':[
		'show background nazitrial',
		'Correct- Only 6,656 individuals were actually convicted for crimes committed during World War II. It is estimated that over 9,000 Nazis escaped Europe after the war to avoid criminal charges.',
		'jump nextSlides',
	],

	
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
        <b>Simon Wiesenthal: "An Elephant Never Forgets"- Nazi Hunter and Avenger</b>
				<br/>
				<br/>
        By: Alix Erlij
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
