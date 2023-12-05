const navegacion = [
	{
		name: "Inicio",
		url: "./index.html",
	},
	{
		name: "Acerca de Nosotros:",
		url: "./index.html",
	},
	{
		name: "Nuestros Programas",
		url: "./index.html",
	},
	{
		name: "Cómo Ayudar",
		url: "./index.html",
	},
	{
		name: "Galería de Fotos",
		url: "./index.html",
	},
	{
		name: "Blog",
		url: "./index.html",
	},
	{
		name: "Eventos",
		url: "./index.html",
	},
	{
		name: "Contáctenos",
		url: "./index.html",
	},
	{
		name: "Página de Donaciones:",
		url: "./index.html",
	},
	{
		name: "Preguntas Frecuentes (FAQ)",
		url: "./index.html",
	},
];

const input = [
	{
		type: "text",
		name: "name",
		id: "name",
		placeholder: "Name",
		required: "required",
	},
	{
		type: "email",
		name: "email",
		id: "email",
		placeholder: "Email",
		required: "required",
	},
];

const phones = [
	{
		numero: "tel:+1234567890",
		etiqueta: "+1 234 567 890",
	},
	{
		numero: "tel:+1234567890",
		etiqueta: "+1 234 567 890",
	},
];
const footerNavegacion = [
	{
		name: "Home",
		url: "./index.html",
	},
	{
		name: "Products",
		url: "./index.html",
	},
	{
		name: "About Us",
		url: "./index.html",
	},
	{
		name: "Contact Us",
		url: "./index.html",
	},
];

const galery = [
	{
		url: "https://acoes.org/wp-content/uploads/2021/09/banner-home-2.png",
	},
	{
		url: "https://acoes.org/wp-content/uploads/2021/09/20210216_082641.jpg",
	},
	{
		url: "https://acoes.org/wp-content/uploads/2023/01/Buena_Vista-movil.jpg",
	},
	{
		url: "https://acoes.org/wp-content/uploads/2021/09/Sin-titulo-1_0000_IMG_7486_joaquin-roldan.png",
	},
];

const handlerBarsContext = {
	"/index.html": {
		title: "Inicio",
		logo: "https://acoes.org/wp-content/uploads/2023/10/LG-FUNDACION-BN-2-2.png",
		navegacion: navegacion,
		galery: galery,
		generalidades: generalidades,
		generalidadesInfo: generalidadesInfo,
		input: input,
		select: select,
		phones: phones,
		footerNavegacion: footerNavegacion,
		redes: redes,
	},
	"/page/donaciones.html": {
		title: "Donaciones",
		logo: "https://acoes.org/wp-content/uploads/2023/10/LG-FUNDACION-BN-2-2.png",
		navegacion: navegacion,
		btnApadrina:btnApadrina,
		card:card,
		phones: phones,
		footerNavegacion: footerNavegacion,
		redes: redes,
	},
	"/programas.html": {
		navegacion: navegacion,
		galery: galery,
		input: input,
		phones: phones,
		footerNavegacion: footerNavegacion,
		teest: teest,
	},
	"/pfrecuentes.html": {
		navegacion: navegacion,
		galery: galery,
		input: input,
		phones: phones,
		footerNavegacion: footerNavegacion,
		teest: teest,
		preguntas: preguntas,
	},
};

const pageContext = (page) => {
	const context = { ...handlerBarsContext[page] };
	return context;
};
export default pageContext;
