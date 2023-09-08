import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FooterIcons } from "./FooterIcons";
import { FooterItem } from "./FooterItem";
import { FooterTitle } from "./FooterTitle";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <FooterTitle />

      <FooterIcons>
        <FooterItem.Root>
          <FooterItem.Icon Icon={BsWhatsapp} />
          <FooterItem.Content content="Whatsapp" />
        </FooterItem.Root>

        <FooterItem.Root>
          <FooterItem.Icon Icon={BsFacebook} />
          <FooterItem.Content content="Facebook" />
        </FooterItem.Root>

        <FooterItem.Root>
          <FooterItem.Icon Icon={BsInstagram} />
          <FooterItem.Content content="Instagram" />
        </FooterItem.Root>

        <FooterItem.Root>
          <FooterItem.Icon Icon={MdEmail} />
          <FooterItem.Content content="Email" />
        </FooterItem.Root>
      </FooterIcons>
    </footer>
  );
};
