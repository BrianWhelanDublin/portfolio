export const letterVarients = {
	start: {
		x: "100%",
	},
	end: {
		x: 0,
		transition: {
			duration: 1.5,
		},
	},
};

export const descriptionVariants = {
	start: {
		opacity: 0,
		x: "-100%",
	},
	end: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.2,
			duration: 1,
		},
	},
};
