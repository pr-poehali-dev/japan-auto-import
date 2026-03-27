import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = ["Главная", "Каталог", "Услуги", "О компании", "Контакты"];

const CATALOG = [
  {
    brand: "Toyota",
    model: "Land Cruiser 300",
    year: 2023,
    price: "8 200 000",
    mileage: "12 000",
    engine: "3.5 Twin-Turbo",
    drive: "4WD",
    status: "Доступен",
    badge: "ХИТ",
    img: "https://cdn.poehali.dev/projects/cfb85d2f-e4f3-406d-831b-76c29ff635e7/files/afc4cc7e-aa41-43b0-ac22-2a7adbbecd7d.jpg",
  },
  {
    brand: "Lexus",
    model: "LX 600",
    year: 2022,
    price: "10 500 000",
    mileage: "8 500",
    engine: "3.5 V6 Twin-Turbo",
    drive: "4WD",
    status: "Доступен",
    badge: "ПРЕМИУМ",
    img: "https://cdn.poehali.dev/projects/cfb85d2f-e4f3-406d-831b-76c29ff635e7/files/689b07c4-902a-4f02-9fef-3153a26c66fe.jpg",
  },
  {
    brand: "Nissan",
    model: "Skyline GT-R",
    year: 2021,
    price: "4 900 000",
    mileage: "22 000",
    engine: "2.0 Turbo",
    drive: "AWD",
    status: "На аукционе",
    badge: "JDM",
    img: "https://cdn.poehali.dev/projects/cfb85d2f-e4f3-406d-831b-76c29ff635e7/files/d6ea054a-deb0-40ab-8cb2-5dea8213b140.jpg",
  },
  {
    brand: "Honda",
    model: "Civic Type R",
    year: 2023,
    price: "3 400 000",
    mileage: "5 000",
    engine: "2.0 Turbo",
    drive: "FWD",
    status: "Доступен",
    badge: "НОВИНКА",
    img: "https://cdn.poehali.dev/projects/cfb85d2f-e4f3-406d-831b-76c29ff635e7/files/afc4cc7e-aa41-43b0-ac22-2a7adbbecd7d.jpg",
  },
  {
    brand: "Mazda",
    model: "CX-60",
    year: 2023,
    price: "4 100 000",
    mileage: "9 200",
    engine: "2.5 Turbo",
    drive: "AWD",
    status: "Доступен",
    badge: "",
    img: "https://cdn.poehali.dev/projects/cfb85d2f-e4f3-406d-831b-76c29ff635e7/files/689b07c4-902a-4f02-9fef-3153a26c66fe.jpg",
  },
  {
    brand: "Mitsubishi",
    model: "Outlander PHEV",
    year: 2022,
    price: "3 800 000",
    mileage: "14 000",
    engine: "2.4 Hybrid",
    drive: "AWD",
    status: "На аукционе",
    badge: "ECO",
    img: "https://cdn.poehali.dev/projects/cfb85d2f-e4f3-406d-831b-76c29ff635e7/files/d6ea054a-deb0-40ab-8cb2-5dea8213b140.jpg",
  },
];

const SERVICES = [
  {
    icon: "Gavel",
    title: "Подбор на аукционе",
    desc: "Участвуем в крупнейших аукционах Японии: USS, TAA, JU, HAA. Полный доступ к 50 000+ лотам еженедельно.",
  },
  {
    icon: "Shield",
    title: "Проверка и инспекция",
    desc: "Профессиональная инспекция авто до покупки. Фото, видео, история обслуживания из японских баз данных.",
  },
  {
    icon: "Ship",
    title: "Доставка морем",
    desc: "Регулярные рейсы Япония → Владивосток → Вся Россия. Страхование груза включено в стоимость.",
  },
  {
    icon: "FileCheck",
    title: "Растаможка под ключ",
    desc: "Оформляем все документы, платим таможенные пошлины. Вы получаете авто с ПТС, готовое к постановке на учёт.",
  },
  {
    icon: "CreditCard",
    title: "Кредит и рассрочка",
    desc: "Партнёрские программы с ведущими банками. Одобрение за 24 часа, первый взнос от 10%.",
  },
  {
    icon: "Headphones",
    title: "Сопровождение 24/7",
    desc: "Персональный менеджер ведёт вашу сделку от первого звонка до получения ключей.",
  },
];

const REVIEWS = [
  {
    name: "Алексей М.",
    city: "Москва",
    car: "Toyota Land Cruiser 200",
    rating: 5,
    text: "Заказывал крузак через ребят — всё прошло чисто и в срок. Машина пришла в идеальном состоянии, без единой царапины. Менеджер отвечал даже ночью. Рекомендую!",
    date: "Февраль 2026",
  },
  {
    name: "Дмитрий К.",
    city: "Екатеринбург",
    car: "Lexus RX 500h",
    rating: 5,
    text: "Отличная компания! Взял Lexus RX, был приятно удивлён прозрачностью сделки. Все расходы расписаны заранее, никаких скрытых платежей. Уже второй раз беру через них.",
    date: "Январь 2026",
  },
  {
    name: "Сергей В.",
    city: "Новосибирск",
    car: "Nissan Patrol",
    rating: 5,
    text: "Patrol пришёл через 6 недель после аукциона. Очень доволен! Цена оказалась на 30% ниже, чем у дилеров. Буду рекомендовать всем знакомым.",
    date: "Март 2026",
  },
  {
    name: "Анна Р.",
    city: "Краснодар",
    car: "Honda Vezel",
    rating: 4,
    text: "Всё понравилось, команда профессиональная. Небольшая задержка по документам, но решили быстро. Машина супер — японское качество на высоте!",
    date: "Декабрь 2025",
  },
];

const STATS = [
  { value: "1 200+", label: "Авто доставлено" },
  { value: "8 лет", label: "На рынке" },
  { value: "97%", label: "Довольных клиентов" },
  { value: "30 дней", label: "Средний срок доставки" },
];

const STEPS = [
  { num: "01", title: "Заявка", desc: "Оставляете заявку или звоните — обсуждаем ваши пожелания и бюджет" },
  { num: "02", title: "Подбор", desc: "Находим авто на аукционах Японии, присылаем фото и историю" },
  { num: "03", title: "Покупка", desc: "Участвуем в торгах и выкупаем автомобиль по лучшей цене" },
  { num: "04", title: "Доставка", desc: "Оформляем документы, везём морем, растамаживаем в России" },
];

const BADGE_COLORS: Record<string, string> = {
  "ХИТ": "bg-orange-500 text-black",
  "ПРЕМИУМ": "bg-yellow-400 text-black",
  "JDM": "bg-red-600 text-white",
  "НОВИНКА": "bg-emerald-500 text-white",
  "ECO": "bg-green-600 text-white",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? "text-orange-400" : "text-muted-foreground"}>★</span>
      ))}
    </div>
  );
}

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviewName, setReviewName] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewSent, setReviewSent] = useState(false);

  const sectionMap: Record<string, string> = {
    "Главная": "hero",
    "Каталог": "catalog",
    "Услуги": "services",
    "О компании": "about",
    "Контакты": "contacts",
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-golos">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="font-oswald font-bold text-primary-foreground text-xs">JDM</span>
            </div>
            <span className="font-oswald font-semibold text-lg tracking-wide">
              JDM<span className="text-primary"> IMPORT</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => { setActiveSection(link); scrollTo(sectionMap[link]); }}
                className={`nav-link text-sm font-medium transition-colors ${activeSection === link ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {link}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contacts")}
            className="hidden md:flex items-center gap-2 bg-primary hover:bg-orange-500 text-primary-foreground font-semibold text-sm px-4 py-2 rounded-sm transition-all hover:scale-105"
          >
            <Icon name="Phone" size={14} />
            Получить консультацию
          </button>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-4 py-4 flex flex-col gap-4 animate-fade-in">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => { setActiveSection(link); scrollTo(sectionMap[link]); }}
                className="text-left font-medium text-muted-foreground hover:text-primary transition-colors py-1"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contacts")}
              className="bg-primary text-primary-foreground font-semibold py-2 rounded-sm mt-2"
            >
              Получить консультацию
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/cfb85d2f-e4f3-406d-831b-76c29ff635e7/files/afc4cc7e-aa41-43b0-ac22-2a7adbbecd7d.jpg"
            className="w-full h-full object-cover opacity-25"
            alt="hero car"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="absolute top-1/3 right-0 w-96 h-px bg-gradient-to-l from-transparent via-primary/40 to-transparent" />
        <div className="absolute top-1/2 right-0 w-64 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-6 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Прямые поставки из Японии
            </div>

            <h1 className="font-oswald text-5xl sm:text-6xl md:text-7xl font-bold leading-none mb-6 uppercase">
              <span className="hero-line block">Японские</span>
              <span className="hero-line block text-gradient">автомобили</span>
              <span className="hero-line block">под ключ</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-lg mb-8 animate-fade-up animate-fade-up-3">
              Подбор на аукционах Японии, проверка, доставка и растаможка. Получите идеальный автомобиль без переплат и лишних хлопот.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up animate-fade-up-4">
              <button
                onClick={() => scrollTo("catalog")}
                className="bg-primary hover:bg-orange-500 text-primary-foreground font-semibold px-8 py-3.5 rounded-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2"
              >
                <Icon name="Car" size={18} />
                Смотреть каталог
              </button>
              <button
                onClick={() => scrollTo("contacts")}
                className="border border-border hover:border-primary/50 text-foreground font-semibold px-8 py-3.5 rounded-sm transition-all hover:bg-primary/5 flex items-center gap-2"
              >
                <Icon name="Calculator" size={18} />
                Рассчитать стоимость
              </button>
            </div>

            <div className="flex flex-wrap gap-8 mt-12 animate-fade-up animate-fade-up-5">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-oswald text-2xl font-bold text-primary">{s.value}</div>
                  <div className="text-muted-foreground text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 border-t border-border/50 stripe-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Как это работает</span>
            <h2 className="font-oswald text-4xl font-bold mt-2 uppercase">4 шага до вашего авто</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative group">
                <div className="bg-card border border-border rounded-lg p-6 h-full transition-all group-hover:border-primary/40">
                  <div className="font-oswald text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors mb-4">{step.num}</div>
                  <h3 className="font-oswald text-xl font-semibold mb-2 uppercase">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-10 text-primary/30">
                    <Icon name="ChevronRight" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Каталог</span>
              <h2 className="font-oswald text-4xl font-bold mt-1 uppercase">Актуальные авто</h2>
            </div>
            <button className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Все автомобили <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATALOG.map((car, i) => (
              <div key={i} className="bg-card border border-border rounded-lg overflow-hidden card-glow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={car.img}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  {car.badge && (
                    <div className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-sm ${BADGE_COLORS[car.badge] || "bg-primary text-primary-foreground"}`}>
                      {car.badge}
                    </div>
                  )}
                  <div className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-sm ${car.status === "Доступен" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-orange-500/20 text-orange-400 border border-orange-500/30"}`}>
                    {car.status}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{car.brand}</div>
                  <h3 className="font-oswald text-xl font-semibold mb-3">
                    {car.model} <span className="text-muted-foreground font-normal">{car.year}</span>
                  </h3>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { icon: "Gauge", val: `${car.mileage} км` },
                      { icon: "Zap", val: car.engine },
                      { icon: "Layers", val: car.drive },
                    ].map((item) => (
                      <div key={item.icon} className="bg-secondary/50 rounded-sm px-2 py-1.5 text-center">
                        <Icon name={item.icon as "Gauge"} size={12} className="text-muted-foreground mx-auto mb-0.5" />
                        <div className="text-xs text-muted-foreground truncate">{item.val}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground">Цена под ключ</div>
                      <div className="font-oswald text-xl font-bold text-primary">{car.price} ₽</div>
                    </div>
                    <button className="bg-primary hover:bg-orange-500 text-primary-foreground text-sm font-semibold px-4 py-2 rounded-sm transition-all hover:scale-105">
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 border-t border-border/50 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Наши услуги</span>
            <h2 className="font-oswald text-4xl font-bold mt-2 uppercase">Всё включено</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Полный цикл от поиска до получения автомобиля. Вы платите один раз — мы делаем всё остальное.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 card-glow group">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={s.icon as "Gavel"} size={22} className="text-primary" />
                </div>
                <h3 className="font-oswald text-lg font-semibold mb-2 uppercase">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">О компании</span>
              <h2 className="font-oswald text-4xl font-bold mt-2 uppercase mb-6">Доверие 1200+ клиентов</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                С 2016 года мы помогаем россиянам приобретать лучшие японские автомобили по честным ценам. Наша команда — это опытные специалисты с глубоким знанием японского авторынка, аукционов и логистики.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Мы работаем напрямую с аукционными домами Японии без посредников, что позволяет предлагать конкурентные цены и гарантировать оригинальное состояние каждого автомобиля.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-card border border-border rounded-lg p-4">
                    <div className="font-oswald text-3xl font-bold text-primary">{s.value}</div>
                    <div className="text-muted-foreground text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden orange-glow">
                <img
                  src="https://cdn.poehali.dev/projects/cfb85d2f-e4f3-406d-831b-76c29ff635e7/files/d6ea054a-deb0-40ab-8cb2-5dea8213b140.jpg"
                  alt="Japanese auto auction"
                  className="w-full h-80 lg:h-96 object-cover animate-car"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-lg p-4 font-oswald">
                <div className="text-3xl font-bold">8</div>
                <div className="text-sm font-normal">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 border-t border-border/50 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Отзывы</span>
            <h2 className="font-oswald text-4xl font-bold mt-2 uppercase">Что говорят клиенты</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex">
                {[1,2,3,4,5].map(s => <span key={s} className="text-orange-400 text-xl">★</span>)}
              </div>
              <span className="text-foreground font-semibold">4.9</span>
              <span className="text-muted-foreground text-sm">/ 5.0 · 127 отзывов</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 card-glow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-oswald font-bold text-primary">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{r.name}</div>
                      <div className="text-muted-foreground text-xs">{r.city}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <StarRating rating={r.rating} />
                    <div className="text-muted-foreground text-xs mt-1">{r.date}</div>
                  </div>
                </div>
                <div className="text-xs text-primary font-medium mb-2 flex items-center gap-1">
                  <Icon name="Car" size={12} />
                  {r.car}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">"{r.text}"</p>
              </div>
            ))}
          </div>

          {/* Leave review form */}
          <div className="bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-oswald text-xl font-semibold mb-4 uppercase">Оставить отзыв</h3>
            {reviewSent ? (
              <div className="text-center py-6">
                <div className="text-4xl mb-3">✅</div>
                <div className="font-semibold text-lg">Спасибо за отзыв!</div>
                <div className="text-muted-foreground text-sm mt-1">Мы опубликуем его после проверки</div>
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={reviewName}
                  onChange={(e) => setReviewName(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Оценка</div>
                  <div className="flex gap-2">
                    {[1,2,3,4,5].map(s => (
                      <button
                        key={s}
                        onClick={() => setReviewRating(s)}
                        className={`text-2xl transition-transform hover:scale-110 ${s <= reviewRating ? "text-orange-400" : "text-muted-foreground"}`}
                      >★</button>
                    ))}
                  </div>
                </div>
                <textarea
                  placeholder="Ваш отзыв о нашей работе..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows={3}
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
                <button
                  onClick={() => { if (reviewName && reviewText) setReviewSent(true); }}
                  className="bg-primary hover:bg-orange-500 text-primary-foreground font-semibold px-6 py-2.5 rounded-sm transition-all hover:scale-105 text-sm"
                >
                  Отправить отзыв
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Контакты</span>
              <h2 className="font-oswald text-4xl font-bold mt-2 uppercase mb-6">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8">
                Оставьте заявку — мы перезвоним в течение 15 минут и ответим на все вопросы бесплатно.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (800) 123-45-67" },
                  { icon: "MessageCircle", label: "WhatsApp / Telegram", value: "+7 (999) 888-77-66" },
                  { icon: "Mail", label: "Email", value: "info@jdm-import.ru" },
                  { icon: "MapPin", label: "Офис", value: "Владивосток, ул. Светланская, 15" },
                ].map((c) => (
                  <div key={c.icon} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center shrink-0">
                      <Icon name={c.icon as "Phone"} size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{c.label}</div>
                      <div className="font-medium">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 lg:p-8">
              <h3 className="font-oswald text-2xl font-semibold mb-6 uppercase">Бесплатная консультация</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Какой автомобиль вас интересует?"
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Ваш бюджет"
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <textarea
                  placeholder="Дополнительные пожелания..."
                  rows={3}
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
                <button className="w-full bg-primary hover:bg-orange-500 text-primary-foreground font-semibold py-3.5 rounded-sm transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2">
                  <Icon name="Send" size={16} />
                  Отправить заявку
                </button>
                <p className="text-muted-foreground text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-8 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center">
              <span className="font-oswald font-bold text-primary-foreground text-xs">JDM</span>
            </div>
            <span className="font-oswald font-semibold">JDM IMPORT</span>
          </div>
          <div className="text-muted-foreground text-xs text-center">
            © 2026 JDM Import. Все права защищены.
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(sectionMap[link])}
                className="text-muted-foreground hover:text-primary text-xs transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
