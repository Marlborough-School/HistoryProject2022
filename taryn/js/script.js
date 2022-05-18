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
	'clauspicture':'clauspicture.jpeg',
	'youngboy':'youngboy.jpeg',
	'trenches':'trenches.jpeg',
	'kids':'kids.jpeg',
	'hitlermeeting':'hitlermeeting.jpeg',
	'soldier':'soldier.jpeg',
	'trousers':'trousers.jpeg',
	'bibliography':'bibliography.png',
	'pictures':'pictures.png',
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'firingsquad':'firingsquad.jpg',
	'nazisalute':'nazisalute.jpeg',
	'options2':'options2.jpeg',
	'youngboy':'youngboy.jpeg',
	'black':'black.jpeg',
	'clausfamily':'clausfamily.jpeg',
	'letter':'letter.jpeg',
	'julyplot':'julyplot.jpeg',
	'attention':'attention.jpeg',
	'white':'white.jpeg',
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
		'show background options2 with fadeIn',
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
		'show background black with fadeIn',
		'show image youngboy',
		'After undergoing a minor operation as a child, Claus von Stauffenberg stated, “Now I have been quite brave, and now I can be a soldier and go to all the wars when I am grown up.” He stayed true to his word and enlisted in the German army in 1926.',
		'hide image youngboy',
		'show background letter with fadeIn',
		'As soon as his first year, Stauffenberg began expressing dislike for the Nazi regime in a letter to his father, and the theme carries through his time of service. He later said, “the treatment of the population [in the Soviet Union] by the German civil administration, the lack of political planning for the occupied countries, the treatment of the Jews" were the reasons for his contempt for Hitler (Stauffenberg).',
		'show background black with fadeIn',
		'show image clauspicture',
		'He stated that “the war was a monstrous crime” and “that Hitler must be forcibly removed.”',
		'hide image clauspicture',
		'show image trenches',
		'In 1943, his car was attacked, severely wounding him, resulting in the amputation of his right hand, pinky, and ring finger, and removal of his left eye. His stay at the hospital was a pivotal moment in the conspiracy of the assassination attempt as it was there his Uncle Nux persuaded him to become an active participant in the already existing coup-d’etat conspiracy.',
		'hide image trenches',
		'jump choiceScreen',


	],

	'greenGrape':[
		'show background black with fadeIn',
		'show image kids',
		'Although he was now the driving force behind the plotting, he was still working for the Nazi regime and found that to be difficult to maintain. He gave the orders to commit mass genocide despite being fundamentely agaisnst the idea. Stauffenberg pointed to a picture on his desk of his children when asked why he was doing it and said, “I am doing it for them.”',
		'hide image kids',
		'show background julyplot with fadeIn',
		'He said one had to choose between two evils: actions, or inaction, and he chose action. The July 1944 plot was a modification of Operation Valkyrie, a German emergency plan in the case of an internal civil breakdown. The plan was meant to give the conspirators control over the government so they could negotiate and end the war.',
		'jump choiceScreen',
	],

	'blackGrape':[
		'show background black with fadeIn',
		'show image hitlermeeting',
		'On the day of the plot, July 20, 1944, Stauffenberg carried a briefcase containing two explosives aiming to kill everyone in the briefing hut, but he struggled with setting the fuse due to his only having three fingers, and only brought in one explosive.',
		'hide image hitlermeeting',
		'show image soldier',
		'"The classic image of the warrior through all of history. I barely knew him, but as he stood there, one eye covered by a black patch, a maimed arm in an empty uniform sleeve, standing tall and straight, looking directly at Hitler who had now also turned round, he was, as I have said, a proud figure.” (Warlimont).',
		'hide image soldier',
		'show background julyplot with fadeIn',
		'With only one person separating him and Hitler, he pushed the briefcase as close as he as the table-support next to Hitler would allow. He then stepped out of the building on the pretense of a phone call where he then heard a huge explosion.',
		'show background black with fadeIn',
		'show image trousers',
		'After the explosion, Stuaffenberg saw a person with the Führer’s cloak being carried from the room, and assumed he had been killed. Based on this assumption he rushed back to Berlin to execute the rest of Operation Valkyrie.',
		'hide image trousers',
		'show image clauspicture',
		'But when General Friedrich Fromm informed him that Hitler was, in fact, alive, Stauffenberg continued to insist the opposite. He confessed that he knew this because he was the one who placed the bomb, and Fromm immediately arrested him and his fellow conspirators. They were executed the very next day.',
		'hide image clauspicture',
		'jump Ending',
	],

	'Ending':[
		'show background julyplot with fadeIn',
		{'Choice':{
			'Closing':{
				'Text': 'Conclusion',
				'Do': 'jump Closing',
			}
		}
		}
	],

	'Closing':[
		'show background attention with fadeIn',
		'Claus von Stauffenberg’s bold actions illustrate that internal opposition to the Nazi regime very much existed. They were doing it to show the world that the German military was not entirely complacent and some were trying to fight back.',
		'The assassination attempt “has given the outside world a glimpse of the deep elements of dissatisfaction that now compose the Nazi Reich.” Not all Nazis fully believed in what they were doing, in fact many did not, and instead were trying fight back.',
		'show background white',
		'show image bibliography',
		'Bibliography',
		'hide image bibliography',
		'show image pictures',
		'Image credits',
		'hide image pictures',
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
        Taryn Gluck
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
