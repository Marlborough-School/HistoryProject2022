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
	'Isoroku':'Portrait.jpg',
	'americans':'download.jpg',
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'duck':'ducksong.jpg',
	'duck2':'duck2.jpeg',
	'black':'black.jpeg',
	'grape':'blackgrape.jpeg',
	'potatocat': 'potatocat.jpeg',
	'crycat':'crycat2.jpeg',
	'died':'died.jpg',
	'plan':'plan.jpg',
	'ship':'ship.jpg',



});


//
monogatari.script ({
	'Start': [
		'show background black with fadeIn',
		'show image Isoroku with fadeIn',
		'When Japan attacked the United States which became the Pearl Harbor Attack, rarely did anyone know who planned the attack or who initiated it. As students growing up learning about Pearl Harbor, never did anyone hear about the name Isoroku Yamamoto.',
		'Isoroku Yamamoto was the key strategist that started this massive attack.',
		'hide image Isoroku with fadeOut',
		'show background died with fadeIn',
		'How many Americans do you think died in the Pearl Harbor attack?',
		{'Choice':{
			'Y':{
				'Text': 'Around 5,500',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'Around 2,500',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background died with fadeIn',
		'There were actually around 2,500 people that died from the Pearl Harbor attack with 1,143 people wounded. All Americans that were killed in this attack were non-combatants. ',
		'jump intro',
	],

	'noAnswer':[
		'show background died with fadeIn',
		'Correct! There were around 2,500 people that died from the Pearl Harbor attack with 1,143 people wounded. All Americans that were killed in this attack were non-combatants. ',
		'jump intro',
	],

	'intro':[
		'hide image died with fadeOut',
		'show background black with fadeIn',
		'show image americans with fadeIn',
		'In 1926, Yamamoto became a naval officer for the Japanese embassy in Washington D.C. There, he was promoted from vice minister to commander in chief. Before the government decided on war with the U.S., Yamamoto stated that he opposed war with the U.S. because he feared that Japan would go through a prolonged conflict from the war. Once the war was going to happen, Yamamoto argued that he should be the one in charge and went on to command the carriers of the attack without thinking about what the U.S. could do to Japan.',
		'jump nextSlide',
	],

	'nextSlide':[
		'show image americans with fadeIn',
		'Yamamato was able to command the attack because he supposedly studied at Harvard and was a naval attache in Washington allowing him to understand the U.S. more than others. According to David C. Gompert, Hans Binnendjk, and Bonny Lin, Yamamoto wrote: The only way is to have a powerful air force strike deeply at the enemy’s heart at the very beginning of the war and thus to deal a blow, material and moral, from which it will not be able to recover for some time (10).',
		'jump body',
	],

	'body':[
		'hide image americans with fadeOut',
		'show background plan with fadeIn',
		'He predicted that Japan could only win the war if it did not last for more than two years and after those two years, he could not see a great outcome with this war. ',
		'jump eight',
	],

	'eight':[
		'show background plan with fadeIn',
		'Yamamoto’s grandson, Gentaro Yamamoto stated that “He never wanted to go to war with the United States. He knew that if we fought with the United States, it would be fatal. But it was the decision of the government and he felt it was his duty — that he had no choice” (Spitzer) (Legacy Still). Yamamoto was left in a state where there was only one option, to fight the enemy. ',
		'jump nine',
	],

	'nine' :[
		'hide background plan with fadeOut',
		'show background ship with fadeIn',
		' Despite Yamamoto being familiar with the U.S., he underestimated how strong the U.S. could be. In the beginning, many officers were very optimistic about the war with the U.S., however as time went on, some started wanting to delay the attack and the decision of the war. Nevertheless, it was too late to delay the attack, therefore the decision was made on November 2nd to prepare for the war. ',

	],


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
        <b>Isoroku Yamamoto: Important Admiral and Strategist of the Pearl Harbor Attack</b>
				<br/>
				<br/>
        By: Daphne Chen Yang
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
