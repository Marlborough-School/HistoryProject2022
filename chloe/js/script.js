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
	'Ala Portrait': 'Ala Portrait.png',
	'grandma':'grandma.jpeg',
	'Auschwitz':'Auschwitz.jpeg',
	'survivors':'survivors.jpg',
	'Ala2':'Ala2.gif',
	'Laborcamp':'Laborcamp.png',
	'sort':'sorting.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show background grandma with fadeIn',
		'This is a picture of my grandmother and her husband Henry (with me in the middle).',
		'My Grandmother, Judy(an immigrant from Poland), was a survivor of the Holocaust, along with her siblings and parents. To survive, she faked being Christian, along with her sisters Racheal and Sabina, while her brother, Shmulik, lived in the basement of their home in Poland.',
		'Her father was sent to a concentration camp in Auschwitz, and her mother was sent to a camp for prisoners after being caught for smuggling food for Jews. Sabina (the older sister of my grandmother) went to great lengths to keep them safe and reveal to no one that they were Jewish.',
		'Sabina wrote encoded letters to their mother, letting her know that they were still alive. After receiving each letter, their mother would make eye contact with her husband from across the other camp, and signal to him that each of their children were still alive.',
		'Over 6 million Jews were killed in the Holocaust. How many survivors do you think are still alive today?',
		{'Choice':{
			'Y':{
				'Text': '40,000',
				'Do': 'jump noAnswer'
			},
			'N':{
				'Text': '400,000',
				'Do': 'jump yesAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background survivors',
		'Correct! There are around 400,000 Holocaust surviviors still alive in 2022.',
		'jump nextSlide',
	],

	'noAnswer':[
		'show background survivors',
		'Not quite! There are around 400,000 Holocaust surviviors still alive in 2022.',
		'jump nextSlide',
	],

	'nextSlide':[
		'show background Ala2 with fadeIn',
		'Ala Gertner was similar to my grandmothers mother. She not only experienced life in a concentration camp but played a role in offering as much help as possible to others suffering.',
		'This Pre-war picture of Ala shows the normality that was previously in her life. She was deported in the final transports of Jews from Upper Silesia to Auschwitz.',
		'jump afterSlide',
	],

	'afterSlide':[
		'show background Auschwitz with fadeIn',
		'Ala came from a wealthy family and was well educated as she attended a school in Bedzin. Her literacy and education allowed her to be an important part of the Sonderkommando Uprising as she was transported to Auschwitz(which is depicted above).',
		'jump doneSlide',
	],

  'doneSlide':[
	  'show background Laborcamp with fadeIn',
		'This image depicts the forced harsh labor women had to take on. This specifically shows these women pulling dump cars filled with stones throughout the camp quarry at the Plaszow camp in 1944.',
		'Ala was assigned to the Weichsel-Union-Metallwerke factory in Auschwitz, a similar forced labor camp, where they experienced extremely strenuous physical tasks.',
		'jump finishSlide',
	],

	'finishSlide':[
		'show background sort with fadeIn',
		'This image is of more forced labor as Jewish women sort confiscated clothing in the Lodz ghetto.',
		'In the Weichsel-Union-Metallwerke factory, they were overworked and forced to make weapons for Nazi soldiers and therefore had access to gun powder.',
		'During her time in this camp, Ala encountered other Jewish women who were not willing to comply with the atrocities within the Holocaust: Roza Robota, Estusia and Hanka Wajcblum, and Regina Safirsztajn.',
	
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
        <b>Ala Gertner: Holocaust Experience and Uprising Involvement</b>
				<br/>
				<br/>
        By: Chloe Barker
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
