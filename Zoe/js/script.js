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
	'black':'black.jpeg'
	'portrait':'portrait.jpeg',
	'group':'group.jpeg',
	'family':'family.jpeg',
	'potatocat': 'potatocat.jpeg',
	'crycat':'crycat2.jpeg',
);


//
monogatari.script ({
	'Start': [
		'show background portrait with fadeIn',
		'Odette Sansom, a female spy tortured by the Gestapo duirng World War 2, was the first woman to ever be given the honor of the George Cross.',
		'show background black with fadeIn',
		'Sansom’s story starts in her childhood. Odette’s early life was affected by World War II, as Germans had launched an attack through Belgium and into the heart of France right through Sansom’s home in Amiens.',
		'show background black with fadeIn',
		'Her father, disturbed at the actions of German soldiers, joined the French army and fought for almost a year before being taken out by a German shell.',
		'show background portrait with fadeIn',
		'She worked her way up, finally acting as a courier in the SPINDLE Circuit, a smaller part of the SOE that arranged airdrops of firearms and explosives, which was headed by Peter Churchill. Odette turned out to be a great spy, throwing herself headfirst into every mission she was assigned.',
		'show background trio with fadeIn',
		'All was going well until one day she was staying in a hotel with Peter Churchill, when the Gestapo attacked. They burst in through the doors of Sansoms room, holding her at gunpoint.',
		'Example question: Hey bum bum bum got any grapes?',
		{'Choice':{
			'Y':{
				'Text': 'Yes, I do have grapes',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'No, I do not sell grapes',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background black',
		'You will be able to code more choices/buttons into your project. Click to see another example.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background black',
		'You will be able to code more choices/buttons into your project. Click to see another example.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background duck2 with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Early Life',
				'Do': 'jump earlyLife',
			},
			'2':{
				'Text': 'Ravensbruck',
				'Do': 'jump Ravensbruck',
			},
			'3':{
				'Text': 'Later Life',
				'Do': 'jump laterLife',
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
        <b>Odette Sansom: Mother Turned Spy</b>
				<br/>
				<br/>
        By: Zoe Guzin
        </p>
				</center>
				<br/>

				<main-menu></main-menu>
    `;
});
