import { Metadata } from "next";
import Frame from "../../../components/frame/Frame";
import photos, { Photo } from "../../../photos";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const title = `Photo # ${(await params).id}`;
  return {
    title,
  };
};

export default async function PhotoPage({
  params: promiseParams,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = await promiseParams;
  const photo: Photo = photos.find((p) => p.id === params.id)!;

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Frame photo={photo} />
      </div>
    </div>
  );
}
