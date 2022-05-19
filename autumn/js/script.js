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
'racetrack':'racetrack.jpeg',
'profile':'profile.jpeg',
'ambulance':'ambulance.jpeg',
'trenches':'trenches.jpeg',
'help': 'help.jpeg',
'pervyse':'pervyse.jpeg',
'help 2':'help 2.jpeg',
'solo':'solo.jpeg',
'Mairi':'Mairi-crop.jpg'
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'trenches':'trenches.jpeg',
	'ambulance':'ambulance.jpeg',
	'poster':'poster.jpeg',
	'help': 'help.jpeg',
	'profile':'profile.jpeg',
	'pervyse':'pervyse.jpeg',
	'help 2':'help 2.jpeg',
	'E&M':'E&M.jpeh',

});


//
monogatari.script ({
	'Start': [
		'show image profile with fadeIn',
		'When thinking about world wars, people think about predominantly men fighting and risking their lives, but women like Mairi Chisholm, receive little to no recognition for their heroic acts.',
		'Mairi Chisholm was 18 years old when she was in the Belgian trenches helping soldiers and driving ambulances.',
		'Mairi was accompanied by Elsie Knocker, and the army did not always appreciate their presence, but their work was crucial to the soldier’s survival.',
		'“The whole British Army objects to our being here” -Mairi Chisholm.',
		'show background black',
		'show image racetrack',
		'What was the reason why Mairi started riding motorcycles?',
		{'Choice':{
			'Y':{
				'Text': 'Her brother got a motorcycle and she wanted one.',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'Her parents wanted her to try something new',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background black',
		'show image racetrack',
		'Correct, her brother and father rode motorcycles as a hobby. It was frowned upon that women should ride motorcycles, but she continued to ride and compete in motorcycle rallies. Her hobby soon would play a major role in her success in the war.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background black',
		'False, her mother was against her riding, believing that she should be participating in domestic activities. But her father agreed to gift her a motorcycle because her brother got a motorcycle. She rode and competed in motorcycle rallies, soon her hobby would play a role in her success as a war nurse.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'hide image racetrack',
		'show background black',
		'show image ambulance',
		{'Choice':{
			'1':{
				'Text': 'Her Entrance to the War',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Her Work During the War',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'After the War',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'redGrape':[
		'show image trenches',
		'show background black',
		'hide image ambulance',
		'hide image profile',
		'During World War I, there was a push for people to sign up for the war. Originally, Chisholm signed up for the Women’s Emergency Corps, but due to her special talent of being able to drive, she got chosen as a female ambulance driver for the Flying Ambulance Corps.',
		"A man named Dr. Munro traced me to the Women's Emergency Corps and said, 'Would you like to go out to Flanders?' And I said, 'Yes, I'd love to''",
		'hide image trenches',
		'show image help',
		'This job was grueling and quite gory, Mairi wrote in her diary "I could not believe that I could have stood these sights". Chisholm describes the strength, not only physical but emotional strength she had to have to be a first responder.',
		'hide image help',
		'show image pervyse',
		'She and Elsie Knocker had a base called the house of Pervyse, which was close to the trenches, leading to easy and close access to the front. Elsie and Mairi were supposed to live further away from the war since it would be dangerous to live near the battlegrounds.',
		'hide image pervyse',
		'jump choiceScreen',
		'show image ambulance',
		'show background black',


	],

	'greenGrape':[
		'hide image help',
		'hide image ambulance',
		'show image help 2',
		'In the beginning, while Knocker and Chisholm were carrying soldiers to the ambulance they noticed that most soldiers were dying because of shock. They knew that most lives could be saved if soldiers received care sooner and they lived closer to the soldiers.',
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
        <b>Mairi Chisholm: Mending Wounds, but Breaking Gender Norms</b>
				<br/>
				<br/>
        By: Autumn Hill
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
