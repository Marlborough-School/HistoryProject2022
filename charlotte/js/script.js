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
	'reniapg2':'reniapg2.jpeg',
	'reniapg1':'reniapg1.jpeg',
	'reniaandmama':'reniaandmama.png',
	'reniabegmoreinfo':'reniabegmoreinfo.png',
	'reniawhee': 'reniawhee.jpeg',
	'renialgbtq':'renialgbtq.jpeg',
	'przghettosquare':'przghettosquare.jpeg',
	'zyg': 'zyg.jpeg',
	'elizabeth': 'elizabeth.jpeg',
	'reniaclosing': 'reniaclosing.jpeg',
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
	'renia': 'renia.jpeg',
	'bigrenia': 'bigrenia.jpeg',
	'hitler': 'hitler.jpeg',
	'przghetto':'przghetto.jpeg',
	'diary': 'diary.jpeg',
	'reniatheend': 'reniatheend.jpeg',
	'biblio': 'biblio.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show background black with fadeIn',
		'show image reniapg1',
		'When most people hear the name Renia Spiegel, the idea of a young Polish Jewish girl who wrote in a diary during the Holocaust and is often considered a “Polish Anne Frank” likely doesn’t come to mind. Why should it? Renia’s diary was hidden - untouched for 70 years.',
		'How many pages do you think Renia’s journal is?',
		{'Choice':{
			'Y':{
				'Text': '700',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': '376',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'hide image reniapg1',
		'show background black',
		'show image reniapg2',
		'Yes, Renia wrote over 700 pages and had more than 100 journal entries.',
		'jump BegMoreInfo',
	],

	'noAnswer':[
		'show background black',
		'Actually, Renia wrote over 700 pages and had more than 100 journal entries.',
		'jump BegMoreInfo',
	],

	'BegMoreInfo':[
		'show background black',
		'show image reniabegmoreinfo',
		'Renia’s journal gave the world a chance to see a piece of what her life was like. Did Renia, whose life was turned upside down by Hitler and the Nazis, manage to lead a normal life and keep her spirit, or did she lose her light after constantly getting little pieces of her life stolen from her? The bigger question is, did Renia’s story end with the happily ever after she wanted for herself, or with tragedy?',
		'jump choiceScreen',
	],


	'choiceScreen':[
		'show image reniapg2',
		'show image reniabegmoreinfo',
		'hide image reniapg2',
		'hide image reniabegmoreinfo',
		'show background bigrenia with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Early Life',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'The Przemysl Ghetto',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'The End of Her Story',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'redGrape':[
		'show background hitler with fadeIn',
		'In the early 1920s, a new political party called the Nazi Party, grew dominant under the rule of leader Adolf Hitler, who was sworn in as Germany’s chancellor in 1933. Hitler, who believed in the concept of a superior race, believed he had to remove anyone with opposing beliefs, especially Jewish people, in order to transform Germany into the powerful country he wanted it to be.',
		'jump earlylifept2',
	],

	'earlylifept2':[
		'show background black',
		'show image reniawhee with fadeIn',
		'Renia began documenting her life in a diary in 1939 at age 15. She was living with her grandparents in Przemysl, missing her mother, father, and younger sister. Despite her challenging living situation, Reina had a relatively normal life: she wrote about school, her friends, and her crushes.',
		'jump earlylifept3',
	],

	'earlylifept3':[
		'show background black',
		'hide image reniawhee',
		'show image renialgbtq with fadeIn',
		'One crush was on her teacher, Mrs. Brühla. Though Renia’s sexual orientation was never explicitly stated, being part of the LGBTQ+ community was highly frowned upon at the time, so Renia writing about having a crush on a woman shows her resilience.',
		'jump choiceScreen',
	],


	'greenGrape':[
		'show background przghetto with fadeIn',
		'On September 1st, 1939, Germany invaded Poland, causing Renia, Ariana, and their Grandfather to flee to Lwow less than a week later. Renia wrote about how poor the conditions were in Lwow, however, she felt that worrying about the safety of her family was worse than the physical suffering: “This life is terrible. We’re yellow, pale, from this cellar life—from the lack of water, comfortable beds and sleep. But the horrible thoughts are much worse” (Spiegel).',
		'show background black',
		'show image zyg',
		'A week later, after Lwow surrendered to Russia, Renia was able to return home to a somewhat normal life. She wrote about the pressure she felt to fall in love with a boy, and how she “felt like a fish out of water” (Spiegel) because she didn’t think boys liked her. However some time later, Renia met a young man named Zygmunt Schwarzer, or Zygus, and they started dating.',
		'show background black',
		'show image przghettosquare',
		'A few years later, on July 14, 1942, the Nazis established a ghetto in Przemysl and commanded the city’s 24,000 Jewish residents to move in by the next day, including Renia, Ariana, and her grandparents.. A survivor of the Przemysl ghetto remembers “a tremendous shortage of food - people were starving and there was no money” (J. Rinde). On July 20, German authorities demanded 1.3 million zloty in 5 days from the ghetto’s residents if they wanted to ensure “peace and quiet”. Slowly, 5 days passed and the residents weren’t able to get the money they needed.',
		'show background black',
		'hide image przghettosquare',
		'hide image zyg',
		'jump choiceScreen',
	],

	'blackGrape':[
		'show background przghetto',
		'Zygmunt managed to sneak Renia and Ariana out of the ghetto before the Nazis invaded it the next day to deport Jews to death camps. He hid Renia and his parents in the attic of a tenement house, while he took Ariana to stay with a friend. Despite Zygmunt’s efforts, On July 30, German soldiers discovered Renia and Zygmunt’s parents, killing them all. Zygmunt, in a state of shock and disarray, gave Renia’s diary a final entry:',
		'show background diary',
		'“Three shots! Three lives lost! It happened last night at 10:30 p.m. Fate decided to take my dearest ones away from me. My life is over. All I can hear are shots, shots shots....My dearest Renusia, the last chapter of your diary is complete.”',
		'show image elizabeth',
		'Now the question is, why was the journal not read until 70 years after she wrote it? Ariana, who survived the Holocaust, recieved the diary from Zygmunt, but she couldn’t bring herself to read out of sadness. She locked it away, and it wasn’t until Ariana’s daughter Alexandra had to know what it said, that it was finally scanned and read. The book was published in 2016, and finally, Renia got her voice back.',
		'hide image elizabeth',
		'show background reniatheend',
		'Though it would seem that is where Renia’s story would come to an end, it is just the beginning. Renia’s story needs to be shared because through her words about her experiences readers learn that despite all the suffering the world forced upon her, she kept her head held high through the toughest times. Through her writing, Renia is able to keep telling her story and it will continue to be told as long as people are willing to listen.',
		'jump Ending',
	],

	'Ending':[
		'show background biblio with fadeIn',
		{'Choice':{
			'Closing':{
				'Text': 'Bibliography',
				'Do': 'jump Closing',
			}
		}
		}
	],

	'Closing':[
		'show background black',
		'show image reniaclosing',
		'Thank you!',
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
        <b>Renia Spiegel: 70 Years in the Future</b>
				<br/>
				<br/>
        By: Charlotte Landis
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
