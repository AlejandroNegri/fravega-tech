type GetStatProps = {
  title: string;
  value: number;
};

export function GetStat({ title, value }: GetStatProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl font-bold text-gray-700">{value}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
}
