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
'bedzin':'bedzin.png',
'ic':'imagec.png',
'bib':'bib.png',
'letter':'letter.jpg',
'lettertwo':'lettertwo.jpg',
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'Ala Portrait': 'Ala Portrait.png',
	'grandma':'grandma.jpeg',
	'Auschwitz':'Auschwitz.jpeg',
	'survivors':'survivors.jpg',
	'Ala2':'Ala2.gif',
	'Laborcamp':'LaborCamp.png',
	'sort':'sorting.jpeg',
	'wum':'wum.jpeg',
	'builtc':'builtc.jpeg',
	'fire':'fire.png',
	'current':'currentc.jpeg',
	'unity':'womenuprisings.png',
	'bedzin':'bedzin.png',
	'black':'black.jpeg',
	'as':'alasala.jpg',
	'white':'wb.png',
	'let':'let.png',
	'slet':'slet.png',

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
		'This Pre-war picture of Ala shows the normality that was previously in her life. She was deported in the final transports of Jews from Upper Silesia, in Poland to Auschwitz.',
		'jump afterSlide',
	],

	'afterSlide':[
		'show background black with fadeIn',
		'show image bedzin with fadeIn',
		'Ala came from a wealthy family and was well educated as she attended a school in Będzin, Poland.',
		'hide image bedzin with fadeOut',
		'show background Auschwitz with fadeIn',
		'Her literacy, education, and German fluency allowed her to be an important part of the Sonderkommando Uprising as she was transported to Auschwitz(depicted above).',
		'jump doneSlide',

	],

  'doneSlide':[
	  'show background Laborcamp with fadeIn',
		'This image depicts the forced harsh labor women had to take on. This specifically shows these women pulling dump cars filled with stones throughout the camp at the Plaszow camp in 1944.',
		'Ala was assigned to the Weichsel-Union-Metallwerke factory in Auschwitz where they experienced extremely strenuous physical tasks.',
		'jump finishSlide',
	],

	'finishSlide':[
		'show background sort with fadeIn',
		'This image is of more forced labor as Jewish women sort confiscated clothing in the Lodz ghetto.',
		'In the Weichsel-Union-Metallwerke factory, they were overworked and forced to make weapons for Nazi soldiers and therefore had access to gun powder.',
		'During her time in this camp, Ala encountered other Jewish women who were not willing to comply with the atrocities within the Holocaust: Roza Robota; Estusia and Hanka Wajcblum; and Regina Safirsztajn.',
	  'jump factorySlide',
	],

	'factorySlide':[
		'show background wum with fadeIn',
		'This is an image of the Weichsel-Union-Metallwerke factory, where Roza first encountered Ala and told her about the resistance movement within Auschwitz. This facility operated from 1943 to make fuses for artillery projectiles.',
		'Over 1200 prisoners worked in this factory complex, including Ala. Ala was intent on having a role in this, so she recruited Estusia Hanka, and Regina due to their direct access to the gunpowder.',
		'With extra cloth or paper, they wrapped up small bits of gunpowder and hid it on their bodies. This would then be passed to Ala and Roza, and then to the Sonderkommando because their work was associated with the Crematorium IV which was the target of where they intended to create an explosion. However, this was not their only goal. They also planned to attack the SS men in the vicinity.',
		'jump ncsSlide',
	],

	'ncsSlide':[
		'show background builtc with fadeIn',
		'The image shown above is the Crematorium IV - their target for the attack. Using this gunpowder, these women were able to fight back and make a statement by blowing the gas chambers and crematoria. This created devastating damage, which therefore launched the uprising.',
		'jump upSlide',
	],

	'upSlide':[
		'show background fire with fadeIn',
		'Because of the “Night and Fog” order Hitler issued on October 7th, 1944, Ala along with her associates involved with the uprising was captured.',
		'After the Sonderkommando blew up Crematorium IV with the explosives planted, the SS guards infiltrated and attacked those involved. This image shows the fire at Crematorium IV at Birkenau.',
		'jump moreSlide',
	],

	'moreSlide':[
		'show background current with fadeIn',
		'An investigation was soon held to find out who had been the leader or had conspired in the uprising. This ultimately led back to the four girls: Ala, Roza, Estusia, and Regina.',
		'They were tortured and questioned for weeks, until their execution date - January 5th, 1945 - for a public hanging in Auschwitz. This image is the current state of the Crematorium IV.',
		'jump wSlide',
	],

	'wSlide':[
		'show background unity with fadeIn',
		'These women, however, did not work alone: “no less than 30 Jewish female prisoners participated in the gunpowder smuggling, carried out in secrecy during a period of about 7 months”. Women took the positions of soldiers and fought just as men did.',
		'While this image is from the Warsaw uprising (also in 1944) it depicts the unity of women in uprisings similar to the Sonderkommando.',
		'jump finSlide',


	],

	'finSlide':[
	'show background let with fadeIn',
	'This is a letter written by Ala to her trusted friend Sala.',
	'jump filSlide',

	],

	'filSlide':[
	'show background slet with fadeIn',
	'In this particular letter Ala states: If it weren’t for these dire straits, things would be different Sala, believe me!. Ala hints at the important role she plays but also mentions how their friendship is greatly valued.',
	'jump conclusionSlide',

	],

	'conclusionSlide':[
	'show background as with fadeIn',
	'My grandmother’s family was fortunate enough to survive the Holocaust when millions of others weren’t. My grandmothers mother’s role to smuggle food for Jews played an important part in history, just as Ala did.',
	'jump imgcreditSlide',
	],

	'imgcreditSlide':[
	'show background white with fadeIn',
	'show image ic with fadeIn',
	'Image Credits',
	'jump biblSlide',

	],

	'biblSlide':[
	'show background white with fadeIn',
	'show image bib with fadeIn',
	'Bibliography',


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
