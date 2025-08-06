import React from 'react';
import { Clock, TrendingUp, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedCounter from '@/components/AnimatedCounter';

const MilkRateSection = () => {
  const milkRates = [
    { fatContent: '3.0%', rate: '₹32', quality: 'Standard' },
    { fatContent: '3.5%', rate: '₹35', quality: 'Good', popular: true },
    { fatContent: '4.0%', rate: '₹38', quality: 'Premium' },
    { fatContent: '4.5%', rate: '₹41', quality: 'Super Premium' },
    { fatContent: '5.0%+', rate: '₹45', quality: 'Excellent' }
  ];

  const schedule = [
    { time: '6:00 AM - 8:00 AM', session: 'Morning Collection', location: 'Main Center' },
    { time: '6:30 PM - 8:30 PM', session: 'Evening Collection', location: 'Main Center' },
    { time: '7:00 AM - 9:00 AM', session: 'Weekend Special', location: 'Sub Centers', days: 'Sat-Sun' }
  ];

  return (
    <section id="milk-rate" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            Current Milk Rates & Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing based on fat content with convenient collection timings for our farmers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Milk Rates */}
          <Card className="shadow-lg border-0">
            <CardHeader className="premium-gradient text-white">
              <CardTitle className="flex items-center text-2xl font-poppins">
                <TrendingUp className="mr-3 h-6 w-6" />
                Today's Milk Rates
              </CardTitle>
              <p className="text-white/90">Per Liter • Updated Daily</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {milkRates.map((rate, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-6 border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors ${
                      rate.popular ? 'bg-accent/10' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{rate.fatContent}</div>
                        <div className="text-sm text-muted-foreground">Fat Content</div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{rate.quality}</div>
                        {rate.popular && (
                          <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-accent-dark">
                        <AnimatedCounter 
                          end={parseInt(rate.rate.replace('₹', ''))} 
                          prefix="₹" 
                          duration={1500}
                          className="inline"
                        />
                      </div>
                      <div className="text-sm text-muted-foreground">per liter</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-muted/30">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Rates are subject to daily market fluctuations. 
                  Final pricing is determined at the time of collection based on quality testing.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Collection Schedule */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader className="accent-gradient text-black">
                <CardTitle className="flex items-center text-2xl font-poppins">
                  <Clock className="mr-3 h-6 w-6" />
                  Collection Schedule
                </CardTitle>
                <p className="text-black/80">Daily Milk Collection Timings</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                      <div>
                        <div className="font-semibold text-primary">{item.session}</div>
                        <div className="text-sm text-muted-foreground">{item.location}</div>
                        {item.days && (
                          <Badge variant="outline" className="mt-1">{item.days}</Badge>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-foreground">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-poppins text-primary">
                  <Calendar className="mr-3 h-5 w-5" />
                  Important Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Quality Testing</div>
                    <p className="text-sm text-muted-foreground">Every batch is tested for fat content, SNF, and adulterants</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-dark rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Payment Schedule</div>
                    <p className="text-sm text-muted-foreground">Payments are processed every 15 days through bank transfer</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Bonus Scheme</div>
                    <p className="text-sm text-muted-foreground">Additional incentives for consistent quality and quantity</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Rate Update Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent-dark px-6 py-3 rounded-full">
            <TrendingUp className="h-5 w-5" />
            <span className="font-medium">Rates updated daily at 6:00 AM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilkRateSection;