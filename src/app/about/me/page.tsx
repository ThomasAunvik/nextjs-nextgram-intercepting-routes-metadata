export const metadata = {
  title: "ABOUT ME",
};

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <h1>ABOUT ME</h1>;
}
