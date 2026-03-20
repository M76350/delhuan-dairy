import React, { useState } from "react";
import { X, Plus, Minus, Trash2, ShoppingBag, Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const CartDrawer: React.FC = () => {
  const { items, removeFromCart, updateQty, clearCart, totalItems, totalPrice, isOpen, closeCart } = useCart();
  const { toast } = useToast();
  const [step, setStep] = useState<"cart" | "checkout">("cart");
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  if (!isOpen) return null;

  const handleCheckout = () => {
    if (items.length === 0) return;
    setStep("checkout");
  };

  const handlePlaceOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      toast({ title: "Sabhi fields bharen", description: "Naam, phone aur address zaroori hai.", variant: "destructive" });
      return;
    }
    if (form.phone.replace(/\D/g, "").length !== 10) {
      toast({ title: "Invalid Phone", description: "10-digit mobile number enter karein.", variant: "destructive" });
      return;
    }

    const itemLines = items.map(
      (i) => `• ${i.name} × ${i.quantity} ${i.unit} = ₹${i.priceNum * i.quantity}`
    ).join("\n");

    const msg = `🛒 *New Order — Delhuan Dairy*\n\n${itemLines}\n\n💰 *Total: ₹${totalPrice}*\n\n👤 *Name:* ${form.name}\n📱 *Phone:* ${form.phone}\n🏠 *Address:* ${form.address}\n\n_Order via Delhuan Dairy Website_`;

    window.open(`https://wa.me/917635065908?text=${encodeURIComponent(msg)}`, "_blank");

    toast({ title: "Order Placed!", description: "WhatsApp pe order bhej diya gaya hai." });
    clearCart();
    setStep("cart");
    setForm({ name: "", phone: "", address: "" });
    closeCart();
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-x-0 top-20 bottom-0 bg-black/50 z-[60]" onClick={closeCart} />

      {/* Drawer */}
      <div className="fixed right-0 top-20 bottom-0 w-full max-w-md bg-background shadow-2xl z-[61] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b premium-gradient text-white">
          <div className="flex items-center gap-3">
            {step === "checkout" && (
              <button onClick={() => setStep("cart")} className="hover:opacity-80 transition-opacity">
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <ShoppingBag className="h-5 w-5" />
            <h2 className="text-lg font-poppins font-bold">
              {step === "cart" ? `Cart (${totalItems} items)` : "Checkout"}
            </h2>
          </div>
          <button onClick={closeCart} className="hover:opacity-80 transition-opacity">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {step === "cart" ? (
            <>
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <ShoppingBag className="h-16 w-16 text-muted-foreground/30" />
                  <p className="text-muted-foreground text-lg">Cart khali hai</p>
                  <p className="text-sm text-muted-foreground">Products page se items add karein</p>
                  <Button variant="outline" onClick={closeCart}>
                    <ArrowLeft className="h-4 w-4 mr-2" /> Shopping Continue Karein
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 p-3 bg-card rounded-xl border shadow-sm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-primary truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.price}</p>
                        <p className="text-sm font-bold text-accent-dark mt-1">
                          ₹{item.priceNum * item.quantity}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQty(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQty(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-destructive hover:opacity-70 transition-opacity"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="space-y-5">
              {/* Order Summary */}
              <div className="bg-primary/5 rounded-xl p-4 space-y-2">
                <h3 className="font-semibold text-sm text-primary mb-3">Order Summary</h3>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.name} × {item.quantity}</span>
                    <span className="font-medium">₹{item.priceNum * item.quantity}</span>
                  </div>
                ))}
                <div className="border-t pt-2 flex justify-between font-bold text-primary">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>

              {/* Customer Form */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cart-name">Aapka Naam *</Label>
                  <Input
                    id="cart-name"
                    placeholder="Poora naam likhein"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="cart-phone">Mobile Number *</Label>
                  <Input
                    id="cart-phone"
                    type="tel"
                    placeholder="10-digit number"
                    maxLength={10}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="cart-address">Delivery Address *</Label>
                  <Input
                    id="cart-address"
                    placeholder="Ghar ka poora pata likhein"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t px-5 py-4 bg-background space-y-3">
            {step === "cart" ? (
              <>
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                  <span className="text-primary font-bold text-lg">₹{totalPrice}</span>
                </div>
                {totalPrice < 500 && (
                  <p className="text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
                    ₹{500 - totalPrice} aur add karein — Free Delivery milegi!
                  </p>
                )}
                <Button onClick={handleCheckout} className="w-full premium-gradient text-white" size="lg">
                  Checkout Karein →
                </Button>
                <Button variant="ghost" size="sm" className="w-full text-muted-foreground" onClick={closeCart}>
                  <ArrowLeft className="h-4 w-4 mr-2" /> Shopping Continue Karein
                </Button>
              </>
            ) : (
              <Button onClick={handlePlaceOrder} className="w-full premium-gradient text-white" size="lg">
                <Send className="h-4 w-4 mr-2" />
                WhatsApp pe Order Karein
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
