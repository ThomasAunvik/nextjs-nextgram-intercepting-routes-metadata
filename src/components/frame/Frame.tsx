import Image from "next/image";
import { Photo } from "../../photos";
import Link from "next/link";

export default function Frame({ photo }: { photo: Photo }) {
  return (
    <>
      <Image
        alt=""
        src={photo.imageSrc}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>{photo.name}</h3>
        <p>Taken by {photo.username}</p>
        <Link
          href={`/about`}
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          GO TO ABOUT PAGE
        </Link>
      </div>
    </>
  );
}
