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

// Define the images used in the game.
monogatari.assets ('images', {
	siblings: "SasakiChildren.jpeg",
	airRaidShelter: "AirRaidShelter.jpeg",
	sasakiFamily: "sadakomasahiro.jpeg",
	enolaGay: "enolaGay.jpeg",
	bombCloud: "hiroshima bomb.jpeg",
	genbakuDome: "genbakudome.png",
	painting1: "painting1.png",
	painting2: "painting2.jpeg",
	painting3: "painting3.png",
	rebuild: "hirorebuild.jpeg",
	sadako: "sadako.jpeg",
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'cranes': 'cranes.jpeg',
	'memorial': 'hiroshimamemorial.jpeg',
	'black': 'black.jpeg',
	'senbazuru': 'senbazuru.jpeg',
	'hiroshimanow': 'hiroshimanow.jpeg',
	'statue': 'sadako.jpeg'
});


// Define the Characters
monogatari.characters ({

});

//
monogatari.script ({
	'Start': [
		'show background senbazuru with fadeIn',
		{'Choice':{
			'senbazuru':{
				'Text': 'senbazuru?',
				'Do': 'jump senbazuru'
			},
		}
	},
],

	'senbazuru':[
		'Have you ever heard of senbazuru before?',
		{'Choice':{
			'Y':{
				'Text': 'Yes',
				'Do': 'jump yesSenbazuru'
			},
			'N':{
				'Text':'No',
				'Do': 'jump noSenbazuru'
			},
		}
	},
	],

	'yesSenbazuru':[
		'show background senbazuru',
		'That is great! Here is a quick recap just in case you do not remember everything.',
		'千羽鶴, senbazuru, directly translates to 1000 cranes. An ancient Japanese legend proclaims that anyone who folds a thousand paper cranes will be granted a wish from the gods. In Japan, cranes supposedly live for a thousand years so one origami crane must be made for each year.',
		'The Thousand Crane Legend gave many hope during hard and trying times.',
		'jump choiceScreen',
	],

	'noSenbazuru':[
		'show background senbazuru',
		'No worries, we will learn about it now.',
		'千羽鶴, senbazuru, directly translates to 1000 cranes. An ancient Japanese legend proclaims that anyone who folds a thousand paper cranes will be granted a wish from the gods. In Japan, cranes supposedly live for a thousand years so one origami crane must be made for each year.',
		'The Thousand Crane Legend gave many hope during hard and trying times.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background hiroshimanow with fadeIn',
		{'Choice':{
			'TSF':{
				'Text': 'The Sasaki Family',
				'Do': 'jump TheSasakiFamily',
			},
			'TBH':{
				'Text': 'The Bombing of Hiroshima',
				'Do': 'jump TheBombingHiroshima',
			},
			'A':{
				'Text': 'The Aftermath',
				'Do': 'jump Aftermath',
			}
		}
	}
	],

	'TheSasakiFamily':[
		'show background black with fadeIn',
		'show image sasakiFamily',
		'The Sasaki’s lived in the city of Hiroshima during the midst of World War Ⅱ. During the war, the Allies dropped numerous bombs on the Japanese, destroying homes and cities. Although Sadako and Masahiro (the two children) often took refuge in bomb shelters, neither sibling ever realized the imminent danger of their living situation.',
		'Shigeo, father to Sadako and Masahiro, owned a barbershop but was enlisted in the Japanese military after World War Ⅱ started. As a result of this, Sadako and Masahiro’s mother, Fujiko, began to manage the barbershop herself while the children were cared for by their grandmother.',
		'hide image sasakiFamily',
		'jump choiceScreen',
	],

	'TheBombingHiroshima':[
		'show background black with fadeIn',
		'show image enolaGay',
		//maybe add sound effects of bomb sirens Here
		'On August 6, 1945, air raid alarms rang throughout the city of Hiroshima as a singular American plane flew over the city. Sirens rang throughout the city and people rushed to the bomb shelters, but no bombings occured and residents were given the all clear.',
		'Little did they know that the plane that flew overhead had just reported to the American forces that the weather conditions were ideal for the dropping of the atomic bomb.',
		'hide image enolaGay with fadeOut',
		'As the Sasaki family was eating breakfast, they heard cries and shouts from the neighbors. They rushed outside to see the bomber planes flying through the sky. Everyone craned their heads up towards the sky and some even called the planes pretty.',
		'show image bombCloud with fadeIn',
		'The Sasaki family were nearly back inside their house when the sky became brighter than it ever had been before. The American planes had just dropped the atomic bomb.',
		'Sadako was blown into the yard while the rest of the family became stuck under the remains of their home.',
		'hide image bombCloud',
		'show image genbakuDome with fadeIn',
		'The once lively city of Hiroshima was completely flattened and unrecognizable.',
		'hide image genbakuDome',
		'show image painting1 with fadeIn',
		'The atomic bomb released a wave of heat so strong that started fires throughout the city. These fires consumed the fallen buildings and grew larger and larger. Sadako and Masahiro’s mother, Fujiko, knew the fire would kill them if they did not escape soon.',
		'hide image painting1 with fadeOut',
		'show image painting2 with fadeIn',
		'All these drawings were made by Hiroshima survivors.',
		'hide image painting2',
		'show image painting3 with fadeIn',
		'The family walked for hours and eventually a rescue operation truck drove them to Fujiko’s hometown. Miraculously, most of the Sasaki family survived. Sadako and Masahiro’s grandmother had passed away while attempting to retrieve her late husband’s remembrance tablet. Although the worst of the bombing was over, the Sasaki family, grieving and injured, had no idea what they would do next.',
		'hide image painting3 with fadeOut',
		'Everything they knew and loved was destroyed.',
		'jump choiceScreen',
	],

	'Aftermath':[
		'show background black',
		'show image rebuild with fadeIn',
		'Despite their bleak circumstances, the Sasaki family did their best to recover. Sadako and Masahiro’s parents suffered from “atomic bomb disease” caused by radiation, but the  children emerged seemingly unscathed. Although conditions in Hiroshima were hardly any better, the family gradually saved enough money to move back. Sadako and Masahiro were able to return to school and life was returning to normal.',
		'hide image rebuild',
		'show image sadako with fadeIn',
		'However, during one winter vacation, Sadako’s face began to swell and lumps appeared on her jawline. A doctor visited and diagnosed her with the “atomic bomb disease”, also known as leukemia. Sadako’s parents did more tests and the results were dire. Malignant cells were found in her bloodstream and it was estimated that she had merely months to live.',
		'It was then that her father chose to tell her about the ancient Japenese legend, senbazuru.',
		'"If you fold a thousand paper cranes, your wish will come true."',
		'Sadako began folding as many cranes as her little hands could manage, in hopes that one day her wish could be granted.',
		'However, Sadako passed away on October 25th.',
		'She had managed to fold over thirteen hundred cranes.',
		'Her wish?',
		'To live a a normal life, surrounded by her friends and family.',
		'hide image sadako with fadeOut',
		'jump Ending',
	],

	'Ending':[
		'show background memorial with fadeIn',
		{'Choice':{
			'Closing':{
				'Text': 'Closing',
				'Do': 'jump Closing',
			}
		}
		}
	],

	'Closing':[
		'show background statue with fadeIn',
		'The Sasaki family suffered immensely from the bombing of Hiroshima. They went through incredible hardship and Sadako tragically lost her life due to the radiation from the bombing. Her death and the deaths of all those who lost their lives to the atomic bombings serve as a reminder as to why a third atomic bombing should never occur.',
		'Sadako’s cranes have become a global symbol of peace and her resilience up until the very end inspires many around the world. Additionally, Masahiro is more than just a survivor of Hiroshima. He chose to spread messages of peace and healing, instead of messages of revenge and retaliation.',
		'The Sasaki siblings never lost hope even after they lived through the most devestating bombing ever recorded.',
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
        <b>The Cranes of Hiroshima</b>
				<br/>
				<br/>
        By Senya W.
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
