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
	'pic4': 'pic4.jpeg',
	'pic5': 'pic5.jpeg',
	'biblio1':'biblio1.jpeg',
	'biblio2':'biblio2.jpeg',
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
  	'show background plane with fadeIn',
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
		{'Choice':{
			'1':{
				'Text': 'Page 5',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Page 6',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'Page 7',
				'Do': 'jump blackGrape',
			}
		},
	},
	],

	'redGrape':[
		'show background duck with fadeIn',
		'By April 1938, his efforts to improve the lives of his citizens became overshadowed by Adolf Hitler, Germanys Chancellor.',
		'jump choiceScreen',
	],

	'greenGrape':[
		'show background duck with fadeIn',
		'Chamberlain was able to convince Hitler to meet in Berchtesgaden, Germany to discuss Czechoslovakia. In transcripts of Chamberlain and Hitler’s meeting in early September 1938, Hitler stated that he recognized that it might be “impossible to bring them [Germans living in Czechoslovakia] into the Reich”.',
		'jump choiceScreen',
	],

	'blackGrape':[
		'show image pic4 with fadeIn',
		'Chamberlain saw this as an opportunity to keep England out of conflict. He persuaded Hitler, Édouard Daladier, (the French Prime Minister) and his foreign minister to accept a proposal that Germany would be allowed to annex the areas of Czechoslovakia, with a population that was more than 50% German-speaking (known as the Sudetenland). This territory was then expected to be turned over to Hitler’s authority. The Czechoslovakians were not consulted and they initially rejected the proposal, but were forced to accept the terms as they could not defeat Germany alone.',
		'jump page8',
	],

	'page8':[
		'hide image pic4 with fadeOut',
		'show image pic5 with fadeIn',
		'In September 1938, Chamberlain flew back to Germany and met Hitler in Bad Godesberg, Germany to further the peace plan, only to find Hitler had new demands, which contradicted their previous conversation in Berchtesgaden. Hitler wanted the Czechoslovakians evacuated from the area in 6 days and the annexed part of Czechoslovakia to be occupied by the German army.',
		'jump page9',
	],

  'page9':[
		'Chamberlain hoped to avoid a war over Czechoslovakia by conceding to Hitler’s new demands yet again, and despite this red flag, Chamberlain submitted the new proposal to the Czechoslovakians, the British, and the French, all of whom eventually accepted (after initially rejecting) Hitler’s new terms.',
  'jump page10',
	],

	  'page10':[
			'Peace was finally reached on September 29, 1938, when the leaders of Germany, Great Britain, France, and Italy, allowed German annexation of the Sudetenland, with the signing of the Munich Agreement.',
	  'jump slide11',
		],

		'slide11':[
			'What was the name of Chamberlain’s most famous speech?',
			{'Choice':{
				'1':{
					'Text': '“Peace in our Time”',
					'Do': 'jump page12',
				},
				'2':{
					'Text': '“A Day for Peace”',
					'Do': 'jump page12',
				},
				'3':{
					'Text': '“Peace At Last”',
					'Do': 'jump page12',
				}
			},
		},
		],
		'page12':[
			'The following day, on September 30, 1938, Chamberlain gave his infamous “Peace in our Time” speech, in which he stated that, "We regard the agreement signed last night … as symbolic of the desire … never to go to war with one another again”. Chamberlain received over 10,000 letters and telegrams thanking him for averting war.',
		'jump page13',
		],

		'page13':[
			'During his speech, he recognized and thanked the British people for sending in letters of their, “support, approval, and gratitude,” saying that “the settlement of the Czechoslovakian problem, which has now been achieved is, . . . only the prelude to a larger settlement in which all Europe may find peace”. Once Hitler invaded and occupied Poland, Chamberlain could no longer support his peace at all costs’ approach. In September 1939, Chamberlain declared war on Germany.',
		'jump page14',
		],

		'page14':[
			"Once Winston Churchill became prime minister, many came to view Chamberlain as a symbol of weakness associated with pacifism. They believed that he had been duped by Hitler into inaction for too long, allowing Germany to become stronger. Chamberlain resigned in May 1940, after British efforts failed to liberate Norway from German rule. Chamberlain served in Winston Churchill’s cabinet as lord president of the council. Shortly after Chamberlain's resignation, he was diagnosed with bowel cancer, and passed away on November 9, 1940 at 71.",
		'jump page15',
		],

		'page15':[
			'Chamberlain was so dedicated to keeping England out of another war, that he failed to recognize that any attempt to appease Hitler was futile. Sadly, he never lived to see the Allies win World War II and create the lasting peace that Chamberlain himself had sought.',
		'jump page16',
		],

		'page16':[
			'While some people may see Chamberlain as weak for trying to placate Hitler, this is an unfair assessment. It is easy to judge Chamberlain through the lens of what Hitler ultimately did. But before the world knew that Hitler would never stop his invasions, peace was an admirable goal.',
		'jump page17',
		],

	'page17':[
		"Chamberlain’s biggest mistake was not realizing that he was dealing with one of the greatest power hungry monsters in history. While Chamberlain was an honorable man, Hitler was a sociopath. As such, Chamberlain's biggest flaw was not seeking peace at all costs. Rather, it was underestimating Hitler’s nature, greed, and thirst for ultimate power.",
		'jump Closing',
	],

	'Closing':[
		'show image biblio1 with fadeIn',
		' ',
		'hide image biblio1',
		'show image biblio2 with fadeIn',
		' ',
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
