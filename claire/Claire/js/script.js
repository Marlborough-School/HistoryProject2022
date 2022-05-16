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
	'family':'family.jpeg',
	'kid':'kid.jpg',
	'map':'map.jpeg',
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
	'anne': 'af.jpg',
	'school':'school.jpg',
	'kids': 'kids.jpg',
	'holocaust':'holocaust.jpg',
	'frank':'frank.jpg',
	'holo' :'holo.jpeg',
	'baby':'baby.jpg',
	'kid':'kid.jpg',
	'diary':'diary.jpeg',
	'family':'family.jpeg',
	'books':'bookcase.jpeg',
	'map':'map.jpeg',
	'caught':'caught.jpg',
	'train':'train.jpg',
	'cc':'cc.jpg',
	'women':'women.jpg',
	'book':'book-cover.jpg'
});


//
monogatari.script ({
	'Start': [
		'show background anne with fadeIn',
		'When one hears the familiar name of Anne Frank, people automatically think of the girl who kept a diary during the Holocaust. Rarely do people know the real Anne Frank.',
		'show background school with fadeIn',
		'Anne’s diary only consists of entries describing her life in hiding during the Holocaust. The part people know from her diary is merely a snippet of her fascinating life story.',
		'show background kids with fadeIn',
		'How many Jewish children died in the Holocaust?',
		{'Choice':{
			'Y':{
				'Text': '1.5 million',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': '150,000',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background kids',
		'Correct! There were around 1.5 million children who died in the Holocaust. Many of the children’s stories are not known, however, some children, like Anne Frank, kept diaries or journals which shared what it was like to be a child during the Holocaust.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background kids',
		'Actually, there were around 1.5 million children who died in the Holocaust. Many of these children’s stories are not known, however, some children like Anne Frank kept diaries or journals which shared what it was like to be a child during the Holocaust.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background frank with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'The Holocaust',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Anne’s Early Life',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'Life in Hiding',
				'Do': 'jump blackGrape',
			},
			'4':{
				'Text': 'Anne’s experience after getting caught',
				'Do': 'jump purpleGrape',
			}
		}
	}
	],

	'redGrape':[
		'show background holo with fadeIn',
		'Early in the 1920s the Nazi Party emerged under the leadership of Aldof Hitler, a German man who believed that Germans are more intelligent and stronger than any other race. Hilter not only wanted to remove anyone who opposed him, but also exterminate and take away freedoms from Jewish people, disabled people, and the elderly.',
		'jump choiceScreen',
	],

	'greenGrape':[
		'show background baby with fadeIn',
		'In Frankfurt, Germany, on June 12, 1929, two reform Jews, Otto Frank and Edith- Frank Hollander, welcomed their second child into the world: Anneliese Marie Frank.',
		'show background black with fadeIn',
		'show image kid with fadeIn',
		'Anne was a very social child who wanted to be the center of attention, and always came up with games to play like “getting dressed up and playing actors” (Kugel).',
		'hide image kid with fadeOut',
		'show background school with fadeIn',
		'In school, Anne disliked subjects like math and science, however, she loved history and writing. Anne’s parents were not strict about her grades; instead, they cared about Anne and Margot’s happiness.',
		'show background diary with fadeIn',
		'On Anne’s 13th birthday she was given a diary that she named “Kitty”. In her first journal entry on June 12, 1942, she wrote: “I hope I shall be able to confide in you completely, as I have never been able to do in anyone before” (Frank and Pressler 1).',
		'show background black with fadeIn',
		'show image family with fadeIn',
		'After Anne’s birthday, Margot got a call-up notice to go to work camp which terrified the Franks. Otto and Edith decided the best decision was for the Franks to flee their home. Anne frantically had to pack up her belongings, however, instead of only packing clothes she packed things that had sentimental value as “memories mean more to me than dresses.”',
		'hide image family with fadeOut',
		'jump choiceScreen',
	],

	'blackGrape':[
		'show background books with fadeIn',
		'The family arrived at the Secret Annex, which was hidden behind a revolving cabinet in the attic of Otto Frank’s business in Amsterdam. Anne and her family were accompanied in hiding by four other people: The Van Pels family and Fritz Pfeffer.',
		'show background black with fadeIn',
		'show image map with fadeIn',
		'The attic was small and cramped. The days were long and quiet. Anne read lots of books and wrote in her journal to keep herself busy. Anne had difficulties with her family because felt like she was being overlooked and not appreciated. “I can shake off everything as I write; my sorrows disappear, my courage is reborn.”',
		'hide image map with fadeOut',
		'show background anne with fadeIn',
		'“In spite of everything I still believe that people are really good at heart. I simply can’t build up my hopes on a foundation consisting of confusion, misery, and death… I hear the ever approaching thunder, which will destroy us too, I can feel the sufferings of millions and yet, if I look up into the heavens, I think that it will all come right, that this cruelty too will end, and that peace and tranquility will return again.” (Frank and Presler 333).',
		'jump choiceScreen',
	],

'purpleGrape':[
	'show background caught with fadeIn',
	'On August 4, 1944, the Franks and their friends in hiding were caught by tipped-off German police. After being in a holding cell for four days, the arrestees were sent to the Westerbork concentration camp in the Netherlands.',
	'show background train with fadeIn',
	'On September 3, 1944, the Franks were forced into a cramped box-car on a one-way train to Auschwitz concentration camp in Poland. The trip was gruesome. When they arrived, the Nazis split up the prisoners by gender, making it the last time Anne saw her father.',
	'show background cc with fadeIn',
	'In Auschwitz prisoners suffered and died from starvation, illness, beatings, and gas chambers. In October 1944, Margot and Anne were sent to Bergen-Belsen concentration camp without their mom, and devastatingly both sisters died less than a year later in a gas chamber.',
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

	'Closing':[
		'show background women with fadeIn',
		'Although Anne Frank’s life tragically ended during the Holocaust, her memory lives on forever. Her story relates to millions of other Jewish children in the Holocaust, and she brings to life what it was like as a Jewish teenager during this time.',
		'show background book with fadeIn',
		'Anne’s story teaches young kids, teens, and adults the discrimination and difficulties Jewish people faced for many years. Anne is able to humanize the struggles encountered during the Holocaust and build empathy for future generations.',
		'show background anne with fadeIn',
		'Anne was just a typical girl with a diary that ended up changing how the world viewed the Holocaust, and also inspired millions by being able to keeping her head up during the darkest of times.',
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
        <b>Anne Frank</b>
				<br/>
				<br/>
        By: Claire Robichaud
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
