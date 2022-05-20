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
	'pic2': 'pic2.jpeg',

});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'plane':'plane.jpeg',
	'black':'black.jpeg',
	'grape':'blackgrape.jpeg',
	'potatocat': 'potatocat.jpeg',
	'crycat':'crycat2.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show background plane with fadeIn',
		'As he stepped off the plane, a British politician looked at his people, waving him on with hopeful smiles, and said, “I believe it is peace for our time ... peace with honour.” Yet peace would prove to be elusive, and Chamberlain would never live to see his dream come to fruition.',
		'show background black with fadeIn',
		'show image pic2 with fadeIn',
		'Born in Birmingham, England, in 1869, Arthur Neville Chamberlain was a successful businessman and local politician. In 1918 he was elected to Parliament as a member of the Conservative Party, and in 1937, Chamberlain was elected as Britain’s prime minister.',
		'hide image pic2 with fadeOut',
		'When Chamberlain was Prime Minister, he created many Acts to help the British people. Which one of these Acts did he NOT create?',
		{'Choice':{
			'Y':{
				'Text': 'The Factories Act of 1937',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'The Holiday with Pay Act',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background black',
		'Because he was such a compassionate person, when Chamberlain became Prime Minister, he initially focused on improving the lives of English workers. He instituted the Factories Act, which restricted the number of hours that children and women worked. He supported the Holiday with Pay Act, which gave workers a paid week off.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background black',
		'Because he was such a compassionate person, when Chamberlain became Prime Minister, he initially focused on improving the lives of English workers. He instituted the Factories Act, which restricted the number of hours that children and women worked. He supported the Holiday with Pay Act, which gave workers a paid week off.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background duck2 with fadeIn',

			'1':{
				'Text': 'Slide 5',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Slide 6',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'Slide 7',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'redGrape':[
		'show background duck with fadeIn',
		'By April 1938, his efforts to improve the lives of his citizens became overshadowed by Adolf Hitler, Germanys Chancellor.',
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
        <b>Chamberlain: The Peaceful Politician of World War II</b>
				<br/>
				<br/>
        By: Stella Flores
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
