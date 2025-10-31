import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroWomen from "@/assets/hero-women.jpg";
import programsWorkshop from "@/assets/programs-workshop.jpg";
import founder from "@/assets/founder.jpg";

export default function News() {
  const navigate = useNavigate();
  
  const newsArticles = [
    {
      id: 1,
      title: "Upcoming 3-Day Conference: REST FOR YOU",
      excerpt: "Join us for a transformative conference with Apostle Catherine Wangari. April 24-26, 2025 at Nyeri Municipal Hall.",
      image: heroWomen,
      date: "April 24, 2025",
      author: "Suitable Helpers",
      category: "Events",
    },
    {
      id: 2,
      title: "Empowering 500 Women Through The Daughters Closet Program",
      excerpt: "Our flagship program reaches another milestone, equipping young women with faith, career guidance, and life skills.",
      image: programsWorkshop,
      date: "March 15, 2025",
      author: "Programs Team",
      category: "Programs",
    },
    {
      id: 3,
      title: "Apostle Catherine Launches New Book: The Freedom Guarantee",
      excerpt: "Discover the keys to spiritual and practical freedom in this powerful new release from our founder.",
      image: founder,
      date: "February 28, 2025",
      author: "Communications",
      category: "Publications",
    },
    {
      id: 4,
      title: "Rahab Rescue Mission: Transforming Lives Through Compassion",
      excerpt: "Learn how our outreach program is making a real difference in the lives of vulnerable women.",
      image: programsWorkshop,
      date: "February 10, 2025",
      author: "Outreach Team",
      category: "Impact",
    },
    {
      id: 5,
      title: "Builder's Parade Workshop Series Begins This Month",
      excerpt: "Join women aged 36-65 for intensive training in business, investment, and spiritual growth.",
      image: heroWomen,
      date: "January 20, 2025",
      author: "Programs Team",
      category: "Workshops",
    },
    {
      id: 6,
      title: "New Partnership Brings Medical Camps to Rural Communities",
      excerpt: "Tulishe Taifa Program expands to include free healthcare services in underserved areas.",
      image: programsWorkshop,
      date: "January 5, 2025",
      author: "Partnerships",
      category: "Community",
    },
  ];

  const categories = ["All", "Events", "Programs", "Publications", "Impact", "Workshops", "Community"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
                Latest News & Updates
              </h1>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
                Stay informed about our programs, events, and the impact we're making 
                in communities across the nation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-muted/30 sticky top-20 z-10 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-card text-foreground hover:bg-primary hover:text-white transition-colors whitespace-nowrap text-sm font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-3xl shadow-strong overflow-hidden grid md:grid-cols-2 gap-0"
            >
              <div className="relative h-64 md:h-auto">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 w-fit">
                  {newsArticles[0].category}
                </span>
                <h2 className="font-display font-bold text-3xl text-foreground mb-4">
                  {newsArticles[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {newsArticles[0].excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {newsArticles[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {newsArticles[0].author}
                  </div>
                </div>
                
                <Button 
                  onClick={() => navigate(`/news/${newsArticles[0].id}`)}
                  className="gradient-primary shadow-medium hover:shadow-strong w-fit"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => navigate(`/news/${article.id}`)}
                  className="bg-card rounded-2xl shadow-soft hover:shadow-strong transition-all overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-card text-foreground text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl text-foreground mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter and never miss important updates, 
                event announcements, and inspiring stories.
              </p>
              <Button size="lg" className="gradient-primary shadow-medium hover:shadow-strong">
                Subscribe Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
