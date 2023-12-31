"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <Image
          alt="Avatar"
          src={user?.image || "/images/placeholder.jpg"}
          fill
        />
        {/* trial test hardcore online status on profile picture */}
        <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-1 right-1 h-2 w-2 md:h-3 md:w-3" />
      </div>
    </div>
  );
};

export default Avatar;
