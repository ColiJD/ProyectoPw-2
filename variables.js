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
	// donaciones
	btnApadrina,
	card
} from "./js/data";

const handlerBarsContext = {
	"/index.html": {
		"nav":[
            		{ nombre: "Inicio", url: "../index.html"},
            		{ nombre: "Cómo Ayudar", url: "./page/comoayudar.html"},
            		{ nombre: "Galería", url: "./page/galeria.html"},
        	],
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
	
	"/page/comoayudar.html": {
        	"nav":[
            		{ nombre: "Inicio", url: "../index.html"},
            		{ nombre: "Cómo Ayudar", url: "./comoayudar.html"},
            		{ nombre: "Galería", url: "./galeria.html"},
        	],
    	},
    	"/page/galeria.html": {
        	"nav":[
            		{ nombre: "Inicio", url: "../index.html"},
            		{ nombre: "Cómo Ayudar", url: "./comoayudar.html"},
            		{ nombre: "Galería", url: "./galeria.html"},
        	],
        	"galeria": [
            		{ titulo: "CENAS SOLIDARIAS: UNA HORA POR HONDURAS", fecha: "OCTUBRE 21,2017", autor: "ANTONIO JOSÉ MORALES FERNÁNDEZ", img: "/img/noticia1.jpg", descripcion: "El próximo sábado 28 de octubre y coincidiendo con el cambio horario, bajo el lema ‘Una Hora por Honduras’, las distintas delegaciones de ACOES celebrarán varias cenas solidarias simultáneas en distintos países con el objetivo de sensibilizar sobre la situación de los países más desfavorecidos y recaudar fondos para los proyectos de ACOES en Honduras. Contacta con la delegación más cercana de Acoes al lugar donde vives y asiste a una de las cenas que están preparando. Es un momento para dedicar esa Hora que tendrá más el día por Honduras (HxH)" },
            		{ titulo: "PREMOI PARA EL EQUIPO DE ACOES SINERGIAS", fecha: "OCTUBRE 26,2017", autor: "ANTONIO JOSÉ MORALES FERNÁNDEZ", img: "/img/noticia2.jpg", descripcion: "El grupo de ACOES Sinergias, que se encarga de la atención a los discapacitados, ha recibido el primer premio del «CONCURSO DE BUENAS PRÁCTICAS DE INCLUSIÓN EDUCATIVA DE ESTUDIANTES CON DISCAPACIDAD VISUAL O CON OTRAS DISCAPACIDADES ASOCIADAS».  Se han seleccionado a 15 centros educativos de Honduras. Enhorabuena a todo el equipo de Sinergias, encabezados por Eloisa Muela. Para Eloisa “Ha sido una experiencia inolvidable. Poder compartir lo que hacemos en los Espacios Psicopedagógicos de las Escuelas ya es un regalo, si además se consigue el primer premio, mucho mejor. Aunque el verdadero premio es poder acompañar día a día a estos niños/as tan increíbles compartiendo sus avances con un equipo tan bueno y con un corazón tan grande como el que hay en las escuelas de ACOES”." },
            		{ titulo: "ORDENACIÓN DIACONAL DE ÁLVARO RAMOS", fecha: "NOVIEMBRE 4,2017", autor: "ANTONIO JOSÉ MORALES FERNÁNDEZ", img: "/img/noticia3.jpg", descripcion: "La Arquidiócesis de Teguciglap cuenta ya con un nuevo Diácono, Álvaro Ramos, español que un día, como dice su madre Charo, “conoció  Honduras, conoció Acoes y sobre todo al Padre Patricio, y le cambió la vida \n El 1/11/17 será recordado por ser un día muy importante para él y para la familia ACOES. \n Álvaro forma parte del equipo de misioneros de ACOES  en Honduras que colaboran ayudando  a los más pobres e intentando hacer un mundo mejor. Lleva 3 años colaborando y coordinando  proyectos de ACOES. Tiene  5 años de experiencia profesional en América Latina, 15 años de experiencia profesional en la industria private equity, banca inversión y legal en Azora, Bank of America, Endowment Universidad Carolina del Norte y Freshfields Bruckhaus Deringer. Economista y  abogado por ICADE (Madrid) y MBA en Universidad Carolina del Norte. \n A la ceremonia en la catedral de Tegucigalpa han asistido 400 niños y jóvenes que representando a los 42 proyectos que ACOES desarrolla han compartido la alegría de saber que alguien más se suma a la tarea de quererles. \n Todos le deseamos lo mejor en esta tarea de APRENDIENDO A COMPARTIR con los más necesitados." },
            		{ titulo: "SINERGIAS Y EL FIN DE CURSO EN LAS ESCUELAS DE ACOES", fecha: "OCTUBRE 15,2017", autor: "ANTONIO JOSÉ MORALES FERNÁNDEZ", img: "/img/noticia4.jpg", descripcion: "Esta semana se han celebrado en la finca San Antonio dos jornadas con los niños de Sinergias de los espacios psicopedagógicos de las escuelas de Acoes, para despedir el curso escolar. Educadores y madres de casi 300 niños/as con discapacidad y problemas de aprendizaje han tenido la oportunidad de vivir esta experiencia juntos. Para Nelsy la coordinadora del Espacio de Santa Clara: “Estos momentos de convivencia y recreación son lo que más esperan los niños/as durante el año. Así, que llevar a cabo estos momentos con el gran equipo que tenemos fue realmente gratificante. Gracias a las manos que nos apoyaron, gracias a los corazones  que laten juntos para esta misma causa”" },
            		{ titulo: "MEMORIA 2016 ACOES", fecha: "DICIEMBRE 12,2017", autor: "ANTONIO JOSÉ MORALES FERNÁNDEZ", img: "/img/noticia5.jpg", descripcion: "Estimados amigos y colaboradores: Como cada año os hacemos llegar un informe de algunas de las actividades que se realizaron en Honduras y que son de gran utilidad para compartir con todos los que han colaborado y las han hecho posibles. Podemos decir que hay un crecimiento lento en los proyectos semejante al que se va realizando en las personas, verdaderos protagonistas de todas las actividades y destinatarios de las mismas. Señalaremos algo no cuantificable ni cuantificado en el informe: el trabajo de los colaboradores. Doscientas veinticuatro personas de otros países pasaron parte de su vida el año pasado con nosotros que, unido a las setecientas veinticinco de Honduras, hacen un grupo bien numeroso, más de novecientas personas trabajando unidas para mejorar el mundo. Esto, creo que supera cualquier valor económico y es la mayor riqueza que hemos de señalar del año pasado. Profesores y alumnos de la Universidad Autónoma de Honduras junto a los de Granada, Málaga, Sevilla y La Coruña impulsaron grandemente los proyectos y fortalecieron las actividades mejorando su calidad. Quedan sin anotar los miles de personas que no han tenido la oportunidad de venir a Honduras para compartir pero que, desde sus pueblos y ciudades, han entregado mucho tiempo una gran mayoría y algo menos otros, para unirse en esta tarea de ¨Aprender a Compartir¨. Interesante sondear datos en la Memoria 2016: De algo más de once mil estudiantes que son atendidos, hay cien mujeres más que hombres. Bastantes ya están en la universidad. Se hicieron más de trescientos contratos de trabajo asegurando algo la vida de muchas familias. Una palabra final para agradecer a particulares e instituciones: con su confianza y generosidad han hecho posible que la vida sea algo mejor para muchas personas confirmando, una vez más, que otro mundo es posible y estamos todos comprometidos en la tarea de lograrlo. Patricio Larrosa Martos, Pbro." },
            		{ titulo: "FIN DE CURSO EN LOS CENTROS DE ACOES", fecha: "DICIEMBRE 18,2017", autor: "ANTONIO JOSÉ MORALES FERNÁNDEZ", img: "/img/noticia6.jpg", descripcion: "A finales de noviembre se clausuró el curso escolar en las 4 Escuelas de ACOES  y ahora en los Centros Infantiles. Generalmente  estos Centros Infantiles  se utilizan para apoyar a los niños de preescolar por la mañana y de reforzamiento para los niños de las escuelas por la tarde. Son 16 Centros de Infantil que hay repartidos por Honduras. Tanto en las Escuelas de ACOES como en los Centros infantiles van a comenzar las Escuelas de Vacaciones y permanecerán abiertos para que los alumnos que lo deseen se acerquen a estos centros educativos. Se han creado equipos de trabajo para coordinar las actividades en estas vacaciones." },
        	],
    	},
};

const pageContext = (page) => {
	const context = { ...handlerBarsContext[page] };
	return context;
};
export default pageContext;
