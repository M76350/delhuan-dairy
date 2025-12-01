import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user, isAuthenticated, updateProfile, logout } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name ?? "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL ?? "");

  if (!isAuthenticated || !user) {
    navigate("/login");
    return null;
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name: name.trim() || user.name,
      photoURL: photoURL.trim() || undefined,
    });
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        // store selected image as data URL
        setPhotoURL(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-16 bg-secondary/20">
        <div className="max-w-3xl mx-auto px-4">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 flex items-center gap-2"
            onClick={handleBack}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-primary">
                User Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 border border-accent shadow">
                  <AvatarImage src={photoURL || user.photoURL} alt={name || user.name} />
                  <AvatarFallback className="bg-accent text-lg font-semibold">
                    {(name || user.name)
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-lg">{user.name}</p>
                  {user.email && (
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  )}
                  {user.phone && (
                    <p className="text-sm text-muted-foreground">{user.phone}</p>
                  )}
                </div>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo">Profile Image URL</Label>
                  <Input
                    id="photo"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    placeholder="Paste image URL (optional)"
                  />
                  <p className="text-xs text-muted-foreground">
                    You can paste any public image URL or upload a file below.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photoFile">Upload Profile Image</Label>
                  <Input
                    id="photoFile"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <p className="text-xs text-muted-foreground">
                    Selected file will override the image URL above and be stored in your browser only.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <Button type="submit" className="premium-gradient text-white px-6">
                    Save Changes
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="text-red-600 border-red-200"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingButtons />
    </div>
  );
};

export default ProfilePage;


