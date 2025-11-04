import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Calendar } from 'lucide-react';

const LeadershipTeam = () => {
  const leaders = [
    {
      name: "Anil Kumar Singh",
      position: "Secretary",
      fatherName: "Shiv Mangle Singh",
      image: "/src/assets/delhuan-sachiv-dairyfarm.jpeg",
      experience: "15+ Years",
      description: "Leading digital transformation in dairy farming",
      achievements: ["Digital Collection System", "Farmer Welfare Programs"]
    },
    {
      name: "Arun Singh",
      position: "Chairman",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      experience: "1+ Years",
      description: "Visionary leader driving growth and innovation",
      achievements: ["Market Expansion", "Quality Standards"]
    },
    {
      name: "Shyam Narayan Singh",
      position: "Previous Chairman",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      experience: "14   + Years",
      description: "Founding leader who established strong foundations",
      achievements: ["Establishment", "Community Building"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-poppins font-bold text-primary mb-4">
            Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our dedicated leaders who drive Delhuan Dairy & Animal Care towards excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/60 transition-all duration-300">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-left-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-black font-medium">
                      {leader.position}
                    </Badge>
                  </div>
                </div>

                <h3 className="text-xl font-poppins font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {leader.name}
                </h3>

                {leader.fatherName && (
                  <p className="text-sm text-muted-foreground mb-4">
                    Son of {leader.fatherName}
                  </p>
                )}

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {leader.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-accent">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{leader.experience}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-primary">
                      <Award className="h-4 w-4" />
                      <span className="text-sm font-medium">Key Achievements</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {leader.achievements.map((achievement, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs border-primary/20 hover:border-accent transition-colors duration-300"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;