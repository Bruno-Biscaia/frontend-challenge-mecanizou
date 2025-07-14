interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onPageChange }: Props) {
  const handlePrev = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  return (
    <nav className="mt-10 flex items-center justify-center space-x-2">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="px-3 py-1 rounded-md border hover:opacity-60 border-gray-300 text-sm font-medium disabled:opacity-50 cursor-pointer"
      >
        Anterior
      </button>

      {Array.from({ length: totalPages }, (_, i) => {
        const pageNum = i + 1;
        const isCurrent = pageNum === page;
        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            aria-current={isCurrent ? 'page' : undefined}
            className={`px-3 py-1 rounded-md text-sm font-medium cursor-pointer
              ${
                isCurrent
                  ? 'border-t-2 border-indigo-500 text-indigo-600'
                  : 'border border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="px-3 py-1 rounded-md border hover:opacity-60 border-gray-300 text-sm font-medium disabled:opacity-50 cursor-pointer"
      >
        Próxima
      </button>
    </nav>
  );
}
