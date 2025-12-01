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

  const buffaloMilkRates = [
    { fatContent: '5.0%', rate: '₹48', quality: 'Standard' },
    { fatContent: '5.5%', rate: '₹51', quality: 'Good', popular: true },
    { fatContent: '6.0%', rate: '₹54', quality: 'Premium' },
    { fatContent: '6.5%', rate: '₹57', quality: 'Super Premium' },
    { fatContent: '7.0%+', rate: '₹60', quality: 'Excellent' }
  ];

  const schedule = [
    { time: '6:00 AM - 8:00 AM', session: 'Morning Collection', location: 'Main Center' },
    { time: '6:30 PM - 8:30 PM', session: 'Evening Collection', location: 'Main Center' },
    { time: '7:00 AM - 9:00 AM', session: 'Weekend Special', location: 'Sub Centers', days: 'Sat-Sun' }
  ];

  return (
    <>
      <style>
        {`
          @keyframes pulse-scale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          .animate-pulse-scale {
            animation: pulse-scale 3s ease-in-out infinite;
          }
          @keyframes pulse-scale-x {
            0%, 100% { transform: scaleX(1); }
            50% { transform: scaleX(1.2); }
          }
          .animate-pulse-scale-x {
            animation: pulse-scale-x 3s ease-in-out infinite;
          }
        `}
      </style>
      <section id="milk-rate" data-animate="right" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-layout="left-text">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
              Current Milk Rates & Schedule
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing based on fat content for cow and buffalo milk with convenient collection timings for our farmers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" data-layout="right-text">
            {/* Cow Milk Rates */}
            <Card className="shadow-lg border-0 group">
              <CardHeader className="premium-gradient text-white">
                <CardTitle className="flex items-center text-2xl font-poppins">
                  <TrendingUp 
                    className="mr-3 h-6 w-6 transform transition-transform duration-500 ease-in-out group-hover:rotate-y-180" 
                    aria-hidden="true"
                  />
                  Cow Milk Rates
                </CardTitle>
                <p className="text-white/90">Per Liter • Updated Daily</p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {milkRates.map((rate, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center justify-between p-6 border-b border-border last:border-b-0 hover:bg-accent/20 hover:scale-[1.02] hover:shadow-md transition-all duration-300 ${
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
                            aria-live="polite"
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

            {/* Buffalo Milk Rates */}
            <Card className="shadow-lg border-0 group">
              <CardHeader className="accent-gradient text-black">
                <CardTitle className="flex items-center text-2xl font-poppins">
                  <TrendingUp 
                    className="mr-3 h-6 w-6 transform transition-transform duration-500 ease-in-out group-hover:rotate-y-180" 
                    aria-hidden="true"
                  />
                  Buffalo Milk Rates
                </CardTitle>
                <p className="text-black/80">Per Liter • Updated Daily</p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {buffaloMilkRates.map((rate, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center justify-between p-6 border-b border-border last:border-b-0 hover:bg-accent/20 hover:scale-[1.02] hover:shadow-md transition-all duration-300 ${
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
                            aria-live="polite"
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

            {/* Collection Schedule and Quick Info */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 group">
                <CardHeader className="accent-gradient text-black">
                  <CardTitle className="flex items-center text-2xl font-poppins">
                    <Clock 
                      className="mr-3 h-6 w-6 transform transition-transform duration-500 ease-in-out group-hover:rotate-y-180" 
                      aria-hidden="true"
                    />
                    Collection Schedule
                  </CardTitle>
                  <p className="text-black/80">Daily Milk Collection Timings</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {schedule.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-accent/20 hover:scale-[1.02] hover:shadow-md transition-all duration-300"
                      >
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

              <Card className="shadow-lg border-0 group">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-poppins text-primary">
                    <Calendar 
                      className="mr-3 h-5 w-5 transform transition-transform duration-500 ease-in-out group-hover:rotate-y-180" 
                      aria-hidden="true"
                    />
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
            <div className="inline-flex items-center space-x-2 bg-[#0f3520] text-accent-dark px-6 py-3 rounded-full animate-pulse-scale-x">
              <TrendingUp 
                className="h-5 w-5 animate-pulse-scale" 
                aria-hidden="true"
              />
              <span className="font-medium">Rates updated daily at 6:00 AM</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MilkRateSection;