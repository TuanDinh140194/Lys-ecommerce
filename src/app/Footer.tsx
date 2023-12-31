import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/LogoLYSByB2Greene2.png";

export default function Footer() {
  return (
    <footer className="bg-amber-950 p-10 text-neutral-content">
      <div className="footer m-auto max-w-7xl">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl normal-case">
            <Image src={logo} height={100} width={150} alt="LYS logo" />
          </Link>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link-hover link">Branding</a>
          <a className="link-hover link">Design</a>
          <a className="link-hover link">Marketing</a>
          <a className="link-hover link">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a
            className="link-hover link"
            href="https://www.facebook.com/LoveYourselfWithLYS"
            target="_blank"
          >
            Facebook
          </a>
          <a
            className="link-hover link"
            href="https://www.instagram.com/lyso.fficial/"
            target="_blank"
          >
            Instagram
          </a>
          <a className="link-hover link">B2Greene Website</a>
          <a className="link-hover link">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link-hover link">Terms of use</a>
          <a className="link-hover link">Privacy policy</a>
          <a className="link-hover link">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
}
