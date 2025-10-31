import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import heroWomen from "@/assets/hero-women.jpg";
import programsWorkshop from "@/assets/programs-workshop.jpg";
import founder from "@/assets/founder.jpg";

export default function NewsArticle() {
  const navigate = useNavigate();
  const { id } = useParams();

  const articles = [
    {
      id: "1",
      title: "Upcoming 3-Day Conference: REST FOR YOU",
      image: heroWomen,
      date: "April 24, 2025",
      author: "Suitable Helpers",
      category: "Events",
      content: `
        <p>We are thrilled to announce our upcoming 3-day conference, "REST FOR YOU," featuring the powerful ministry of Apostle Catherine Wangari. This transformative event will take place from April 24-26, 2025, at the beautiful Nyeri Municipal Hall.</p>
        
        <h3>Conference Theme: Finding Rest in God's Presence</h3>
        <p>In today's fast-paced world, women are constantly juggling multiple responsibilities, often neglecting their spiritual and emotional well-being. This conference is designed to provide a sacred space where you can find true rest in God's presence.</p>
        
        <h3>What to Expect</h3>
        <ul>
          <li>Powerful teaching sessions with Apostle Catherine Wangari</li>
          <li>Worship and praise sessions</li>
          <li>Prayer and ministry time</li>
          <li>Networking opportunities with like-minded women</li>
          <li>Workshops on practical life skills</li>
        </ul>
        
        <h3>Registration Details</h3>
        <p>Early bird registration is now open! Register before March 31st to receive a special discount. Limited seats available.</p>
        
        <p><strong>Venue:</strong> Nyeri Municipal Hall<br>
        <strong>Date:</strong> April 24-26, 2025<br>
        <strong>Time:</strong> 9:00 AM - 5:00 PM daily</p>
        
        <p>Don't miss this life-changing opportunity. Register today and invite a friend!</p>
      `,
    },
    {
      id: "2",
      title: "Empowering 500 Women Through The Daughters Closet Program",
      image: programsWorkshop,
      date: "March 15, 2025",
      author: "Programs Team",
      category: "Programs",
      content: `
        <p>We are celebrating a major milestone in our Daughters Closet program as we've successfully empowered over 500 young women aged 18-35 with faith-based guidance, career development skills, and practical life training.</p>
        
        <h3>Program Impact</h3>
        <p>Since its inception, The Daughters Closet has been more than just a program—it's a movement of transformation. Our participants have reported significant improvements in their confidence, career prospects, and spiritual walk.</p>
        
        <h3>Success Stories</h3>
        <p>Many of our graduates have gone on to start successful businesses, pursue higher education, and become leaders in their communities. Their testimonies inspire us to continue this vital work.</p>
        
        <h3>Join the Next Cohort</h3>
        <p>Applications are now open for our next program cohort starting in May 2025. If you're a young woman ready to unlock your potential and discover your purpose, we invite you to apply.</p>
      `,
    },
    {
      id: "3",
      title: "Apostle Catherine Launches New Book: The Freedom Guarantee",
      image: founder,
      date: "February 28, 2025",
      author: "Communications",
      category: "Publications",
      content: `
        <p>We are excited to announce the launch of Apostle Catherine Wangari's latest book, "The Freedom Guarantee: Walking in Divine Liberty." This powerful resource is now available for purchase.</p>
        
        <h3>About the Book</h3>
        <p>"The Freedom Guarantee" is a comprehensive guide to experiencing true freedom in Christ. Drawing from years of ministry experience and biblical wisdom, Apostle Catherine provides practical steps to breaking free from limitations and living in divine purpose.</p>
        
        <h3>What Readers Are Saying</h3>
        <p>"This book changed my life! I finally understand what it means to be truly free in Christ." - Sarah M.</p>
        
        <h3>Get Your Copy</h3>
        <p>The book is available in both physical and digital formats. Visit our shop to order your copy today!</p>
      `,
    },
  ];

  const article = articles.find((a) => a.id === id) || articles[0];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/news")}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Button>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              {article.category}
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="gap-2 ml-auto"
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-2xl shadow-strong"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              color: "hsl(var(--foreground))",
            }}
          />

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-8 rounded-2xl gradient-primary text-white text-center"
          >
            <h3 className="font-display font-bold text-2xl mb-4">
              Stay Connected
            </h3>
            <p className="mb-6 opacity-90">
              Subscribe to our newsletter for more updates and inspiring stories.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/#newsletter")}
            >
              Subscribe Now
            </Button>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
