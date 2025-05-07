import { User } from "@/types/github";
import Image from "next/image";

type UserCardProps = {
  user: User;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex flex-col items-center border border-[#ddd] rounded-lg p-4 bg-white">
      <div>
        <Image
          src={user.avatar_url}
          width={120}
          height={120}
          alt={user.login}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
