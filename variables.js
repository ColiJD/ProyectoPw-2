import {
	navegacion,
	galery,
	generalidades,
	generalidadesInfo,
	input,
	select,
	phones,
	footerNavegacion,
	redes,
	card,
	btnApadrina,
	teest,
	preguntas,
	galeria,
} from "./js/data";

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
		btnApadrina: btnApadrina,
		card: card,
		phones: phones,
		footerNavegacion: footerNavegacion,
		redes: redes,
	},
	"/page/programas.html": {
		title: "Programas",
		logo: "https://acoes.org/wp-content/uploads/2023/10/LG-FUNDACION-BN-2-2.png",
		navegacion: navegacion,
		galery: galery,
		input: input,
		phones: phones,
		footerNavegacion: footerNavegacion,
		teest: teest,
	},
	"/page/pfrecuentes.html": {
		title: "Frecuentes",
		logo: "https://acoes.org/wp-content/uploads/2023/10/LG-FUNDACION-BN-2-2.png",
		navegacion: navegacion,
		galery: galery,
		input: input,
		phones: phones,
		footerNavegacion: footerNavegacion,
		teest: teest,
		preguntas: preguntas,
	},
	"/page/comoayudar.html": {
		title: "Como Ayudar",
		logo: "https://acoes.org/wp-content/uploads/2023/10/LG-FUNDACION-BN-2-2.png",
		navegacion: navegacion,
		galery: galery,
		input: input,
		phones: phones,
		footerNavegacion: footerNavegacion,
	},
	"/page/galeria.html": {
		title: "Galeria",
		logo: "https://acoes.org/wp-content/uploads/2023/10/LG-FUNDACION-BN-2-2.png",
		navegacion: navegacion,
		galery: galery,
		phones: phones,
		footerNavegacion: footerNavegacion,
		galeria: galeria,
	},
};

const pageContext = (page) => {
	const context = { ...handlerBarsContext[page] };
	return context;
};
export default pageContext;
