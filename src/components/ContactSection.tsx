import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ContactForm from './ContactForm';

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

  const isValidPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, '');
    return digits.length === 10;
  };

  const isValidEmail = (email: string) => {
    if (!email) return true; // optional field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill all required fields (Name, Phone, Message).');
      return;
    }

    if (!isValidPhone(formData.phone)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    // JSON payload for WhatsApp / email
    const jsonPayload = JSON.stringify(formData, null, 2);

    // Create WhatsApp message (JSON + readable text)
    const message = `📧 *Contact Form Submission*

*JSON Data:*
\`\`\`json
${jsonPayload}
\`\`\`

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || 'Not provided'}
💬 *Message:* ${formData.message}

*Sent from:* Delhuan Dairy Website`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917635065908?text=${encodedMessage}`;

    // Prepare email using mailto: so it opens in user's email client
    const emailSubject = encodeURIComponent('New Contact Form Submission - Delhuan Dairy');
    const emailBody = encodeURIComponent(
      `You have a new enquiry from the website.

JSON Data:
${jsonPayload}

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Message: ${formData.message}`
    );
    const mailtoUrl = `mailto:manishkumar09112002@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Open WhatsApp and email client
    window.open(whatsappUrl, '_blank');
    window.open(mailtoUrl, '_self');

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
    <section id="contact" data-animate="right" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-layout="left-text">
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
          <div className="lg:col-span-1 space-y-6" data-layout="left-text">
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
          <div className="lg:col-span-2 space-y-8" data-layout="right-text">
          <ContactForm />


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
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225.51230942594336!2d83.99255019828625!3d25.263959297749015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d931570ef5ef3%3A0x42824ed7b27de539!2sdelhuan%20dairy%20farm%20milk%20collection!5e0!3m2!1sen!2sin!4v1764574298401!5m2!1sen!2sin"
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
