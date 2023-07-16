import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type columnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: columnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((menu) => (
        <Link href={"/"} key={menu}>
          {menu}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flexStart footer mt-auto">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={115}
              height={40}
              alt="KipDEV"
              className="h-auto w-auto object-cover"
              priority
            />
          </Link>
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            "KipDEV Shots is a vibrant online community where designers,
            artists, and creative minds converge. Discover and showcase
            breathtaking design portfolios, find inspiration, connect with
            like-minded professionals, and foster collaborations. Immerse
            yourself in the world of visual creativity and join our thriving
            community of passionate individuals."
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
          <FooterColumn
              title={footerLinks[6].title}
              links={footerLinks[6].links}
            />
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>@ {year}, KipDEV. All rights reserved</p>
        <p className="text-gray flex items-center gap-2">
          <span className="text-black font-semibold">100</span>
          <span>Projects Submitted</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
