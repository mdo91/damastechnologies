import { useEffect } from "react";
import logoImage from "./images/logo.png";
import illustrationMain from "./images/illustration-main.png";
import scribbleOne from "./images/scribble-1.png";
import illustrationTwo from "./images/illustration-2.png";
import illustrationThree from "./images/illustration-3.png";
import illustrationFour from "./images/illustration-4.png";
import backgroundPattern from "./images/background-pattern.png";
import illustrationSix from "./images/illustration-6.png";
import customerProfiles from "./images/customer-profiles.png";
import eclipses from "./images/eclipses.png";
import softwareIllustrationTwo from "./images/software-illustration-2.png";
import founderImage from "./images/fonuder.png";
import productOwnerImage from "./images/product-owner.png";
import designerImage from "./images/designer.png";
import linkIcon from "./images/link-icon.png";
import callIcon from "./images/call-icon.png";
import locationIcon from "./images/location-icon.png";
import emailIcon from "./images/email-icon.png";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";

function CompanyOverviewPage() {
  const overviewSubtextClass = "text-base leading-relaxed text-[#5f6d7a] sm:text-xl";
  const overviewCardBodyClass =
    `mt-4 max-w-[46ch] ${overviewSubtextClass}`;

  return (
    <div className="min-h-screen bg-white text-slateDeep">
      <header className="sticky top-0 z-50 border-b border-line/80 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5 text-sm font-bold tracking-tight sm:text-base">
            <img src={logoImage} alt="Damas Technologies logo" className="h-7 w-7 object-contain sm:h-8 sm:w-8" />
            <span className="hidden sm:inline">Damas Technologies</span>
            <span className="sm:hidden">Damas</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-ink md:flex">
            <Link to="/" className="hover:text-slateDeep">Home</Link>
            <a href="#capabilities" className="hover:text-slateDeep">Capabilities</a>
            <a href="#team" className="hover:text-slateDeep">Team</a>
            <a href="#contact" className="hover:text-slateDeep">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-[#5f50d8] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#4f42c2] sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Contact Us
          </a>
        </nav>
        <div className="border-t border-line/70 px-4 py-2 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-4 overflow-x-auto whitespace-nowrap text-sm font-medium text-ink">
            <Link to="/" className="shrink-0 hover:text-slateDeep">Home</Link>
            <a href="#capabilities" className="shrink-0 hover:text-slateDeep">Capabilities</a>
            <a href="#team" className="shrink-0 hover:text-slateDeep">Team</a>
            <a href="#contact" className="shrink-0 hover:text-slateDeep">Contact</a>
          </div>
        </div>
      </header>

      <main>
        <section className="border-t border-line bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14 lg:px-8">
            <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
              <h1 className="max-w-[16ch] text-3xl font-extrabold leading-[1.15] tracking-tight text-black sm:text-5xl">
                Damas Technologies:
                <br />
                The Future, Powered.
              </h1>
              <p className={`max-w-[34ch] ${overviewSubtextClass}`}>
                Damas Technologies LLC helps organizations engineer high-performance
                digital products and AI transformation systems. We combine mobile,
                cloud, and agentic AI expertise to move teams from legacy execution
                to measurable, future-ready operations.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-2">
              <article className="rounded-[20px] bg-[#F5F7FA] px-5 py-6 sm:rounded-[24px] sm:px-8 sm:py-9">
                <span className="inline-flex rounded-full border border-[#d7d9de] bg-[#f3f3f6] px-4 py-1 text-[1.05rem] font-medium text-[#5f6d7a]">
                  Mission
                </span>
                <h2 className="mt-4 min-h-[3.6rem] text-[1.65rem] font-extrabold leading-[1.08] tracking-tight text-black sm:min-h-[4.8rem] sm:text-[2.15rem]">
                  Engineering Trust at Scale
                </h2>
                <p className={overviewCardBodyClass}>
                  Deliver trustworthy software and AI systems that scale value across teams and markets.
                </p>
              </article>

              <article className="rounded-[20px] bg-[#F5F7FA] px-5 py-6 sm:rounded-[24px] sm:px-8 sm:py-9">
                <span className="inline-flex rounded-full border border-[#d7d9de] bg-[#f3f3f6] px-4 py-1 text-[1.05rem] font-medium text-[#5f6d7a]">
                  Vision
                </span>
                <h2 className="mt-4 min-h-[3.6rem] text-[1.65rem] font-extrabold leading-[1.08] tracking-tight text-black sm:min-h-[4.8rem] sm:text-[2.15rem]">
                  Your Partner in Agentic Intelligence.
                </h2>
                <p className={overviewCardBodyClass}>
                  Become a leading engineering partner for organizations adopting agentic intelligence.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="capabilities" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div>
              <span className="inline-flex rounded-full border border-[#d9dee5] bg-[#f8fafc] px-3.5 py-1 text-base font-medium text-[#5f6d7a] sm:px-4 sm:text-lg">
                Our Story
              </span>
              <h2 className="mt-4 max-w-[16ch] text-[1.65rem] font-extrabold leading-[1.08] tracking-tight text-black sm:text-[2.15rem]">
                Embarking on Journey of Agentic AI
              </h2>
              <p className={`mt-5 max-w-[46ch] ${overviewSubtextClass}`}>
                Amid the rapid evolution of artificial intelligence, Damas Technologies was founded on a
                vision to redefine industries tethered to repetitive tasks. By moving beyond static
                automation and embracing dynamic reasoning, we empower organizations, from HR and Finance to
                Sales and Software Development, to leverage Agentic AI.
              </p>
              <p className={`mt-5 max-w-[46ch] ${overviewSubtextClass}`}>
                Our mission is to lead this transformation, delivering end-to-end solutions and
                sophisticated supply chain logic for enterprises serving global customer bases.
              </p>
            </div>

            <img
              src={softwareIllustrationTwo}
              alt="Agentic AI systems workflow illustration"
              className="mx-auto w-full max-w-[280px] object-contain max-h-[180px] sm:max-w-[540px] sm:max-h-[360px] lg:max-h-none"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 280px, 540px"
            />
          </div>
        </section>

        <section id="team" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-[#d7d9de] bg-[#f8fafc] px-3.5 py-1 text-base font-medium text-[#5f6d7a] sm:px-4 sm:text-lg">
              Team
            </span>
            <h2 className="mx-auto mt-4 max-w-4xl text-[1.65rem] font-extrabold leading-[1.08] tracking-tight text-black sm:text-[2.15rem]">
              Meet the Innovators Steering Damas Technologies Towards Excellence
            </h2>
            <p className="mx-auto mt-2 text-base leading-relaxed text-[#5f6d7a] sm:text-xl">
              A Team United by innovation to make an impact
            </p>
          </div>

          <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 md:grid-cols-3">
            <article className="text-center">
              <img
                src={founderImage}
                alt="Mahmut Aoata"
                className="mx-auto h-28 w-28 rounded-full object-cover sm:h-48 sm:w-48"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 112px, 192px"
              />
              <h3 className="mt-4 text-[1.35rem] font-extrabold leading-[1.1] tracking-tight text-black sm:text-[1.45rem]">
                Mahmut Aoata
              </h3>
              <p className="mt-1 text-[0.72rem] font-semibold leading-relaxed text-[#5c88c2] sm:text-[0.8rem]">
                Founder &amp; Chief Engineer
              </p>
              <p className="mx-auto mt-1 max-w-[22ch] text-[0.8rem] leading-relaxed text-[#5f6d7a] sm:text-[0.9rem]">
                Bridging a decade of engineering excellence with visionary product strategy.
              </p>
            </article>

            <article className="text-center">
              <img
                src={productOwnerImage}
                alt="Amir Bawb"
                className="mx-auto h-28 w-28 rounded-full object-cover sm:h-48 sm:w-48"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 112px, 192px"
              />
              <h3 className="mt-4 text-[1.35rem] font-extrabold leading-[1.1] tracking-tight text-black sm:text-[1.45rem]">
                Amir Bawb
              </h3>
              <p className="mt-1 text-[0.72rem] font-semibold leading-relaxed text-[#5c88c2] sm:text-[0.8rem]">
                AI specialist &amp; Product Manager
              </p>
              <p className="mx-auto mt-1 max-w-[22ch] text-[0.8rem] leading-relaxed text-[#5f6d7a] sm:text-[0.9rem]">
                Turning agentic intelligence into scalable business assets.
              </p>
            </article>

            <article className="text-center">
              <img
                src={designerImage}
                alt="Betoul Aoata"
                className="mx-auto h-28 w-28 rounded-full object-cover sm:h-48 sm:w-48"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 112px, 192px"
              />
              <h3 className="mt-4 text-[1.35rem] font-extrabold leading-[1.1] tracking-tight text-black sm:text-[1.45rem]">
                Betoul Aoata
              </h3>
              <p className="mt-1 text-[0.72rem] font-semibold leading-relaxed text-[#5c88c2] sm:text-[0.8rem]">
                Graphic Designer &amp; UX/UI specialist
              </p>
              <p className="mx-auto mt-1 max-w-[22ch] text-[0.8rem] leading-relaxed text-[#5f6d7a] sm:text-[0.9rem]">
                Bridging the gap between creative storytelling and functional architecture.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-white text-ink">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 pb-5">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <img
                src={logoImage}
                alt="Damas Technologies logo"
                className="h-8 w-8 object-contain"
                loading="lazy"
                decoding="async"
              />
              <span className="text-lg font-semibold text-slateDeep">Damas Technologies</span>
            </div>
            <div className="h-px flex-1 bg-line" />
          </div>

          <div className="mt-7 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-slateDeep">About Damas Technologies LLC</h3>
              <ul className="mt-3 space-y-2 text-base">
                <li><Link to="/company-overview" className="hover:text-slateDeep">Company Overview</Link></li>
                <li><a href="#" className="hover:text-slateDeep">Careers</a></li>
                <li><a href="#" className="hover:text-slateDeep">Press &amp; Media</a></li>
                <li><a href="#" className="hover:text-slateDeep">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slateDeep">Resources</h3>
              <ul className="mt-3 space-y-2 text-base">
                <li><a href="#" className="hover:text-slateDeep">Blog</a></li>
                <li><a href="#" className="hover:text-slateDeep">Help Center</a></li>
                <li><a href="#" className="hover:text-slateDeep">Webinars &amp; Events</a></li>
                <li><a href="#" className="hover:text-slateDeep">Case Studies</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slateDeep">Support &amp; Contact</h3>
              <ul className="mt-3 space-y-2 text-base">
                <li><Link to="/contact-us" className="hover:text-slateDeep">Contact Us</Link></li>
                <li><a href="#" className="hover:text-slateDeep">Technical Support</a></li>
                <li><a href="#" className="hover:text-slateDeep">Feedback</a></li>
                <li><a href="#" className="hover:text-slateDeep">Community Forum</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slateDeep">Connect</h3>
              <ul className="mt-3 space-y-2 text-base">
                <li><a href="#" className="hover:text-slateDeep">Instagram</a></li>
                <li><a href="#" className="hover:text-slateDeep">Facebook</a></li>
                <li><a href="#" className="hover:text-slateDeep">Twitter / X</a></li>
                <li><a href="#" className="hover:text-slateDeep">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-line pt-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>@2026 Damas Technologies LLC · All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-slateDeep">Term of use</a>
              <a href="#" className="hover:text-slateDeep">Privacy policy</a>
              <a href="#" className="hover:text-slateDeep">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slateDeep">
      <header className="sticky top-0 z-50 border-b border-line/80 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5 text-sm font-bold tracking-tight sm:text-base">
            <img src={logoImage} alt="Damas Technologies logo" className="h-7 w-7 object-contain sm:h-8 sm:w-8" />
            <span className="hidden sm:inline">Damas Technologies</span>
            <span className="sm:hidden">Damas</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-ink md:flex">
            <Link to="/" className="hover:text-slateDeep">Home</Link>
            <a href="/#services" className="hover:text-slateDeep">Services</a>
            <Link to="/company-overview" className="hover:text-slateDeep">Company Overview</Link>
            <a href="#contact-details" className="hover:text-slateDeep">Contact</a>
          </div>
          <a
            href="#contact-details"
            className="rounded-full bg-[#5f50d8] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#4f42c2] sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Contact Us
          </a>
        </nav>
        <div className="border-t border-line/70 px-4 py-2 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-4 overflow-x-auto whitespace-nowrap text-sm font-medium text-ink">
            <Link to="/" className="shrink-0 hover:text-slateDeep">Home</Link>
            <a href="/#services" className="shrink-0 hover:text-slateDeep">Services</a>
            <Link to="/company-overview" className="shrink-0 hover:text-slateDeep">Company</Link>
            <a href="#contact-details" className="shrink-0 hover:text-slateDeep">Contact</a>
          </div>
        </div>
      </header>

      <main id="contact-details">
        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="rounded-2xl bg-[#f5f5f7] p-5 sm:rounded-[28px] sm:p-10">
            <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-black sm:text-4xl">Get In Touch</h1>
              </div>

              <div className="grid gap-y-7 gap-x-6 sm:grid-cols-2 sm:gap-x-[3.3rem] sm:gap-y-8">
                <article>
                  <div className="flex items-center gap-2.5">
                    <img src={emailIcon} alt="" aria-hidden="true" className="h-4 w-4 object-contain sm:h-5 sm:w-5" />
                    <h2 className="text-lg font-bold leading-tight text-black sm:text-[1.35rem]">Email us</h2>
                  </div>
                  <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-[#6f7480] sm:text-lg">
                    Connect with us easily by sending an email
                  </p>
                  <a
                    href="mailto:hi@damastechnologies.com"
                    className="mt-2 inline-flex break-all text-sm leading-relaxed text-[#7a7d86] underline decoration-[#afb4bd] underline-offset-2 hover:text-slateDeep sm:text-lg"
                  >
                    hi@damastechnologies.com
                  </a>
                </article>

                <article>
                  <div className="flex items-center gap-2.5">
                    <img src={callIcon} alt="" aria-hidden="true" className="h-4 w-4 object-contain sm:h-5 sm:w-5" />
                    <h2 className="text-lg font-bold leading-tight text-black sm:text-[1.35rem]">Call us</h2>
                  </div>
                  <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-[#6f7480] sm:text-lg">
                    Give us a call to explore the possibilities
                  </p>
                  <a
                    href="tel:+491639748382"
                    className="mt-2 inline-flex text-sm leading-relaxed text-[#7a7d86] hover:text-slateDeep sm:text-lg"
                  >
                    +49 163 974 83 82
                  </a>
                </article>

                <article>
                  <div className="flex items-center gap-2.5">
                    <img src={locationIcon} alt="" aria-hidden="true" className="h-4 w-4 object-contain sm:h-5 sm:w-5" />
                    <h2 className="text-lg font-bold leading-tight text-black sm:text-[1.35rem]">Address</h2>
                  </div>
                  <div className="mt-2 space-y-2 text-sm leading-relaxed text-[#7a7d86] sm:text-lg">
                    <p><span className="font-semibold text-[#6f7480]">United States:</span> 30 N Gould St Ste R, Sheridan, WY 82801.</p>
                    <p><span className="font-semibold text-[#6f7480]">Germany:</span> Mengelbergstraße 2 - 50676 Köln.</p>
                    <p><span className="font-semibold text-[#6f7480]">Turkiye:</span> Avcilar 24 - 34315 Istanbul.</p>
                  </div>
                </article>

                <article>
                  <div className="flex items-center gap-2.5">
                    <img src={linkIcon} alt="" aria-hidden="true" className="h-4 w-4 object-contain sm:h-5 sm:w-5" />
                    <h2 className="text-lg font-bold leading-tight text-black sm:text-[1.35rem]">Follow us</h2>
                  </div>
                  <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-[#6f7480] sm:text-lg">
                    Follow us on different social media channels and learn more our work.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-[#7a7d86] sm:text-lg">
                    <a href="#" className="inline-flex py-0.5 underline decoration-[#afb4bd] underline-offset-2 hover:text-slateDeep">Linkedin</a>
                    <a href="#" className="inline-flex py-0.5 underline decoration-[#afb4bd] underline-offset-2 hover:text-slateDeep">Instagram</a>
                    <a href="#" className="inline-flex py-0.5 underline decoration-[#afb4bd] underline-offset-2 hover:text-slateDeep">X/Twitter</a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-white text-ink">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 pb-5">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <img
                src={logoImage}
                alt="Damas Technologies logo"
                className="h-8 w-8 object-contain"
                loading="lazy"
                decoding="async"
              />
              <span className="text-lg font-semibold text-slateDeep">Damas Technologies</span>
            </div>
            <div className="h-px flex-1 bg-line" />
          </div>

          <div className="mt-7 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-slateDeep">About Damas Technologies LLC</h3>
              <ul className="mt-3 space-y-2 text-base">
                <li><Link to="/company-overview" className="hover:text-slateDeep">Company Overview</Link></li>
                <li><a href="#" className="hover:text-slateDeep">Careers</a></li>
                <li><a href="#" className="hover:text-slateDeep">Press &amp; Media</a></li>
                <li><a href="#" className="hover:text-slateDeep">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slateDeep">Resources</h3>
              <ul className="mt-3 space-y-2 text-base">
                <li><a href="#" className="hover:text-slateDeep">Blog</a></li>
                <li><a href="#" className="hover:text-slateDeep">Help Center</a></li>
                <li><a href="#" className="hover:text-slateDeep">Webinars &amp; Events</a></li>
                <li><a href="#" className="hover:text-slateDeep">Case Studies</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slateDeep">Support &amp; Contact</h3>
              <ul className="mt-3 space-y-2 text-base">
                <li><Link to="/contact-us" className="hover:text-slateDeep">Contact Us</Link></li>
                <li><a href="#" className="hover:text-slateDeep">Technical Support</a></li>
                <li><a href="#" className="hover:text-slateDeep">Feedback</a></li>
                <li><a href="#" className="hover:text-slateDeep">Community Forum</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slateDeep">Connect</h3>
              <ul className="mt-3 space-y-2 text-base">
                <li><a href="#" className="hover:text-slateDeep">Instagram</a></li>
                <li><a href="#" className="hover:text-slateDeep">Facebook</a></li>
                <li><a href="#" className="hover:text-slateDeep">Twitter / X</a></li>
                <li><a href="#" className="hover:text-slateDeep">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-line pt-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>@2026 Damas Technologies LLC · All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-slateDeep">Term of use</a>
              <a href="#" className="hover:text-slateDeep">Privacy policy</a>
              <a href="#" className="hover:text-slateDeep">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const staggerGroups = document.querySelectorAll("[data-reveal-stagger]");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("in-view"));
      return () => {};
    }

    staggerGroups.forEach((group) => {
      const items = group.querySelectorAll("[data-reveal-item]");
      items.forEach((item, index) => {
        item.style.setProperty("--reveal-delay", `${index * 120}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add("in-view");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slateDeep">
      <header className="sticky top-0 z-50 border-b border-line/80 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <a href="#hero" className="flex items-center gap-2.5 text-sm font-bold tracking-tight sm:text-base">
            <img
              src={logoImage}
              alt="Damas Technologies logo"
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
              decoding="async"
            />
            <span className="hidden sm:inline">Damas Technologies</span>
            <span className="sm:hidden">Damas</span>
          </a>
          <ul className="hidden items-center gap-6 text-sm font-medium text-ink md:flex">
            <li>
              <a href="#hero" className="hover:text-slateDeep">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-slateDeep">
                Services
              </a>
            </li>
            <li>
              <a href="#academy" className="hover:text-slateDeep">
                Academy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-slateDeep">
                Connect
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-[#5f50d8] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#4f42c2] sm:px-8 sm:py-3 sm:text-sm"
          >
            Start transformation
          </a>
        </nav>
        <div className="border-t border-line/70 px-4 py-2 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-4 overflow-x-auto whitespace-nowrap text-sm font-medium text-ink">
            <a href="#hero" className="shrink-0 hover:text-slateDeep">Home</a>
            <a href="#services" className="shrink-0 hover:text-slateDeep">Services</a>
            <a href="#academy" className="shrink-0 hover:text-slateDeep">Academy</a>
            <a href="#contact" className="shrink-0 hover:text-slateDeep">Connect</a>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div data-reveal className="reveal">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[4rem]">
                Engineering the Future of Agentic Intelligence.
              </h1>
              <img
                src={scribbleOne}
                alt="Scribble underline"
                className="mt-3 hidden h-auto w-48 opacity-90 md:block"
              />
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink sm:mt-6 sm:text-lg">
                Building high-performance mobile ecosystems, scalable cloud
                architectures, and autonomous AI agents designed to transform
                how organizations operate.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                className="rounded-full bg-[#5f50d8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4f42c2] sm:px-8 sm:py-3.5 sm:text-base"
                >
                  Let's Connect
                </a>
                <a
                  href="#services"
                className="rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-midnight transition hover:border-midnight hover:scale-[1.02] sm:px-8 sm:py-3.5 sm:text-base"
                >
                  Check our Services
                </a>
              </div>
            </div>

            <div data-reveal className="reveal">
              <img
                src={illustrationMain}
                alt="Agentic intelligence illustration"
                className="mx-auto w-full max-w-[620px] object-contain max-h-[260px] sm:max-h-[380px] lg:max-h-none"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div data-reveal className="reveal text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#005d95] sm:text-4xl">Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-ink sm:text-lg">
              Three integrated capabilities designed to deliver speed, scale, and
              intelligent automation.
            </p>
          </div>

          <div className="mt-10 space-y-12 sm:mt-14 sm:space-y-16" data-reveal-stagger>
            <article data-reveal data-reveal-item className="reveal grid items-center gap-8 lg:grid-cols-2">
              <div>
                <img
                  src={illustrationTwo}
                  alt="Mobile app performance illustration"
                  className="mx-auto w-full max-w-[560px] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="max-w-xl">
                <h3 className="text-3xl font-extrabold leading-tight text-[#005d95] sm:text-4xl">Mobile Development</h3>
                <p className="mt-4 text-lg leading-relaxed text-ink sm:mt-5 sm:text-xl">
                  Specialized in native iOS and cross-platform architecture. We
                  build robust, fluid mobile experiences with over 8 years of
                  engineering excellence at the core.
                </p>
                {/* // future enable: Read more link
                <a
                  href="#portfolio"
                  className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#00a4db] hover:text-[#008abc]"
                >
                  Read more <span aria-hidden>→</span>
                </a>
                */}
              </div>
            </article>

            <article data-reveal data-reveal-item className="reveal grid items-center gap-8 lg:grid-cols-2">
              <div className="order-2 max-w-xl lg:order-1">
                <h3 className="text-3xl font-extrabold leading-tight text-[#005d95] sm:text-4xl">
                  Scalable Cloud Architecture
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-ink sm:mt-5 sm:text-xl">
                  Future-proof infrastructure on Google Cloud and AWS. We handle
                  complex migrations, Redis optimizations, and secure backend
                  scaling for global reach.
                </p>
                {/* // future enable: Read more link
                <a
                  href="#portfolio"
                  className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#00a4db] hover:text-[#008abc]"
                >
                  Read more <span aria-hidden>→</span>
                </a>
                */}
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={illustrationThree}
                  alt="Cloud architecture illustration"
                  className="mx-auto w-full max-w-[420px] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </article>

            <article data-reveal data-reveal-item className="reveal grid items-center gap-8 lg:grid-cols-2">
              <div>
                <img
                  src={illustrationFour}
                  alt="Autonomous AI and LLM illustration"
                  className="mx-auto w-full max-w-[360px] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="max-w-xl">
                <h3 className="text-3xl font-extrabold leading-tight text-[#005d95] sm:text-4xl">
                  Autonomous AI & LLMs
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-ink sm:mt-5 sm:text-xl">
                  Moving beyond chatbots. We build Agentic AI solutions-autonomous
                  systems that reason, execute tasks, and integrate seamlessly into
                  your existing workflows.
                </p>
                {/* // future enable: Read more link
                <a
                  href="#portfolio"
                  className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#00a4db] hover:text-[#008abc]"
                >
                  Read more <span aria-hidden>→</span>
                </a>
                */}
              </div>
            </article>
          </div>
        </section>

        <section
          id="transformation"
          className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div data-reveal className="reveal text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#005d95] sm:text-4xl">
              The Transformation Lab
            </h2>
          </div>

          <div
            className="relative mt-9 overflow-hidden rounded-2xl bg-[#2f7cff] px-5 py-7 sm:rounded-[28px] sm:px-10 sm:py-10 lg:px-11 lg:py-11 [background-size:155%_auto] sm:[background-size:105%_auto] lg:[background-size:80%_auto]"
            style={{
              backgroundImage: `url(${backgroundPattern})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
            }}
          >
            <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div data-reveal className="reveal">
                <p className="max-w-[18ch] text-[1.9rem] font-bold leading-[1.16] text-white sm:text-[2.75rem]">
                  Our AI Readiness program bridges the gap between manual legacy
                  workflows and AI-augmented efficiency
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/12 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#2f7cff]"
                >
                  Request a Consultation
                  <span aria-hidden>→</span>
                </a>
              </div>

              <ol className="space-y-3.5" data-reveal-stagger>
                <li
                  data-reveal
                  data-reveal-item
                  className="reveal rounded-2xl border border-white/25 bg-white/12 p-3.5 text-white backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-base">
                      ⌁
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">AI Audit</h3>
                      <p className="mt-1 text-[0.94rem] text-white/90">
                        Identifying high-impact automation opportunities based on your stack
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  data-reveal
                  data-reveal-item
                  className="reveal rounded-2xl border border-white/25 bg-white/12 p-3.5 text-white backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-base">
                      ⚙
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">Custom Adoption</h3>
                      <p className="mt-1 text-[0.94rem] text-white/90">
                        Implementing custom tailored LLMs and Agentic frameworks.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  data-reveal
                  data-reveal-item
                  className="reveal rounded-2xl border border-white/25 bg-white/12 p-3.5 text-white backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-base">
                      ✦
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">Continuous Training</h3>
                      <p className="mt-1 text-[0.94rem] text-white/90">
                        Empowering internal teams to master and manage AI-driven tools.
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section id="academy" className="border-t border-line py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div data-reveal className="reveal text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#005d95] sm:text-4xl">
                Workshops
              </h2>
              <p className="mx-auto mt-4 max-w-4xl text-center text-lg leading-relaxed text-ink sm:text-xl">
                We believe software excellence is driven by people. To help your
                team maximize product value, we offer our B2B Performance
                Academy, featuring expert-led training and workshops available
                both on-site and virtually.
              </p>
            </div>

            <div className="mt-9 grid gap-8 sm:mt-10 sm:gap-10 lg:mt-12 lg:grid-cols-2" data-reveal-stagger>
              <article data-reveal data-reveal-item className="reveal relative">
                <h4 className="text-3xl font-extrabold leading-tight text-[#005d95] sm:text-4xl">
                  Scrum &amp; Kanban Workshops
                </h4>
                <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-ink sm:mt-5 sm:text-xl">
                  Evolve from chaotic workflows to predictable delivery. Equip
                  your teams with the Agile practices needed to visualize work,
                  eliminate bottlenecks, and ship value continuously.
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-lg font-bold text-[#00a4db] hover:text-[#008abc] sm:mt-6 sm:text-xl"
                >
                  Learn more <span aria-hidden>→</span>
                </a>
              </article>
              <div data-reveal data-reveal-item className="reveal">
                <img
                  src={illustrationSix}
                  alt="Workshop collaboration illustration"
                  className="mx-auto w-full max-w-[560px] object-contain max-h-[250px] sm:max-h-[340px] lg:max-h-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <article data-reveal data-reveal-item className="reveal relative">
                <h4 className="relative z-10 text-3xl font-extrabold leading-tight text-[#005d95] sm:text-4xl">
                  Strategic Team building
                </h4>
                <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-ink sm:text-xl">
                  Transform from fragmented silos into unified execution. Equip
                  your teams with the alignment and communication models needed
                  to build deep trust and move as one.
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-lg font-bold text-[#00a4db] hover:text-[#008abc] sm:mt-6 sm:text-xl"
                >
                  Learn more <span aria-hidden>→</span>
                </a>
              </article>

              <article data-reveal data-reveal-item className="reveal">
                <h4 className="text-3xl font-extrabold leading-tight text-[#005d95] sm:text-4xl">
                  Decision Making Frameworks
                </h4>
                <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-ink sm:mt-5 sm:text-xl">
                  Shift from hesitation to high-velocity execution. Equip your
                  teams with the mental models needed to make fast, objective,
                  and scalable choices.
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-lg font-bold text-[#00a4db] hover:text-[#008abc] sm:mt-6 sm:text-xl"
                >
                  Learn More <span aria-hidden>→</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="portfolio" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div
            data-reveal
            className="reveal relative overflow-hidden rounded-xl bg-gradient-to-r from-[#19c5ef] to-[#00b2e6] p-5 sm:p-10"
          >
            <img
              src={eclipses}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-[68%] w-auto opacity-65 sm:top-0 sm:h-full sm:opacity-95"
              loading="lazy"
              decoding="async"
            />

            <div className="relative z-10 flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl text-white">
                <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                  Empower your teams with the Performance Academy frameworks
                  needed to maximize brand value 😍
                </h2>
                <p className="mt-5 text-base font-medium text-white/95 sm:mt-7 sm:text-lg">
                  Join with more 200 happy customers
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <img
                    src={customerProfiles}
                    alt="Happy customer profiles"
                    className="h-8 w-auto object-contain sm:h-10"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="text-base font-medium text-white sm:text-lg">and others</span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#06a8dc] shadow-soft transition hover:bg-slate-50 sm:w-fit sm:px-8 sm:py-3.5 sm:text-base"
              >
                Book your appointment
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-white text-ink">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 pb-5">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <img
                src={logoImage}
                alt="Damas Technologies logo"
                className="h-8 w-8 object-contain"
                loading="lazy"
                decoding="async"
              />
              <span className="text-lg font-semibold text-slateDeep">Damas Technologies</span>
            </div>
            <div className="h-px flex-1 bg-line" />
          </div>

          <div className="mt-7 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-slateDeep">About Damas Technologies LLC</h3>
              <ul className="mt-3 space-y-2 text-base">
                <li><Link to="/company-overview" className="hover:text-slateDeep">Company Overview</Link></li>
                <li><a href="#" className="hover:text-slateDeep">Careers</a></li>
                <li><a href="#" className="hover:text-slateDeep">Press &amp; Media</a></li>
                <li><a href="#" className="hover:text-slateDeep">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slateDeep">Resources</h3>
              <ul className="mt-3 space-y-2 text-base">
                <li><a href="#" className="hover:text-slateDeep">Blog</a></li>
                <li><a href="#" className="hover:text-slateDeep">Help Center</a></li>
                <li><a href="#" className="hover:text-slateDeep">Webinars &amp; Events</a></li>
                <li><a href="#" className="hover:text-slateDeep">Case Studies</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slateDeep">Support &amp; Contact</h3>
              <ul className="mt-3 space-y-2 text-base">
                <li><Link to="/contact-us" className="hover:text-slateDeep">Contact Us</Link></li>
                <li><a href="#" className="hover:text-slateDeep">Technical Support</a></li>
                <li><a href="#" className="hover:text-slateDeep">Feedback</a></li>
                <li><a href="#" className="hover:text-slateDeep">Community Forum</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slateDeep">Connect</h3>
              <ul className="mt-3 space-y-2 text-base">
                <li><a href="#" className="hover:text-slateDeep">Instagram</a></li>
                <li><a href="#" className="hover:text-slateDeep">Facebook</a></li>
                <li><a href="#" className="hover:text-slateDeep">Twitter / X</a></li>
                <li><a href="#" className="hover:text-slateDeep">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-line pt-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>@2026 Damas Technologies LLC · All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-slateDeep">Term of use</a>
              <a href="#" className="hover:text-slateDeep">Privacy policy</a>
              <a href="#" className="hover:text-slateDeep">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

function App() {
  const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <BrowserRouter basename={routerBase}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company-overview/*" element={<CompanyOverviewPage />} />
        <Route path="/contact-us/*" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
