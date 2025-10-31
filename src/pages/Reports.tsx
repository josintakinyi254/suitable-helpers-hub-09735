import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Reports() {
  const reports = [
    {
      id: 1,
      title: "Annual Impact Report 2024",
      description: "Comprehensive overview of our programs, beneficiaries, and achievements throughout 2024.",
      date: "December 2024",
      size: "2.4 MB",
      category: "Annual Reports",
      downloads: 342,
    },
    {
      id: 2,
      title: "Financial Statement 2024",
      description: "Detailed financial report showing transparency in fund utilization and program expenditures.",
      date: "December 2024",
      size: "1.8 MB",
      category: "Financial Reports",
      downloads: 218,
    },
    {
      id: 3,
      title: "The Daughters Closet Program Report",
      description: "Success stories and metrics from our flagship program for women aged 20-35.",
      date: "November 2024",
      size: "3.1 MB",
      category: "Program Reports",
      downloads: 156,
    },
    {
      id: 4,
      title: "Community Impact Assessment Q3 2024",
      description: "Quarterly assessment of our outreach programs and community transformation initiatives.",
      date: "September 2024",
      size: "2.2 MB",
      category: "Impact Reports",
      downloads: 89,
    },
    {
      id: 5,
      title: "Rahab Rescue Mission Success Stories",
      description: "Inspiring testimonials and transformation journeys from our rescue mission program.",
      date: "August 2024",
      size: "1.5 MB",
      category: "Program Reports",
      downloads: 234,
    },
    {
      id: 6,
      title: "Annual Impact Report 2023",
      description: "Complete review of programs and achievements from the previous year.",
      date: "December 2023",
      size: "2.6 MB",
      category: "Annual Reports",
      downloads: 567,
    },
  ];

  const downloads = [
    {
      id: 1,
      title: "Program Registration Forms",
      description: "Downloadable forms for all our programs including membership applications.",
      size: "450 KB",
      type: "PDF",
    },
    {
      id: 2,
      title: "Volunteer Guidelines",
      description: "Complete guide for volunteers including roles, responsibilities, and expectations.",
      size: "820 KB",
      type: "PDF",
    },
    {
      id: 3,
      title: "Donation Receipt Template",
      description: "Official template for donation receipts and acknowledgment letters.",
      size: "320 KB",
      type: "PDF",
    },
    {
      id: 4,
      title: "Event Participation Forms",
      description: "Registration and consent forms for conferences, workshops, and seminars.",
      size: "540 KB",
      type: "PDF",
    },
  ];

  const categories = ["All", "Annual Reports", "Financial Reports", "Program Reports", "Impact Reports"];

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
              <FileText className="w-16 h-16 mx-auto mb-6" />
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
                Reports & Downloads
              </h1>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
                Access our annual reports, financial statements, program evaluations, 
                and essential documents for transparency and accountability.
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

        {/* Reports Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-3xl text-foreground mb-8">
              Official Reports
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl shadow-soft hover:shadow-strong transition-all p-6 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-semibold text-foreground">
                      {report.category}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {report.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {report.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {report.downloads}
                    </div>
                    <div>{report.size}</div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 gradient-primary">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-3xl text-foreground mb-8">
              Essential Documents
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {downloads.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all p-6 flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-7 h-7 text-secondary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {doc.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="px-2 py-1 rounded bg-muted font-semibold">
                        {doc.type}
                      </span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="flex-shrink-0">
                    <Download className="w-4 h-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl shadow-strong p-8 md:p-12 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display font-bold text-3xl text-foreground mb-4">
                Our Commitment to Transparency
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Suitable Helpers, we believe in complete transparency and accountability. 
                All our reports are audited and published to ensure our supporters and 
                beneficiaries can see exactly how resources are being utilized to create 
                lasting impact in communities.
              </p>
              <Button size="lg" className="gradient-primary shadow-medium hover:shadow-strong">
                Contact Us for More Information
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
