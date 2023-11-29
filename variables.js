

const handlerBarsContext = {
	"/index.html": {
	},
};

const pageContext = (page) => {
	const context = { ...handlerBarsContext[page] };
	return context;
};
export default pageContext;
