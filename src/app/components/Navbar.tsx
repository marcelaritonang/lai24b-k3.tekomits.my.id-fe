"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { User, LogOut, Settings, ChevronDown } from 'lucide-react';

interface NavbarProps {
  showSidebarToggle?: boolean;
  onToggleSidebar?: () => void;
  onGetStartedClick?: () => void;
}

export default function Navbar({
  showSidebarToggle = false,
  onToggleSidebar,
  onGetStartedClick,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();
  const userMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === "/";

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      // You can decode JWT token here or fetch user data from API
      const userData = localStorage.getItem('userData');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredItem(label);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 150);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    setUser(null);
    router.push('/login');
  };

  type NavItem =
    | { label: string; href: string; dropdownItems?: never }
    | { label: string; dropdownItems: { name: string; href: string }[]; href?: never };

  const navItems: NavItem[] = [
    {
      label: "Products",
      dropdownItems: [
        { name: "URL Shortener", href: "/products/url-shortener" },
        { name: "QR Generator", href: "/products/qr-generator" },
        { name: "Link Analytics", href: "/products/link-analytics" },
        { name: "API Access", href: "/products/api-access" },
      ],
    },
    {
      label: "Solutions",
      dropdownItems: [
        { name: "For Enterprise", href: "/solutions/enterprise" },
        { name: "For Marketing", href: "/solutions/marketing" },
        { name: "For Social Media", href: "/solutions/social-media" },
        { name: "For Developers", href: "/solutions/developers" },
      ],
    },
    {
      label: "Resources",
      dropdownItems: [
        { name: "Documentation", href: "/resources/documentation" },
        { name: "Blog", href: "/resources/blog" },
        { name: "Guide", href: "/resources/guide" },
        { name: "API Docs", href: "/resources/api-docs" },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-white shadow-lg"
            : "bg-white"
          : isScrolled
          ? "bg-white shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo and Hamburger */}
          <div className="flex items-center gap-4">
            {showSidebarToggle && (
              <button
                onClick={onToggleSidebar}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <div className="w-6 h-6 flex flex-col justify-center gap-1">
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                </div>
              </button>
            )}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/static/logo.png"
                alt="Lynx Logo"
                className="w-11 h-11 rounded-xl shadow-md"
              />
              <span className="text-2xl font-bold text-[#8B5CF6]">Lynx</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    hoveredItem === item.label
                      ? "text-[#8B5CF6] bg-purple-50"
                      : "text-gray-700 hover:text-[#8B5CF6]"
                  }`}
                >
                  {item.label}
                  {item.dropdownItems && (
                    <span
                      className={`ml-1 text-[10px] transition-transform duration-200 ${
                        hoveredItem === item.label ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  )}
                </button>

                {item.dropdownItems && hoveredItem === item.label && (
                  <div className="absolute left-0 min-w-[200px] mt-1 bg-white rounded-lg shadow-xl border border-gray-100 z-50">
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        href={dropdownItem.href}
                        className="block px-4 py-2.5 text-gray-600 hover:text-[#8B5CF6] hover:bg-purple-50 transition-colors duration-150"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Auth/User Menu */}
          <div className="flex items-center gap-4">
            {user ? (
              // User is logged in
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-medium">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-gray-700 font-medium">{user.name}</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-400 transition-transform duration-200 ${
                      isUserMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-1">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#8B5CF6]"
                    >
                      <User size={16} />
                      Dashboard
                    </Link>
                    <Link
                      href="/settings"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#8B5CF6]"
                    >
                      <Settings size={16} />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // User is not logged in
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-gray-700 hover:text-[#8B5CF6] font-medium"
                >
                  Login
                </Link>
                <button
                  onClick={onGetStartedClick}
                  className="hidden lg:block px-6 py-2 bg-[#8B5CF6] text-white rounded-lg font-medium shadow-md hover:bg-[#7C3AED] transition-colors"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}