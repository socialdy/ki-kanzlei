import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export const NavigationAerzte = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: "Engpässe", href: "/ki-loesungen-aerzte#probleme", hasDropdown: false },
        { label: "Lösungen", href: "/ki-loesungen-aerzte#loesungen", hasDropdown: false },
        { label: "Über uns", href: "/ki-loesungen-aerzte#ueber-uns", hasDropdown: false },
        { label: "Feedback", href: "/ki-loesungen-aerzte#referenzen", hasDropdown: false },
        { label: "FAQ", href: "/ki-loesungen-aerzte#faq", hasDropdown: false },
    ];

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

                        <div className="hidden lg:flex items-center gap-6">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-1 text-base font-normal text-gray-700 hover:text-gray-900 transition-colors"
                                >
                                    {item.label}
                                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                </a>
                            ))}
                        </div>

                        <div className="hidden lg:flex items-center">
                            <Button size="lg" asChild>
                                <a href="/ki-loesungen-aerzte#contact">
                                    Analysegespräch buchen
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
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                        {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                    </a>
                                ))}
                                <div className="pt-4 mt-2 border-t border-gray-200">
                                    <Button size="lg" className="w-full" asChild>
                                        <a href="/ki-loesungen-aerzte#contact">
                                            Analysegespräch buchen
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
