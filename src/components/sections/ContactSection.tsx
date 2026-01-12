import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Send, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "",
    message: ""
  });

  // WhatsApp configuration
  const whatsappNumber = "919876543210"; // Replace with actual NHF number

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Web3Forms API for email sending (free, no backend needed)
      // Replace with your Web3Forms access key from https://web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with actual key
          name: formData.name,
          email: formData.email,
          enquiry_type: formData.enquiryType,
          message: formData.message,
          subject: `NHF Website Enquiry: ${formData.enquiryType}`,
          from_name: "NHF Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", enquiryType: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      // Fallback: Open email client
      const mailtoLink = `mailto:research@enablemychild.org?subject=NHF Website Enquiry: ${formData.enquiryType}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Opening Email Client",
        description: "Please send the email through your email application.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppEnquiry = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in learning more about NHF.\n\nName: ${formData.name || "Not provided"}\nEnquiry Type: ${formData.enquiryType || "General"}\n\n${formData.message || "I would like more information about your programs."}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Registered Office Address",
      content: "New Horizons Health and Research Foundation\nSaira Mansion, Pahadi School Road No. 2,\nOpposite Pahadi School, Goregaon (East),\nMumbai, Maharashtra – 400063, India",
      gradient: "from-orange-500 to-pink-500"
    },
    {
      icon: Mail,
      title: "Email",
      content: "research@enablemychild.org",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-100/40 to-transparent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Contact Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
              Let's Start a{" "}
              <span className="text-gradient">Conversation</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Whether you're interested in partnership, collaboration, or learning 
              more about our work, we'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-2xl bg-white shadow-lg shadow-gray-100/50 border border-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={getStaggerDelay(index, 150)}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-800">{info.title}</h3>
                    <p className="text-gray-500 text-sm whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Name</label>
                  <Input 
                    placeholder="Your name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-gray-200 focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-gray-200 focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Enquiry Type</label>
                <Select value={formData.enquiryType} onValueChange={(value) => setFormData({ ...formData, enquiryType: value })}>
                  <SelectTrigger className="border-gray-200 focus:border-orange-500 focus:ring-orange-500/20">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="donation">Donation / CSR</SelectItem>
                    <SelectItem value="research">Research Collaboration</SelectItem>
                    <SelectItem value="media">Media Inquiry</SelectItem>
                    <SelectItem value="general">General Question</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                <Textarea 
                  placeholder="Tell us about your interest or inquiry..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-gray-200 focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-300 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
                
                <Button 
                  type="button"
                  variant="outline"
                  className="flex-1 bg-green-50 border-green-400 text-green-700 hover:bg-green-100 hover:text-green-800 hover:border-green-500 transition-all duration-300 group"
                  onClick={handleWhatsAppEnquiry}
                >
                  <MessageCircle className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  Chat on WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
