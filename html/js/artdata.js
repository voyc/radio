art = {
set: [],
hist: [],
names: {
	kandinsky:'Wassily Kandinsky',
	okeefe:"Georgia O'keefe",
},
data: [
	// see also https://www.wassilykandinsky.net/
	// period:'Youth and inspiration (1866–1896)'
	// period:Metamorphis (1902–1910) lived with girlfriend in the Alps south of Munich
	{artist:'kandinsky', year:'1898', period:'Early'     ,title:'Odessa Port'         ,url:'https://upload.wikimedia.org/wikipedia/commons/a/ae/Vassily_Kandinsky%2C_1898_-_Odessa_Port.jpg'},
	{artist:'kandinsky', year:'1901', period:'Early'     ,title:'Akhtyrka'            ,url:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Vassily_Kandinsky%2C_1901_-_Akhtyrka.jpg'},
	{artist:'kandinsky', year:'1903', period:'Early'     ,title:'Blue Rider'          ,url:'https://uploads4.wikiart.org/images/wassily-kandinsky/blue-rider-1903.jpg!Large.jpg'},
	{artist:'kandinsky', year:'1906', period:'Early'     ,title:'Rotterdam Sun'       ,url:'https://upload.wikimedia.org/wikipedia/commons/a/a8/Vassily_Kandinsky%2C_1906_-_Rotterdam_sun.jpg'},
	{artist:'kandinsky', year:'1908', period:'Early'     ,title:'Munich-Schwabing with the Church of St. Ursula'             ,url:'https://upload.wikimedia.org/wikipedia/commons/6/6b/Vassily_Kandinsky%2C_1908_-_Munich-Schwabing_with_the_Church_of_St-Ursula.jpg'},
	{artist:'kandinsky', year:'1908', period:'Early'     ,title:'Murnau, Dorfstrasse (Street in Murnau, A Village Street),'  ,url:'https://upload.wikimedia.org/wikipedia/commons/8/83/Vassily_Kandinsky%2C_1908%2C_Murnau%2C_Dorfstrasse.jpg'},
	{artist:'kandinsky', year:'1908', period:'Early'     ,title:'Houses in Munich'                  ,url:'https://upload.wikimedia.org/wikipedia/commons/1/13/Vassily_Kandinsky%2C_1908_-_Houses_in_Munich.jpg'},
	{artist:'kandinsky', year:'1909', period:'Early'     ,title:'Murnau, train and castle'          ,url:'https://upload.wikimedia.org/wikipedia/commons/8/8b/Vassily_Kandinsky%2C_1909_-_Murnau_train_et_ch%C3%A2teau.jpg'},

	{artist:'kandinsky', year:'1910', period:'Blue Rider',title:'The Cow'                           ,url:'https://upload.wikimedia.org/wikipedia/commons/b/b5/Vassily_Kandinsky%2C_1910_-_The_Cow.jpg'},
	{artist:'kandinsky', year:'1910', period:'Blue Rider',title:'Study for Improvisation V'         ,url:'https://upload.wikimedia.org/wikipedia/commons/c/c1/Kandinsky_Study_for_Improvisation_V_MIA_67342.jpg'},
	{artist:'kandinsky', year:'1911', period:'Blue Rider',title:'The Rider'                         ,url:'https://upload.wikimedia.org/wikipedia/commons/d/db/Wassily_Kandinsky%2C_1911%2C_Reiter_%28Lyrishes%29%2C_oil_on_canvas%2C_94_x_130_cm%2C_Museum_Boijmans_Van_Beuningen.jpg'},
	{artist:'kandinsky', year:'1912', period:'Blue Rider',title:'Landscape with Two Poplars'        ,url:'https://upload.wikimedia.org/wikipedia/commons/b/b2/Vassilly_Kandinsky%2C_1912_-_Landscape_With_Two_Poplars.jpg'},
	{artist:'kandinsky', year:'1913', period:'Blue Rider',title:'Squares with Concentric Circles'   ,url:'https://upload.wikimedia.org/wikipedia/commons/9/98/Vassily_Kandinsky%2C_1913_-_Color_Study%2C_Squares_with_Concentric_Circles.jpg'},
	{artist:'kandinsky', year:'1913', period:'Blue Rider',title:'Composition 6'                     ,url:'https://upload.wikimedia.org/wikipedia/commons/3/3a/Vassily_Kandinsky%2C_1913_-_Composition_6.jpg'},
	{artist:'kandinsky', year:'1914', period:'Blue Rider',title:'Tableau a la tache Rouge'          ,url:'https://upload.wikimedia.org/wikipedia/commons/9/96/W._Kandinsky_-_Bild_mit_rotem_Fleck.jpg'},

	// Bauhaus (1922-1933)
	{artist:'kandinsky', year:'1922', period:'Bauhaus'   ,title:'Small Worlds'       , url:'https://upload.wikimedia.org/wikipedia/commons/2/21/Vassily_Kandinsky%2C_1922_-_Kleine_Welten_I.jpg'},
	{artist:'kandinsky', year:'1923', period:'Bauhaus'   ,title:'On White II'        , url:'https://upload.wikimedia.org/wikipedia/commons/c/c4/Vassily_Kandinsky%2C_1923_-_On_White_II.jpg'},
	{artist:'kandinsky', year:'1923', period:'Bauhaus'   ,title:'Circles in a Circle', url:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Vassily_Kandinsky%2C_1923_-_Circles_in_a_Circle.jpg'},
	{artist:'kandinsky', year:'1923', period:'Bauhaus'   ,title:'Composition 8'      , url:'https://i2.wp.com/www.guggenheim.org/wp-content/uploads/2016/07/artwork-vasily-kandinsky-composition-8-37.262.jpg'},
	{artist:'kandinsky', year:'1925', period:'Bauhaus'   ,title:'Jaune Rouge Bleu'   , url:'https://upload.wikimedia.org/wikipedia/commons/a/a6/Kandinsky_-_Jaune_Rouge_Bleu.jpg'},
	{artist:'kandinsky', year:'1926', period:'Bauhaus'   ,title:'Several Circles'    , url:'https://upload.wikimedia.org/wikipedia/commons/0/0e/Vassily_Kandinsky%2C_1926_-_Several_Circles%2C_Gugg_0910_25.jpg'},
	{artist:'kandinsky', year:'1927', period:'Bauhaus'   ,title:'Soft Hard'          , url:'https://upload.wikimedia.org/wikipedia/commons/0/0d/Vassily_Kandinsky%2C_1927_-_Molle_rudesse.jpg'},
	{artist:'kandinsky', year:'1929', period:'Bauhaus'   ,title:'Inner Alliance'     , url:'https://upload.wikimedia.org/wikipedia/commons/e/e1/Wassily_Kandinsky_-_Inner_Alliance_-_1929.jpg'},

	// Synthesis (1934-1944)
	{artist:'kandinsky', year:'1935', period:'Synthesis' ,title:'Brown with Supplement' ,url:'https://upload.wikimedia.org/wikipedia/commons/9/95/Vassily_Kandinsky%2C_1935_-_Brown_with_supplement.jpg'},
	{artist:'kandinsky', year:'1936', period:'Synthesis' ,title:'Composition IX'        ,url:'https://upload.wikimedia.org/wikipedia/commons/b/be/Vassily_Kandinsky%2C_1936_-_Composition_IX.jpg'},
	{artist:'kandinsky', year:'1939', period:'Synthesis' ,title:'Composition X'         ,url:'https://upload.wikimedia.org/wikipedia/commons/9/97/Vassily_Kandinsky%2C_1939_-_Composition_10.jpg'},

	// artist okeefe
	{artist:'okeefe', year:'1926', period:'', title:'Yellow Calla', url:'https://rememberingletters.files.wordpress.com/2011/11/usa-z-yellow-calla-okeefe.jpg'},
	{artist:'okeefe', year:'1924', period:'', title:'Red Canna', url:'https://i.pinimg.com/originals/4b/27/ab/4b27ab059181bb40fd4f1715a443b029.jpg'},
	{artist:'okeefe', year:'1925', period:'', title:'Flower of Life', url:'https://paintingandframe.com/art-imgs/georgia_o_keeffe/flower_of_life-16320.jpg'},
	{artist:'okeefe', year:'1918', period:'', title:'Blue Flower', url:'https://i.pinimg.com/originals/40/a7/ac/40a7ac68f94bcc97fd98cc7674e46a9e.jpg'},
	{artist:'okeefe', year:'1918', period:'', title:'Music Pink and Blue', url:'https://cdn11.bigcommerce.com/s-feud0ek893/images/stencil/2048x2048/products/3044/3322/music-pink-and-blue-ii_painter-georgia-o-keeffe__26762__08585__21103.1566784175.jpg?c=1'},
	{artist:'okeefe', year:'1918', period:'', title:'Series 1 Number 4', url:'https://i.cbc.ca/1.2269938.1383019020!/httpImage/image.jpg_gen/derivatives/original_780/okeefe-series1-no4.jpg'},
	{artist:'okeefe', year:'1928', period:'', title:'Red Poppy No. VI', url:'https://www.angelfire.com/art/favoritewomenartists/okeefe1.jpg'},
	{artist:'okeefe', year:'1930', period:'', title:'Jack-in-the-Pulpit IV', url:'https://www.angelfire.com/art/favoritewomenartists/georgi1.gif'},
	{artist:'okeefe', year:'1928', period:'', title:'Lilies with Red Anemone', url:'https://images-na.ssl-images-amazon.com/images/I/61qNgAWigvL._AC_SY879_.jpg'},
	{artist:'okeefe', year:'1934', period:'', title:'Jimson Weed', url:'https://cdn11.bigcommerce.com/s-feud0ek893/images/stencil/2048x2048/products/11916/25324/jimson-weed-1934_georgia-o-keeffe__66072.1582998494.jpg?c=1'},
	{artist:'okeefe', year:'1919', period:'', title:'Red Canna', url:'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/red-canna-georgia-o-keeffe.jpg'},
	{artist:'okeefe', year:'1923', period:'', title:'Single Canna Lily', url:'https://ak1.ostkcdn.com/images/products/12417262/Georgia-OKeeffe-Single-Calla-Lily-Red-1923-Hand-Painted-Framed-Canvas-Art-4ff9641f-682b-4d39-809e-635c459b76d1.jpg'},
]}

