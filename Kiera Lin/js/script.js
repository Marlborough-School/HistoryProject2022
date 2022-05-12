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
	'Cflag':'Chinaflag.png',
	'WWI':'ChinaWWI.jpeg',
	'CDX':'ChenDuxiu.jpeg',
	'Protest':'CCPearlydays.jpeg'
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'black':'black.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show background black with fadeIn',
		'show image Cflag with fadeIn',
		'China is considered one of the world’s most powerful countries today. But how many Americans know the history of China during World War I? How did they get to where they are today? Do you know?',
		{'Choice':{
			'Y':{
				'Text': 'Yes, I do.',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'No, I do not.',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'hide image Cflag',
		'show background black',
		'show image WWI with fadeIn',
		'That is great! Here is a reminder anyways:',
		'During World War I, China sent troops to Europe to repair damages, transport weapons, and assemble shells. However, World War I was focused on the Western world and did not acknowledge their efforts.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'hide image Cflag',
		'show background black',
		'show image WWI with fadeIn',
		'That is ok.',
		'The lack of knowledge partially stems from western powers not recognizing China’s efforts during World War I.',
		'China sent troops to Europe to repair damages, transport weapons, and assemble shells. However, World War I was focused on the Western world and did not acknowledge their efforts.',
		'jump Intro',
	],

	'Intro':[
		'hide image WWI',
		'show background black',
		'show image Protest with fadeIn',
		'Many Chinese citizens were furious due to the lack of recognition of their efforts in the war, and started the May 4th movement to make their voices heard.',
		'hide image Protest',
		'show background black',
		'show image CDX with fadeIn',
		'Chen Duxiu, along with others, led China’s movement standing up against the Allied powers and into modern society.',
	],

	'choiceScreen':[
		'show background black with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Red Grapes',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Green Grapes',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'Black Grapes',
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
        <b>Chen Du Xiu</b>
				<br/>
				<br/>
        By: Kiera Lin
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
