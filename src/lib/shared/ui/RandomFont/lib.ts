import { BASE_FONT_FAMILY_LIST, GOOGLE_FONT_FAMILY_LIST } from './config';

export const getRandomFontFamily = () => {
	const list = [...BASE_FONT_FAMILY_LIST, ...GOOGLE_FONT_FAMILY_LIST];
	return list[Math.floor(Math.random() * list.length)];
};
