// ============================================================
//  ArtistPulse — Artist Data
//  Edit this file to add, remove, or update your artists.
//  Each artist has: name, genre, tags, weeklyGrowth, stats,
//  releases, and bio.
// ============================================================

const artists = [
  {
    id: 1,
    name: "Sabrina Carpenter",
    initials: "SC",
    color: "#1a1a2e",
    textColor: "#c8a4ff",
    genre: "Pop",
    tags: ["Billboard Hot 100", "Grammy Nom", "World Tour"],
    weeklyGrowth: 18.4,
    stats: {
      monthlyListeners: "72.1M",
      monthlyDelta: "+8.2M this week",
      streams: "4.2B",
      streamsDelta: "+340M this month",
      followers: "23.4M",
      followersDelta: "+420K this week",
      spotifyRank: "#4",
    },
    releases: [
      { title: "Please Please Please", type: "Single", year: "2024", streams: "800M", icon: "🎵" },
      { title: "Espresso", type: "Single", year: "2024", streams: "1.1B", icon: "🎵" },
      { title: "Short n' Sweet", type: "Album", year: "2024", streams: "2.4B", icon: "💿" },
    ],
    bio: "Sabrina Carpenter is an American singer-songwriter and actress from Quakertown, Pennsylvania. Rising from Disney Channel fame, she broke into the mainstream with her 2024 smash hits 'Espresso' and 'Please Please Please,' both of which dominated global charts. Her witty lyricism and retro-pop aesthetic have earned her critical acclaim and a devoted fanbase known as 'Carpenters.' She wrapped her Short n' Sweet World Tour in early 2025."
  },
  {
    id: 2,
    name: "Kendrick Lamar",
    initials: "KL",
    color: "#0d1a0d",
    textColor: "#8fff8f",
    genre: "Hip-Hop",
    tags: ["Super Bowl LIX", "Pulitzer Prize", "GOAT Debate"],
    weeklyGrowth: 14.7,
    stats: {
      monthlyListeners: "61.3M",
      monthlyDelta: "+6.1M this week",
      streams: "8.9B",
      streamsDelta: "+190M this month",
      followers: "31.2M",
      followersDelta: "+210K this week",
      spotifyRank: "#7",
    },
    releases: [
      { title: "Not Like Us", type: "Single", year: "2024", streams: "1.5B", icon: "🎵" },
      { title: "GNX", type: "Album", year: "2024", streams: "900M", icon: "💿" },
      { title: "DAMN.", type: "Album", year: "2017", streams: "6.1B", icon: "💿" },
    ],
    bio: "Kendrick Lamar Duckworth is a rapper, songwriter, and record producer from Compton, California. Widely regarded as one of the greatest rappers of all time, he made history as the first rapper to win the Pulitzer Prize for Music for his 2017 album DAMN. His 2024 beef with Drake culminated in 'Not Like Us,' one of the fastest-rising diss tracks in history. He headlined Super Bowl LIX in 2025, delivering one of the most watched halftime shows ever."
  },
  {
    id: 3,
    name: "Chappell Roan",
    initials: "CR",
    color: "#1a0d1a",
    textColor: "#ff9fff",
    genre: "Pop / Glam",
    tags: ["Grammy Winner", "Breakout 2024", "LGBTQ+ Icon"],
    weeklyGrowth: 11.2,
    stats: {
      monthlyListeners: "43.8M",
      monthlyDelta: "+3.4M this week",
      streams: "2.1B",
      streamsDelta: "+98M this month",
      followers: "11.7M",
      followersDelta: "+180K this week",
      spotifyRank: "#19",
    },
    releases: [
      { title: "Good Luck, Babe!", type: "Single", year: "2024", streams: "650M", icon: "🎵" },
      { title: "The Rise and Fall of a Midwest Princess", type: "Album", year: "2023", streams: "1.4B", icon: "💿" },
    ],
    bio: "Chappell Roan, born Kayleigh Rose Amstutz in Willard, Missouri, is a singer-songwriter known for her theatrical drag-inspired performances and emotionally raw pop songwriting. After years of industry struggle, she broke out in 2024 with her debut album cycle and viral hit 'Good Luck, Babe!' Her bold aesthetic and advocacy for LGBTQ+ youth have made her a cultural icon. She won Best New Artist at the 2025 Grammy Awards."
  },
  {
    id: 4,
    name: "Tyler, the Creator",
    initials: "TC",
    color: "#0d1219",
    textColor: "#4fa8ff",
    genre: "Hip-Hop / R&B",
    tags: ["Grammy Winner", "Camp Flog Gnaw", "Fashion Designer"],
    weeklyGrowth: 8.9,
    stats: {
      monthlyListeners: "38.2M",
      monthlyDelta: "+1.8M this week",
      streams: "5.3B",
      streamsDelta: "+72M this month",
      followers: "19.6M",
      followersDelta: "+95K this week",
      spotifyRank: "#24",
    },
    releases: [
      { title: "Chromakopia", type: "Album", year: "2024", streams: "1.2B", icon: "💿" },
      { title: "CALL ME IF YOU GET LOST", type: "Album", year: "2021", streams: "2.1B", icon: "💿" },
      { title: "IGOR", type: "Album", year: "2019", streams: "3.4B", icon: "💿" },
    ],
    bio: "Tyler Gregory Okonma, known professionally as Tyler, the Creator, is a rapper, singer, producer, and creative director from Los Angeles. A co-founder of the collective Odd Future, he has evolved into one of music's most inventive auteurs. His 2024 album Chromakopia debuted at #1 and received universal acclaim for its introspective themes. Beyond music, Tyler helms the Golf Wang clothing brand and curates the annual Camp Flog Gnaw Carnival in LA."
  },
  {
    id: 5,
    name: "Billie Eilish",
    initials: "BE",
    color: "#0a1a0a",
    textColor: "#a8ff78",
    genre: "Alt-Pop",
    tags: ["6x Grammy", "Oscar Winner", "Gen Z Voice"],
    weeklyGrowth: 6.3,
    stats: {
      monthlyListeners: "82.4M",
      monthlyDelta: "+1.1M this week",
      streams: "12.1B",
      streamsDelta: "+55M this month",
      followers: "49.3M",
      followersDelta: "+60K this week",
      spotifyRank: "#3",
    },
    releases: [
      { title: "HIT ME HARD AND SOFT", type: "Album", year: "2024", streams: "1.8B", icon: "💿" },
      { title: "Birds of a Feather", type: "Single", year: "2024", streams: "920M", icon: "🎵" },
      { title: "Happier Than Ever", type: "Album", year: "2021", streams: "5.2B", icon: "💿" },
    ],
    bio: "Billie Eilish Pirate Baird O'Connell is a Los Angeles-born singer-songwriter who became a global phenomenon at 17 with her debut album 'When We All Fall Asleep, Where Do We Go?' She has won six Grammy Awards and is the youngest artist to win all four major Grammy categories in a single night. Her 2024 album 'HIT ME HARD AND SOFT' was named Album of the Year by dozens of publications. She is also a prominent environmental activist and mental health advocate."
  },
];
