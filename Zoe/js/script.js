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
	'bib':'bib.jpeg',
	'photos':'photos.jpeg',
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'black':'black.jpeg',
	'portrait':'portrait.jpeg',
	'trio':'trio.jpeg',
	'group':'group.jpeg',
	'family':'family.jpeg',
	'foch':'foch.jpeg',
	'fritz':'fritz.jpeg',
	'hospital':'hospital.jpeg',
	'inside':'inside.jpeg',
	'leave':'leave.jpeg',
	'married':'married.jpeg',
	'news':'news.jpeg',
	'old':'old.jpeg',
	'portrait':'portrait.jpeg',
	'ravensbruck':'ravensbruck.jpeg',
	'youth':'youth.jpeg',
	'dinner':'dinner.jpeg',
	'potatocat': 'potatocat.jpeg',
	'crycat':'crycat2.jpeg',
});


//
monogatari.script ({



	'Start':[
		'show background portrait with fadeIn',
		'Odette Sansom, a female spy tortured by the Gestapo duirng World War 2, was the first woman to ever be given the honor of the George Cross.',
		'Sansom was a member of the Special Operations Executive. Sansom never believed she would be a spy because before joining the organization, she was a mother to three children and married for many years.',
		'Sansom’s story starts in her childhood. Odette’s early life was affected by World War II, as Germans had launched an attack through Belgium and into the heart of France right through Sansom’s home in Amiens.',
		'Her father, disturbed at the actions of German soldiers, joined the French army and fought for almost a year before being taken out by a German shell.',
		'This influenced her to join the SOE later in life believing, in the words of her grandfather, that “it will be your duty… to do as well as your father did” (Code Name - Lise).',
		'show background family with fadeIn',
		'Odette married Roy Sansom, an Englishman she met in France. She had three children with Roy, and took great pride in being a mother.',
		'show background group with fadeIn',
		'She never would have believed that she would be a spy until she received a letter from the SOE asking her to join. Sansom knew that this was her chance to make a difference in the war effort, even if it meant leaving her family behind.',
		'She worked her way up, finally acting as a courier in the SPINDLE Circuit, a smaller part of the SOE that arranged airdrops of firearms and explosives, which was headed by Peter Churchill. Odette turned out to be a great spy, throwing herself headfirst into every mission she was assigned.',
		'show background trio with fadeIn',
		'All was going well until one day she was staying in a hotel with Peter Churchill, when the Gestapo attacked. They burst in through the doors of Sansoms room, holding her at gunpoint.',
		'show background dinner with fadeIn',
		'They realized that Odette would be safer if she went by the persona of  “Odette Churchill” to be allowed to meet with Peter, and if both pretended to be cousins of Winston Churchill to protect themselves from harm.',
		'show background foch with fadeIn',
		'In interrogation at Avenue Foch, Odette managed to convince the German agents that “her husband” Peterwas merely an innocent bystander and that she alone was involved in espionage activities.',
		'They focused on Sansom, who revealed nothing. Her obstinance lead to horrific torture from the German agents in an effort to learn the SOE’s secrets and the wherabouts of two of the organizaton’s officials: Arnaud and Roger.',
		'show background news with fadeIn',
		'Unwilling to betray the SOE, Sansom was condemned to death in June 1943.',
		'show background old with fadeIn',
		'However, she had been sentenced twice, in both France and Britain. In an interview, she later said that her reaction was humor, saying “For which country will I die? I shall never know.”(New York Post)',
		'To worsen things, sick and condemned to death, she was brought to Ravensbruck concentration camp.',
		'jump greenGrape',
	],

	'greenGrape':[
		'show background ravensbruck with fadeIn',
		'The camp had both a crematorium and gas chamber, and was ravaged by disease and the effects of overcrowding and Samson’s ailments got worse.',
		'show background hospital with fadeIn',
		'Permitted to visit a camp doctor as her conditions worsened, she was told she was suffering from tuberculosis. The doctor offered to perform lung surgery in the camp hospital, but Sansom refused, believing the doctor to be illegitimate.',
		'show background fritz with fadeIn',
		'A German commander named Fritz Suhren, realizing the value of having a “relative of Winston Churchill” as his prisoner, monitored and organized medical treatment for her conditions.',
		'show background youth with fadeIn',
		'Unbeknownst to Sansom, as she had no way to communicate with other prisoners, the Allied armies were forcing a German retreat on all fronts. The Russians in the east were also making headway, and by March 1945, the Russians closed in on Ravensbrück.',
		'show background leave with fadeIn',
		'A decision was made but a week later to evacuate the camp.',
		'Hundreds were killed in this process, however, as some were executed to eliminate witnesses of the horrors of Ravensbrück, some were fatally shot while trying to escape, and some were simply too ill to survive the move.',
		'show background inside with fadeIn',
		'It was a tragedy completely missed by Sansom, however, as she remained in solitary confinement, completely forgotten about until the very end of the evacuation.',
		'Will Sansom make it out of Ravensbruck?',
		'jump Question',
	],

	'Question': [


		{'Choice':{
			'Y':{
				'Text': 'Yes, she will.',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'No, she will not.',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background portrait',
		'Yes! In the end, it was her false title that saved her life, as she was taken by Fritz Suhren as a hostage. Grabbed from her cell, she was shoved in a car headed to what she believed would be her doom.',
				'However, this was not the case. Hoping to trade his valuable hostage for his freedom, or at the very least preferential treatment, Suhren drove Sansom towards the American lines. Suhren handed Sansom over to an American officer, but before he could negotiate the terms of his exchange, Sansom told the American officers who Suhren was, and the horrors that he was responsible for, and the Americans took him into custody.',

		'jump choiceScreen',
	],

	'noAnswer':[
		'show background portrait',
		'Suprise, she made it out! In the end, it was her false title that saved her life, as she was taken by Fritz Suhren as a hostage. Grabbed from her cell, she was shoved in a car headed to what she believed would be her doom.',
		'However, this was not the case. Hoping to trade his valuable hostage for his freedom, or at the very least preferential treatment, Suhren drove Sansom towards the American lines. Suhren handed Sansom over to an American officer, but before he could negotiate the terms of his exchange, Sansom told the American officers who Suhren was, and the horrors that he was responsible for, and the Americans took him into custody.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background duck2 with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Early Life',
				'Do': 'jump earlyLife',

			},
			'2':{
				'Text': 'Ravensbruck',
				'Do': 'jump Ravensbruck',
			},
			'3':{
				'Text': 'Later Life',
				'Do': 'jump laterLife',
			}
		}
	}
	],
	'blackGrape':[
		'show background grape with fadeIn',
		'You found the grapes! Now we will go the end of the project',
		'jump Ending',
	],

	'Ending':[
		'show background potatocat with fadeIn',
		{'Choice':{
			'Closing':{
				'Text': 'Conclusion',
				'Do': 'jump Closing',
			}
		}
		}
	],

	'laterLife':[
		  'show background married with fadeIn',
			'However, she did not stop there. Upon returning to Britain, Sansom continued to work for the SOE, providing valuable details about the horrors of her incarceration, which assisted in war crimes trials, and helping track down female agents who had never returned from France.',
			'She was also reunited with Peter Churchill, who like Samson had also survived the horrors of concentration camp life. In the midst of this, she reflected upon her marriage as well, ultimately deciding to divorce her husband Roy Sansom and marry Peter Churchill.',
			'She was reunited with her daughters, who she continued to raise until they left for university, taking back her role as mother.',
			'She was awarded the Gold Cross in 1946 for her bravery, one of the greatest honors bestowed in Britain. She continued to work in various organizations and charities well into old age, even returning to Ravensbrück to hang a plaque honoring the agents who had lost their lives in captivity.',
			'A true World War II hero, Odette Sansom will always be remembered for not only her commitment and bravery when faced with great adversity, but also as a mother, - the role she always describes as being at the very heart of her thoughts and actions.',
			'show background black with fadeIn',
			'show image bib with fadeIn',
			'Bibliography',
			'hide image bib with fadeOut',
			'show background black with fadeIn',
			'show image photos with fadeIn',
			'Image Credits',
			'hide image photos with fadeOut',
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
				<p>
        <b>Odette Sansom: Mother Turned Spy</b>
				<br/>
				<br/>
        By: Zoe Guzin
        </p>
				</center>
				<br/>

				<main-menu></main-menu>
    `;
});
