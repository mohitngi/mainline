"use client"

import React, { JSX, useEffect, useRef, useState } from "react"
import { 
  ChevronDown, 
  Menu, 
  Sunset, 
  BarChart, 
  Shield, 
  Cpu, 
  Rocket, 
  Building2, 
  Users2, 
  FileText, 
  Briefcase, 
  Code, 
  Code2,
  Newspaper,
  Video,
  Users,
  LifeBuoy,
  CreditCard,
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  Zap, 
  Trees
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// TypeScript with React 18+ includes proper JSX types

interface MenuItem {
  title: string
  url: string
  description?: string
  icon?: JSX.Element
  items?: MenuItem[]
}

interface Navbar1Props {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  menu?: MenuItem[]
  mobileExtraLinks?: {
    name: string
    url: string
  }[]
  auth?: {
    login: {
      text: string
      url: string
    }
    signup: {
      text: string
      url: string
    }
  }
}

export const Navbar1 = ({
  logo = {
    url: "#",
    src: "/circular-logo-icon.png",
    alt: "logo",
    title: "Mainline",
  },
  menu = [
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Analytics",
          description: "Data insights & visualization",
          icon: <BarChart className="h-4 w-4" />,
          url: "#"
        },
        {
          title: "Automation",
          description: "Workflow automation",
          icon: <Cpu className="h-4 w-4" />,
          url: "#"
        },
        {
          title: "Security",
          description: "Enterprise protection",
          icon: <Shield className="h-4 w-4" />,
          url: "#"
        },
        {
          title: "Integrations",
          description: "Connect with your tools",
          icon: <Zap className="h-4 w-4" />,
          url: "#"
        },
        {
          title: "API",
          description: "Developer resources",
          icon: <Code2 className="h-4 w-4" />,
          url: "#"
        }
      ]
    },
    {
      title: "Solutions",
      url: "#",
      items: [
        {
          title: "For Startups",
          description: "Scale your business",
          icon: <Rocket className="h-4 w-4" />,
          url: "#"
        },
        {
          title: "For Enterprises",
          description: "Advanced features",
          icon: <Building2 className="h-4 w-4" />,
          url: "#"
        },
        {
          title: "For Teams",
          description: "Collaborate better",
          icon: <Users2 className="h-4 w-4" />,
          url: "#"
        },
        {
          title: "For Agencies",
          description: "Client management",
          icon: <Briefcase className="h-4 w-4" />,
          url: "#"
        },
        {
          title: "For Developers",
          description: "Dev tools & SDKs",
          icon: <Code className="h-4 w-4" />,
          url: "#"
        }
      ]
    },
    { 
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Documentation",
          description: "Guides & API reference",
          icon: <FileText className="h-4 w-4" />,
          url: "#"
        },
        {
          title: "Blog",
          description: "Latest news & updates",
          icon: <Newspaper className="h-4 w-4" />,
          url: "#"
        },
        {
          title: "Webinars",
          description: "Live & recorded sessions",
          icon: <Video className="h-4 w-4" />,
          url: "#"
        },
        {
          title: "Community",
          description: "Join our community",
          icon: <Users className="h-4 w-4" />,
          url: "#"
        },
        {
          title: "Support Center",
          description: "Help & support",
          icon: <LifeBuoy className="h-4 w-4" />,
          url: "#"
        }
      ]
    },
    { 
      title: "Pricing", 
      url: "#pricing"
    },
  ],
  mobileExtraLinks = [
    { name: "About", url: "#" },
    { name: "Privacy", url: "#" },
    { name: "Terms", url: "#" },
  ],
  auth = {
    login: { text: "Login", url: "#" },
    signup: { text: "Start Free Trial", url: "#" },
  },
}: Navbar1Props) => {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [leavingMenu, setLeavingMenu] = useState<string | null>(null);
  const [menuHeight, setMenuHeight] = useState<number | 'auto'>('auto');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  // Track if mouse is over dropdown
  const [isOverDropdown, setIsOverDropdown] = useState(false);
  const leaveTimer = useRef<NodeJS.Timeout | null>(null);

  const handleMenuEnter = (title: string) => {
    // Clear any pending leave timers
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    
    if (activeMenu !== title) {
      setLeavingMenu(activeMenu);
      setActiveMenu(title);
      setMenuHeight('auto');
    }
  };

  const handleMenuLeave = (e: React.MouseEvent) => {
    // Only close if not moving to dropdown content
    const relatedTarget = e.relatedTarget as HTMLElement | null;
    if (!relatedTarget || (relatedTarget.nodeType === Node.ELEMENT_NODE && !(relatedTarget as Element).closest('.dropdown-container'))) {
      leaveTimer.current = setTimeout(() => {
        if (!isOverDropdown) {
          setActiveMenu(null);
        }
      }, 50); // 50ms delay before closing
    }
  };

  const handleDropdownEnter = () => {
    setIsOverDropdown(true);
    // Clear any pending leave timers
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  };

  const handleDropdownLeave = () => {
    setIsOverDropdown(false);
    // Close dropdown after a short delay
    leaveTimer.current = setTimeout(() => {
      setActiveMenu(null);
      leaveTimer.current = null;
    }, 300);
  };

  // Update height when active menu changes
  useEffect(() => {
    if (dropdownRef.current && activeMenu) {
      const height = dropdownRef.current.scrollHeight;
      setMenuHeight(height);
      
      // Reset leaving menu after animation
      const timer = setTimeout(() => {
        setLeavingMenu(null);
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [activeMenu]);

  return (
    <section className="bg-[#FFFBFA] py-2 sm:py-3 mt-4">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 relative">
        <div className="bg-white rounded-full shadow-sm border border-gray-200/50 px-4 sm:px-6 py-2 sm:py-3 relative z-50">
          <nav className="hidden justify-between lg:flex lg:items-center">
            {/* Navigation container */}
            <div className="flex items-center w-full">
              {/* Logo */}
              <a href={logo.url} className="flex items-center gap-2 mr-6 sm:mr-12">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-lg font-semibold text-black">{logo.title}</span>
              </a>
              
              {/* Centered navigation menu */}
              <div className="hidden lg:flex items-center -space-x-1">
                {menu.map((item) => (
                  <div 
                    key={item.title}
                    className="relative h-full group"
                    onMouseEnter={() => item.items && handleMenuEnter(item.title)}
                    onMouseLeave={handleMenuLeave}
                  >
                    {item.items ? (
                      <button 
                        className={`flex items-center h-full gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                          activeMenu === item.title ? 'text-black' : 'text-gray-600 hover:text-black'
                        }`}
                      >
                        {item.title}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    ) : (
                      <a 
                        href={item.url}
                        className="flex items-center h-full gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer text-gray-600 hover:text-black"
                      >
                        {item.title}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Auth buttons - right */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Button asChild variant="ghost" size="sm" className="font-medium text-xs sm:text-sm cursor-pointer px-2 sm:px-3">
                <a href={auth.login.url}>{auth.login.text}</a>
              </Button>
              <Button asChild size="sm" variant="default" className="font-medium text-[11px] sm:text-xs cursor-pointer px-2.5 sm:px-3 h-8">
                <a href={auth.signup.url}>{auth.signup.text}</a>
              </Button>
            </div>
          </nav>

          {/* Mobile navbar layout */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <a href={logo.url} className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-base sm:text-lg font-semibold text-black">{logo.title}</span>
              </a>
              <div className="flex items-center gap-1 sm:gap-2">
                <Button asChild variant="ghost" size="sm" className="hidden xs:inline-flex font-medium text-xs sm:text-sm px-2 sm:px-3">
                  <a href={auth.login.url}>{auth.login.text}</a>
                </Button>
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="lg:hidden">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
                    <div className="flex flex-col h-full">
                      <SheetHeader className="p-6 pb-0">
                        <SheetTitle className="text-left">Menu</SheetTitle>
                      </SheetHeader>
                      <div className="flex-1 p-6 overflow-y-auto">
                        <div className="space-y-4">
                          {menu.map((item) => (
                            <div key={item.title}>
                              {item.items ? (
                                <div>
                                  <button 
                                    onClick={() => toggleSubmenu(item.title)}
                                    className="flex items-center justify-between w-full py-2 text-sm font-medium hover:text-gray-900 cursor-pointer"
                                  >
                                    {item.title}
                                    <ChevronDown 
                                      className={`w-4 h-4 transition-transform ${openSubmenu === item.title ? 'rotate-180' : ''}`} 
                                    />
                                  </button>
                                  {openSubmenu === item.title && (
                                    <div className="pl-4 mt-2 space-y-2">
                                      {item.items.map((subItem) => (
                                        <a
                                          key={subItem.title}
                                          href={subItem.url}
                                          className="flex items-center gap-3 p-2 text-sm rounded-md hover:bg-gray-50 w-full cursor-pointer"
                                        >
                                          {subItem.icon && (
                                            <div className="flex-shrink-0">
                                              {subItem.icon}
                                            </div>
                                          )}
                                          <div>
                                            <div className="font-medium">{subItem.title}</div>
                                            {subItem.description && (
                                              <p className="text-xs text-gray-500">{subItem.description}</p>
                                            )}
                                          </div>
                                        </a>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <a
                                  href={item.url}
                                  className="block py-2 text-sm font-medium hover:text-gray-900 cursor-pointer"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.title}
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="p-6 pt-0 border-t">
                        <div className="space-y-4">
                          <Button asChild className="w-full">
                            <a href={auth.signup.url} onClick={() => setMobileMenuOpen(false)}>
                              {auth.signup.text}
                            </a>
                          </Button>
                          <p className="text-xs text-gray-500 text-center">
                            Already have an account?{' '}
                            <a 
                              href={auth.login.url} 
                              className="text-blue-600 hover:underline"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {auth.login.text}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
          
          {/* Shared Dropdown Panel */}
          <div 
            ref={dropdownRef}
            className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[85%] max-w-2xl bg-white shadow-lg rounded-lg border border-gray-100 transition-all duration-200 ease-in-out transform origin-top dropdown-container ${
              activeMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
            style={{
              height: activeMenu ? menuHeight : 0,
              overflow: 'hidden',
              transition: 'opacity 200ms ease-in-out, transform 200ms ease-in-out, height 200ms ease-in-out',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            {activeMenu && menu.find(m => m.title === activeMenu)?.items && (
              <div className={`transition-opacity duration-200 ${leavingMenu === activeMenu ? 'opacity-0' : 'opacity-100'}`}>
              <div className="p-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-5xl mx-auto">
                  {menu.find(m => m.title === activeMenu)?.items?.map((subItem) => (
                    <a
                      key={subItem.title}
                      href={subItem.url}
                      className="flex items-start gap-2 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group hover:shadow-sm transform hover:-translate-y-0.5"
                    >
                      <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 transform group-hover:scale-110 ${
                        activeMenu?.toLowerCase().includes('pricing') 
                          ? 'bg-blue-50 group-hover:bg-blue-100 text-blue-600 group-hover:text-blue-700' 
                          : 'bg-gray-50 group-hover:bg-gray-100 text-gray-600 group-hover:text-gray-900'
                      }`}>
                        {subItem.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`font-medium ${
                          activeMenu?.toLowerCase().includes('pricing')
                            ? 'text-blue-700 group-hover:text-blue-800'
                            : 'text-gray-900 group-hover:text-black'
                        }`}>
                          {subItem.title}
                        </div>
                        <p className={`text-xs mt-0.5 ${
                          activeMenu?.toLowerCase().includes('pricing')
                            ? 'text-blue-600 group-hover:text-blue-700'
                            : 'text-gray-500 group-hover:text-gray-600'
                        }`}>
                          {subItem.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <a
        key={item.title}
        href={item.url}
        className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-black"
      >
        {item.title}
      </a>
    );
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold">
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (
  item: MenuItem,
  isOpen: boolean,
  toggleSubmenu: (title: string) => void,
  setMobileMenuOpen: (open: boolean) => void
) => {
  if (item.items) {
    return (
      <div key={item.title}>
        <button
          onClick={() => toggleSubmenu(item.title)}
          className="flex items-center justify-between w-full py-2 text-sm font-medium hover:text-gray-900"
        >
          {item.title}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {isOpen && (
          <div className="pl-4 mt-2 space-y-2">
            {item.items.map((subItem) => (
              <a
                key={subItem.title}
                href={subItem.url}
                className="items-center gap-3 p-2 text-sm rounded-md hover:bg-gray-50 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                {subItem.icon && (
                  <div className="flex-shrink-0">
                    {subItem.icon}
                  </div>
                )}
                <div>
                  <div className="font-medium">{subItem.title}</div>
                  {subItem.description && (
                    <p className="text-xs text-gray-500">{subItem.description}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold">
      {item.title}
    </a>
  )
}

// Export as default
export default Navbar1;
