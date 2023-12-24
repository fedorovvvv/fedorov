export const BASE_FONT_FAMILY_LIST = ['Monaspace Neon Var'];

export const GOOGLE_FONTS_API_PATH =
	'https://fonts.googleapis.com/css2?family=Cairo&family=Caveat&family=Crete+Round&family=Dancing+Script&family=Indie+Flower&family=Noto+Sans+Tamil&family=Pacifico&family=Playfair+Display&family=Pragati+Narrow&family=Raleway&family=Rubik+Broken+Fax&family=Silkscreen&family=Single+Day&display=swap';

export const GOOGLE_FONT_FAMILY_LIST = Array.from(
	new URL(GOOGLE_FONTS_API_PATH).searchParams.getAll('family')
);
