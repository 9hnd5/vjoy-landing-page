"use client";

import * as gtag from "@/utils/gtag";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as NextLink } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  CloseButton,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Script from "next/script";
import React from "react";
import { Providers } from "./providers";
import { nunito } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onToggle } = useDisclosure();

  const pathname = usePathname();

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    handleRouteChange(pathname);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={nunito.className}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config','${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}')
          `,
          }}
        />
        <Providers>
          <Box w="full">
            <DesktopNav onToggle={onToggle} />

            <MobileNav isOpen={isOpen} onToggle={onToggle} />

            <Container minW="100%" bg="white" overflowX="hidden" m={0} p={0}>
              {children}
            </Container>

            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}

type DesktopNavProps = {
  onToggle: () => void;
};
const DesktopNav = (props: DesktopNavProps) => {
  const { onToggle } = props;

  return (
    <Flex
      justify="space-around"
      bg="brandPurple.600"
      position="sticky"
      top={0}
      zIndex={999}
    >
      <Flex
        w="full"
        maxW="1120px"
        minH="80px"
        py={{ base: 5 }}
        px={{ base: 4 }}
        align="center"
      >
        <Flex flex={{ base: 1 }} justify="space-between" align="center">
          <Image
            width={201.88}
            height={40}
            alt="Logo"
            src="/LogoVUS.png"
            priority
            quality={100}
          />

          <Stack
            direction="row"
            wrap="wrap"
            spacing="32px"
            display={{ base: "none", sm: "flex" }}
            justify={{ base: "unset", sm: "flex-end" }}
          >
            {NAV_ITEMS.map((navItem) => (
              <DesktopNavItem key={navItem.href} {...navItem} />
            ))}
          </Stack>
        </Flex>

        <Flex display={{ base: "flex", sm: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={<HamburgerIcon w={5} h={5} />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
const DesktopNavItem = ({ label, href }: NavItem) => {
  return (
    <Button
      p={0}
      fontWeight="900"
      fontSize="16px"
      lineHeight="20px"
      letterSpacing={0.5}
      color="white"
      bg="transparent"
      _hover={{ color: "brandOrange.500" }}
      _active={{ bg: "transparent" }}
      onClick={() => {
        if (!href) return;
        const signupElement = document.getElementById(href);
        if (signupElement) signupElement.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {label}
    </Button>
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
      size={{ base: "md" }}
      onClose={onToggle}
      placement="left"
      autoFocus={false}
      returnFocusOnClose={false}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody bg="brandPurple.700">
          <Flex direction="column" h="full">
            <Stack color="white">
              <Flex justifyContent="flex-end" pt={2}>
                <Flex
                  bg="white"
                  w="20px"
                  h="20px"
                  align="center"
                  justify="space-around"
                  borderRadius="40%"
                >
                  <CloseButton
                    color="brandPurple.700"
                    size="sm"
                    onClick={onToggle}
                  />
                </Flex>
              </Flex>
              <Stack pt={6} spacing={4}>
                {NAV_ITEMS.map((navItem) => (
                  <MobileNavItem key={navItem.label} {...navItem} />
                ))}
              </Stack>
            </Stack>
            <Spacer />
            <VUS_Info />
          </Flex>
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
      fontSize="2xl"
      fontWeight="bold"
      {...(isActive
        ? {
            bg: "red.500",
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
    label: "Giới thiệu",
  },
  {
    label: "Trải nghiệm ngay",
    href: "signup",
  },
  {
    label: "Câu hỏi thường gặp",
    href: "faq",
  },
  {
    label: "Góp ý",
  },
];

const Footer = () => {
  return (
    <Flex bg="brandPurple.600" w="full" justify="space-around">
      <Flex
        w="full"
        maxW="1120px"
        direction={{ base: "column", sm: "row" }}
        py={10}
      >
        <Box w={{ base: "full", sm: "42%" }} px={{ base: 8, sm: 0 }}>
          <VUS_Info />
        </Box>
        <Spacer />
        <Flex
          px={{ base: 8, sm: 0 }}
          py={{ base: 6, sm: 10 }}
          direction="column"
          color="white"
        >
          <Heading fontSize="xl" mb={4}>
            VỀ VUS
          </Heading>
          {ABOUT_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              as={NextLink}
              _hover={{ textDecoration: "none" }}
              py={2}
              fontSize="sm"
            >
              {item.label}
            </Link>
          ))}
        </Flex>
        <Spacer />
        <Flex
          px={{ base: 8, sm: 0 }}
          py={{ base: 6, sm: 10 }}
          direction="column"
          color="white"
        >
          <Heading fontSize="xl" mb={4}>
            THÔNG TIN
          </Heading>
          {INFO_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              as={NextLink}
              _hover={{ textDecoration: "none" }}
              py={2}
              fontSize="sm"
            >
              {item.label}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
const VUS_Info = () => {
  return (
    <Flex py={{ base: 6, sm: 10 }} w="full" direction="column">
      <Image
        width={201.88}
        height={40}
        alt="Logo"
        src="/LogoVUS.png"
        priority
        quality={100}
      />
      <Text color="white" fontSize={{ base: "xs", sm: "sm" }} mt={4}>
        © CÔNG TY CỔ PHẦN QUỐC TẾ ANH VĂN HỘI VIỆT MỸ
      </Text>
      <Text color="white" fontSize="xs">
        Giấy chứng nhận doanh nghiệp số: 0313548147, Ngày cấp giấy phép:
        24/11/2015, Nơi cấp: SKHDT TP.HCM Trụ Sở Chính Tại 189 Nguyễn Thị Minh
        Khai, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh, Điện thoại: 028 3925
        9899
      </Text>
      <Link
        href="http://online.gov.vn/Home/WebDetails/37471"
        as={NextLink}
        _hover={{ textDecoration: "none" }}
        mt={4}
      >
        <Image
          width={150}
          height={150}
          alt="Logo"
          src="/logoSaleNoti.png"
          priority
        />
      </Link>
    </Flex>
  );
};

type LinkItem = {
  label: string;
  href?: string;
};
const ABOUT_ITEMS: Array<LinkItem> = [
  {
    label: "Giới Thiệu về VUS",
    href: "#",
  },
  {
    label: "Chuẩn đào tạo quốc tế",
    href: "#",
  },
  {
    label: "Đội ngũ giảng dạy",
    href: "#",
  },
  {
    label: "Trung tâm đào tạo",
    href: "#",
  },
  {
    label: "Cơ hội nghề nghiệp",
    href: "#",
  },
  {
    label: "Teaching At VUS",
    href: "#",
  },
];
const INFO_ITEMS: Array<LinkItem> = [
  {
    label: "Thông tin nhà trường",
    href: "#",
  },
  {
    label: "Chính sách bảo mật",
    href: "#",
  },
  {
    label: "Điều khoản sử dụng",
    href: "#",
  },
  {
    label: "Thanh toán trả góp 0% lãi suất",
    href: "#",
  },
];
