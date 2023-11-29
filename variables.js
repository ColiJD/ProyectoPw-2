const navegacion = [
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

const handlerBarsContext = {
	"/index.html": {
		// title: "Bakery Landing Page",
		navegacion: navegacion,  
		input: input,
		phones: phones,
		footerNavegacion: footerNavegacion,
	},
};

const pageContext = (page) => {
	const context = { ...handlerBarsContext[page] };
	return context;
};
export default pageContext;
