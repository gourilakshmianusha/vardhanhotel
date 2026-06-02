export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'Gastronomy' | 'Wellness' | 'Heritage' | 'Behind the Scenes';
  date: string;
  readTime: string;
  author: string;
}

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Alchemy of Pure Shakahari Spice Grinding',
    excerpt: 'Deep-dive into the ancient culinary methodologies employed in our Hubballi kitchen to unlock absolute botanical flavor without modern synthetic agents.',
    content: `In the heart of the kitchen at Vardhhan Hotel, a daily ritual takes place long before the morning sun reaches Gokul Road. Under the watch of our master spice curator, whole cumin seeds, Ceylon cinnamon, cardamom pods, and organic turmeric roots are roasted and ground by hand using dry stone mortars.\n\nTraditional Indian Shakahari (pure vegetarian) cooking relies entirely on natural essential oils locked inside premium whole spices. Standard modern powder bags lack these key volatile notes due to high-heat high-speed mechanical milling. High-speed mills overheat the spice, dissipating its delicate natural aromas. By reverting to slow-pressed stone crushing, we ensure every pinch of curry masala preserves its natural medicine, color, and depth.\n\nOur Ghee Roast Dosa and signature paneer recipes are layered with these house-milled spice mixtures, ensuring guests dine on food that nourishes digestion and satisfies the palate equally. Experience the authentic taste of tradition that avoids artificial coloring and preservatives entirely.`,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1200&auto=format&fit=crop&q=80',
    category: 'Gastronomy',
    date: 'June 01, 2026',
    readTime: '4 min read',
    author: 'Chef Vardhhan'
  },
  {
    id: 'post-2',
    title: 'Self-Care & Mindful Dinings inside Boutique Sanctuaries',
    excerpt: 'Explore how Vardhhan’s ambient lighting, plant-lined air filtering systems, and pure vegetarian diets reduce cortisol and promote true calmness.',
    content: `Modern life moves at a frantic pace, and dining is often reduced to a rushed task. At Vardhhan, we believe in the concept of 'Anna Yoga' — the meditative practice of enjoying nourishment with undivided attention in a serene sanctuary.\n\nWe designed our dining rooms with architectural honesty. Sparing ourselves from unnecessary neon clutter, we use warm low-contrast lighting mimicking the sunset, which naturally prompts your body to rest. Clean indoor plants like the golden pothos work night and day to filter out city elements, leaving you with fresh, deeply breathing air.\n\nOur dietitian-approved cold-press juices and cardamon-infused drinks act as refreshing, anti-inflammatory elixirs that reset your systems. Next time you sit at one of our premium tables, breathe slowly, view the vibrant green plates, put away your phones, and allow our pure vegetarian recipes to restore your internal balance.`,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&auto=format&fit=crop&q=80',
    category: 'Wellness',
    date: 'May 24, 2026',
    readTime: '5 min read',
    author: 'Wellness Desk'
  },
  {
    id: 'post-3',
    title: 'The Culinary Grandeur of the Traditional South Indian Thali',
    excerpt: 'Understanding the harmonious geometry of a premium Thali platter: balancing sour chutneys, heavy dhal curries, crispy poori breads, and sweet cardamom puddings.',
    content: `A traditional Indian Thali is far more than a decorative serving method — it is a sophisticated system of dietary balance rooted in Ayurvedic wisdom. According to traditions, a complete meal must incorporate all six tastes: sweet, sour, salty, bitter, pungent, and astringent.\n\nOur Signature Shakahari Thali Platter is masterfully curated around this geometry. The sweet saffron kheer begins or ends the meal to ease your digestion; the tangy tomatoes and hand-pressed lime supply vitamin-C enhancers; the leafy green subzi offers beneficial iron and fiber; and our dynamic dal fry packed with organic lentils delivers premium protein blocks.\n\nServed inside custom high-clarity bronze cups, the Thali celebrates both visual majesty and complete physical nourishment. We invite you to sit down with your family in our banquet spaces and enjoy a slow-paced, royal feast of pure flavors.`,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=1200&auto=format&fit=crop&q=80',
    category: 'Gastronomy',
    date: 'May 15, 2026',
    readTime: '6 min read',
    author: 'Executive Chef Vardhhan'
  }
];
