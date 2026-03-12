const VC_DATA = [
  // TALENT-FIRST
  {
    name: "Entrepreneurs First",
    stage: "talent-first",
    address: "2 Embarcadero Center, San Francisco, CA 94111",
    lat: 37.7954,
    lng: -122.3962,
    website: "https://www.joinef.com",
    focus: "Pre-team, pre-idea; backs exceptional individuals before they have a co-founder or concept",
    portfolio: ["Tractable", "Cleo", "Magic Pony Technology"],
    partners: ["Matt Clifford", "Alice Bentinck"]
  },
  {
    name: "1517 Fund",
    stage: "talent-first",
    address: "156 2nd Street, San Francisco, CA 94105",
    lat: 37.7867,
    lng: -122.3988,
    website: "https://www.1517fund.com",
    focus: "Backs young founders who skip or drop out of college; science and deep tech",
    portfolio: ["Luminar Technologies", "Figma", "Zenefits"],
    partners: ["Michael Gibson", "Danielle Strachman"]
  },
  {
    name: "Bloomberg Beta",
    stage: "talent-first",
    address: "199 Fremont Street, San Francisco, CA 94105",
    lat: 37.7880,
    lng: -122.3934,
    website: "https://www.bloombergbeta.com",
    focus: "Future of work, machine intelligence, and the transformation of industries by software",
    portfolio: ["Kensho", "Gong", "Tome"],
    partners: ["Roy Bahat", "James Cham"]
  },
  {
    name: "Human Capital",
    stage: "talent-first",
    address: "535 Mission Street, San Francisco, CA 94105",
    lat: 37.7878,
    lng: -122.3974,
    website: "https://www.humancapital.com",
    focus: "Founder-first investing; backs exceptional people across enterprise software, consumer, and frontier tech",
    portfolio: ["Airtable", "Notion", "Scale AI"],
    partners: ["Jake Gibson", "Bedy Yang"]
  },

  // PRE-SEED
  {
    name: "Afore Capital",
    stage: "pre-seed",
    address: "394 Pacific Avenue, San Francisco, CA 94111",
    lat: 37.7979,
    lng: -122.4028,
    website: "https://www.afore.vc",
    focus: "Pre-seed generalist; first check into technical founders before product-market fit",
    portfolio: ["Retool", "Brex", "Deel"],
    partners: ["Anamitra Banerji", "Vas Natarajan"]
  },
  {
    name: "Abstract Ventures",
    stage: "pre-seed",
    address: "101 California Street, San Francisco, CA 94111",
    lat: 37.7932,
    lng: -122.3975,
    website: "https://www.abstractvc.com",
    focus: "Early-stage enterprise software, developer tools, and infrastructure",
    portfolio: ["Weights & Biases", "Airplane", "Neon"],
    partners: ["Ramtin Naimi", "Viviana Faga"]
  },
  {
    name: "Amity Ventures",
    stage: "pre-seed",
    address: "2420 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4143,
    lng: -122.2001,
    website: "https://www.amity.vc",
    focus: "Early-stage enterprise and SaaS; relationships-driven investing in B2B software",
    portfolio: ["Salesloft", "Lob", "Workato"],
    partners: ["Juliette Brush", "Mark Goldberg"]
  },
  {
    name: "Cambrian Ventures",
    stage: "pre-seed",
    address: "580 California Street, San Francisco, CA 94104",
    lat: 37.7926,
    lng: -122.4021,
    website: "https://www.cambrianventures.com",
    focus: "Deep tech and hard science startups; biotech, robotics, advanced materials",
    portfolio: ["Apeel Sciences", "Zymergen", "Desktop Metal"],
    partners: ["Greg Wyler", "Tom Kalil"]
  },
  {
    name: "Caffeinated Capital",
    stage: "pre-seed",
    address: "2882 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4153,
    lng: -122.2018,
    website: "https://www.caffeinatedcapital.com",
    focus: "Pre-seed and seed generalist; high conviction, fast decisions, founder-friendly",
    portfolio: ["Brex", "Flexport", "Faire"],
    partners: ["Raymond Tonsing"]
  },
  {
    name: "Conviction",
    stage: "pre-seed",
    address: "360 Pine Street, San Francisco, CA 94104",
    lat: 37.7920,
    lng: -122.4016,
    website: "https://www.conviction.com",
    focus: "AI-native companies; software that uses AI as a core primitive, not a feature",
    portfolio: ["Replicate", "Harvey", "Character.AI"],
    partners: ["Sarah Guo", "Elad Gil"]
  },
  {
    name: "Cowboy Ventures",
    stage: "pre-seed",
    address: "2730 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4148,
    lng: -122.2011,
    website: "https://www.cowboy.vc",
    focus: "Seed-stage consumer and enterprise tech; focused on cultural relevance and new behaviors",
    portfolio: ["Slack", "Dollar Shave Club", "ClassDojo"],
    partners: ["Aileen Lee", "Ted Wang"]
  },
  {
    name: "Forum Ventures",
    stage: "pre-seed",
    address: "340 Pine Street, San Francisco, CA 94104",
    lat: 37.7919,
    lng: -122.4014,
    website: "https://www.forumvc.com",
    focus: "Pre-seed and seed B2B SaaS; founder community, accelerator model",
    portfolio: ["Puck", "Cohere", "Synapse"],
    partners: ["Michael Cardamone", "Alana Anderson"]
  },
  {
    name: "Hustle Fund",
    stage: "pre-seed",
    address: "111 Sutter Street, San Francisco, CA 94104",
    lat: 37.7912,
    lng: -122.4008,
    website: "https://www.hustlefund.vc",
    focus: "Pre-seed; backs scrappy founders fast, speed-as-an-advantage thesis",
    portfolio: ["Plaid", "Tempo", "Tamarind"],
    partners: ["Elizabeth Yin", "Eric Bahn"]
  },
  {
    name: "Pear VC",
    stage: "pre-seed",
    address: "3000 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4155,
    lng: -122.2021,
    website: "https://www.pear.vc",
    focus: "Pre-seed and seed; deep founder support, company building from zero",
    portfolio: ["DoorDash", "Guardant Health", "Branch"],
    partners: ["Pejman Nozad", "Mar Hershenson"]
  },
  {
    name: "Precursor Ventures",
    stage: "pre-seed",
    address: "580 California Street, San Francisco, CA 94104",
    lat: 37.7925,
    lng: -122.4020,
    website: "https://www.precursorvc.com",
    focus: "Pre-product, pre-revenue; backs underrepresented founders and contrarian ideas",
    portfolio: ["Stytch", "Ethena", "Noname Security"],
    partners: ["Charles Hudson", "Eveline Buchatskiy"]
  },
  {
    name: "SV Angel",
    stage: "pre-seed",
    address: "755 Sansome Street, San Francisco, CA 94111",
    lat: 37.7972,
    lng: -122.4007,
    website: "https://www.svangel.com",
    focus: "Seed-stage; broad generalist, network-driven value-add, Ron Conway's firm",
    portfolio: ["Google", "Twitter", "Airbnb"],
    partners: ["Ron Conway", "David Lee"]
  },
  {
    name: "Uncork Capital",
    stage: "pre-seed",
    address: "400 2nd Street, San Francisco, CA 94107",
    lat: 37.7820,
    lng: -122.3935,
    website: "https://www.uncorkcapital.com",
    focus: "Seed-stage generalist with deep SaaS and marketplace expertise; formerly SoftTech VC",
    portfolio: ["Eventbrite", "FitBit", "SendGrid"],
    partners: ["Jeff Clavier", "Andy McLoughlin"]
  },
  {
    name: "Unusual VC",
    stage: "pre-seed",
    address: "260 Townsend Street, San Francisco, CA 94107",
    lat: 37.7802,
    lng: -122.3952,
    website: "https://www.unusual.vc",
    focus: "Enterprise and developer-focused seed; unique GTM support and community thesis",
    portfolio: ["Temporal", "Acryl Data", "CommandBar"],
    partners: ["John Vrionis", "Jyoti Bansal"]
  },

  // SEED-FIRST
  {
    name: "Accel",
    stage: "seed-first",
    address: "500 University Avenue, Palo Alto, CA 94301",
    lat: 37.4480,
    lng: -122.1607,
    website: "https://www.accel.com",
    focus: "Seed to growth; enterprise software, consumer, security, and developer tools globally",
    portfolio: ["Facebook", "Slack", "Dropbox"],
    partners: ["Andrew Braccia", "Sonali De Rycker"]
  },
  {
    name: "Acme Capital",
    stage: "seed-first",
    address: "1 Market Street, San Francisco, CA 94105",
    lat: 37.7942,
    lng: -122.3950,
    website: "https://www.acme.vc",
    focus: "Seed-stage; diverse founders, consumer, fintech, enterprise software",
    portfolio: ["Homepoint", "Tempo", "Elation Health"],
    partners: ["Kobie Fuller", "Brendan Dickinson"]
  },
  {
    name: "Acrew Capital",
    stage: "seed-first",
    address: "815 Sansome Street, San Francisco, CA 94111",
    lat: 37.7975,
    lng: -122.4024,
    website: "https://www.acrewcapital.com",
    focus: "Early-stage fintech, marketplace, and enterprise; equity and inclusion lens",
    portfolio: ["Carta", "Hippo", "Brex"],
    partners: ["Lauren Kolodny", "Vishal Lugani"]
  },
  {
    name: "Battery Ventures",
    stage: "seed-first",
    address: "1 Marina Boulevard, San Francisco, CA 94123",
    lat: 37.8050,
    lng: -122.4384,
    website: "https://www.battery.com",
    focus: "Seed to growth; enterprise software, open source, developer tools, and infrastructure",
    portfolio: ["Glassdoor", "Sprinklr", "Groupon"],
    partners: ["Neeraj Agrawal", "Jesse Feldman"]
  },
  {
    name: "Benchmark",
    stage: "seed-first",
    address: "2480 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4141,
    lng: -122.1998,
    website: "https://www.benchmark.com",
    focus: "Early-stage; legendary equal-partnership firm backing category-defining companies",
    portfolio: ["Uber", "Twitter", "Snap"],
    partners: ["Bill Gurley", "Peter Fenton"]
  },
  {
    name: "Bessemer Venture Partners",
    stage: "seed-first",
    address: "2884 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4152,
    lng: -122.2019,
    website: "https://www.bvp.com",
    focus: "Seed to growth; cloud, security, consumer, and healthcare IT",
    portfolio: ["Shopify", "LinkedIn", "Twilio"],
    partners: ["Byron Deeter", "Talia Gold"]
  },
  {
    name: "Blumberg Capital",
    stage: "seed-first",
    address: "One Maritime Plaza, San Francisco, CA 94111",
    lat: 37.7961,
    lng: -122.3997,
    website: "https://www.blumbergcapital.com",
    focus: "Early-stage enterprise software, fintech, and consumer; Israel-US corridor",
    portfolio: ["DoubleVerify", "Credorax", "Brainware"],
    partners: ["David Blumberg", "Bruce Taragin"]
  },
  {
    name: "Bullpen Capital",
    stage: "seed-first",
    address: "250 Montgomery Street, San Francisco, CA 94104",
    lat: 37.7918,
    lng: -122.4022,
    website: "https://www.bullpencap.com",
    focus: "Post-seed; bridges seed and Series A, SaaS, marketplace, and consumer",
    portfolio: ["FanDuel", "Namely", "SpotHero"],
    partners: ["Paul Martino", "Duncan Davidson"]
  },
  {
    name: "Costanoa Ventures",
    stage: "seed-first",
    address: "3000 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4156,
    lng: -122.2022,
    website: "https://www.costanoa.vc",
    focus: "Seed and Series A; enterprise software, data infrastructure, and security",
    portfolio: ["Fivetran", "Talend", "Salsify"],
    partners: ["Greg Sands", "Amy Cheetham"]
  },
  {
    name: "Craft Ventures",
    stage: "seed-first",
    address: "394 Pacific Avenue, San Francisco, CA 94111",
    lat: 37.7978,
    lng: -122.4029,
    website: "https://www.craftventures.com",
    focus: "Early-stage SaaS, marketplace, and consumer; David Sacks and team",
    portfolio: ["Slack (early)", "Yammer", "Hopin"],
    partners: ["David Sacks", "Bill Lee"]
  },
  {
    name: "CRV",
    stage: "seed-first",
    address: "2882 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4152,
    lng: -122.2017,
    website: "https://www.crv.com",
    focus: "Early-stage; consumer, enterprise, and developer tools; Charles River Ventures",
    portfolio: ["Twitter", "DoorDash", "Airtable"],
    partners: ["Murat Bicer", "Reid Christian"]
  },
  {
    name: "Defy VC",
    stage: "seed-first",
    address: "One Ferry Building, San Francisco, CA 94111",
    lat: 37.7956,
    lng: -122.3935,
    website: "https://www.defy.vc",
    focus: "Seed to Series A; enterprise and consumer; backed by Founders Fund alumni",
    portfolio: ["Superhuman", "Opendoor", "Airtable"],
    partners: ["Neil Sequeira", "Trae Vassallo"]
  },
  {
    name: "Felicis",
    stage: "seed-first",
    address: "152 Kearny Street, San Francisco, CA 94108",
    lat: 37.7898,
    lng: -122.4027,
    website: "https://www.felicis.com",
    focus: "Seed to growth; contrarian bets on consumer, enterprise, and fintech",
    portfolio: ["Shopify", "Fitbit", "Credit Karma"],
    partners: ["Aydin Senkut", "Niki Pezeshki"]
  },
  {
    name: "First Round Capital",
    stage: "seed-first",
    address: "580 California Street, San Francisco, CA 94104",
    lat: 37.7924,
    lng: -122.4019,
    website: "https://www.firstround.com",
    focus: "Seed-stage; deep founder community and operational support, founder-first ethos",
    portfolio: ["Uber", "Square", "Warby Parker"],
    partners: ["Josh Kopelman", "Hayley Barna"]
  },
  {
    name: "Floodgate",
    stage: "seed-first",
    address: "400 Hamilton Avenue, Palo Alto, CA 94301",
    lat: 37.4463,
    lng: -122.1608,
    website: "https://www.floodgate.com",
    focus: "Pre-seed and seed; power law thinking, backing category creators before anyone else",
    portfolio: ["Twitter", "Lyft", "Twitch"],
    partners: ["Mike Maples Jr.", "Ann Miura-Ko"]
  },
  {
    name: "Forerunner Ventures",
    stage: "seed-first",
    address: "399 Kearny Street, San Francisco, CA 94108",
    lat: 37.7894,
    lng: -122.4034,
    website: "https://www.forerunnerventures.com",
    focus: "Consumer and commerce; next-generation brands and retail technology",
    portfolio: ["Warby Parker", "Bonobos", "Dollar Shave Club"],
    partners: ["Kirsten Green", "Eurie Kim"]
  },
  {
    name: "Foundation Capital",
    stage: "seed-first",
    address: "2865 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4151,
    lng: -122.2016,
    website: "https://www.foundationcap.com",
    focus: "Early-stage; enterprise software, fintech, and consumer; company-building focus",
    portfolio: ["Netflix", "Lending Club", "Chegg"],
    partners: ["Ashu Garg", "Steve Vassallo"]
  },
  {
    name: "Greylock Partners",
    stage: "seed-first",
    address: "2550 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4139,
    lng: -122.1996,
    website: "https://www.greylock.com",
    focus: "Seed to Series B; enterprise, consumer, and infrastructure; deeply operational",
    portfolio: ["LinkedIn", "Airbnb", "Workday"],
    partners: ["Reid Hoffman", "Sarah Guo"]
  },
  {
    name: "Headline",
    stage: "seed-first",
    address: "340 Pine Street, San Francisco, CA 94104",
    lat: 37.7919,
    lng: -122.4015,
    website: "https://www.headline.com",
    focus: "Seed to Series B; consumer, marketplace, and SaaS globally; formerly e.ventures",
    portfolio: ["Calm", "Tourlane", "Babbel"],
    partners: ["Michael Brandkamp", "Julien-David Nitlech"]
  },
  {
    name: "Initialized Capital",
    stage: "seed-first",
    address: "333 Bush Street, San Francisco, CA 94104",
    lat: 37.7910,
    lng: -122.4017,
    website: "https://www.initialized.com",
    focus: "Seed-stage; Garry Tan's firm; enterprise, consumer, and developer tools; YC-adjacent",
    portfolio: ["Coinbase", "Instacart", "Cruise"],
    partners: ["Garry Tan", "Kim-Mai Cutler"]
  },
  {
    name: "Kindred Ventures",
    stage: "seed-first",
    address: "221 Main Street, San Francisco, CA 94105",
    lat: 37.7890,
    lng: -122.3945,
    website: "https://www.kindredvc.com",
    focus: "Seed-stage; generalist with conviction in founders and new markets",
    portfolio: ["Coinbase", "Lyft", "Notion"],
    partners: ["Kanyi Maqubela", "Steve Jang"]
  },
  {
    name: "Menlo Ventures",
    stage: "seed-first",
    address: "3000 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4157,
    lng: -122.2023,
    website: "https://www.menlovc.com",
    focus: "Early to growth stage; AI, enterprise software, consumer, and security",
    portfolio: ["Uber", "Siri (pre-Apple)", "Roku"],
    partners: ["Matt Murphy", "Shawn Carolan"]
  },
  {
    name: "Redpoint Ventures",
    stage: "seed-first",
    address: "3000 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4158,
    lng: -122.2024,
    website: "https://www.redpoint.com",
    focus: "Seed to growth; enterprise, SaaS, and developer infrastructure; metrics-driven",
    portfolio: ["Stripe", "Snowflake", "Twilio"],
    partners: ["Tomasz Tunguz", "Annie Kadavy"]
  },
  {
    name: "Spark Capital",
    stage: "seed-first",
    address: "137 Newbury Street, San Francisco, CA 94107",
    lat: 37.7815,
    lng: -122.3930,
    website: "https://www.sparkcapital.com",
    focus: "Early-stage consumer, fintech, and enterprise; Boston and SF offices",
    portfolio: ["Twitter", "Tumblr", "Slack"],
    partners: ["Megan Quinn", "Nabeel Hyatt"]
  },
  {
    name: "Susa Ventures",
    stage: "seed-first",
    address: "235 Main Street, San Francisco, CA 94105",
    lat: 37.7891,
    lng: -122.3946,
    website: "https://www.susaventures.com",
    focus: "Seed-stage; data-driven investing in fintech, marketplace, and enterprise",
    portfolio: ["Flexport", "Robinhood", "Andela"],
    partners: ["Leo Polovets", "Eva Ho"]
  },
  {
    name: "True Ventures",
    stage: "seed-first",
    address: "200 California Street, San Francisco, CA 94111",
    lat: 37.7929,
    lng: -122.3978,
    website: "https://www.trueventures.com",
    focus: "Seed-stage; founder wellbeing, culture, and long-term company building",
    portfolio: ["Fitbit", "Peloton", "Ring"],
    partners: ["Jon Callaghan", "Puneet Agarwal"]
  },
  {
    name: "Upfront Ventures",
    stage: "seed-first",
    address: "11150 Santa Monica Boulevard, Los Angeles, CA 90025",
    lat: 34.0470,
    lng: -118.4484,
    website: "https://www.upfront.com",
    focus: "Seed to Series B; LA-based but active in SF; consumer, SaaS, and marketplace",
    portfolio: ["Maker Studios", "Ring", "TrueCar"],
    partners: ["Mark Suster", "Kara Nortman"]
  },

  // MULTI-STAGE
  {
    name: "8VC",
    stage: "multi-stage",
    address: "One Market Street, San Francisco, CA 94105",
    lat: 37.7942,
    lng: -122.3949,
    website: "https://www.8vc.com",
    focus: "Multi-stage; defense tech, logistics, healthcare, and enterprise software; Joe Lonsdale's firm",
    portfolio: ["Palantir", "Addepar", "OpenGov"],
    partners: ["Joe Lonsdale", "Drew Oetting"]
  },
  {
    name: "Andreessen Horowitz (a16z)",
    stage: "multi-stage",
    address: "2865 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4151,
    lng: -122.2015,
    website: "https://www.a16z.com",
    focus: "Seed to growth; software eating the world, AI, crypto, bio, consumer, and enterprise",
    portfolio: ["Facebook", "Airbnb", "Coinbase"],
    partners: ["Marc Andreessen", "Ben Horowitz"]
  },
  {
    name: "Bain Capital Ventures",
    stage: "multi-stage",
    address: "One Maritime Plaza, San Francisco, CA 94111",
    lat: 37.7960,
    lng: -122.3996,
    website: "https://www.baincapitalventures.com",
    focus: "Seed to growth; SaaS, infrastructure, fintech, and healthcare tech",
    portfolio: ["LinkedIn", "DocuSign", "SurveyMonkey"],
    partners: ["Enrique Salem", "Merritt Hummer"]
  },
  {
    name: "Base10 Partners",
    stage: "multi-stage",
    address: "111 Sutter Street, San Francisco, CA 94104",
    lat: 37.7911,
    lng: -122.4007,
    website: "https://www.base10.vc",
    focus: "Early to growth stage; automation of the real economy, diverse founders",
    portfolio: ["Figma", "Notion", "Nubank"],
    partners: ["Adeyemi Ajao", "TJ Nahigian"]
  },
  {
    name: "Coatue",
    stage: "multi-stage",
    address: "473 Jackson Street, San Francisco, CA 94111",
    lat: 37.7967,
    lng: -122.4042,
    website: "https://www.coatue.com",
    focus: "Multi-stage; tech-focused hedge fund and VC; public and private investing in internet and software",
    portfolio: ["Snowflake", "DoorDash", "Instacart"],
    partners: ["Philippe Laffont", "Thomas Laffont"]
  },
  {
    name: "Francisco Partners",
    stage: "multi-stage",
    address: "One Letterman Drive, San Francisco, CA 94129",
    lat: 37.7990,
    lng: -122.4484,
    website: "https://www.franciscopartners.com",
    focus: "Technology-focused private equity and growth equity; enterprise software, hardware, IT services",
    portfolio: ["GoodRx", "Barracuda Networks", "Lifelock"],
    partners: ["Dipanjan Deb", "David Golob"]
  },
  {
    name: "General Catalyst",
    stage: "multi-stage",
    address: "1 Letterman Drive, San Francisco, CA 94129",
    lat: 37.7991,
    lng: -122.4483,
    website: "https://www.generalcatalyst.com",
    focus: "Seed to growth; enterprise, consumer, health assurance, and climate",
    portfolio: ["Airbnb", "Stripe", "Snap"],
    partners: ["Hemant Taneja", "Niko Bonatsos"]
  },
  {
    name: "Google Ventures (GV)",
    stage: "multi-stage",
    address: "240 Kent Avenue, Brooklyn, NY / 1600 Amphitheatre Pkwy, Mountain View, CA 94043",
    lat: 37.4220,
    lng: -122.0839,
    website: "https://www.gv.com",
    focus: "Seed to growth; life sciences, healthcare, AI, enterprise, and consumer",
    portfolio: ["Uber", "Nest", "Slack"],
    partners: ["David Krane", "MG Siegler"]
  },
  {
    name: "Greenoaks",
    stage: "multi-stage",
    address: "One Market Street, San Francisco, CA 94105",
    lat: 37.7943,
    lng: -122.3951,
    website: "https://www.greenoaks.com",
    focus: "Growth-stage technology; concentrated portfolio, long-term compounders in software and fintech",
    portfolio: ["Brex", "Rappi", "Discord"],
    partners: ["Neil Mehta", "Patrick Backhouse"]
  },
  {
    name: "Greycroft",
    stage: "multi-stage",
    address: "301 Howard Street, San Francisco, CA 94105",
    lat: 37.7862,
    lng: -122.3948,
    website: "https://www.greycroft.com",
    focus: "Early to growth stage; consumer internet, media, and enterprise software; NY and SF",
    portfolio: ["Huffington Post", "Venmo", "Bird"],
    partners: ["Dana Settle", "Ian Sigalow"]
  },
  {
    name: "Index Ventures",
    stage: "multi-stage",
    address: "One Market Street, San Francisco, CA 94105",
    lat: 37.7944,
    lng: -122.3952,
    website: "https://www.indexventures.com",
    focus: "Seed to growth; global firm with strong SF presence; fintech, gaming, and enterprise",
    portfolio: ["Dropbox", "Robinhood", "Figma"],
    partners: ["Mike Volpi", "Sarah Cannon"]
  },
  {
    name: "Khosla Ventures",
    stage: "multi-stage",
    address: "2128 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4134,
    lng: -122.1989,
    website: "https://www.khoslaventures.com",
    focus: "Seed to growth; deep tech, AI, climate, health, and frontier science",
    portfolio: ["OpenAI", "Square", "Stripe"],
    partners: ["Vinod Khosla", "Keith Rabois"]
  },
  {
    name: "Kleiner Perkins",
    stage: "multi-stage",
    address: "2750 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4145,
    lng: -122.2010,
    website: "https://www.kleinerperkins.com",
    focus: "Seed to growth; one of Silicon Valley's original firms; enterprise, consumer, and life sciences",
    portfolio: ["Google", "Amazon", "Twitter"],
    partners: ["Mamoon Hamid", "Ilya Fushman"]
  },
  {
    name: "Lightspeed Venture Partners",
    stage: "multi-stage",
    address: "2200 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4136,
    lng: -122.1992,
    website: "https://www.lsvp.com",
    focus: "Multi-stage global; enterprise, consumer, fintech, and health",
    portfolio: ["Snap", "Affirm", "Mulesoft"],
    partners: ["Ravi Mhatre", "Nicole Quinn"]
  },
  {
    name: "NEA",
    stage: "multi-stage",
    address: "One Embarcadero Center, San Francisco, CA 94111",
    lat: 37.7951,
    lng: -122.3961,
    website: "https://www.nea.com",
    focus: "Seed to growth; technology and healthcare; one of the largest VC firms by AUM",
    portfolio: ["Salesforce", "Uber", "Workday"],
    partners: ["Scott Sandell", "Vanessa Larco"]
  },
  {
    name: "Norwest Venture Partners",
    stage: "multi-stage",
    address: "525 University Avenue, Palo Alto, CA 94301",
    lat: 37.4481,
    lng: -122.1608,
    website: "https://www.nvp.com",
    focus: "Seed to growth; enterprise, consumer, and healthcare; Wells Fargo subsidiary",
    portfolio: ["Calm", "Spotify", "Pendo"],
    partners: ["Jeff Crowe", "Lisa Wu"]
  },
  {
    name: "S32",
    stage: "multi-stage",
    address: "2882 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4153,
    lng: -122.2018,
    website: "https://www.s32.vc",
    focus: "Early to growth; deep tech, biotech, climate, and AI; Nat Friedman and Daniel Gross",
    portfolio: ["Cursor", "World Labs", "Magic"],
    partners: ["Nat Friedman", "Daniel Gross"]
  },
  {
    name: "Sapphire Ventures",
    stage: "multi-stage",
    address: "1700 Montgomery Street, San Francisco, CA 94111",
    lat: 37.8006,
    lng: -122.4109,
    website: "https://www.sapphireventures.com",
    focus: "Early to growth stage; enterprise software, security, and developer tools; SAP-affiliated",
    portfolio: ["LinkedIn", "Box", "Qualtrics"],
    partners: ["Jai Das", "Nino Marakovic"]
  },
  {
    name: "Sequoia Capital",
    stage: "multi-stage",
    address: "2800 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4149,
    lng: -122.2013,
    website: "https://www.sequoiacap.com",
    focus: "Seed to public; the defining VC firm; backs companies across all stages globally",
    portfolio: ["Apple", "Google", "WhatsApp"],
    partners: ["Roelof Botha", "Alfred Lin"]
  },

  // SECTOR-FOCUSED
  {
    name: "Abad Capital",
    stage: "sector-focused",
    address: "550 Montgomery Street, San Francisco, CA 94111",
    lat: 37.7958,
    lng: -122.4033,
    website: "https://www.abadcapital.com",
    focus: "Fintech and financial services; underserved communities and financial inclusion",
    portfolio: ["Greenwood", "Majority", "Stash"],
    partners: ["Arlan Hamilton", "Javier Pita"]
  },
  {
    name: "Atomic VC",
    stage: "sector-focused",
    address: "274 Brannan Street, San Francisco, CA 94107",
    lat: 37.7826,
    lng: -122.3936,
    website: "https://www.atomic.vc",
    focus: "Venture studio model; co-founds companies from scratch in consumer, enterprise, and biotech",
    portfolio: ["Hims", "Bungalow", "OpenStore"],
    partners: ["Jack Abraham", "Josh Hannah"]
  },
  {
    name: "Better Tomorrow Ventures",
    stage: "sector-focused",
    address: "535 Mission Street, San Francisco, CA 94105",
    lat: 37.7879,
    lng: -122.3975,
    website: "https://www.btv.vc",
    focus: "Fintech-focused seed fund; payments, lending, insurance, and banking infrastructure",
    portfolio: ["Pipe", "Jeeves", "Unit"],
    partners: ["Jake Gibson", "Sheel Mohnot"]
  },
  {
    name: "Builders VC",
    stage: "sector-focused",
    address: "200 California Street, San Francisco, CA 94111",
    lat: 37.7929,
    lng: -122.3977,
    website: "https://www.builders.vc",
    focus: "Industry-specific deep tech; construction, agriculture, manufacturing, and legacy sector modernization",
    portfolio: ["Plenty", "Bowery Farming", "Procore"],
    partners: ["Lauren Hom", "Lara Druyan"]
  },
  {
    name: "Commerce Ventures",
    stage: "sector-focused",
    address: "155 Sansome Street, San Francisco, CA 94104",
    lat: 37.7921,
    lng: -122.4013,
    website: "https://www.commerceventures.com",
    focus: "Fintech and retail innovation; payments, loyalty, supply chain, and commerce tech",
    portfolio: ["HighRadius", "SpotOn", "Cardlytics"],
    partners: ["Dan Rosen", "Reid Genauer"]
  },
  {
    name: "Delphi Ventures",
    stage: "sector-focused",
    address: "3000 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4160,
    lng: -122.2026,
    website: "https://www.delphiventures.com",
    focus: "Life sciences and healthcare; therapeutics, devices, and healthcare IT",
    portfolio: ["Intuity Medical", "Sorrento Therapeutics", "Achillion"],
    partners: ["James Healy", "David Douglass"]
  },
  {
    name: "Fifty Years",
    stage: "sector-focused",
    address: "220 5th Street, San Francisco, CA 94103",
    lat: 37.7793,
    lng: -122.4065,
    website: "https://www.fifty.vc",
    focus: "Science-based companies solving humanity's biggest problems; climate, health, food, and materials",
    portfolio: ["Upside Foods", "Prellis Biologics", "Pachama"],
    partners: ["Seth Bannon", "Ela Madej"]
  },
  {
    name: "Gradient Ventures",
    stage: "sector-focused",
    address: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
    lat: 37.4221,
    lng: -122.0840,
    website: "https://www.gradient.com",
    focus: "AI-first seed fund; Google's AI-focused venture arm backing applied AI startups",
    portfolio: ["Unify", "Hugging Face", "Labelbox"],
    partners: ["Darian Shirazi", "Zach Bratun-Glennon"]
  },
  {
    name: "GSV Ventures",
    stage: "sector-focused",
    address: "1400 Chapin Avenue, Burlingame, CA 94010",
    lat: 37.5789,
    lng: -122.3637,
    website: "https://www.gsvventures.com",
    focus: "EdTech and workforce development; digital learning, skills, and education innovation",
    portfolio: ["Coursera", "Chegg", "Knewton"],
    partners: ["Deborah Quazzo", "Michael Moe"]
  },
  {
    name: "Infinity Ventures",
    stage: "sector-focused",
    address: "101 2nd Street, San Francisco, CA 94105",
    lat: 37.7869,
    lng: -122.3990,
    website: "https://www.infinityvc.com",
    focus: "Consumer and gaming-adjacent investments; mobile, social, and entertainment",
    portfolio: ["Grindr", "Jam City", "FreshPlanet"],
    partners: ["Demi Simi", "Jonathan Lin"]
  },
  {
    name: "Lux Capital",
    stage: "sector-focused",
    address: "2865 Sand Hill Road, Menlo Park, CA 94025",
    lat: 37.4150,
    lng: -122.2014,
    website: "https://www.luxcapital.com",
    focus: "Deep tech and hard science; materials, robotics, space, and biotech",
    portfolio: ["Kurion", "Vicarious", "IronNet"],
    partners: ["Peter Hebert", "Josh Wolfe"]
  },
  {
    name: "NFX",
    stage: "sector-focused",
    address: "116 New Montgomery Street, San Francisco, CA 94105",
    lat: 37.7868,
    lng: -122.4017,
    website: "https://www.nfx.com",
    focus: "Network effects thesis; marketplace, social, and platform businesses",
    portfolio: ["Lyft", "Trulia", "Mojo"],
    partners: ["James Currier", "Pete Flint"]
  },
  {
    name: "Obvious Ventures",
    stage: "sector-focused",
    address: "875 Howard Street, San Francisco, CA 94103",
    lat: 37.7826,
    lng: -122.4021,
    website: "https://www.obvious.com",
    focus: "World positive investing; sustainability, health, and human potential",
    portfolio: ["Medium", "Beyond Meat", "Ripple"],
    partners: ["Ev Williams", "James Joaquin"]
  },
  {
    name: "Patron",
    stage: "sector-focused",
    address: "548 Market Street, San Francisco, CA 94104",
    lat: 37.7904,
    lng: -122.3994,
    website: "https://www.patron.vc",
    focus: "Crypto and Web3 infrastructure; protocols, tooling, and decentralized applications",
    portfolio: ["Solana", "Uniswap", "LayerZero"],
    partners: ["Zak Homuth", "Lauren Stephanian"]
  },
  {
    name: "Ribbit Capital",
    stage: "sector-focused",
    address: "2595 East Bayshore Road, Palo Alto, CA 94303",
    lat: 37.4274,
    lng: -122.1068,
    website: "https://www.ribbitcap.com",
    focus: "Fintech-only; global financial services innovation at all stages",
    portfolio: ["Robinhood", "Credit Karma", "Brex"],
    partners: ["Meyer Malka", "Nick Shalek"]
  },

  // BROAD EARLY-STAGE
  {
    name: "Draper Associates",
    stage: "broad-early-stage",
    address: "55 El Camino Real, Menlo Park, CA 94025",
    lat: 37.4519,
    lng: -122.1829,
    website: "https://www.draper.vc",
    focus: "Seed to early stage; global networks, crypto, and frontier tech; Tim Draper's firm",
    portfolio: ["Hotmail", "Skype", "Tesla"],
    partners: ["Tim Draper", "Billy Draper"]
  },
  {
    name: "Founders Fund",
    stage: "broad-early-stage",
    address: "1 Letterman Drive, San Francisco, CA 94129",
    lat: 37.7992,
    lng: -122.4482,
    website: "https://www.foundersfund.com",
    focus: "Early to growth; frontier tech, biotech, defense, and space; contrarian thesis",
    portfolio: ["SpaceX", "Palantir", "Airbnb"],
    partners: ["Peter Thiel", "Brian Singerman"]
  },
  {
    name: "Renegade Partners",
    stage: "broad-early-stage",
    address: "501 2nd Street, San Francisco, CA 94107",
    lat: 37.7823,
    lng: -122.3930,
    website: "https://www.renegade.vc",
    focus: "Seed to Series A; consumer, fintech, and marketplace; Renata Quintini and Roseanne Wincek",
    portfolio: ["Figma", "Coinbase", "Coda"],
    partners: ["Renata Quintini", "Roseanne Wincek"]
  },
  {
    name: "SignalFire",
    stage: "broad-early-stage",
    address: "548 Market Street, San Francisco, CA 94104",
    lat: 37.7905,
    lng: -122.3995,
    website: "https://www.signalfire.com",
    focus: "Data-driven seed to growth; proprietary analytics and talent matching platform",
    portfolio: ["Grammarly", "Rec Room", "Newfront Insurance"],
    partners: ["Chris Farmer", "Josh Constine"]
  },

  // PLATFORM/ACCELERATOR
  {
    name: "Plug and Play",
    stage: "platform-accelerator",
    address: "440 N Wolfe Road, Sunnyvale, CA 94085",
    lat: 37.3748,
    lng: -122.0285,
    website: "https://www.plugandplaytechcenter.com",
    focus: "Accelerator and venture platform; corporate innovation partnerships across all sectors",
    portfolio: ["Dropbox", "LoanMe", "PayPal"],
    partners: ["Saeed Amidi", "Amir Amidi"]
  },
  {
    name: "Y Combinator",
    stage: "platform-accelerator",
    address: "548 Market Street, San Francisco, CA 94104",
    lat: 37.7906,
    lng: -122.3996,
    website: "https://www.ycombinator.com",
    focus: "Seed accelerator; 3-month program, most influential startup accelerator globally",
    portfolio: ["Airbnb", "Stripe", "DoorDash"],
    partners: ["Garry Tan", "Tom Blomfield"]
  }
];

const STAGE_CONFIG = {
  "talent-first": {
    label: "Talent-First / Pre-Idea",
    color: "#9B59B6",
    emoji: "🌱"
  },
  "pre-seed": {
    label: "Pre-Seed / First Believers",
    color: "#E74C3C",
    emoji: "🚀"
  },
  "seed-first": {
    label: "Seed-First / Early-Stage",
    color: "#E67E22",
    emoji: "🌿"
  },
  "multi-stage": {
    label: "Multi-Stage / Large Platform",
    color: "#2980B9",
    emoji: "🏛️"
  },
  "sector-focused": {
    label: "Sector-Focused / Thesis-Driven",
    color: "#27AE60",
    emoji: "🎯"
  },
  "broad-early-stage": {
    label: "Broad Early-Stage",
    color: "#F39C12",
    emoji: "⚡"
  },
  "platform-accelerator": {
    label: "Platform / Accelerator",
    color: "#16A085",
    emoji: "🏗️"
  }
};
