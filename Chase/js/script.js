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
		body: 'Louis Zamperini: A Story of Perseverance and Strength Against All Odds',
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
'brothers':'brothers.jpeg',
'running':'running.jpeg',
'olympics':'olympics.jpeg',
'army':'army.jpeg',
'plane':'plane.jpeg',
'crash':'crash.jpeg',
'boat':'boat.jpeg',
'pow1':'pow1.jpeg',
'pow2':'pow2.jpeg',
'pow3':'pow3.jpeg',
'bird':'bird.jpeg',
'pow4':'pow4.jpeg',
'after':'after.jpeg',
'award':'award.jpeg',
'billy':'billy.jpeg',
'visit':'visit.jpeg',
'torch':'torch.jpeg',
'bib':'bib.jpeg',
'hook':'hook.jpeg',

});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',

	'duck2':'duck2.jpeg',
	'black':'black.jpeg',
	'grape':'blackgrape.jpeg',
	'potatocat': 'potatocat.jpeg',
	'crycat':'crycat2.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show background black with fadeIn',
		'show image hook with fadeIn',
		'Interviewer: You had the opportunity to meet Adolph Hitler and to shake hands with the Fuhrer. What are your memories of the German leader?',
		'Louis Zamperini: His face stood out as he looked like a comedian. I thought, ‘My God, this guy’s running a nation?’... We didn’t see anything then that showed he would be vicious and try to take over the world.',

		'What do you want to learn about?',
		{'Choice':{
			'1':{
				'Text': 'Before Capture',
				'Do': 'jump Beginning'
			},
			'2':{
				'Text': 'During War',
				'Do': 'jump nextSlides'
			},
			'3':{
				'Text': 'Back Home',
				'Do': 'jump nextLast'
			},
		},
	},
	],



	'Beginning': [
		'hide image hook',
		'show background black with fadeIn',
		'show image brothers with fadeIn',
		'Louis Zamperini was born on January 6th, 1917 in Orlean, New York.',

		'hide image brothers',
		'show background black with fadeIn',
		'show image running with fadeIn',
		'After discovering his passion and talent for running, Zamperini began training for the 1936 Berlin Olympics through a USC scholarship.',

		'hide image running',
		'show background black with fadeIn',
		'show image olympics with fadeIn',
		'In Berlin, he finished 8th in the 5000-meter race and was personally congratulated by Adolf Hitler. He began preparing for the 1940 Olympics but the start of World War II stopped him in his tracks.',

		'hide image olympics',
		'show background black with fadeIn',
		'show image army with fadeIn',
		'In 1941 he joined the US Army Air Corps as a bombardier in the Pacific island of Funafuti.',

		'hide image army',
		'show background black with fadeIn',
		'show image plane with fadeIn',
		'After his regular aircraft, the “Superman”, was damaged by a Japanese attack, the team was transferred to Hawaii and given a notoriously unreliable aircraft named the “Green Hornet”.',

		'hide image plane',
		'show background black with fadeIn',
		'show image crash with fadeIn',
		'1843 the Green Hornet crashed killing eight of the eleven passengers and stranding the remaining three in the Pacific ocean, 850 miles from Oahu.',

		'hide image crash',
		'show background black with fadeIn',
		'show image boat with fadeIn',
		'The survivors were Louis Zamperini, pilot Russell Allen Phillips and crewman Francis McNamara.',


		'How long was Louis Zamperini lost at sea?',
		{'Choice':{
			'Y':{
				'Text': '16 days',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': '47 days',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background black',
		'Wrong. Louis Zamperini was lost at sea for 47 days. ',
		'jump nextSlides',
	],

	'noAnswer':[
		'show background black',
		'Correct!',
		'jump nextSlides',
	],

	'nextSlides':[
		'hide image boat',
		'show background black with fadeIn',
		'show image boat with fadeIn',
		'After 33 days at sea, McNamara died. On July 15th, 1943, their 47th day, Zamperini and Phillips reached the Marshall Islands and were taken prisoner by the Japanese Navy. Zamperini was partially nursed back to health in Kwajalein Atoll before being transported to his first Prisoner of War Camp at Ofuna',

		'hide image boat',
		'show background black with fadeIn',
		'show image pow1 with fadeIn',
		'Ofuna was kept secret from the public and served as a place where high-value men were confined, starved, tormented, and tortured into divulging military secrets.',

		'hide image pow1',
		'show background black with fadeIn',
		'show image pow2 with fadeIn',
		'“We built up a tremendous hate for them, not just because of the punishment as we could take the pain and I had a high tolerance for pain, but they stripped me of my dignity and that hurt” -Zamperini',

		'How many American soldiers were imprisoned in Japanese POW camps?',
		{'Choice':{
			'Y':{
				'Text': 'over 17,00',
				'Do': 'jump yeahAnswer'
			},
			'N':{
				'Text': 'over 32,00',
				'Do': 'jump nahAnswer'
			},
		},
		},
		],

		'yeahAnswer':[
		'show background black',
		'Wrong. There were approximately 32,400 prisoners over the duration of WW2. These POW were help in almost 90 camps across Japan',
		'jump nextSlides',
		],

		'nahAnswer':[
		'show background black',
		'Correct! There were approximately 32,400 prisoners over the duration of WW2. These POW were help in almost 90 camps across Japan',
		'jump nextPage',
		],

		'nextPage':[
		'show background black with fadeIn',
		'show image pow3 with fadeIn',
		'After a year at Ofuna, Zamperini was transferred to a second POW camp called Omori located in Tokyo Bay. ',

		'show background black with fadeIn',
		'show image bird with fadeIn',
		'It was here that Zamperini met his biggest tormenter. Mutshiro Watanabe, nicknamed “the Bird”, was a particularly cruel and ruthless Japanese corporal who soon became obsessed with tormenting Zamperini specifically. ',

		'show background black with fadeIn',
		'show image pow4 with fadeIn',
		'Omori’s prisoners did their part to fight back. At worksites, the POWs switched mailing labels, rewrote addresses, and threw dirt into gas tanks. They smuggled back sugar and other goods in socks and purposefully mishandled shipments and Japanese officers’ luggage.',
		'jump nextLast',
		],

'nextLast':[
		'show background black with fadeIn',
		'show image after with fadeIn',
		'	On August 15th, 1945, only nine days after the infamous Hiroshima attack, the prisoners received the news they had been desperately waiting for-the war was over.',

		'show background black with fadeIn',
		'show image award with fadeIn',
		'Back at home, Zamperini received three awards in recognition of his wartime experience. Yet his vivid nightmares forced him to turn to alcohol as he felt his life could never return to normal.',

		'show background black with fadeIn',
		'show image billy with fadeIn',
		'At one of his lowest points, Zamperini heard a sermon by Billy Graham, a prominent Christian figure. After hearing Billy Graham talk, Zamperini felt he had a second chance at his life. The two remained lifelong friends afterward.',

		'show background black with fadeIn',
		'show image visit with fadeIn',
		'Zamperini believed, “...when you hate somebody, you don’t hurt them in the least. All you’re doing is hurting yourself. But if you can forgive—and if it’s true—you’ll feel good.” With this in mind, Zamperini visited his captors in Japan to offer his forgiveness.',

'jump Ending'
	],

	'Ending':[
		'show background black with fadeIn',
		'show image torch with fadeIn',
		'In 1998, Zamperini once again returned to Japan, this time to carry the torch at the Nagano Winter Olympics Louis Zamperini’s story is one of perseverance, strength, survival, and forgiveness, and most importantly illustrates why you should never stop fighting for yourself.',
		'jump Closing'
			],


	'Closing':[
		'show background pow3 with fadeIn',
		'Thank you for watching!',

		'show background white with fadeIn',
		'show image bib with fadeIn',
		'Annotated Bibliography',

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
        <b>Louis Zamperini: A Story of Perseverance and Strength Against All Odds</b>
				<br/>
				<br/>
        By: Chase Krenzer
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
