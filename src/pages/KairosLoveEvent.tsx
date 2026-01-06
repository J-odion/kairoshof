import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Heart, Star, Users, Trophy, Calendar } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import FloatingWidgets from "@/components/FloatingWidgets";

const KairosLoveEvent = () => {
  const eventEndDate = new Date("2025-03-14T23:59:59");

  const prizes = [
    {
      title: "Grand Prize",
      description: "70% OFF Dream Home",
      value: "Up to ₦28,000,000 Savings",
      icon: Trophy,
      highlight: true
    },
    {
      title: "Second Prize",
      description: "50% OFF Home Purchase",
      value: "Up to ₦20,000,000 Savings",
      icon: Star,
      highlight: false
    },
    {
      title: "Third Prize",
      description: "30% OFF Home Purchase",
      value: "Up to ₦12,000,000 Savings",
      icon: Gift,
      highlight: false
    }
  ];

  const howToParticipate = [
    {
      step: "1",
      title: "Register Online",
      description: "Fill out the registration form with your details and preferred property type."
    },
    {
      step: "2", 
      title: "Share the Love",
      description: "Share KairosLove event with friends and family on social media using #KairosLove."
    },
    {
      step: "3",
      title: "Attend Events",
      description: "Participate in our virtual and physical events throughout the campaign period."
    },
    {
      step: "4",
      title: "Win Big",
      description: "Lucky winners will be selected and announced on March 14, 2025."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-52 pb-16 bg-gradient-to-br from-red-500/10 via-pink-500/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="fade-in-up">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-500/10 rounded-full">
                  <Heart className="h-12 w-12 text-red-500" />
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
                <span className="block text-foreground">KairosLove</span>
                <span className="block bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold">
                  Valentine Special
                </span>
              </h1>
              <p className="text-2xl text-muted-foreground mb-4">A Season of Giving, A Lifetime of Living</p>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Win a Dream Home Discount in One of the Biggest Real Estate Promos of the Year! 
                Kairos Hof celebrates love with incredible savings on sustainable luxury homes.
              </p>
            </div>
            
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="card-luxury p-6 bg-gradient-to-br from-red-500/5 to-pink-500/5 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">Event Ends In:</h3>
                <CountdownTimer targetDate={eventEndDate} className="justify-center" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Amazing Prizes Await</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three lucky winners will receive incredible discounts on their dream homes. 
              This is your chance to own a piece of sustainable luxury at unbeatable prices.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <Card 
                key={index} 
                className={`card-luxury p-6 text-center fade-in-up ${
                  prize.highlight ? 'bg-gradient-to-br from-red-500/10 to-pink-500/10 border-red-500/20 transform scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {prize.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-lg ${prize.highlight ? 'bg-red-500/10' : 'bg-primary/10'}`}>
                    <prize.icon className={`h-8 w-8 ${prize.highlight ? 'text-red-500' : 'text-primary'}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{prize.title}</h3>
                <p className="text-lg text-muted-foreground mb-3">{prize.description}</p>
                <p className={`text-xl font-bold ${prize.highlight ? 'text-red-500' : 'text-primary'}`}>
                  {prize.value}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">How to Participate</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow these simple steps to enter the KairosLove Valentine Special and 
              stand a chance to win incredible discounts on your dream home.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {howToParticipate.map((step, index) => (
              <Card key={index} className="card-luxury p-6 fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-red-500">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-luxury p-8 bg-gradient-to-br from-red-500/5 to-pink-500/5">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Event Details</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Event Period</h4>
                    <p className="text-muted-foreground">February 14 - March 14, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Eligibility</h4>
                    <p className="text-muted-foreground">Open to all prospective homeowners</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Gift className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Winner Selection</h4>
                    <p className="text-muted-foreground">Random draw on March 14, 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Terms & Conditions</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Discounts apply to selected properties only</li>
                    <li>• Winners must complete purchase within 90 days</li>
                    <li>• Cannot be combined with other offers</li>
                    <li>• Standard payment terms apply</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button variant="luxury" size="lg" className="group">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <FloatingWidgets />
    </div>
  );
};

export default KairosLoveEvent;