import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <section
      id="terms"
      className="py-24 bg-background text-foreground relative overflow-hidden"
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 border border-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-foreground rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-muted-foreground text-sm font-bold tracking-widest uppercase mb-4 block text-center">
            Legal Information
          </span>

          <h2 className="text-4xl md:text-5xl font-serif text-center mb-12">
            Terms & Conditions
          </h2>

          <div className="space-y-8 text-muted-foreground leading-relaxed text-base">
            <div>
              <h3 className="text-xl font-serif text-foreground mb-2">
                1. General
              </h3>
              <p>
                By accessing and using PK Jewellery’s website, showroom, or
                services, you agree to be bound by these terms and conditions.
                These terms apply to all visitors, customers, and users.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-foreground mb-2">
                2. Products & Pricing
              </h3>
              <p>
                All jewellery prices are subject to change based on gold rates,
                gemstone availability, and market conditions. Images shown are
                for representation purposes and may slightly vary from the
                actual product.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-foreground mb-2">
                3. Custom Orders
              </h3>
              <p>
                Custom-made jewellery orders are created specifically for the
                customer and are non-refundable. Design approvals must be
                finalized before production begins.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-foreground mb-2">
                4. Payments
              </h3>
              <p>
                Full or partial advance payment may be required for certain
                orders. PK Jewellery reserves the right to cancel orders if
                payment terms are not fulfilled.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-foreground mb-2">
                5. Returns & Exchanges
              </h3>
              <p>
                Returns or exchanges are accepted only under specific conditions
                as communicated at the time of purchase. Gold exchange value
                will be calculated based on prevailing market rates.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-foreground mb-2">
                6. Liability
              </h3>
              <p>
                PK Jewellery shall not be liable for any indirect, incidental, or
                consequential damages arising from the use of our products or
                services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-foreground mb-2">
                7. Governing Law
              </h3>
              <p>
                These terms shall be governed and interpreted in accordance with
                the laws of India. Any disputes shall be subject to the
                jurisdiction of Mumbai courts.
              </p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-12 text-center">
            Last updated: {new Date().toLocaleDateString("en-IN")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
