import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ShoppingCart, Book, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import founder from "@/assets/founder.jpg";
import shopBg from "@/assets/shop-bg.jpg";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "The Freedom Guarantee",
      author: "Apostle Catherine Wangari",
      price: "KES 1,500",
      category: "Book",
      image: founder,
      description: "A powerful guide to spiritual and practical freedom for every woman.",
    },
    {
      id: 2,
      name: "Women of Destiny",
      author: "Apostle Catherine Wangari",
      price: "KES 1,200",
      category: "Book",
      image: founder,
      description: "Discover your God-given purpose and walk in divine destiny.",
    },
    {
      id: 3,
      name: "Prayer Journal",
      author: "Suitable Helpers Ministry",
      price: "KES 800",
      category: "Journal",
      image: founder,
      description: "Beautiful journal to record your prayers, testimonies, and spiritual journey.",
    },
    {
      id: 4,
      name: "Conference Teaching Series (USB)",
      author: "Various Speakers",
      price: "KES 2,000",
      category: "Media",
      image: founder,
      description: "Complete collection of powerful teachings from our annual conferences.",
    },
    {
      id: 5,
      name: "Daughters Closet Workbook",
      author: "Programs Team",
      price: "KES 600",
      category: "Workbook",
      image: founder,
      description: "Comprehensive workbook for young women's discipleship program.",
    },
    {
      id: 6,
      name: "Ministry Branded T-Shirt",
      author: "Suitable Helpers",
      price: "KES 1,000",
      category: "Merchandise",
      image: founder,
      description: "High-quality cotton t-shirt with ministry logo and inspiring message.",
    },
  ];

  const handlePurchase = (product: typeof products[0]) => {
    const emailBody = `Product Order Request

PRODUCT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Product Name: ${product.name}
Category: ${product.category}
Author/Brand: ${product.author}
Price: ${product.price}
Description: ${product.description}

CUSTOMER INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full Name: [Please fill in your name]
Phone Number: [Please fill in your phone]
Delivery Address: [Please fill in your address]
Preferred Payment Method: [M-Pesa/Bank Transfer/Cash]

ADDITIONAL NOTES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Add any special requests or questions here]

Thank you for your order!
The Suitable Helpers Team will contact you with payment and delivery details.`;

    const mailtoLink = `mailto:thesuitablehelpers@gmail.com?subject=${encodeURIComponent(
      `Product Order: ${product.name}`
    )}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    toast.success("Opening email to complete your order...");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="text-white py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${shopBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-primary/80 to-primary/90" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ShoppingCart className="w-16 h-16 mx-auto mb-6" />
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
                Ministry Shop
              </h1>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
                Books, resources, and merchandise to support your spiritual growth and our ministry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden shadow-soft hover:shadow-strong transition-all group">
                    <div className="relative h-64 overflow-hidden bg-muted/30">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold flex items-center gap-1">
                          {product.category === "Book" && <Book className="w-3 h-3" />}
                          {product.category !== "Book" && <Package className="w-3 h-3" />}
                          {product.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{product.author}</p>
                      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-display font-bold text-2xl text-primary">
                          {product.price}
                        </span>
                        <Button
                          onClick={() => handlePurchase(product)}
                          className="gradient-primary shadow-soft hover:shadow-medium"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Order Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-display font-bold text-3xl text-foreground mb-6">
                How to Order
              </h2>
              <div className="space-y-4 text-left bg-card rounded-2xl p-8 shadow-soft">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Click "Order Now"</h3>
                    <p className="text-muted-foreground text-sm">
                      Click the order button on any product you'd like to purchase.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Send Email</h3>
                    <p className="text-muted-foreground text-sm">
                      Your email client will open with a pre-filled message. Add your details and send.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">We'll Contact You</h3>
                    <p className="text-muted-foreground text-sm">
                      Our team will reach out with payment details and delivery information.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
