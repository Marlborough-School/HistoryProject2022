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
'Azertis':'Azertis.jpg',
'hidegg':'hidegg.jpg',
'band':'band.jpeg',
'america':'america.jpg',
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'Hungary':'Hungary.jpeg',
	'Duna':'Duna.jpg',
	'plane':'plane.jpg',
	'hideg':'hideg.jpg',
	'family':'family.jpg',
	'military':'military.jpg',
	'Azertis':'Azertis.jpg',
	'black':'black.jpeg',
	'hidegg':'hidegg.jpeg',
	'bridge':'bridge.jpg',
	'band':'band.jpg',
	'america':'america.jpg',
	'la':'la.jpg',
	'site':'site.jpg',
});


//
monogatari.script ({
	'Start': [
		'show background Hungary',
		'Steve Hideg used to be a very adventurous young boy who always found joy in everything he did.',
		'On a cold day of December, Steve was getting water and saw a plane flying low to the ground and was intrigued by it.',
		'He stopped to look at the low flying plane, seconds later, he felt a big explosion and felt himself thrown to the wall by it.',
		'show background plane',
		'BOOM',
		'The next thing 13 year old Steve remembers is waking up alone in the streets of Hungary.',
		'show background bridge',
		'Do you think this moment had an impact or a long term effect on Steve?',
		{'Choice':{
			'Y':{
				'Text': 'Yes',
				'Do': 'jump yesAnswer',
			},
			'N':{
				'Text': 'No',
				'Do': 'jump noAnswer',
			},
		},
	},
],

	'yesAnswer':[
		'show background Duna',
		'It sure did and we’ll see how.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background Duna',
		'Close, but it did and we’ll see how.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background hideg',
		{'Choice':{
			'1':{
				'Text': 'Family',
				'Do': 'jump Family',
			},
			'2':{
				'Text': 'Hungary in WW2',
				'Do': 'jump WW2',
			},
			'3':{
				'Text': 'Hidegs Career',
				'Do': 'jump HidegsCareer',
			}
		}
	}
	],

	'Family':[
		'show background family',
		'Steve Hideg was born in a small village in Hungary on September 2, 1931.',
		'His father owned a shop that manufactured many womens shoes in the city of Budapest.',
		'show background military',
		'When the Russians arrived in Hungary, they had already destroyed their family business which caused them to lose money and their steady income.',
		'In 1944, when Steve was 13, the war tore his family apart by having his father be ordered to help serve for his country against the Russian forces. A couple months later after Steves father went to help work the radio stations in Russia, Steves father passed away as the Russian army attacked their camp and threw bombs into the camp.',
		'The Hideg family was devastated to hear this news and yet still tried to live their lives with joy and happiness.',
		'jump choiceScreen',
	],

	'WW2':[
		'show background military',
		'During WWII, Hungary didn’t really have a reason to join the war but didn’t want their lands to be taken away so they joined with Germany.',
		'show background black with fadeIn',
		'show image Azertis with fadeIn',
		'Later in 1944, Hungary tried to leave the war but Hitler forced the Russian Arrow Cross Party to bomb Hungary and soon Hungary went under the rule of Russia and communism.',
		'During this time, American jazz music became a very popular trend in Hungary but the Russians did not approve of the Western influence that everyone was under, causing Hungary to go under stricter rules.',
		'hide image Azertis with fadeOut',
		'show background black with fadeIn',
		'show image hidegg with fadeIn',
		'“I created a jazz band with my friends I went to school with and we wanted to be like the Americans but the Russians did not like the Western influence or culture and forced communism upon us,”(Hideg, Steve. Interview. By Sara Talmaci. 4 December 2021)',
		'hide image hidegg with fadeOut',
		'jump choiceScreen',
	],

	'HidegsCareer':[
		'show background black',
		'show image band with fadeIn',
		'Because of communism, it was hard for Steve and his band to play the music they purely enjoyed playing for others, so they decided to play for the Russian soldiers who policed around Hungary during their lunch breaks.',
		'It became a very big hit and Steve’s band went on and played their jazz music in musical theaters around Budapest.',
		'hide image band with fadeOut',
		'show background america',
		'Later in the years, Steve decided to escape the treacherous communism life that was in Hungary and moved to America with no money in order to follow his wonderful passion of being a drummer in a jazz band.',
		'jump Ending',
		'hide background america',
	],

	'Ending':[
		'show background la with fadeIn',
		{'Choice':{
			'Closing':{
				'Text': 'Conclusion',
				'Do': 'jump Closing',
			}
		}
		}
	],

	'Closing':[
		'show background la with fadeIn',
		'Although Steve Hideg was not as successful with his jazz drumming career as Buddy Rich, he says today that,  “Jazz music is a freedom of expression...I never wanted to have wealth or money or anything else, I was interested in only drumming...”(His ‘Wonderful Struggle’, Los Angeles Times, August 5th 2017).',
		'His life traumas formed a “wonderful struggle”(His ‘Wonderful Struggle’, Los Angeles Times, August 5th 2017) throughout his drumming career.',
		'show background hideg with fadeIn',
		'He is now 90 years old, living in East Hollywood and will always be the young adventurous boy who finds joy in everything he does.',
		'show background site',
		'citations',
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
        <b>The Wonderful Struggle</b>
				<br/>
				<br/>
        By: Sara Talmaci
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
