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
	'Cflag':'Chinaflag.png',
	'WWI':'workers.jpeg',
	'CDX':'ChenDuxiu.jpeg',
	'protest':'1919students.jpeg',
	'world':'worldmap.jpeg',
	'ny':'newyouth.jpeg',
	'fa':'fa.jpeg',
	'tv':'TreatyofVersailles.jpeg',
	'Jflag':'Jflag.jpeg',
	'mfm':'May4th.jpg',
	'1976':'1976.jpeg',
	'ccpflag':'ccpflag.jpeg',
	'mao':'mao.jpeg',
	'sunset':'ChinaConclusion.jpeg',
	'bib':'bib.jpeg',
	'ic':'ic.jpeg',
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'black':'black.jpeg',
	'tiananmen':'Tiananmen.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show background black with fadeIn',
		'show image Cflag with fadeIn',
		'China is considered one of the world’s most powerful countries today. But how many Americans know the history of China during World War I? Do you know?',
		{'Choice':{
			'Y':{
				'Text': 'Yes, I do.',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'No, I do not.',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'hide image Cflag',
		'show background black',
		'show image WWI with fadeIn',
		'That is great! Here is a reminder anyways:',
		'During World War I, China sent troops to Europe to repair damages, transport weapons, and assemble shells. However, World War I was focused on the Western world and did not acknowledge their efforts.',
		'hide image WWI',
		'jump Intro',
	],

	'noAnswer':[
		'hide image Cflag',
		'show background black',
		'show image WWI with fadeIn',
		'That is ok.',
		'The lack of knowledge partially stems from western powers not recognizing China’s efforts during World War I.',
		'China sent troops to Europe to repair damages, transport weapons, and assemble shells. However, World War I was focused on the Western world and did not acknowledge their efforts.',
		'hide image WWI with fadeOut',
		'jump Intro',
	],

	'Intro':[
		'show background black',
		'show image protest with fadeIn',
		'Many Chinese citizens were furious due to the lack of recognition of their efforts in the war, and started the May 4th movement to make their voices heard.',
		'hide image protest',
		'show background black',
		'show image CDX with fadeIn',
		'Chen Duxiu, along with others, led China’s movement standing up against the Allied powers and into modern society.',
		'Early on in his life, Chen realized that the Chinese government system needed to be modernized for the specific problems that society was facing then.',
		'hide image CDX wih fadeOut',
		'show background black',
		'show image world with fadeIn',
		'He started studying abroad, where he was able to learn new ideas that he could bring back to China.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'hide image world',
		'show background black with fadeIn',
		'show image CDX',
		{'Choice':{
			'1':{
				'Text': 'New Youth Magazine',
				'Do': 'jump NYM',
			},
			'2':{
				'Text': 'May Fourth Movement',
				'Do': 'jump mayFourth',
			},
			'3':{
				'Text': 'Chinese Communist Party',
				'Do': 'jump ccp',
			}
		}
	}
	],

	'NYM':[
		'hide image CDX',
		'show background black with fadeIn',
		'show image ny with fadeIn',
		'When Chen Duxiu returned to China, he attempted to create multiple news outlets. They were all shut down by the government, and that is when he took action.',
		'His magazine, Xinqingnian (New Youth), made his name well known, and gave him the opportunity for a position at a university.',
		'Over there, he promoted the ideals that he had learned about democracy and science, and started the New Culture Movement, bringing western ideas into Chinese society.',
		'hide image ny',
		'show background black with fadeIn',
		'show image fa',
		'In his magazine, he published the article “Our Final Awakening”, where he shares his goals for the future of the youth:',
		'“Our task today can be said to be the intense combat between the old and the modern currents of thought” (Chen).',
		'Although he wanted to change the Chinese system, he still believed that he could find a balance between old and new.',
		'Chen believed that the Chinese youth were responsible for renewing Chinese society and law, and encouraged young people to rally together through his magazine.',
		'hide image fa with fadeOut',
		'jump choiceScreen',
	],

	'mayFourth':[
		'hide image CDX',
		'show background black with fadeIn',
		'show image tv',
		'After World War I, the Allied powers came together to divide the German territories amongst themselves. After they had all come to an agreement, the Treaty of Versailles was created and peace had been restored.',
		'However, although China contributed to the victory of the war, they were excluded from the treaty:',
		'“All German rights in the Tsingtao-Tsinanfu Railway, including its branch lines, together with its subsidiary property of all kinds, stations, shops, fixed and rolling stock, mines, plant and material for the exploitation of the mines, are and remain acquired by Japan, together with all rights and privileges attaching thereto.” (Treaty of Versailles)',
		'hide image tv',
		'show image Jflag',
		'Germany had previously had control over a Chinese region, Shantung, but this territory was transferred over into Japanese control.',
		'hide image Jflag',
		'show image mfm',
		'College students in Beijing, encouraged by Chen’s news outlet, were enraged about the agreement that the governments had reached.',
		'They protested against the exclusion of their country in the center of Beijing, Tiananmen.',
		'hide image mfm',
		'show image 1976',
		'Even though these protests did not achieve its original goal, it ignited a fire amongst the Chinese people for cultural change.',
		'hide image 1976 with fadeOut',
		'jump choiceScreen',
	],

	'ccp':[
		'hide image CDX',
		'show background black with fadeIn',
		'show image ccpflag',
		'Inspired by the Russian Revolution of 1917, Chen was looking for ways to modernize China using Marxism, the idea of using revolutions by workers to overturn capitalism and instill communism.',
		'Although through the New Culture Movement, he promoted western ideals, such as democracy, Chen “saw Marxism as a means to achieve a “mass democracy” with the broad labouring masses as its base” (Encyclopedia Britannica).',
		'He and a few others decided to form the Chinese Communist Party, whose goals were to create equality throughout China.',
		'hide image ccpflag',
		'show image CDX',
		'Chen became the first General Secretary of the Chinese Communist Party from 1921 to 1927. Due to disagreements within the leaders of the party, Chen was exiled from the group and unable to participate in the movement.',
		'hide image CDX',
		'show image mao',
		'Although Chen left, the party went on to make history. It became the sole party of China led by one of the original leaders, Mao Zedong.',
		'hide image mao with fadeOut',
		'jump Ending',
	],

	'Ending':[
		'show background black with fadeIn',
		'show image sunset',
		'Chen Duxiu led China into modern society through starting multiple movements.',
		'He incorporated Western beliefs and ideals into China to transform it into the country that it is today.',
		'He used his enthusiasm for the written language to create multiple news outlets.',
		'Although many were shut down by the Chinese government, he continued to resist them and was able to inspire the youth of China to speak out against their government.',
		'hide image sunset with fadeOut',
		'jump Closing',
	],

	'Closing':[
		'show background black with fadeIn',
		'show image bib',
		'Here is the bibliography.',
		'hide image bib',
		'show image ic with fadeIn',
		'Here are the image credits.',
		'Thank you so much for watching and reading. I hope you learned a little more about Chinese history.',
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
        <b>Chen Du Xiu</b>
				<br/>
				<br/>
        By: Kiera Lin
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
