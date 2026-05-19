import './styles.css';
import heroVideoUrl from '../4404097-hd_1280_720_24fps.mp4?url';

document.querySelector('#app').innerHTML = `
  <nav>
    <div class="nav-wrap">
      <div class="logo">KEYSTONE <span>RIDGE</span></div>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <header class="hero">
    <video autoplay muted loop playsinline>
      <source src="${heroVideoUrl}" type="video/mp4">
    </video>
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="kicker">Western Pennsylvania General Contractor</div>
      <h1>Building with Strength, Precision, and Integrity.</h1>
      <p class="lead">
        Custom homes, commercial construction, renovations, and additions delivered with 18 years of proven craftsmanship.
      </p>
      <div class="cta">
        <a class="btn btn-primary" href="#contact">Request a Free Estimate</a>
        <a class="btn btn-secondary" href="tel:8145552478">Call (814) 555-2478</a>
      </div>
    </div>
  </header>

  <section id="about">
    <div class="container reveal">
      <h2 class="section-title">Built on Craftsmanship. <span class="highlight">Driven by Integrity.</span></h2>
      <p class="section-sub">
        Keystone Ridge Construction was founded to deliver superior construction services with honesty, precision, and accountability.
        Every project is led with a hands-on approach and relentless attention to detail.
      </p>
      <div class="stats">
        <div class="stat"><strong>18+</strong>Years Experience</div>
        <div class="stat"><strong>100%</strong>Licensed & Insured</div>
        <div class="stat"><strong>2</strong>Markets: Residential & Commercial</div>
        <div class="stat"><strong>On-Time</strong>On-Budget Delivery</div>
      </div>
    </div>
  </section>

  <section id="services">
    <div class="container reveal">
      <h2 class="section-title">Construction Services</h2>
      <p class="section-sub">From concept to completion, we build spaces that stand the test of time.</p>
      <div class="grid services-grid">
        <div class="card service-card"><div class="service-badge">01</div><h3>Custom Home Construction</h3><p>Luxury and fully tailored homes designed around your vision and lifestyle.</p></div>
        <div class="card service-card"><div class="service-badge">02</div><h3>Home Additions</h3><p>Seamless expansions that add space, function, and long-term value.</p></div>
        <div class="card service-card"><div class="service-badge">03</div><h3>Whole-Home Renovations</h3><p>Transform outdated properties into modern, high-performance homes.</p></div>
        <div class="card service-card"><div class="service-badge">04</div><h3>Kitchen & Bath Remodeling</h3><p>Beautiful, durable spaces crafted with premium finishes.</p></div>
        <div class="card service-card"><div class="service-badge">05</div><h3>Commercial Construction</h3><p>Office, retail, and tenant build-outs with minimal disruption.</p></div>
        <div class="card service-card"><div class="service-badge">06</div><h3>Design-Build Services</h3><p>One expert team from planning and permitting through final completion.</p></div>
      </div>
    </div>
  </section>

  <section id="portfolio">
    <div class="container reveal">
      <h2 class="section-title">Proven Results. Exceptional Craftsmanship.</h2>
      <p class="section-sub">Showcase your best work with cinematic photography, drone footage, and detailed case studies.</p>
      <div class="portfolio">
        <div class="project project-home">
          <div class="info"><h3>Custom Estate Home</h3><p>Designed and built from the ground up.</p></div>
        </div>
        <div class="project project-office">
          <div class="info"><h3>Corporate Office Renovation</h3><p>Delivered on schedule with premium finishes.</p></div>
        </div>
        <div class="project project-kitchen">
          <div class="info"><h3>Luxury Kitchen Remodel</h3><p>Modern design with exceptional detailing.</p></div>
        </div>
      </div>
      <div class="grid testimonials">
        <div class="card"><blockquote>"Keystone Ridge exceeded our expectations. The craftsmanship and communication were outstanding."</blockquote></div>
        <div class="card"><blockquote>"Our office renovation was completed on schedule and with remarkable attention to detail."</blockquote></div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container reveal">
      <h2 class="section-title">Let's Build Something Exceptional.</h2>
      <p class="section-sub">Tell us about your project and request a complimentary consultation.</p>
      <div class="card">
        <form>
          <input type="text" placeholder="Full Name">
          <input type="email" placeholder="Email Address">
          <input type="tel" placeholder="Phone Number">
          <input type="text" placeholder="Project Address">
          <select>
            <option>Service Needed</option>
            <option>Custom Home</option>
            <option>Renovation</option>
            <option>Addition</option>
            <option>Commercial Construction</option>
          </select>
          <select>
            <option>Budget Range</option>
            <option>$10k-$50k</option>
            <option>$50k-$250k</option>
            <option>$250k+</option>
          </select>
          <textarea rows="6" placeholder="Describe your project"></textarea>
          <button class="btn btn-primary" type="submit">Request Free Estimate</button>
        </form>
      </div>
    </div>
  </section>

  <footer>
    Keystone Ridge Construction, LLC - Johnstown, Pennsylvania - (814) 555-2478<br>
    Serving Western Pennsylvania with strength, precision, and integrity.
  </footer>
`;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
