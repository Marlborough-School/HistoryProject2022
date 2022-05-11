'show background black with fadeIn',/* global monogatari */

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
'boy':'boy.jpeg',
'grave': 'grave.jpeg',
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'hand':'hand.jpeg',
	'boy':'boy.jpeg',
	'black':'black.jpeg',
	'nurses':'nurses.jpeg',
	'potatocat': 'potatocat.jpeg',
	'crycat':'crycat2.jpeg',
	'Portrait': 'Portrait.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show background hand with fadeIn',
		'When Nelle Fairchild Rote was in fourth grade in the 1930s, the First World War was not yet a distant memory. Nelle’s teacher asked the students if they had a family member who had served in WWI (World War I). Nelle raised her hand and said that she had an aunt who had served overseas – Her name was Helen Fairchild.',
  'show background black with fadeIn',
	'show image boy with fadeIn',
	'“She doesn’t count,” a boy said, “She’s a girl.” But Nelle knew that her Aunt Helen’s service ‘counted.’',
	"hide image boy with fadeOut",
	'show background black with fadeIn',
	'show background nurses with fadeIn',
		'How many American nurses do you think served in WWI?',
		{'Choice':{
			'Y':{
				'Text': 'Around 2,000',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'Around 22,000',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background black',
		'show background nurses with fadeIn',
		'There were actually around 22,000 American nurses who served during WWI, 10,000 of them overseas. Their stories are little-known, but Nelle knew her aunt’s story was important, and spent many years of her life telling it.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background black',
		'show background nurses with fadeIn',
		'Correct! There were around 22,000 American nurses who served during WWI, 10,000 of them overseas. Their stories are little-known, but Nelle knew her aunt’s story was important, and spent many years of her life telling it.',
		'jump Intro2',
	],

	'Intro2':[
		'show background black with fadeIn',
		'show image grave with fadeIn',
		'That story is preserved in a book that Nelle wrote about her aunt, in a bridge named after Helen near her hometown in Pennsylvania, and in a quiet cemetery in France, close to where she served and died during WWI.',
		'',
		'hide image grave with fadeOut',
		'show background black with fadeIn',
		'show background duck2 with fadeIn',
		'jump choiceScreen',
		],
	
	'choiceScreen':[
		{'Choice':{
			'1':{
				'Text': 'Volunteering for the War',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Nursing Near the Front',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'Casualty of the First Modern War',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'redGrape':[
		'show background Portrait with fadeIn',
		'Helen Fairchild was 32 years old and working as a nurse in a Philadelphia hospital when the U.S. entered WWI in 1917. She immediately volunteered to join a medical reserve unit, which was rapidly called up for overseas duty.',
		'jump choiceScreen',
	],

	'greenGrape':[
		'show background Portait with fadeIn',
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
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<p>
        <b>Nurse Helen Fairchild: Hero and Victim of the First Modern War</b>
				</p>
				<br/>
        By: Dr. Lynch
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
