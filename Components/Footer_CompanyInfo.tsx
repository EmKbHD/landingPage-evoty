import { Box, Link, Text } from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const Socials = [
  {
    id: 1,
    icon: FaFacebook,
    title: "Facebook",
    link: "#",
    hoverColor: "blue",
  },
  {
    id: 2,
    icon: FaInstagram,
    title: "Instagram",
    link: "#",
    hoverColor: "red",
  },
  {
    id: 3,
    title: "Twitter",
    icon: FaXTwitter,
    link: "#",
    hoverColor: "black",
  },
  {
    id: 4,
    icon: FaLinkedin,
    title: "Linkedin",
    link: "#",
    hoverColor: "blue",
  },
];

const Footer_CompanyInfo = () => {
  return (
    <Box>
      <Text as="h2" fontSize="lg" fontWeight="bold" mb={4}>
        Social Medias Links
      </Text>
      <Box as="ul" display="flex" flexDir="column" gap={3}>
        {Socials.map((social) => (
          <Link
            href={social.link}
            key={social.id}
            gap={2}
            _hover={{ color: "brandSecondary.400" }}
          >
            <Text
              as="span"
              _hover={{ color: `${social.hoverColor} !important` }}
            >
              {<social.icon size={20} />}
            </Text>
            {social.title}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Footer_CompanyInfo;
