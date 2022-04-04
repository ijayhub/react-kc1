import React from 'react'

const Card = ({ GiftCard }) => {
	return (
		<div>
		
			<div className='card'>
				<div className='card-title'>
					<h2>{GiftCard.title}</h2>
				</div>
				<div className='card-body'>
					<p>{GiftCard.currencies.join(',')}</p>
				</div>
			</div>
		</div>
	);
}

export default Card
