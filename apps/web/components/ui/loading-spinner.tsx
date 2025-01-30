export function LoadingSpinner() {
  return (
    <div className="flex justify-center" aria-label="Loading...">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent" />
    </div>
  );
}
