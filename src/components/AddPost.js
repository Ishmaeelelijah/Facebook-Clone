/** @format */

import React from "react";
import { Textarea, Button, Row } from "react-materialize";

export default () => {
	return (
		<div>
			<div className='outerBox' m10 style={{width: '600px'}}>
				<h6 style={{ fontWeight: 500 }}>What is on your mind?</h6>
				<Row style={{ marginBottom: 0 }}>
					<Textarea
						s={12}
						className='custom-textArea'
						placeholder='Please write here...'
						data-lenght={120}
					/>
				</Row>
				<div>
					<Button>
						Post
					</Button>
				</div>
			</div>
		</div>
	);
};
