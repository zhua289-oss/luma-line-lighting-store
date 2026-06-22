const navGroups = [
  {
    title: "New",
    target: "#products",
    links: ["New Arrivals", "Summer Glow Edit", "Small Space Lighting"],
    callout: "Fresh forms in brass, smoked glass, and soft linen shades",
  },
  {
    title: "Ceiling",
    target: "#ceiling",
    links: ["Pendant Lights", "Chandeliers", "Flush Mounts", "Track Lighting"],
    callout: "Statement fixtures for dining rooms, islands, and entries",
  },
  {
    title: "Lamps",
    target: "#products",
    links: ["Floor Lamps", "Table Lamps", "Desk Lamps", "Portable Lamps"],
    callout: "Layered light for reading corners, sofas, and nightstands",
  },
  {
    title: "Wall",
    target: "#products",
    links: ["Wall Sconces", "Picture Lights", "Vanity Lights", "Plug-in Sconces"],
    callout: "Low-profile light with architectural presence",
  },
  {
    title: "Outdoor",
    target: "#products",
    links: ["Lanterns", "Path Lights", "Porch Lights", "Wet-Rated Pendants"],
    callout: "Weather-ready fixtures for every threshold",
  },
  {
    title: "Inspiration",
    target: "#guide",
    links: ["Shop by Room", "Lighting Guide", "Trade Program", "Sale"],
    callout: "Plan brightness, scale, finish, and color temperature",
  },
];

const categories = [
  {
    name: "Pendant Lights",
    detail: "Kitchen islands, breakfast nooks, and bedside pairs",
    image: "/generated/pendant-cluster.jpg",
  },
  {
    name: "Floor Lamps",
    detail: "Arc, column, and task silhouettes for layered rooms",
    image: "/generated/arc-floor-lamp.jpg",
  },
  {
    name: "Table Lamps",
    detail: "Warm bedside, entry console, and reading table glow",
    image: "/generated/ribbed-table-lamp.jpg",
  },
  {
    name: "Wall Sconces",
    detail: "Hallways, bathrooms, bedsides, and gallery walls",
    image: "/generated/dual-wall-sconce.jpg",
  },
];

const products = [
  {
    name: "Solene Dome Pendant Cluster",
    type: "Pendant Light",
    price: "$429",
    was: "$549",
    badge: "Best Seller",
    image: "/generated/pendant-cluster.jpg",
    swatches: ["#b77a31", "#1f2320", "#e7dfcc"],
    specs: "2700K warm dim, adjustable drop, brass finish",
  },
  {
    name: "Arco 92 Inch Sculptural Floor Lamp",
    type: "Floor Lamp",
    price: "$699",
    was: "$819",
    badge: "New",
    image: "/generated/arc-floor-lamp.jpg",
    swatches: ["#20211f", "#6f8470", "#b48c52"],
    specs: "Marble-look base, pivot shade, foot dimmer",
  },
  {
    name: "Mila Ribbed Table Lamp",
    type: "Table Lamp",
    price: "$188",
    was: "$240",
    badge: "Quick Ship",
    image: "/generated/ribbed-table-lamp.jpg",
    swatches: ["#f2dfb8", "#754f35", "#232725"],
    specs: "Linen diffuser, ceramic body, three brightness levels",
  },
  {
    name: "Vale Dual Beam Wall Sconce",
    type: "Wall Sconce",
    price: "$246",
    was: "$310",
    badge: "Pair Deal",
    image: "/generated/dual-wall-sconce.jpg",
    swatches: ["#c18b46", "#202523", "#bfc6bc"],
    specs: "Up-down glow, damp rated, hardwire or plug-in",
  },
  {
    name: "Aster Branch Chandelier",
    type: "Chandelier",
    price: "$1,240",
    was: "$1,520",
    badge: "Designer Pick",
    image: "/generated/branch-chandelier.jpg",
    swatches: ["#bf8a47", "#2c2924", "#f4e8ca"],
    specs: "Twelve glass blooms, dining-ready scale, dimmable",
  },
  {
    name: "Harbor Weatherproof Lantern",
    type: "Outdoor Lantern",
    price: "$312",
    was: "$390",
    badge: "Outdoor",
    image: "/generated/outdoor-lantern.jpg",
    swatches: ["#232320", "#c28a43", "#6d776e"],
    specs: "Wet rated, seeded glass, dusk sensor compatible",
  },
  {
    name: "Chroma Smart LED Rail Kit",
    type: "Smart Lighting",
    price: "$214",
    was: "$289",
    badge: "Smart",
    image: "/generated/smart-led-system.jpg",
    swatches: ["#ff9f5a", "#78c6aa", "#829bf0"],
    specs: "App scenes, voice control, tuneable white and color",
  },
  {
    name: "Opal Halo Flush Mount",
    type: "Flush Mount",
    price: "$368",
    was: "$450",
    badge: "Low Ceiling",
    image: "/generated/opal-flush-mount.jpg",
    swatches: ["#30312d", "#f8e9bd", "#63806f"],
    specs: "Low profile, opal diffuser, 18 inch diameter",
  },
];

const rooms = [
  "Living Room",
  "Dining Room",
  "Bedroom",
  "Kitchen Island",
  "Bathroom",
  "Entryway",
  "Patio",
  "Home Office",
];

const guides = [
  {
    title: "How high should a pendant hang?",
    copy: "Leave 30 to 36 inches between the counter and shade for kitchen islands, then add one pendant for every 24 to 30 inches of surface.",
  },
  {
    title: "Warm white or tuneable white?",
    copy: "Use 2700K for evening ambience, 3000K for most living spaces, and 3500K to 4000K where detail work matters.",
  },
  {
    title: "How wide should a chandelier be?",
    copy: "Add the room length and width in feet, then use that number in inches as a quick diameter guide.",
  },
];

const finishes = ["Brass", "Matte Black", "Smoked Glass", "Ceramic", "Linen", "Oak"];

export default function Home() {
  return (
    <main>
      <div className="promo-stack" aria-label="Current promotions">
        <a href="#sale">Summer Lighting Event: up to $600 off room refreshes</a>
        <a href="#products">Clearance fixtures: up to 40% off</a>
      </div>

      <header className="site-header">
        <div className="utility-row">
          <a href="#support">Track order</a>
          <a href="#trade">Trade program</a>
          <a href="#ship">Ship to United States</a>
        </div>
        <div className="brand-row">
          <a className="brand" href="#">
            <span>Luma</span>
            <span>&amp;</span>
            <span>Line</span>
          </a>
          <label className="search-box">
            <span>Search</span>
            <input aria-label="Search lighting" placeholder="pendants, sconces, bulbs..." />
          </label>
          <nav className="account-links" aria-label="Account navigation">
            <a href="#support">Account</a>
            <a href="#products">Wishlist</a>
            <a href="#cart">Cart 0</a>
          </nav>
        </div>
        <nav className="mega-nav" aria-label="Primary navigation">
          {navGroups.map((group) => (
            <div className="nav-item" key={group.title}>
              <a href={group.target}>{group.title}</a>
              <div className="mega-panel">
                <div>
                  <p className="eyebrow">{group.title}</p>
                  <p>{group.callout}</p>
                </div>
                <div className="mega-links">
                  {group.links.map((link) => (
                    <a href="#products" key={link}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/generated/hero-lighting-showroom.jpg"
          alt="Dining room scene with layered pendant lighting"
        />
        <div className="hero-content">
          <p className="eyebrow">Summer Glow Event</p>
          <h1 id="hero-title">Designer lights, ready for every room.</h1>
          <p>
            Pendant clusters, sculptural lamps, weather-rated lanterns, and smart
            LED systems selected by finish, brightness, and installation style.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#products">
              Shop Lighting
            </a>
            <a className="button secondary" href="#guide">
              Lighting Guide
            </a>
          </div>
        </div>
      </section>

      <section className="stat-band" aria-label="Brand proof points">
        <div>
          <strong>8 years</strong>
          <span>fixture curation and room planning</span>
        </div>
        <div>
          <strong>420+</strong>
          <span>wet-rated, dimmable, and smart-ready styles</span>
        </div>
        <div>
          <strong>2 years</strong>
          <span>warranty on every complete fixture</span>
        </div>
        <div>
          <strong>48h</strong>
          <span>dispatch on stocked quick-ship lights</span>
        </div>
      </section>

      <section className="section-shell" id="ceiling">
        <div className="section-heading">
          <p className="eyebrow">Shop by category</p>
          <h2>Build the room in layers.</h2>
          <a href="#products">See all lighting</a>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <a className="category-card" href="#products" key={category.name}>
              <img src={category.image} alt={`${category.name} product scene`} />
              <span>{category.name}</span>
              <p>{category.detail}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="shop-band" id="products">
        <div className="shop-header">
          <div>
            <p className="eyebrow">Popular lighting</p>
            <h2>Fixtures customers keep saving.</h2>
          </div>
          <div className="sort-control">
            <span>Sort by</span>
            <select aria-label="Sort products">
              <option>Recommended</option>
              <option>Most Popular</option>
              <option>New Arrivals</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </div>

        <div className="shop-layout">
          <aside className="filters" aria-label="Product filters">
            <details open>
              <summary>Fixture Type</summary>
              {["Pendant", "Chandelier", "Floor Lamp", "Table Lamp", "Sconce"].map(
                (item) => (
                  <label key={item}>
                    <input type="checkbox" /> {item}
                  </label>
                ),
              )}
            </details>
            <details open>
              <summary>Finish</summary>
              {finishes.map((finish) => (
                <label key={finish}>
                  <input type="checkbox" /> {finish}
                </label>
              ))}
            </details>
            <details open>
              <summary>Light Temperature</summary>
              {["Warm 2700K", "Soft 3000K", "Neutral 3500K", "Tuneable"].map(
                (item) => (
                  <label key={item}>
                    <input type="checkbox" /> {item}
                  </label>
                ),
              )}
            </details>
          </aside>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-media">
                  <img src={product.image} alt={product.name} />
                  <span>{product.badge}</span>
                </div>
                <div className="product-body">
                  <p>{product.type}</p>
                  <h3>{product.name}</h3>
                  <div className="swatches" aria-label={`${product.name} finishes`}>
                    {product.swatches.map((color) => (
                      <span key={color} style={{ backgroundColor: color }} />
                    ))}
                  </div>
                  <p className="spec-copy">{product.specs}</p>
                  <div className="price-row">
                    <strong>{product.price}</strong>
                    <span>{product.was}</span>
                  </div>
                  <button type="button">Quick Add</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-split" id="sale">
        <div className="feature-copy">
          <p className="eyebrow">Room collection</p>
          <h2>Soft brass, opal glass, and no harsh shadows.</h2>
          <p>
            A coordinated dining edit pairs a warm chandelier with wall sconces
            and low-glare bulbs, so the whole room lands in the same light family.
          </p>
          <div className="feature-specs">
            <span>2700K ambience</span>
            <span>CRI 90+</span>
            <span>Dimmable</span>
            <span>Ships in 48h</span>
          </div>
          <a className="button primary" href="#products">
            Shop the Edit
          </a>
        </div>
        <img src="/generated/branch-chandelier.jpg" alt="Branch chandelier over a dining room" />
      </section>

      <section className="section-shell" id="room">
        <div className="section-heading">
          <p className="eyebrow">Shop by room</p>
          <h2>Find the right brightness by where it lives.</h2>
          <a href="#guide">Read the guide</a>
        </div>
        <div className="room-grid">
          {rooms.map((room) => (
            <a href="#products" key={room}>
              {room}
            </a>
          ))}
        </div>
      </section>

      <section className="product-detail" id="cart">
        <div className="gallery-strip" aria-label="Featured product gallery">
          {products.slice(0, 5).map((product) => (
            <img src={product.image} alt={product.name} key={product.name} />
          ))}
        </div>
        <div className="detail-copy">
          <p className="eyebrow">Featured fixture</p>
          <h2>Solene Dome Pendant Cluster</h2>
          <p>
            A five-light cluster for dining rooms and kitchen islands, with
            adjustable drops, warm dimming, and a satin brass finish.
          </p>
          <dl>
            <div>
              <dt>Material</dt>
              <dd>Spun metal shade, opal diffuser, braided cable</dd>
            </div>
            <div>
              <dt>Dimensions</dt>
              <dd>36 inch canopy, 8 to 62 inch adjustable drop</dd>
            </div>
            <div>
              <dt>Bulb</dt>
              <dd>Integrated LED, 2700K, CRI 90, dimmable</dd>
            </div>
          </dl>
          <div className="purchase-row">
            <strong>$429</strong>
            <button type="button">Add To Cart</button>
          </div>
        </div>
      </section>

      <section className="service-band" id="trade">
        <div id="ship">
          <strong>Free shipping</strong>
          <span>On orders over $199 in the contiguous US.</span>
        </div>
        <div>
          <strong>30-day returns</strong>
          <span>Try the scale, finish, and glow at home.</span>
        </div>
        <div>
          <strong>2-year warranty</strong>
          <span>Coverage on fixtures, drivers, and included LEDs.</span>
        </div>
        <div>
          <strong>Trade support</strong>
          <span>Spec sheets, finish samples, and quote help.</span>
        </div>
      </section>

      <section className="guide-section" id="guide">
        <div>
          <p className="eyebrow">Buying guide</p>
          <h2>Lighting questions shoppers ask before checkout.</h2>
        </div>
        <div className="guide-list">
          {guides.map((guide) => (
            <article key={guide.title}>
              <h3>{guide.title}</h3>
              <p>{guide.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer" id="support">
        <div>
          <a className="brand footer-brand" href="#">
            <span>Luma</span>
            <span>&amp;</span>
            <span>Line</span>
          </a>
          <p>Designer lighting for rooms that need atmosphere and precision.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#products">All Lighting</a>
          <a href="#guide">Buying Guide</a>
          <a href="#trade">Trade</a>
          <a href="#support">Support</a>
        </nav>
      </footer>
    </main>
  );
}
