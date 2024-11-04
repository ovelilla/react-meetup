const MeetupItemSkeletonComponent = () => (
  <article className="flex flex-col overflow-hidden rounded-lg shadow-lg">
    <div className="h-48 w-full animate-pulse bg-gray-300"></div>
    <div className="flex flex-col items-center gap-4 bg-white p-4 md:p-6">
      <div className="h-6 w-3/4 animate-pulse rounded bg-gray-300"></div>
      <div className="h-4 w-1/2 animate-pulse rounded bg-gray-300"></div>
      <div className="h-4 w-full animate-pulse rounded bg-gray-300"></div>
      <div className="mt-6 h-12 w-full animate-pulse rounded bg-gray-300"></div>
    </div>
  </article>
);

export { MeetupItemSkeletonComponent };
