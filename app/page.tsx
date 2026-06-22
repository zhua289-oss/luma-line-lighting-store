const navGroups = [
  {
    title: "New",
    target: "#products",
    links: ["New Arrivals", "Warm Metal Edit", "Low Ceiling Finds"],
    callout: "New sculptural silhouettes in brass, bronze, glass, and linen.",
  },
  {
    title: "Ceiling",
    target: "#ceiling",
    links: ["Pendant Lights", "Chandeliers", "Flush Mounts", "Track Lighting"],
    callout: "Dining room anchors, island pendants, and refined ambient light.",
  },
  {
    title: "Lamps",
    target: "#products",
    links: ["Floor Lamps", "Table Lamps", "Desk Lamps", "Portable Lamps"],
    callout: "Quiet layers for sofas, consoles, bedsides, and reading corners.",
  },
  {
    title: "Wall",
    target: "#products",
    links: ["Wall Sconces", "Picture Lights", "Vanity Lights", "Plug-in Sconces"],
    callout: "Architectural glow for hallways, baths, bedsides, and artwork.",
  },
  {
    title: "Outdoor",
    target: "#products",
    links: ["Lanterns", "Path Lights", "Porch Lights", "Wet-Rated Pendants"],
    callout: "Weather-ready fixtures with a soft entryway presence.",
  },
  {
    title: "Inspiration",
    target: "#guide",
    links: ["Shop by Room", "Lighting Guide", "Trade Program", "Sale"],
    callout: "Plan scale, color temperature, finish, and dimming before checkout.",
  },
];

const categories = [
  {
    name: "Pendants",
    detail: "Focused light for islands, tables, and bedside pairs",
    image: "/real/adriano-pendant.jpg",
  },
  {
    name: "Chandeliers",
    detail: "Statement forms for dining rooms and high ceilings",
    image: "/real/bridgette-chandelier.jpg",
  },
  {
    name: "Table Lamps",
    detail: "Portable ambience for desks, consoles, and nightstands",
    image: "/real/column-table-lamp.jpg",
  },
  {
    name: "Wall Sconces",
    detail: "Low-profile glow with brass, bronze, and opal finishes",
    image: "/real/curved-sconce.jpg",
  },
  {
    name: "Outdoor & Garden",
    detail: "Bollards, sensor sconces, lanterns, and landscape spots",
    image: "/real/kuzco-aurora-light.jpg",
  },
  {
    name: "Vanity & Bath",
    detail: "Linear mirror lights and damp-rated architectural glow",
    image: "/real/kuzco-vibe-menu.png",
  },
];

const products = [
  {
    name: "Adriano Brushed Gold Pendant",
    type: "Pendant Light",
    price: "$348",
    was: "$420",
    badge: "New",
    image: "/real/adriano-pendant.jpg",
    swatches: ["#b88b45", "#252625", "#f3eee0"],
    specs: "10 in shade, E26 socket, sloped-ceiling ready",
  },
  {
    name: "Valencia Brass Dome Pendant",
    type: "Pendant Light",
    price: "$214",
    was: "$279",
    badge: "Best Seller",
    image: "/real/valencia-dome-pendant.jpg",
    swatches: ["#a06f2d", "#e7e4da", "#1f1f1d"],
    specs: "18 in dome, adjustable drop, dimmer compatible",
  },
  {
    name: "Arena Five-Light Chandelier",
    type: "Chandelier",
    price: "$1,140",
    was: "$1,420",
    badge: "Room Edit",
    image: "/real/arena-chandelier-room.jpg",
    swatches: ["#111111", "#d7c4aa", "#8e4f32"],
    specs: "Multi-directional shades, warm dining ambience",
  },
  {
    name: "Bridgette Glass Chandelier",
    type: "Chandelier",
    price: "$1,690",
    was: "$1,980",
    badge: "Designer Pick",
    image: "/real/bridgette-chandelier.jpg",
    swatches: ["#c4934d", "#f2eadb", "#5b3c2c"],
    specs: "Glass globes, linear canopy, polished brass warmth",
  },
  {
    name: "Column Portable Table Lamp",
    type: "Table Lamp",
    price: "$248",
    was: "$298",
    badge: "Portable",
    image: "/real/column-table-lamp.jpg",
    swatches: ["#4a342b", "#111111", "#ded8c9"],
    specs: "Rechargeable LED, three-step dimming, cordless",
  },
  {
    name: "Curved Metal LED Sconce",
    type: "Wall Sconce",
    price: "$279",
    was: "$336",
    badge: "Damp Rated",
    image: "/real/curved-sconce.jpg",
    swatches: ["#a87f3f", "#f1eee8", "#2a2a29"],
    specs: "Up-down glow, integrated LED, bathroom ready",
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
    name: "Snowfall Crystal Dining Chandelier",
    type: "Chandelier",
    price: "$1,820",
    was: "$2,160",
    badge: "Statement",
    image: "/real/kuzco-artboard-modern.jpg",
    swatches: ["#f1eee8", "#c7a56a", "#232323"],
    specs: "Layered crystal branches, warm dining-room sparkle",
  },
  {
    name: "Aurora Garden Path Bollard",
    type: "Outdoor Light",
    price: "$186",
    was: "$240",
    badge: "Landscape",
    image: "/real/kuzco-aurora-light.jpg",
    swatches: ["#222621", "#c28a43", "#6c785f"],
    specs: "Low-voltage path light, shielded warm garden glow",
  },
  {
    name: "Insight Pavilion Pendant",
    type: "Pendant Light",
    price: "$734",
    was: "$890",
    badge: "Architectural",
    image: "/real/kuzco-insight-brand.jpg",
    swatches: ["#1d2323", "#d6c5a3", "#7c8a88"],
    specs: "Large-scale suspended glow for atriums and covered patios",
  },
  {
    name: "Vibe Linear Vanity Light",
    type: "Vanity Light",
    price: "$328",
    was: "$410",
    badge: "Bath Edit",
    image: "/real/kuzco-vibe-menu.png",
    swatches: ["#b78a4a", "#f3eee4", "#2e2a25"],
    specs: "Slim mirror bar, warm diffused output, damp rated",
  },
  {
    name: "Frame Glass Outdoor Sconce",
    type: "Outdoor Light",
    price: "$178",
    was: "$229",
    badge: "Sensor",
    image: "/real/lucide-arch-floor.jpg",
    swatches: ["#151515", "#efdfb0", "#8a6040"],
    specs: "Clear glass housing, exposed bulb, motion-ready entry light",
  },
  {
    name: "Cylindro Up-Down Wall Light",
    type: "Wall Sconce",
    price: "$149",
    was: "$189",
    badge: "Low Profile",
    image: "/real/lucide-cage-pendant.jpg",
    swatches: ["#181818", "#e8dfce", "#b68b49"],
    specs: "Compact cylinder, two-way wash, modern hallway glow",
  },
  {
    name: "Axis Adjustable Task Spot",
    type: "Desk Lamp",
    price: "$96",
    was: "$128",
    badge: "Task",
    image: "/real/lucide-cone-lamp.jpg",
    swatches: ["#151515", "#c7b591", "#ffffff"],
    specs: "Directional head, compact base, focused reading light",
  },
  {
    name: "Duo White Ceiling Spot",
    type: "Ceiling Light",
    price: "$118",
    was: "$152",
    badge: "Kitchen",
    image: "/real/lucide-duo-globe.jpg",
    swatches: ["#ffffff", "#f5e6c8", "#2e302d"],
    specs: "Twin adjustable spots, clean white finish, 3000K ready",
  },
  {
    name: "Globe Outdoor Wall Sconce",
    type: "Outdoor Light",
    price: "$136",
    was: "$168",
    badge: "Wet Rated",
    image: "/real/lucide-globe-outdoor.jpg",
    swatches: ["#ffffff", "#f6e9bd", "#cacaca"],
    specs: "Rounded shade, gentle porch light, compact footprint",
  },
  {
    name: "Slimline Floor Task Lamp",
    type: "Floor Lamp",
    price: "$242",
    was: "$310",
    badge: "Minimal",
    image: "/real/lucide-linear-ceiling.jpg",
    swatches: ["#151515", "#dcc69a", "#f1eee7"],
    specs: "Tall linear profile, reading beam, small-space base",
  },
  {
    name: "Grid Porch Lantern",
    type: "Outdoor Lantern",
    price: "$204",
    was: "$268",
    badge: "Entryway",
    image: "/real/lucide-modern-lantern.jpg",
    swatches: ["#111111", "#f1d68c", "#6d5746"],
    specs: "Caged glass lantern, exposed bulb, covered outdoor use",
  },
  {
    name: "Steel Sensor Cylinder Sconce",
    type: "Outdoor Light",
    price: "$154",
    was: "$198",
    badge: "Motion",
    image: "/real/lucide-mushroom-table.jpg",
    swatches: ["#9d9d93", "#222222", "#f0e1b0"],
    specs: "Brushed steel body, PIR sensor, garage or side-door light",
  },
  {
    name: "Black Box Sensor Wall Light",
    type: "Outdoor Light",
    price: "$132",
    was: "$170",
    badge: "Modern",
    image: "/real/lucide-outdoor-column.jpg",
    swatches: ["#111111", "#dfbd77", "#f6f2e8"],
    specs: "Rectangular beam, integrated sensor, clean facade lighting",
  },
  {
    name: "Dome Portable Patio Lamp",
    type: "Table Lamp",
    price: "$119",
    was: "$154",
    badge: "Portable",
    image: "/real/lucide-portable-sphere.jpg",
    swatches: ["#111111", "#e9d59b", "#6f5544"],
    specs: "Rechargeable outdoor-safe lamp, mushroom shade, soft table glow",
  },
  {
    name: "Sphere Accent Light",
    type: "Accent Light",
    price: "$88",
    was: "$116",
    badge: "Glow",
    image: "/real/lucide-spot-cylinder.jpg",
    swatches: ["#f7dd88", "#ffffff", "#d7cfc2"],
    specs: "Orb diffuser, shelf or bedside ambience, warm LED compatible",
  },
  {
    name: "Spike Garden Spot",
    type: "Outdoor Spot",
    price: "$74",
    was: "$98",
    badge: "Garden",
    image: "/real/lucide-wall-black.jpg",
    swatches: ["#101010", "#d7be83", "#61705e"],
    specs: "Adjustable spike spotlight for trees, planters, and paths",
  },
];

const galleryHighlights = [
  "/real/kuzco-artboard-modern.jpg",
  "/real/kuzco-aurora-light.jpg",
  "/real/kuzco-vibe-menu.png",
  "/real/lucide-modern-lantern.jpg",
  "/real/lucide-linear-ceiling.jpg",
  "/real/lucide-duo-globe.jpg",
  "/real/lucide-portable-sphere.jpg",
  "/real/lucide-wall-black.jpg",
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
    copy: "Leave 30 to 36 inches between a counter and shade. For dining tables, keep the lowest edge around 30 inches above the tabletop.",
  },
  {
    title: "Warm white or tuneable white?",
    copy: "Use 2700K for evening ambience, 3000K for most living rooms, and tuneable white where one room shifts from task work to dinner.",
  },
  {
    title: "How wide should a chandelier be?",
    copy: "Add the room length and width in feet, then use that number in inches as a quick diameter guide for the fixture.",
  },
];

const finishes = ["Brass", "Matte Black", "Bronze", "Smoked Glass", "Opal", "Linen"];

export default function Home() {
  return (
    <main>
      <div className="promo-stack" aria-label="Current promotions">
        <a href="#sale">Summer Lighting Event: up to $600 off room edits</a>
        <a href="#products">Quick-ship styles dispatch within 48 hours</a>
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
          src="/real/arena-chandelier-room.jpg"
          alt="Warm dining room with a sculptural black chandelier"
        />
        <div className="hero-content">
          <p className="eyebrow">The Warm Metal Edit</p>
          <h1 id="hero-title">Lights that make the room feel finished.</h1>
          <p>
            Real fixture photography, curated finishes, and room-ready guidance
            for pendants, chandeliers, sconces, lamps, outdoor lanterns, and smart light.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#products">
              Shop Lighting
            </a>
            <a className="button secondary" href="#guide">
              Plan Your Glow
            </a>
          </div>
        </div>
        <div className="hero-strip" aria-label="Brand proof points">
          <span>420+ styles</span>
          <span>CRI 90+ edits</span>
          <span>2-year warranty</span>
          <span>48h quick ship</span>
        </div>
      </section>

      <section className="stat-band" aria-label="Shopping highlights">
        <div>
          <strong>8 years</strong>
          <span>fixture curation and room planning</span>
        </div>
        <div>
          <strong>Free</strong>
          <span>shipping on lighting orders over $199</span>
        </div>
        <div>
          <strong>30 days</strong>
          <span>to test scale, finish, and glow at home</span>
        </div>
        <div>
          <strong>Trade</strong>
          <span>spec sheets, finish samples, and quote support</span>
        </div>
      </section>

      <section className="section-shell" id="ceiling">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Shop by category</p>
            <h2>Layer the room from ceiling to surface.</h2>
          </div>
          <a href="#products">See all lighting</a>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <a className="category-card" href="#products" key={category.name}>
              <img src={category.image} alt={`${category.name} product photography`} />
              <span>{category.name}</span>
              <p>{category.detail}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="editorial-band" id="sale">
        <div className="editorial-copy">
          <p className="eyebrow">Curated room edit</p>
          <h2>Black shades, warm walls, and a dining table that finally has a focal point.</h2>
          <p>
            Match directional chandelier light with a portable table lamp and
            low-glare sconces to keep the room warm without flattening it.
          </p>
          <div className="feature-specs">
            <span>2700K ambience</span>
            <span>Dimmable</span>
            <span>Bronze and brass</span>
            <span>Ships in 48h</span>
          </div>
        </div>
        <div className="editorial-gallery">
          <img src="/real/arena-chandelier-room.jpg" alt="Black multi-light chandelier over dining table" />
          <img src="/real/column-table-lamp.jpg" alt="Bronze portable table lamp" />
          <img src="/real/curved-sconce.jpg" alt="Curved brass wall sconce" />
        </div>
      </section>

      <section className="image-wall" aria-labelledby="image-wall-title">
        <div className="image-wall-heading">
          <p className="eyebrow">Modern lighting wall</p>
          <h2 id="image-wall-title">更多现代灯具造型，一眼看完整体氛围。</h2>
          <p>
            从餐厅吊灯、浴室镜前灯到户外花园灯，把更多真实产品和空间图片放到页面中，
            让浏览节奏更像完整灯具商城。
          </p>
        </div>
        <div className="image-wall-grid">
          {galleryHighlights.map((image, index) => (
            <img
              src={image}
              alt={`Modern lighting inspiration ${index + 1}`}
              key={image}
            />
          ))}
        </div>
      </section>

      <section className="shop-band" id="products">
        <div className="shop-header">
          <div>
            <p className="eyebrow">Popular lighting</p>
            <h2>更多现代灯具产品，按空间与功能浏览。</h2>
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
              {[
                "Pendant",
                "Chandelier",
                "Floor Lamp",
                "Table Lamp",
                "Wall Sconce",
                "Vanity",
                "Outdoor",
                "Spot Light",
              ].map(
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

      <section className="section-shell room-section" id="room">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Shop by room</p>
            <h2>Find the right brightness by where it lives.</h2>
          </div>
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
          {products.slice(0, 6).map((product) => (
            <img src={product.image} alt={product.name} key={product.name} />
          ))}
        </div>
        <div className="detail-copy">
          <p className="eyebrow">Featured fixture</p>
          <h2>Arena Five-Light Chandelier</h2>
          <p>
            Directional shades create pools of light across a dining table,
            while the dark finish keeps the silhouette architectural.
          </p>
          <dl>
            <div>
              <dt>Finish</dt>
              <dd>Matte black with warm diffuser interiors</dd>
            </div>
            <div>
              <dt>Best for</dt>
              <dd>Dining rooms, breakfast rooms, and open-plan seating zones</dd>
            </div>
            <div>
              <dt>Bulb</dt>
              <dd>Warm LED compatible, dimmable with approved wall controls</dd>
            </div>
          </dl>
          <div className="purchase-row">
            <strong>$1,140</strong>
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
