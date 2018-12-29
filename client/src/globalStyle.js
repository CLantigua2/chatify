import { createGlobalStyle } from 'styled-components';

export const theme = {
	darkBlack: '#000000',
	black: '#393939',
	active: '#32E2EC',
	inactive: '#1C868D',
	sidebar: '#000E0F',
	gray: '#E5E5E5',
	offWhite: '#EDEDED'
};
export const GlobalStyle = createGlobalStyle`

  html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font: inherit;
		vertical-align: baseline;
		color: ${theme.darkBlack};
		font-family: 'Roboto Condensed';
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}

		html {
		font-size: 62.5%;
	}
	body {

	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
h1 {
	font-size: 4rem;
  font-weight: bold;
}
h2 {
	font-size: 3.5rem;
  font-weight: bold;
}
h3 {
	font-size: 3rem;
  font-weight: bold;
}
h4 {
  font-size: 2.5rem;
  font-weight: bold;
}
h5 {
  font-size: 2rem;
  font-weight: bold;
}
h6 {
  font-size: 1.8rem;
  font-weight: bold;
}
p, a, li {
  font-size: 1.6rem
}

`;
