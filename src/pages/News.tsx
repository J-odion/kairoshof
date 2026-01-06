import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import FloatingWidgets from "@/components/FloatingWidgets";
import Footer from "@/components/Footer";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  
  const categories = [
    "All Posts", "Apartment", "Discounts", "Events", "Facilities", "Insights", "Maisonette", "Penthouse", "Suite"
  ];

  const newsArticles = [
    {
      id: 1,
      title: "KairosLove: A Season of Giving, A Lifetime of Living",
      excerpt: "Win a Dream Home Discount in One of the Biggest Real Estate Promos of the Year! Kairos Hof, a leading sustainable development company and recent winner...",
      date: "February 19, 2025",
      author: "Kairos Hof Team",
      category: "Events",
      image: "/placeholder.svg",
      slug: "kairoslove-season-giving-lifetime-living",
      featured: true
    },
    {
      id: 2,
      title: "Kairos Group Retreat: Step Up 2025",
      excerpt: "As pioneers of sustainable housing in Nigeria and recipients of the Future Cities Visionary Award, innovation is deeply ingrained in the DNA of Kairos Hof...",
      date: "January 16, 2025",
      author: "Kairos Hof Team",
      category: "Events",
      image: "/placeholder.svg",
      slug: "kairos-group-retreat-step-up-2025"
    },
    {
      id: 3,
      title: "Yuletide Home Special: Biggest Real Estate Deal of the Year",
      excerpt: "Exclusive holiday pricing on luxury sustainable homes with premium amenities and flexible payment options for families...",
      date: "December 10, 2024",
      author: "Kairos Hof Team",
      category: "Discounts",
      image: "/placeholder.svg",
      slug: "yuletide-home-special-biggest-deal"
    },
    {
      id: 4,
      title: "Kairos Hof Honored with Future Cities Visionary Award",
      excerpt: "We are honored to announce that Kairos Hof's visionary Director has been named the recipient of the 'Future Cities Visionary Award'...",
      date: "November 15, 2024",
      author: "Kairos Hof Team",
      category: "Insights",
      image: "/placeholder.svg",
      slug: "kairos-hof-future-cities-visionary-award"
    },
    {
      id: 5,
      title: "Affordable Doesn't Mean Cheap",
      excerpt: "Debunking the myth that 'affordable' means 'cheap' in real estate. Understanding value for money in sustainable housing...",
      date: "October 20, 2024",
      author: "Kairos Hof Team",
      category: "Insights",
      image: "/placeholder.svg",
      slug: "affordable-doesnt-mean-cheap"
    },
    {
      id: 6,
      title: "Z-Korting Apartments: 1 to 3 Bedrooms Now Available",
      excerpt: "Your choice is well covered with our new range of affordable luxury apartments featuring 1, 2, and 3 bedroom options...",
      date: "September 25, 2024",
      author: "Kairos Hof Team",
      category: "Apartment",
      image: "/placeholder.svg",
      slug: "z-korting-apartments-available"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Events": "bg-red-500/10 text-red-600",
      "Discounts": "bg-green-500/10 text-green-600",
      "Insights": "bg-blue-500/10 text-blue-600",
      "Apartment": "bg-purple-500/10 text-purple-600",
      "Facilities": "bg-orange-500/10 text-orange-600",
      "Maisonette": "bg-pink-500/10 text-pink-600",
      "Penthouse": "bg-indigo-500/10 text-indigo-600",
      "Suite": "bg-teal-500/10 text-teal-600"
    };
    return colors[category] || "bg-gray-500/10 text-gray-600";
  };

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === "All Posts" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-52 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
                <span className="block text-foreground">News &</span>
                <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent font-bold">
                  Insights
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest news, insights, and developments from Kairos Hof. 
                Discover our projects, awards, and industry expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className={`card-luxury overflow-hidden group cursor-pointer fade-in-up ${
                  article.featured ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden ${
                  article.featured ? 'aspect-[16/10]' : ''
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {article.author}
                    </div>
                  </div>
                  
                  <h3 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors ${
                    article.featured ? 'text-2xl' : 'text-xl'
                  }`}>
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link to={`/news/${article.slug}`}>
                    <Button variant="outline" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="luxury" size="lg" className="group">
              Load More Articles
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
    </div>
  );
};

export default News;