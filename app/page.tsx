'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  MapPin, 
  Coffee, 
  Utensils, 
  Wine, 
  Mail, 
  Phone, 
  Clock, 
  ArrowRight, 
  Search, 
  Check,
  Star,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Plus,
  Trash2,
  Edit3,
  RotateCcw,
  ShieldCheck,
  Map,
  Menu,
  Navigation,
  Car,
  X,
  Sparkles,
  Heart,
  BookOpen,
  Calendar,
  User,
  Upload,
  FileText,
  ArrowLeft,
  Lock,
  LogOut
} from 'lucide-react';
import { HOTEL_MENU, MenuItem } from '@/lib/menuData';
import { BlogPost, INITIAL_BLOGS } from '@/lib/blogData';

function VardhhanLogo({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 500 500" 
      className={`${className} select-none`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Green Ring */}
      <circle cx="250" cy="250" r="235" stroke="#0B4224" strokeWidth="10" />
      <circle cx="250" cy="250" r="230" stroke="#0B4224" strokeWidth="2" />
      
      {/* Inner Elegant Gold Ring */}
      <circle cx="250" cy="250" r="220" stroke="#C5A880" strokeWidth="3" />
      <circle cx="250" cy="250" r="215" stroke="#C5A880" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Chef Hat at the top inside the ring */}
      <g id="chef-hat" transform="translate(0, -5)">
        <path 
          d="M205,95 C195,95 190,80 200,60 C210,40 230,35 250,45 C270,35 290,40 300,60 C310,80 305,95 295,95 Z" 
          fill="#FAF9F5" 
          stroke="#C5A880" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path d="M228,85 C228,65 235,55 240,50" stroke="#C5A880" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M250,90 C250,70 255,55 256,48" stroke="#C5A880" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M272,85 C272,65 265,55 260,50" stroke="#C5A880" strokeWidth="2.5" strokeLinecap="round" />
        
        <path 
          d="M203,90 L297,90 L292,105 L208,105 Z" 
          fill="#0B4224" 
          stroke="#C5A880" 
          strokeWidth="3.5" 
          strokeLinejoin="round" 
        />
      </g>
      
      {/* Big Central 'V' */}
      <g id="letter-v" transform="translate(0, 5)">
        <path 
          d="M140,115 L215,115 L260,305 L230,305 Z" 
          fill="#0B4224" 
        />
        <path 
          d="M192,115 L208,115 L252,295 L242,295 Z" 
          fill="#C5A880" 
        />
        <path 
          d="M360,115 L285,115 L230,305 L260,305 Z" 
          fill="#0B4224" 
        />
        
        <path 
          d="M245,296 C270,250 310,210 370,170" 
          stroke="#0B4224" 
          strokeWidth="6" 
          strokeLinecap="round" 
        />
        <path 
          d="M290,260 C290,260 330,230 380,150 C380,150 365,200 320,240 Z" 
          fill="#0B4224" 
          stroke="#C5A880" 
          strokeWidth="2.5"
        />
        <path d="M315,225 Q335,205 365,175" stroke="#FAF9F5" strokeWidth="2" strokeLinecap="round" />

        <path 
          d="M272,284 C272,284 315,280 375,230 C375,230 350,285 295,294 Z" 
          fill="#0B4224" 
          stroke="#C5A880" 
          strokeWidth="2.5"
        />
        <path d="M295,280 Q325,270 355,250" stroke="#FAF9F5" strokeWidth="2" strokeLinecap="round" />
      </g>
      
      <path 
        d="M130,305 C200,312 300,312 370,305" 
        stroke="#0B4224" 
        strokeWidth="4" 
        strokeLinecap="round" 
      />

      <text 
        x="250" 
        y="360" 
        fill="#0B4224" 
        fontFamily="serif" 
        fontSize="52" 
        fontWeight="800" 
        letterSpacing="6" 
        textAnchor="middle"
      >
        VARDHHAN
      </text>
      
      <line x1="110" y1="388" x2="160" y2="388" stroke="#C5A880" strokeWidth="3" strokeLinecap="round" />
      <text 
        x="250" 
        y="396" 
        fill="#C5A880" 
        fontFamily="serif" 
        fontSize="24" 
        fontWeight="bold" 
        letterSpacing="8" 
        textAnchor="middle"
      >
        HOTEL
      </text>
      <line x1="340" y1="388" x2="390" y2="388" stroke="#C5A880" strokeWidth="3" strokeLinecap="round" />

      <g id="bottom-sprout" transform="translate(0, 10)">
        <path d="M250,420 C245,410 248,395 250,392 C252,395 255,410 250,420 Z" fill="#0B4224" />
        <path d="M250,420 C240,418 228,410 226,404 C232,403 243,412 250,420 Z" fill="#0B4224" />
        <path d="M250,420 C260,418 272,410 274,404 C268,403 257,412 250,420 Z" fill="#0B4224" />
        <circle cx="218" cy="415" r="3" fill="#0B4224" />
        <circle cx="282" cy="415" r="3" fill="#0B4224" />
      </g>
      
      <path 
        d="M150,424 C190,442 310,442 350,424" 
        fill="none" 
        stroke="#0B4224" 
        strokeWidth="32" 
        strokeLinecap="round" />
      <path 
        id="path-vegetarian" 
        d="M156,423 C192,440 308,440 344,423" 
        fill="none" />
      <text fill="#FAF9F5">
        <textPath href="#path-vegetarian" startOffset="50%" textAnchor="middle" fontSize="18" fontWeight="bold" letterSpacing="4">
          VEGETARIAN
        </textPath>
      </text>
    </svg>
  );
}

interface CarouselImage {
  url: string;
  title: string;
  subtitle: string;
}

function PageCarousel({ images, heightClass = 'h-[250px] sm:h-[350px] md:h-[420px]' }: { images: CarouselImage[], heightClass?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative w-full ${heightClass} rounded-lg overflow-hidden group border border-[#E7E2D8] bg-[#FAF9F5] shadow-sm`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Main Image */}
          <img 
            src={images[currentIndex].url} 
            alt={images[currentIndex].title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Warm Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
          
          {/* Captions Text with fade-up transition */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left text-white max-w-3xl z-10 space-y-1.5 md:space-y-2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="inline-block text-[9px] md:text-xs font-semibold tracking-[0.25em] text-[#C5A880] uppercase"
            >
              Vardhhan Sanctuary Experience
            </motion.span>
            <motion.h4 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight"
            >
              {images[currentIndex].title}
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="text-[11px] sm:text-xs md:text-sm text-[#FAF6EE]/80 max-w-xl font-light"
            >
              {images[currentIndex].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-[#FAF9F5]/90 hover:text-[#0B4224] text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-md z-20 cursor-pointer border border-white/10 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous Slide"
      >
        <span className="text-sm font-semibold">←</span>
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-[#FAF9F5]/90 hover:text-[#0B4224] text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-md z-20 cursor-pointer border border-white/10 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next Slide"
      >
        <span className="text-sm font-semibold">→</span>
      </button>

      {/* Progress Dots / Bars */}
      <div className="absolute bottom-4 right-6 flex gap-1.5 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
              idx === currentIndex 
                ? 'w-5 sm:w-7 bg-[#C5A880]' 
                : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'menu' | 'blog' | 'contact' | 'reviews' | 'admin'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Blog states
  const [blogs, setBlogs] = useState<BlogPost[]>(INITIAL_BLOGS);
  const [activeBlogCategory, setActiveBlogCategory] = useState<'All' | 'Gastronomy' | 'Wellness' | 'Heritage' | 'Behind the Scenes'>('All');
  const [blogSearchQuery, setBlogSearchQuery] = useState('');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [selectedPolicy, setSelectedPolicy] = useState<'privacy' | 'terms' | 'cookies' | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  // Administrative Form & Action Error States
  const [adminFormError, setAdminFormError] = useState('');
  const [customConfirm, setCustomConfirm] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    isDangerous?: boolean;
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: '',
    message: '',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    isDangerous: false,
    onConfirm: () => {},
  });

  // Admin Login security states
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Hydrate admin authentication on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedIn = localStorage.getItem('vardhhan_admin_logged_in') === 'true';
      if (loggedIn) {
        setTimeout(() => {
          setIsAdminLoggedIn(true);
        }, 0);
      }
    }
  }, []);

  // Blog carousels
  const blogCarouselImages = [
    {
      url: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1600&auto=format&fit=crop&q=80",
      title: "Traditional Indian Spice Chronicles",
      subtitle: "A deep dive into how ancient mill-stone grinding preserves pure digestive oils and natural colors."
    },
    {
      url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1600&auto=format&fit=crop&q=80",
      title: "Nourishing Wellness of Shakahari",
      subtitle: "Discover how plant-based diets, pure Gir cow ghee, and fresh organic herbs elevate body and mind."
    },
    {
      url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=1600&auto=format&fit=crop&q=80",
      title: "Signature Festive Banquets & Platters",
      subtitle: "Behind the scenes of compiling our majestic royal Indian feast with curated subzis and naans."
    }
  ];

  const homeCarouselImages = [
    {
      url: "https://images.unsplash.com/photo-1589301760014-d571583d3ce1?w=1600&auto=format&fit=crop&q=80",
      title: "Royal Shakahari Dining Celebration",
      subtitle: "Experience the ultimate collection of authentic vegetarian delicacies crafted with secret hand-ground spices."
    },
    {
      url: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=1600&auto=format&fit=crop&q=80",
      title: "Rich Gourmet Paneer Specialties",
      subtitle: "Our clay-oven cottage cheese melts in your mouth, bathed in luxurious tomato-cashew gravies and fresh coriander."
    },
    {
      url: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=1600&auto=format&fit=crop&q=80",
      title: "Crispy Modern North & South Indian Starters",
      subtitle: "From golden crisped samosas to airy hot vadas, dive into a sensory symphony of textures and vibrant mint chutneys."
    }
  ];

  const aboutCarouselImages = [
    {
      url: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1600&auto=format&fit=crop&q=80",
      title: "Rooted in Authentic Traditional Spices",
      subtitle: "Vardhhan Hotel bridges pure ingredients and deep-rooted hospitality with premium comfortable modern dining."
    },
    {
      url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1600&auto=format&fit=crop&q=80",
      title: "Primal Organic Garden-to-Plate Standards",
      subtitle: "We prioritize raw organic harvests, clean air, green foliage, and natural environments promoting wellness."
    },
    {
      url: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1600&auto=format&fit=crop&q=80",
      title: "Sophisticated Handcrafted Plating Artistry",
      subtitle: "Every dish is curated on sleek dinnerware under beautiful warm lighting to soothe the senses."
    }
  ];

  const menuCarouselImages = [
    {
      url: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1600&auto=format&fit=crop&q=80",
      title: "Royal South Indian Crispy Masala Dosa",
      subtitle: "Savor our legendary thin golden crêpe, generously filled with spiced potato masala and served with traditional sambar and coconut dips."
    },
    {
      url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1600&auto=format&fit=crop&q=80",
      title: "Sizzling Gourmet Clay-Oven Paneer Tikka",
      subtitle: "Gently charred premium cottage cheese marinated in stone-ground mustard oil, rich hung herd yogurt, and a blend of hand-pounded spices."
    },
    {
      url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=1600&auto=format&fit=crop&q=80",
      title: "Slow-Cooked Royal Vegetable Dum Biryani",
      subtitle: "Layers of highly fragrant long-grain basmati rice, pristine saffron milk, caramelized shallots, and fresh garden vegetables."
    },
    {
      url: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=1600&auto=format&fit=crop&q=80",
      title: "Vardhhan Signature Shakahari Thali Platter",
      subtitle: "A majestic feast honoring royal Indian traditions: includes fresh house-made subzis, dynamic dal fry, butter naan, and sweet gulab jamuns."
    }
  ];

  const reviewsCarouselImages = [
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&q=80",
      title: "Warm Well-being & Heartfelt Welcomes",
      subtitle: "Guests enjoy pristine tables nested in a refined, beautifully-lit dining sanctuary."
    },
    {
      url: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=1600&auto=format&fit=crop&q=80",
      title: "Refreshing Cold Press & Herbal Infusions",
      subtitle: "Relish healthy handcrafted fruit elixirs and cardamom smoothies under elegant glass arches."
    },
    {
      url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1600&auto=format&fit=crop&q=80",
      title: "Stellar Traditional Indian Desserts",
      subtitle: "Satisfy your palate with signature sweets and premium saffron kheer plated perfectly for our guests."
    }
  ];

  const contactCarouselImages = [
    {
      url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&auto=format&fit=crop&q=80",
      title: "Vardhhan Grand Banquets & Hall Space",
      subtitle: "Plan intimate family gatherings, corporate receptions, or private traditional celebrations with gourmet vegetarian catering."
    },
    {
      url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1600&auto=format&fit=crop&q=80",
      title: "Primate Booking Receptions on Gokul Road",
      subtitle: "Enjoy premium booth reservation, quiet privacy partitions, and personal call-service direct from our desk."
    },
    {
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600&auto=format&fit=crop&q=80",
      title: "Aromatic Fireplace Atrium Gatherings",
      subtitle: "Coordinate transport services and custom seating layouts directly through our 24h concierge."
    }
  ];

  const adminCarouselImages = [
    {
      url: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=1600&auto=format&fit=crop&q=80",
      title: "Pristine Culinary Ingredients Control",
      subtitle: "Oversee fresh whole spices, local farm herbs, organic seasonings, and update active recipe definitions."
    },
    {
      url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1600&auto=format&fit=crop&q=80",
      title: "Chef Command and Menu Registration",
      subtitle: "Quickly manage pricing structures, adjust dietitian tags, add kitchen specials, or clear client logs."
    }
  ];

  // Load custom menu items from local storage if available
  const [menuItems, setMenuItems] = useState<MenuItem[]>(HOTEL_MENU);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMenu = localStorage.getItem('lhorizon_menu_items');
      if (savedMenu) {
        try {
          const parsed = JSON.parse(savedMenu);
          if (Array.isArray(parsed) && parsed.length > 0) {
            // Merge to ensure default items have modern images if missing
            const merged = parsed.map((item: any) => {
              const defaultItem = HOTEL_MENU.find(def => def.id === item.id);
              if (defaultItem && !item.image) {
                return { ...item, image: defaultItem.image };
              }
              return item;
            });
            setTimeout(() => {
              setMenuItems(merged);
            }, 0);
          }
        } catch (e) {
          console.error("Failed to parse menu items from storage", e);
        }
      }
    }
  }, []);

  const saveMenuState = (newMenu: MenuItem[]) => {
    setMenuItems(newMenu);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lhorizon_menu_items', JSON.stringify(newMenu));
    }
  };

  // Load custom blogs if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedBlogs = localStorage.getItem('vardhhan_blog_posts');
      if (savedBlogs) {
        try {
          const parsed = JSON.parse(savedBlogs);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setTimeout(() => {
              setBlogs(parsed);
            }, 0);
          }
        } catch (e) {
          console.error("Failed to parse blog posts from storage", e);
        }
      }
    }
  }, []);

  const saveBlogsState = (newBlogs: BlogPost[]) => {
    setBlogs(newBlogs);
    if (typeof window !== 'undefined') {
      localStorage.setItem('vardhhan_blog_posts', JSON.stringify(newBlogs));
    }
  };

  // Admin Blog CRUD states
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [blogForm, setBlogForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Gastronomy' as 'Gastronomy' | 'Wellness' | 'Heritage' | 'Behind the Scenes',
    image: '',
    author: 'Chef Vardhhan'
  });
  const [blogAdminSearch, setBlogAdminSearch] = useState('');
  const [blogImageUploadError, setBlogImageUploadError] = useState('');
  const [blogSuccessMessage, setBlogSuccessMessage] = useState('');
  const [activeAdminSubTab, setActiveAdminSubTab] = useState<'menu' | 'blog'>('menu');

  const startEditBlogPost = (post: BlogPost) => {
    setEditingBlogId(post.id);
    setBlogForm({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      image: post.image,
      author: post.author
    });
    setBlogImageUploadError('');
  };

  const cancelEditBlogPost = () => {
    setEditingBlogId(null);
    setBlogForm({
      title: '',
      excerpt: '',
      content: '',
      category: 'Gastronomy',
      image: '',
      author: 'Chef Vardhhan'
    });
    setBlogImageUploadError('');
  };

  const handleCreateOrUpdateBlogPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title.trim()) return;

    if (editingBlogId) {
      const updatedBlogs = blogs.map(item => {
        if (item.id === editingBlogId) {
          return {
            ...item,
            title: blogForm.title.trim(),
            excerpt: blogForm.excerpt.trim(),
            content: blogForm.content.trim(),
            category: blogForm.category,
            image: blogForm.image.trim() || 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1200',
            author: blogForm.author.trim() || 'Chef Vardhhan'
          };
        }
        return item;
      });
      saveBlogsState(updatedBlogs);
      setBlogSuccessMessage('Blog chronicle updated successfully.');
      cancelEditBlogPost();
    } else {
      const newPost: BlogPost = {
        id: 'post-' + Date.now(),
        title: blogForm.title.trim(),
        excerpt: blogForm.excerpt.trim(),
        content: blogForm.content.trim(),
        category: blogForm.category,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        readTime: Math.max(1, Math.ceil(blogForm.content.trim().split(/\s+/).length / 200)) + ' min read',
        image: blogForm.image.trim() || 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1200',
        author: blogForm.author.trim() || 'Chef Vardhhan'
      };
      saveBlogsState([newPost, ...blogs]);
      setBlogSuccessMessage('Blog chronicle posted successfully.');
      cancelEditBlogPost();
    }
    setTimeout(() => setBlogSuccessMessage(''), 4000);
  };

  const handleDeleteBlogPost = (id: string) => {
    setCustomConfirm({
      isOpen: true,
      title: 'Remove Chronicle Entry',
      message: 'Are you sure you want to permanently remove this blog post? This action cannot be reversed.',
      confirmText: 'Remove Entry',
      cancelText: 'Keep Entry',
      isDangerous: true,
      onConfirm: () => {
        const updatedBlogs = blogs.filter(item => item.id !== id);
        saveBlogsState(updatedBlogs);
        setBlogSuccessMessage('Blog chronicle removed successfully.');
        if (editingBlogId === id) {
          cancelEditBlogPost();
        }
        setTimeout(() => setBlogSuccessMessage(''), 4000);
        setCustomConfirm(prev => ({ ...prev, isOpen: false }));
      }
    });
  };

  const handleResetToDefaultBlogs = () => {
    setCustomConfirm({
      isOpen: true,
      title: 'Restore Default Chronicles',
      message: 'Are you sure you want to restore all heirloom blog chronicles to defaults? This will overwrite your current custom posts.',
      confirmText: 'Restore Defaults',
      cancelText: 'Cancel',
      isDangerous: true,
      onConfirm: () => {
        saveBlogsState(INITIAL_BLOGS);
        setBlogSuccessMessage('Blog chronicles successfully restored to defaults.');
        cancelEditBlogPost();
        setTimeout(() => setBlogSuccessMessage(''), 4000);
        setCustomConfirm(prev => ({ ...prev, isOpen: false }));
      }
    });
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginUsername.trim().toLowerCase() === 'admin' && loginPassword === 'admin') {
      setIsAdminLoggedIn(true);
      setLoginError('');
      if (typeof window !== 'undefined') {
        localStorage.setItem('vardhhan_admin_logged_in', 'true');
      }
      setAdminSuccessMessage('Welcome back, Chief Steward. Authorized console loaded.');
      setLoginUsername('');
      setLoginPassword('');
      setTimeout(() => setAdminSuccessMessage(''), 4000);
    } else {
      setLoginError('Invalid administrative credentials. Access denied.');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('vardhhan_admin_logged_in');
    }
  };

  // Admin CRUD states
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [adminForm, setAdminForm] = useState({
    name: '',
    description: '',
    price: '',
    category: 'breakfast' as 'breakfast' | 'lunch-dinner' | 'drinks' | 'desserts',
    tagsString: '',
    pairing: '',
    image: '',
    isChefSpecial: false
  });
  const [adminSuccessMessage, setAdminSuccessMessage] = useState<string>('');

  // Reviews state
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Eleanor Vance',
      rating: 5,
      date: 'May 12, 2026',
      content: 'An absolute masterpiece of quiet hospitality. Sipping pristine green tea in the lush properties of Hubballi while watching the sunset was an experience I will cherish forever. The vegetarian dining was exquisite.',
    },
    {
      id: 2,
      name: 'Marcus Brody',
      rating: 5,
      date: 'April 28, 2026',
      content: 'If you want to truly disconnect and find sanctuary, Vardhhan Hotel is the place. The aesthetic is clean and minimal, the staff are attentive yet completely unobtrusive. Will return every spring.',
    },
    {
      id: 3,
      name: 'Sarah Jenkins',
      rating: 4,
      date: 'March 15, 2026',
      content: 'Beautifully framed views and stunning garden pathways. We spent hours in the wellness lounge savoring authentic hand-ground filter coffee and classical sitar tunes. A perfect, tranquil weekend.',
    }
  ]);
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, content: '' });
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);

  // Menu specific states
  const [menuSubTab, setMenuSubTab] = useState<'all' | 'breakfast' | 'lunch-dinner' | 'drinks' | 'desserts'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Contact Form states
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Location Hub states
  const [activeLocationTab, setActiveLocationTab] = useState<'map' | 'landmarks' | 'directions'>('map');
  const [selectedLandmark, setSelectedLandmark] = useState<'bixby' | 'pfeiffer' | 'mcway' | 'pointsur'>('bixby');

  // Interactive Overlays & Hover-Click states
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [selectedSanctuary, setSelectedSanctuary] = useState<'lodging' | 'bistro' | 'reserves' | null>(null);
  const [selectedPrinciple, setSelectedPrinciple] = useState<'stewardship' | 'authenticity' | 'stillness' | null>(null);
  const [selectedReview, setSelectedReview] = useState<{ id: number; name: string; rating: number; date: string; content: string } | null>(null);
  const [selectedMetric, setSelectedMetric] = useState<'views' | 'concierge' | null>(null);
  const [selectedDirection, setSelectedDirection] = useState<'monterey' | 'sfo' | 'advisory' | null>(null);

  // States for pre-order customize options inside menu detail
  const [customDairy, setCustomDairy] = useState(false);
  const [customGluten, setCustomGluten] = useState(false);
  const [customNote, setCustomNote] = useState('');
  const [isPreordered, setIsPreordered] = useState(false);

  // Filter Menu Items based on selected subcategory and search query
  const filteredMenuItems = useMemo(() => {
    return menuItems.filter(item => {
      if (menuSubTab !== 'all' && item.category !== menuSubTab) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [menuItems, menuSubTab, searchQuery]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      setIsSubmitted(true);
    }
  };

  const resetContactForm = () => {
    setContactForm({ name: '', email: '', message: '' });
    setIsSubmitted(false);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewForm.name && reviewForm.content) {
      setReviews((prev) => [
        {
          id: Date.now(),
          name: reviewForm.name,
          rating: reviewForm.rating,
          date: 'Just now',
          content: reviewForm.content,
        },
        ...prev,
      ]);
      setIsReviewSubmitted(true);
    }
  };

  const handleAdminFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminForm.name || !adminForm.description || !adminForm.price) {
      setAdminFormError("Please provide a valid dish title, description, and price.");
      return;
    }
    setAdminFormError('');

    const tagsArray = adminForm.tagsString
      .split(',')
      .map(t => t.trim())
      .filter(t => t !== '');

    if (editingItemId) {
      // Edit mode
      const updatedList = menuItems.map(item => {
        if (item.id === editingItemId) {
          return {
            ...item,
            name: adminForm.name,
            description: adminForm.description,
            price: Number(adminForm.price),
            category: adminForm.category,
            tags: tagsArray,
            pairing: adminForm.pairing || undefined,
            image: adminForm.image || undefined,
            isChefSpecial: adminForm.isChefSpecial
          };
        }
        return item;
      });
      saveMenuState(updatedList);
      setAdminSuccessMessage(`"${adminForm.name}" has been updated successfully.`);
      setEditingItemId(null);
    } else {
      // Create mode
      const newItem: MenuItem = {
        id: 'user-' + Date.now(),
        name: adminForm.name,
        description: adminForm.description,
        price: Number(adminForm.price),
        category: adminForm.category,
        tags: tagsArray,
        pairing: adminForm.pairing || undefined,
        image: adminForm.image || undefined,
        isChefSpecial: adminForm.isChefSpecial
      };
      
      const updatedList = [newItem, ...menuItems];
      saveMenuState(updatedList);
      setAdminSuccessMessage(`"${adminForm.name}" was added to the menu.`);
    }

    // Reset Form
    setAdminForm({
      name: '',
      description: '',
      price: '',
      category: 'breakfast',
      tagsString: '',
      pairing: '',
      image: '',
      isChefSpecial: false
    });

    // Auto-clear success message
    setTimeout(() => {
      setAdminSuccessMessage('');
    }, 4500);
  };

  const startEditMenuItem = (item: MenuItem) => {
    setAdminFormError('');
    setEditingItemId(item.id);
    setAdminForm({
      name: item.name,
      description: item.description,
      price: String(item.price),
      category: item.category,
      tagsString: item.tags.join(', '),
      pairing: item.pairing || '',
      image: item.image || '',
      isChefSpecial: !!item.isChefSpecial
    });
  };

  const cancelEditMenuItem = () => {
    setEditingItemId(null);
    setAdminFormError('');
    setAdminForm({
      name: '',
      description: '',
      price: '',
      category: 'breakfast',
      tagsString: '',
      pairing: '',
      image: '',
      isChefSpecial: false
    });
  };

  const deleteMenuItem = (id: string, name: string) => {
    setCustomConfirm({
      isOpen: true,
      title: 'Remove Menu Dish',
      message: `Are you sure you want to permanently remove "${name}" from the live bistro menu?`,
      confirmText: 'Remove Dish',
      cancelText: 'Keep Dish',
      isDangerous: true,
      onConfirm: () => {
        const remaining = menuItems.filter(item => item.id !== id);
        saveMenuState(remaining);
        setAdminSuccessMessage(`"${name}" has been removed.`);
        if (editingItemId === id) {
          cancelEditMenuItem();
        }
        setTimeout(() => setAdminSuccessMessage(''), 4000);
        setCustomConfirm(prev => ({ ...prev, isOpen: false }));
      }
    });
  };

  const handleResetToDefaultMenu = () => {
    setCustomConfirm({
      isOpen: true,
      title: 'Restore Default Bistro Menu',
      message: 'Are you sure you want to restore the bistro menu to its original heirloom items list? This will overwrite your current custom changes.',
      confirmText: 'Restore Defaults',
      cancelText: 'Cancel',
      isDangerous: true,
      onConfirm: () => {
        saveMenuState(HOTEL_MENU);
        setAdminSuccessMessage('Bistro menu successfully restored to defaults.');
        cancelEditMenuItem();
        setTimeout(() => setAdminSuccessMessage(''), 4000);
        setCustomConfirm(prev => ({ ...prev, isOpen: false }));
      }
    });
  };

  return (
    <div id="hotel-app" className="min-h-screen flex flex-col justify-between bg-[#FAF9F5] text-[#1C1917] selection:bg-[#EAE5D9]">
      
      {/* HEADER NAVIGATION */}
      <header id="app-header" className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#EAE5D9]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <div 
            id="brand-logo" 
            onClick={() => setActiveTab('home')} 
            className="group cursor-pointer flex items-center gap-3 transition-transform"
          >
            <VardhhanLogo className="w-12 h-12 group-hover:scale-105 transition-transform duration-300" />
            <div>
              <h1 className="font-serif text-sm sm:text-base md:text-xl font-extrabold tracking-wide text-[#0B4224] group-hover:text-[#C5A880] transition-colors">
                Vardhhan Hotel
              </h1>
              <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#8C8375] font-sans">
                Pure Vegetarian & Suites
              </p>
            </div>
          </div>

          <nav id="main-navigation" className="hidden md:flex items-center gap-1 sm:gap-2">
            {(['home', 'about', 'menu', 'reviews', 'contact', 'admin'] as const).map((tab) => (
              <button
                id={`nav-${tab}`}
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === 'contact') setIsSubmitted(false);
                }}
                className={`relative px-4 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors duration-300 cursor-pointer ${
                  activeTab === tab 
                    ? 'text-[#FAF9F5]' 
                    : 'text-[#60564C] hover:text-[#0B4224]'
                }`}
              >
                <span className="relative z-10">
                  {tab === 'about' ? 'About Us' : tab === 'contact' ? 'Contact Us' : tab === 'admin' ? 'Admin Panel' : tab}
                </span>
                {activeTab === tab && (
                  <motion.span 
                    layoutId="header-active-pill"
                    className="absolute inset-0 bg-[#0B4224] rounded-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                {activeTab === tab && (
                  <motion.span 
                    layoutId="header-active-line"
                    className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#C5A880]"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden p-2 text-[#60564C] hover:text-[#0B4224] hover:bg-[#EAE5D9]/40 rounded-sm transition-all focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 shrink-0" />
            ) : (
              <Menu className="w-5 h-5 shrink-0" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              id="mobile-navigation" 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden border-t border-[#EAE5D9]/70 bg-[#FAF9F5] px-6 py-4 flex flex-col gap-1.5 overflow-hidden"
            >
              {(['home', 'about', 'menu', 'reviews', 'contact', 'admin'] as const).map((tab) => (
                <button
                  id={`mobile-nav-${tab}`}
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMobileMenuOpen(false);
                    if (tab === 'contact') setIsSubmitted(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-150 ${
                    activeTab === tab 
                      ? 'bg-[#0B4224] text-[#FAF9F5]' 
                      : 'text-[#60564C] hover:text-[#0B4224] hover:bg-[#EAE5D9]/40'
                  }`}
                >
                  {tab === 'about' ? 'About Us' : tab === 'contact' ? 'Contact Us' : tab === 'admin' ? 'Admin Panel' : tab}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN CONTAINER */}
      <main id="main-content" className="flex-grow py-12 px-6 max-w-6xl w-full mx-auto">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: HOME */}
          {activeTab === 'home' && (
            <motion.div
              id="home-tab"
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {/* BRAND IMAGE CAROUSEL */}
              <PageCarousel images={homeCarouselImages} />

              {/* HERO SECTION */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A880]">
                      Gokul Road, Hubballi
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight text-[#0B4224]">
                      A Serene Escape of Pure Comfort
                    </h2>
                  </div>
                  <p className="text-sm text-[#60564C] leading-relaxed">
                    Perched gently in the vibrant heart of Hubballi, Vardhhan Hotel blends timeless elegance with pristine local hospitality. Recharge in our luxury suites, savor hand-crafted, exclusively 100% vegetarian culinary masterpieces at our dining hall, and find complete peace.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      id="hero-to-menu-btn"
                      onClick={() => {
                        setActiveTab('menu');
                        setMenuSubTab('all');
                      }}
                      className="bg-[#0B4224] text-[#FAF9F5] hover:bg-[#C5A880] text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors cursor-pointer flex items-center gap-2 group"
                    >
                      Explore Our Menu
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button
                      id="hero-to-contact-btn"
                      onClick={() => setActiveTab('contact')}
                      className="border border-[#E7E2D8] text-[#0B4224] hover:bg-[#FAF6EE] text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors cursor-pointer"
                    >
                      Plan Your Visit
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative aspect-[16/10] w-full rounded-md overflow-hidden shadow-md group border border-[#E7E2D8] bg-[#FAF9F5]"
                  >
                    {/* Scenic clifftop bistro dining layout */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />
                    <img 
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80" 
                      alt="Elegant bistro dining space at Vardhhan Hotel" 
                      className="object-cover w-full h-full transition-transform duration-700 scale-100 group-hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-5 left-5 z-20 text-white space-y-1 text-left">
                      <p className="font-serif text-lg font-bold">Vardhhan Shakahari Kitchen</p>
                      <p className="text-[10px] uppercase tracking-widest text-[#FAF6EE]/90">Exquisite Vegetarian Cuisine</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* THREE CORE SANCTUARIES */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.12
                    }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6"
              >
                
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 35 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                  }}
                  whileHover={{ y: -6, scale: 1.02, borderColor: '#C5A880', boxShadow: '0 12px 30px rgba(197, 168, 128, 0.12)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedSanctuary('lodging')}
                  className="bg-white p-8 rounded-lg border border-[#E7E2D8] space-y-4 cursor-pointer transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FAF6EE] text-[#C5A880] flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#C5A880] transition-colors">AC Comfort Rooms</h3>
                  <p className="text-xs text-[#60564C] leading-relaxed">
                    Designed to provide ultimate relaxation, our premium air-conditioned (AC) comfort rooms and suite sanctuaries feature scenic garden views, dual design balconies, and personalized climate settings.
                  </p>
                  <div className="text-[10px] uppercase font-bold text-[#C5A880] flex items-center gap-1 pt-1">
                    Read More <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </motion.div>

                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 35 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                  }}
                  whileHover={{ y: -6, scale: 1.02, borderColor: '#C5A880', boxShadow: '0 12px 30px rgba(197, 168, 128, 0.12)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedSanctuary('bistro')}
                  className="bg-white p-8 rounded-lg border border-[#E7E2D8] space-y-4 cursor-pointer transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FAF6EE] text-[#C5A880] flex items-center justify-center">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#C5A880] transition-colors">Shakahari Kitchens</h3>
                  <p className="text-xs text-[#60564C] leading-relaxed">
                    Our pure vegetarian kitchens prioritize local organic producers, transforming regional ingredients into seasonal culinary masterpieces enriched with traditional wood-pressed oils.
                  </p>
                  <div className="text-[10px] uppercase font-bold text-[#C5A880] flex items-center gap-1 pt-1">
                    Read More <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </motion.div>

                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 35 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                  }}
                  whileHover={{ y: -6, scale: 1.02, borderColor: '#C5A880', boxShadow: '0 12px 30px rgba(197, 168, 128, 0.12)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedSanctuary('reserves')}
                  className="bg-white p-8 rounded-lg border border-[#E7E2D8] space-y-4 cursor-pointer transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FAF6EE] text-[#C5A880] flex items-center justify-center">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#C5A880] transition-colors">Sattvic Elixirs</h3>
                  <p className="text-xs text-[#60564C] leading-relaxed">
                    Unwind at our tea and beverage pavilion. Enjoy custom cooling lassis, traditional South Indian filter coffee, and hand-brewed organic wellness infusions.
                  </p>
                  <div className="text-[10px] uppercase font-bold text-[#C5A880] flex items-center gap-1 pt-1">
                    Read More <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </motion.div>

              </motion.div>

              {/* SIMPLE HIGHLIGHTS BANNER */}
              <div className="bg-white rounded-lg border border-[#E7E2D8] p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#C5A880]">The Guest Experience</span>
                  <h3 className="font-serif text-2xl font-bold text-left">Uncompromising Simplicity</h3>
                  <p className="text-xs text-[#60564C] leading-relaxed text-left">
                    Whether sitting in our peaceful dining hall savoring traditional North Karnataka flavors or relaxing with cooling herbal elixirs in our lush green gardens, every detail focuses on luxury, stillness, and comfort.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2, borderColor: '#C5A880', boxShadow: '0 8px 20px rgba(197, 168, 128, 0.08)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedMetric('views')}
                    className="p-4 bg-[#FAF6EE] rounded border border-[#EAE5D9] cursor-pointer transition-all"
                  >
                    <p className="font-serif text-3xl font-bold text-[#1C1917]">100%</p>
                    <p className="text-[9px] uppercase tracking-wider text-[#8C8375] font-semibold mt-1">Scenic Garden Views</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2, borderColor: '#C5A880', boxShadow: '0 8px 20px rgba(197, 168, 128, 0.08)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedMetric('concierge')}
                    className="p-4 bg-[#FAF6EE] rounded border border-[#EAE5D9] cursor-pointer transition-all"
                  >
                    <p className="font-serif text-3xl font-bold text-[#1C1917]">24h</p>
                    <p className="text-[9px] uppercase tracking-wider text-[#8C8375] font-semibold mt-1">Concierge Direct</p>
                  </motion.div>
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 2: ABOUT US */}
          {activeTab === 'about' && (
            <motion.div
              id="about-tab"
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12 max-w-4xl mx-auto"
            >
              {/* ABOUT INFORMATION CAROUSEL */}
              <PageCarousel images={aboutCarouselImages} />

              <div className="text-center space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A880]">
                  Heritage & Philosophy
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B4224]">
                  The Story of Vardhhan Hotel
                </h2>
                <div className="w-12 h-px bg-[#C5A880] mx-auto mt-4" />
              </div>

              {/* PHILOSOPHY GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4 items-center">
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-[#0B4224]">
                    Starting in 2021 on Gokul Road
                  </h3>
                  <p className="text-xs text-[#60564C] leading-relaxed text-left">
                    Established in 2021 in the vibrant hub of Hubballi, Vardhhan Hotel was built on the foundation of elegant, respectful hospitality. We carry a deep commitment to wellness, which is why <strong>only 100% vegetarian food is available</strong> in our exquisite kitchens, featuring seasonal organic ingredients gathered from premium local valleys.
                  </p>
                  <p className="text-xs text-[#60564C] leading-relaxed text-left">
                    Our design aesthetic borrows elements of traditional warmth and infuses them with clean, modern lines, elegant wooden finishes, and warm comfortable furnishings. We believe in visual quietness: allowing of spectacular culinary artistry and our genuine, heartfelt hospitality to form the centerpiece of your memories.
                  </p>
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-square w-full rounded-md overflow-hidden shadow-sm group border border-[#E7E2D8]"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&auto=format&fit=crop&q=80" 
                    alt="Bistro Culinary Artisan Plating" 
                    className="object-cover w-full h-full transition-transform duration-700 scale-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 z-20 text-white space-y-0.5 text-left">
                    <p className="font-serif text-sm font-bold">Artisanal Vegetarian Cuisine</p>
                    <p className="text-[9px] uppercase tracking-wider text-[#FAF6EE]/80">Fresh local sourcing daily</p>
                  </div>
                </motion.div>
              </div>

              {/* TIMELINE VALUES */}
              <div className="bg-white p-6 md:p-8 rounded-lg border border-[#E7E2D8] space-y-6">
                <h4 className="font-serif text-xl font-bold text-center text-[#1C1917]">Our Core Principles</h4>
                <motion.div 
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 }
                    }
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-20px" }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                >
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 25 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                    whileHover={{ scale: 1.03, y: -4, borderColor: '#C5A880', boxShadow: '0 8px 24px rgba(197, 168, 128, 0.08)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPrinciple('stewardship')}
                    className="p-4 rounded border border-transparent hover:border-[#E7E2D8] transition-all cursor-pointer space-y-2 text-left"
                  >
                    <span className="text-[#C5A880] text-xs font-bold uppercase tracking-wider block">Local Stewardship</span>
                    <p className="text-xs text-[#60564C] leading-relaxed font-light">
                      We actively preserve clean local environments. A percentage of our dining and room proceeds supports regional green space development.
                    </p>
                    <span className="text-[10px] text-[#C5A880] font-sans block mt-1">Read Ecological Details &bull;</span>
                  </motion.div>

                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 25 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                    whileHover={{ scale: 1.03, y: -4, borderColor: '#C5A880', boxShadow: '0 8px 24px rgba(197, 168, 128, 0.08)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPrinciple('authenticity')}
                    className="p-4 rounded border border-transparent hover:border-[#E7E2D8] transition-all cursor-pointer space-y-2 text-left"
                  >
                    <span className="text-[#C5A880] text-xs font-bold uppercase tracking-wider block">Seasonal Authenticity</span>
                    <p className="text-xs text-[#60564C] leading-relaxed font-light">
                      Our dynamic menus evolve every season depending strictly on local organic harvests and traditional agricultural cycles.
                    </p>
                    <span className="text-[10px] text-[#C5A880] font-sans block mt-1">Read Culinary Policy &bull;</span>
                  </motion.div>

                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 25 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                    whileHover={{ scale: 1.03, y: -4, borderColor: '#C5A880', boxShadow: '0 8px 24px rgba(197, 168, 128, 0.08)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPrinciple('stillness')}
                    className="p-4 rounded border border-transparent hover:border-[#E7E2D8] transition-all cursor-pointer space-y-2 text-left"
                  >
                    <span className="text-[#C5A880] text-xs font-bold uppercase tracking-wider block">Unplugged Stillness</span>
                    <p className="text-xs text-[#60564C] leading-relaxed font-light">
                      We curate stillness. Our central lounges are completely devoid of television screens, inviting you to connect with nature...
                    </p>
                    <span className="text-[10px] text-[#C5A880] font-sans block mt-1">Read Philosophy &bull;</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* HEAR FROM CONCIERGE */}
              <div className="bg-[#FAF6EE] p-8 rounded-md text-center border border-[#EAE5D9]">
                <p className="italic font-serif text-[#0B4224] text-md max-w-2xl mx-auto leading-relaxed">
                  &ldquo;At Vardhhan Hotel, we do not measure luxury in digital gadgets, but in rare elements: the aroma of fresh organic morning herbs, the absolute dining purity of our 100% vegetarian kitchens, and the genuine smile of a host who anticipates your need before you ask.&rdquo;
                </p>
                <span className="text-[10px] tracking-widest uppercase font-extrabold text-[#8C8375] mt-4 block">
                  — Rajesh Patil, Director of Hospitality
                </span>
              </div>

            </motion.div>
          )}

          {/* TAB 3: MENU */}
          {activeTab === 'menu' && (
            <motion.div
              id="menu-tab"
              key="menu"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* CULINARY IMAGE CAROUSEL */}
              <PageCarousel images={menuCarouselImages} />

              {/* Header Info */}
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A880]">
                  Pure Vegetarian Shakahari Dining
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#0B4224]">Vardhhan Shakahari Menu</h2>
                <p className="text-xs text-[#60564C] max-w-md mx-auto leading-relaxed">
                  Browse our handpicked farm-to-table selections. Filter by meal category or explore chef specialties.
                </p>
              </div>

              {/* BEAUTIFUL CULINARY BANNER */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-sm border border-[#E5D5C5] group bg-[#FAF9F5]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20 z-10 pointer-events-none" />
                <img 
                  src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=1600&auto=format&fit=crop&q=80" 
                  alt="Curated Shakahari Gastronomy" 
                  className="object-cover w-full h-full transition-transform duration-10000 ease-out scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 space-y-1.5 text-left">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#C5A880]">
                    Sattvic Shakahari Artistry
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#FAF9F5] leading-tight max-w-lg">
                    Vardhhan Culinary Registry
                  </h3>
                  <p className="text-xs text-[#FAF6EE]/80 leading-relaxed max-w-xl font-light text-left">
                    Where every table is nestled in a refined luxury ambiance, and every recipe is crafted with deep reverence for Hubballi&apos;s rich organic harvest. Pair your choice with elegant fresh beverages and reserve juices.
                  </p>
                </div>
              </motion.div>

              {/* SEARCH & FILTERS CONTROLS */}
              <div className="bg-white p-4 rounded-lg border border-[#E7E2D8] flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Search Bar */}
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#8C8375]" />
                  <input
                    type="text"
                    placeholder="Search menu items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#FAF9F5] border border-[#E7E2D8] pl-9 pr-4 py-2 text-xs rounded-sm focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                {/* Sub-categories selectors */}
                <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
                  {([
                    { id: 'all', label: 'All Items' },
                    { id: 'breakfast', label: 'Breakfast' },
                    { id: 'lunch-dinner', label: 'Mains' },
                    { id: 'drinks', label: 'Cellar & Drinks' },
                    { id: 'desserts', label: 'Desserts' }
                  ] as const).map((subTab) => (
                    <button
                      key={subTab.id}
                      onClick={() => setMenuSubTab(subTab.id)}
                      className={`relative px-4 py-2 text-xs font-semibold rounded-sm tracking-wide transition-colors duration-300 cursor-pointer border border-[#E7E2D8] ${
                        menuSubTab === subTab.id 
                          ? 'text-[#FAF9F5] border-transparent' 
                          : 'bg-[#FAF9F5] text-[#60564C] hover:bg-[#FAF6EE] hover:text-[#0B4224]'
                      }`}
                    >
                      <span className="relative z-10">{subTab.label}</span>
                      {menuSubTab === subTab.id && (
                        <motion.span 
                          layoutId="menu-sub-active-pill"
                          className="absolute inset-0 bg-[#0B4224] rounded-sm"
                          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                        />
                      )}
                    </button>
                  ))}
                </div>

              </div>

              {/* MENU ITEMS DISPLAY GRID */}
              {filteredMenuItems.length > 0 ? (
                <motion.div 
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4"
                >
                  {filteredMenuItems.map((item) => (
                    <motion.div 
                      key={item.id}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
                      }}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.02, 
                        borderColor: '#C5A880', 
                        boxShadow: '0 12px 30px rgba(197, 168, 128, 0.12)' 
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedMenuItem(item);
                        setCustomDairy(false);
                        setCustomGluten(false);
                        setCustomNote('');
                        setIsPreordered(false);
                      }}
                      className="bg-white rounded-lg border border-[#E7E2D8] transition-all overflow-hidden flex flex-col sm:flex-row group h-full text-left cursor-pointer"
                    >
                      {/* Image Thumbnail */}
                      <div className="w-full sm:w-40 h-48 sm:h-auto relative shrink-0 overflow-hidden bg-[#FAF9F5]">
                        <img 
                          src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=80"} 
                          alt={item.name}
                          className="object-cover w-full h-full transition-transform duration-500 scale-100 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {item.isChefSpecial && (
                          <div className="absolute top-2.5 left-2.5 bg-[#FAF6EE] text-[#C5A880] text-[9px] uppercase font-bold px-2 py-0.5 border border-[#EAE5D9]/70 rounded shadow-xs leading-none">
                            Chef Special
                          </div>
                        )}
                      </div>

                      {/* Detail Body */}
                      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-start gap-2.5">
                            <h4 className="font-serif text-sm font-bold text-[#1C1917] tracking-tight group-hover:text-[#C5A880] transition-colors">
                              {item.name}
                            </h4>
                            <span className="font-serif text-sm font-extrabold text-[#C5A880] shrink-0">
                              ${item.price}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#60564C] leading-relaxed font-light min-h-[38px]">
                            {item.description}
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-[#FAF6EE]">
                          {item.pairing && (
                            <p className="text-[10px] italic text-[#8C8375] font-serif leading-none flex items-center gap-1">
                              <span className="inline-block w-1 h-1 rounded-full bg-[#C5A880]/40 shrink-0" />
                              Pairing: {item.pairing}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-1">
                            {item.tags.map(tag => (
                              <span 
                                key={tag} 
                                className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-[#FAF9F5] text-[#8C8375] border border-[#E7E2D8]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg border border-[#E7E2D8] text-[#8C8375] space-y-2">
                  <p className="text-sm">We couldn&apos;t find any dishes matching search criteria.</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setMenuSubTab('all'); }} 
                    className="text-xs font-bold text-[#1C1917] hover:underline"
                  >
                    Reset all filters
                  </button>
                </div>
              )}

            </motion.div>
          )}

          {/* TAB 4: CONTACT US */}
          {activeTab === 'contact' && (
            <motion.div
              id="contact-tab"
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* CONTACT & RESERVATION CAROUSEL */}
              <PageCarousel images={contactCarouselImages} />

              <div className="text-center space-y-2 max-w-xl mx-auto">
                <span className="text-[#C5A880] text-xs uppercase tracking-[0.2em] font-bold block">
                  Concierge Desk
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
                  Contact & Booking Center
                </h2>
                <p className="text-xs text-[#60564C] leading-relaxed">
                  Inquire regarding pristine air-conditioned (AC) comfort room stays, dining reservations, or custom private events. Reach our front desk concierge or message us directly using the form.
                </p>
              </div>

              {/* BEAUTIFUL CULINARY TABLES_CAPE BANNER */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-sm border border-[#E5D5C5] group bg-[#FAF9F5]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20 z-10 pointer-events-none" />
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&auto=format&fit=crop&q=80" 
                  alt="Reserve Dining Tables" 
                  className="object-cover w-full h-full transition-transform duration-10000 ease-out scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 space-y-1.5 text-left">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#C5A880]">
                    Bespoke Inquiries
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#FAF9F5] leading-tight max-w-lg">
                    Culinary Tablings & Receptions
                  </h3>
                  <p className="text-xs text-[#FAF6EE]/80 leading-relaxed max-w-xl font-light">
                    Establish an unforgettable memory. Book your intimate fireplace alcove dinner or arrange corporate garden retreats under local starlight.
                  </p>
                </div>
              </motion.div>

              {/* GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Contact Coordinates Block */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-[#FAF6EE] p-6 rounded-lg border border-[#E7E2D8] space-y-5 shadow-2xs">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#8C8375] block text-left">
                      The Hotel Coordinates
                    </span>
                    <ul className="space-y-4 text-xs text-[#60564C] text-left">
                      <li className="flex items-start gap-4">
                        <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#1C1917]">Address</strong>
                          Shop No 1, Pride Icon, Gokul Road,<br />Hubballi, Karnataka - 580030
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Phone className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#1C1917]">Contact Number</strong>
                          +91 9019562187
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Mail className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#1C1917]">Electronic Inquiry</strong>
                          contact@vardhhanhotel.com
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#1C1917]">Opening Hours</strong>
                          7 am to 10:30 pm
                        </div>
                      </li>
                    </ul>

                    {/* Miniature location context */}
                    <div className="relative h-24 rounded border border-[#E5D5C5] overflow-hidden bg-[#EAE5D9] flex items-center justify-center p-3 text-center">
                      <div className="space-y-1">
                        <span className="font-mono text-[9px] tracking-widest text-[#8C8375] uppercase block font-bold">GPS Location</span>
                        <p className="font-serif text-sm font-bold text-[#1C1917]">15.3647° N, 75.1240° E</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Interaction area */}
                <div className="lg:col-span-7">
                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-emerald-50 rounded-lg p-8 border border-emerald-200 text-center space-y-4"
                    >
                      <div className="w-12 h-12 bg-emerald-500 text-white flex items-center justify-center rounded-full mx-auto shadow-sm">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="font-serif text-xl font-bold text-emerald-900">Message Received</h4>
                      <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
                        Thank you, {contactForm.name}. Your inquiry has been sent to our estate reception desk. Our head concierge will reach back to {contactForm.email} within 12 hours.
                      </p>
                      <button
                        onClick={resetContactForm}
                        className="bg-[#1C1917] hover:bg-[#38332D] text-[#FAF9F5] text-xs uppercase tracking-wider font-semibold px-6 py-2.5 rounded-sm transition-colors cursor-pointer"
                      >
                        Send Another message
                      </button>
                    </motion.div>
                  ) : (
                    <div className="bg-white p-8 rounded-lg border border-[#E7E2D8] space-y-6">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#60564C] block border-b border-[#FAF6EE] pb-2">
                        Send a Message
                      </span>
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] uppercase font-bold text-[#60564C] mb-1.5">Full Name *</label>
                            <input 
                              type="text" 
                              required
                              value={contactForm.name}
                              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                              placeholder="e.g., Jean Dupont" 
                              className="w-full bg-[#FAF9F5] border border-[#E7E2D8] p-3 text-xs rounded focus:outline-none focus:border-[#C5A880]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] uppercase font-bold text-[#60564C] mb-1.5">Email Address *</label>
                            <input 
                              type="email" 
                              required
                              value={contactForm.email}
                              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                              placeholder="e.g., jean@example.com" 
                              className="w-full bg-[#FAF9F5] border border-[#E7E2D8] p-3 text-xs rounded focus:outline-none focus:border-[#C5A880]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-[#60564C] mb-1.5">Your Message *</label>
                          <textarea 
                            required
                            rows={4}
                            value={contactForm.message}
                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                            placeholder="Write message details regarding room availability, custom dining tables or general estate information..." 
                            className="w-full bg-[#FAF9F5] border border-[#E7E2D8] p-3 text-xs rounded focus:outline-none focus:border-[#C5A880] resize-none"
                          />
                        </div>
                        <button 
                          type="submit"
                          className="w-full bg-[#1C1917] hover:bg-[#38332D] text-white py-3 text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors cursor-pointer"
                        >
                          Send Message
                        </button>
                      </form>
                    </div>
                  )}
                </div>

              </div>

              {/* INTERACTIVE ARRIVAL COMPANION & LOCATION HUB */}
              <div className="bg-white p-6 md:p-8 rounded-lg border border-[#E7E2D8] space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#FAF6EE] pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">
                      Arrival & Regional Guide
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#0B4224] mt-1">
                      Vardhhan Map Companion
                    </h3>
                  </div>
                  
                  {/* Selector Tabs */}
                  <div className="flex bg-[#FAF9F5] p-1 rounded border border-[#E7E2D8] gap-1 shrink-0 w-full md:w-auto">
                    {(['map', 'landmarks', 'directions'] as const).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveLocationTab(tab)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-sm uppercase tracking-wider transition-all cursor-pointer ${
                          activeLocationTab === tab
                            ? 'bg-[#0B4224] text-[#FAF9F5]'
                            : 'text-[#60564C] hover:text-[#0B4224] hover:bg-[#EAE5D9]/40'
                        }`}
                      >
                        {tab === 'map' ? 'Interactive Map' : tab === 'landmarks' ? 'Landmarks' : 'Directions'}
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {/* TAB A: INTERACTIVE GOOGLE MAPS EMBED */}
                  {activeLocationTab === 'map' && (
                    <motion.div
                      key="map"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <p className="text-xs text-[#60564C] leading-relaxed max-w-2xl font-light">
                        Nestled at Shop No 1, Pride Icon on Gokul Road, Hubballi, Vardhhan Hotel provides sophisticated, boutique accommodations and exceptional vegetarian culinary environments. Use the map below to orient yourself or plan your journey.
                      </p>
                      
                      {/* Styled Map frame */}
                      <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-[#E7E2D8] bg-[#FAF9F5] shadow-xs">
                        <iframe
                          title="Vardhhan Hotel Location Map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.0336683884!2d75.101569!3d15.361545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5f2b87ff484c9%3A0xc367d307185dede1!2sGokul%20Rd%2C%20Hubballi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1717208400000!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0, filter: 'grayscale(15%) contrast(100%) brightness(95%)' }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* TAB B: LANDMARKS INTERACTIVE EXPLORER */}
                  {activeLocationTab === 'landmarks' && (
                    <motion.div
                      key="landmarks"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-6"
                    >
                      {/* Left Landmarks list */}
                      <div className="lg:col-span-5 space-y-2.5">
                        <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#8C8375] block mb-2">
                          Scenic Points of Interest
                        </span>
                        
                        {([
                          { id: 'bixby', title: 'Unkal Lake', distance: '2.5 miles North' },
                          { id: 'pfeiffer', title: 'Nrupatunga Hill', distance: '3.8 miles East' },
                          { id: 'mcway', title: 'Indira Gandhi Glass House', distance: '2 miles South-East' },
                          { id: 'pointsur', title: 'Chandramouleshwara Temple', distance: '4 miles North' }
                        ] as const).map((land) => (
                          <motion.button
                            key={land.id}
                            type="button"
                            whileHover={{ scale: 1.02, x: 4, borderColor: '#C5A880' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedLandmark(land.id)}
                            className={`w-full text-left p-3.5 rounded transition-all flex items-center justify-between border cursor-pointer ${
                              selectedLandmark === land.id
                                ? 'bg-[#0B4224] text-[#FAF9F5] border-[#0B4224]'
                                : 'bg-[#FAF9F5] text-[#60564C] border-[#E7E2D8] hover:bg-[#FAF6EE]/80'
                            }`}
                          >
                            <div className="space-y-0.5">
                              <span className="font-serif text-sm font-semibold block">{land.title}</span>
                              <span className={`text-[10px] block font-sans ${selectedLandmark === land.id ? 'text-[#C5A880]' : 'text-[#8C8375]'}`}>
                                {land.distance}
                              </span>
                            </div>
                            <Compass className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                              selectedLandmark === land.id ? 'rotate-45 text-[#C5A880]' : 'text-[#A89F91]'
                            }`} />
                          </motion.button>
                        ))}
                      </div>

                      {/* Right Landmark Detail Card */}
                      <div className="lg:col-span-7 bg-[#FAF6EE] p-6 rounded-lg border border-[#E5D5C5] flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#C5A880]/10 text-[#C5A880] rounded-xs text-[9px] uppercase tracking-wider font-bold">
                            Curated Excursion
                          </div>
                          
                          {selectedLandmark === 'bixby' && (
                            <>
                              <h4 className="font-serif text-xl font-bold text-[#0B4224]">Unkal Lake</h4>
                              <p className="text-xs text-[#60564C] leading-relaxed font-light text-left">
                                A stunning historical lake featuring a towering center statue of Swami Vivekananda, lush green gardens, and gorgeous boating services. It is Hubballi&apos;s favorite spot for scenic evening sunset walks and relaxed meditation.
                              </p>
                              <div className="bg-white/50 p-3 rounded text-[11px] text-[#60564C] space-y-1 text-left">
                                <strong>Concierge Note:</strong> Best visited during golden hour or early evening when refreshing breezes wave across the water, and the colorful sunset reflects on the center statue. Only 10 minutes drive from Vardhhan Hotel.
                              </div>
                            </>
                          )}

                          {selectedLandmark === 'pfeiffer' && (
                            <>
                              <h4 className="font-serif text-xl font-bold text-[#0B4224]">Nrupatunga Hill</h4>
                              <p className="text-xs text-[#60564C] leading-relaxed font-light text-left">
                                A beautiful, panoramic hillock offering breezy views over the entire twin cities of Hubballi and Dharwad. It features tidy paved trekking pathways, lush tree guards, and peaceful settings, perfect for health and nature enthusiasts.
                              </p>
                              <div className="bg-white/50 p-3 rounded text-[11px] text-[#60564C] space-y-1 text-left">
                                <strong>Concierge Note:</strong> The sunset views from the peak are incredibly peaceful. Vehicles are allowed up to a specific level, making it very accessible for families. Just 15 minutes north-east.
                              </div>
                            </>
                          )}

                          {selectedLandmark === 'mcway' && (
                            <>
                              <h4 className="font-serif text-xl font-bold text-[#0B4224]">Indira Gandhi Glass House</h4>
                              <p className="text-xs text-[#60564C] leading-relaxed font-light text-left">
                                A vibrant civic garden boasting an incredible layout and a magnificent glass structure modeled after London&apos;s Crystal Palace. It hosts pristine seasonal flower exhibitions, musical fountain dances, and sprawling green lawn carpets.
                              </p>
                              <div className="bg-white/50 p-3 rounded text-[11px] text-[#60564C] space-y-1 text-left">
                                <strong>Concierge Note:</strong> The evening musical fountain show is highly recommended for families. Check showing schedules at the hotel front desk or call before visiting. Located just 10 minutes south-east.
                              </div>
                            </>
                          )}

                          {selectedLandmark === 'pointsur' && (
                            <>
                              <h4 className="font-serif text-xl font-bold text-[#0B4224]">Chandramouleshwara Temple</h4>
                              <p className="text-xs text-[#60564C] leading-relaxed font-light text-left">
                                A spectacular 900-year-old Chalukyan-era temple dedicated to Lord Shiva, carved beautifully out of black basalt rock with stunning ancient architecture, intricate carvings, and polished black pillars.
                              </p>
                              <div className="bg-white/50 p-3 rounded text-[11px] text-[#60564C] space-y-1 text-left">
                                <strong>Concierge Note:</strong> A declared protected monument of national importance. It provides a highly unique atmosphere of historic spirituality and outstanding ancient art. Only 15 minutes away on the outskirts.
                              </div>
                            </>
                          )}
                        </div>

                        <div className="pt-2 border-t border-[#E5D5C5] flex items-center justify-between text-[11px] text-[#8C8375]">
                          <span>Active Drive Time: ~10-20 mins</span>
                          <button
                            type="button"
                            onClick={() => setActiveLocationTab('map')}
                            className="text-[#1C1917] hover:text-[#C5A880] hover:underline font-semibold flex items-center gap-1 font-sans transition-colors cursor-pointer"
                          >
                            View on Map
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB C: DETAILED ROUTED DIRECTIONS */}
                  {activeLocationTab === 'directions' && (
                    <motion.div
                      key="directions"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {/* Hub 1 */}
                      <motion.div 
                        whileHover={{ y: -4, scale: 1.02, borderColor: '#C5A880', boxShadow: '0 8px 24px rgba(197, 168, 128, 0.08)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedDirection('monterey')}
                        className="bg-[#FAF9F5] p-5 rounded border border-[#E7E2D8] space-y-3 cursor-pointer transition-all text-left"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#0B4224]/5 flex items-center justify-center text-[#C5A880]">
                          <Car className="w-4 h-4" />
                        </div>
                        <h4 className="font-serif text-sm font-bold text-[#0B4224]">From Hubballi Airport (HBX)</h4>
                        <span className="text-[10px] bg-white text-[#8C8375] px-2 py-0.5 rounded border border-[#E7E2D8] inline-block font-sans">
                          15 Minutes &bull; 6 Miles
                        </span>
                        <p className="text-xs text-[#60564C] leading-relaxed font-light font-sans text-left">
                          Exit Hubli Airport, turn right onto Gokul Road. Continue straight past central industrial blocks. Drive down and Vardhhan Hotel entrance at Shop No 1, Pride Icon will be on your left.
                        </p>
                        <span className="text-[10px] text-[#C5A880] block font-sans font-bold">Click for details &bull;</span>
                      </motion.div>

                      {/* Hub 2 */}
                      <motion.div 
                        whileHover={{ y: -4, scale: 1.02, borderColor: '#C5A880', boxShadow: '0 8px 24px rgba(197, 168, 128, 0.08)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedDirection('sfo')}
                        className="bg-[#FAF9F5] p-5 rounded border border-[#E7E2D8] space-y-3 cursor-pointer transition-all text-left"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#0B4224]/5 flex items-center justify-center text-[#C5A880]">
                          <Navigation className="w-4 h-4" />
                        </div>
                        <h4 className="font-serif text-sm font-bold text-[#0B4224]">From Hubballi Railway Station (UBL)</h4>
                        <span className="text-[10px] bg-white text-[#8C8375] px-2 py-0.5 rounded border border-[#E7E2D8] inline-block font-sans">
                          20 Minutes &bull; 4.5 Miles
                        </span>
                        <p className="text-xs text-[#60564C] leading-relaxed font-light font-sans text-left">
                          Head west towards Lamington Rd. Continue onto Gokul Road through major city junctions. Head down Gokul Road past and look for the landmarks near Pride Icon complex.
                        </p>
                        <span className="text-[10px] text-[#C5A880] block font-sans font-bold">Click for details &bull;</span>
                      </motion.div>

                      {/* Hub 3 */}
                      <motion.div 
                        whileHover={{ y: -4, scale: 1.02, borderColor: '#EF4444', boxShadow: '0 8px 24px rgba(239, 68, 68, 0.08)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedDirection('advisory')}
                        className="bg-[#FAF9F5] p-5 rounded border border-[#E7E2D8] space-y-3 cursor-pointer transition-all text-left"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#0B4224]/5 flex items-center justify-center text-[#EF4444]">
                          <Map className="w-4 h-4" />
                        </div>
                        <h4 className="font-serif text-sm font-bold text-[#0B4224]">Gokul Road Traffic Advice</h4>
                        <span className="text-[10px] bg-white text-[#EF4444]/15 text-[#EF4444] px-2 py-0.5 rounded border border-[#EF4444]/20 inline-block font-sans font-bold">
                          City Navigation Check
                        </span>
                        <p className="text-xs text-[#60564C] leading-relaxed font-light font-sans text-left">
                          During peak evening hours (7 pm to 10:30 pm), local transit can be slightly active. Reserving offline maps or contacting our reception desk for direct hotel taxi coordination is highly recommended.
                        </p>
                        <span className="text-[10px] text-[#EF4444] block font-sans font-bold">Click for details &bull;</span>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* TAB 5: REVIEWS */}
          {activeTab === 'reviews' && (
            <motion.div
              id="reviews-tab"
              key="reviews"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12 max-w-4xl mx-auto"
            >
              {/* REVIEWS & VISITOR EXPERIENCES CAROUSEL */}
              <PageCarousel images={reviewsCarouselImages} />

              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A880]">
                  Guest Ledger
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
                  Reviews & Reflections
                </h2>
                <p className="text-xs text-[#60564C] max-w-md mx-auto leading-relaxed">
                  Genuine stories of quiet stays, scenic sunsets, and memorable moments saved in our guestbook.
                </p>
              </div>

              {/* BEAUTIFUL CELEBRATORY TOAST BANNER */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-sm border border-[#E5D5C5] group bg-[#FAF9F5]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20 z-10 pointer-events-none" />
                <img 
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1600&auto=format&fit=crop&q=80" 
                  alt="Resort Guest Dining Experiences" 
                  className="object-cover w-full h-full transition-transform duration-10000 ease-out scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 space-y-1.5 text-left">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#C5A880]">
                    Shared Experiences
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#FAF9F5] leading-tight max-w-lg">
                    Curated Guest Reflections
                  </h3>
                  <p className="text-xs text-[#FAF6EE]/80 leading-relaxed max-w-xl font-light">
                    Savor the memories left in our gold-trimmed estate ledger book. Guests share their culinary moments and coastal tranquility from their stay.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Review Ledger List */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08 }
                    }
                  }}
                  initial="hidden"
                  animate="show"
                  className="lg:col-span-7 space-y-4"
                >
                  {reviews.map((rev) => (
                    <motion.div 
                      key={rev.id} 
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                      }}
                      whileHover={{ y: -3, scale: 1.015, borderColor: '#C5A880', boxShadow: '0 8px 24px rgba(197, 168, 128, 0.08)' }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setSelectedReview(rev)}
                      className="bg-white p-6 rounded-lg border border-[#E7E2D8] space-y-3 shadow-2xs cursor-pointer transition-all duration-200 text-left"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <strong className="text-xs text-[#1C1917] block group-hover:text-[#C5A880] transition-colors">{rev.name}</strong>
                          <span className="text-[10px] text-[#8C8375] font-serif">{rev.date}</span>
                        </div>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < rev.rating ? 'fill-[#C5A880] text-[#C5A880]' : 'text-[#E7E2D8]'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-[#60564C] leading-normal font-light">
                        &ldquo;{rev.content}&rdquo;
                      </p>
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-[#C5A880] block pt-1 font-sans">
                        Read Story in Ledger &bull;
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Submit New Review Form */}
                <div className="lg:col-span-5 bg-white p-6 rounded-lg border border-[#E7E2D8] space-y-4 shadow-sm">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#60564C] block border-b border-[#FAF6EE] pb-2">
                    Add Your Reflection
                  </span>

                  {isReviewSubmitted ? (
                    <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200 text-center space-y-3">
                      <div className="w-8 h-8 bg-emerald-500 text-white flex items-center justify-center rounded-full mx-auto shadow-xs">
                        <Check className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-emerald-900">Reflection Saved</h4>
                      <p className="text-[11px] text-emerald-800 leading-normal">
                        Thank you for sharing your experience! Your post has been added to our active ledger.
                      </p>
                      <button
                        onClick={() => setIsReviewSubmitted(false)}
                        className="bg-[#1C1917] hover:bg-[#38332D] text-[#FAF9F5] text-[10px] uppercase tracking-wider font-semibold px-4 py-2 rounded-sm transition-colors cursor-pointer"
                      >
                        Write Another Review
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#60564C] mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={reviewForm.name}
                          onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                          placeholder="e.g., Arthur Pendelton"
                          className="w-full bg-[#FAF9F5] border border-[#E7E2D8] p-2.5 text-xs rounded focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#60564C] mb-1">Your Rating *</label>
                        <div className="flex gap-2 items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <button
                              type="button"
                              key={i}
                              onClick={() => setReviewForm({ ...reviewForm, rating: i + 1 })}
                              className="focus:outline-none cursor-pointer"
                            >
                              <Star
                                className={`w-5 h-5 transition-colors ${
                                  i < reviewForm.rating ? 'fill-[#C5A880] text-[#C5A880]' : 'text-[#E7E2D8] hover:text-[#C5A880]'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#60564C] mb-1">Your review *</label>
                        <textarea
                          required
                          rows={4}
                          value={reviewForm.content}
                          onChange={(e) => setReviewForm({ ...reviewForm, content: e.target.value })}
                          placeholder="Tell us about the beautiful views, the cozy fire pits, or the culinary mastery at Vardhan..."
                          className="w-full bg-[#FAF9F5] border border-[#E7E2D8] p-2.5 text-xs rounded focus:outline-none focus:border-[#C5A880] resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#1C1917] hover:bg-[#38332D] text-white py-2.5 text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors cursor-pointer"
                      >
                        Publish Review
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 5.5: BLOG CHRONICLES */}
          {activeTab === 'blog' && (
            <motion.div
              id="blog-tab"
              key="blog"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 max-w-6xl mx-auto"
            >
              {/* BLOG IMAGE CAROUSEL */}
              <PageCarousel images={blogCarouselImages} />

              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A880]">
                  Vardhhan Archives
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
                  The Shakahari Chronicles
                </h2>
                <p className="text-xs text-[#60564C] max-w-md mx-auto leading-relaxed">
                  Deep culinary logs, Ayurvedic spice wisdom, wellness guides, and boutique stories fresh from Hubballi.
                </p>
              </div>

              {/* SEARCH & FILTERS BAR */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-lg border border-[#E7E2D8] shadow-xs">
                {/* Search Bar */}
                <div className="relative w-full md:w-80">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#A89F91]">
                    <Search className="w-4 h-4 shrink-0" />
                  </span>
                  <input
                    type="search"
                    placeholder="Search our chronicles..."
                    value={blogSearchQuery}
                    onChange={(e) => setBlogSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F5]/70 border border-[#E7E2D8] focus:border-[#0B4224] focus:outline-none focus:ring-1 focus:ring-[#0B4224] text-xs rounded transition-all placeholder:text-[#A89F91]/80"
                  />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-1.5 w-full md:w-auto justify-center md:justify-end">
                  {(['All', 'Gastronomy', 'Wellness', 'Heritage', 'Behind the Scenes'] as const).map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveBlogCategory(category)}
                      className={`px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold rounded transition-all duration-200 cursor-pointer ${
                        activeBlogCategory === category
                          ? 'bg-[#0B4224] text-white'
                          : 'bg-[#FAF9F5] border border-[#E7E2D8] text-[#60564C] hover:border-[#0B4224]/50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* BLOG ARTICLES GRID */}
              {(() => {
                const filteredBlogs = blogs.filter((post) => {
                  const matchesCategory = activeBlogCategory === 'All' || post.category === activeBlogCategory;
                  const matchesSearch = post.title.toLowerCase().includes(blogSearchQuery.toLowerCase()) || 
                                        post.excerpt.toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
                                        post.content.toLowerCase().includes(blogSearchQuery.toLowerCase());
                  return matchesCategory && matchesSearch;
                });

                if (filteredBlogs.length === 0) {
                  return (
                    <div className="text-center py-16 bg-white rounded-lg border border-[#E7E2D8] space-y-3">
                      <FileText className="w-10 h-10 text-[#A89F91] mx-auto opacity-50" />
                      <h4 className="font-serif text-md font-semibold text-[#1C1917]">No articles found matching your criteria</h4>
                      <p className="text-xs text-[#8C8375]">Try adjusting your search keywords or browsing different categories.</p>
                    </div>
                  );
                }

                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBlogs.map((post) => (
                      <article 
                        key={post.id} 
                        className="bg-white rounded-lg overflow-hidden border border-[#E7E2D8] shadow-xs group hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          {/* Image Header with Hover Effect */}
                          <div className="relative aspect-video w-full overflow-hidden bg-[#FAF9F5] border-b border-[#E7E2D8]">
                            <img 
                              src={post.image || "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800"} 
                              alt={post.title}
                              className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded text-[9px] uppercase tracking-wider font-extrabold text-[#0B4224] border border-[#0B4224]/10 shadow-3xs">
                              {post.category}
                            </div>
                          </div>

                          {/* Content Container */}
                          <div className="p-5 space-y-2.5">
                            <div className="flex items-center gap-3 text-[10px] text-[#8C8375] font-mono select-none">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-[#C5A880]" />
                                {post.date}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-[#C5A880]" />
                                {post.readTime}
                              </span>
                            </div>

                            <h3 className="font-serif text-base font-bold text-[#1C1917] group-hover:text-[#0B4224] transition-colors line-clamp-2 leading-snug">
                              {post.title}
                            </h3>

                            <p className="text-xs text-[#60564C] leading-relaxed font-light line-clamp-3">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>

                        {/* Read More Footer */}
                        <div className="p-5 pt-0 border-t border-[#FAF6EE] mt-4 flex items-center justify-between">
                          <span className="text-[10px] text-[#8C8375] flex items-center gap-1.5">
                            <span className="w-4 h-4 rounded-full bg-[#FAF9F5] border border-[#CBD5E1]/40 flex items-center justify-center text-[9px] font-bold text-[#0B4224]">
                              {post.author.charAt(0)}
                            </span>
                            By {post.author}
                          </span>
                          <button
                            type="button"
                            onClick={() => setSelectedBlog(post)}
                            className="text-[10px] uppercase tracking-widest font-bold text-[#0B4224] hover:text-[#C5A880] flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            Read Full
                            <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* TAB 6: ADMIN PANEL */}
          {activeTab === 'admin' && (
            <motion.div
              id="admin-tab"
              key="admin"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 max-w-6xl mx-auto"
            >
              {!isAdminLoggedIn ? (
                <div className="max-w-md mx-auto py-12 px-6 bg-white border border-[#E7E2D8] rounded-lg shadow-2xs space-y-6 text-center my-8">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-[#FAF6EE] border border-[#E7E2D8] rounded-full mx-auto flex items-center justify-center text-[#C5A880]">
                      <Lock className="w-5 h-5 animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#C5A880] block">Vardhhan Hospitality Console</span>
                      <h3 className="font-serif text-2xl font-bold text-[#1C1917]">Administrative Sign In</h3>
                      <p className="text-xs text-[#60564C] leading-relaxed font-light">
                        Access is restricted to resort managers, culinary chefs, and editorial authors.
                      </p>
                    </div>
                  </div>

                  {loginError && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-50 border border-red-200 text-red-800 rounded text-xs font-semibold text-left"
                    >
                      {loginError}
                    </motion.div>
                  )}

                  <form onSubmit={handleAdminLogin} className="space-y-4 text-left">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-extrabold tracking-wider text-[#60564C] block">Steward Username</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. admin"
                        value={loginUsername}
                        onChange={(e) => setLoginUsername(e.target.value)}
                        className="w-full px-3 py-2 bg-[#FAF9F5]/70 border border-[#E7E2D8] focus:border-[#0B4224] focus:outline-none focus:ring-1 focus:ring-[#0B4224] text-xs rounded transition-all placeholder:text-[#A89F91]/50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-extrabold tracking-wider text-[#60564C] block">Master Key (Password)</label>
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full px-3 py-2 bg-[#FAF9F5]/70 border border-[#E7E2D8] focus:border-[#0B4224] focus:outline-none focus:ring-1 focus:ring-[#0B4224] text-xs rounded transition-all placeholder:text-[#A89F91]/50"
                      />
                    </div>

                    <div className="bg-[#FAF9F5]/80 p-3.5 border border-dashed border-[#E7E2D8] rounded text-[10px] text-[#8C8375] leading-relaxed font-light">
                      <strong className="block text-[#60564C] font-semibold mb-0.5 uppercase tracking-wider text-[8px]">Steward Access Guide</strong>
                      To inspect or modify Vardhhan&apos;s culinary assets during preview, authenticate using the authorized caretaker credentials:
                      <div className="mt-1 font-semibold text-[#1C1917] font-mono">
                        Username: <span className="bg-[#EAE5D9]/50 px-1.5 py-0.5 rounded text-[#0B4224]">admin</span> &nbsp; Password: <span className="bg-[#EAE5D9]/50 px-1.5 py-0.5 rounded text-[#0B4224]">admin</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0B4224] hover:bg-[#08301a] text-white py-2.5 text-xs font-bold uppercase tracking-widest rounded transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer mt-2 animate-none"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      Authenticate Steward
                    </button>
                  </form>

                  <div className="pt-2 border-t border-[#FAF6EE] flex justify-center">
                    <button
                      type="button"
                      onClick={() => setActiveTab('home')}
                      className="text-[10px] uppercase tracking-wider text-[#8C8375] hover:text-[#0B4224] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3" />
                      Return to Resort View
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* BRAND ADMINISTRATIVE IMAGE CAROUSEL */}
                  <PageCarousel images={adminCarouselImages} />

                  {/* Header and top info */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#E7E2D8] pb-6">
                    <div className="space-y-1 text-left">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#C5A880]" />
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A880]">
                          Vardhhan Kitchen Console
                        </span>
                      </div>
                      <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
                        {activeAdminSubTab === 'menu' ? 'Menu Administration' : 'Blog Chronicles Administration'}
                      </h2>
                      <p className="text-xs text-[#60564C] max-w-lg leading-relaxed font-light">
                        {activeAdminSubTab === 'menu' 
                          ? "As an administrator, you hold complete creative control over Vardhhan's culinary offerings. Add or alter dishes to dynamically update the live menu display."
                          : "Document the rich culinary history, Ayurvedic ingredients benefits, wellness tips, and backend resort stories inside Vardhhan's luxury chronicles."
                        }
                      </p>
                    </div>
                    
                    {/* Console Actions */}
                    <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                      <button
                        type="button"
                        onClick={activeAdminSubTab === 'menu' ? handleResetToDefaultMenu : handleResetToDefaultBlogs}
                        className="flex-grow md:flex-grow-0 flex items-center justify-center gap-2 bg-[#FAF6EE] hover:bg-[#EAE5D9]/40 border border-[#E7E2D8] hover:border-[#C5A880] text-[#1C1917] hover:text-[#C5A880] text-[10px] uppercase tracking-wider font-semibold px-4 py-2.5 rounded-sm transition-all duration-200 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        {activeAdminSubTab === 'menu' ? 'Restore Heirloom Defaults' : 'Restore Chronicle Defaults'}
                      </button>

                      <button
                        type="button"
                        onClick={handleAdminLogout}
                        className="flex-grow md:flex-grow-0 flex items-center justify-center gap-2 bg-red-50/40 hover:bg-red-50 border border-red-100 hover:border-red-300 text-red-700 hover:text-red-800 text-[10px] uppercase tracking-wider font-semibold px-4 py-2.5 rounded-sm transition-all duration-200 cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        Exit Console
                      </button>
                    </div>
                  </div>

              {/* Status Alert Message Banner */}
              {adminSuccessMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 border border-emerald-200 rounded p-4 text-xs text-emerald-800 flex items-center gap-2.5"
                >
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-2xs">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium text-left">{adminSuccessMessage}</span>
                </motion.div>
              )}

              {blogSuccessMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 border border-emerald-200 rounded p-4 text-xs text-emerald-800 flex items-center gap-2.5"
                >
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-2xs">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium text-left">{blogSuccessMessage}</span>
                </motion.div>
              )}

              {/* INNER ADMIN NAVIGATION TABS */}
              <div className="flex gap-2 border-b border-[#E7E2D8] pb-0.5 select-none md:justify-start justify-center">
                <button
                  type="button"
                  onClick={() => setActiveAdminSubTab('menu')}
                  className={`relative pb-3 text-xs uppercase tracking-widest font-bold px-4 cursor-pointer transition-all duration-200 ${
                    activeAdminSubTab === 'menu' ? 'text-[#0B4224]' : 'text-[#8C8375] hover:text-[#0B4224]'
                  }`}
                >
                  Manage Menu Dishes
                  {activeAdminSubTab === 'menu' && (
                    <motion.div layoutId="adminSubActive" className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0B4224]" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAdminSubTab('blog')}
                  className={`relative pb-3 text-xs uppercase tracking-widest font-bold px-4 cursor-pointer transition-all duration-200 ${
                    activeAdminSubTab === 'blog' ? 'text-[#0B4224]' : 'text-[#8C8375] hover:text-[#0B4224]'
                  }`}
                >
                  Manage Blog Chronicles
                  {activeAdminSubTab === 'blog' && (
                    <motion.div layoutId="adminSubActive" className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0B4224]" />
                  )}
                </button>
              </div>

              {/* Two Panel Workstation */}
              {activeAdminSubTab === 'menu' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Workstation Left: Live Ledger list of all menu items inside database */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-white p-5 rounded-lg border border-[#E7E2D8]">
                    <div className="flex justify-between items-center border-b border-[#FAF6EE] pb-3 mb-4">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#60564C]">
                        Active Menu Ledger ({menuItems.length} dishes total)
                      </span>
                      <span className="text-[10px] text-[#A89F91] font-mono leading-none">
                        Real-time Sync Active
                      </span>
                    </div>

                    <div className="space-y-3.5 max-h-[620px] overflow-y-auto pr-2 custom-scrollbar">
                      {menuItems.map((item) => (
                        <div key={item.id} className="p-4 bg-[#FAF9F5]/70 hover:bg-[#FAF9F5] border border-[#E7E2D8] rounded transition-all duration-150 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div className="flex items-start gap-3.5 flex-1 w-full">
                            {/* Tiny Thumb */}
                            <div className="w-12 h-12 rounded border border-[#E7E2D8] overflow-hidden shrink-0 bg-white">
                              <img 
                                src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&auto=format&fit=crop&q=80"}
                                alt={item.name}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="space-y-1.5 flex-grow">
                              <div className="flex flex-wrap items-center gap-2">
                                <h4 className="font-serif text-sm font-bold text-[#1C1917]">{item.name}</h4>
                                <span className="bg-[#1C1917]/5 text-[#60564C] text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-xs leading-none">
                                  {item.category === 'lunch-dinner' ? 'Mains' : item.category === 'drinks' ? 'Cellar' : item.category}
                                </span>
                                {item.isChefSpecial && (
                                  <span className="bg-[#C5A880]/10 text-[#C5A880] text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-xs leading-none">
                                    Chef Special
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-[#60564C] leading-relaxed font-light">{item.description}</p>
                              {item.pairing && (
                                <p className="text-[10px] text-[#C5A880] italic leading-none">
                                  Pair: {item.pairing}
                                </p>
                              )}
                              {item.tags && item.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {item.tags.map((tag, idx) => (
                                    <span key={idx} className="text-[9px] bg-white text-[#8C8375] border border-[#E7E2D8] px-1.5 py-0.5 rounded-sm">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex sm:flex-col justify-end items-end gap-2.5 shrink-0 min-w-[90px]">
                            <span className="font-serif text-xs font-extrabold text-[#1C1917]">${item.price}</span>
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => startEditMenuItem(item)}
                                className="w-8 h-8 rounded border border-[#E7E2D8] hover:border-[#C5A880] bg-white flex items-center justify-center text-[#8C8375] hover:text-[#C5A880] transition-colors"
                                title="Edit Item"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => deleteMenuItem(item.id, item.name)}
                                className="w-8 h-8 rounded border border-[#E7E2D8] hover:border-[#EF4444] bg-white flex items-center justify-center text-[#8C8375] hover:text-[#EF4444] transition-colors"
                                title="Delete Item"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Workstation Right: Add/Update Form Panel */}
                <div className="lg:col-span-5">
                  <div className="bg-white p-6 rounded-lg border border-[#E7E2D8] space-y-4 shadow-2xs">
                    <div className="flex justify-between items-center border-b border-[#FAF6EE] pb-2">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#60564C]">
                        {editingItemId ? 'Update Menu Item' : 'Add New Dish Offering'}
                      </span>
                      {editingItemId && (
                        <button
                          type="button"
                          onClick={cancelEditMenuItem}
                          className="text-[9px] uppercase font-bold text-[#8C8375] hover:text-[#1C1917] tracking-wider"
                        >
                          Cancel Edit
                        </button>
                      )}
                    </div>

                    <form onSubmit={handleAdminFormSubmit} className="space-y-4">
                      {adminFormError && (
                        <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded font-semibold text-left">
                          {adminFormError}
                        </div>
                      )}
                      
                      {/* Name field */}
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#60564C] mb-1">Dish Title *</label>
                        <input
                          type="text"
                          required
                          value={adminForm.name}
                          onChange={(e) => setAdminForm({ ...adminForm, name: e.target.value })}
                          placeholder="e.g., Rosemary Crusted Lamb Lollipops"
                          className="w-full bg-[#FAF9F5] border border-[#E7E2D8] p-2.5 text-xs rounded focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {/* Price field */}
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-[#60564C] mb-1">Price ($USD) *</label>
                          <input
                            type="number"
                            required
                            min={1}
                            value={adminForm.price}
                            onChange={(e) => setAdminForm({ ...adminForm, price: e.target.value })}
                            placeholder="32"
                            className="w-full bg-[#FAF9F5] border border-[#E7E2D8] p-2.5 text-xs rounded focus:outline-none focus:border-[#C5A880]"
                          />
                        </div>

                        {/* Category Selector */}
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-[#60564C] mb-1">Meal Category *</label>
                          <select
                            value={adminForm.category}
                            onChange={(e) => setAdminForm({ ...adminForm, category: e.target.value as any })}
                            className="w-full bg-[#FAF9F5] border border-[#E7E2D8] p-2.5 text-xs rounded focus:outline-none focus:border-[#C5A880]"
                          >
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch-dinner">Mains (Lunch-Dinner)</option>
                            <option value="drinks">Cellar & Drinks</option>
                            <option value="desserts">Desserts</option>
                          </select>
                        </div>
                      </div>

                      {/* Description field */}
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#60564C] mb-1">Culinary Description *</label>
                        <textarea
                          required
                          rows={3}
                          value={adminForm.description}
                          onChange={(e) => setAdminForm({ ...adminForm, description: e.target.value })}
                          placeholder="Craft a sensory description highlighting freshness, regional source, and texture..."
                          className="w-full bg-[#FAF9F5] border border-[#E7E2D8] p-2.5 text-xs rounded focus:outline-none focus:border-[#C5A880] resize-none"
                        />
                      </div>

                      {/* Beverage/Elixir Pairing field (Optional) */}
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#60564C] mb-1">Beverage/Elixir Pairing (Optional)</label>
                        <input
                          type="text"
                          value={adminForm.pairing}
                          onChange={(e) => setAdminForm({ ...adminForm, pairing: e.target.value })}
                          placeholder="e.g., pairs beautifully with South Indian Filter Coffee"
                          className="w-full bg-[#FAF9F5] border border-[#E7E2D8] p-2.5 text-xs rounded focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>

                      {/* Culinary Image URL field (Optional) */}
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#60564C] mb-1">Culinary Image URL (Optional)</label>
                        <input
                          type="url"
                          value={adminForm.image}
                          onChange={(e) => setAdminForm({ ...adminForm, image: e.target.value })}
                          placeholder="e.g., https://images.unsplash.com/photo-..."
                          className="w-full bg-[#FAF9F5] border border-[#E7E2D8] p-2.5 text-xs rounded focus:outline-none focus:border-[#C5A880]"
                        />
                        <span className="text-[9px] text-[#8C8375] block mt-1 leading-normal font-sans">
                          Provide an open-access image link (such as Unsplash) to render beautiful dietary photography live.
                        </span>
                      </div>

                      {/* Tags field */}
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#60564C] mb-1">Dietary Tags (Comma Separated)</label>
                        <input
                          type="text"
                          value={adminForm.tagsString}
                          onChange={(e) => setAdminForm({ ...adminForm, tagsString: e.target.value })}
                          placeholder="e.g., Gluten-Free, Vegan, Organic"
                          className="w-full bg-[#FAF9F5] border border-[#E7E2D8] p-2.5 text-xs rounded focus:outline-none focus:border-[#C5A880]"
                        />
                        <span className="text-[9px] text-[#8C8375] block mt-1 leading-normal font-sans">
                          Separate multiple tags with a comma. Best tags: Healthy, Organic, Vegan, Gluten-Free, Signature, Cocktail, Wine.
                        </span>
                      </div>

                      {/* Chef's Special Checkbox */}
                      <div className="flex items-center gap-2.5 bg-[#FAF6EE] p-3 rounded border border-[#E7E2D8]/50">
                        <input
                          id="chef-special-checkbox"
                          type="checkbox"
                          checked={adminForm.isChefSpecial}
                          onChange={(e) => setAdminForm({ ...adminForm, isChefSpecial: e.target.checked })}
                          className="w-4 h-4 rounded text-[#C5A880] focus:ring-[#C5A880] border-[#E7E2D8] cursor-pointer"
                        />
                        <label htmlFor="chef-special-checkbox" className="text-xs font-bold text-[#60564C] select-none cursor-pointer">
                          Mark as Chef&apos;s Special Signature Dish
                        </label>
                      </div>

                      {/* Form action button submit */}
                      <button
                        type="submit"
                        className="w-full bg-[#1C1917] hover:bg-[#38332D] text-white py-3 text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        {editingItemId ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            Update Live offering
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            Add dish to live menu
                          </>
                        )}
                      </button>

                    </form>
                  </div>
                </div>

              </div>
              )}

              {/* Blog Workspace */}
              {activeAdminSubTab === 'blog' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Ledger of All Blogs */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="bg-white p-5 rounded-lg border border-[#E7E2D8]">
                      <div className="flex justify-between items-center border-b border-[#FAF6EE] pb-3 mb-4">
                        <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#60564C]">
                          Chronicles Ledger ({blogs.length} posts total)
                        </span>
                        <span className="text-[10px] text-[#A89F91] font-mono leading-none">
                          Heirloom Database Connected
                        </span>
                      </div>

                      {/* Admin Blog Search */}
                      <div className="relative mb-4">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#A89F91]">
                          <Search className="w-3.5 h-3.5" />
                        </span>
                        <input
                          type="text"
                          placeholder="Filter chronicles in ledger..."
                          value={blogAdminSearch}
                          onChange={(e) => setBlogAdminSearch(e.target.value)}
                          className="w-full pl-9 pr-4 py-2 bg-[#FAF9F5]/50 border border-[#E7E2D8] focus:border-[#0B4224] focus:outline-none focus:ring-1 focus:ring-[#0B4224] text-xs rounded transition-all"
                        />
                      </div>

                      {/* Blogs List */}
                      <div className="space-y-3.5 max-h-[620px] overflow-y-auto pr-2 custom-scrollbar">
                        {(() => {
                          const ledgerBlogs = blogs.filter(post => 
                            post.title.toLowerCase().includes(blogAdminSearch.toLowerCase()) ||
                            post.category.toLowerCase().includes(blogAdminSearch.toLowerCase()) ||
                            post.author.toLowerCase().includes(blogAdminSearch.toLowerCase())
                          );

                          if (ledgerBlogs.length === 0) {
                            return (
                              <div className="text-center py-10 bg-[#FAF9F5]/40 border border-dashed border-[#E7E2D8] rounded text-xs text-[#8C8375] space-y-1">
                                <FileText className="w-6 h-6 mx-auto opacity-40 text-[#A89F91]" />
                                <p className="font-semibold text-center">No posts found</p>
                                <p className="text-[10px] text-center">Create a new chronicle on the right panel.</p>
                              </div>
                            );
                          }

                          return ledgerBlogs.map((post) => (
                            <div key={post.id} className="p-4 bg-[#FAF9F5]/70 hover:bg-[#FAF9F5] border border-[#E7E2D8] rounded transition-all duration-150 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                              <div className="flex items-start gap-3.5 flex-1 w-full">
                                <div className="w-12 h-12 rounded border border-[#E7E2D8] overflow-hidden shrink-0 bg-white">
                                  <img 
                                    src={post.image || "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=100&auto=format&fit=crop&q=80"}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <div className="space-y-1 flex-grow">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <h4 className="font-serif text-sm font-bold text-[#1C1917] leading-tight text-left">{post.title}</h4>
                                    <span className="bg-[#0B4224]/10 text-[#0B4224] text-[8px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded leading-none">
                                      {post.category}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-[#60564C] leading-snug font-light line-clamp-2 text-left">{post.excerpt}</p>
                                  <div className="flex items-center gap-2 text-[9px] text-[#8C8375] font-mono select-none pt-0.5">
                                    <span>By {post.author}</span>
                                    <span>•</span>
                                    <span>{post.date || 'Today'}</span>
                                    <span>•</span>
                                    <span>{post.readTime || '3 min read'}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex sm:flex-col justify-end items-end gap-2.5 shrink-0">
                                <div className="flex gap-2">
                                  <button
                                    type="button"
                                    onClick={() => startEditBlogPost(post)}
                                    className="w-8 h-8 rounded border border-[#E7E2D8] hover:border-[#0B4224] bg-white flex items-center justify-center text-[#8C8375] hover:text-[#0B4224] transition-colors cursor-pointer"
                                    title="Edit Chronicle"
                                  >
                                    <Edit3 className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteBlogPost(post.id)}
                                    className="w-8 h-8 rounded border border-[#E7E2D8] hover:border-red-500 bg-white flex items-center justify-center text-[#8C8375] hover:text-red-500 transition-colors cursor-pointer"
                                    title="Delete Chronicle"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ));
                        })()}
                      </div>
                    </div>
                  </div>

                  {/* Creation Form Panel */}
                  <div className="lg:col-span-5">
                    <div className="bg-white p-5 rounded-lg border border-[#E7E2D8] space-y-4 shadow-3xs sticky top-4">
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-[#C5A880] font-extrabold block">Chronicles Editorial Desk</span>
                        <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                          {editingBlogId ? 'Editor: Editorial Mode' : 'Author: Compose Draft'}
                        </h3>
                      </div>

                      <form onSubmit={handleCreateOrUpdateBlogPost} className="space-y-4 text-left">
                        
                        {/* Title input */}
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-[#60564C] block">Chronicle Title *</label>
                          <input
                            type="text"
                            required
                            placeholder="Enter article title..."
                            value={blogForm.title}
                            onChange={(e) => setBlogForm(prev => ({ ...prev, title: e.target.value }))}
                            className="w-full px-3 py-2 bg-[#FAF9F5]/70 border border-[#E7E2D8] focus:border-[#0B4224] focus:outline-none focus:ring-1 focus:ring-[#0B4224] text-xs rounded transition-all placeholder:text-[#A89F91]/50"
                          />
                        </div>

                        {/* Category and Author Row */}
                        <div className="grid grid-cols-2 gap-3.5">
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold tracking-wider text-[#60564C] block">Category</label>
                            <select
                              value={blogForm.category}
                              onChange={(e) => setBlogForm(prev => ({ ...prev, category: e.target.value as any }))}
                              className="w-full px-2 py-2 bg-[#FAF9F5]/70 border border-[#E7E2D8] focus:border-[#0B4224] focus:outline-none focus:ring-1 focus:ring-[#0B4224] text-xs rounded transition-all"
                            >
                              <option value="Gastronomy">Gastronomy</option>
                              <option value="Wellness">Wellness</option>
                              <option value="Heritage">Heritage</option>
                              <option value="Behind the Scenes">Behind the Scenes</option>
                            </select>
                          </div>
                          
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold tracking-wider text-[#60564C] block">Author Name</label>
                            <input
                              type="text"
                              placeholder="Chef Vardhhan"
                              value={blogForm.author}
                              onChange={(e) => setBlogForm(prev => ({ ...prev, author: e.target.value }))}
                              className="w-full px-3 py-2 bg-[#FAF9F5]/70 border border-[#E7E2D8] focus:border-[#0B4224] focus:outline-none focus:ring-1 focus:ring-[#0B4224] text-xs rounded transition-all placeholder:text-[#A89F91]/50"
                            />
                          </div>
                        </div>

                        {/* Excerpt */}
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-[#60564C] block">Excerpt (Short Description) *</label>
                          <textarea
                            required
                            rows={2}
                            maxLength={220}
                            placeholder="A summary of the article to show in feeds..."
                            value={blogForm.excerpt}
                            onChange={(e) => setBlogForm(prev => ({ ...prev, excerpt: e.target.value }))}
                            className="w-full px-3 py-2 bg-[#FAF9F5]/70 border border-[#E7E2D8] focus:border-[#0B4224] focus:outline-none focus:ring-1 focus:ring-[#0B4224] text-xs rounded transition-all placeholder:text-[#A89F91]/50 resize-none font-light leading-relaxed font-sans"
                          />
                        </div>

                        {/* Article Content Body */}
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-[#60564C] block">Chronicle Content Body *</label>
                          <textarea
                            required
                            rows={6}
                            placeholder="Pen down your article body here. Separate paragraphs with double enter line breaks (\n\n)..."
                            value={blogForm.content}
                            onChange={(e) => setBlogForm(prev => ({ ...prev, content: e.target.value }))}
                            className="w-full px-3 py-2 bg-[#FAF9F5]/70 border border-[#E7E2D8] focus:border-[#0B4224] focus:outline-none focus:ring-1 focus:ring-[#0B4224] text-xs rounded transition-all placeholder:text-[#A89F91]/50 resize-y font-light leading-relaxed font-sans"
                          />
                        </div>

                        {/* Drag & Drop Local Image Upload with fallback Text Input */}
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-[#60564C] block">Featured Banner Image</label>
                          
                          {/* Drag Zone */}
                          <div
                            onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                            onDragLeave={() => setIsDragOver(false)}
                            onDrop={(e) => {
                              e.preventDefault();
                              setIsDragOver(false);
                              if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                                const file = e.dataTransfer.files[0];
                                if (!file.type.startsWith('image/')) {
                                  setBlogImageUploadError('Only image files are permitted.');
                                  return;
                                }
                                if (file.size > 2 * 1024 * 1024) {
                                  setBlogImageUploadError('Image size should be less than 2MB.');
                                  return;
                                }
                                setBlogImageUploadError('');
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setBlogForm(prev => ({ ...prev, image: reader.result as string }));
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                            className={`border-2 border-dashed rounded p-4 text-center cursor-pointer transition-all ${
                              isDragOver 
                                ? 'border-[#0B4224] bg-[#0B4224]/5' 
                                : blogForm.image 
                                  ? 'border-emerald-200 bg-emerald-50/15' 
                                  : 'border-[#E7E2D8] hover:border-[#C5A880] bg-[#FAF9F5]/40'
                            }`}
                          >
                            <input
                              type="file"
                              id="blog-image-picker"
                              accept="image/*"
                              onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                  const file = e.target.files[0];
                                  if (!file.type.startsWith('image/')) {
                                    setBlogImageUploadError('Only image files are permitted.');
                                    return;
                                  }
                                  if (file.size > 2 * 1024 * 1024) {
                                    setBlogImageUploadError('Image size should be less than 2MB.');
                                    return;
                                  }
                                  setBlogImageUploadError('');
                                  const rdr = new FileReader();
                                  rdr.onloadend = () => {
                                    setBlogForm(prev => ({ ...prev, image: rdr.result as string }));
                                  };
                                  rdr.readAsDataURL(file);
                                }
                              }}
                              className="hidden"
                            />
                            <label htmlFor="blog-image-picker" className="cursor-pointer block w-full h-full">
                              {blogForm.image ? (
                                <div className="space-y-2">
                                  <div className="relative w-36 h-20 mx-auto rounded border border-[#E7E2D8] overflow-hidden shadow-2xs bg-white">
                                    <img src={blogForm.image} alt="Upload preview" className="w-full h-full object-cover" />
                                    <button
                                      type="button"
                                      onClick={(ev) => {
                                        ev.preventDefault();
                                        ev.stopPropagation();
                                        setBlogForm(prev => ({ ...prev, image: '' }));
                                      }}
                                      className="absolute top-1 right-1 bg-red-600 text-white w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold shadow-xs hover:bg-red-700 cursor-pointer text-center"
                                      title="Remove image"
                                    >
                                      ✕
                                    </button>
                                  </div>
                                  <p className="text-[10px] text-emerald-800 font-medium">Image uploaded successfully</p>
                                </div>
                              ) : (
                                <div className="space-y-1 py-1 text-[#8C8375]">
                                  <Upload className="w-5 h-5 mx-auto text-[#C5A880] opacity-85" />
                                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#60564C]">Drag & Drop Featured Image</p>
                                  <p className="text-[9px] font-light">or click to browse local files (max 2MB)</p>
                                </div>
                              )}
                            </label>
                          </div>

                          {/* Fallback Image Web URL */}
                          <div className="pt-1.5 space-y-1 text-left">
                            <label className="text-[8px] uppercase font-bold tracking-widest text-[#8C8375] block">or specify direct image URL</label>
                            <input
                              type="url"
                              placeholder="https://images.unsplash.com/photo-..."
                              value={blogForm.image.startsWith('data:') ? '' : blogForm.image}
                              onChange={(e) => setBlogForm(prev => ({ ...prev, image: e.target.value }))}
                              className="w-full px-3 py-1.5 bg-[#FAF9F5]/70 border border-[#E7E2D8] focus:border-[#0B4224] focus:outline-none focus:ring-1 focus:ring-[#0B4224] text-[10px] rounded transition-all placeholder:text-[#A89F91]/40"
                            />
                          </div>

                          {blogImageUploadError && (
                            <p className="text-[10px] text-red-600 font-semibold">{blogImageUploadError}</p>
                          )}
                        </div>

                        {/* Action buttons */}
                        <div className="pt-2 flex gap-3 select-none">
                          {editingBlogId ? (
                            <>
                              <button
                                type="submit"
                                className="flex-1 bg-[#0B4224] hover:bg-[#08301a] text-white py-2.5 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                              >
                                <Check className="w-3.5 h-3.5" />
                                Save Updates
                              </button>
                              <button
                                type="button"
                                onClick={cancelEditBlogPost}
                                className="flex-1 bg-white border border-[#E7E2D8] hover:bg-[#FAF9F5]/40 text-[#60564C] py-2.5 text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer text-center"
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <button
                              type="submit"
                              className="w-full bg-[#1C1917] hover:bg-[#34302C] text-white py-2.5 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <BookOpen className="w-3.5 h-3.5 text-[#C5A880]" />
                              Post Chronicle
                            </button>
                          )}
                        </div>

                      </form>
                    </div>
                  </div>

                </div>
              )}

            </>
          )}
        </motion.div>
      )}

        </AnimatePresence>

        {/* ==================== INTERACTIVE CLICK OVERLAY MODALS ==================== */}
        <AnimatePresence>
          
          {/* 1. MENU ITEM DETAILS & CUSTOM ORDER MODAL */}
          {selectedMenuItem && (
            <motion.div 
              key="menu-item-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 md:p-6 overflow-y-auto"
              onClick={() => setSelectedMenuItem(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                className="bg-white rounded-lg border border-[#E7E2D8] shadow-2xl max-w-2xl w-full text-left overflow-hidden relative flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image Section */}
                <div className="w-full md:w-56 h-48 md:h-auto relative bg-[#FAF9F5] shrink-0">
                  <img 
                    src={selectedMenuItem.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80"}
                    alt={selectedMenuItem.name}
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                  {selectedMenuItem.isChefSpecial && (
                    <div className="absolute top-3 left-3 bg-[#1C1917] text-[#C5A880] text-[9px] uppercase font-serif tracking-widest font-extrabold px-2.5 py-1 rounded shadow-md border border-[#C5A880]/25">
                      Chef Signature
                    </div>
                  )}
                </div>

                {/* Details Form Section */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                  
                  {/* Close button */}
                  <button 
                    onClick={() => setSelectedMenuItem(null)}
                    className="absolute top-4 right-4 text-[#8C8375] hover:text-[#1C1917] w-7 h-7 rounded-full bg-[#FAF9F5] flex items-center justify-center border border-[#E7E2D8] transition-all cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="space-y-4">
                    <div className="space-y-1 pr-6">
                      <div className="flex flex-wrap items-center gap-2">
                        {selectedMenuItem.tags.map(t => (
                          <span key={t} className="text-[8px] tracking-wider uppercase font-bold text-[#C5A880] bg-[#FAF6EE] px-1.5 py-0.5 rounded border border-[#EAE5D9]">
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#1C1917] tracking-tight">{selectedMenuItem.name}</h3>
                      <p className="font-serif text-lg font-extrabold text-[#C5A880]">${selectedMenuItem.price}</p>
                    </div>

                    <p className="text-xs text-[#60564C] leading-relaxed font-light font-sans bg-[#FAFBFB] p-3 rounded border border-[#E7E2D8]/35">
                      {selectedMenuItem.description}
                    </p>

                    {/* Chef's Sourcing Lore */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-bold text-[#C5A880] tracking-wide block">Chef&apos;s Harvest Story:</span>
                      <p className="text-[11px] text-[#8C8375] italic leading-normal font-sans text-left">
                        Artisanally gathered near Hubballi&apos;s verdant farmlands. Prepared with pure organic hand-ground spices, aromatic fresh curry leaves, and premium ingredients sourced from independent farmers of Karnataka.
                      </p>
                    </div>

                    {/* Pre-order Customizer Box */}
                    <div className="bg-[#FAF9F5] p-4 rounded border border-[#E7E2D8] space-y-3">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#1C1917] block"> BIND BESPOKE PRE-ORDER ADJUSTMENTS</span>
                      
                      <div className="space-y-2">
                        <label className="flex items-center gap-2.5 text-xs text-[#60564C] select-none cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={customDairy}
                            onChange={(e) => setCustomDairy(e.target.checked)}
                            className="w-4 h-4 rounded text-[#C5A880] focus:ring-[#C5A880] border-[#E7E2D8] cursor-pointer"
                          />
                          <span>Remove dairy (Substitute with luxury plant alternatives)</span>
                        </label>

                        <label className="flex items-center gap-2.5 text-xs text-[#60564C] select-none cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={customGluten}
                            onChange={(e) => setCustomGluten(e.target.checked)}
                            className="w-4 h-4 rounded text-[#C5A880] focus:ring-[#C5A880] border-[#E7E2D8] cursor-pointer"
                          />
                          <span>Prepare Gluten-Free variant (Certified oat base substitution)</span>
                        </label>
                      </div>

                      {/* Custom note to chef */}
                      <div className="space-y-1">
                        <label className="block text-[9px] uppercase tracking-wider text-[#8C8375] font-bold">Preparation instructions for Chef Artisans:</label>
                        <input 
                          type="text" 
                          placeholder="e.g., Extreme nut allergy, extra coastal garlic, serve warm..."
                          value={customNote}
                          onChange={(e) => setCustomNote(e.target.value)}
                          className="w-full bg-white border border-[#EAE2D8] text-xs p-2 rounded focus:outline-none focus:border-[#C5A880] font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit / Pre-ordered status */}
                  <div className="pt-2 border-t border-[#FAF6EE]">
                    {isPreordered ? (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-emerald-50 text-emerald-800 text-xs px-4 py-3 rounded-md border border-emerald-200 font-sans flex items-center justify-center gap-2"
                      >
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span><strong>Pre-order Bound Successfully!</strong> Chef will align this on your guestroom check.</span>
                      </motion.div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setIsPreordered(true);
                          setTimeout(() => {
                            // Close popup after 1.8 seconds of success
                            setSelectedMenuItem(null);
                          }, 1800);
                        }}
                        className="w-full bg-[#1C1917] hover:bg-[#3E3831] text-white py-3 text-xs uppercase tracking-widest font-bold rounded transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>Reserve and Pre-order for Guest Suite</span>
                      </button>
                    )}
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}

          {/* 2. SANCTUARY DETAIL MODALS */}
          {selectedSanctuary && (
            <motion.div 
              key="sanctuary-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={() => setSelectedSanctuary(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                className="bg-[#FAF9F5] rounded-lg border border-[#E7E2D8] shadow-2xl max-w-lg w-full text-left overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Sanctuary Image Banner */}
                <div className="h-48 w-full relative shrink-0 overflow-hidden bg-[#FAF6EE]">
                  <img 
                    src={
                      selectedSanctuary === 'lodging' 
                        ? 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80'
                        : selectedSanctuary === 'bistro'
                        ? 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80'
                        : 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80'
                    }
                    alt="Vardhan Sanctuary"
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/30 to-black/10 z-10" />
                  <button 
                    onClick={() => setSelectedSanctuary(null)}
                    className="absolute top-4 right-4 z-20 text-[#FAF9F5] hover:text-[#1C1917] w-7 h-7 rounded-full bg-black/40 hover:bg-[#FAF9F5] flex items-center justify-center transition-all cursor-pointer border border-[#E7E2D8]/20"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  {selectedSanctuary === 'lodging' && (
                    <>
                      <h3 className="font-serif text-xl font-bold text-[#1C1917]">AC Comfort Rooms & Suites</h3>
                      <p className="text-xs text-[#60564C] leading-relaxed text-left">
                        Perched beautifully overlooking scenic city gardens, our multi-level air-conditioned (AC) comfort rooms and suites present spectacular private baths, balconies, cozy fireplace features, and restful setups.
                      </p>
                      <div className="bg-white p-3 rounded border border-[#E7E2D8] space-y-1.5 text-left">
                        <span className="text-[9px] uppercase tracking-wider text-[#C5A880] font-extrabold block">Bespoke Comfort Features:</span>
                        <ul className="text-[11px] text-[#60564C] space-y-1 list-disc list-inside">
                          <li>High-efficiency Air Conditioning (AC) with precise climate control</li>
                          <li>Fresh organic cotton linen wraps and comfortable bedding</li>
                          <li>Handcrafted regional teak and sandalwood furniture</li>
                          <li>Complimentary high-speed Wi-Fi & quiet study corners</li>
                        </ul>
                      </div>
                    </>
                  )}

                  {selectedSanctuary === 'bistro' && (
                    <>
                      <h3 className="font-serif text-xl font-bold text-[#1C1917]">Heirloom Bistro & Gastronomy</h3>
                      <p className="text-xs text-[#60564C] leading-relaxed text-left">
                        With daily garden-view tables overlooking lush greenery, our luxurious bistro leverages exclusive organic partnerships with regional producers, turning simple local grains and farm-fresh ingredients into visual and culinary wonders.
                      </p>
                      <div className="bg-white p-3 rounded border border-[#E7E2D8] space-y-1.5 text-left">
                        <span className="text-[9px] uppercase tracking-wider text-[#C5A880] font-extrabold block">Gastronomic Commitments:</span>
                        <ul className="text-[11px] text-[#60564C] space-y-1 list-disc list-inside">
                          <li>100% pure organic vegetarian grains</li>
                          <li>Ingredients sourced strictly from local sustainable farms</li>
                          <li>Traditional wood-pressed cold oils and pure organic ghee</li>
                        </ul>
                      </div>
                    </>
                  )}

                  {selectedSanctuary === 'reserves' && (
                    <>
                      <h3 className="font-serif text-xl font-bold text-[#1C1917]">Stone Cellar Reserves</h3>
                      <p className="text-xs text-[#60564C] leading-relaxed text-left">
                        Carved deep into the dry subterranean slate rocks of Vardhan, our private reserve room houses a distinguished catalog of aged mocktails, fresh regional juices, and botanical herbal distillates.
                      </p>
                      <div className="bg-white p-3 rounded border border-[#E7E2D8] space-y-1.5">
                        <span className="text-[9px] uppercase tracking-wider text-[#C5A880] font-extrabold block">Cellar Amenities:</span>
                        <ul className="text-[11px] text-[#60564C] space-y-1 list-disc list-inside">
                          <li>Private herbalist consultations for custom organic infusions</li>
                          <li>Tastings of rare wood-matured non-alcoholic juices and regional squashes</li>
                          <li>Premium hand-poured custom botanicals and kokum / buttermilk specialties</li>
                        </ul>
                      </div>
                    </>
                  )}

                  <div className="pt-4 border-t border-[#E7E2D8] flex items-center justify-end gap-3">
                    <button 
                      onClick={() => setSelectedSanctuary(null)}
                      className="px-4 py-2 text-xs border border-[#E7E2D8] bg-white text-[#60564C] hover:bg-[#FAF6EE] rounded cursor-pointer font-sans"
                    >
                      Close Overview
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedSanctuary(null);
                        setActiveTab('contact');
                      }}
                      className="px-4 py-2 text-xs bg-[#1C1917] text-white hover:bg-[#34302C] rounded shadow-xs flex items-center gap-1.5 font-bold cursor-pointer font-sans"
                    >
                      Book Sanctuary Stay <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* 3. CORE PRINCIPLES DETAIL MODAL */}
          {selectedPrinciple && (
            <motion.div 
              key="principle-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={() => setSelectedPrinciple(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                className="bg-white rounded-lg border border-[#E7E2D8] shadow-2xl max-w-md w-full text-left p-6 space-y-5 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedPrinciple(null)}
                  className="absolute top-4 right-4 text-[#8C8375] hover:text-[#1C1917] w-7 h-7 rounded-full bg-[#FAF9F5] flex items-center justify-center border border-[#E7E2D8] transition-all cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="w-10 h-10 rounded-full bg-[#FAF6EE] text-[#C5A880] flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>

                {selectedPrinciple === 'stewardship' && (
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#C5A880]">Artisan Foundation Principle</span>
                    <h3 className="font-serif text-xl font-bold text-[#1C1917]">Ecological Local Stewardship</h3>
                    <p className="text-xs text-[#60564C] leading-relaxed font-light text-left">
                      Vardhan Hotel stands as a landmark of pristine responsibility, and we pledge to keep our local community cleaner and greener than we found it. We follow strict zero-waste water recycling and do not allow commercial single-use plastics anywhere within our property.
                    </p>
                    <div className="bg-[#FAF9F5] p-3 rounded border border-[#E7E2D8]/70 text-[11px] text-[#60564C] leading-relaxed text-left">
                      <strong>Community Pledge:</strong> Since our beginning in 2021, our registered foundation has sponsored local community plantation programs, promoting green spaces and supporting organic vegetarian farms of Northern Karnataka.
                    </div>
                  </div>
                )}

                {selectedPrinciple === 'authenticity' && (
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#C5A880]">Artisan Foundation Principle</span>
                    <h3 className="font-serif text-xl font-bold text-[#1C1917]">Seasonal Culinary Authenticity</h3>
                    <p className="text-xs text-[#60564C] leading-relaxed font-light">
                      True luxury food does not hide behind processed imports. If the weather in Karnataka does not support a specific vegetable, it simply won&apos;t appear on our plate. We curate dynamic heirloom bistro offerings based entirely on nature&apos;s active season.
                    </p>
                    <div className="bg-[#FAF9F5] p-3 rounded border border-[#E7E2D8]/70 text-[11px] text-[#60564C] leading-relaxed">
                      <strong>Local Suppliers:</strong> We source exclusive organic heirloom lettuces, hand-foraged mushrooms, and pressed organic lavender lavender from independent valleys.
                    </div>
                  </div>
                )}

                {selectedPrinciple === 'stillness' && (
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#C5A880]">Artisan Foundation Principle</span>
                    <h3 className="font-serif text-xl font-bold text-[#1C1917]">Unplugged Personal Stillness</h3>
                    <p className="text-xs text-[#60564C] leading-relaxed font-light text-left">
                      We protect your attention span. Our suites remain intentionally disconnected from television systems and artificial noises. We invite you to gaze at the green gardens, read near our comfortable fireplaces, and rediscover silent peace.
                    </p>
                    <div className="bg-[#FAF9F5] p-3 rounded border border-[#E7E2D8]/70 text-[11px] text-[#60564C] leading-relaxed">
                      <strong>Premium Amenities:</strong> Every suite has independent wood hearth logs, a high-contrast ink reader with classic literature, and lavender herbal sleep oils.
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-[#E7E2D8] flex justify-end">
                  <button 
                    onClick={() => setSelectedPrinciple(null)}
                    className="w-full bg-[#1C1917] hover:bg-[#34302C] text-white py-2.5 text-xs font-bold rounded cursor-pointer font-sans text-center transition-colors"
                  >
                    Acknowledged Philosophy
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* 4. DETAILED REVIEW REFLECTION MODAL */}
          {selectedReview && (
            <motion.div 
              key="review-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={() => setSelectedReview(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                className="bg-white rounded-lg border border-[#E7E2D8] shadow-2xl max-w-md w-full text-left p-6 space-y-4 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedReview(null)}
                  className="absolute top-4 right-4 text-[#8C8375] hover:text-[#1C1917] w-7 h-7 rounded-full bg-[#FAF9F5] flex items-center justify-center border border-[#E7E2D8] transition-all cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < selectedReview.rating ? 'fill-[#C5A880] text-[#C5A880]' : 'text-[#E7E2D8]'
                      }`}
                    />
                  ))}
                </div>

                <div className="space-y-1">
                  <strong className="font-serif text-lg font-bold text-[#1C1917] block">{selectedReview.name}</strong>
                  <span className="text-xs text-[#8C8375] font-sans">Guest Stay: {selectedReview.date} &bull; Verified Ledger Booking Reference</span>
                </div>

                <p className="text-xs text-[#60564C] leading-relaxed font-light italic bg-[#FAF9F5] p-4 rounded border border-[#EAE5D9]/70">
                  &ldquo;{selectedReview.content}&rdquo;
                </p>

                {/* Hand-written concierge reply simulation */}
                <div className="space-y-1.5 border-l-2 border-[#C5A880] pl-3.5 pt-0.5">
                  <span className="text-[10px] uppercase font-bold text-[#C5A880] tracking-wider block">Handwritten Response from Hotel Reception Desk:</span>
                  <p className="text-[11px] text-[#8C8375] leading-relaxed font-sans italic text-left">
                    &ldquo;Thank you for sharing your quiet reflections with us. We are proud to keep the fire embers lit for you at Vardhan Shakahari Kitchen and look forward to welcoming you back to Vardhan Hotel when you seek culinary purity and comfort again.&rdquo;
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <button 
                    onClick={() => setSelectedReview(null)}
                    className="px-4 py-2 border border-[#E7E2D8] hover:bg-[#FAF9F5] text-xs text-[#60564C] font-semibold rounded cursor-pointer font-sans"
                  >
                    Close Ledger Details
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}

          {/* 5. METRIC INFOSHEET MODAL */}
          {selectedMetric && (
            <motion.div 
              key="metric-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={() => setSelectedMetric(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                className="bg-white rounded-lg border border-[#E7E2D8] shadow-2xl max-w-sm w-full text-left p-6 space-y-4 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedMetric(null)}
                  className="absolute top-4 right-4 text-[#8C8375] hover:text-[#1C1917] w-7 h-7 rounded-full bg-[#FAF9F5] flex items-center justify-center border border-[#E7E2D8] transition-all cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>

                {selectedMetric === 'views' && (
                  <div className="space-y-3 text-center md:text-left">
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A880] font-extrabold block">Resort Standard Guarantee</span>
                    <h3 className="font-serif text-xl font-bold text-[#1C1917]">100% Scenic Garden Views</h3>
                    <p className="text-xs text-[#60564C] leading-relaxed font-light text-left">
                      Every single window inside Vardhan Hotel points directly to beautiful gardens or Hubballi scenic views. We believe that no guests should ever be assigned a view facing a blank wall.
                    </p>
                    <p className="text-[11px] text-[#8C8375] italic text-left">
                      Enjoy pristine fresh air and tranquil morning sunrise directly from your room.
                    </p>
                  </div>
                )}

                {selectedMetric === 'concierge' && (
                  <div className="space-y-3 text-center md:text-left">
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A880] font-extrabold block">Resort Standard Guarantee</span>
                    <h3 className="font-serif text-xl font-bold text-[#1C1917]">24h Concierge Direct</h3>
                    <p className="text-xs text-[#60564C] leading-relaxed font-light">
                      No automated robocalls or mobile applications. When you ring the heavy brass desk bell on our wood counters, a real human concierge instantly answers to look after your custom pre-order modifications or log hearth wood requests.
                    </p>
                    <p className="text-[11px] text-[#8C8375] italic">
                      True coastal service remains dedicated to friendly human conversations.
                    </p>
                  </div>
                )}

                <div className="pt-2 text-center">
                  <button 
                    onClick={() => setSelectedMetric(null)}
                    className="w-full bg-[#1C1917] hover:bg-[#34302C] text-white py-2.5 text-xs font-semibold rounded cursor-pointer font-sans"
                  >
                    Acknowledge Guarantee
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}

          {/* 6. COASTAL DIRECTION GUIDE MODAL */}
          {selectedDirection && (
            <motion.div 
              key="direction-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={() => setSelectedDirection(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                className="bg-white rounded-lg border border-[#E7E2D8] shadow-2xl max-w-md w-full text-left p-6 space-y-4 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedDirection(null)}
                  className="absolute top-4 right-4 text-[#8C8375] hover:text-[#1C1917] w-7 h-7 rounded-full bg-[#FAF9F5] flex items-center justify-center border border-[#E7E2D8] transition-all cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>

                {selectedDirection === 'monterey' && (
                  <div className="space-y-3">
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A880] font-extrabold block">Transportation Route Plan</span>
                    <h3 className="font-serif text-xl font-bold text-[#1C1917]">Path from Hubballi Airport (HBX)</h3>
                    <p className="text-xs text-[#60564C] leading-relaxed font-light text-left">
                      Exit the Hubli airport and head directly north-east onto Gokul Road. Pass through the key commercial and industrial complexes of the city, and keep driving straight.
                    </p>
                    <div className="bg-[#FAF9F5] p-3 rounded text-[11px] text-[#60564C] space-y-1 text-left">
                      <strong>Key Stopovers / Highlights:</strong>
                      <ul className="list-disc list-inside space-y-0.5 text-[#8C8375]">
                        <li>Akshay Park Cross (Major intersection)</li>
                        <li>Gokul Road commercial areas (Shopping / local crafts)</li>
                      </ul>
                    </div>
                  </div>
                )}

                {selectedDirection === 'sfo' && (
                  <div className="space-y-3">
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A880] font-extrabold block">Transportation Route Plan</span>
                    <h3 className="font-serif text-xl font-bold text-[#1C1917]">Transit from Railway Station (UBL)</h3>
                    <p className="text-xs text-[#60564C] leading-relaxed font-light text-left">
                      Head west from the Hubballi Junction Railway Station through Lamington Road. Connect directly onto Gokul Road via the city flyover routes to arrive smoothly without traffic delays.
                    </p>
                    <div className="bg-[#FAF9F5] p-3 rounded text-[11px] text-[#60564C] space-y-1 text-left">
                      <strong>Navigation Advice:</strong>
                      <p className="text-[#8C8375] leading-normal font-sans text-[10px]">
                        We urge guests arriving by late-night trains to call our front desk in advance to coordinate automated check-in keys or early morning breakfast pre-orders.
                      </p>
                    </div>
                  </div>
                )}

                {selectedDirection === 'advisory' && (
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-2 text-rose-600">
                      <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center">
                        <Map className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif text-lg font-bold">Gokul Road Traffic Advisory</h3>
                    </div>
                    <p className="text-xs text-[#60564C] leading-relaxed font-light">
                      During peak weekday office hours (9:00 AM - 11:30 AM &amp; 5:30 PM - 8:30 PM), Gokul Road experience heavy traffic. Plan your transfers accordingly.
                    </p>
                    <div className="bg-rose-50 p-3 rounded border border-rose-100 text-[11px] text-[#9A3412] leading-relaxed space-y-1">
                      <strong>Important preparation:</strong>
                      <p className="font-sans text-[10px]">
                        Please check Google Maps or call our reception desk on our direct line before embarking. Our staff can always guide you through alternative local bypass paths to save time.
                      </p>
                    </div>
                  </div>
                )}

                <div className="pt-2 text-center">
                  <button 
                    onClick={() => setSelectedDirection(null)}
                    className="w-full bg-[#1C1917] hover:bg-[#34302C] text-white py-2.5 text-xs font-semibold rounded cursor-pointer font-sans"
                  >
                    Acknowledge Route Guide
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}

          {/* 7. CHRONICLES ARTICLE DETAILED READER */}
          {selectedBlog && (
            <motion.div 
              key="blog-reader-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedBlog(null)}
            >
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                className="bg-white rounded-lg border border-[#E7E2D8] shadow-2xl max-w-2xl w-full text-left overflow-hidden relative my-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 z-20 text-[#8C8375] hover:text-[#1C1917] w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center border border-[#E7E2D8] transition-all cursor-pointer shadow-xs font-bold"
                  aria-label="Close Article"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Hero Feature Image */}
                <div className="relative h-60 md:h-72 w-full overflow-hidden bg-[#FAF9F5]">
                  <img 
                    src={selectedBlog.image || "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1000"} 
                    alt={selectedBlog.title} 
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 text-white space-y-1.5 md:space-y-2 text-left">
                    <span className="bg-[#C5A880] text-white text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded shadow-3xs inline-block">
                      {selectedBlog.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                      {selectedBlog.title}
                    </h3>
                  </div>
                </div>

                {/* Article Body Content */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#8C8375] font-mono border-b border-[#FAF6EE] pb-4 select-none">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#C5A880]" />
                      By {selectedBlog.author}
                    </span>
                    <span className="text-[#8C8375]/35">•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                      {selectedBlog.date}
                    </span>
                    <span className="text-[#8C8375]/35">•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                      {selectedBlog.readTime}
                    </span>
                  </div>

                  {/* Body Text Blocks */}
                  <div className="text-sm text-[#34302C] leading-relaxed font-sans space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar text-justify font-light">
                    {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="indent-4 first:indent-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Closure Footer */}
                  <div className="pt-3 border-t border-[#FAF6EE] flex justify-between items-center bg-[#FAF9F5]/40 -mx-6 -mb-6 md:-mx-8 md:-mb-8 p-4 md:p-6 select-none">
                    <div className="text-[10px] text-[#8C8375] italic">
                      Part of Vardhhan Hotel archives.
                    </div>
                    <button 
                      onClick={() => setSelectedBlog(null)}
                      className="bg-[#1C1917] hover:bg-[#34302C] text-[#FAF9F5] px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer font-sans"
                    >
                      Acknowledge Chronicle
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* 8. PRIVACY POLICY & TERMS CHRONICLES */}
          {selectedPolicy && (
            <motion.div 
              key="policy-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedPolicy(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-white rounded-lg border border-[#E7E2D8] shadow-2xl max-w-lg w-full text-left p-6 space-y-4 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedPolicy(null)}
                  className="absolute top-4 right-4 text-[#8C8375] hover:text-[#1C1917] w-7 h-7 rounded-full bg-[#FAF9F5] flex items-center justify-center border border-[#E7E2D8] transition-all cursor-pointer font-bold"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>

                {selectedPolicy === 'privacy' && (
                  <div className="space-y-3">
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A880] font-extrabold block">Legal & Security Standard</span>
                    <h3 className="font-serif text-xl font-bold text-[#1C1917]">Privacy Policy</h3>
                    <div className="text-xs text-[#60564C] leading-relaxed font-light space-y-3 max-h-[350px] overflow-y-auto pr-1">
                      <p>At Vardhhan Hotel, your digital privacy remains as highly respected as your quiet physical stay with us on Gokul Road.</p>
                      <p><strong>1. Information Collection:</strong> We collect details you explicitly submit through our contact desks, preorder sheets, or review portals including names, email addresses, phone coordinates, and dietary allergies.</p>
                      <p><strong>2. Usage:</strong> Your coordinates are used purely to coordinate direct shuttle services, customize traditional Indian recipe servings, or sync table reservations. We strictly never sell, trade, or distribute your private profiles to global marketing rings.</p>
                      <p><strong>3. Storage Security:</strong> Data is logged safely inside secure browser environments or private secure storage with industry-standard firewalls. Check-in records can be deleted upon manual checkout requests at the reception front office.</p>
                    </div>
                  </div>
                )}

                {selectedPolicy === 'terms' && (
                  <div className="space-y-3">
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A880] font-extrabold block">Legal & Security Standard</span>
                    <h3 className="font-serif text-xl font-bold text-[#1C1917]">Terms & Conditions</h3>
                    <div className="text-xs text-[#60564C] leading-relaxed font-light space-y-3 max-h-[350px] overflow-y-auto pr-1">
                      <p>By browsing this platform or utilizing the booking portals of Vardhhan Hotel & Restaurant at Pride Icon, you agree to these legal conditions:</p>
                      <p><strong>1. Pure Vegetarian (Shakahari) Policy:</strong> Guests are strictly requested to honor the 100% pure vegetarian, eggless, alcohol-free standards of our restaurant. Bringing external meats, eggs, or spirits inside the bistro dining area or public courtyards is strictly forbidden to preserve traditional sanctity.</p>
                      <p><strong>2. Check-in / Checkout Coordinates:</strong> Standard room check-ins occur at 12:00 PM and checkouts by 11:00 AM. Cancellations or changes to table bookings must be notified 2 hours in advance via our direct concierge line.</p>
                      <p><strong>3. User Postings:</strong> Re-routing raw computer scripts, posting false reviews, or vandalizing administrative entries within the public registry is legally actionable.</p>
                    </div>
                  </div>
                )}

                {selectedPolicy === 'cookies' && (
                  <div className="space-y-3">
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A880] font-extrabold block">Legal & Security Standard</span>
                    <h3 className="font-serif text-xl font-bold text-[#1C1917]">Cookies & Prefs Policy</h3>
                    <div className="text-xs text-[#60564C] leading-relaxed font-light space-y-3 max-h-[350px] overflow-y-auto pr-1">
                      <p>We respect your peace of mind. Our platform utilizes simple, essential, local browser storage or cookies to provide secure authentication, maintain admin session states, and preserve guest dining preferences.</p>
                      <p><strong>1. Essential Cookies:</strong> Required for core website functions such as keeping you authenticated in our admin panels or remembering your active navigation tabs.</p>
                      <p><strong>2. Detail Preferences:</strong> Remembers your active filter settings, search queries, or selected dishes to offer an elevated, seamless digital experience.</p>
                      <p><strong>3. No Third-Party Tracking:</strong> We strictly do not utilize advertising cookies or cross-site tracking engines to monitor your browsing habits across the web.</p>
                    </div>
                  </div>
                )}

                <div className="pt-2 text-center">
                  <button 
                    onClick={() => setSelectedPolicy(null)}
                    className="w-full bg-[#1C1917] hover:bg-[#34302C] text-white py-2.5 text-xs font-semibold rounded cursor-pointer font-sans"
                  >
                    Agree and Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer id="app-footer" className="bg-[#1C1917] text-[#A89F91] border-t border-[#EAE5D9]/10 py-16 px-6 mt-12 font-sans">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-serif text-[#FAF9F5] text-md font-bold tracking-wider">
              Vardhhan Hotel & Restaurant
            </h5>
            <p className="text-xs text-[#8C8375] leading-relaxed max-w-sm text-left">
              An award-winning boutique hotel prioritizing pure, exquisite 100% vegetarian culinary masterpieces and comfortable personal care.
            </p>
            {/* Social Media Icons with Redirections */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#FAF9F5]/40 block">Connect With Us</span>
              <div className="flex items-center gap-3">
                <a 
                  id="social-instagram"
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-[#EAE5D9]/5 flex items-center justify-center text-[#A89F91] hover:text-[#C5A880] hover:bg-[#EAE5D9]/10 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  id="social-facebook"
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-[#EAE5D9]/5 flex items-center justify-center text-[#A89F91] hover:text-[#C5A880] hover:bg-[#EAE5D9]/10 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  id="social-twitter"
                  href="https://www.x.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-[#EAE5D9]/5 flex items-center justify-center text-[#A89F91] hover:text-[#C5A880] hover:bg-[#EAE5D9]/10 transition-all duration-200"
                  aria-label="Twitter/X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  id="social-youtube"
                  href="https://www.youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-[#EAE5D9]/5 flex items-center justify-center text-[#A89F91] hover:text-[#C5A880] hover:bg-[#EAE5D9]/10 transition-all duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h5 className="font-serif text-[#FAF9F5] font-bold uppercase tracking-wider text-[10px]">Quick Links</h5>
            <div className="flex flex-col gap-2">
              <button onClick={() => setActiveTab('home')} className="text-left hover:text-[#FAF9F5] hover:underline decoration-[#C5A880] transition-colors cursor-pointer text-[#8C8375]">Home</button>
              <button onClick={() => setActiveTab('about')} className="text-left hover:text-[#FAF9F5] hover:underline decoration-[#C5A880] transition-colors cursor-pointer text-[#8C8375]">About Us</button>
              <button onClick={() => { setActiveTab('menu'); setMenuSubTab('all'); }} className="text-left hover:text-[#FAF9F5] hover:underline decoration-[#C5A880] transition-colors cursor-pointer text-[#8C8375]">Menu</button>
              <button onClick={() => setActiveTab('reviews')} className="text-left hover:text-[#FAF9F5] hover:underline decoration-[#C5A880] transition-colors cursor-pointer text-[#8C8375]">Reviews</button>
              <button onClick={() => setActiveTab('blog')} className="text-left hover:text-[#FAF9F5] hover:underline decoration-[#C5A880] transition-colors cursor-pointer text-[#8C8375]">Blog Chronicles</button>
              <button onClick={() => setActiveTab('contact')} className="text-left hover:text-[#FAF9F5] hover:underline decoration-[#C5A880] transition-colors cursor-pointer text-[#8C8375]">Contact Us</button>
            </div>
          </div>

          {/* Column 3: Local Guides (External) */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <h5 className="font-serif text-[#FAF9F5] font-bold uppercase tracking-wider text-[10px]">Local Guides</h5>
            <div className="flex flex-col gap-2">
              <a 
                href="https://www.karnatakatourism.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FAF9F5] hover:underline decoration-[#C5A880] transition-colors text-[#8C8375] text-left"
              >
                Karnataka Tourism
              </a>
              <a 
                href="https://en.wikipedia.org/wiki/Hubli" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FAF9F5] hover:underline decoration-[#C5A880] transition-colors text-[#8C8375] text-left"
              >
                Hubballi City Guide
              </a>
              <a 
                href="https://dharwad.nic.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FAF9F5] hover:underline decoration-[#C5A880] transition-colors text-[#8C8375] text-left"
              >
                District Portal
              </a>
              <a 
                href="https://www.hampi.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FAF9F5] hover:underline decoration-[#C5A880] transition-colors text-[#8C8375] text-left"
              >
                Hampi Heritage Site
              </a>
            </div>
          </div>

          {/* Column 4: Copyright and Location */}
          <div className="md:col-span-3 text-xs space-y-3 text-[#8C8375]">
            <h5 className="font-serif text-[#FAF9F5] font-bold uppercase tracking-wider text-[10px]">Contact Desk</h5>
            <p className="text-xs text-left justify-start">
              Shop No 1, Pride Icon,<br />
              Gokul Road, Hubballi - 580030
            </p>
            <div className="pt-2 border-t border-[#EAE5D9]/10 text-[11px] space-y-1 text-left">
              <p>&copy; {new Date().getFullYear()} Vardhhan Hotel.</p>
              <p>All Rights Reserved.</p>
              <div className="flex flex-wrap items-center gap-1.5 py-1 select-none">
                <button 
                  type="button" 
                  onClick={() => setSelectedPolicy('privacy')} 
                  className="hover:text-[#FAF9F5] hover:underline transition-colors text-[#8C8375] text-[10px] cursor-pointer"
                >
                  Privacy Policy
                </button>
                <span className="text-[#8C8375]/40 text-[9px]">•</span>
                <button 
                  type="button" 
                  onClick={() => setSelectedPolicy('terms')} 
                  className="hover:text-[#FAF9F5] hover:underline transition-colors text-[#8C8375] text-[10px] cursor-pointer"
                >
                  Terms & Conditions
                </button>
                <span className="text-[#8C8375]/40 text-[9px]">•</span>
                <button 
                  type="button" 
                  onClick={() => setSelectedPolicy('cookies')} 
                  className="hover:text-[#FAF9F5] hover:underline transition-colors text-[#8C8375] text-[10px] cursor-pointer"
                >
                  Cookie Policy
                </button>
              </div>
              <p className="text-[10px] tracking-widest uppercase text-[#C5A880] font-semibold mt-1">Hubballi, Karnataka</p>
            </div>
          </div>

        </div>
      </footer>

      {/* CUSTOM CONFIRMATION OVERLAY (IFrame & Sandbox Friendly) */}
      <AnimatePresence>
        {customConfirm.isOpen && (
          <motion.div
            key="custom-confirm-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-none"
            onClick={() => setCustomConfirm(prev => ({ ...prev, isOpen: false }))}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              className="bg-white rounded-lg border border-[#E7E2D8] shadow-2xl max-w-sm w-full text-left p-6 space-y-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setCustomConfirm(prev => ({ ...prev, isOpen: false }))}
                className="absolute top-4 right-4 text-[#8C8375] hover:text-[#1C1917] w-7 h-7 rounded-full bg-[#FAF9F5] flex items-center justify-center border border-[#E7E2D8] transition-all cursor-pointer"
                aria-label="Cancel confirmation"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-widest text-[#C5A880] font-extrabold block">System Confirmation</span>
                <h3 className="font-serif text-lg font-bold text-[#1C1917]">{customConfirm.title}</h3>
                <p className="text-xs text-[#60564C] leading-relaxed font-light">
                  {customConfirm.message}
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setCustomConfirm(prev => ({ ...prev, isOpen: false }))}
                  className="flex-1 bg-[#FAF9F5] hover:bg-[#EAE5D9]/40 border border-[#E7E2D8] text-[#1C1917] py-2.5 text-xs font-semibold rounded transition-colors cursor-pointer text-center font-sans"
                >
                  {customConfirm.cancelText || 'Cancel'}
                </button>
                <button
                  type="button"
                  onClick={customConfirm.onConfirm}
                  className={`flex-1 text-white py-2.5 text-xs font-semibold rounded transition-colors cursor-pointer text-center font-sans ${
                    customConfirm.isDangerous
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-[#0B4224] hover:bg-[#08301a]'
                  }`}
                >
                  {customConfirm.confirmText || 'Confirm'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
