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
  // BREAKFAST (Strictly eggless & pure vegetarian)
  {
    id: 'b1',
    name: 'Vardhhan Royal Ghee Roast Dosa',
    description: 'Crispy, golden-brown rice crepe brushed with premium Gir cow A2 ghee, served with fresh coconut chutney, tangy tomato-onion relish, and piping hot hand-ground sambar.',
    price: 180,
    category: 'breakfast',
    tags: ['Signature', 'Pure Vegetarian', 'Gluten-Free Option'],
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'b2',
    name: 'Millet Rava Idli with Saffron Accent',
    description: 'Steamed organic kodo-millet and local lentil cakes infused with cashew nuts, ginger, and fresh green chilies. Served with cooling mint-coriander dip.',
    price: 150,
    category: 'breakfast',
    tags: ['Healthy', 'Pure Vegetarian'],
    image: 'https://images.unsplash.com/photo-1589301760014-d571583d3ce1?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'b3',
    name: 'Sattvic Avocado & Toasted Amaranth Poha',
    description: 'Flattened red rice dry-tossed with roasted split peanuts, fresh curry leaves, mustard seeds, grated fresh coconut, topped with seasoned avocado pearls.',
    price: 190,
    category: 'breakfast',
    tags: ['Healthy', 'Pure Vegetarian', 'Vegan'],
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'b4',
    name: 'Vardhhan Specialty Puri Bhaji',
    description: 'Golden-fried fluffy wheat flatbreads served with a classic semi-dry potato curry prepared with ginger, curry leaves, and green chilies, accompanied by home-made pickles.',
    price: 170,
    category: 'breakfast',
    tags: ['Classic', 'Pure Vegetarian'],
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=80'
  },
  
  // LUNCH & DINNER (Authentic rich Indian Shakahari courses)
  {
    id: 'd1',
    name: 'Shahi Khoya Paneer Tikka Masala',
    description: 'Clay-oven roasted organic paneer skewers simmered in an indulgent tomato, cashew-nut, and fresh melon seed gravy, subtly perfumed with cardamoms.',
    price: 360,
    category: 'lunch-dinner',
    tags: ['Signature', 'Pure Vegetarian', 'Luxury'],
    pairing: 'Pairs exquisitely with Butter Garlic Naan or Tandoori Roti',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'd2',
    name: 'North Karnataka Jolada Rotti & Ennegai',
    description: 'Traditional wood-fired flatbreads of sorghum flour (jowar), served with charred tender baby eggplants stuffed with peanut-sesame spice blend.',
    price: 320,
    category: 'lunch-dinner',
    tags: ['Pure Vegetarian', 'Regional Favorite', 'Gluten-Free'],
    pairing: 'Complements wonderfully with thick Gir cow milk curds',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'd3',
    name: 'Royal Awadhi Jackfruit Dum Biryani',
    description: 'Long-grain basmati saffron rice layered with tender chunks of seasoned jackfruit, fresh mint leaves, rose water, slow cooked in a sealed clay pot.',
    price: 410,
    category: 'lunch-dinner',
    tags: ['Pure Vegetarian', 'Chef Special'],
    pairing: 'Best enjoyed with our organic pomegranate raita',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'd4',
    name: 'Vardhhan Dal Makhani Bukhara',
    description: 'Whole black lentils, red kidney beans slow-cooked overnight over embers with fresh pureed tomatoes and hand-churned white butter, finished with cream.',
    price: 280,
    category: 'lunch-dinner',
    tags: ['Pure Vegetarian', 'Classic Comfort'],
    pairing: 'Pairs beautifully with our clay-oven lachha paratha',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80'
  },

  // DESSERTS (Rich Indian Shakahari sweets)
  {
    id: 'de1',
    name: 'Elaneer Payasam (Tender Coconut Kheer)',
    description: 'Grated tender coconut pulp simmered in reduced organic whole milk, sweetened with organic palm jaggery, and infused with cardamom.',
    price: 160,
    category: 'desserts',
    tags: ['Signature', 'Pure Vegetarian'],
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'de2',
    name: 'Sada Shahi Kesar Badam Halwa',
    description: 'Rich almond paste slow-stirred in golden Gir cow A2 ghee, generously studded with Kashmiri saffron strands, almond slivers, and premium green pistachios.',
    price: 190,
    category: 'desserts',
    tags: ['Pure Vegetarian', 'Luxury Sweet'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'de3',
    name: 'Saffron Pistachio Kulfi with Rabdi',
    description: 'Dense hand-churned frozen milk ice cream, flavored with saffron threads and crushed pistachios, garnished with a spiral of thickened sweet rabdi.',
    price: 150,
    category: 'desserts',
    tags: ['Pure Vegetarian', 'Contains Nuts'],
    image: 'https://images.unsplash.com/photo-1594911774802-8822a707caff?w=600&auto=format&fit=crop&q=80'
  },

  // DRINKS (Refreshing Shakahari non-alcoholic elixirs)
  {
    id: 'dr1',
    name: 'Saffron Cardamom Lassi Shahi',
    description: 'Creamy hand-churned yogurt beverage sweetened with organic cane sugar, loaded with rich cream, saffron, and sweet cardamoms.',
    price: 120,
    category: 'drinks',
    tags: ['Pure Vegetarian', 'Refreshing'],
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'dr2',
    name: 'Traditional South Indian Filter Coffee',
    description: 'Hand-picked chicory blend custom roasted and slow-brewed in brass filters, aerated with frothy hot organic fresh farm milk served in traditional brass dabarah.',
    price: 90,
    category: 'drinks',
    tags: ['Pure Vegetarian', 'Hot Drink', 'Classic'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'dr3',
    name: 'Royal Masala Chai Infusion',
    description: 'Assam black tea leaves boiled with crushed green cardamom, fresh ginger, cinnamon logs, and cloves, combined with rich fresh whole milk.',
    price: 80,
    category: 'drinks',
    tags: ['Pure Vegetarian', 'Hot Drink'],
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'dr4',
    name: 'Royal Kokum & Bruised Mint Sherbet',
    description: 'Tangy red kokum berry extract spiced with roasted cumin powder, black salt, organic sugar, and bruised fresh wild mint leaves over crystal ice.',
    price: 110,
    category: 'drinks',
    tags: ['Pure Vegetarian', 'Cold Drink', 'Vegan'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80'
  },
];
