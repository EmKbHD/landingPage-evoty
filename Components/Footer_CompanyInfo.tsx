import { Box, Link, Text } from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const Socials = [
  {
    id: 1,
    icon: FaFacebook,
    title: "Facebook",
    link: "#",
  },
  {
    id: 2,
    icon: FaInstagram,
    title: "Instagram",
    link: "#",
  },
  {
    id: 3,
    title: "Twitter",
    icon: FaTwitter,
    link: "#",
  },
  {
    id: 4,
    icon: FaLinkedin,
    title: "Linkedin",
    link: "#",
  },
];

const Footer_CompanyInfo = () => {
  return (
    <Box>
      <Text as="h2">Social Medias Links</Text>
      <Box as="ul">
        {Socials.map((social) => (
          <Link href={social.link} key={social.id}>
            {<social.icon size={20} />}
            {social.title}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Footer_CompanyInfo;
