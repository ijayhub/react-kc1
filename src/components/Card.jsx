import React from 'react'

const Card = ({ GiftCard }) => {
	return (
		<div>
		
			<div className='card'>
				<div className='card-title'>
					<h2>{GiftCard.title}</h2>
				</div>
				<div className='card-body text-danger px-4'>
					{GiftCard.currencies.map((currency =>
						<button className='box' >{currency}</button>
					))}
						
					
				</div>
			</div>
		</div>
	);
}

export default Card
