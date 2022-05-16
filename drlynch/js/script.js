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
'truck': 'truck.jpeg',
'wash' : 'wash.jpg',
'sick' : 'sick.jpeg',
'desk' : 'desk.jpg',
'war' : 'war.jpg',
'bib' : 'bib.jpeg',
'credits' : 'credits.jpeg',

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
	'truck': 'truck.jpeg',
	'gas': 'gas.jpg',
	'white': 'white.jpg',
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
		'show background black with fadeIn',
		'show image truck with fadeIn',
		'Before leaving for the battlefields of Europe, Helen wrote to her brother in Maine:',
		'"I suppose mother has written you that our Pennsylvania Hospital Red Cross Unit of which I am a member has been called for service in Europe, so I am here in Philadelphia, waiting for the pokey old government to get things ready for us to go...',
		'...I would like to have seen you all but of course, can’t, so save your pennies so you can all come call when I get back. I may have some exciting tales to tell You."',
		'hide image truck with fadeOut',
		'jump choiceScreen',
	],

	'greenGrape':[
		'show background gas with fadeIn',
		'Fairchild’s unit arrived in Europe before many American troops could be mobilized. As a result, they treated British troops since Britain was an ally of the U.S. in the war. A major British offensive had begun near Ypres, Belgium, and casualties were high, including many victims of German gas attacks.',
		'Fairchild first worked at a British Base hospital where many soldiers were suffering from injuries caused by mustard gas. She spent hours washing their burns to try to eliminate all traces of the gas.',
		'show background black with fadeIn',
		'show image wash with fadeIn',
		'In August 1917, Fairchild was sent closer to the front to work in a casualty clearing station. There she tried to keep wounded soldiers alive until they could be transferred to a base hospital. She treated men with missing limbs, with organs damaged by the effects of artillery blasts, and with burns inside and out caused by gas.',
		'She didn’t pass on these grissly details to her family, but she did indicate the suffering of her patients.',
		'hide image wash with fadeOut',
		'show background Portrait with fadeIn',
		'“If you could only see what the boys here have to go through sometimes,” Helen wrote to her mother, “you would see they need all the comfort possible.”',
		'show background black with fadeIn',
		'jump choiceScreen',
	],

	'blackGrape':[
		'show background black with fadeIn',
		'show image sick with fadeIn',
		'As winter 1917-1918 set in, however, Nurse Fairchild became ill herself with symptoms that ranged from tonsillitis to indigestion.',
		'None of these should have caused her death, but in January she succumbed to her illness. An autopsy revealed a fatal liver disease, likely caused by exposure to mustard gas on the men she had been treating.',
		'hide image sick with fadeOut',
		'show background black with fadeIn',
		'show image desk with fadeIn',
		'Helen Fairchild had been much admired by both her American compatriots and the British soldiers she treated. The Directoress of U.S. Nurses, Margaret Dunlop, wrote of her death, “It was a frightful tragedy to us all as she was one of my most beloved nurses.”',
		'hide image desk with fadeOut',
		'jump Ending',
	],

	'Ending':[
		'show background black with fadeIn',
		{'Choice':{
			'Closing':{
				'Text': 'Conclusion',
				'Do': 'jump Closing',
			}
		}
		}
	],

	'Closing':[
		'show background black with fadeIn',
		'show image war with fadeIn',
		'Helen Fairchild was a victim of the world’s first modern war - a conflict that involved chemical weapons and other new deadly technologies, such as submarine strikes and  aerial bombardments.',
		'hide image war with fadeOut',
		'show background nurses with fadeIn',
		'The important roles played by women like Fairchild also mark the conflict as modern, though the treatment of women who served in the war was far from equal. Like most women who served, Fairchild found herself in a non-combatant role. Nevertheless, she and many other non-combatants were put in harm’s way by the terrifying new technologies of the war.',
		'show background Portrait with fadeIn',
		'While she is remembered for her bravery and service as a wartime nurse, we would not know much about Fairchild if it had not been for her personal letters and her niece’s commitment to honor her service. As a result, she is remembered as a pioneering nurse and a hero of the first modern war.',
		'show background white with fadeIn',
		'show image bib with fadeIn',
		'Bibliography',
		'hide image bib with fadeOut',
		'show image credits with fadeIn',
		'Image Credits',
		'hide image credits with fadeOut',
		'end',
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
				<br/>
				<br/>
        By: Dr. Lynch
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
