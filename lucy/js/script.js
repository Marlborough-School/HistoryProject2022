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
	'number':'number.jpeg',
	'sibs':'lefamily.jpeg',
	'clothes':'clothes.jpeg',
	'gold':'gold.jpeg',
	'gates':'gates.jpeg',
	'tiktok':'tiktok.jpeg',
	'bib1':'bib1.jpeg',
	'bib2':'bib2.jpeg',
	'bib3':'bib3.jpeg',
	'bib4':'bib4.jpeg',


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
	'lilyebert1': 'lilyebert1.jpeg',
	'crematorium': 'crematorium.png',
	'sibs': 'lefamily.jpeg',
	'clothes': 'clothes.jpeg',
	'gold': 'gold.jpeg',
	'gates':'gates.jpeg',
	'sorting':'sorting.jpeg',
	'crema':'crema.jpeg',
	'beds':'beds.jpg',
	'sewing':'sewing.jpeg',
	'railroad':'railroad.jpeg',
	'note':'banknote.jpeg',
	'LEfam':'LEfam.jpeg',
	'vax':'LEvax.jpeg',
	'tiktok':'tiktok.jpeg',
	'white':'white.jpeg',








});


//
monogatari.script ({
	'Start': [
		'show background black with fadeIn',
		'show image number with fadeIn',
		' “My number is A-10572. That is what I was… I was not my name. We were not humans, we were only a number and we were taken also, only for a number” (@lilyebert).',
		'hide image number',
		'show background crematorium' ,
		'How many people do you think were killed in the Holocaust?',
		{'Choice':{
			'Y':{
				'Text': 'Greater than 3 million',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'Less than 3 million',
				'Do': 'jump noAnswer'
			},
		},
	},
],

	'yesAnswer':[
		'show background crematorium',
		'Yes, approximately six million Jewish people were killed in the Holocaust, and at least 1.1 million of those deaths occurred at Auschwitz concentration camp. Lily Ebert, ninety-seven year old Hungarian Jew, was imprisoned in Auschwitz, and miraculously lived to tell her story of survival. ',
		'jump nextSlides',
	],

	'noAnswer':[
		'show background crematorium',
		'No, approximately six million Jewish people were killed in the Holocaust, and at least 1.1 million of those deaths occurred at Auschwitz concentration camp. Lily Ebert, ninety-seven year old Hungarian Jew, was imprisoned in Auschwitz, and miraculously lived to tell her story of survival. .',
		'jump nextSlides',
	],

	'nextSlides':[
		'show background black',
		'show image sibs with fadeIn',
		'Lily Ebert was raised in Hungary until she was 20, when the Nazis invaded and she was taken with her mother, brother, and three sisters to Auschwitz concentration camp.',
		'hide image sibs',
		'show background black',
		'show image clothes with fadeIn',
		'Before arriving to the camp, the prisoners were striped of all their possessions and the Nazis confiscated everything that was seen as value. On the train, Lily’s mother told her to switch shoes with her.',
		'hide image clothes',
		'show background black',
		'show background gold with fadeIn',
		'In her mother’s shoe, a gold pendant was hidden, which Lily never parted with to this day. This piece of gold might be the only piece of gold that entered Auschwitz and left with its original owner.',
		'show background black',
		'show background gates with fadeIn',
		'Upon arrival at Auschwitz, Lily recalls thinking she had arrived at the gates of hell. Everyone was then brought in groups of five in front of Josef Mengele, otherwise known as “the angel of death.” Lily Ebert was brought forth with her family as Mengele sorted every person that was brought into Auschwitz into two groups: one group to the left, and one group to the right.',
		'show background sorting with fadeIn',
		'Lily, along with her two sisters, was sent to the right. Her mother, younger brother, and younger sister, however, were sent to the left.',
		'show background crema with fadeIn',
		'It was not until later that day that Lily learned that, “The people who were sent to the left were taken straight to the crematorium” (@lilyebert). This was the last time that Lily and her sisters saw their mother and younger siblings.',
		'show background crematorium with fadeIn',
		'The crematoriums were buildings containing furnaces and gas chambers that the Nazis used to kill mass amounts of people at the concentration camps. There were four crematoriums at Auschwitz and were estimated to have killed over eight thousand people every year.',
		'show background beds with fadeIn',
		'Lily Ebert, along with her two sisters, were imprisoned in the concentration camp for 4 months. Although this might seem like a short time, she recounts that, “even four minutes was too long” (@lilyebert).  The conditions at the camp were abysmal and everyone around her was dying. This is a picture of the bunks that multiple prisoners were to sleep in.',
		'show background sewing with fadeIn',
		'The Nazis at the concentration camps gave the prisoners jobs to do, so Lily and her sisters spent their time sewing uniforms for the German soldiers. Other jobs were more physically taxing and some people were forced to make the machines that would take their lives. Lily’s skill set made her very lucky in this field.',
		'show background railroad with fadeIn',
		'On April 13th, Lily Ebert was liberated by an American Soldier named Hyman Schulman.',
		'show background note with fadeIn',
		'He rescued her from a death march as he handed her a piece of chocolate and a bank note that read: “A start to a new life. Good luck and happiness. Assistant to Champlain Schacter.”',
		'show background railroad with fadeIn',
		'Lily, her two sisters, and some other women, were put up by their liberators in a nearby, seemingly abandoned, German house. Unable to sleep, and rightfully worried for their safety, they heard noises through the night. The next day, the American soldiers got the women out of the house safely after learning that there were German soldiers hiding in the same house on the floor above where they laid.',
		'show background LEfam with fadeIn',
		'Since liberation, Lily has begun her life and rebuilt the family that she had lost to the Nazis. She feels immeasurable pride when talking of the life she has built for herself and her family because she managed to survive the concentration camps despite the Nazis’ goal of eliminating  the entire Jewish population.',
		'show background vax with fadeIn',
		'Many years later, in January 2021, shortly after receiving her COVID-19 vaccine, she contracted the virus. By that time in the pandemic, the virus had already taken around two million lives, with at least one million more to come. After three weeks of fighting the virus, she tested negative, and was COVID free.',
		'Similarly to the concentration camps that were taking millions of lives during World War II, COVID-19 was doing the same.',
		'show background black',
		'show image tiktok with fadeIn',
		'Now, with the help of her great grandson Dov Forman, she now takes to Tiktok to share her stories as she educates her almost two million followers about the Holocaust and more specifically the terrors that went on at Auschwitz concentration camp.',
		'show background white',
		'show image bib1',
		'Bibliography',
		'hide image bib1',
		'show background white',
		'show image bib2',
		'Bibliography',
		'show background white',
		'show image bib3',
		'Bibliography',
		'show background white',
		'show image bib4',
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
        <b>It’s Not Just Life, it’s Survival</b>
				<br/>
				<br/>
        By: Lucy Savant
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
