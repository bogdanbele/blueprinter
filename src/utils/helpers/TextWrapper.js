import React from 'react';

export default function wrapWithParagraph(string) {
	const paragraphRegex = /[^\r\n]+((\r|\n|\r\n)[^\r\n]+)*/g;
	let subst = '<p>$&</p>';
	return <div dangerouslySetInnerHTML={{ __html: string.replace(paragraphRegex, subst) }} />;
}
