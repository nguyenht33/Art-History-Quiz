const questionSet = [
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg/1200px-The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg',
		name: 'The Calling of Saint Matthew',
		text: 'The work, <em>The Calling of Saint Matthew</em> by Caravaggio reveals the development of:',
		answer: ['Linear Perspective', 'Hieratic Scale', 'Chiaroscuro', 'Inlay'],
 		correctAnswer: 'Chiaroscuro',
 		feedback: '<b>Chiaroscuro</b> (light-dark) is an artistic technique, developed during the Renaissance, that uses strong tonal contrasts between light and dark to model three-dimensional forms, often to dramatic effect.'

	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Girl_with_a_Pearl_Earring.jpg',
		name: 'Girl with a Pearl Earring',
		text: 'The work, <em>Girl With a Pearl Earring</em> is painted by which artist?',
		answer: ['Rembrandt van Rijn', 'Johannes Vermeer', 'Hieronymus Bosch', 'Fran Hals'],
		correctAnswer: 'Johannes Vermeer',
		feedback: '<em>Girl with a Pearl Earring</em> is an oil painting by Dutch Golden Age painter <b>Johannes Vermeer</b>. It is a tronie of a girl wearing a headscarf and a pearl earring.'
 	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg',
		name: 'Impression, Sunrise',
		text: '<em>Impression, Sunrise</em>, painted by Claude Monet, gave rise to which movement of art?',
		answer: ['Realism', 'Neoclassical', 'Baroque', 'Impressionism'],
		correctAnswer: 'Impressionism',
		feedback: '<em>Impression, Sunrise</em> is a painting by Claude Monet. Shown at what would later be known as the "Exhibition of the Impressionists" in April 1874, the painting is attributed to giving rise to the name of the <b>Impressionism</b> movement.'
	},	
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Venus_of_Willendorf_frontview_retouched_2.jpg',
		name: 'Venus of Willendorf',
		text: 'What time period was the <em>Venus of Willendorf</em> created in?',
		answer: ['Paleolithic', 'Mesolithic', 'Neolithic', 'Chalcolithic'],
		correctAnswer: 'Paleolithic',
		feedback: '<em>The Venus of Willendorf</em> is believed to have been carved during the <b>Paleolithic</b>, or "Old Stone Age", a period of prehistory starting around 30,000 BCE'
	},	
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Rom%2C_Santa_Maria_della_Vittoria%2C_Die_Verz%C3%BCckung_der_Heiligen_Theresa_%28Bernini%29.jpg',
		name: 'The Ectasy of St. Theresa',
		text: '<em>The Ecstasy of St. Theresa</em>, is a sculpture by which artist?',
		answer: ['Donatello', 'Michaelangelo', 'Leonardo da Vinci', 'Gian Lorenzo Bernini'],
		correctAnswer: 'Gian Lorenzo Bernini',
		feedback: '<em>The Ecstasy of Saint Teresa</em> is the central sculptural group in white marble set in an elevated aedicule in the Cornaro Chapel, Santa Maria della Vittoria, Rome. It was designed and completed by <b>Gian Lorenzo Bernini</b>.'
	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Robert_Campin_-_Triptych_with_the_Annunciation%2C_known_as_the_%22Merode_Altarpiece%22_-_Google_Art_Project.jpg',
		name: 'The Mérode Altarpiece',
		text: '<em>The Mérode Altarpiece</em>, is an example of what type of art technique?',
		answer: ['Fresco', 'Mosiac', 'Triptych', 'Impasto'],
		correctAnswer: 'Triptych',
		feedback: '<em>The Mérode Altarpiece</em> is an oil on oak panel <b>triptych</b>. It is unsigned and undated, but attributed to the workshop of the Early Netherlandish painter Robert Campin.'
	},	
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg',
		name: 'The Kiss',
		text: '<em>The Kiss</em> is painted by which artist?',
		answer: ['Georges Seurat', 'Gustav Klimt', 'Pablo Picasso', 'James McNeil Whistler'],
		correctAnswer: 'Gustav Klimt',
		feedback: '<em>The Kiss</em> was painted by the Austrian Symbolist painter <b>Gustav Klimt</b> between 1907 and 1908, the highpoint of his "Golden Period", when he painted a number of works in a similar gilded style.'
		 
	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tsunami_by_hokusai_19th_century.jpg',
		name: 'The Great Wave Off Kanagawa',
		text: '<em>The Great Wave Off Kanagawa</em>, by Hokusai, is an example of what type of art technique?',
		answer: ['Oil Painting', 'Woodblock Printing', 'Etching', 'Fresco'],
		correctAnswer: 'Woodblock Printing',
		feedback: "<em>The Great Wave off Kanagawa</em> is a <b>woodblock print</b> by the Japanese ukiyo-e artist Hokusai. It is Hokusai's most famous work, and one of the most recognizable works of Japanese art in the world."

	},	
	{
		image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Pablo_Picasso%2C_1910%2C_Girl_with_a_Mandolin_%28Fanny_Tellier%29%2C_oil_on_canvas%2C_100.3_x_73.6_cm%2C_Museum_of_Modern_Art_New_York..jpg',
		name: 'Girl with a Mandolin',
		text: '<em>Girl with a Mandolin</em>, by Pablo Picasso, is painting from what art movement?',
		answer: ['Fauvism', 'Pointillism', 'Cubism', 'Dada'],
		correctAnswer: 'Cubism',
		feedback: '<b>Cubism</b> is an early-20th-century art movement. Cubists emphasized the simplification of geometric forms, and the association of mechanization and modern life.'

	},
	{
		image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg',
		name: 'Oath of the Horatii',
		text: '<em>Oath of the Horatii</em>, is a painting by which artist?',
		answer: ['Jacques-Louis David', 'Eugène Delacroix', 'Caspar David Friedrich', 'Henry Fuseli'],
		correctAnswer: 'Jacques-Louis David',
		feedback: '<em>Oath of the Horatii</em> is a large painting by the French artist <b>Jacques-Louis David</b> painted in 1784. The painting immediately became a huge success with critics and the public, and remains one of the best known paintings in the Neoclassical style.'
	}	
];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const questions = shuffle(questionSet);