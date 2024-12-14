export const getYearOld = () => {
	const birth = new Date("2005-02-24");
	const today = new Date();
	const diffTime = today.getTime() - birth.getTime();
	return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
};
