"use client";
import * as gtag from "@/utils/gtag";
import { Link as NextLink } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  FlexProps,
  Heading,
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
import { svn_arco } from "./fonts";
import { Providers } from "./providers";

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
      <body>
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
      bg="brandPurple.700"
      position="sticky"
      top={0}
      zIndex={999}
    >
      <Flex
        w="full"
        maxW="1120px"
        minH="80px"
        py={{ base: 5 }}
        px={{ base: "24px", md: 0 }}
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
            {NAV_ITEMS.map((navItem, index) => (
              <DesktopNavItem key={index} {...navItem} />
            ))}
          </Stack>
        </Flex>

        <Flex display={{ base: "flex", sm: "none" }}>
          <Box
            key={1}
            w="32px"
            h="32px"
            bgColor="transparent"
            bgImg="/icons/DashboardSquare.png"
            bgSize="32px 32px"
            onClick={onToggle}
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
        if (signupElement) {
          const desiredScrollPosition = signupElement.offsetTop - 100;
          window.scrollTo({
            top: desiredScrollPosition,
            behavior: "smooth",
          });
        }
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
                <Box
                  key={1}
                  w="32px"
                  h="32px"
                  bgColor="transparent"
                  bgImg="/icons/DeleteCircle.png"
                  bgSize="32px 32px"
                  onClick={onToggle}
                />
              </Flex>
              <Stack pt="24px" spacing="32px">
                {NAV_ITEMS.map((navItem) => (
                  <MobileNavItem
                    key={navItem.label}
                    {...navItem}
                    onClick={onToggle}
                  />
                ))}
              </Stack>
            </Stack>
            <Spacer />
            <VUS_Info w="full" />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

interface MobileNavItemProps extends NavItem {
  onClick: () => void;
}

const MobileNavItem = ({ label, href, onClick }: MobileNavItemProps) => {
  return (
    <Text
      p={0}
      fontWeight="900"
      fontSize="32px"
      lineHeight="40px"
      letterSpacing={0.5}
      color="white"
      alignItems="left"
      bg="transparent"
      _hover={{ color: "brandOrange.500" }}
      _active={{ bg: "transparent" }}
      onClick={() => {
        if (!href) return;
        const signupElement = document.getElementById(href);
        if (signupElement) {
          const desiredScrollPosition = signupElement.offsetTop - 100;
          window.scrollTo({
            top: desiredScrollPosition,
            behavior: "smooth",
          });
        }
        onClick();
      }}
    >
      {label}
    </Text>
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
        <VUS_Info
          w={{ base: "full", sm: "42%" }}
          px={{ base: "24px", sm: 0 }}
        />
        <Spacer />
        <Flex
          px={{ base: 8, sm: 0 }}
          py={{ base: 6, sm: 10 }}
          direction="column"
          color="white"
        >
          <Heading
            className={svn_arco.className}
            fontWeight={400}
            fontSize="20px"
            lineHeight="25px"
            letterSpacing={1}
            mb="24px"
          >
            VỀ VUS
          </Heading>
          {ABOUT_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              as={NextLink}
              _hover={{ textDecoration: "none" }}
              mb="16px"
              fontWeight="700"
              fontSize="16px"
              lineHeight="20px"
              letterSpacing={1}
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
          <Heading
            className={svn_arco.className}
            fontWeight={400}
            fontSize="20px"
            lineHeight="25px"
            letterSpacing={1}
            mb="24px"
          >
            THÔNG TIN
          </Heading>
          {INFO_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              as={NextLink}
              _hover={{ textDecoration: "none" }}
              mb="16px"
              fontWeight="700"
              fontSize="16px"
              lineHeight="20px"
              letterSpacing={1}
            >
              {item.label}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
const VUS_Info = (props: FlexProps) => {
  return (
    <Flex
      py={{ base: 6, sm: 10 }}
      direction="column"
      fontWeight="700"
      fontSize="12px"
      lineHeight="15px"
      letterSpacing={1}
      color="white"
      {...props}
    >
      <Image
        width={201.88}
        height={40}
        alt="Logo"
        src="/LogoVUS.png"
        priority
        quality={100}
      />
      <Text mt={4}>© CÔNG TY CỔ PHẦN QUỐC TẾ ANH VĂN HỘI VIỆT MỸ</Text>
      <Text>
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
