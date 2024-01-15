import "./global.css";
import GithubCorner from "../components/github-corner/GithubCorner";
import Nav from "../components/nav/Nav";

export const metadata = {
  title: "NextGram",
  description:
    "A sample Next.js app showing dynamic routing with modals as a route.",
  metadataBase: new URL("https://nextgram.vercel.app"),
};

export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <GithubCorner />
        <Nav />
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
