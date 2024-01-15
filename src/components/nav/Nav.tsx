import Link from "next/link";

export default function Nav() {
  return (
    <ul className="flex border-b-8 p-8 gap-2">
      <li className="p-3 border-2 rounded">
        <Link href={"/about"}>About</Link>
      </li>
      <li className="p-3 border-2 rounded">
        <Link href={"/about/us"}>US</Link>
      </li>
      <li className="p-3 border-2 rounded">
        <Link href={"/about/me"}>ME</Link>
      </li>
    </ul>
  );
}
