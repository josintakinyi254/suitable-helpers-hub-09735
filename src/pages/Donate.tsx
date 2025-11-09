import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Shield, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import donationBg from "@/assets/donation-bg.jpg";
import { MpesaDonation } from "@/components/MpesaDonation";
import { Steps } from "@/components/ui/steps";
import { toast } from "sonner";
import { convertCurrency } from "@/utils/currencyConverter";

export default function Donate() {
  const [currentStep, setCurrentStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [baseAmount, setBaseAmount] = useState(0);
  const [isMpesaModalOpen, setIsMpesaModalOpen] = useState(false);

  useEffect(() => {
    if (baseAmount > 0) {
      const converted = convertCurrency(baseAmount, "USD", currency);
      setAmount(converted.toString());
    }
  }, [currency, baseAmount]);
  
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "Kenya",
    state: "",
    postcode: "",
    message: "",
  });

  const basePresetAmounts = [50, 100, 250, 500, 1000];
  const presetAmounts = basePresetAmounts.map(amt => 
    Math.round(convertCurrency(amt, "USD", currency))
  );

  const partners = [
    "PROEL",
    "Soundking", 
    "SHURE",
    "SENNHEISER",
    "dbx",
    "Bugera",
    "Turbosound",
    "behringer",
  ];

  const steps = [
    { number: 1, label: "Amount" },
    { number: 2, label: "Details" },
    { number: 3, label: "Payment" },
  ];

  const handleNextStep = () => {
    if (currentStep === 1 && !amount) {
      toast.error("Please enter a donation amount");
      return;
    }
    if (currentStep === 2) {
      if (!donorInfo.firstName || !donorInfo.lastName || !donorInfo.email || !donorInfo.phone) {
        toast.error("Please fill in all required fields");
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleMpesaDonate = () => {
    if (!donorInfo.firstName || !donorInfo.email || !amount) {
      toast.error("Please complete all steps first");
      return;
    }
    setIsMpesaModalOpen(true);
  };

  const handleOtherPayment = (method: string) => {
    const emailBody = `
Donation Request

Donor Information:
Name: ${donorInfo.firstName} ${donorInfo.lastName}
Email: ${donorInfo.email}
Phone: ${donorInfo.phone}
Country: ${donorInfo.country}
State/County: ${donorInfo.state}
Postcode: ${donorInfo.postcode}

Donation Details:
Amount: ${currency} ${amount}
Payment Method: ${method}

Message:
${donorInfo.message}

Please process this donation request and send payment instructions.
    `.trim();

    const mailtoLink = `mailto:thesuitablehelpers@gmail.com?subject=Donation Request - ${method}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-[132px] pb-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-4 uppercase tracking-wide">
                Share Your Love
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 text-foreground">
                Your Gift Makes our Ministry Possible!
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-4">
                Because of <span className="font-semibold text-orange-600">You</span>, African Enterprise is able to spread the Gospel across Africa.
              </p>
              <p className="text-base text-muted-foreground">
                Over 60 years of ministry, we've reached millions of people and we've only just begun. 
                Give to AE and see lives transformed every day all over Africa.
              </p>
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
                className="bg-card rounded-2xl p-6 text-center shadow-soft border-2 border-transparent hover:border-green-200 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-1">Secure</h3>
                <p className="text-muted-foreground text-sm">All transactions are encrypted</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl p-6 text-center shadow-soft border-2 border-transparent hover:border-green-200 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-1">Transparent</h3>
                <p className="text-muted-foreground text-sm">Every penny accounted for</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl p-6 text-center shadow-soft border-2 border-transparent hover:border-green-200 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-1">Impactful</h3>
                <p className="text-muted-foreground text-sm">Transform lives today</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Multi-Step Donation Form */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr,200px] gap-8 max-w-6xl mx-auto">
              {/* Main Form */}
              <div>
            <Card className="p-8 md:p-12 border-4 border-orange-500 rounded-3xl shadow-strong">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="font-display font-bold text-3xl text-green-700 mb-2">
                  MAKE A DONATION
                </h2>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="KES">KES</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Progress Steps */}
              <Steps steps={steps} currentStep={currentStep} />

              {/* Step 1: Amount */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                    <p className="text-blue-800 text-sm">
                      🔄 Returning donor?{" "}
                      <button className="font-semibold underline hover:no-underline">
                        Click here to login
                      </button>
                    </p>
                  </div>

                  <div>
                    <Label className="text-base mb-3 block">Select Amount</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      {presetAmounts.map((preset, index) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => {
                            setBaseAmount(basePresetAmounts[index]);
                            setAmount(preset.toString());
                          }}
                          className={`py-4 px-4 rounded-xl font-semibold transition-all border-2 ${
                            amount === preset.toString()
                              ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white border-orange-500 shadow-medium"
                              : "bg-white border-gray-200 text-foreground hover:border-orange-300"
                          }`}
                        >
                          {currency} {preset}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="customAmount">Or Enter Custom Amount</Label>
                    <Input
                      id="customAmount"
                      type="number"
                      placeholder={`Enter ${currency} amount`}
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="mt-2 h-12 text-lg"
                      min="1"
                    />
                  </div>

                  <Button
                    onClick={handleNextStep}
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-medium text-lg py-6"
                  >
                    Continue to Details
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Donor Information */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="font-display font-bold text-2xl text-center mb-6">Donor Information</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={donorInfo.firstName}
                        onChange={(e) => setDonorInfo({ ...donorInfo, firstName: e.target.value })}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={donorInfo.lastName}
                        onChange={(e) => setDonorInfo({ ...donorInfo, lastName: e.target.value })}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={donorInfo.phone}
                      onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Select value={donorInfo.country} onValueChange={(value) => setDonorInfo({ ...donorInfo, country: value })}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Kenya">Kenya</SelectItem>
                        <SelectItem value="Uganda">Uganda</SelectItem>
                        <SelectItem value="Tanzania">Tanzania</SelectItem>
                        <SelectItem value="USA">United States</SelectItem>
                        <SelectItem value="UK">United Kingdom</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="state">State / County</Label>
                      <Input
                        id="state"
                        value={donorInfo.state}
                        onChange={(e) => setDonorInfo({ ...donorInfo, state: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postcode">Postcode / ZIP</Label>
                      <Input
                        id="postcode"
                        value={donorInfo.postcode}
                        onChange={(e) => setDonorInfo({ ...donorInfo, postcode: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      value={donorInfo.message}
                      onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                      className="mt-1"
                      rows={3}
                      placeholder="Share why you're supporting our mission..."
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={handlePrevStep}
                      variant="outline"
                      size="lg"
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleNextStep}
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="font-display font-bold text-2xl text-center mb-6">Choose Payment Method</h3>
                  
                  <div className="space-y-4">
                    <button
                      onClick={() => handleOtherPayment("Google Pay")}
                      className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-orange-300 transition-all text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">Donate with Google Pay</span>
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <span className="text-2xl">G</span>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={handleMpesaDonate}
                      className="w-full p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all text-left text-white shadow-medium"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">Pay with M-Pesa</span>
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <span className="text-green-600 font-bold">M</span>
                        </div>
                      </div>
                    </button>

                    {/* M-Pesa Paybill Details */}
                    <Card className="bg-green-50 border-green-200 p-6">
                      <h4 className="font-semibold text-green-800 mb-4 text-center">Send Money / Paybill Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                          <span className="text-muted-foreground">Paybill Number:</span>
                          <span className="font-bold text-foreground">247247</span>
                        </div>
                        <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                          <span className="text-muted-foreground">Account Number:</span>
                          <span className="font-bold text-foreground">SUITABLEHELPERS</span>
                        </div>
                        <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                          <span className="text-muted-foreground">Amount:</span>
                          <span className="font-bold text-green-700">{currency} {amount || "0"}</span>
                        </div>
                      </div>
                      <p className="text-xs text-green-700 mt-4 text-center">
                        Use these details to send money directly via M-Pesa
                      </p>
                    </Card>

                    <div className="text-center py-2 text-muted-foreground">— OR —</div>

                    <button
                      onClick={() => handleOtherPayment("Bank Transfer")}
                      className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-orange-300 transition-all text-left"
                    >
                      <span className="font-semibold text-lg">Bank Transfer</span>
                    </button>

                    <button
                      onClick={() => handleOtherPayment("PayPal")}
                      className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-orange-300 transition-all text-left"
                    >
                      <span className="font-semibold text-lg">PayPal</span>
                    </button>

                    <button
                      onClick={() => handleOtherPayment("Physical Donation")}
                      className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-orange-300 transition-all text-left"
                    >
                      <span className="font-semibold text-lg">Physical Donation</span>
                    </button>
                  </div>

                  <Button
                    onClick={handlePrevStep}
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Back to Details
                  </Button>
                </motion.div>
              )}
            </Card>
          </div>

          {/* Partner Logos Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <h3 className="font-semibold text-sm text-muted-foreground mb-4">Our Partners</h3>
              {partners.map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center justify-center h-16"
                >
                  <span className="text-xs font-semibold text-foreground text-center">
                    {partner}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="font-display font-bold text-3xl text-foreground mb-4">
                Our Commitment to You
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We are committed to using your donation wisely and transparently. 
                Every contribution goes directly to empowering women, providing education, 
                spiritual guidance, and creating lasting transformation in communities across Africa.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-white p-4 rounded-xl shadow-soft">
                  <p className="font-semibold text-green-700">100% Secure</p>
                  <p className="text-sm text-muted-foreground">Encrypted transactions</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-soft">
                  <p className="font-semibold text-green-700">Transparent</p>
                  <p className="text-sm text-muted-foreground">Full accountability</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-soft">
                  <p className="font-semibold text-green-700">Impact Reports</p>
                  <p className="text-sm text-muted-foreground">Regular updates</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      
      <MpesaDonation
        isOpen={isMpesaModalOpen}
        onClose={() => setIsMpesaModalOpen(false)}
      />
    </div>
  );
}
