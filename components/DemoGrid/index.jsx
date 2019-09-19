import React from 'react';
import styles from './style.module.scss'

const DemoGrid = ({children, codeRender, title, description, anchor}) => {
	return (
		<section>
			<h1 className={styles.header}>
				<a href={anchor}>¶</a>
				{title}</h1>
		</section>
	);
};

export default DemoGrid;
