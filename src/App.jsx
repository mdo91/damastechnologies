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

function App() {
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
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-2.5 text-base font-bold tracking-tight">
            <img
              src={logoImage}
              alt="Damas Technologies logo"
              className="h-8 w-8 object-contain"
              decoding="async"
            />
            <span>Damas Technologies</span>
          </a>
          <ul className="hidden items-center gap-6 text-sm font-medium text-ink md:flex">
            <li>
              <a href="#portfolio" className="hover:text-slateDeep">
                Work
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-slateDeep">
                Services
              </a>
            </li>
            <li>
              <a href="#academy" className="hover:text-slateDeep">
                Team
              </a>
            </li>
            <li>
              <a href="#transformation" className="hover:text-slateDeep">
                Insights
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-[#5f50d8] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#4f42c2]"
          >
            Start transformation
          </a>
        </nav>
      </header>

      <main>
        <section id="hero" className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div data-reveal className="reveal">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[4rem]">
                Engineering the Future of Agentic Intelligence.
              </h1>
              <img
                src={scribbleOne}
                alt="Scribble underline"
                className="mt-3 hidden h-auto w-48 opacity-90 md:block"
              />
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink">
                Building high-performance mobile ecosystems, scalable cloud
                architectures, and autonomous AI agents designed to transform
                how organizations operate.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-[#5f50d8] px-8 py-3.5 text-base font-semibold text-white transition hover:bg-[#4f42c2]"
                >
                  Let's Connect
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-line bg-white px-8 py-3.5 text-base font-semibold text-midnight transition hover:border-midnight hover:scale-[1.02]"
                >
                  Check our Services
                </a>
              </div>
            </div>

            <div data-reveal className="reveal">
              <img
                src={illustrationMain}
                alt="Agentic intelligence illustration"
                className="mx-auto w-full max-w-[620px] object-contain"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div data-reveal className="reveal text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#005d95] sm:text-4xl">Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink">
              Three integrated capabilities designed to deliver speed, scale, and
              intelligent automation.
            </p>
          </div>

          <div className="mt-14 space-y-16" data-reveal-stagger>
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
                <h3 className="text-4xl font-extrabold leading-tight text-[#005d95]">Mobile Development</h3>
                <p className="mt-5 text-xl leading-relaxed text-ink">
                  Specialized in native iOS and cross-platform architecture. We
                  build robust, fluid mobile experiences with over 8 years of
                  engineering excellence at the core.
                </p>
                <a
                  href="#portfolio"
                  className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#00a4db] hover:text-[#008abc]"
                >
                  Read more <span aria-hidden>→</span>
                </a>
              </div>
            </article>

            <article data-reveal data-reveal-item className="reveal grid items-center gap-8 lg:grid-cols-2">
              <div className="order-2 max-w-xl lg:order-1">
                <h3 className="text-4xl font-extrabold leading-tight text-[#005d95]">
                  Scalable Cloud Architecture
                </h3>
                <p className="mt-5 text-xl leading-relaxed text-ink">
                  Future-proof infrastructure on Google Cloud and AWS. We handle
                  complex migrations, Redis optimizations, and secure backend
                  scaling for global reach.
                </p>
                <a
                  href="#portfolio"
                  className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#00a4db] hover:text-[#008abc]"
                >
                  Read more <span aria-hidden>→</span>
                </a>
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
                <h3 className="text-4xl font-extrabold leading-tight text-[#005d95]">
                  Autonomous AI & LLMs
                </h3>
                <p className="mt-5 text-xl leading-relaxed text-ink">
                  Moving beyond chatbots. We build Agentic AI solutions-autonomous
                  systems that reason, execute tasks, and integrate seamlessly into
                  your existing workflows.
                </p>
                <a
                  href="#portfolio"
                  className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#00a4db] hover:text-[#008abc]"
                >
                  Read more <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section
          id="transformation"
          className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div data-reveal className="reveal text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#005d95] sm:text-4xl">
              The Transformation Lab
            </h2>
          </div>

          <div
            className="relative mt-9 overflow-hidden rounded-[28px] bg-[#2f7cff] px-6 py-8 sm:px-10 sm:py-10 lg:px-11 lg:py-11"
            style={{
              backgroundImage: `url(${backgroundPattern})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
              backgroundSize: "80% auto",
            }}
          >
            <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div data-reveal className="reveal">
                <p className="max-w-[18ch] text-[2.2rem] font-bold leading-[1.16] text-white sm:text-[2.75rem]">
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
              <h2 className="text-3xl font-extrabold tracking-tight text-[#005d95] sm:text-4xl">
                Workshops
              </h2>
              <p className="mx-auto mt-4 max-w-4xl text-center text-xl leading-relaxed text-ink">
                We believe software excellence is driven by people. To help your
                team maximize product value, we offer our B2B Performance
                Academy, featuring expert-led training and workshops available
                both on-site and virtually.
              </p>
            </div>

            <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-2" data-reveal-stagger>
              <article data-reveal data-reveal-item className="reveal relative">
                <h4 className="text-4xl font-extrabold leading-tight text-[#005d95]">
                  Scrum &amp; Kanban Workshops
                </h4>
                <p className="mt-5 max-w-[48ch] text-xl leading-relaxed text-ink">
                  Evolve from chaotic workflows to predictable delivery. Equip
                  your teams with the Agile practices needed to visualize work,
                  eliminate bottlenecks, and ship value continuously.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-xl font-bold text-[#00a4db] hover:text-[#008abc]"
                >
                  Learn more <span aria-hidden>→</span>
                </a>
              </article>
              <div data-reveal data-reveal-item className="reveal">
                <img
                  src={illustrationSix}
                  alt="Workshop collaboration illustration"
                  className="mx-auto w-full max-w-[560px] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <article data-reveal data-reveal-item className="reveal relative">
                <h4 className="relative z-10 text-4xl font-extrabold leading-tight text-[#005d95]">
                  Strategic Team building
                </h4>
                <p className="mt-4 max-w-[48ch] text-xl leading-relaxed text-ink">
                  Transform from fragmented silos into unified execution. Equip
                  your teams with the alignment and communication models needed
                  to build deep trust and move as one.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-xl font-bold text-[#00a4db] hover:text-[#008abc]"
                >
                  Learn more <span aria-hidden>→</span>
                </a>
              </article>

              <article data-reveal data-reveal-item className="reveal">
                <h4 className="text-4xl font-extrabold leading-tight text-[#005d95]">
                  Decision Making Frameworks
                </h4>
                <p className="mt-5 max-w-[48ch] text-xl leading-relaxed text-ink">
                  Shift from hesitation to high-velocity execution. Equip your
                  teams with the mental models needed to make fast, objective,
                  and scalable choices.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-xl font-bold text-[#00a4db] hover:text-[#008abc]"
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
            className="reveal relative overflow-hidden rounded-xl bg-gradient-to-r from-[#19c5ef] to-[#00b2e6] p-7 sm:p-10"
          >
            <img
              src={eclipses}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-full w-auto opacity-95"
              loading="lazy"
              decoding="async"
            />

            <div className="relative z-10 flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl text-white">
                <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                  Empower your teams with the Performance Academy frameworks
                  needed to maximize brand value 😍
                </h2>
                <p className="mt-7 text-lg font-medium text-white/95">
                  Join with more 200 happy customers
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <img
                    src={customerProfiles}
                    alt="Happy customer profiles"
                    className="h-10 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="text-lg font-medium text-white">and others</span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[#06a8dc] shadow-soft transition hover:bg-slate-50"
              >
                Book your appointment
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-line bg-white text-ink">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 border-b border-line pb-5">
            <img
              src={logoImage}
              alt="Damas Technologies logo"
              className="h-8 w-8 object-contain"
              loading="lazy"
              decoding="async"
            />
            <span className="text-lg font-semibold text-slateDeep">Damas Technologies</span>
          </div>

          <div className="mt-7 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-slateDeep">About Damas Technologies LLC</h3>
              <ul className="mt-3 space-y-2 text-base">
                <li><a href="#" className="hover:text-slateDeep">Company Overview</a></li>
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
                <li><a href="#" className="hover:text-slateDeep">Contact Us</a></li>
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

export default App;
