import * as React from "react";

const Link: React.FC<{ href: string }> = ({ href, children }) => (
  <a
    href={href}
    className="text-primary-700 hover:text-primary-800 transition-color duration-200"
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

export const RedesignContact: React.FC = () => {
  return (
    <div className="bg-gray-300" id="getintouch">
      <div className="container max-w-5xl px-2 pt-4 pb-16">
        <div className="text-5xl font-thin font-fancy">Get in Touch!</div>
        <div className="text-gray-600">Want to share ideas? Hit me up!</div>
        <div className="mb-4" />
        <ul className="text-gray-600 list-disc ml-6">
          <li>
            Email me at{" "}
            <Link href="mailto:gksander93@gmail.com">gksander93@gmail.com</Link>
            .
          </li>
          <li>
            I act like a professional as{" "}
            <Link href="https://linkedin.com/in/gksander">gksander</Link> on
            LinkedIn.
          </li>
          <li>
            I commit code as{" "}
            <Link href="https://github.com/gksander">gksander</Link> on GitHub.
          </li>
          <li>
            I sometimes tweet as{" "}
            <Link href="https://twitter.com/gksander93">gksander93</Link>.
          </li>
          <li>
            I sometimes blog as{" "}
            <Link href="https://dev.to/gksander">gksander</Link> on dev.to.
          </li>
        </ul>
      </div>
    </div>
  );
};
