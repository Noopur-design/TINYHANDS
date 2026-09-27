import type { ShopSearch } from "@/data/search";

export type CategoryId =
  | "dolls"
  | "bags"
  | "clothing"
  | "toys"
  | "feeding"
  | "linen"
  | "strollers";

export type Swatch = { name: string; hex: string };

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  image: string;
  blurb: string;
  description: string;
  colors: Swatch[];
  sizes: string[];
  featured?: boolean;
  bestseller?: boolean;
  newest?: boolean;
  rank: number;
};

export const categoryMeta: Record<
  CategoryId,
  { name: string; image: string; blurb: string }
> = {
  dolls: {
    name: "Dolls",
    image: "/catalog/teddy.jpg",
    blurb: "Bears and soft company for naps and naming.",
  },
  bags: {
    name: "Bags",
    image: "/catalog/tote.jpg",
    blurb: "Totes and carriers that actually close.",
  },
  clothing: {
    name: "Clothing",
    image: "/catalog/promo-clothes.jpg",
    blurb: "Knits and dresses in easy layers.",
  },
  toys: {
    name: "Toys",
    image: "/catalog/toycar.jpg",
    blurb: "Wood, wheels and a little noise.",
  },
  feeding: {
    name: "Feeding",
    image: "/catalog/bottle.jpg",
    blurb: "Bottles and the small tools beside them.",
  },
  linen: {
    name: "Bibs",
    image: "/catalog/bib.jpg",
    blurb: "Bibs and muslin for the messy hours.",
  },
  strollers: {
    name: "Strollers",
    image: "/catalog/carseat.jpg",
    blurb: "Carriers and travel systems for the long way home.",
  },
};

export const circleCategories: CategoryId[] = [
  "dolls",
  "bags",
  "clothing",
  "toys",
  "feeding",
  "linen",
];

const ivory = { name: "Ivory", hex: "#F3EEE7" };
const blush = { name: "Blush", hex: "#E7CFC3" };
const sage = { name: "Sage", hex: "#B7C7BE" };
const cocoa = { name: "Cocoa", hex: "#8C6B52" };
const charcoal = { name: "Charcoal", hex: "#3E3A37" };
const sand = { name: "Sand", hex: "#E4D3C2" };
const sizes = ["0–3m", "3–6m", "6–12m", "12–18m"];

export const products: Product[] = [
  {
    id: "honey-bear",
    slug: "honey-bear",
    name: "Honey Bear",
    category: "dolls",
    price: 32,
    compareAt: 40,
    rating: 4.9,
    reviews: 128,
    image: "/catalog/teddy.jpg",
    blurb: "A weighty seated bear with a ribbon that stays tied.",
    description:
      "Honey Bear is stuffed firm enough to sit through a story and soft enough for the crib rail. The pile is a warm mid-brown, the snout is stitched, and the bow is cotton grosgrain.",
    colors: [cocoa, ivory],
    sizes: [],
    featured: true,
    bestseller: true,
    newest: true,
    rank: 1,
  },
  {
    id: "cloud-carry",
    slug: "cloud-carry",
    name: "Cloud Carry Diaper Bag",
    category: "bags",
    price: 84,
    compareAt: 98,
    rating: 4.8,
    reviews: 86,
    image: "/catalog/bag-grey.jpg",
    blurb: "A structured pack with a wipe-clean lining and quiet hardware.",
    description:
      "Cloud Carry stands on its own in a café and opens wide enough for a full change without a dig. Padded straps, a felt-lined pocket for a phone, and a base that doesn’t slump.",
    colors: [charcoal, sand],
    sizes: [],
    featured: true,
    bestseller: true,
    rank: 2,
  },
  {
    id: "blush-tote",
    slug: "blush-day-tote",
    name: "Blush Day Tote",
    category: "bags",
    price: 68,
    rating: 4.7,
    reviews: 54,
    image: "/catalog/tote.jpg",
    blurb: "A short-handle tote for the hours that don’t need a full pack.",
    description:
      "Blush Day Tote is cut from a soft leather-like finish that marks gently rather than shiny. It holds a bottle, a spare knit and a wallet, and the handles sit close to the shoulder.",
    colors: [blush, ivory, cocoa],
    sizes: [],
    featured: true,
    rank: 3,
  },
  {
    id: "harbor",
    slug: "harbor-infant-carrier",
    name: "Harbor Infant Carrier",
    category: "strollers",
    price: 178,
    compareAt: 210,
    rating: 4.8,
    reviews: 73,
    image: "/catalog/carseat.jpg",
    blurb: "A light infant carrier with a deep canopy and a simple click-in base.",
    description:
      "Harbor is the seat you lift with one hand. The canopy drops low for naps, the harness pads are removable, and the shell clicks into the matching travel system.",
    colors: [charcoal, sage],
    sizes: [],
    featured: true,
    bestseller: true,
    rank: 4,
  },
  {
    id: "booties",
    slug: "linen-booties",
    name: "Linen Booties & Bonnet",
    category: "clothing",
    price: 36,
    rating: 4.9,
    reviews: 141,
    image: "/catalog/booties.jpg",
    blurb: "A knit pair for the weeks before real shoes matter.",
    description:
      "The booties stay on because of a soft tie, not elastic that marks. The bonnet is the same yarn, with a brim that doesn’t flop into the eyes.",
    colors: [ivory, blush, sage],
    sizes,
    bestseller: true,
    newest: true,
    rank: 5,
  },
  {
    id: "dress",
    slug: "blush-sunday-dress",
    name: "Blush Sunday Dress",
    category: "clothing",
    price: 48,
    compareAt: 58,
    rating: 4.6,
    reviews: 39,
    image: "/catalog/dress.jpg",
    blurb: "Puffed sleeves, a tie waist, and a hem that survives a floor sit.",
    description:
      "Cut in washed cotton with a lined bodice so it isn’t sheer in the sun. The tie is sewn at the back, not a bow that comes undone in the car seat.",
    colors: [blush, ivory],
    sizes,
    featured: true,
    rank: 6,
  },
  {
    id: "bottle",
    slug: "meadow-glass-bottle",
    name: "Meadow Glass Bottle",
    category: "feeding",
    price: 24,
    rating: 4.7,
    reviews: 210,
    image: "/catalog/bottle.jpg",
    blurb: "Heat-safe glass with a sand sleeve that doesn’t slip.",
    description:
      "A wide neck for filling and a slow-flow nipple that most newborns accept. The sleeve is silicone, dishwasher safe, and quiet against a table.",
    colors: [sand, sage, blush],
    sizes: [],
    rank: 7,
  },
  {
    id: "bibs",
    slug: "petal-bib-pair",
    name: "Petal Bib Pair",
    category: "linen",
    price: 18,
    rating: 4.8,
    reviews: 96,
    image: "/catalog/bib.jpg",
    blurb: "Two cotton bibs with a snap that one hand can find.",
    description:
      "A deep catch and a neck that isn’t tight. They wash soft and don’t pill after the third spinach incident.",
    colors: [blush, ivory, sage],
    sizes: [],
    newest: true,
    rank: 8,
  },
  {
    id: "maple",
    slug: "maple-town-car",
    name: "Maple Town Car",
    category: "toys",
    price: 28,
    rating: 4.8,
    reviews: 77,
    image: "/catalog/toycar.jpg",
    blurb: "A rounded wooden car in four quiet colors.",
    description:
      "Beech wood, water-based paint, wheels that turn. It lives on the floor without looking like a cartoon exploded.",
    colors: [sand],
    sizes: [],
    featured: true,
    bestseller: true,
    rank: 9,
  },
  {
    id: "panda",
    slug: "panda-daypack",
    name: "Panda Daypack",
    category: "bags",
    price: 44,
    rating: 4.7,
    reviews: 63,
    image: "/catalog/panda.jpg",
    blurb: "A small plush pack for the child who insists on carrying something.",
    description:
      "Sized for a snack tin and a soft toy. The straps adjust, the face is stitched rather than plastic, and it sits high on a small back.",
    colors: [ivory, charcoal],
    sizes: [],
    bestseller: true,
    newest: true,
    rank: 10,
  },
  {
    id: "chick",
    slug: "chickling",
    name: "Chickling",
    category: "dolls",
    price: 22,
    rating: 4.9,
    reviews: 118,
    image: "/catalog/chick.jpg",
    blurb: "A round yellow chick with a beak that isn’t sharp.",
    description:
      "Palm-sized, light, and finished so there is nothing to chew off. A first friend for the pram.",
    colors: [sand, ivory],
    sizes: [],
    newest: true,
    rank: 11,
  },
  {
    id: "cow",
    slug: "milk-cow",
    name: "Milk Cow",
    category: "dolls",
    price: 26,
    rating: 4.6,
    reviews: 44,
    image: "/catalog/cow.jpg",
    blurb: "A seated cow with stitched spots and soft horns.",
    description:
      "The same firm fill as Honey Bear, in a cream pile with tan patches. It sits on a shelf without sliding.",
    colors: [ivory, sand],
    sizes: [],
    newest: true,
    rank: 12,
  },
  {
    id: "racer",
    slug: "cherry-roadster",
    name: "Cherry Roadster",
    category: "toys",
    price: 32,
    compareAt: 38,
    rating: 4.7,
    reviews: 51,
    image: "/catalog/racecar.jpg",
    blurb: "A low wooden racer in a single coat of cherry lacquer.",
    description:
      "No stickers, no batteries. The wheels are quiet on wood floors and the shape is easy for a new grip.",
    colors: [cocoa],
    sizes: [],
    bestseller: true,
    rank: 13,
  },
  {
    id: "rideon",
    slug: "sunny-ride-on",
    name: "Sunny Ride-On",
    category: "toys",
    price: 78,
    compareAt: 92,
    rating: 4.5,
    reviews: 33,
    image: "/catalog/rideon.jpg",
    blurb: "A low ride-on with a wide seat and no branding shouting from the side.",
    description:
      "Feet reach the floor early. The body is a warm cream with sage and butter details, and the wheels lock for indoor days.",
    colors: [ivory, sage],
    sizes: [],
    bestseller: true,
    featured: true,
    rank: 14,
  },
  {
    id: "sage-system",
    slug: "sage-travel-system",
    name: "Sage Travel System",
    category: "strollers",
    price: 264,
    compareAt: 298,
    rating: 4.8,
    reviews: 29,
    image: "/catalog/hero-stroll.jpg",
    blurb: "Carrier plus a matching seat, in charcoal or sage.",
    description:
      "The pair from the window: one shell for the car, one for the pavement, and a frame that folds flat enough for a small boot. Canopies are UPF lined.",
    colors: [sage, charcoal],
    sizes: [],
    featured: true,
    rank: 15,
  },
  {
    id: "muslin",
    slug: "muslin-nest-set",
    name: "Muslin Nest Set",
    category: "clothing",
    price: 54,
    rating: 4.8,
    reviews: 88,
    image: "/catalog/promo-clothes.jpg",
    blurb: "Onesies, a cardigan and socks, washed once already.",
    description:
      "Four pieces in breathable cotton, pre-washed so the first wear isn’t stiff. Neutrals that layer under the Sunday dress or stand alone.",
    colors: [ivory, sand],
    sizes,
    featured: true,
    rank: 16,
  },
  {
    id: "day-bag",
    slug: "day-bag-and-charms",
    name: "Day Bag & Charms",
    category: "bags",
    price: 92,
    rating: 4.7,
    reviews: 41,
    image: "/catalog/promo-bag.jpg",
    blurb: "A taupe day bag styled with two small plush charms.",
    description:
      "The bag is canvas with leather-like trim and a clip for the charms, which also live happily in a crib. Pockets for wipes, a bottle sleeve, and a key leash.",
    colors: [sand, cocoa],
    sizes: [],
    featured: true,
    newest: true,
    rank: 17,
  },
  {
    id: "circle",
    slug: "circle-of-friends",
    name: "Circle of Friends",
    category: "dolls",
    price: 58,
    compareAt: 68,
    rating: 4.9,
    reviews: 67,
    image: "/catalog/hero-plush.jpg",
    blurb: "A small pile of cream animals meant to be shared, or not.",
    description:
      "Bear, bunny and lamb in the same undyed pile. Sold as a set so the shelf looks considered, not collected at random.",
    colors: [ivory, blush],
    sizes: [],
    rank: 18,
  },
  {
    id: "trio",
    slug: "nursery-bottle-trio",
    name: "Nursery Bottle Trio",
    category: "feeding",
    price: 42,
    rating: 4.6,
    reviews: 58,
    image: "/catalog/promo-bottles.jpg",
    blurb: "Three glass bottles, a brush, and a cloth that earns its keep.",
    description:
      "The everyday feeding set: slow, medium and a spare, plus a brush that reaches the shoulder of the bottle. The muslin is the same one we use for burping.",
    colors: [sand, ivory],
    sizes: [],
    rank: 19,
  },
];

export type Article = {
  slug: string;
  title: string;
  date: string;
  minutes: number;
  image: string;
  excerpt: string;
  paragraphs: string[];
};

export const articles: Article[] = [
  {
    slug: "pack-a-day-bag",
    title: "Packing a day bag that actually closes",
    date: "March 2, 2026",
    minutes: 4,
    image: "/catalog/promo-bag.jpg",
    excerpt: "What earns a pocket, and what should stay at home.",
    paragraphs: [
      "A day bag fails when it tries to be a weekend bag. The version that closes has one change of clothes, a bottle, a cloth, wipes, and a small toy that is already known.",
      "Put the wet things in the same pocket every time. The bottle sleeve is not a suggestion. Keys live on a leash, because the moment you need them is the moment a child has your hand.",
      "Leave the extra knit unless the day has weather. Weight is what makes a good bag feel cheap by noon.",
    ],
  },
  {
    slug: "first-shoes",
    title: "First shoes, and the weeks before them",
    date: "February 14, 2026",
    minutes: 5,
    image: "/catalog/booties.jpg",
    excerpt: "Booties are not a style choice. They are a temperature.",
    paragraphs: [
      "Most babies do not need structured shoes until they are walking outside. Before that, a soft bootie is there to keep a foot warm and to survive being pulled off in the car.",
      "Look for a tie or a fold, not a tight elastic. If you can see a mark when you take it off, it is too snug. Toes should still spread.",
      "When outdoor shoes finally make sense, buy them for the foot that exists, not the one you hope arrives next month. A thumb’s width at the toe is the old rule because it is still right.",
    ],
  },
  {
    slug: "quieter-nursery",
    title: "A quieter nursery, piece by piece",
    date: "January 20, 2026",
    minutes: 6,
    image: "/catalog/journal-room.jpg",
    excerpt: "You do not need a theme. You need a place the light behaves.",
    paragraphs: [
      "Start with the bed and one chair. Everything else can wait until you know which hours are actually hard. A second lamp matters more than a mural.",
      "Textures do the work that color is often asked to do. A washed quilt, a basket that hides the loud toy, a curtain that isn’t sheer at 5 a.m.",
      "Leave one surface empty. The nursery that photographs well and the nursery you can reset in four minutes are not always the same room. Choose the second.",
    ],
  },
];

export const heroSlides = [
  {
    title: "Dress your little one in style.",
    subtitle: "Knits, soft toys and keepsakes, chosen with a quiet eye.",
    cta: "Shop the collection",
    image: "/catalog/hero-style.jpg",
    alt: "Cream baby knits, booties, a teddy bear and gift boxes on a beige cloth",
    search: { cat: "clothing" },
  },
  {
    title: "Carriers for the long way home.",
    subtitle: "Infant seats and travel systems in charcoal and sage.",
    cta: "Shop strollers",
    image: "/catalog/hero-stroll.jpg",
    alt: "Charcoal and sage infant car seats on a warm beige background",
    search: { cat: "strollers" },
  },
  {
    title: "Toys with a softer voice.",
    subtitle: "Plush animals and wooden playthings, nothing that shouts.",
    cta: "Shop toys",
    image: "/catalog/hero-plush.jpg",
    alt: "A pile of cream and blush plush animals",
    search: { cat: "dolls" },
  },
] as const;

export function money(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function offLabel(price: number, compare?: number) {
  if (!compare || compare <= price) return null;
  return `${Math.round((1 - price / compare) * 100)}% off`;
}

export function getBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function relatedTo(product: Product) {
  return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
}

export function filterProducts(search: ShopSearch) {
  const q = search.q.trim().toLowerCase();
  let list = products.filter((p) => {
    if (search.cat !== "all" && p.category !== search.cat) return false;
    if (q) {
      const hay = `${p.name} ${p.blurb} ${p.description} ${categoryMeta[p.category].name}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (search.price === "25" && p.price >= 25) return false;
    if (search.price === "50" && (p.price < 25 || p.price >= 50)) return false;
    if (search.price === "100" && (p.price < 50 || p.price >= 100)) return false;
    if (search.price === "100plus" && p.price < 100) return false;
    return true;
  });
  if (search.sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
  else if (search.sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
  else if (search.sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
  else if (search.sort === "new")
    list = [...list].sort((a, b) => Number(b.newest) - Number(a.newest) || a.rank - b.rank);
  else list = [...list].sort((a, b) => a.rank - b.rank);
  return list;
}
