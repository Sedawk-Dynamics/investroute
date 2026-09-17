// Answers for the website chatbot. Every answer is based on content already on the site.
// To teach the bot something new, add an entry: `keywords` are matched against the
// user's question (longer phrases count for more, a leading "~" marks a weak word),
// `text` and `links` are shown as the reply.

export type ChatLink = { label: string; href: string }

export type ChatAnswer = {
  text: string
  links?: ChatLink[]
}

type KnowledgeEntry = ChatAnswer & {
  keywords: string[]
}

export const CONTACT = {
  phone: "8353922204",
  telephone: "05224048943",
  email: "info@investroutecapital.com",
  careEmail: "care@investroutecapital.com",
  grievanceEmail: "grievances@investroutecapital.com",
  whatsapp: "919235622204",
  address: "14/827 Indira Nagar, Lucknow, Uttar Pradesh 226016",
  hours: "Monday - Friday: 9:00 AM - 6:00 PM, Saturday: 9:00 AM - 2:00 PM",
}

const contactLinks: ChatLink[] = [
  { label: "Call 8353922204", href: `tel:${CONTACT.phone}` },
  { label: "WhatsApp us", href: `https://wa.me/${CONTACT.whatsapp}` },
  { label: "Contact form", href: "/#contact" },
]

export const GREETING: ChatAnswer = {
  text: "Hi! 👋 I'm the Investroute assistant. Ask me about our services — mutual funds, share trading, insurance, loans, fixed deposits, digital gold & silver, calculators, or how to contact us.",
}

export const FALLBACK: ChatAnswer = {
  text: `Sorry, I don't have information about that yet. Please contact our team for more details:\n\n📞 Phone: ${CONTACT.phone}\n☎️ Telephone: ${CONTACT.telephone}\n✉️ Email: ${CONTACT.email}\n🕘 ${CONTACT.hours}`,
  links: contactLinks,
}

export const SUGGESTIONS = [
  "What services do you offer?",
  "How do I start a SIP?",
  "Home loan interest rate",
  "How to open an account?",
  "Contact details",
]

const knowledge: KnowledgeEntry[] = [
  {
    keywords: ["hello", "hi", "hey", "namaste", "good morning", "good evening", "good afternoon"],
    text: "Hello! 😊 How can I help you today? You can ask about our services, loans, insurance, calculators or contact details.",
  },
  {
    keywords: ["thank", "thanks", "dhanyavad", "shukriya"],
    text: "You're welcome! Is there anything else I can help you with?",
  },
  {
    keywords: ["bye", "goodbye", "see you"],
    text: "Thank you for visiting Investroute — Ek Rista Vishwas Ka. Have a great day! 👋",
  },
  {
    keywords: ["service", "services", "~offer", "~provide", "~products", "what do you offer", "what do you do", "help me with"],
    text: "We offer:\n• Mutual Funds (SIP & lumpsum)\n• Share Trading\n• Fixed Deposits\n• Digital Gold & Silver\n• Insurance — life, term, health, vehicle, travel, property\n• Loans — home, personal, vehicle, education\n• Free investment calculators",
    links: [
      { label: "Mutual Funds", href: "/mutual-fund" },
      { label: "Share Trading", href: "/share-trading" },
      { label: "Insurance", href: "/insurance" },
      { label: "Loans", href: "/loans" },
    ],
  },
  {
    keywords: ["about investroute", "about you", "about company", "who are you", "~company", "investroute", "tagline", "ek rista", "vishwas", "~experience", "~history"],
    text: "Investroute — \"Ek Rista Vishwas Ka\" — is your first choice for wealth management. We offer insurance, mutual funds, share trading, loans, fixed deposits and digital gold & silver, built on transparency, honesty and integrity, with 17+ years of experience in financial services.",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our team", href: "/team" },
    ],
  },
  {
    keywords: ["mutual fund", "mutual funds", "mf", "sahi hai", "fund", "funds"],
    text: "Mutual Funds with Investroute:\n• Diversified portfolios to reduce risk\n• Goal-based investing (retirement, education, dream home)\n• Professional fund management\n• SEBI regulated\n• Expert guidance from certified advisors\n• SIP starting from just ₹500/month\n\nInvestroute is a registered mutual fund distributor (ARN-106148). Partners include HDFC, ICICI and Kotak Mutual Fund.",
    links: [
      { label: "Mutual Funds", href: "/mutual-fund" },
      { label: "Explore funds", href: "/mutual-fund/explore-funds" },
    ],
  },
  {
    keywords: ["sip", "systematic investment", "monthly investment", "start investing", "minimum investment", "500"],
    text: "A SIP (Systematic Investment Plan) lets you invest a fixed amount every month in mutual funds — you can start with as little as ₹500 per month. Use our SIP calculator to see how your money can grow.",
    links: [
      { label: "SIP calculator", href: "/calculators?tab=sip" },
      { label: "Mutual Funds", href: "/mutual-fund" },
    ],
  },
  {
    keywords: ["share", "shares", "trading", "stock", "stocks", "equity", "~market", "demat", "brokerage", "angel"],
    text: "Share Trading with Investroute:\n• Real-time trading with fast order execution\n• Advanced charts & analytics\n• Secure, regulated platform\n• Low, transparent brokerage\n• Open a demat account in minutes\n• 24/7 support",
    links: [
      { label: "Share Trading", href: "/share-trading" },
      { label: "Open account", href: "/open-account" },
    ],
  },
  {
    keywords: ["open account", "account opening", "demat account", "kyc", "sign up", "new account", "open a"],
    text: "Opening an account is free and quick:\n• Zero account opening charges, no hidden fees\n• Minimum documents, online KYC\n• 100% secure & SEBI regulated\n• Start investing in minutes",
    links: [
      { label: "Open account", href: "/open-account" },
      { label: "Register", href: "/register" },
    ],
  },
  {
    keywords: ["login", "log in", "sign in", "register", "registration", "password"],
    text: "You can log in or create a new account from the links below. If you have trouble signing in, please contact our support team.",
    links: [
      { label: "Login", href: "/login" },
      { label: "Register", href: "/register" },
    ],
  },
  {
    keywords: ["fixed deposit", "fd", "fds", "deposit", "guaranteed return"],
    text: "Fixed Deposits:\n• Interest rates from 6.5% to 8.5% p.a. (depends on tenure & amount)\n• Tenure from 7 days to 10 years\n• Extra 0.5% for senior citizens\n• DICGC insurance up to ₹5 lakhs per depositor\n• 5-year tax-saving FDs eligible under Section 80C (up to ₹1.5 lakhs)",
    links: [{ label: "Fixed Deposits", href: "/fixed-deposit" }],
  },
  {
    keywords: ["gold", "silver", "precious metal", "digital gold", "sona", "chandi"],
    text: "Digital Gold & Silver:\n• 99.9% purity guarantee\n• Start from just ₹1\n• Fully insured, stored in secure vaults\n• Buy or sell anytime with instant settlement\n• Live prices\n\nGold has historically given ~10-12% annual returns, silver ~15-18% (past performance is not a guarantee).",
    links: [{ label: "Gold & Silver", href: "/gold-silver" }],
  },
  {
    keywords: ["insurance", "insure", "~policy", "bima", "~cover", "coverage", "~claim"],
    text: "We offer insurance from top providers:\n• Life & Term insurance\n• Health insurance\n• Vehicle insurance\n• Travel insurance\n• Property insurance\n\nBenefits: quick claim settlement, expert advice, easy documentation and 24/7 support.",
    links: [
      { label: "All insurance", href: "/insurance" },
      { label: "Health", href: "/insurance/health" },
      { label: "Life", href: "/insurance/life" },
    ],
  },
  {
    keywords: ["life insurance", "life cover", "family protection"],
    text: "Life Insurance secures your family's financial future with comprehensive life coverage. Talk to our advisors to find the right plan.",
    links: [{ label: "Life insurance", href: "/insurance/life" }],
  },
  {
    keywords: ["term insurance", "term plan", "term"],
    text: "Term Insurance gives high coverage at low cost, financial protection for your family, flexible policy duration and tax benefits as per government rules.",
    links: [{ label: "Term insurance", href: "/insurance/term" }],
  },
  {
    keywords: ["health insurance", "medical insurance", "mediclaim", "hospital", "~medical"],
    text: "Health Insurance protects you and your loved ones from medical emergencies.",
    links: [{ label: "Health insurance", href: "/insurance/health" }],
  },
  {
    keywords: ["vehicle insurance", "car insurance", "bike insurance", "motor insurance", "two wheeler insurance"],
    text: "Vehicle Insurance gives complete protection for your car and two-wheeler.",
    links: [{ label: "Vehicle insurance", href: "/insurance/vehicle" }],
  },
  {
    keywords: ["travel insurance", "travel", "trip", "baggage", "abroad"],
    text: "Travel Insurance covers medical emergencies, trip protection, lost baggage compensation and gives 24/7 worldwide assistance.",
    links: [{ label: "Travel insurance", href: "/insurance/travel" }],
  },
  {
    keywords: ["property insurance", "home insurance", "house insurance", "fire", "theft", "burglary", "flood", "earthquake"],
    text: "Property Insurance covers your building & contents against fire, natural disasters (floods, earthquakes), and theft & burglary.",
    links: [{ label: "Property insurance", href: "/insurance/property" }],
  },
  {
    keywords: ["loan", "loans", "borrow", "~finance", "~credit"],
    text: "We offer:\n• Home Loans — from 8.5% p.a., up to ₹5 Crores\n• Personal Loans — from 10.5% p.a., up to ₹25 lakhs\n• Vehicle Loans — from 9.5% p.a., up to 7 years\n• Education Loans — from 8% p.a., up to ₹1.5 Crores\n\n*Rates are indicative; contact us for the latest rates.",
    links: [
      { label: "All loans", href: "/loans" },
      { label: "EMI calculator", href: "/calculators?tab=emi" },
    ],
  },
  {
    keywords: ["home loan", "housing loan", "house loan", "property loan", "dream home"],
    text: "Home Loans:\n• Interest rates starting from 8.5% p.a.*\n• Loan up to ₹5 Crores\n• Age: 21 to 65 years\n• Minimum income ₹25,000/month for salaried\n• Flexible repayment options\n\n*Indicative rate; contact us for the latest offer.",
    links: [
      { label: "Home loan", href: "/loans/home" },
      { label: "EMI calculator", href: "/calculators?tab=emi" },
    ],
  },
  {
    keywords: ["personal loan", "instant loan", "quick loan"],
    text: "Personal Loans:\n• Loan amount up to ₹25 lakhs\n• Interest rates starting from 10.5% p.a.*\n• Repayment period from 1 to 5 years\n• Quick approval",
    links: [
      { label: "Personal loan", href: "/loans/personal" },
      { label: "EMI calculator", href: "/calculators?tab=emi" },
    ],
  },
  {
    keywords: ["vehicle loan", "car loan", "bike loan", "auto loan", "two wheeler loan"],
    text: "Vehicle Loans:\n• Interest rates starting from 9.5% p.a.*\n• Up to 100% on-road funding\n• Tenure from 1 to 7 years\n• Easy EMI options",
    links: [
      { label: "Vehicle loan", href: "/loans/vehicle" },
      { label: "EMI calculator", href: "/calculators?tab=emi" },
    ],
  },
  {
    keywords: ["education loan", "student loan", "study loan", "study abroad", "college", "university", "education"],
    text: "Education Loans:\n• Up to ₹1.5 Crores for international studies\n• Interest rates starting from 8% p.a.*\n• No collateral for loans up to ₹7.5 lakhs\n• 100% financing for tuition & other expenses\n• Repayment tenure up to 15 years",
    links: [
      { label: "Education loan", href: "/loans/education" },
      { label: "EMI calculator", href: "/calculators?tab=emi" },
    ],
  },
  {
    keywords: ["interest rate", "rate of interest", "roi"],
    text: "Indicative interest rates:\n• Home Loan: from 8.5% p.a.\n• Personal Loan: from 10.5% p.a.\n• Vehicle Loan: from 9.5% p.a.\n• Education Loan: from 8% p.a.\n• Fixed Deposit: 6.5% - 8.5% p.a. (+0.5% for senior citizens)\n\nRates may change — contact us for the latest rates.",
    links: [
      { label: "Loans", href: "/loans" },
      { label: "Fixed Deposits", href: "/fixed-deposit" },
    ],
  },
  {
    keywords: ["calculator", "calculators", "calculate", "~estimate", "~returns"],
    text: "We have free calculators: SIP, Lumpsum, SWP, Retirement, Goal Planning and EMI. Pick one below or scroll to the calculator section on the homepage.",
    links: [
      { label: "SIP", href: "/calculators?tab=sip" },
      { label: "Lumpsum", href: "/calculators?tab=lumpsum" },
      { label: "SWP", href: "/calculators?tab=swp" },
      { label: "Retirement", href: "/calculators?tab=retirement" },
      { label: "Goal", href: "/calculators?tab=goal" },
      { label: "EMI", href: "/calculators?tab=emi" },
    ],
  },
  {
    keywords: ["emi", "emis", "installment", "instalment"],
    text: "Use our EMI calculator to find the monthly EMI, total interest and total amount payable for any loan.",
    links: [{ label: "EMI calculator", href: "/calculators?tab=emi" }],
  },
  {
    keywords: ["lumpsum", "lump sum", "one time", "onetime"],
    text: "A lumpsum investment is a one-time investment. Our Lumpsum calculator shows its estimated value after your chosen period.",
    links: [{ label: "Lumpsum calculator", href: "/calculators?tab=lumpsum" }],
  },
  {
    keywords: ["swp", "systematic withdrawal", "withdrawal", "monthly income"],
    text: "An SWP (Systematic Withdrawal Plan) lets you withdraw a fixed amount every month from your investment. Our SWP calculator shows the total withdrawn and the remaining value.",
    links: [{ label: "SWP calculator", href: "/calculators?tab=swp" }],
  },
  {
    keywords: ["retirement", "retire", "pension", "old age"],
    text: "Our Retirement calculator estimates the corpus you need after inflation and the monthly SIP required to build it.",
    links: [{ label: "Retirement calculator", href: "/calculators?tab=retirement" }],
  },
  {
    keywords: ["goal", "goals", "goal planning", "~target", "~child", "marriage", "wedding"],
    text: "Our Goal Planning calculator tells you the monthly SIP needed to reach any goal — a house, education, a car or a wedding.",
    links: [{ label: "Goal calculator", href: "/calculators?tab=goal" }],
  },
  {
    keywords: ["tax", "80c", "tax saving", "save tax"],
    text: "Tax-saving options on our site:\n• 5-year tax-saving FDs — deduction under Section 80C up to ₹1.5 lakhs\n• Term insurance — tax benefits as per government rules\n\nFor personal tax advice, please talk to our advisors.",
    links: [
      { label: "Fixed Deposits", href: "/fixed-deposit" },
      { label: "Term insurance", href: "/insurance/term" },
    ],
  },
  {
    keywords: ["contact", "phone", "~call", "~number", "mobile", "email", "mail", "reach", "support", "customer care", "helpline"],
    text: `You can reach us at:\n📞 Phone: ${CONTACT.phone}\n☎️ Telephone: ${CONTACT.telephone}\n✉️ ${CONTACT.email}\n✉️ Customer care: ${CONTACT.careEmail}\n✉️ Grievances: ${CONTACT.grievanceEmail}`,
    links: contactLinks,
  },
  {
    keywords: ["address", "location", "office", "branch", "~where", "lucknow", "visit", "map"],
    text: `Our office: ${CONTACT.address}`,
    links: [
      { label: "Open in Google Maps", href: "https://www.google.com/maps?q=26.8894377,81.0012954&z=17&hl=en" },
      { label: "Contact form", href: "/#contact" },
    ],
  },
  {
    keywords: ["timing", "timings", "hours", "working hours", "~open", "closed", "sunday", "saturday", "~time"],
    text: `Our working hours:\n${CONTACT.hours.replace(", ", "\n")}`,
    links: contactLinks,
  },
  {
    keywords: ["whatsapp", "whats app", "chat with"],
    text: "You can chat with our team on WhatsApp.",
    links: [{ label: "Open WhatsApp", href: `https://wa.me/${CONTACT.whatsapp}` }],
  },
  {
    keywords: ["complaint", "grievance", "~problem", "~issue", "escalate"],
    text: `We're sorry for the trouble. Please write to ${CONTACT.grievanceEmail} or call ${CONTACT.phone} and our team will help you.`,
    links: [
      { label: "Email grievance", href: `mailto:${CONTACT.grievanceEmail}` },
      { label: "Call us", href: `tel:${CONTACT.phone}` },
    ],
  },
  {
    keywords: ["team", "founder", "ceo", "advisor", "advisors", "~expert", "consultation", "consult"],
    text: "Our team of 15+ expert advisors has 17+ years of experience and 25+ certifications. Book a consultation through the contact form or call us.",
    links: [
      { label: "Our team", href: "/team" },
      { label: "Contact form", href: "/#contact" },
    ],
  },
  {
    keywords: ["partner", "partners", "distributor", "arn", "hdfc", "icici", "kotak", "pnb", "aditya birla", "policy bazaar", "policybazaar"],
    text: "We are a mutual fund distributor (ARN-106148). Our distributor partners include Aditya Birla Capital, Policy Bazaar, PNB, Kotak Mutual Fund, ICICI Mutual Fund and HDFC Mutual Fund.",
  },
  {
    keywords: ["~app", "mobile app", "download", "play store", "android"],
    text: "Download the Investroute app for secure, fast transactions, live market updates and smart investment insights.",
    links: [
      { label: "Get it on Play Store", href: "https://play.google.com/store/apps/details?id=com.investroute.financial.app" },
    ],
  },
  {
    keywords: ["~safe", "secure", "~trust", "sebi", "regulated", "why choose", "why investroute", "genuine"],
    text: "Why choose Investroute:\n• Transparency — no hidden charges\n• Expert guidance & personalised service\n• Integrity and a client-first approach\n• SEBI regulated, bank-grade security\n• One-stop solution for all financial needs",
    links: [{ label: "About us", href: "/about" }],
  },
  {
    keywords: ["privacy", "~data", "personal information"],
    text: "You can read how we handle your data in our Privacy Policy.",
    links: [{ label: "Privacy Policy", href: "/privacy-policy" }],
  },
  {
    keywords: ["terms", "conditions", "terms and conditions", "policy document"],
    text: "Please see our Terms & Conditions for full details.",
    links: [{ label: "Terms & Conditions", href: "/terms-and-conditions" }],
  },
]

function normalize(text: string) {
  return ` ${text.toLowerCase().replace(/[^a-z0-9₹%\s]/g, " ").replace(/\s+/g, " ").trim()} `
}

export function findAnswer(question: string): ChatAnswer {
  const text = normalize(question)
  if (text.trim().length === 0) return FALLBACK

  let best: KnowledgeEntry | null = null
  let bestScore = 0

  for (const entry of knowledge) {
    let score = 0
    for (const keyword of entry.keywords) {
      // Short keywords must match a whole word ("hi" should not match "high"); longer ones
      // only need to match at a word start so "insurance" also matches "insurances".
      // A leading "~" marks a generic word that only counts for half, so a question needs
      // more than just "offer" or "where" to get an answer.
      const weak = keyword.startsWith("~")
      const word = weak ? keyword.slice(1) : keyword
      const pattern = word.length <= 4 ? ` ${word} ` : ` ${word}`
      if (text.includes(pattern)) {
        score += weak ? 0.5 : word.split(" ").length
      }
    }
    if (score >= 1 && score > bestScore) {
      best = entry
      bestScore = score
    }
  }

  return best ?? FALLBACK
}
