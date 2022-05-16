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
	'map':'map.jpg',
	'route':'route.jpg',
	'statue':'statue.jpg',
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
	'revenge':'revenge.jpg',
	'bomb':'bomb.jpg',
	'plane':'plane.jpg',




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
		'show background ship with fadeIn',
		' Despite Yamamoto being familiar with the U.S., he underestimated how strong the U.S. could be. In the beginning, many officers were very optimistic about the war with the U.S., however as time went on, some started wanting to delay the attack and the decision of the war. Nevertheless, it was too late to delay the attack, therefore the decision was made on November 2nd to prepare for the war. ',
		'jump ten',
	],

'ten':[
	'show background black with fadeIn',
'show image map with fadeIn',
'The attack that Japan made indeed sunk many American battleships, aircraft, and people, however, due to America’s quick strategies, they were able to come back and attack Japan. Yamamoto was not able to make his third wave of attack because they were lacking fuel from all the previous attacks. From this, three U.S. aircraft carriers were able to escape.',
'jump eleven',
],

'eleven':[
	'hide image map with fadeOut',
	'show background revenge with fadeIn',
	'The United States’ best advantage to revenge on Japan was breaking their naval code allowing them to break Japan’s plans and bring them down. With the break of the code, the U.S. was warned in advance of Japan’s operations. ',
'jump twelve',
],

'twelve':[
	'show background bomb with fadeIn',
	'When the U.S. attacked back in Hiroshima and Nagasaki in 1945, many Japanese towns and cities were left in ruins and a minimum of 130,000 to a total of 215,000 Japanese citizens died from the attack.',
	'jump thirteen',
],

'thirteen':[
	'show background black with fadeIn',
	'show image route with fadeIn',
	'From these code breakings, on April 18, 1943, “18 American P-38s from the 13th Air Force launched from Guadalcanal, flew to Bougainvillea, found the Admirals flight, and shot down his plane killing him” (Admiral Isoroku).',
	'jump fourteen',
],

'fourteen':[
	'hide image route with fadeOut',
	'show background plane with fadeIn',
	'Despite Yamamoto’s strategies and his leadership towards attacking the U.S., he was not greatly appreciated or looked upon. When his funeral was held, only about 80 people attended it and no government or military officers attended.',
	'jump fifteen',
],

'fifteen':[
	'show background black with fadeIn',
	'show image statue with fadeIn',
	'Although he was underappreciated, his contribution to strategies in the early stages of the attack showed his loyalty to Japan, therefore, showcasing how brave of a leader he was to his country. Nevertheless, films on Yamamoto have been created and shown to the media. Books about Yamamoto have also been published. There is also a statue of him showcased in his hometown. ',

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
