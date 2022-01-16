export const projectCardVariants = {
	start: {
		opacity: 0,
		y: "100%",
	},
	end: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const projectImageVariants = {
	start: {
		opacity: 0,
		scale: 0.9,
	},
	end: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.25,
		},
	},
};
