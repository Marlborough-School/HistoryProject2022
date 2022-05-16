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
	'number':'number.jpeg',
	'sibs':'lefamily.jpeg',
	'clothes':'clothes.jpeg',
	'gold':'gold.jpeg',
	'gates':'gates.jpeg',
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
	'lilyebert1': 'lilyebert1.jpeg',
	'crematorium': 'crematorium.png',
	'sibs': 'lefamily.jpeg',
	'clothes': 'clothes.jpeg',
	'gold': 'gold.jpeg',
	'gates':'gates.jpeg',

});


//
monogatari.script ({
	'Start': [
		'show background black with fadeIn',
		'show image number with fadeIn',
		' “My number is A-10572. That is what I was… I was not my name. We were not humans, we were only a number and we were taken also, only for a number” (@lilyebert).',
		'hide image number',
		'show background crematorium' ,
		'How many people do you think were killed in the Holocaust?',
		{'Choice':{
			'Y':{
				'Text': 'Greater than 3 million',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'Less than 3 million',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background crematorium',
		'Yes, approximately six million Jewish people were killed in the Holocaust, and at least 1.1 million of those deaths occurred at Auschwitz concentration camp. Lily Ebert, ninety-seven year old Hungarian Jew, was imprisoned in Auschwitz, and miraculously lived to tell her story of survival. ',
		'jump nextSlides',
	],

	'noAnswer':[
		'show background crematorium',
		'No, approximately six million Jewish people were killed in the Holocaust, and at least 1.1 million of those deaths occurred at Auschwitz concentration camp. Lily Ebert, ninety-seven year old Hungarian Jew, was imprisoned in Auschwitz, and miraculously lived to tell her story of survival. .',
		'jump nextSlides',
	],

	'nextSlides':[
		'show background black',
		'show image sibs',
		' "Lily Ebert was raised in Hungary until she was 20, when the Nazis invaded and she was taken with her mother, brother, and three sisters to Auschwitz concentration camp."',
		'hide image sibs',
		'show background black',
		'show image clothes',
		' "Before arriving to the camp, the prisoners were striped of all their possessions and the Nazis confiscated everything that was seen as value. On the train, Lily’s mother told her to switch shoes with her."',
		'hide image clothes',
		'show background black',
		'show background gold',
		' "In her mother’s shoe, a gold pendant was hidden, which Lily never parted with to this day. This piece of gold might be the only piece of gold that entered Auschwitz and left with its original owner."',
		'hide background gold',
		'show background black',
		'show background gates',
		' "Upon arrival at Auschwitz, Lily recalls thinking she had arrived at the gates of hell. Everyone was then brought in groups of five in front of Josef Mengele, otherwise known as “the angel of death.” Lily Ebert was brought forth with her family as Mengele sorted every person that was brought into Auschwitz into two groups: one group to the left, and one group to the right. "',





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
        <b>It’s Not Just Life, it’s Survival</b>
				<br/>
				<br/>
        By: Lucy Savant
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
