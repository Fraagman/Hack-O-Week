export type FoodType = "veg" | "nonveg" | "egg";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  type: FoodType;
  tags?: ("V" | "VG" | "GF" | "S" | "N" | "Chef")[];
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters & Snacks",
    subtitle: "Shuruaat — Begin your feast with Nagpuri favourites",
    icon: "Leaf",
    items: [
      {
        name: "Tarri Poha",
        description:
          "Nagpur's iconic flattened rice topped with fiery tarri (spiced curry), sev, chopped onions, coriander & a squeeze of lemon",
        price: 120,
        type: "veg",
        tags: ["V", "VG", "GF"],
        featured: true,
      },
      {
        name: "Saoji Paneer Tikka",
        description:
          "Fresh cottage cheese cubes marinated in our secret 32-spice Saoji masala, chargrilled to perfection in the tandoor",
        price: 280,
        type: "veg",
        tags: ["V", "S", "GF"],
      },
      {
        name: "Dahi Ke Kebab",
        description:
          "Crispy hung curd patties studded with cashews & raisins, shallow fried golden, served with pudina chutney",
        price: 220,
        type: "veg",
        tags: ["V", "N"],
      },
      {
        name: "Veg Samosa (2 Pcs)",
        description:
          "Crispy hand-rolled pastry stuffed with spiced aloo & green peas, served with sweet tamarind & green chutney",
        price: 90,
        type: "veg",
        tags: ["V", "VG"],
      },
      {
        name: "Chicken Seekh Kebab",
        description:
          "Minced chicken blended with fresh herbs, ginger, green chillies & aromatic spices, cooked on charcoal skewers",
        price: 320,
        type: "nonveg",
        tags: ["GF"],
      },
      {
        name: "Mutton Shammi Kebab",
        description:
          "Finely minced Nagpuri mutton patties with chana dal, whole spices & fresh mint, pan-seared till golden",
        price: 360,
        type: "nonveg",
        tags: ["GF", "Chef"],
      },
      {
        name: "Fish Amritsari",
        description:
          "Boneless rawas (Indian salmon) fillets coated in spiced besan batter, deep fried crisp, with lemon & chaat masala",
        price: 340,
        type: "nonveg",
        tags: ["S"],
      },
      {
        name: "Chicken Lollipop (6 Pcs)",
        description:
          "Crispy fried chicken drumettes tossed in house-made Schezwan sauce, garnished with spring onion & sesame",
        price: 300,
        type: "nonveg",
        tags: ["S"],
      },
    ],
  },
  {
    id: "saoji",
    title: "Saoji Specials",
    subtitle: "Nagpur's legendary fiery cuisine — a bold blend of 32 spices",
    icon: "Flame",
    items: [
      {
        name: "Saoji Mutton",
        description:
          "The crown jewel of Nagpuri cuisine — tender goat meat slow-cooked for 4 hours in our ancestral 32-spice Saoji masala, fiery & unforgettable",
        price: 480,
        type: "nonveg",
        tags: ["S", "GF", "Chef"],
        featured: true,
      },
      {
        name: "Saoji Chicken",
        description:
          "Juicy country chicken pieces simmered in authentic Saoji gravy bursting with bold Vidarbha spices, kokum & curry leaves",
        price: 420,
        type: "nonveg",
        tags: ["S", "GF"],
      },
      {
        name: "Saoji Keema",
        description:
          "Coarsely minced mutton cooked Saoji style with caramelized onions, coconut, poppy seeds & whole red chillies",
        price: 400,
        type: "nonveg",
        tags: ["S", "GF"],
      },
      {
        name: "Saoji Paneer",
        description:
          "Fresh cottage cheese cubes in the classic Saoji gravy, a vegetarian rendition of Nagpur's most loved dish",
        price: 350,
        type: "veg",
        tags: ["V", "S"],
      },
      {
        name: "Saoji Egg Curry",
        description:
          "Farm-fresh eggs simmered in traditional Saoji masala with curry leaves, mustard seeds & whole spices",
        price: 280,
        type: "egg",
        tags: ["S", "GF"],
      },
      {
        name: "Patodi Rassa",
        description:
          "Traditional Vidarbha delicacy — gram flour dumplings in tangy, spicy curry with peanuts & coconut, grandma's recipe",
        price: 250,
        type: "veg",
        tags: ["V", "VG", "Chef"],
      },
    ],
  },
  {
    id: "mains",
    title: "Main Course",
    subtitle: "Mukhya Vyanjan — Signature gravies & curries",
    icon: "UtensilsCrossed",
    items: [
      {
        name: "Dal Makhani",
        description:
          "Black urad dal & rajma slow-cooked overnight on charcoal with butter, cream & tomatoes, rich & velvety",
        price: 280,
        type: "veg",
        tags: ["V", "GF"],
      },
      {
        name: "Paneer Butter Masala",
        description:
          "Soft malai paneer cubes in silky tomato-cashew-cream gravy, mildly spiced, a North Indian classic",
        price: 320,
        type: "veg",
        tags: ["V", "GF", "N"],
      },
      {
        name: "Bharli Vangi",
        description:
          "Stuffed baby brinjals in roasted peanut-coconut-sesame masala, a beloved Maharashtrian home-style preparation",
        price: 260,
        type: "veg",
        tags: ["V", "VG", "GF", "N"],
        featured: true,
      },
      {
        name: "Veg Kolhapuri",
        description:
          "Mixed seasonal vegetables in fiery Kolhapuri masala with dry coconut, poppy seeds & whole red chillies",
        price: 280,
        type: "veg",
        tags: ["V", "S"],
      },
      {
        name: "Butter Chicken",
        description:
          "Tandoori chicken tikka pieces simmered in rich, creamy tomato-butter gravy with kasuri methi, a timeless favourite",
        price: 380,
        type: "nonveg",
        tags: ["GF"],
      },
      {
        name: "Mutton Rogan Josh",
        description:
          "Tender goat meat braised in aromatic Kashmiri spices, saffron, fennel & dried ginger — slow-cooked perfection",
        price: 450,
        type: "nonveg",
        tags: ["GF", "Chef"],
        featured: true,
      },
      {
        name: "Fish Curry (Vidarbha Style)",
        description:
          "Fresh river fish simmered in tangy kokum-coconut curry with curry leaves, mustard seeds & green chillies",
        price: 380,
        type: "nonveg",
        tags: ["GF", "S"],
      },
      {
        name: "Chicken Tikka Masala",
        description:
          "Chargrilled chicken tikka in rich onion-tomato-cashew gravy, garnished with cream & coriander",
        price: 360,
        type: "nonveg",
        tags: ["GF"],
      },
    ],
  },
  {
    id: "biryanis",
    title: "Biryanis & Breads",
    subtitle: "Dum Pukht — Aromatic rice & tandoor-fresh breads",
    icon: "Salad",
    items: [
      {
        name: "Nagpuri Mutton Biryani",
        description:
          "Fragrant aged basmati rice layered with spiced goat meat, saffron, caramelized onions & fresh mint, slow-cooked dum style — served with raita & mirchi ka salan",
        price: 420,
        type: "nonveg",
        tags: ["GF", "Chef"],
        featured: true,
      },
      {
        name: "Chicken Dum Biryani",
        description:
          "Hyderabadi-style chicken biryani sealed with wheat dough, slow-cooked on dum with whole spices & kewra water",
        price: 360,
        type: "nonveg",
        tags: ["GF"],
      },
      {
        name: "Veg Dum Biryani",
        description:
          "Garden-fresh seasonal vegetables with basmati rice, mint, saffron & whole garam masala, served with raita & salan",
        price: 280,
        type: "veg",
        tags: ["V", "GF"],
      },
      {
        name: "Jeera Rice",
        description:
          "Fluffy basmati rice tempered with cumin seeds, ghee & whole spices — the perfect accompaniment",
        price: 160,
        type: "veg",
        tags: ["V", "GF"],
      },
      {
        name: "Butter Naan",
        description:
          "Soft leavened bread brushed with Amul butter, baked in our traditional clay tandoor",
        price: 60,
        type: "veg",
        tags: ["V"],
      },
      {
        name: "Garlic Naan",
        description:
          "Tandoor-baked naan topped with roasted garlic, coriander & melted butter",
        price: 70,
        type: "veg",
        tags: ["V"],
      },
      {
        name: "Tandoori Roti",
        description:
          "Whole wheat bread hand-rolled & baked in clay tandoor, lightly brushed with desi ghee",
        price: 40,
        type: "veg",
        tags: ["V", "VG"],
      },
      {
        name: "Laccha Paratha",
        description:
          "Flaky, multi-layered whole wheat bread with butter, crispy outside & soft inside",
        price: 70,
        type: "veg",
        tags: ["V"],
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Meetha — Sweet endings to a perfect meal",
    icon: "Cake",
    items: [
      {
        name: "Santra Barfi",
        description:
          "Nagpur's pride — rich milk fudge infused with fresh Nagpuri santra (orange) zest & juice, topped with pistachios. A local delicacy!",
        price: 180,
        type: "veg",
        tags: ["V", "GF", "N", "Chef"],
        featured: true,
      },
      {
        name: "Gulab Jamun (2 Pcs)",
        description:
          "Soft deep-fried khoya dumplings soaked in warm rose-cardamom sugar syrup, served hot",
        price: 140,
        type: "veg",
        tags: ["V"],
      },
      {
        name: "Shahi Tukda",
        description:
          "Royal Mughlai bread pudding layered with thickened rabri, saffron, crushed pistachios & edible silver leaf",
        price: 200,
        type: "veg",
        tags: ["V", "N"],
      },
      {
        name: "Kulfi Falooda",
        description:
          "Traditional dense Indian ice cream (malai flavour) served with rose falooda, basil seeds, vermicelli & nuts",
        price: 180,
        type: "veg",
        tags: ["V", "N"],
      },
      {
        name: "Malpua with Rabri",
        description:
          "Crispy sweet pancakes made with mawa & fennel, drizzled with thickened sweetened milk & dry fruits",
        price: 180,
        type: "veg",
        tags: ["V", "N"],
      },
      {
        name: "Phirni",
        description:
          "Chilled ground rice pudding set in traditional earthen kulhad, infused with cardamom, saffron & rose water",
        price: 150,
        type: "veg",
        tags: ["V", "GF"],
      },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    subtitle: "Peya Padaarth — Refreshing drinks & traditional coolers",
    icon: "Wine",
    items: [
      {
        name: "Nagpur Orange Fresh",
        description:
          "Freshly squeezed Nagpuri santra (mandarin orange) juice — our city's pride, seasonal & 100% natural, no sugar added",
        price: 130,
        type: "veg",
        tags: ["V", "VG", "GF"],
        featured: true,
      },
      {
        name: "Masala Chai",
        description:
          "Traditional Indian spiced tea brewed with Assam leaves, fresh ginger, cardamom, cloves & cinnamon — served in kulhad",
        price: 60,
        type: "veg",
        tags: ["V", "GF"],
      },
      {
        name: "Mango Lassi",
        description:
          "Chilled creamy yogurt shake blended with fresh Ratnagiri Alphonso mango pulp & a hint of cardamom",
        price: 100,
        type: "veg",
        tags: ["V", "GF"],
      },
      {
        name: "Sweet / Salt Lassi",
        description:
          "Refreshing hand-churned dahi (yogurt) drink — choose meethi (sweet with sugar) or namkeen (salted with roasted cumin)",
        price: 80,
        type: "veg",
        tags: ["V", "GF"],
      },
      {
        name: "Mattha (Buttermilk)",
        description:
          "Spiced churned buttermilk with roasted cumin, fresh coriander, curry leaves & green chilli — a Vidarbha summer staple",
        price: 60,
        type: "veg",
        tags: ["V", "GF"],
      },
      {
        name: "Jaljeera",
        description:
          "Tangy cumin-mint cooler with black salt, amchur & hing — Nagpur's favourite digestive & refreshing drink",
        price: 70,
        type: "veg",
        tags: ["V", "VG", "GF"],
      },
      {
        name: "Cold Coffee",
        description:
          "Creamy chilled coffee blended with vanilla ice cream, topped with chocolate sauce & whipped cream",
        price: 140,
        type: "veg",
        tags: ["V"],
      },
      {
        name: "Kokum Sharbat",
        description:
          "Sweet & tangy kokum berry cooler with jaggery, cumin & rock salt — a refreshing Vidarbha summer tradition",
        price: 80,
        type: "veg",
        tags: ["V", "VG", "GF"],
      },
    ],
  },
];

export const tagInfo: Record<string, { label: string; color: string }> = {
  V: { label: "Vegetarian", color: "bg-olive-100 text-olive-700" },
  VG: { label: "Vegan", color: "bg-green-100 text-green-700" },
  GF: { label: "Gluten-Free", color: "bg-amber-100 text-amber-700" },
  S: { label: "Spicy", color: "bg-red-100 text-red-700" },
  N: { label: "Contains Nuts", color: "bg-orange-100 text-orange-700" },
  Chef: { label: "Chef's Special", color: "bg-burgundy/10 text-burgundy" },
};
