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
	'firingsquad':'firingsquad.jpg',
	'nazisalute':'nazisalute.jpeg',
	'options':'options.jpeg',
	'grape':'blackgrape.jpeg',
	'potatocat': 'potatocat.jpeg',
	'crycat':'crycat2.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show background firingsquad with fadeIn',
		'On July 21, 1944, Claus von Stauffenberg stood in a lighted courtyard awaiting execution. “Long live holy Germany,” he shouted just as a fellow conspirator threw himself in front of Stauffenberg and took the bullet meant for him.',
		'It was a short-lived reprieve however, as he was killed with the next gunshot.',
		'show background nazisalute with fadeIn',
		'Do you think there was internal opposition of the Nazi Regime?',
		{'Choice':{
			'Y':{
				'Text': 'Yes, there was internal opposition',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'No, there was no internal opposition',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background nazisalute',
		'Correct! Military officials working under Hitler, such as Claus von Stauffenberg, were not all in favor of the Nazi agenda. Some formed resistance groups and attempted to fight back.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background nazisalute',
		'There actually was internal opposition. It was very risky for those working under Hitler to act against Hitler’s agenda, but it did occur. Claus von Stauffenberg was one of those daring individuals.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background options with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Early Opposition',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Conspiring',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'The Plot',
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
        <b>Claus von Stauffenberg: Internal Opposition of the Nazi Regime</b>
				<br/>
				<br/>
        By: Taryn Gluck
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
