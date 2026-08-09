/* ==========================================================================
   JUTEBERRY — product-data.js
   Single source of truth for the product catalog. No prices — every
   product is quantity-quote based (MOQ shown, exact pricing via WhatsApp
   or the on-page quote form).
   ========================================================================== */

const JUTEBERRY_PRODUCTS = [
  {
    id: "block-print-tote",
    name: "Block Print Tote",
    category: "Jute",
    badge: "Best Seller",
    tagline: "Handcrafted Indian block print, leather handles",
    images: ["05.webp", "hero-bag.jpg", "06.webp"],
    description: "Our signature tote, hand block-printed by artisan printers in West Bengal using traditional wooden blocks. Sturdy jute base with reinforced leather handles built for daily retail use.",
    features: [
      "100% natural jute, REACH & OEKO-TEX certified",
      "Hand block-printed — no two bags are identical",
      "Reinforced leather handles, stitched base gusset",
      "Available in custom colourways and prints"
    ],
    moq: 500,
    sample_days: "7-10 days"
  },
  {
    id: "custom-branded",
    name: "Custom Branded Bags",
    category: "Corporate",
    badge: "Popular",
    tagline: "Your logo, screen printed, corporate-ready",
    images: ["06.webp", "07.webp", "09.webp"],
    description: "Built for corporate gifting and retail branding. Your logo is screen printed directly onto natural or dyed jute, with colour-matching available against your brand guidelines.",
    features: [
      "Full-colour logo printing, up to 4 spot colours",
      "Colour-matched jute or cotton base fabric",
      "Custom handle length and gusset sizing",
      "Bulk corporate gifting packaging available"
    ],
    moq: 500,
    sample_days: "7-10 days"
  },
  {
    id: "mini-gift-tote",
    name: "Mini Gift Tote",
    category: "Gift",
    badge: "",
    tagline: "Compact boutique size, retail-friendly",
    images: ["07.webp", "02.webp", "08.webp"],
    description: "A smaller-format tote sized for boutique retail, gift shops and event favours. Same certified natural fibres and finish as our full-size totes, in a compact silhouette.",
    features: [
      "Compact 20x25cm format",
      "Ideal for boutique retail and gifting",
      "Natural or dyed jute base",
      "Custom printing available"
    ],
    moq: 500,
    sample_days: "7-10 days"
  },
  {
    id: "canvas-tote",
    name: "Canvas Tote",
    category: "Cotton",
    badge: "Eco",
    tagline: "100% organic cotton, undyed, zero-waste",
    images: ["08.webp", "07.webp", "21a.webp"],
    description: "Made from certified organic cotton canvas, left undyed to minimise water use and chemical processing. A favourite with retailers positioning around zero-waste and organic credentials.",
    features: [
      "GOTS-eligible organic cotton canvas",
      "Undyed, low-impact production",
      "Reinforced stitched handles",
      "Screen printing available"
    ],
    moq: 500,
    sample_days: "7-10 days"
  },
  {
    id: "printed-shopper",
    name: "Printed Shopper",
    category: "Designer",
    badge: "",
    tagline: "Vibrant all-over print, leather straps",
    images: ["09.webp", "21a.webp", "05.webp"],
    description: "An export favourite among design-led European retailers. All-over pattern printing with premium leather straps for a fashion-forward finish that still meets full REACH compliance.",
    features: [
      "All-over pattern print, custom designs accepted",
      "Genuine leather straps",
      "Structured base for retail display",
      "Popular with concept and design stores"
    ],
    moq: 500,
    sample_days: "7-10 days"
  },
  {
    id: "drawstring-pack",
    name: "Drawstring Pack",
    category: "Backpack",
    badge: "",
    tagline: "Lightweight cotton, front pocket, event-ready",
    images: ["07.webp", "08.webp", "06.webp"],
    description: "A lightweight drawstring backpack in cotton canvas, with a front utility pocket. Popular for event merchandise, festivals and promotional giveaways.",
    features: [
      "Lightweight cotton canvas construction",
      "Front zip or patch pocket",
      "Adjustable drawstring straps",
      "Ideal for event and promotional runs"
    ],
    moq: 500,
    sample_days: "7-10 days"
  },
  {
    id: "jute-pouch",
    name: "Jute Pouch",
    category: "Pouches",
    badge: "",
    tagline: "Artisan-made, screen-printed, boutique-perfect",
    images: ["02.webp", "05.webp", "09.webp"],
    description: "A small-format jute pouch suited to cosmetics, jewellery and boutique packaging. Screen printed and finished by hand, sized for retail display or gift-with-purchase programmes.",
    features: [
      "Compact pouch format with drawstring or zip",
      "Screen printing and hand finishing",
      "Ideal for cosmetics and jewellery retail",
      "Available in bulk gift-with-purchase runs"
    ],
    moq: 500,
    sample_days: "7-10 days"
  },
  {
    id: "multicolor-tote",
    name: "Multicolor Tote",
    category: "Fashion",
    badge: "",
    tagline: "Festive prints, premium finish, summer-ready",
    images: ["21a.webp", "09.webp", "08.webp"],
    description: "A vibrant, multicolour printed tote designed for seasonal and summer collections. Premium finishing throughout, with print runs customisable to your seasonal palette.",
    features: [
      "Multicolour seasonal print runs",
      "Premium finished edges and handles",
      "Custom seasonal colourways on request",
      "Popular for summer and festive retail drops"
    ],
    moq: 500,
    sample_days: "7-10 days"
  }
];
