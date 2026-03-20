import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, BookOpen, ArrowLeft, MilkOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full text-center space-y-8">

        {/* Animated cow emoji + 404 */}
        <div className="relative">
          <div className="text-[120px] leading-none select-none animate-bounce">🐄</div>
          <div className="absolute -top-2 right-8 bg-white rounded-2xl shadow-lg px-4 py-2 text-sm font-semibold text-green-700 border border-green-200 animate-pulse">
            Moooo... 404!
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-green-600">
            <MilkOff className="h-6 w-6" />
            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              404
            </span>
            <MilkOff className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Yeh page toh kho gaya! 🥛
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Jaise kabhi kabhi doodh wala late aata hai — yeh page bhi nahi mila.
            <br />
            Ghabrao mat, ghar wapas chalo!
          </p>
        </div>

        {/* Milk spill illustration */}
        <div className="flex justify-center gap-2 text-4xl select-none">
          {"🥛💧💧💧".split("").map((c, i) => (
            <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}>
              {c}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="gap-2 border-green-300 text-green-700 hover:bg-green-50"
          >
            <ArrowLeft className="h-4 w-4" /> Wapas Jao
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="gap-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:opacity-90"
          >
            <Home className="h-4 w-4" /> Home Page
          </Button>
          <Button
            onClick={() => navigate("/blog")}
            variant="outline"
            className="gap-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50"
          >
            <BookOpen className="h-4 w-4" /> Blog Padho
          </Button>
        </div>

        <p className="text-xs text-gray-400">
          Delhuan Dairy Farm — Kochas, Rohtas, Bihar
        </p>
      </div>
    </div>
  );
}
