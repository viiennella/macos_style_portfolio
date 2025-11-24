import WindowControls from "@/components/windowControls";
import Image from "next/image";
import WindowWrapper from "@/hoc/windowWrapper";
import { socials } from "@/constants/constants";
import Link from "next/link";

/**
 * Render a contact window with a header, profile image, contact information, and social links.
 *
 * Renders window controls, a circular profile image, a prompt and email address, and a list of social items
 * (each rendered as a linked icon and label) using the imported `socials` data.
 *
 * @returns A React element containing the contact window UI: header, profile image, contact text, email, and social links.
 */
function Contact() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <Image
          src="/images/adrian.jpg"
          alt="portrait of Adrian"
          className="w-20 rounded-full"
          width={80}
          height={80}
        />
        <h2>Let's connect</h2>
        <p>got an idea? bug to squash? let's chat</p>
        <p>mailto:adrian@viiennella.com</p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <Image
                  src={icon}
                  alt={text}
                  className="size-5"
                  width={24}
                  height={24}
                />
                <p>{text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;