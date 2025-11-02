import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Shield, Users, Sparkles, CreditCard, Package, Smartphone, Wallet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import donationBg from "@/assets/donation-bg.jpg";
import { MpesaDonation } from "@/components/MpesaDonation";

export default function Donate() {
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [donationMethod, setDonationMethod] = useState("mpesa");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [googlePayEmail, setGooglePayEmail] = useState("");
  const [isMpesaModalOpen, setIsMpesaModalOpen] = useState(false);
  const { toast } = useToast();

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (donationMethod === "mpesa") {
      setIsMpesaModalOpen(true);
      return;
    }
    
    setIsLoading(true);
    
    let emailBody = `Name: ${name}\nAmount: KES ${amount}\nDonation Method: ${donationMethod}\n\n`;
    
    if (donationMethod === "paypal") {
      emailBody += `PayPal Email: ${paypalEmail}\n\n`;
    } else if (donationMethod === "bank") {
      emailBody += `Bank Name: ${bankName}\nAccount Number: ${accountNumber}\n\n`;
    } else if (donationMethod === "googlepay") {
      emailBody += `Google Pay Email: ${googlePayEmail}\n\n`;
    }
    
    emailBody += `Message:\n${message}`;
    
    const mailtoLink = `mailto:thesuitablehelpers@gmail.com?subject=Donation via ${donationMethod}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    toast({
      title: "Opening Email",
      description: "We'll confirm your donation details shortly.",
    });
    setIsLoading(false);
  };

  const presetAmounts = [500, 1000, 2500, 5000, 10000];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-[132px] pb-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={donationBg} alt="Donation background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heart className="w-16 h-16 mx-auto mb-6 text-white" />
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 text-white">
                Support Our Mission
              </h1>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto text-white/90 mb-8">
                Your generous donation helps empower women across communities, 
                providing resources, training, and support for lasting transformation.
              </p>
              <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-white text-lg font-semibold mb-2">
                  "Every gift, no matter the size, creates ripples of hope and transformation."
                </p>
                <p className="text-white/80 text-sm">
                  Your donation directly impacts lives through education, mentorship, and spiritual support.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-soft"
              >
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-display font-bold text-3xl text-foreground mb-2">1,200+</h3>
                <p className="text-muted-foreground">Women Empowered</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl p-6 text-center shadow-soft"
              >
                <Sparkles className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-display font-bold text-3xl text-foreground mb-2">8</h3>
                <p className="text-muted-foreground">Active Programs</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl p-6 text-center shadow-soft"
              >
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-display font-bold text-3xl text-foreground mb-2">100%</h3>
                <p className="text-muted-foreground">Transparent Use</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Decorative Icons */}
          <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
            <svg className="absolute top-20 left-10 w-64 h-64 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <svg className="absolute bottom-20 right-10 w-96 h-96 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card/95 backdrop-blur-sm rounded-3xl shadow-strong p-8 md:p-12 border border-border"
            >
              <div className="text-center mb-8">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
                  Make a Donation
                </h2>
                <p className="text-muted-foreground text-lg">
                  Choose your preferred donation method and help empower women
                </p>
              </div>

              <form onSubmit={handleDonate} className="space-y-6">
                {/* Donation Method Selection */}
                <div>
                  <Label className="mb-3 block">Donation Method</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    <button
                      type="button"
                      onClick={() => setDonationMethod("mpesa")}
                      className={`p-4 rounded-xl font-semibold transition-all flex flex-col items-center gap-2 ${
                        donationMethod === "mpesa"
                          ? "gradient-primary text-white shadow-medium"
                          : "bg-muted text-foreground hover:bg-accent"
                      }`}
                    >
                      <Smartphone className="w-6 h-6" />
                      M-Pesa
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationMethod("paypal")}
                      className={`p-4 rounded-xl font-semibold transition-all flex flex-col items-center gap-2 ${
                        donationMethod === "paypal"
                          ? "gradient-primary text-white shadow-medium"
                          : "bg-muted text-foreground hover:bg-accent"
                      }`}
                    >
                      <CreditCard className="w-6 h-6" />
                      PayPal
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationMethod("bank")}
                      className={`p-4 rounded-xl font-semibold transition-all flex flex-col items-center gap-2 ${
                        donationMethod === "bank"
                          ? "gradient-primary text-white shadow-medium"
                          : "bg-muted text-foreground hover:bg-accent"
                      }`}
                    >
                      <CreditCard className="w-6 h-6" />
                      Bank
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationMethod("googlepay")}
                      className={`p-4 rounded-xl font-semibold transition-all flex flex-col items-center gap-2 ${
                        donationMethod === "googlepay"
                          ? "gradient-primary text-white shadow-medium"
                          : "bg-muted text-foreground hover:bg-accent"
                      }`}
                    >
                      <Wallet className="w-6 h-6" />
                      Google Pay
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationMethod("physical")}
                      className={`p-4 rounded-xl font-semibold transition-all flex flex-col items-center gap-2 ${
                        donationMethod === "physical"
                          ? "gradient-primary text-white shadow-medium"
                          : "bg-muted text-foreground hover:bg-accent"
                      }`}
                    >
                      <Package className="w-6 h-6" />
                      Physical
                    </button>
                  </div>
                </div>
                {/* Preset Amounts */}
                <div>
                  <Label className="mb-3 block">Select Amount (KES)</Label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {presetAmounts.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setAmount(preset.toString())}
                        className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                          amount === preset.toString()
                            ? "gradient-primary text-white shadow-medium"
                            : "bg-muted text-foreground hover:bg-accent"
                        }`}
                      >
                        {preset.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <Label htmlFor="amount">Custom Amount (KES)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    min="1"
                    className="mt-2"
                  />
                </div>

                {/* Payment Details based on method */}
                {donationMethod === "paypal" && (
                  <div>
                    <Label htmlFor="paypalEmail">PayPal Email Address</Label>
                    <Input
                      id="paypalEmail"
                      type="email"
                      placeholder="your.email@example.com"
                      value={paypalEmail}
                      onChange={(e) => setPaypalEmail(e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                )}

                {donationMethod === "bank" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="bankName">Bank Name</Label>
                      <Select value={bankName} onValueChange={setBankName} required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your bank" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kcb">KCB Bank</SelectItem>
                          <SelectItem value="equity">Equity Bank</SelectItem>
                          <SelectItem value="coop">Co-operative Bank</SelectItem>
                          <SelectItem value="absa">Absa Bank</SelectItem>
                          <SelectItem value="stanbic">Stanbic Bank</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="accountNumber">Account Number</Label>
                      <Input
                        id="accountNumber"
                        type="text"
                        placeholder="Your account number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                )}

                {donationMethod === "googlepay" && (
                  <div>
                    <Label htmlFor="googlePayEmail">Google Pay Email/Phone</Label>
                    <Input
                      id="googlePayEmail"
                      type="text"
                      placeholder="your.email@gmail.com or phone number"
                      value={googlePayEmail}
                      onChange={(e) => setGooglePayEmail(e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                )}

                {donationMethod !== "mpesa" && (
                  <>
                    {/* Name */}
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Share why you're supporting our mission..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-2"
                        rows={4}
                      />
                    </div>
                  </>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full gradient-primary shadow-medium hover:shadow-strong text-lg font-semibold py-6"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  {donationMethod === "mpesa" ? "Proceed to M-Pesa" : isLoading ? "Processing..." : "Submit Donation Request"}
                </Button>
              </form>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">
                      {donationMethod === "mpesa" ? "Secure Payment" : "We're Here to Help"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {donationMethod === "mpesa" 
                        ? "Your donation is secure and encrypted. A receipt will be sent to your phone via SMS."
                        : "Our team will contact you within 24 hours with payment instructions and confirmation for your generous donation."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="font-display font-bold text-3xl text-foreground mb-6">
                Our Commitment to You
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are deeply grateful for the generosity and trust of our supporters. 
                Your contributions are vital to the growth and impact of our ministry, 
                and we are committed to using every donation with the utmost care and purpose. 
                All funds will go directly toward spreading the gospel, supporting outreach programs, 
                helping those in need, and sustaining the operations that allow us to carry out our mission.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <MpesaDonation 
        isOpen={isMpesaModalOpen}
        onClose={() => setIsMpesaModalOpen(false)}
      />

      <Footer />
    </div>
  );
}
