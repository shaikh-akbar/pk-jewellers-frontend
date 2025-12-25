import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { MapPin, Phone, Clock } from "lucide-react";

type ContactForm = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.phone) {
      setError("Name and phone are required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://pk-jewellers-backend.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Thank you! We will contact you shortly.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err: any) {
      setError(err.message || "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT */}
          <div className="w-full lg:w-1/2">
            <span className="text-primary-foreground/70 text-sm font-bold tracking-widest uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              Let's Create Something Beautiful
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-12 max-w-md">
              Have a question or looking for a custom design? Visit our showroom
              or send us a message. We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-sm">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Visit Showroom</h4>
                  <p className="text-primary-foreground/70">
                    Osia paradise Dawood baug lane Off j p road,
                    <br />
                    Andheri West Mumbai - 400058
                    <br />
                    P.K.Jewellers Pvt Ltd
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-sm">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Call Us</h4>
                  <p className="text-primary-foreground/70">
                    022 2677 7295
                    <br />
                    022 2677 7295
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-sm">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Opening Hours</h4>
                  <p className="text-primary-foreground/70">
                    Mon - Sat: 10:00 AM - 8:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="w-full lg:w-1/2 bg-white text-foreground p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl font-serif mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="border-b rounded-none px-0 bg-transparent"
                />

                <Input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 ..."
                  className="border-b rounded-none px-0 bg-transparent"
                />
              </div>

              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="border-b rounded-none px-0 bg-transparent"
              />

              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="I'm interested in..."
                className="border-b rounded-none px-0 bg-transparent resize-none min-h-[100px]"
              />

              {error && (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}
              {success && (
                <p className="text-green-600 text-sm text-center">{success}</p>
              )}

              <Button
                disabled={loading}
                className="w-full bg-primary rounded-none py-6 uppercase tracking-widest"
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
