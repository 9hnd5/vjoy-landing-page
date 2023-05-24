"use client";
import {
  Box,
  CloseButton,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import * as gtag from "@/utils/gtag";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as NextLink } from "@chakra-ui/next-js";
import { useEffect } from "react";

type Props = {
  children?: React.ReactNode;
};
export default function LandingLayout(props: Props) {
  const { children } = props;
  const { isOpen, onToggle } = useDisclosure();

  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    handleRouteChange(pathname);
  }, [pathname]);

  return (
    <Box h="100%" w="100%">
      <DesktopNav onToggle={onToggle} />

      <MobileNav isOpen={isOpen} onToggle={onToggle} />

      <Container
        h="calc(100% - 60px)"
        minW="100%"
        bg="gray.100"
        overflow="auto"
      >
        {children}
      </Container>
    </Box>
  );
}
type DesktopNavProps = {
  onToggle: () => void;
};
const DesktopNav = (props: DesktopNavProps) => {
  const { onToggle } = props;

  return (
    <Flex
      minH="60px"
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle="solid"
      borderColor="gray.200"
      align="center"
    >
      <Flex
        flex={{ base: 1, sm: "auto" }}
        ml={{ base: -2 }}
        display={{ base: "flex", sm: "none" }}
      >
        <IconButton
          onClick={onToggle}
          icon={<HamburgerIcon w={5} h={5} />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>

      <Flex
        flex={{ base: 1 }}
        justify={{ base: "flex-end", sm: "space-between" }}
      >
        <Image
          width={100}
          height={100}
          style={{ width: "120px" }}
          alt="Logo"
          src="/logo.svg"
          priority
        />

        <Stack
          direction="row"
          wrap="wrap"
          display={{ base: "none", sm: "flex" }}
          justify={{ base: "unset", sm: "flex-end" }}
        >
          {NAV_ITEMS.map((navItem) => (
            <DesktopNavItem key={navItem.href} {...navItem} />
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
};

const DesktopNavItem = ({ label, href }: NavItem) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Box
      p={2}
      borderRadius="4px"
      {...(isActive
        ? {
            bg: "red.500",
            color: "white",
            fontWeight: "semibold",
            _hover: { textDecoration: "none" },
          }
        : {
            _hover: { textDecoration: "none" },
          })}
    >
      <Link href={href} as={NextLink} _hover={{ textDecoration: "none" }}>
        {label}
      </Link>
    </Box>
  );
};

type MobileNavProps = {
  isOpen: boolean;
  onToggle: () => void;
};
const MobileNav = (props: MobileNavProps) => {
  const { isOpen, onToggle } = props;
  return (
    <Drawer
      isOpen={isOpen}
      size={{ base: "xs" }}
      onClose={onToggle}
      placement="left"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <Stack>
            <Flex pl={2} alignItems="center" justifyContent="space-between">
              <Image width={120} height={120} alt="logo" src="/logo.svg" />
              <CloseButton display={{ base: "flex" }} onClick={onToggle} />
            </Flex>
            <Stack spacing={4}>
              {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
              ))}
            </Stack>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Box
      px={4}
      py={2}
      borderRadius="4px"
      {...(isActive
        ? {
            bg: "red.500",
            color: "white",
            fontWeight: "semibold",
            _hover: { textDecoration: "none" },
          }
        : {
            _hover: { textDecoration: "none" },
          })}
    >
      <Link href={href} as={NextLink} _hover={{ textDecoration: "none" }}>
        {label}
      </Link>
    </Box>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Giới Thiệu",
    href: "/",
  },
  {
    label: "Trải Nghiệm Thử",
    href: "/trial",
  },
  {
    label: "Câu Hỏi Thường Gặp",
    href: "/question",
  },
  {
    label: "Góp Ý",
    href: "/feedback",
  },
];
