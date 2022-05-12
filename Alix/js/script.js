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
	'title':'titleslide.jpeg',
	'holocaust':'holocaust.jpeg',
	'buczacz':'buczacz.jpeg',
	'mauthausen':'mauthausencamp.jpeg',
	'simonnazi':'simonnazi.jpeg',
	'simonwithpics':'simonwithpics.jpeg',
	'nonagressionpact':'nonagressionpact.jpeg',
	'gestapo':'gestapo.jpeg',
	'adolffakepapers':'adolffakepapers.jpeg',
	'simoncenter':'simoncenter.jpeg',
	'adolffakepapers': 'adolffakepapers.jpeg',
	'nazitrial':'nazitrial.jpeg',
	'laborcamp':'laborcamo.jpeg',
	'youngsimon':'youngsimon.jpeg',

});


//
monogatari.script ({
	'Start': [
		'show background holocaust with fadeIn',
		'How many out of over 200,00 perpetrators of Nazi-era crimes were prosecuted after World War II?',
		{'Choice':{
			'Y':{
				'Text': 'Over 100,000',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'Under 10,000',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background nazitrial',
		'Wrong- Only 6,656 individuals were actually convicted for crimes committed during World War II. It is estimated that over 9,000 Nazis escaped Europe after the war to avoid criminal charges. ',
		'jump nextSlides',
	],

	'noAnswer':[
		'show background nazitrial',
		'Correct- Only 6,656 individuals were actually convicted for crimes committed during World War II. It is estimated that over 9,000 Nazis escaped Europe after the war to avoid criminal charges.',
		'jump nextSlides',
	],

	'nextSlides':[
'show background simonwithpics'
'Simon Wiesenthal, a Jewish survivor of the Holocaust, after being liberated from the concentration camps devoted his life to locating these Nazi criminals who had escaped justice.'
'show background buczacz'
'On September 17, 1939, when Wiesenthal was only 30 years old, the Soviet Union invaded Wiesenthal’s birth city of Buczacaz.'
'show background nonagressionpact'
'This occurred after Russia and Germany signed the “non-aggression pact” where they declared to not fight each other for the next 10 years and effectively split up Eastern Europe among the two empires.'
'show background laborcamp'
'Thus began “the purge” against the Jewish people.'
'In the next couple of years, Wiesenthal’s stepfather was arrested, his stepbrother was killed, and Simon, his mother, and his wife, Cyla Mueller were deported to the Janowska concentration camp in 1941 and then transferred to the Ostbahn labor camp.'
'Wiesenthal was able to obtain forged identity papers for his wife, Cyla, so she would not be put to death for being a Jew; however, Simon remained in the camps.'
'As the Soviet army advanced onto the Eastern Front, German forces began to retreat and during that time SS soldiers transferred Wiesenthal to multiple labor camps.'
'show background mauthausencamp'
'The Nazi soldiers and evacuated prisoners began the trek to the Mauthausen death camp in Austria. Most of the prisoners did not survive the journey to Mauthausen, with over half perishing.'
'Wiesenthal was in very poor shape and on the verge of death when he arrived in Mauthausen; after being nourished with a measly 200 calories a day, 6 foot tall Wiesenthal only weighed 90 pounds (the average weight of a 12-year-old girl).'
'On May 5, 1945, the concentration camp was liberated by American soldiers and Wiesenthal recovered swiftly; at this point, he decided to devote the rest of his life to tracking down Nazi war criminals and bringing them to justice.'
'show background youngsimon'
'Soon after being liberated, Wiesenthal started collecting names of important members of the Nazi party and evidence of the atrocities for the War Crimes Section of the United States Army.'
'Wiesenthal completed similar work as he later helped the Army’s Office Strategic Services and Counter-Intelligence Corps, led the welfare organization, the Jewish Central Committee in the United States Zone of Austria, and continued to participate and testify in war trials for Nazi criminals.'
'In 1947, Wiesenthal and thirty volunteers opened the Jewish Historical Documentation Center in Austria that’s purpose was to assemble evidence of Nazi crimes that could be used in future war trials.'
'But interest in bringing criminals to justice waned as the Cold War captured the world’s attention and eventually all thirty volunteers had left the organization.'
'show background gestapo'
'Wiesenthal was forced to close the agency but he decided to keep one file on a certain escaped Nazi: Adolf Eichmann. Eichmann was the head of Gestapato’s Jewish Department (the Nazis’ secret police) and was one of the major organizers of the Holocaust as he oversaw the “Final Solution”, the term used for the mass elimination of the Jews.'
'show background adolfontrial'
'Wiesenthal obtained information that Eichmann was spotted in Argentina which he passed along to the Israeli government.'
'With the help of Wiesenthal and other sources, Israeli soldiers successfully captured Eichmann in 1959 and he was executed in May of 1961.'
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
        <b>Simon Wiesenthal: "An Elephant Never Forgets"- Nazi Hunter and Avenger</b>
				<br/>
				<br/>
        By: Alix Erlij
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
