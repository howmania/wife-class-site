import sandraAvatar from './assets/sandra-avatar2.jpg';
import sandraProfile1 from './assets/sandra_profile1.jpeg';
import sandraReelThumb1 from './assets/sandra_reels_1.png';
import sandraReelThumb2 from './assets/sandra_reels_2.png';
import sandraReelThumb3 from './assets/sandra_reels_3.png';
import sandraReelThumb4 from './assets/sandra_reels_4.png';
import seoulHero from './assets/seoul-hero.jpg';
import nycGallery from './assets/nyc-gallery.jpg';
import vancouverCard from './assets/vancouver-card.jpg';
import banffCard from './assets/banff-card.jpg';
import { inject } from '@vercel/analytics';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root not found');
}

const timeSlots = [
  '8:00 AM',
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
  '9:00 PM',
];

const testimonials = [
  {
    title: 'The best teacher',
    author: 'Justin C.',
    quote:
      'Sandra was my one and only Korean teacher. With her help, I went from knowing nothing, to speaking fluently and living in Korea! Highly recommended teacher',
  },
  {
    title: 'Excellent',
    author: 'Jason C.',
    quote:
      'Thanks for being my teacher. I enjoyed the Korean lessons. I always looked forward to class. You are amazing.',
  },
  {
    title: 'Very positive experience',
    author: 'Cameron D.',
    timing: '3 weeks ago',
    quote:
      "Sandra was my tutor prior to me moving to South Korea- She got me quickly caught up on sentence structure and the correct pronunciation and subtle nuances in the language. We hammered the foundation for several months - This was super helpful because when I moved to Seoul I was able to communicate in Korean at a basic level. It dramatically made my life easier in a new country, day to day life was more enjoyable and it was easier to meet people as well as pick up the language when I heard Korean speakers talk.. Sandra approached each lesson tailored to my goals - we would break down daily conversations along with foundation practice. How it's used, and variations on the conversation. She took the time to explain to me everything as well as gave me useful drills and homework's to further my foundation.",
  },
  {
    title: 'Amazing!',
    author: 'Roni P.',
    timing: '3 weeks ago',
    quote:
      'Lessons are very clear and straightforward, which made it easy for me to follow and stay focused in sessions. I had lots of fun during the lesson, and whenever I had questions, the directions were always helpful. This made it easier for me to understand and further develop my Korean skills. By the end of each sessions, I even asked for more homeworks so that I can continue practicing during my personal time. The lesson was that enjoyable for me. Because I liked the lesson so much, I believe others would enjoy and benefit from it as well',
  },
  {
    title: 'Perfect Korean tutor',
    author: 'Jay',
    timing: '3 weeks ago',
    quote:
      'The lessons are clear, well-organized, and tailored to my learning pace. The tutor is patient and explains grammar and pronunciation in an easy way to understand. I feel more confident speaking Korean after taking these lessons. Highly recommend!',
  },
  {
    title: 'Recommended tutor',
    author: 'Angus',
    timing: '3 weeks ago',
    quote:
      'Perfectly adapted to my needs Sandra quickly responded to my request and created a lesson plan over a reasonable period of time that is perfectly suited to my needs. Each lesson is diverse, with vocabulary, discussion and grammar. She is flexible to allow me to integrate my learning into my professional life. She also provides more general confidence-building tips. I have referred her to a colleague because I like her approach so much.',
  },
  {
    title: 'Excellent',
    author: 'RUNA',
    timing: '3 weeks ago',
    quote:
      'Sandra is an excellent Korean tutor. She has helped me improve my conversation skills and deepen my understanding of Korean culture. She is encouraging, patient, and very knowledgeable, and I highly recommend her to anyone looking to learn Korean.',
  },
  {
    title: 'Very helpful!',
    author: 'Sherry',
    timing: '3 weeks ago',
    quote:
      'Sandra is a great tutor who makes you feel comfortable speaking a new language, which can definitely be nerve-wracking. She puts you at ease and motivates you to keep improving your Korean. Her passion for the language is clear in every session. I highly recommend her—10/10!',
  },
  {
    title: 'Supportive and effective Korean tutor',
    author: 'Wang',
    quote:
      'Sandra was a really good Korean teacher. She explained things clearly, was patient when I made mistakes, and always encouraged me to keep improving. Her lessons were well-structured but still flexible depending on what I needed, which made learning feel natural and not stressful. She was also very friendly and easy to talk to, so I felt comfortable practicing speaking during class. If you were looking for a supportive and effective Korean tutor, I would definitely recommend her!',
  },
];

const floatingWords = [
  { text: '안녕하세요', top: '10%', left: '10%', delay: '0s' },
  { text: '한국어', top: '18%', left: '78%', delay: '1.2s' },
  { text: 'Hangul', top: '64%', left: '8%', delay: '2.2s' },
  { text: '회화', top: '74%', left: '82%', delay: '0.8s' },
  { text: 'Korean', top: '42%', left: '70%', delay: '1.8s' },
  { text: '배워요', top: '54%', left: '16%', delay: '2.8s' },
];

const createTimeOptions = () =>
  timeSlots
    .map(
      (time) => `
        <label class="pill-option time-pill-option">
          <input type="radio" name="preferredTime" value="${time}" />
          <span>${time}</span>
        </label>
      `,
    )
    .join('');

const createTestimonials = () =>
  testimonials
    .map(
      ({ title, author, quote }, index) => `
        <article class="testimonial-card reveal" style="transition-delay:${index * 60}ms">
          <div class="testimonial-meta-row">
            <div>
              <p class="testimonial-author-name">${author}</p>
              <p class="testimonial-title">${title}</p>
            </div>
          </div>
          <p class="testimonial-quote">${quote}</p>
        </article>
      `,
    )
    .join('');

const createFloatingWords = () =>
  floatingWords
    .map(
      ({ text, top, left, delay }) => `
        <span class="floating-word" style="top:${top}; left:${left}; animation-delay:${delay};">
          ${text}
        </span>
      `,
    )
    .join('');

app.innerHTML = `
  <div class="ambient-layer">
    <div class="ambient-orb orb-one"></div>
    <div class="ambient-orb orb-two"></div>
    <div class="ambient-orb orb-three"></div>
    ${createFloatingWords()}
  </div>

  <div class="site-shell">
    <header class="topbar">
      <div class="brand-block">
        <span class="brand-kicker">Online & NYC Area Lessons</span>
        <a href="#hero" class="brand-name">Sandra Hall Academy</a>
      </div>
      <nav class="nav-links">
        <a href="#about">About</a>
        <a href="#programs">Programs</a>
        <a href="#reviews">Reviews</a>
        <a href="#booking">Book</a>
      </nav>
    </header>

    <main>
      <section id="hero" class="hero-section editorial-grid">
        <div class="hero-copy reveal reveal-left">
          <span class="eyebrow">Premium Korean Lessons</span>
<h1>Learn Korean with clarity, confidence, and style.</h1>
<p class="hero-text">
  Sandra Hall Academy offers a modern Korean learning experience shaped by real
  conversation, thoughtful structure, and warm one-on-one guidance online or in New York City.
</p>
          <div class="hero-actions">
            <a href="#booking" class="btn btn-primary">Request Free Consultation + Free 30-Min Trial</a>
            <a href="#programs" class="btn btn-secondary">Explore Programs</a>
          </div>
        </div>

        <div class="hero-portrait reveal">
  <div class="portrait-card interactive-card" id="heroPortraitCard">
    <div class="portrait-city-backdrop" style="background-image:
      linear-gradient(180deg, rgba(6, 10, 18, 0.14), rgba(6, 10, 18, 0.64)),
      url('${seoulHero}');
    "></div>

    <div class="portrait-glow"></div>
    <div class="portrait-float-shape shape-one"></div>
    <div class="portrait-float-shape shape-two"></div>
    <div class="portrait-float-shape shape-three"></div>
    <div class="portrait-grid-lines"></div>

    <img
      src="${sandraProfile1}"
      alt="Sandra Hall Academy instructor profile"
      class="portrait-image portrait-image-cutout hero-profile-image"
    />

    <div class="portrait-overlay-card reveal reveal-up">
      <span class="mini-label">Seoul · Modern Korean Learning</span>
      <ul>
        <li>Beginner to advanced learning</li>
        <li>Customized lesson flow</li>
        <li>Online and NYC area lessons</li>
      </ul>
    </div>
  </div>
</div>
      </section>

      <section class="stats-ribbon reveal">
        <div>
          <strong data-count="10">10+</strong>
          <span>Teaching Korean & English</span>
        </div>
        <div>
          <strong>Free Intro Session</strong>
          <span>Consultation + trial lesson in one first step</span>
        </div>
        <div>
          <strong>Personalized Lessons</strong>
          <span>Structured support for real progress</span>
        </div>
      </section>

      <section id="about" class="feature-section split-section about-section">
  <div class="section-intro reveal reveal-left">
    <span class="eyebrow">About Sandra · 산드라 소개</span>
    <h2>A refined, bilingual approach to learning Korean.</h2>
  </div>

  <div class="split-content reveal about-content-shell">
    <div class="about-profile-card">
      <img
        src="${sandraAvatar}"
        alt="Sandra Hall portrait"
        class="about-profile-image"
      />
      <div class="about-profile-badge">Seoul · Vancouver · NYC</div>
    </div>

    <div class="about-copy">
      <p>
        Sandra is a native Korean speaker from Seoul who grew up in both Korea and Canada.
        She has more than 10 years of experience teaching Korean and English in institutions,
        academies, and private lesson settings.
      </p>
      <p>
        She brings together language instruction, translation and interpretation experience,
        and a warm teaching style that helps students feel clear, comfortable, and motivated.
      </p>
      <div class="detail-chip-row">
        <span>UBC Graduate</span>
        <span>Business Translation & Interpretation</span>
        <span>KLTAUSA 2025 AI-Integrated Instruction</span>
        <span>Online + NYC Area In-Person</span>
      </div>
    </div>
  </div>
</section>

      <section id="programs" class="feature-section programs-section">
        <div class="section-intro reveal">
          <span class="eyebrow">Programs · 수업 프로그램</span>
<h2>Designed for real fluency, not just memorization.</h2>
        </div>
        <div class="programs-grid">
          <article class="program-card reveal reveal-up">
            <span class="program-index">01</span>
            <h3>Foundations</h3>
            <p>Essential vocabulary, Hangul support, pronunciation, and step-by-step sentence building.</p>
          </article>
          <article class="program-card reveal reveal-up">
            <span class="program-index">02</span>
            <h3>Conversation</h3>
            <p>Natural speaking practice using real-life topics, confidence building, and guided correction.</p>
          </article>
          <article class="program-card reveal reveal-up">
            <span class="program-index">03</span>
            <h3>Business & Professional</h3>
            <p>Polished Korean for work, communication, and cross-cultural confidence.</p>
          </article>
          <article class="program-card reveal reveal-up">
            <span class="program-index">04</span>
            <h3>Private & Group</h3>
            <p>Flexible formats for one-on-one students, families, friends, and small groups.</p>
          </article>
        </div>
      </section>

      <section class="feature-section gallery-section">
  <div class="section-intro reveal">
    <span class="eyebrow">From Seoul to New York · 글로벌 한국어</span>
    <h2>Korean learning shaped by culture, movement, and real life.</h2>
  </div>

  <div class="learning-gallery">
    <div
      class="gallery-card gallery-card-classroom reveal reveal-left"
      style="background-image:
        linear-gradient(180deg, rgba(5, 8, 14, 0.18), rgba(5, 8, 14, 0.66)),
        url('${nycGallery}');
      "
    >
      <div class="gallery-overlay">
        <span>New York energy</span>
        <strong>Korean learning built for real life, movement, and confidence.</strong>
      </div>
    </div>

    <div class="gallery-stack">
      <div
        class="gallery-card gallery-card-hangul reveal"
        style="background-image:
          linear-gradient(180deg, rgba(8, 12, 18, 0.14), rgba(8, 12, 18, 0.56)),
          url('${vancouverCard}');
        "
      >
        <div class="gallery-overlay light-overlay">
          <span>Vancouver calm</span>
          <strong>Warm bilingual guidance with a modern learning flow.</strong>
        </div>
      </div>

      <div
        class="gallery-card gallery-card-books reveal reveal-up"
        style="background-image:
          linear-gradient(180deg, rgba(8, 12, 18, 0.16), rgba(8, 12, 18, 0.58)),
          url('${banffCard}');
        "
      >
        <div class="gallery-overlay light-overlay">
          <span>Banff clarity</span>
          <strong>Focused lessons, clear structure, and space to grow.</strong>
        </div>
      </div>
    </div>
  </div>
</section>
      <section class="feature-section reels-section">
        <div class="section-intro reveal">
          <span class="eyebrow">Reels · 짧은 한국어 클립</span>
<h2>Short-form Korean, taught with style and clarity.</h2>
        </div>
        <div class="reels-grid">
          <a
            href="https://www.instagram.com/reel/C_OK3i9otGG/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noreferrer"
            class="reel-card reveal reveal-up"
          >
            <div class="reel-preview" style="background-image: linear-gradient(180deg, rgba(16, 33, 61, 0.1), rgba(16, 33, 61, 0.42)), url('${sandraReelThumb1}');">
              <div class="reel-play-badge">▶</div>
              <div class="reel-preview-text">
                <span>Instagram Reel</span>
                <strong>Watch Sandra's Korean learning clip</strong>
              </div>
            </div>
            <div class="reel-card-body">
              <p class="reel-title">Quick Korean with Sandra</p>
              <p class="reel-description">
                Tap to watch this short Korean learning clip on Instagram.
              </p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/reel/C9z_cyqIgsX/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noreferrer"
            class="reel-card reveal reveal-up"
          >
            <div class="reel-preview" style="background-image: linear-gradient(180deg, rgba(16, 33, 61, 0.1), rgba(16, 33, 61, 0.42)), url('${sandraReelThumb2}');">
              <div class="reel-play-badge">▶</div>
              <div class="reel-preview-text">
                <span>Instagram Reel</span>
                <strong>Another Korean lesson moment</strong>
              </div>
            </div>
            <div class="reel-card-body">
              <p class="reel-title">Practical Korean Clip</p>
              <p class="reel-description">
                Watch another short clip from Sandra on Instagram.
              </p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/reel/C8umhXKI9ZY/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noreferrer"
            class="reel-card reveal reveal-up"
          >
            <div class="reel-preview" style="background-image: linear-gradient(180deg, rgba(16, 33, 61, 0.1), rgba(16, 33, 61, 0.42)), url('${sandraReelThumb3}');">
              <div class="reel-play-badge">▶</div>
              <div class="reel-preview-text">
                <span>Instagram Reel</span>
                <strong>Short Korean study inspiration</strong>
              </div>
            </div>
            <div class="reel-card-body">
              <p class="reel-title">Learn with Sandra</p>
              <p class="reel-description">
                A short Korean learning reel with Sandra Hall Academy.
              </p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/reel/C7E4B2zoxlj/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noreferrer"
            class="reel-card reveal reveal-up"
          >
            <div class="reel-preview" style="background-image: linear-gradient(180deg, rgba(16, 33, 61, 0.1), rgba(16, 33, 61, 0.42)), url('${sandraReelThumb4}');">
              <div class="reel-play-badge">▶</div>
              <div class="reel-preview-text">
                <span>Instagram Reel</span>
                <strong>Korean tips in a short format</strong>
              </div>
            </div>
            <div class="reel-card-body">
              <p class="reel-title">Mini Korean Reel</p>
              <p class="reel-description">
                Tap to open Sandra's Instagram reel and watch more.
              </p>
            </div>
          </a>
        </div>
      </section>

      <section class="feature-section visual-band-section">
        <div class="visual-band-card reveal reveal-left">
          <div class="visual-band-copy">
            <span class="eyebrow">Lesson Experience · 한국어 학습</span>
            <h2>배우기 쉽고, 말하기 편하고, 꾸준히 성장하는 수업.</h2>
            <p>
              A calm, welcoming learning experience designed to help students build confidence step by step.
            </p>
          </div>
          <div class="mini-visual mini-visual-one">
  <span>Seoul · Language & culture</span>
</div>
<div class="mini-visual mini-visual-two">
  <span>Vancouver · Warm bilingual teaching</span>
</div>
<div class="mini-visual mini-visual-three">
  <span>Banff · Calm focus & growth</span>
</div>
          </div>
        </div>
      </section>

      <section class="feature-section image-text-section">
        <div class="image-copy-card reveal reveal-left">
          <span class="eyebrow">How lessons feel · 수업 방식</span>
          <h2>Clear structure. Real progress. Friendly energy.</h2>
          <p>
            Lessons start with practical Korean and build naturally into stronger comprehension,
            better sentence structure, and more confidence in conversation.
          </p>
        </div>
        <div class="image-info-stack">
          <div class="info-panel reveal">
            <h3>Personalized flow</h3>
            <p>Lessons adapt to pace, goals, and preferred learning style.</p>
          </div>
          <div class="info-panel reveal">
            <h3>Custom materials</h3>
            <p>Free textbooks and digital resources from the first session.</p>
          </div>
          <div class="info-panel reveal">
            <h3>Flexible format</h3>
            <p>Online worldwide and in-person lessons in the New York City area.</p>
          </div>
        </div>
      </section>

      <section id="reviews" class="feature-section testimonial-section">
        <div class="section-intro reveal">
          <span class="eyebrow">Reviews · 수강 후기</span>
<h2>What students remember most is how confidently they grow.</h2>
        </div>
        <div class="testimonial-grid">
          ${createTestimonials()}
        </div>
      </section>

      <section class="feature-section pricing-section reveal">
        <div class="pricing-shell">
          <div>
            <span class="eyebrow">Start here · 시작하기</span>
            <h2>Begin with a lower-pressure first step.</h2>
          </div>
          <div class="pricing-steps">
            <div class="pricing-step">
              <strong>Free Intro Session</strong>
              <p>Start with one free session that combines consultation and a trial lesson experience.</p>
            </div>
            <div class="pricing-step">
              <strong>Personalized Recommendation</strong>
              <p>After the intro session, Sandra can suggest the best next step for your goals.</p>
            </div>
            <div class="pricing-step">
              <strong>Ongoing Plan</strong>
              <p>Continue with a personalized plan based on your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" class="feature-section booking-section">
        <div class="section-intro reveal reveal-left">
          <span class="eyebrow">Booking · 상담 신청</span>
          <h2>Request free consultation + free 30-min trial.</h2>
          <p>
            Choose one preferred date and one preferred time. Sandra will review your request and follow up with the best available option.
          </p>
        </div>

        <form id="bookingForm" class="booking-form reveal">
          <div class="form-grid two-up">
            <label>
              <span>Full Name</span>
              <input type="text" name="fullName" placeholder="Your full name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
          </div>

          <div class="form-grid two-up">
            <label>
              <span>Lesson Format</span>
              <select name="lessonFormat" required>
                <option value="">Select</option>
                <option value="Online">Online</option>
                <option value="In-person">In-person (NYC Area)</option>
              </select>
            </label>
            <label>
              <span>Current Level</span>
              <select name="level" required>
                <option value="">Select</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </label>
          </div>

          <label>
            <span>Preferred Date</span>
            <input type="date" name="preferredDate" required />
          </label>

          <div class="form-section">
            <span class="section-label">Preferred Time</span>
            <div class="pill-grid time-pill-grid">${createTimeOptions()}</div>
          </div>

          <label>
            <span>Learning Goals</span>
            <textarea
              name="goals"
              rows="5"
              placeholder="Conversation, pronunciation, business Korean, travel, moving to Korea, beginner basics, and more."
              required
            ></textarea>
          </label>

          <label>
            <span>Additional Notes</span>
            <textarea
              name="notes"
              rows="4"
              placeholder="Any scheduling notes or anything Sandra should know."
            ></textarea>
          </label>

          <div class="booking-flow-card">
            <h3>Booking Flow</h3>
            <ol>
              <li>Submit your preferred date, time, and learning goals.</li>
              <li>Your request is marked as <strong>Pending</strong>.</li>
              <li>Sandra reviews your requested date and time.</li>
              <li>You receive a follow-up confirmation.</li>
            </ol>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Send Booking Request</button>
            <p class="form-note">No payment is required at this step.</p>
          </div>
        </form>

        <div id="bookingStatus" class="booking-status" aria-live="polite"></div>
      </section>
    </main>
  </div>

  <style>
  :root {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #f5f7fb;
    background: #0b0d12;
    line-height: 1.5;
    font-weight: 400;
    --bg: #0b0d12;
    --bg-soft: #11141b;
    --panel: rgba(255, 255, 255, 0.04);
    --panel-strong: rgba(255, 255, 255, 0.06);
    --border: rgba(255, 255, 255, 0.09);
    --text: #f5f7fb;
    --muted: #a6afbf;
    --accent: #8fb7ff;
    --accent-soft: #dbe7ff;
    --shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 20% 10%, rgba(143, 183, 255, 0.12), transparent 24%),
      radial-gradient(circle at 85% 18%, rgba(255, 255, 255, 0.06), transparent 20%),
      linear-gradient(180deg, #07090d 0%, #0b0d12 24%, #0e1117 58%, #080a0f 100%);
    color: var(--text);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  .ambient-layer {
    position: fixed;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }

  .ambient-orb {
    position: absolute;
    border-radius: 999px;
    filter: blur(60px);
    opacity: 0.45;
    animation: orbDrift 18s ease-in-out infinite;
  }

  .orb-one {
    width: 320px;
    height: 320px;
    left: -90px;
    top: 40px;
    background: rgba(143, 183, 255, 0.18);
  }

  .orb-two {
    width: 260px;
    height: 260px;
    right: -80px;
    top: 240px;
    background: rgba(255, 255, 255, 0.08);
    animation-delay: 4s;
  }

  .orb-three {
    width: 260px;
    height: 260px;
    left: 50%;
    bottom: -60px;
    background: rgba(143, 183, 255, 0.1);
    animation-delay: 8s;
  }

  .floating-word {
    position: absolute;
    font-size: clamp(0.72rem, 1vw, 0.92rem);
    font-weight: 700;
    color: rgba(255, 255, 255, 0.08);
    letter-spacing: 0.22em;
    animation: floatingWord 9s ease-in-out infinite;
    white-space: nowrap;
    text-transform: uppercase;
  }

  .site-shell {
    position: relative;
    z-index: 1;
    width: min(1240px, calc(100% - 40px));
    margin: 0 auto 96px;
  }

  .topbar {
    position: sticky;
    top: 18px;
    z-index: 30;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: 18px 0 36px;
    padding: 18px 22px;
    background: rgba(12, 15, 21, 0.72);
    backdrop-filter: blur(18px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.24);
  }

  .brand-block {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .brand-kicker,
  .eyebrow,
  .mini-label {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--muted);
    font-weight: 700;
  }

  .brand-name {
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--text);
  }

  .nav-links {
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
    color: var(--muted);
    font-weight: 600;
  }

  .nav-links a {
    transition: color 0.2s ease, opacity 0.2s ease;
  }

  .nav-links a:hover {
    color: var(--text);
  }

  .feature-section {
    margin-top: 56px;
  }

  .gallery-section,
  .reels-section {
    margin-top: 56px;
  }

  .editorial-grid {
    display: grid;
    grid-template-columns: 1.02fr 0.98fr;
    gap: 34px;
    align-items: center;
    min-height: 88vh;
  }

  .hero-copy {
    padding: 18px 4px 18px 2px;
  }

  .hero-copy h1,
  .section-intro h2,
  .pricing-shell h2,
  .visual-band-copy h2 {
    margin: 12px 0 16px;
    color: var(--text);
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    line-height: 0.92;
    letter-spacing: -0.07em;
    font-weight: 800;
  }

  .hero-copy h1 {
    font-size: clamp(3.8rem, 8vw, 7rem);
    max-width: 9ch;
  }

  .section-intro h2,
  .pricing-shell h2,
  .visual-band-copy h2 {
    font-size: clamp(2.2rem, 4vw, 4rem);
    max-width: 12ch;
  }

  .hero-text,
  .section-intro p,
  .split-content p,
  .program-card p,
  .info-panel p,
  .pricing-step p,
  .form-note,
  .booking-status,
  .booking-flow-card li,
  .reel-description {
    color: var(--muted);
    font-size: 1.02rem;
  }

  .hero-text {
    animation: softFadeUp 1.1s ease both;
    animation-delay: 160ms;
  }

  .hero-actions,
  .form-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 28px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 0 20px;
    border-radius: 999px;
    font-weight: 700;
    transition: transform 0.22s ease, box-shadow 0.22s ease, opacity 0.22s ease;
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  .btn-primary {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #ffffff 0%, #dce6ff 100%);
    color: #0b0d12;
    border: none;
    box-shadow: 0 18px 40px rgba(143, 183, 255, 0.18);
    cursor: pointer;
  }

  .btn-primary::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent 18%, rgba(255,255,255,0.22) 50%, transparent 82%);
    transform: translateX(-130%);
    animation: ctaShine 4s ease-in-out infinite;
  }

  .btn-secondary {
    background: rgba(255, 255, 255, 0.04);
    color: var(--text);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .hero-portrait {
    display: flex;
    justify-content: center;
  }

  .interactive-card {
    transform-style: preserve-3d;
    transition: transform 0.18s ease, box-shadow 0.25s ease;
    will-change: transform;
  }

  .portrait-card {
    position: relative;
    isolation: isolate;
    width: min(100%, 560px);
    aspect-ratio: 4 / 5;
    border-radius: 38px;
    overflow: hidden;
    box-shadow: var(--shadow);
    background: #11141b;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
.portrait-city-backdrop {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.06);
  filter: saturate(1.05) contrast(1.02);
  z-index: 0;
}

.portrait-image-cutout {
  position: relative;
  z-index: 2;
}
  .portrait-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(4, 6, 10, 0.08), rgba(4, 6, 10, 0.52)),
      radial-gradient(circle at 15% 20%, rgba(255, 255, 255, 0.12), transparent 20%);
    z-index: 1;
    pointer-events: none;
  }

  .portrait-card::after {
    content: '';
    position: absolute;
    inset: -20%;
    background: linear-gradient(
      115deg,
      transparent 20%,
      rgba(255, 255, 255, 0.06) 40%,
      rgba(255, 255, 255, 0.16) 50%,
      transparent 62%
    );
    transform: translateX(-140%) rotate(8deg);
    animation: shineSweep 7s ease-in-out infinite;
    pointer-events: none;
    z-index: 2;
  }

  .portrait-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 18%;
    display: block;
    transform: scale(1.03);
    animation: portraitFloat 6s ease-in-out infinite;
    will-change: transform;
    filter: saturate(0.98) contrast(1.04);
  }
    
  .hero-profile-image {
  object-position: center 12%;
  filter: saturate(1.02) contrast(1.03) brightness(1.02);
}

.about-section .split-content {
  padding: 32px;
}

.about-content-shell {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 24px;
  align-items: center;
}

.about-profile-card {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.about-profile-image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center 18%;
}

.about-profile-badge {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 12px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(13, 16, 23, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  color: #f5f7fb;
  font-size: 0.76rem;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.about-copy {
  display: grid;
  gap: 16px;
}

.about-copy p {
  margin: 0;
}

@media (max-width: 720px) {
  .about-content-shell {
    grid-template-columns: 1fr;
  }

  .about-profile-card {
    max-width: 280px;
  }
}

  .portrait-glow {
    position: absolute;
    width: 220px;
    height: 220px;
    right: -34px;
    top: 24px;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(143, 183, 255, 0.2), transparent 68%);
    filter: blur(18px);
    z-index: 1;
    pointer-events: none;
    animation: glowPulse 4.3s ease-in-out infinite;
  }

  .portrait-grid-lines {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
    background-size: 28px 28px;
    mask-image: linear-gradient(180deg, rgba(0,0,0,0.25), transparent 80%);
    pointer-events: none;
    z-index: 1;
    opacity: 0.45;
  }

  .portrait-float-shape {
    position: absolute;
    border-radius: 999px;
    pointer-events: none;
    z-index: 1;
    opacity: 0.82;
  }

  .shape-one {
    width: 16px;
    height: 16px;
    top: 72px;
    left: 26px;
    background: rgba(255, 255, 255, 0.5);
    animation: orbitFloat1 6.4s ease-in-out infinite;
  }

  .shape-two {
    width: 12px;
    height: 12px;
    top: 150px;
    right: 38px;
    background: rgba(143, 183, 255, 0.55);
    animation: orbitFloat2 7.2s ease-in-out infinite;
  }

  .shape-three {
    width: 22px;
    height: 22px;
    bottom: 122px;
    left: 34px;
    background: rgba(255, 255, 255, 0.08);
    animation: orbitFloat3 8s ease-in-out infinite;
  }

  .portrait-overlay-card {
    position: absolute;
    right: 18px;
    bottom: 18px;
    width: min(72%, 320px);
    padding: 20px 22px;
    border-radius: 24px;
    background: rgba(13, 16, 23, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(16px);
    z-index: 3;
    animation: overlayBob 5s ease-in-out infinite;
  }

  .portrait-overlay-card ul {
    margin: 12px 0 0;
    padding-left: 18px;
    color: #eef3ff;
    display: grid;
    gap: 8px;
    font-weight: 600;
  }

  .stats-ribbon {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    padding: 14px;
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: var(--shadow);
  }

  .stats-ribbon div,
  .program-card,
  .info-panel,
  .testimonial-card,
  .pricing-step,
  .split-content,
  .pricing-shell,
  .booking-form,
  .image-copy-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: none;
    backdrop-filter: blur(12px);
  }

  .stats-ribbon div {
    padding: 18px 20px;
    border-radius: 22px;
    transition: transform 0.22s ease, border-color 0.22s ease;
  }

  .stats-ribbon div:hover,
  .program-card:hover,
  .info-panel:hover,
  .testimonial-card:hover,
  .pricing-step:hover {
    transform: translateY(-4px);
    border-color: rgba(143, 183, 255, 0.28);
  }

  .stats-ribbon strong {
    display: block;
    margin-bottom: 6px;
    font-size: 1.12rem;
    color: var(--text);
  }

  .stats-ribbon span {
    color: var(--muted);
    font-size: 0.95rem;
  }

  .split-section,
  .image-text-section,
  .booking-section {
    display: grid;
    grid-template-columns: 0.82fr 1.18fr;
    gap: 28px;
    align-items: start;
  }

  .split-content,
  .pricing-shell,
  .booking-form,
  .image-copy-card {
    padding: 32px;
    border-radius: 32px;
  }

  .detail-chip-row,
  .pill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .detail-chip-row span,
  .pill-option span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    padding: 0 16px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: var(--text);
    font-weight: 600;
  }

  .programs-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
    margin-top: 22px;
  }

  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
    margin-top: 22px;
  }

  .program-card {
    padding: 26px;
    min-height: 190px;
    transition: transform 0.22s ease, border-color 0.22s ease;
    border-radius: 28px;
  }

  .program-index {
    display: inline-block;
    margin-bottom: 18px;
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    color: var(--accent);
    font-weight: 800;
  }

  .program-card h3,
  .info-panel h3,
  .pricing-step strong,
  .booking-flow-card h3 {
    margin: 0 0 10px;
    color: var(--text);
    font-size: 1.18rem;
  }

  .learning-gallery {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 18px;
    margin-top: 22px;
  }

  .gallery-stack {
    display: grid;
    gap: 18px;
  }

  .gallery-card {
    position: relative;
    overflow: hidden;
    border-radius: 32px;
    min-height: 260px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: var(--shadow);
    transition: transform 0.24s ease, box-shadow 0.24s ease;
  }

  .gallery-card:hover {
    transform: translateY(-4px) scale(1.01);
  }

 .gallery-card-classroom,
.gallery-card-hangul,
.gallery-card-books {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
  .gallery-overlay {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 22px;
  padding: 20px 22px;
  border-radius: 24px;
  background: rgba(9, 12, 18, 0.54);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(18px);
  color: #fff;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.22);
}

  .gallery-overlay span {
    display: block;
    margin-bottom: 6px;
    font-size: 0.76rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    opacity: 0.82;
  }

  .gallery-overlay strong {
    font-size: 1.16rem;
    line-height: 1.3;
  }

  .light-overlay {
  background: rgba(9, 12, 18, 0.54);
  border-color: rgba(255, 255, 255, 0.12);
  color: #fff;
}

  .reels-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
    margin-top: 22px;
  }

  .reel-card {
    display: block;
    overflow: hidden;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: var(--shadow);
    transition: transform 0.22s ease, border-color 0.22s ease;
  }

  .reel-card:hover {
    transform: translateY(-4px);
    border-color: rgba(143, 183, 255, 0.24);
  }

  .reel-preview {
    position: relative;
    aspect-ratio: 9 / 16;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: end;
    justify-content: space-between;
    padding: 22px;
    color: #fff;
    transition: transform 0.35s ease;
  }

  .reel-card:hover .reel-preview {
    transform: scale(1.035);
  }

  .reel-play-badge {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 42px;
    height: 42px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    background: rgba(10, 12, 18, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    font-size: 1rem;
    font-weight: 800;
  }

  .reel-preview-text span {
    display: block;
    margin-bottom: 8px;
    font-size: 0.78rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    opacity: 0.9;
  }

  .reel-preview-text strong {
    font-size: 1.3rem;
    line-height: 1.25;
    max-width: 12ch;
    display: block;
  }

  .reel-card-body {
    padding: 18px 20px 22px;
  }

  .reel-title {
    margin: 0 0 8px;
    color: var(--text);
    font-weight: 800;
  }

  .visual-band-section {
    margin-top: 36px;
  }

  .visual-band-card {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 22px;
    padding: 30px;
    background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.03));
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 34px;
    box-shadow: var(--shadow);
  }

  .visual-band-copy p {
    color: var(--muted);
    max-width: 52ch;
  }

  .visual-band-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    align-items: stretch;
  }

  .mini-visual {
    min-height: 220px;
    border-radius: 26px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: end;
    padding: 18px;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.02em;
    box-shadow: var(--shadow);
    transition: transform 0.22s ease;
    background: linear-gradient(180deg, #131823 0%, #1e2d45 100%);
    border: 1px solid rgba(255,255,255,0.08);
  }

  .mini-visual:hover {
    transform: translateY(-5px);
  }

  .mini-visual span {
    position: relative;
    z-index: 1;
  }

  .mini-visual::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(5,8,14,0.28));
  }

  .mini-visual-one {
    background: linear-gradient(135deg, #111827 0%, #1e3a5f 100%);
  }

  .mini-visual-two {
    background: linear-gradient(135deg, #131823 0%, #243b63 100%);
  }

  .mini-visual-three {
    background: linear-gradient(135deg, #0f141d 0%, #2f466f 100%);
  }

  .image-text-section {
    grid-template-columns: 1fr 1fr;
  }

  .image-copy-card {
    min-height: 100%;
  }

  .image-info-stack {
    display: grid;
    gap: 18px;
  }

  .info-panel,
  .testimonial-card {
    padding: 24px;
    border-radius: 28px;
  }

  .info-panel {
    transition: transform 0.22s ease, border-color 0.22s ease;
  }

  .testimonial-card {
    transition: transform 0.22s ease, border-color 0.22s ease;
  }

  .testimonial-meta-row {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 14px;
  }

  .testimonial-author-name {
    margin: 0 0 4px;
    color: var(--text);
    font-size: 1.02rem;
    font-weight: 800;
  }

  .testimonial-title {
    margin: 0;
    color: var(--accent);
    font-size: 0.95rem;
    font-weight: 700;
  }

  .testimonial-quote {
    margin: 0;
    color: #eef3ff;
    font-size: 1rem;
    line-height: 1.75;
    white-space: pre-line;
  }

  .pricing-steps {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin-top: 24px;
  }

  .pricing-step {
    padding: 20px;
    border-radius: 22px;
    transition: transform 0.22s ease, border-color 0.22s ease;
  }

  .booking-form {
    display: grid;
    gap: 18px;
  }

  .form-grid {
    display: grid;
    gap: 16px;
  }

  .two-up {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .three-up {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  label {
    display: grid;
    gap: 8px;
    font-weight: 600;
    color: #e8eefb;
  }

  input,
select,
textarea {
  width: 100%;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(255, 255, 255, 0.06);
  color: #f5f7fb;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.16s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
select option {
  background: #11141b;
  color: #f5f7fb;
}

select:focus {
  background: rgba(255, 255, 255, 0.08);
}
  input::placeholder,
  textarea::placeholder {
    color: #7f8aa0;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: rgba(143, 183, 255, 0.45);
    box-shadow: 0 0 0 4px rgba(143, 183, 255, 0.1);
    transform: translateY(-1px);
  }

  .form-section {
    display: grid;
    gap: 10px;
  }

  .section-label {
    color: var(--muted);
    font-weight: 700;
  }

  .pill-option {
    position: relative;
    cursor: pointer;
  }

  .pill-option input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  .pill-option span {
    transition: transform 0.16s ease, border-color 0.16s ease, background 0.2s ease, color 0.2s ease;
  }

  .pill-option:hover span {
    transform: translateY(-2px);
    border-color: rgba(143, 183, 255, 0.24);
  }

  .pill-option input:checked + span {
    background: linear-gradient(135deg, #ffffff 0%, #dbe7ff 100%);
    color: #0b0d12;
    border-color: transparent;
    box-shadow: 0 12px 18px rgba(143, 183, 255, 0.16);
    transform: translateY(-2px) scale(1.02);
  }

  .booking-flow-card {
    padding: 22px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .booking-flow-card ol {
    margin: 12px 0 0;
    padding-left: 18px;
    display: grid;
    gap: 10px;
  }

  .booking-status {
    margin-top: 14px;
    min-height: 28px;
    font-weight: 700;
    color: var(--accent-soft);
  }

  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.8s ease, transform 0.8s ease;
    will-change: opacity, transform;
  }

  .reveal-left {
    transform: translateX(-28px);
  }

  .reveal-up {
    transform: translateY(36px);
  }

  .reveal.is-visible {
    opacity: 1;
    transform: translate(0, 0);
  }

  @keyframes portraitFloat {
    0%, 100% { transform: scale(1.03) translateY(0px); }
    50% { transform: scale(1.05) translateY(-8px); }
  }

  @keyframes overlayBob {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
  }

  @keyframes glowPulse {
    0%, 100% { opacity: 0.48; transform: scale(1); }
    50% { opacity: 0.92; transform: scale(1.08); }
  }

  @keyframes shineSweep {
    0%, 100% { transform: translateX(-140%) rotate(8deg); }
    48%, 58% { transform: translateX(120%) rotate(8deg); }
  }

  @keyframes ctaShine {
    0%, 100% { transform: translateX(-130%); }
    45%, 60% { transform: translateX(130%); }
  }

  @keyframes orbitFloat1 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(8px, -12px); }
  }

  @keyframes orbitFloat2 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-10px, 10px); }
  }

  @keyframes orbitFloat3 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(10px, -8px); }
  }

  @keyframes softFadeUp {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes floatingWord {
    0%, 100% {
      transform: translateY(0px);
      opacity: 0.18;
    }
    50% {
      transform: translateY(-12px);
      opacity: 0.32;
    }
  }

  @keyframes orbDrift {
    0%, 100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(12px, -24px, 0) scale(1.08);
    }
  }

  @keyframes gradientShift {
    0%, 100% {
      background-position: center, center, 0% 50%;
    }
    50% {
      background-position: center, center, 100% 50%;
    }
  }

  @media (max-width: 980px) {
    .reels-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .learning-gallery,
    .gallery-stack,
    .visual-band-card,
    .visual-band-grid,
    .editorial-grid,
    .split-section,
    .image-text-section,
    .booking-section,
    .pricing-steps,
    .stats-ribbon,
    .programs-grid,
    .testimonial-grid,
    .two-up,
    .three-up {
      grid-template-columns: 1fr;
    }

    .portrait-card {
      width: min(100%, 460px);
    }
  }

  @media (max-width: 720px) {
    .reels-grid {
      grid-template-columns: 1fr;
    }

    .site-shell {
      width: min(100% - 20px, 1240px);
    }

    .topbar {
      position: static;
      padding: 14px 16px;
      border-radius: 28px;
    }

    .nav-links {
      gap: 12px;
      font-size: 0.94rem;
    }

    .hero-copy h1 {
      max-width: 100%;
    }

    .portrait-overlay-card {
      width: calc(100% - 24px);
      right: 12px;
      bottom: 12px;
    }

    .split-content,
    .pricing-shell,
    .booking-form,
    .image-copy-card,
    .program-card,
    .testimonial-card,
    .info-panel {
      padding: 22px;
      border-radius: 24px;
    }

    .floating-word {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation: none !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }

    .reveal {
      opacity: 1 !important;
      transform: none !important;
    }
  }
</style>
`;

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykbqkdr';
const bookingForm = document.querySelector<HTMLFormElement>('#bookingForm');
const bookingStatus = document.querySelector<HTMLDivElement>('#bookingStatus');
const revealElements = document.querySelectorAll<HTMLElement>('.reveal');
const heroPortraitCard = document.querySelector<HTMLElement>('#heroPortraitCard');
const statsRibbon = document.querySelector<HTMLElement>('.stats-ribbon');
const countElement = document.querySelector<HTMLElement>('[data-count="10"]');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  {
    threshold: 0.14,
  },
);

revealElements.forEach((element) => revealObserver.observe(element));

if (heroPortraitCard) {
  heroPortraitCard.addEventListener('mousemove', (event) => {
    const rect = heroPortraitCard.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    heroPortraitCard.style.transform =
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  heroPortraitCard.addEventListener('mouseleave', () => {
    heroPortraitCard.style.transform =
      'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)';
  });
}

let hasCountAnimated = false;

const animateCount = () => {
  if (!countElement || hasCountAnimated) {
    return;
  }

  hasCountAnimated = true;
  const target = Number(countElement.dataset.count ?? '10');
  const duration = 1200;
  const startTime = performance.now();

  const update = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);

    countElement.textContent = `${value}+`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
};

if (statsRibbon) {
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount();
        }
      });
    },
    { threshold: 0.4 },
  );

  statsObserver.observe(statsRibbon);
}

bookingForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  const selectedTime = formData.get('preferredTime');

  if (!selectedTime) {
    if (bookingStatus) {
      bookingStatus.textContent = 'Please choose one preferred time.';
    }
    return;
  }

  const bookingRequest = {
    status: 'Pending',
    submittedAt: new Date().toISOString(),
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    lessonFormat: formData.get('lessonFormat'),
    level: formData.get('level'),
    preferredDate: formData.get('preferredDate'),
    preferredTime: selectedTime,
    goals: formData.get('goals'),
    notes: formData.get('notes'),
  };

  console.log('Booking request submitted:', bookingRequest);

if (!FORMSPREE_ENDPOINT) {
  alert('Form endpoint is missing')
  return
}

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        subject: `New Booking Request - ${String(bookingRequest.fullName ?? 'Sandra Hall Academy')}`,
        ...bookingRequest,
      }),
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    if (bookingStatus) {
      bookingStatus.textContent =
        'Your booking request has been sent successfully. Sandra will follow up soon.';
    }
  } catch (error) {
    console.error('Booking request error:', error);
    if (bookingStatus) {
      bookingStatus.textContent =
        'Something went wrong while sending your request. Please try again later.';
    }
    return;
  }

  bookingForm.reset();
});

inject();