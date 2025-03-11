import { Metadata } from "next";
import Frame from "../../../../components/frame/Frame";
import Modal from "../../../../components/modal/Modal";
import swagPhotos, { Photo } from "../../../../photos";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const title = `Intercepted Photo # ${(await params).id}`;
  return {
    title,
  };
};

export default async function PhotoModal({
  params: promiseParams,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = await promiseParams;
  const photos = swagPhotos;
  const photo: Photo = photos.find((p) => p.id === params.id)!;

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  );
}
