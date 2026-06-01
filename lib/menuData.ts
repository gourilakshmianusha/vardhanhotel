export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'breakfast' | 'lunch-dinner' | 'drinks' | 'desserts';
  tags: string[];
  pairing?: string;
  isChefSpecial?: boolean;
  image?: string;
}

export const HOTEL_MENU: MenuItem[] = [
  // BREAKFAST
  {
    id: 'b1',
    name: 'Vanilla Bean French Toast',
    description: 'Brioche soaked in Tahitian vanilla custard, fresh seasonal farm berries, warm organic maple syrup, and whipped Chantilly.',
    price: 22,
    category: 'breakfast',
    tags: ['Vegetarian'],
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'b2',
    name: 'Avocado Tartine & Poached Egg',
    description: 'Smashed organic avocado, heirloom tomatoes, pickled red onions, micro-greens, toasted artisan sourdough, cold-pressed olive oil, and organic poached egg.',
    price: 19,
    category: 'breakfast',
    tags: ['Vegetarian', 'Healthy'],
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'b3',
    name: 'Vardhan Truffled Eggs Benedict',
    description: 'Sautéed organic forest mushrooms, organic poached eggs, fresh dill bernaise sauce, toasted English muffin, served with crisp rosemary-garlic fingerling potatoes.',
    price: 26,
    category: 'breakfast',
    tags: ['Signature', 'Vegetarian'],
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'b4',
    name: 'Açai Antioxidant Bowl',
    description: 'Whipped organic açai, house-made hemp seed granola, sliced bananas, local honeycomb, toasted coconut, and chia seeds.',
    price: 18,
    category: 'breakfast',
    tags: ['Vegan', 'Gluten-Free', 'Healthy'],
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&auto=format&fit=crop&q=80'
  },

  // LUNCH & DINNER
  {
    id: 'd1',
    name: 'Saffron Infused Risotto Medallions',
    description: 'Fragrant custom saffron risotto cakes over roasted baby asparagus, seasonal forest greens, and a citrus-herb Reduction.',
    price: 42,
    category: 'lunch-dinner',
    tags: ['Vegetarian', 'Gluten-Free', 'Signature'],
    pairing: 'Pairs beautifully with our Reserve Chardonnay',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'd2',
    name: 'Aged Balsamic Glazed Paneer Steak',
    description: 'Thick organic block tandoori paneer steak, wild garlic herb emulsion, truffle potato purée, glazed heritage carrots, Cabernet balsamic reduction.',
    price: 52,
    category: 'lunch-dinner',
    tags: ['Vegetarian', 'Gluten-Free'],
    pairing: 'Sensational with the Napa Valley Cabernet',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'd3',
    name: 'Wild Mushroom Gnocchi',
    description: 'House-crafted potato gnocchi, sautéed wild porcini and chanterelle mushrooms, white truffle cream, shaved Pecorino Romano, fresh chives.',
    price: 34,
    category: 'lunch-dinner',
    tags: ['Vegetarian'],
    pairing: 'Exceptional with our Pinot Noir Reserve',
    isChefSpecial: false,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'd4',
    name: 'Ember-Roasted Cauliflower Steak',
    description: 'Spiced thick-cut cauliflower, smoked red pepper coulis, toasted pine nuts, mint-cucumber labneh, herb salad.',
    price: 29,
    category: 'lunch-dinner',
    tags: ['Vegan', 'Gluten-Free', 'Healthy'],
    pairing: 'Pairs nicely with our Provencal Rosé',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80'
  },

  // DESSERTS
  {
    id: 'de1',
    name: 'Decadent Dark Chocolate Soufflé',
    description: '70% Valrhona dark chocolate warm soufflé, salted caramel core, served with house-made Madagascar vanilla bean gelato.',
    price: 16,
    category: 'desserts',
    tags: ['Vegetarian', 'Signature'],
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'de2',
    name: 'Organic Lemon Verbena Tart',
    description: 'Crispi sweet crust, zesty organic lemon verbena curd, delicate toasted meringue, raspberry coulis.',
    price: 14,
    category: 'desserts',
    tags: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'de3',
    name: 'Affogato al Caffè',
    description: 'A scoop of hand-churned hazelnut gelato drowned in a double shot of our signature artisanal espresso, dark chocolate shavings.',
    price: 12,
    category: 'desserts',
    tags: ['Vegetarian', 'Gluten-Free', 'Contains Nuts'],
    image: 'https://images.unsplash.com/photo-1594911774802-8822a707caff?w=600&auto=format&fit=crop&q=80'
  },

  // DRINKS / WINE LIST
  {
    id: 'dr1',
    name: 'Coastline Botanical Gin & Tonic',
    description: 'Curated seaside gin, wild elderflower tonic, slapped fresh rosemary, dehydrated grapefruit wheel, served over hand-carved ice sphere.',
    price: 18,
    category: 'drinks',
    tags: ['Cocktail', 'Signature'],
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'dr2',
    name: 'Vardhan Pinot Noir Reserve 2021',
    description: 'Earthy undertone notes of wild black cherries, clove, and elegant French oak. Exceptional structural body with a velvety finish.',
    price: 22,
    category: 'drinks',
    tags: ['Wine', 'By The Glass', 'Red-Wine'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'dr3',
    name: 'Reserve Chardonnay No. 12',
    description: 'Bright tropical citrus, soft toasted brioche and vanilla oak notes. Rich, complex, and crisp coastal minerality.',
    price: 20,
    category: 'drinks',
    tags: ['Wine', 'By The Glass', 'White-Wine'],
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'dr4',
    name: 'Hibiscus Blossom Elixir',
    description: 'In-house brewed hibiscus tea, cold-pressed lime juice, sparkling mountain spring water, raw lavender honey essence.',
    price: 12,
    category: 'drinks',
    tags: ['Non-Alcoholic', 'Mocktail', 'Healthy'],
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&auto=format&fit=crop&q=80'
  },
];
