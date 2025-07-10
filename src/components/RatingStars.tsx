import { StarIcon } from '@heroicons/react/20/solid';

interface Props {
  rating: number;
  totalReviews: number;
}

export function RatingStars({ rating, totalReviews }: Props) {
  return (
    <div className="ml-4 border-l border-gray-300 pl-4">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            aria-hidden="true"
            className={`h-5 w-5 flex-shrink-0 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
        <p className="ml-2 text-sm text-gray-500">{totalReviews} reviews</p>
      </div>
    </div>
  );
}
