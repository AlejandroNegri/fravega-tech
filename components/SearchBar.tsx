type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
  return (
    <form onSubmit={onSubmit} className="flex gap-4 mb-8 justify-center">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar usuario..."
        className="px-4 py-2 border-2 border-gray-300 rounded w-2xs focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 rounded text-white cursor-pointer hover:bg-blue-600"
      >
        Buscar
      </button>
    </form>
  );
}
