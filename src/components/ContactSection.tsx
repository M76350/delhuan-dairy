import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      return;
    }

    setLoading(true);

    // Create WhatsApp message
    const message = `📧 *Contact Form Submission*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || 'Not provided'}
💬 *Message:* ${formData.message}

*Sent from:* Delhuan Dairy Website`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917635065908?text=${encodedMessage}`;

    // Simulate sending email data
    console.log('Sending contact form to email:', {
      to: 'manishkumar09112002@gmail.com',
      subject: 'New Contact Form Submission',
      data: formData
    });

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+91 7635065908'],
      color: 'primary'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['Quick Support'],
      color: 'accent'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@delhuandairy.com'],
      color: 'primary'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Delhuan,Indour', 'Dinara, Rohtas, Bihar'],
      color: 'accent'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about our services or need support? We're here to help you
            with all your dairy and animal care needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          {/* Contact Information with Hover Effects */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="premium-gradient text-white">
                <CardTitle className="text-xl font-poppins">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-secondary/20 hover:shadow-md hover:-translate-y-1 cursor-pointer group relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300 rounded-lg`}></div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${info.color === 'primary'
                      ? 'bg-primary/10 group-hover:bg-primary/20'
                      : 'bg-accent/10 group-hover:bg-accent/20'
                      } transition-all duration-300 group-hover:animate-[vibrate_0.3s_linear_infinite]`}>
                      <info.icon className={`h-6 w-6 ${info.color === 'primary'
                        ? 'text-primary group-hover:text-primary-dark'
                        : 'text-accent-dark group-hover:text-accent'
                        } transition-all duration-300`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-1 group-hover:text-primary-dark transition-colors duration-300">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours Card */}
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="accent-gradient text-black">
                <CardTitle className="flex items-center text-xl font-poppins">
                  <Clock className="mr-3 h-5 w-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Saturday</span>
                  <span className="font-medium">6:00 AM - 8:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-t pt-3 mt-3">
                  <span className="text-muted-foreground">Emergency Support</span>
                  <span className="font-medium text-accent-dark">24/7 Available</span>
                </div>
              </CardContent>
            </Card>
            <div><h2 className="text-[20px] font-bold text-black bg-yellow-400 p-2">
              Our Connection
            </h2>

            </div>

            {/* QR Code */}
            <div className='flex items-center justify-center rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300'>
              <a
                href="https://adhunik-lakva-polio-hospital-gitana.vercel.app/"
                style={{ cursor: "pointer", display: "block" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://storage2.me-qr.com/qr/236466467.png"
                  alt="Create qr code for free"
                  style={{ border: 0 }}
                />
              </a>
            </div>
          </div>

          {/* Contact Form and Map Section */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-primary">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full premium-gradient text-white hover:opacity-90 transition-opacity duration-300"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Section */}
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-poppins text-primary">Our Location</CardTitle>
                <p className="text-muted-foreground">
                  Visit us at our main center in Delhuan village
                </p>
              </CardHeader>
              <CardContent className="p-0 overflow-hidden rounded-b-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.7821920319245!2d83.99330449225273!3d25.264776949103762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d93dd6dd8bc41%3A0x6e9a1435ee05428d!2sSudha%20milk%20callection%20center!5e0!3m2!1sen!2sin!4v1754398175795!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  loading="lazy"
                  title="Our Location"
                  className="border-0"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-poppins font-bold text-primary mb-6">
            Need Immediate Assistance?
          </h3>
          <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917635065908"
              className="premium-gradient text-white px-8 py-3 flex gap-2 rounded-md hover:opacity-90 transition-opacity duration-300 hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              Call Now:
            </a>
            <a
              href="https://wa.me/917635065908"
              className="accent-gradient text-black px-8 py-3 flex gap-2 rounded-md hover:opacity-90 transition-opacity duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Via Support
            </a>
          </div>
        </div>
      </div>

      {/* Add the animation style directly in the component */}
      <style >{`
        @keyframes vibrate {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
