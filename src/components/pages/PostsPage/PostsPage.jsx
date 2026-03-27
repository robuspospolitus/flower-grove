import "./styles/postspage.scss";
import Footer from "../../objects/Footer";
import {useState} from 'react';

export default function PostsPage() {
    const [active, setActive] = useState(0);
    return(
        <div className="posts-page">
            <div className="header">
                <p className="posts-header-text outlined-text">POSTS</p>
                <p className="posts-header-text outlined-text">POSTS</p>
                <p className="posts-header-text outlined-text">POSTS</p>
                <p className="posts-header-text outlined-text">POSTS</p>
                <p className="posts-header-text outlined-text">POSTS</p>
                <p className="posts-header-text covered-text">POSTS</p>
            </div>
            <div className="posts-block"/>
            <div className="posts-carousel">
                {
                    examplePostStructure.map((each, key) => (
                    <div className='blue' key={key}>
                        <h3 className="post-header">{each.title} </h3>
                        {each.description} 
                        <button>Show more!</button>
                    </div>
                    ))
                }
            </div>
            <Footer/>
        </div>
    )
}

const examplePostStructure = [
  {
    title: "The Hidden Language of Flowers",
    date: "2026-03-01",
    author: "Admin",
    description: "Discover how flowers have been used to communicate emotions and hidden meanings.",
    content: "Flowers have long been used as a silent form of communication. Long before modern messaging, people expressed emotions through carefully chosen blooms — a practice known as floriography.\n\nA red rose symbolizes deep love, while a white lily represents purity and renewal. Even the number of flowers or the way they are arranged can change the meaning entirely.\n\nUnderstanding this language transforms flowers from simple decorations into powerful emotional symbols."
  },
  {
    title: "How the Moon Influences Plant Growth",
    date: "2026-03-02",
    author: "Admin",
    description: "Explore the connection between lunar phases and plant development.",
    content: "The moon has fascinated humans for centuries, and its connection to plant life is still observed today.\n\nDuring the waxing moon, plants are believed to focus their energy on upward growth, making it a good time for planting flowers that bloom above the soil. During the waning moon, energy shifts downward, supporting roots and soil health.\n\nEven if science does not fully confirm all aspects, many gardeners trust these natural rhythms."
  },
  {
    title: "Beginner’s Guide to Flower Care",
    date: "2026-03-03",
    author: "Admin",
    description: "Learn the essential basics of keeping flowers healthy and thriving.",
    content: "Caring for flowers doesn’t have to be complicated.\n\nStart with the basics:\n- Light: Most flowers need sunlight, but intensity varies\n- Water: Keep soil moist, not soaked\n- Soil: Well-drained soil is key\n- Air: Good circulation prevents disease\n\nConsistency matters more than perfection. Small, regular care leads to thriving plants."
  },
  {
    title: "Why Flowers Are Essential for Ecosystems",
    date: "2026-03-04",
    author: "Admin",
    description: "Understand the critical role flowers play in maintaining ecosystems.",
    content: "Flowers are not just beautiful — they are critical to life on Earth.\n\nThey attract pollinators like bees, butterflies, and birds, enabling plants to reproduce. Without flowers, many ecosystems would collapse, affecting food chains and biodiversity.\n\nProtecting flowers means protecting entire ecosystems."
  },
  {
    title: "Annuals vs Perennials: What’s the Difference?",
    date: "2026-03-05",
    author: "Admin",
    description: "A simple guide to understanding flower life cycles.",
    content: "Understanding the life cycle of plants helps you become a better gardener.\n\n- Annuals grow, bloom, and die within one season\n- Perennials return year after year\n\nAnnuals offer vibrant, short-term beauty, while perennials provide long-term stability in your garden.\n\nA balanced mix of both creates a dynamic and sustainable space."
  },
  {
    title: "The Aesthetic Power of Flowers",
    date: "2026-03-06",
    author: "Admin",
    description: "Explore how flowers influence mood, creativity, and environment.",
    content: "Flowers influence not only nature but also human emotions.\n\nStudies show that being around plants can reduce stress, improve mood, and increase creativity. Even a small bouquet in a room can change the atmosphere.\n\nFlowers bring softness into structured environments — a quiet balance between order and nature."
  },
  {
    title: "The Connection Between Nature and Cosmos",
    date: "2026-03-07",
    author: "Admin",
    description: "A reflection on the deeper connection between plants and the universe.",
    content: "There is a timeless idea that everything in nature reflects something greater.\n\nThe rhythm of seasons, the phases of the moon, and the growth of plants all follow patterns that seem almost cosmic. This connection has inspired philosophers, scientists, and artists for centuries.\n\nThere may be a deeper link between life on Earth and the stars above."
  },
  {
    title: "Building Your First Flower Space",
    date: "2026-03-08",
    author: "Admin",
    description: "Start your own flower space with simple steps and guidance.",
    content: "Creating your own flower space can be simple and rewarding.\n\nStart small:\n- Choose 2–3 easy-to-grow species\n- Use pots or a small garden area\n- Observe how plants react to light and water\n\nOver time, you will develop intuition — learning to read your plants and respond to their needs."
  }
];