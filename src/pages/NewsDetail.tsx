import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Share2, Clock, ArrowRight, MapPin, Home } from "lucide-react";
import { products } from "@/data/products";

const NewsDetail = () => {
  const { slug } = useParams();
  
  const newsArticles = [
    {
      id: 1,
      title: "KairosLove: A Season of Giving, A Lifetime of Living",
      excerpt: "Win a Dream Home Discount in One of the Biggest Real Estate Promos of the Year! Kairos Hof, a leading sustainable development company and recent winner...",
      content: `
        <h2>A Season of Giving Back to Our Community</h2>
        <p>Kairos Hof, a leading sustainable development company and recent winner of the Future Cities Visionary Award, is thrilled to announce the launch of KairosLove, our most exciting promotional campaign to date. This initiative represents our commitment to giving back to the community that has supported us throughout our journey.</p>
        
        <h3>What is KairosLove?</h3>
        <p>KairosLove is more than just a promotion – it's our way of spreading joy and making homeownership dreams more accessible. Participants stand a chance to win significant discounts on their dream home purchases, with prizes ranging from 10% to 30% off selected properties.</p>
        
        <h3>How to Participate</h3>
        <p>Participation is simple and fun:</p>
        <ul>
          <li>Visit any of our experience centers or properties</li>
          <li>Register for the KairosLove promotion</li>
          <li>Complete a brief survey about your dream home preferences</li>
          <li>Spin our digital wheel of fortune for your discount</li>
        </ul>
        
        <h3>Why We're Doing This</h3>
        <p>As we celebrate our continued growth and recognition in the real estate industry, we believe it's important to share our success with the families and individuals who have made it possible. KairosLove represents our core values of community, sustainability, and making quality housing accessible to more people.</p>
        
        <p>Don't miss this opportunity to be part of something special. Visit us today and let KairosLove help you take the next step toward owning your dream home.</p>
      `,
      date: "February 19, 2025",
      author: "Kairos Hof Team",
      category: "Events",
      image: "/placeholder.svg",
      slug: "kairoslove-season-giving-lifetime-living",
      featured: true,
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Kairos Group Retreat: Step Up 2025",
      excerpt: "As pioneers of sustainable housing in Nigeria and recipients of the Future Cities Visionary Award, innovation is deeply ingrained in the DNA of Kairos Hof...",
      content: `
        <h2>Innovation Meets Team Building</h2>
        <p>As pioneers of sustainable housing in Nigeria and recipients of the Future Cities Visionary Award, innovation is deeply ingrained in the DNA of Kairos Hof. Our annual team retreat, "Step Up 2025," embodies our commitment to continuous growth and excellence in everything we do.</p>
        
        <h3>The Vision for 2025</h3>
        <p>This year's retreat focused on strategic planning and team alignment as we prepare for an exciting year ahead. Key discussion points included:</p>
        <ul>
          <li>Expanding our sustainable housing portfolio</li>
          <li>Implementing cutting-edge green technologies</li>
          <li>Strengthening community partnerships</li>
          <li>Enhancing customer experience initiatives</li>
        </ul>
        
        <h3>Team Building and Innovation</h3>
        <p>The retreat wasn't just about business planning. We invested significant time in team building activities that strengthen the bonds between our diverse team members. From collaborative workshops to outdoor activities, every moment was designed to foster creativity and innovation.</p>
        
        <h3>Sustainability Commitments</h3>
        <p>As a company committed to SDG 11 (Sustainable Cities and Communities), we used this retreat to reinforce our environmental commitments and explore new ways to make our projects even more sustainable and community-focused.</p>
        
        <p>The energy and enthusiasm from Step Up 2025 will drive our efforts throughout the year as we continue to build sustainable communities and create lasting value for our clients and partners.</p>
      `,
      date: "January 16, 2025",
      author: "Kairos Hof Team",
      category: "Events",
      image: "/placeholder.svg",
      slug: "kairos-group-retreat-step-up-2025",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Yuletide Home Special: Biggest Real Estate Deal of the Year",
      excerpt: "Exclusive holiday pricing on luxury sustainable homes with premium amenities and flexible payment options for families...",
      content: `
        <h2>Holiday Season, Dream Home Season</h2>
        <p>The holiday season is a time for giving, sharing, and making dreams come true. This year, Kairos Hof is proud to present the Yuletide Home Special – our biggest real estate promotion of the year, designed to make luxury sustainable living more accessible to families across Nigeria.</p>
        
        <h3>What's Included in the Yuletide Special</h3>
        <p>Our holiday promotion offers unprecedented value:</p>
        <ul>
          <li>Up to 25% discount on selected properties</li>
          <li>Flexible payment plans with low down payments</li>
          <li>Free home customization options worth up to ₦2 million</li>
          <li>Complimentary legal documentation and processing</li>
          <li>Extended warranty on all home systems</li>
        </ul>
        
        <h3>Featured Properties</h3>
        <p>The Yuletide Special applies to our most sought-after developments, including premium units in Hof City and Hof Court. These properties feature state-of-the-art sustainable technologies, modern designs, and community amenities that set new standards for luxury living.</p>
        
        <h3>Limited Time Offer</h3>
        <p>This exclusive promotion runs through the end of December 2024, with limited units available. Early buyers will have the best selection of units and customization options.</p>
        
        <p>Make this holiday season memorable by securing your family's future with a Kairos Hof home. Contact our sales team today to schedule a private viewing and learn more about how the Yuletide Home Special can make your dream home a reality.</p>
      `,
      date: "December 10, 2024",
      author: "Kairos Hof Team",
      category: "Discounts",
      image: "/placeholder.svg",
      slug: "yuletide-home-special-biggest-deal",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Kairos Hof Honored with Future Cities Visionary Award",
      excerpt: "We are honored to announce that Kairos Hof's visionary Director has been named the recipient of the 'Future Cities Visionary Award'...",
      content: `
        <h2>Recognition for Sustainable Innovation</h2>
        <p>We are honored to announce that Kairos Hof's visionary Director has been named the recipient of the 'Future Cities Visionary Award' at the prestigious International Sustainable Development Conference. This recognition celebrates our commitment to creating sustainable urban communities that align with global development goals.</p>
        
        <h3>What This Award Represents</h3>
        <p>The Future Cities Visionary Award recognizes organizations and leaders who demonstrate exceptional innovation in sustainable urban development. Our selection was based on:</p>
        <ul>
          <li>Innovative sustainable building practices</li>
          <li>Community-centered development approach</li>
          <li>Alignment with UN Sustainable Development Goals</li>
          <li>Measurable environmental impact reduction</li>
          <li>Social responsibility initiatives</li>
        </ul>
        
        <h3>Our Sustainable Approach</h3>
        <p>Since our founding, Kairos Hof has been committed to developing properties that not only provide excellent living spaces but also contribute positively to environmental conservation and community development. Our projects incorporate:</p>
        <ul>
          <li>Renewable energy systems</li>
          <li>Water conservation technologies</li>
          <li>Green building materials</li>
          <li>Community gardens and green spaces</li>
          <li>Waste management systems</li>
        </ul>
        
        <h3>Looking Forward</h3>
        <p>This award motivates us to continue pushing the boundaries of sustainable development. We're already working on next-generation projects that will set new standards for environmental responsibility and community impact in Nigerian real estate.</p>
        
        <p>Thank you to our team, partners, and clients who have supported our vision. Together, we're building a more sustainable future, one community at a time.</p>
      `,
      date: "November 15, 2024",
      author: "Kairos Hof Team",
      category: "Insights",
      image: "/placeholder.svg",
      slug: "kairos-hof-future-cities-visionary-award",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "Affordable Doesn't Mean Cheap",
      excerpt: "Debunking the myth that 'affordable' means 'cheap' in real estate. Understanding value for money in sustainable housing...",
      content: `
        <h2>Redefining Affordable Housing</h2>
        <p>In the real estate industry, there's a persistent misconception that "affordable" automatically means "cheap" or "low quality." At Kairos Hof, we challenge this notion by proving that affordable housing can be synonymous with quality, sustainability, and thoughtful design.</p>
        
        <h3>What Affordable Really Means</h3>
        <p>True affordability in housing isn't just about the initial purchase price. It encompasses:</p>
        <ul>
          <li>Long-term value and appreciation potential</li>
          <li>Energy efficiency that reduces ongoing costs</li>
          <li>Quality construction that minimizes maintenance expenses</li>
          <li>Strategic locations with good infrastructure</li>
          <li>Flexible payment options that fit various budgets</li>
        </ul>
        
        <h3>The Kairos Hof Approach</h3>
        <p>Our affordable housing strategy focuses on smart design and efficient construction processes that allow us to offer competitive prices without compromising on quality. We achieve this through:</p>
        <ul>
          <li>Bulk purchasing of premium materials</li>
          <li>Efficient project management and construction timelines</li>
          <li>Innovative building technologies that reduce costs</li>
          <li>Strategic land acquisition in developing areas</li>
          <li>Sustainable practices that provide long-term savings</li>
        </ul>
        
        <h3>Value Beyond Price</h3>
        <p>When you choose a Kairos Hof property, you're investing in more than just a home. You're buying into a community, a lifestyle, and a sustainable future. Our properties consistently appreciate in value while providing excellent quality of life for residents.</p>
        
        <p>Don't let misconceptions about affordable housing limit your dreams. Visit our properties and experience firsthand how Kairos Hof delivers exceptional value at accessible prices.</p>
      `,
      date: "October 20, 2024",
      author: "Kairos Hof Team",
      category: "Insights",
      image: "/placeholder.svg",
      slug: "affordable-doesnt-mean-cheap",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Z-Korting Apartments: 1 to 3 Bedrooms Now Available",
      excerpt: "Your choice is well covered with our new range of affordable luxury apartments featuring 1, 2, and 3 bedroom options...",
      content: `
        <h2>Introducing Z-Korting Apartments</h2>
        <p>Your choice is well covered with our new range of affordable luxury apartments featuring 1, 2, and 3 bedroom options. Z-Korting represents our commitment to providing diverse housing solutions that cater to different family sizes and lifestyle preferences.</p>
        
        <h3>Apartment Features</h3>
        <p>Each Z-Korting apartment is designed with modern living in mind:</p>
        <ul>
          <li>Open-plan living areas that maximize space</li>
          <li>Modern kitchen with premium appliances</li>
          <li>Energy-efficient lighting and fixtures</li>
          <li>Ample storage throughout</li>
          <li>Private balconies with garden or city views</li>
          <li>High-speed internet infrastructure</li>
        </ul>
        
        <h3>Community Amenities</h3>
        <p>Z-Korting residents enjoy access to exceptional community facilities:</p>
        <ul>
          <li>Swimming pool and fitness center</li>
          <li>Children's playground and recreation areas</li>
          <li>24/7 security with controlled access</li>
          <li>Covered parking spaces</li>
          <li>Community garden and green spaces</li>
          <li>Business center and meeting rooms</li>
        </ul>
        
        <h3>Flexible Options</h3>
        <p>Choose from three distinct layouts:</p>
        <ul>
          <li><strong>1-Bedroom:</strong> Perfect for young professionals and couples</li>
          <li><strong>2-Bedroom:</strong> Ideal for small families or those needing a home office</li>
          <li><strong>3-Bedroom:</strong> Spacious option for growing families</li>
        </ul>
        
        <h3>Pricing and Availability</h3>
        <p>Z-Korting apartments start from ₦25 million for 1-bedroom units, with flexible payment plans available. Early buyers can take advantage of our launch promotion, which includes free interior design consultation and appliance packages.</p>
        
        <p>Schedule a viewing today and discover why Z-Korting is the perfect choice for your next home.</p>
      `,
      date: "September 25, 2024",
      author: "Kairos Hof Team",
      category: "Apartment",
      image: "/placeholder.svg",
      slug: "z-korting-apartments-available",
      readTime: "4 min read"
    }
  ];

  const article = newsArticles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 pb-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/news">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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

  // Get featured properties for sidebar
  const featuredProperties = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <Link to="/news" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News & Insights
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <article className="space-y-8">
                {/* Article Header */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    {article.title}
                  </h1>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {article.author}
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </article>
            </div>

            {/* Sidebar - Desktop */}
            <div className="hidden lg:block space-y-6">
              {/* Featured Properties */}
              <Card className="card-luxury p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Featured Properties</h3>
                <div className="space-y-4">
                  {featuredProperties.map((property, index) => (
                    <Link key={index} to={`/products/${property.slug}`}>
                      <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-3">
                          <div className="w-full h-full flex items-center justify-center">
                            <Home className="h-8 w-8 text-primary/60" />
                          </div>
                        </div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">{property.title}</h4>
                        <div className="flex items-center text-xs text-muted-foreground mb-2">
                          <MapPin className="mr-1 h-3 w-3" />
                          {property.specifications.location}
                        </div>
                        <div className="text-sm font-medium text-primary">{property.price}</div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </Card>

              {/* Newsletter Signup */}
              <Card className="card-luxury p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="text-xl font-semibold text-foreground mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest news and insights from Kairos Hof delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm"
                  />
                  <Button variant="luxury" size="sm" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Mobile Properties Section */}
          <div className="lg:hidden mt-12 space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Featured Properties</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {featuredProperties.map((property, index) => (
                <Link key={index} to={`/products/${property.slug}`}>
                  <Card className="card-luxury p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-3">
                      <div className="w-full h-full flex items-center justify-center">
                        <Home className="h-8 w-8 text-primary/60" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{property.title}</h4>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <MapPin className="mr-1 h-4 w-4" />
                      {property.specifications.location}
                    </div>
                    <div className="text-lg font-medium text-primary">{property.price}</div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWidgets />
    </div>
  );
};

export default NewsDetail;