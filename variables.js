import {
	navegacion,
	input,
	select,
	phones,
	galery,
	generalidades,
	generalidadesInfo,
	footerNavegacion,
	redes,
} from "./js/data";

const handlerBarsContext = {
	"/index.html": {
		// title: "Bakery Landing Page",
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
};

const pageContext = (page) => {
	const context = { ...handlerBarsContext[page] };
	return context;
};
export default pageContext;
