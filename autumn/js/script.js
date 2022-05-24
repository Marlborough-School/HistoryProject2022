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
'E&M':'E&M.jpeg',
'trenches':'trenches.jpeg',
'help': 'help.jpeg',
'pervyse':'pervyse.jpeg',
'solo':'solo.jpeg',
'Mairi':'Mairi-crop.jpg',
'nose 2':'nose2.jpeg',
'poster':'poster.jpeg',
'mask':'mask.jpg',
'men':'men.jpg',
'seesaw':'seesaw.jpg',
'cited':'cited.jpeg',
'medal': 'medal.jpg',
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'trenches':'trenches.jpeg',
	'ambulance':'ambulance.jpeg',
	'poster':'poster.jpeg',
	'profile':'profile.jpeg',
	'pervyse':'pervyse.jpeg',
	'nose2':'nose2.jpeg',
	'E&M':'E&M.jpeg',
	'men':'men.jpg',
	'seesaw':'seesaw.jpg',
	'cited':'cited.jpeg',
	'medal': 'medal.jpg',
});


//
monogatari.script ({
	'Start': [
		'show image profile with fadeIn',
		'When thinking about world wars, people think about predominantly men fighting and risking their lives, but women like Mairi Chisholm, receive little to no recognition for their heroic acts.',
		'hide image profile',
		'show image solo',
		'Mairi Chisholm was 18 years old when she was in the Belgian trenches helping soldiers and driving ambulances.',
		'Mairi was accompanied by Elsie Knocker, and the army did not always appreciate their presence, but their work was crucial to the soldier’s survival.',
		'hide image solo',
		'show image E&M',
		'“The whole British Army objects to our being here” -Mairi Chisholm.',
		'hide image E&M',
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
		'hide image help',
		'jump choiceScreen',


	],

	'greenGrape':[
		'In the beginning, while Knocker and Chisholm were carrying soldiers to the ambulance they noticed that most soldiers were dying because of shock. They knew that most lives could be saved if soldiers received care sooner and they lived closer to the soldiers.',
		'Chisholm and Knocker put their own safety at risk to help others, and they oftentimes worked in dangerous conditions, with harmful gases. These harmful gases caused her serious long-term health problems, causing her heart to become weaker.',
		"'One sees the most hideous sights imaginable, men with their jaws blown off, arms and legs mutilated and when one goes into the room one is horrified at the suffering… which is ghastly'",
		'Chisholm and Knocker would go out into the field and pick up any soldiers that needed care or were close to dying. Chisholm described walking through the fields hearing men crying out for help and knowing she could not save them all. ',
		'In the beginning some soldiers were opposed to having women in the war, but Mairi formed bonds with the soliders she helped. Making her job even harder when choosing who to help in the war.',
		'hide image help',
		'jump choiceScreen',
	],

	'blackGrape':[
		'show background grape with fadeIn',
		'show image medal',
		'After the war,Chisholm and Knocker receive awards for their bravery, but women in Britain also received the right to vote.',
		'show image men',
		'When the war ended, Knocker and Chisholm received tons of publicity and recognition. Chisholm received the Belgian Queen Elisabeth Medal, Victory Medal, British War Medal, 1914 Star, Military Medal, Knight Cross of the Order of Léopold II with palm, and Officer of the Order of St.John of Jerusalem.',
		'show image solo',
		'Even today, there’s a statue of Chisholm and Knocker in the garden of the Hotel Ariane in Ypres, Belgium. Mairi Chisholm is a catalyst for women in WWI, and women in medicine, which inspired new gender norms.',
		'jump Closing',
	],

	'Ending':[
		'show image profile with fadeIn',
		{'Choice':{
			'Closing':{
				'Text': 'Conclusion',
				'Do': 'jump Closing',
			}
		}
		}
	],

	'Closing':[
		'show background solo with fadeIn',
		'Looking back at Mairi Chisholm’s life, her bravery to be on the front lines at eighteen years old is inspiring.',
		'Chisholm’s ability to break gender norms by working in a predominantly male-dominated field and make an impact allowed other women to play a bigger role in society.',
		'The recognition and praise she received are well deserved, and her work and legacy will continue to get remembered.',
		'show background black',
		'show image Cited',
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
