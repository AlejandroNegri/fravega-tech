export function UserCardSkeleton() {
  return (
    <div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center bg-white">
      <div className="w-30 h-30 rounded-full mb-4 bg-gray-200" />
      <div className="w-30 h-6 rounded mb-4 bg-gray-200" />
      <div className="flex gap-4 w-full justify-center">
        <div className="w-24 h-9 rounded bg-gray-200" />
        <div className="w-9 h-9 rounded bg-gray-200" />
      </div>
    </div>
  );
}
