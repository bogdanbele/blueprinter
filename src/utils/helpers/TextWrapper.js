import React from 'react';

export default function wrapWithParagraph(string = 'Empty Paragraph') {
	const paragraphRegex = /[^\r\n]+((\r|\n|\r\n)[^\r\n]+)*/g;
	let subst = '<p>$&</p>';
	const htmlElement = <div dangerouslySetInnerHTML={{ __html: string.replace(paragraphRegex, subst) }} />;
	return htmlElement
}
