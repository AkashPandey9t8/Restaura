import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="mb-8 mt-20">
      <div className="flex items-center text-blue-400 justify-center ap-8">
        {SOCIAL_MEDIA_LINKS.map((links, index) => (
          <a
            key={index}
            href={links.href}
            target="_blank"
            rel="noopener noreferre"
          >
            {links.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 font-mono text-center tracking-tighter text-neutral-500">
        &copy:akash-9t8. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
