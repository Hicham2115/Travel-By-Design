import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Mail, SendHorizontal } from "lucide-react";

const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#our-story", label: "Our Story" },
  { href: "#our-ideology", label: "Our Ideology" },
  { href: "#about-us", label: "About Us" },
];

export default function Component() {
  return (
    <header className="px-4 md:px-6 sticky top-0 z-50 backdrop-blur-lg text-white">
      <div className="flex h-16 items-center justify-between gap-4 relative">
        {/* Logo - Left side */}
        <a className="text-primary hover:text-primary/90 z-10" href="#">
          <div className="flex gap-2">
            <img src={logo} alt="logo" width="200px" />
            {/* <span className="text-xl font-bold tracking-wider text-white">
              Travel <span className="text-[#e7c129]">By Design</span>
            </span> */}
          </div>
        </a>

        {/* Mobile menu trigger */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="group size-8 md:hidden z-10"
              size="icon"
              variant="ghost"
            >
              <svg
                className="pointer-events-none"
                fill="none"
                height={16}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width={16}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="-translate-y-[7px] origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  d="M4 12L20 12"
                />
                <path
                  className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  d="M4 12H20"
                />
                <path
                  className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  d="M4 12H20"
                />
              </svg>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-36 p-1 md:hidden">
            <NavigationMenu className="max-w-none *:w-full">
              <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                {navigationLinks.map((link, _index) => (
                  <NavigationMenuItem className="w-full" key={link.href}>
                    <NavigationMenuLink
                      active={link.active}
                      className="py-1.5"
                      href={link.href}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <div className="flex flex-col-reverse gap-2 mt-2">
                  <Button
                    asChild
                    className="group relative px-4 py-3 bg-[#CFA80F] text-white font-bold rounded-xl hover:bg-[#1f4121] hover:text-white transition-all duration-300 shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center"
                    size="sm"
                    variant="ghost"
                  >
                    <a href="#contact-us">Contact Us</a>
                  </Button>
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </PopoverContent>
        </Popover>

        {/* Desktop Navigation menu - Centered */}
        <div className="absolute left-1/2 -translate-x-1/2 max-md:hidden">
          <NavigationMenu className="bg-white/10 backdrop-blur-md p-1 border-2 border-white/10 rounded-full px-6">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    active={link.active}
                    className={`py-1.5 px-3 font-medium transition-all rounded-md hover:bg-transparent ${
                      link.active
                        ? "text-[#0f1215] bg-[#1f4121] shadow-[0_0_20px_rgba(186,252,12,0.6)]"
                        : "hover:text-[#CFA80F]"
                    }`}
                    href={link.href}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button
          asChild
          className="group relative px-4 py-4 bg-[#CFA80F] shadow-md text-white font-bold rounded-lg 
             hover:bg-[#1f4121] hover:text-white transition-all duration-300 
             flex items-center gap-2 z-10 max-md:hidden"
          size="sm"
          variant="ghost"
        >
          <a href="#contact-us" className="flex items-center gap-2">
            Contact Us
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <SendHorizontal className="w-5 h-5" />
            </span>
          </a>
        </Button>
      </div>
    </header>
  );
}
