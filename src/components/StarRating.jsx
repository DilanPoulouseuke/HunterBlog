// components/StaticStarRating.jsx

const StaticStarRating = ({ rating }) => {
	const totalStars = 5
	const filledStars = Math.floor(rating)

	return (
		<div className='flex items-center'>
			{Array.from({ length: filledStars }, (_, index) => (
				<svg
					key={index}
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5 text-yellow-500 fill-current'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<path
						fillRule='evenodd'
						d='M10 0l2.55 6.98H20l-5.53 4.48 2.18 6.5L10 14.93l-6.65 4.03 2.18-6.5L0 6.98h7.45L10 0z'
						clipRule='evenodd'
					/>
				</svg>
			))}
			{Array.from({ length: totalStars - filledStars }, (_, index) => (
				<svg
					key={filledStars + index}
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5 text-gray-400 fill-current'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<path
						fillRule='evenodd'
						d='M10 0l2.55 6.98H20l-5.53 4.48 2.18 6.5L10 14.93l-6.65 4.03 2.18-6.5L0 6.98h7.45L10 0z'
						clipRule='evenodd'
					/>
				</svg>
			))}
		</div>
	)
}

export default StaticStarRating
