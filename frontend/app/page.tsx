import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="/performance">Performance</Link><br></br>
      <Link href="/reliability">Reliability</Link><br></br>
      <Link href="/scale">Scale</Link>
    </div>
  );
}
