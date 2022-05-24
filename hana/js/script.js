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
	'song':'別れのブルース　淡谷のり子.mp3',

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
'nancyandmitz': 'nancyandmitz.jpeg',
'bibliography':'bibliography.jpeg',
'credits':'credits.jpeg',
'kids':'kids.jpeg',
'family':'family.jpeg',
'yes':'yes.jpeg',
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'titleSlide':'titleslide.jpeg',
	'nAncy':'nancy.jpeg',
	'title':'title.jpeg',
	'mItz':'mitz.jpeg',
	'grape':'blackgrape.jpeg',
	'potatocat': 'potatocat.jpeg',
	'crycat':'crycat2.jpeg',
	'black': 'black.jpeg',
	'no':'no.jpeg',
	'family':'family.jpeg',
	'sadchild':'sadchild.jpeg',
	'pool':'pool.jpeg',
	'tumbleweeds':'tumbleweeds.jpeg',
	'white':'white.jpeg',


});


//
monogatari.script ({
	'Start': [
		'play music song with loop volume 90',
		'show background titleSlide with fadeIn',
		'February 19, 1942, the day the lives of all Japanese-Americans living in the west-coast changed forever.',
		'Do you know what occurred February 19, 1942?',
		{'Choice':{
			'Y':{
				'Text': 'Yes',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'No',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background black',
		'show image yes',
		'As you already know, as a response to the attack on Pearl Harbor by the Japanese, the United States viewed anybody of Japanese descent as a war threat. This led President Roosevelt to establish the Executive Order 9066 which forced all people of Japanese descent to be relocated into internment camps.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background no',
		'As a response to the attack on Pearl Harbor by the Japanese, the United States viewed anybody of Japanese descent as a war threat. This led President Roosevelt to establish the Executive Order 9066 which forced all people of Japanese descent to be relocated into internment camps.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'hide image yes',
		'show background black',
		'show image kids with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Nancy Shiozaki',
				'Do': 'jump nancyShiozaki',
			},
			'2':{
				'Text': 'Mitz Shiozaki',
				'Do': 'jump mitzShiozaki',
			},

		}
	}
	],

	'nancyShiozaki':[
		'hide image kids',
		'show background black',
		'show image family',
		'When Nancy Shiozaki was 2 years old and Mitz Shiozaki was 7 years old, they were both relocated as young children with their families because they were Japanese American.',
		'“After we grew up and have our own families, we feel bad for our families, we were just kids, we were playing. They went through stressful times, and never talked about it; Probably because of Japanese stigma, “Shikataganai” (It is what it is)” (Nancy Shiozaki)',
		'hide image family',
		'show background nAncy',
		'Nancy Shiozaki was approximately 2 years old when this executive order took place. Her family including her parents, her two brothers, Joe and Hideki, and her were forced to relocate to Heart Mountain Camp in Wyoming.',
		'Due to her young age, she can’t recall many details of this stressful time, but she remembers a story her mother briefly mentioned about a pregnant woman giving birth inside the barrack. Her mother recalls how loud it was because there were no walls but only curtains separating each family.',
		'show background tumbleweeds',
		'Nancy was so young that her mother would not let her out of the barracks most of the time because she was afraid that Nancy would get hurt. However she recalls her first memory of stepping outside.',
		'"I remember the tumbleweeds, they finally let me outside, all I could do was stand there." (N. Shiozaki)',
		'jump choiceScreen',
	],

	'mitzShiozaki':[
		'hide image kids',
		'show background sadchild',
		'“You can only take what you can carry. It was terrible we were babies. I had two baby sisters 5 & 4; They couldn’t carry anything.” (Mitz Shiozaki)',
		'show background pool',
		'Mitz was around 7 years old when his family was relocated. His family was made up of 5 people, his parents, his two sisters, and Mitz; They were relocated to the Poston Relocation Center in Arizona.',
		'show background pool',
		'Arizona was very hot, the Colorado River cut through the camp and provided little pools for the young children to learn how to swim.',
		'Little did Mitz know, these little pools that brought joy to the depressing times, would make him and many other children witness a dark memory.',
		'Mitz recalls a twin being missing; The other twin was frantically running around the camp looking for his twin brother. Finally, the lifeguard checks the pool.',
		'Mitz recalls the dreadful memory of everyone who is able to swim well skimming the bottom of the pool to look for the missing twin. Sadly, he was found drowned at the bottom of the pool near the gate because he choked on something that was lodged in his throat.',
		'show background mItz',
  	'Mitz remembers the sadness that the children of the camp experienced by losing a friend. But unfortunately, this sadness that overwhelmed the people in the camps was a daily experience.',
		'Both Nancy and Mitz recall people committing suicide during their time at camp.',
		'“He sounded and looked really happy and was whistling into the mess hall building. I went to mess hall and ate, once I left, I found out that the man had committed suicide. He jumped off the building and grabbed onto the electrical wire.” (Mitz Shiozaki). ',
		'jump choiceScreen2 closing',
	],
	'choiceScreen2':[
		'show background black',
		'show image kids with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Closing',
				'Do': 'jump closing2',
			},

		}
	}
	],

	'closing2':[
		'hide image kids',
		'show background black',
		'show image nancyandmitz',
		'Both Mitz and Nancy, as well as all the families who were relocated were a victim to the effects of WWII. They did not deserve anything that happened to them, they were innocent kids. Their stories exemplify how World Wars can impact people who have nothing to do with the war. For example, both Nancy and Mitz are citizens of the United States yet they are punished for something the Japanese Military chose to do.',
		'Though they lived through tragic times and faced discriminations as children, Nancy and Mitz are kind and loving towards people regardless of who they are. We learn that it is important to share their stories so it does not happen again, and to continue to talk about it to build awareness.',
		'“Definitely wrong. They took citizens who did nothing wrong and moved them. It was a confined freedom and we lost everything.” (M. Shiozaki)',
		'show background white',
		'show image bibliography',
		'bibliography',
		'show background white',
		'show image credits',
		'image credits',
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
        <b>Japanese Internment; Dark History with Japanese-Americans</b>
				<br/>
				<br/>
        By: Hana Speaks
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
