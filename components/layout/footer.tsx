import { CONTACT_INFO, SERVICES_LEFT, SERVICES_RIGHT } from "@/lib/constants";
import Newsletter from "../footer/newsletter-form";
import { ServicesList } from "../footer/services-list";
import { SocialLinks } from "../footer/social-links";
import { TrustedLogos } from "../footer/trusted-logos";
import Link from "next/link";
import Image from "next/image";
// import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full">
      <Newsletter />
      <footer className="bg-primary-60 w-full mt-20">
        <div className="lg:px-[15rem] px-1 w-full py-20">
          {/* Main Footer Content */}
          <div className="flex flex-wrap lg:flex-nowrap w-full gap-y-8">
            {/* Trusted By Section */}
            <section className="lg:w-[40%] w-full px-4 lg:px-0">
              <h4 className="mb-6 text-xl  font-semibold px-4 ">Trusted By</h4>
              <TrustedLogos />
            </section>

            {/* Contact Section */}
            <section className="lg:w-[25%] w-full text-center lg:text-left">
              <h4 className="mb-6 text-xl font-semibold">Contact</h4>
              <div className="space-y-4 flex flex-col justify-center lg:items-start items-center  ">
                <Link
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex lg:items-start items-center  gap-4 text-sm hover:text-primary-100 transition-colors"
                >
                  {/* <Mail className="h-4 w-4 text-primary-100" /> */}
                  <Image
                    src="/icons/envelope-footer.svg"
                    alt="Mail"
                    width={15}
                    height={15}
                  />

                  {CONTACT_INFO.email}
                </Link>
                {CONTACT_INFO.phones.map((phone) => (
                  <Link
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex lg:items-start items-center gap-4 text-sm hover:text-primary-100 transition-colors"
                  >
                    {/* <Phone className="h-4 w-4 text-primary-100" /> */}
                    <Image
                      src="/icons/phone-footer.svg"
                      alt="Mail"
                      width={15}
                      height={15}
                    />
                    {phone}
                  </Link>
                ))}
                <SocialLinks />
              </div>
            </section>

            {/* Services Columns */}
            <div className="flex  lg:justify-between justify-center  mx-auto lg:w-[35%] w-full gap-8 px-5">
              <section className="w-full lg:w-auto lg:mb-0 mb-3  ">
                <h4 className="mb-6 text-xl font-semibold">Services</h4>
                <ServicesList services={SERVICES_LEFT} />
              </section>
              <section className="w-full lg:w-auto">
                <ServicesList
                  services={SERVICES_RIGHT}
                  className="lg:pt-8 pt-14 "
                />
              </section>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t bg-primary-100 py-4 text-center text-sm text-white">
          <p>
            copyrights © {new Date().getFullYear()} - Pearl Projects and
            Development Ltd
          </p>
        </div>
      </footer>
    </div>
  );
}
