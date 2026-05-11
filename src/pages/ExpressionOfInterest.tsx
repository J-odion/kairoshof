import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import { Card } from "@/components/ui/card";

const ExpressionOfInterest = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-40 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl lg:text-5xl font-light leading-tight">
              Expression of <span className="font-bold text-primary">Interest</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Please fill out the form below to express your interest in our sustainable housing projects.
            </p>
          </div>

          <Card className="card-luxury p-0 overflow-hidden border-none shadow-2xl">
            <div className="w-full h-[800px]">
              <iframe
                src="https://preview--avera-deal-flow.base44.app/forms/expression-of-interest"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ borderRadius: '16px' }}
                title="Expression of Interest Form"
              ></iframe>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
    </div>
  );
};

export default ExpressionOfInterest;
