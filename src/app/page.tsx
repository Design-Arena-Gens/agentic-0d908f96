import Link from "next/link";

export default function Home() {
  const classDetails = [
    {
      grade: "Class 8",
      focus: "Foundation Batch",
      description:
        "NCERT concepts ko real-life experiments ke through samjhaya jata hai. Maths aur Science ka strong base ready kia jata hai.",
      highlights: ["Concept booster sheets", "STEM mini projects", "Weekly quiz"],
    },
    {
      grade: "Class 9",
      focus: "Concept Builder",
      description:
        "High school level ki tayari, chapter wise detail explanation aur board pattern worksheets.",
      highlights: ["Chapter wise assignments", "Doubt clearing pod", "Unit tests every fortnight"],
    },
    {
      grade: "Class 10",
      focus: "Board Achiever",
      description:
        "Class 10 Board ke liye complete maths + science coverage, sample paper drills aur revision marathons.",
      highlights: ["Crash revision weeks", "Previous year questions set", "Exam temperament drills"],
    },
    {
      grade: "Class 11",
      focus: "Core Science + PCM",
      description:
        "Class 11 ke tough topics (Physics, Chemistry, Maths/Biology) ko competitive angle se padhaaya jata hai.",
      highlights: ["Concept mapping", "Numerical practice labs", "Competitive chapter starters"],
    },
    {
      grade: "Class 12",
      focus: "Board + Competitive Smart Prep",
      description:
        "Board aur entrance exams (JEE Main/NEET) ke liye targeted practice. Micro scheduling & mock tests.",
      highlights: ["Full length mock tests", "Strategy mentoring", "Answer writing workshops"],
    },
  ];

  const highlights = [
    {
      title: "Experienced Faculty",
      description:
        "Subject experts jo local aur national level competitive exams ka experience rakhte hain.",
      icon: "🎓",
    },
    {
      title: "Offline + Online Support",
      description:
        "Maheshkhunt center me classroom coaching aur YouTube channel CWA Sciences Classes par revision.",
      icon: "🧠",
    },
    {
      title: "Small Batches",
      description: "Har batch me limited students, taaki individual attention mil sake.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Regular Testing",
      description: "Weekly quiz, monthly assessment aur complete feedback parents ko diya jata hai.",
      icon: "📊",
    },
  ];

  const results = [
    { stat: "8+", label: "Years of Quality Teaching" },
    { stat: "600+", label: "Happy Students Trained" },
    { stat: "95%", label: "Board Exam Success Rate" },
    { stat: "30K+", label: "YouTube Learners" },
  ];

  const process = [
    {
      title: "Concept Launch",
      text: "Every chapter interactive explanation, classroom experiments aur storytelling technique.",
    },
    {
      title: "Practice Labs",
      text: "Daily homework discussion, problem-solving drills aur hots questions ka coverage.",
    },
    {
      title: "Assessment Sprint",
      text: "Weekly tests, performance tracking dashboard aur improvement plan.",
    },
    {
      title: "Mentor Support",
      text: "1-on-1 doubt clearing, parent counselling aur motivational sessions.",
    },
  ];

  return (
    <div className="bg-surface text-slate-900">
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_#dbe7ff_0%,_#f6fdff_40%,_transparent_65%)]" />

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Maheshkhunt ka trusted maths & science institute
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              CWA Sciences Classes
              <span className="block text-blue-600">Class 8 se 12 tak smart learning</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Offline classroom batches Maheshkhunt me, jahan maths aur science ko practical approach
              se samjhaya jata hai. NCERT mastery, board exam strategy aur competitive mindset ek hi
              jagah par.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="tel:+919693001166"
                className="rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-500 hover:shadow-blue-300"
              >
                9693 001 166 par call karein
              </Link>
              <Link
                href="https://wa.me/919693001166"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-blue-200 bg-white px-7 py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-400 hover:bg-blue-50"
              >
                WhatsApp par batch join karein
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {results.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-blue-100 bg-white/80 px-6 py-5 shadow-sm backdrop-blur"
                >
                  <p className="font-display text-3xl font-semibold text-blue-600">{item.stat}</p>
                  <p className="text-sm font-medium text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl border border-slate-100 bg-white/90 p-8 shadow-xl shadow-blue-100">
            <div className="absolute -top-12 right-8 hidden h-24 w-24 rotate-6 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-400 to-teal-300 opacity-80 blur-3xl lg:block" />
            <h2 className="font-display text-2xl font-semibold text-slate-900">
              Offline Campus Highlights
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Maheshkhunt bazar ke paas hi institute ka state-of-the-art classroom setup. Smart board
              lessons, library corner aur doubt clinic available hai.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 font-display text-base text-blue-600">
                  1
                </span>
                <div>
                  <p className="font-semibold text-slate-800">Smart Classroom</p>
                  <p>HD panel, live experiment demos aur real-time quiz tools se learning engaging.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 font-display text-base text-blue-600">
                  2
                </span>
                <div>
                  <p className="font-semibold text-slate-800">Learning Resources</p>
                  <p>Dedicated study material, NCERT solved notes aur bilingual explanations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 font-display text-base text-blue-600">
                  3
                </span>
                <div>
                  <p className="font-semibold text-slate-800">Parent Connect</p>
                  <p>Monthly PTM aur progress reports se har student ka growth track hota hai.</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-400 px-5 py-4 text-white shadow-lg">
              <p className="font-display text-lg font-semibold">Address</p>
              <p className="text-sm">
                CWA Sciences Classes, Maheshkhunt Station Road, Khagaria, Bihar 851213
              </p>
            </div>
          </div>
        </section>

        <section id="why-us" className="bg-gradient-to-b from-white to-blue-50/70 py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <div className="mb-12 flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
              <div>
                <p className="inline-flex rounded-full bg-blue-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
                  Kyon choose karein
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900">
                  Maheshkhunt ke students ka favorite learning hub
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-slate-600">
                Hamare structured batches aur personalized mentoring ke saath board ke sath-sath
                competitive exams ka bhi ready score banaiye.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                    {item.icon}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="courses" className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <div className="flex flex-col items-start gap-4 text-left sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="inline-flex rounded-full bg-teal-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-teal-700">
                  Course Pathway
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900">
                  Class 8 se 12 tak structured coaching
                </h2>
              </div>
              <Link
                href="https://www.youtube.com/@CWASciencesClasses"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                YouTube par demo lectures dekhein →
              </Link>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {classDetails.map((item) => (
                <article
                  key={item.grade}
                  className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                      {item.grade}
                    </span>
                    <p className="font-display text-lg font-semibold text-slate-900">{item.focus}</p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1 font-medium text-blue-700"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-teal-200">
                  Learning Flow
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold">
                  Step-by-step guidance har student ke liye
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  Har batch me structured roadmap follow hota hai jahan baseline assessment se lekar
                  final revision tak har cheez plan hoti hai.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-blue-900/30">
                <ol className="space-y-6">
                  {process.map((step, index) => (
                    <li key={step.title} className="relative pl-12">
                      <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-400 font-display text-lg font-semibold text-white shadow-lg">
                        {index + 1}
                      </span>
                      <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm text-slate-200">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl shadow-blue-100/60">
                <h2 className="font-display text-3xl font-semibold text-slate-900">
                  YouTube Channel: CWA Sciences Classes
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Classroom ke alawa hamare YouTube channel par bhi daily shorts aur full length
                  revision videos upload hote hain. Students ghar par rahat se revise kar sakte hain.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li>• NCERT ke har chapter ka summary video</li>
                  <li>• Exam strategy webinars aur live doubt sessions</li>
                  <li>• Foundation series for junior classes</li>
                </ul>
                <Link
                  href="https://www.youtube.com/@CWASciencesClasses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
                >
                  YouTube Channel Visit Karein
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-lg shadow-blue-100">
                <iframe
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed?listType=playlist&list=UU2u6VOGGAaHo9dZYkTfGZig"
                  title="CWA Sciences Classes YouTube"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <div className="bg-slate-900 px-6 py-5 text-sm text-slate-200">
                  Hamare free online lectures ka sample dekhein aur offline batch ke liye enrol karein.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50/80 py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-4">
                <p className="inline-flex rounded-full bg-blue-200/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-900">
                  Maheshkhunt Center
                </p>
                <h2 className="font-display text-3xl font-semibold text-slate-900">
                  Easily reachable location with safe campus
                </h2>
                <p className="text-sm leading-7 text-slate-600">
                  Station Road aur NH-31 se sirf 3 minute walking distance. Nearby areas: Gogri,
                  Khagaria, Sonbarsa, Mansi se direct connectivity available hai.
                </p>
                <div className="rounded-2xl border border-white/90 bg-white p-6 shadow-lg">
                  <h3 className="font-display text-xl font-semibold text-slate-900">
                    Batch Timings & Facilities
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                    <li>• Morning batch: 7:00 AM - 10:30 AM (Class 11 & 12)</li>
                    <li>• Afternoon batch: 1:30 PM - 4:00 PM (Class 9 & 10)</li>
                    <li>• Evening foundation: 4:30 PM - 6:30 PM (Class 8)</li>
                    <li>• Sunday special test series & parent review meet</li>
                  </ul>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border border-blue-100 shadow-lg">
                <iframe
                  title="CWA Sciences Classes Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.7989798093606!2d86.616245!3d25.397962699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa60601e9f87a7%3A0xddd818f3a8a5fedc!2sMaheshkhunt%2C%20Bihar%20851213!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
                  className="h-[420px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-xl">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-teal-800">
                    Result Speaks
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900">
                    Students aur parents ka bharosa
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Hamare guidance me padh kar students ne 95%+ scores achieve kiye aur strong
                    technical foundation develop ki. Yahan performance data ka ek glimpse diya gaya
                    hai.
                  </p>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-100 bg-blue-50/70 p-6">
                      <p className="font-display text-3xl font-semibold text-blue-700">97%</p>
                      <p className="text-sm text-slate-600">Class 10 board topper (2024)</p>
                    </div>
                    <div className="rounded-2xl border border-slate-100 bg-blue-50/70 p-6">
                      <p className="font-display text-3xl font-semibold text-blue-700">18</p>
                      <p className="text-sm text-slate-600">Students cracked JEE/NEET foundation test</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <blockquote className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 text-sm text-slate-700 shadow-sm">
                    “CWA sir ki teaching style unique hai. Physics ke numerical ko story se explain
                    karte hain jisse concept kabhi nahi bhulta. Board ke time me full support mila.”
                    <cite className="mt-4 block font-semibold text-slate-800">
                      — Sweta Kumari, Class 12 (2023 Batch)
                    </cite>
                  </blockquote>
                  <blockquote className="rounded-2xl border border-slate-100 bg-white p-6 text-sm text-slate-700 shadow-sm">
                    “Parent-teacher meeting system bahut achha hai. Hamare bachche ka progress har
                    month track hota hai aur improvement plan milta hai.”
                    <cite className="mt-4 block font-semibold text-slate-800">
                      — Rajesh Kumar, Guardian
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 opacity-95" />
          <div className="mx-auto max-w-5xl px-6 text-center text-white">
            <h2 className="font-display text-4xl font-semibold">
              Aaj hi apne bachche ka future secure karein
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-50">
              Demo class attend karein, study material sample dekhein aur admission counselling se
              apne batch finalize karein. Seats limited hain.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="tel:+919693001166"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-700 shadow-lg shadow-blue-900/40 transition hover:bg-blue-50"
              >
                Abhi admission inquiry karein
              </Link>
              <Link
                href="mailto:cwasciencesclasses@gmail.com"
                className="rounded-full border border-white/80 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Prospectus email par paayen
              </Link>
            </div>
            <div className="mt-10 grid gap-6 text-left sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-blue-100">Contact</p>
                <p className="mt-2 text-sm">9693 001 166 | 9470 147 575</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-blue-100">Email</p>
                <p className="mt-2 text-sm">cwasciencesclasses@gmail.com</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-blue-100">Timings</p>
                <p className="mt-2 text-sm">Mon - Sun | 7:00 AM se 7:00 PM tak</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-blue-100 bg-white py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-12">
            <div>
              <p className="font-display text-lg font-semibold text-slate-900">
                CWA Sciences Classes
              </p>
              <p>Maheshkhunt, Khagaria (Bihar) • Offline + Online Hybrid Coaching</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.youtube.com/@CWASciencesClasses"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                YouTube
              </Link>
              <Link href="tel:+919693001166" className="text-blue-600 hover:text-blue-700">
                Call
              </Link>
              <Link href="https://wa.me/919693001166" className="text-blue-600 hover:text-blue-700">
                WhatsApp
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
