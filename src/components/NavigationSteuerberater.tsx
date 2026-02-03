import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { trackLinkClick, trackCtaClick } from "@/lib/analytics";

export const NavigationSteuerberater = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();
    const menuItems = [
        { label: "Engpässe", href: "/ki-loesungen-steuerberater#probleme" },
        { label: "Lösungen", href: "/ki-loesungen-steuerberater#loesungen" },
        { label: "Über uns", href: "/ki-loesungen-steuerberater#ueber-uns" },
        { label: "Blog", href: "/blog" },
        { label: "Jobs", href: "/jobs" },
    ];

    const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        if (href.includes("#")) {
            const [path, hash] = href.split("#");
            if (location.pathname === path) {
                e.preventDefault();
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                    setIsMenuOpen(false);
                }
            }
        }
    };

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="bg-white rounded-full shadow-lg border border-gray-200/50 backdrop-blur-md max-w-5xl w-full">
                <div className="px-8 py-3">
                    <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8">
                        <div className="flex items-center">
                            <a href="/">
                                <img
                                    src="/img/ki_kanzlei_logo_black.svg"
                                    alt="KI Kanzlei Logo"
                                    className="h-10 w-auto"
                                />
                            </a>
                        </div>

                        <div className="hidden lg:flex items-center gap-2 xl:gap-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    onClick={(e: any) => {
                                        trackLinkClick(item.label, "NavigationSteuerberater");
                                        handleNavClick(item.href, e);
                                    }}
                                    className="flex items-center gap-1 text-[13px] lg:text-[15px] xl:text-base font-normal text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap px-1"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden lg:flex items-center">
                            <Button size="lg" asChild onClick={() => trackCtaClick("Kostenloses Analysegespräch", "NavigationSteuerberater")}>
                                <a href="/ki-loesungen-steuerberater#contact">
                                    Kostenloses Analysegespräch
                                </a>
                            </Button>
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-2xl shadow-xl border border-gray-200/50 backdrop-blur-md">
                        <div className="p-6">
                            <div className="flex flex-col gap-1">
                                {menuItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="flex items-center justify-between px-4 py-3 text-base font-normal text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                                        onClick={(e) => {
                                            handleNavClick(item.href, e);
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                <div className="pt-4 mt-2 border-t border-gray-200">
                                    <Button size="lg" className="w-full" asChild onClick={() => trackCtaClick("Kostenloses Analysegespräch", "NavigationSteuerberaterMobile")}>
                                        <a href="/ki-loesungen-steuerberater#contact">
                                            Kostenloses Analysegespräch
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};
