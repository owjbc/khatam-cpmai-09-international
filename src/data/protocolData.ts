export interface CredentialItem {
  id: string;
  index: string;
  titleFa: string;
  code?: string;
  organizationFa: string;
  organizationEn: string;
  category: 'pm' | 'ai';
}

export interface ProtocolSectionItem {
  id: string;
  index: string;
  title: string;
  leadText: string;
  bullets?: string[];
  highlightNote?: string;
  category: 'hardware' | 'participants' | 'classroom' | 'hospitality' | 'legal';
  checklistLabel: string;
}

export interface ScheduleSlot {
  id: string;
  timeRange: string;
  title: string;
  description: string;
}

export const DOCUMENT_META = {
  title: 'پروتکل برگزاری بوت کمپ آموزشی CPMAI',
  organization: 'شرکت مشاوران مدیریت کسب و کار اوج',
  organizationEn: 'OWJ Business Council',
  clientProject: 'طرح پتروشیمی دماوند',
  instructorName: 'ابوالفضل جعفری اصل',
  instructorNameEn: 'Abolfazl Jafari Asl',
  instructorRole: 'مدیرعامل شرکت مشاوران مدیریت کسب و کار اوج',
  instructorDistinction:
    'اولین و تنها ایرانی دارنده تمامی گواهینامه‌های ۱۳گانه هوش مصنوعی از Cognilytica آمریکا و انستیتو مدیریت پروژه آمریکا (PMI) - (CPMAI v7) (PMI-CPMAI)',
  website: 'www.owjbc.com',
  phones: {
    tehran: '+982122757725 - 26',
    tabriz: '+984135572612 - 15',
  },
  addresses: {
    tehran: 'تهران - میدان تجریش - خیابان ولیعصر - کوچه کاشانچی',
    tabriz: 'تبریز - میدان ساعت - کوچه شهید فهیمی',
  },
};

const BASE_URL = import.meta.env.BASE_URL || './';

export const EXTRACTED_ASSETS = {
  coverFull: `${BASE_URL}assets/aistudio/Picture5_665b6fbe.jpg`,
  contactStrip: `${BASE_URL}assets/extracted/obj_19.png`,
  pageTemplateBg: `${BASE_URL}assets/extracted/obj_23.jpg`,
  instructorBanner: `${BASE_URL}assets/aistudio/Picture2_643ee570.png`,
  instructorMask: `${BASE_URL}assets/extracted/mask_25.png`,
  qrCode: `${BASE_URL}assets/extracted/obj_26.png`,
  owjLogoWhite: `${BASE_URL}assets/extracted/owj_logo_tight_white.png`,
  owjLogoNavy: `${BASE_URL}assets/extracted/owj_logo_tight_navy.png`,
  owjLogoOriginal: `${BASE_URL}assets/extracted/owj_logo_tight_white.png`,
  axelosLogo: `${BASE_URL}assets/extracted/obj_34.jpg`,
  ipmaLogo: `${BASE_URL}assets/extracted/obj_35.png`,
  pmiLogo: `${BASE_URL}assets/extracted/obj_37.jpg`,
  iranPmaLogo: `${BASE_URL}assets/extracted/obj_38.png`,
  ajaLogoWhite: `${BASE_URL}assets/extracted/aja_logo_tight_white.png`,
  ajaLogoNavy: `${BASE_URL}assets/extracted/aja_logo_tight_navy.png`,
  certPmiCpmai: `${BASE_URL}assets/aistudio/Picture3_4a00e079.png`,
  certCpmaiV7: `${BASE_URL}assets/aistudio/Picture6_5bbd6835.png`,
  copyrightShield: `${BASE_URL}assets/extracted/obj_74.jpg`,
  copyrightMask: `${BASE_URL}assets/extracted/mask_75.png`,
  backCoverMap: `${BASE_URL}assets/aistudio/Picture7_7c229ba9.jpg`,
  originalPdfUrl: `${BASE_URL}assets/aistudio/OWJbc__1__dfaa098a.pdf`,
  connectionTestPoster: `${BASE_URL}assets/aistudio/protocol-poster_22944921.png`,
};

export const CONNECTION_TEST_PROTOCOL = {
  kicker: 'پروتکل شروع دوره',
  headline: 'قبل از کلاس، اتصالت را تست کن',
  subheadline:
    'بیشتر ابزارهای هوش مصنوعی این دوره به تحریم‌شکن معتبر نیاز دارند. ۲ دقیقه وقت بگذار تا از دقیقه‌ی اول با ما هم‌قدم باشی.',
  steps: [
    {
      num: '۱',
      title: 'تحریم‌شکن',
      description: 'یک تحریم‌شکن مطمئن روی دستگاهت نصب و روشن کن.',
    },
    {
      num: '۲',
      title: 'سایت تست',
      description: 'آدرس زیر را باز کن یا QR کد را با گوشی اسکن کن.',
    },
    {
      num: '۳',
      title: 'تست کامل',
      description: 'با ایمیل وارد شو و یک پیام در چت بفرست.',
    },
  ],
  ctaTitle: 'اسکن کن و تست بگیر',
  testUrl: 'gemini.google.com',
  testUrlFull: 'https://gemini.google.com',
  checkItems: [
    'با ایمیلت وارد شو',
    'یک پیام در چت بفرست',
    'جواب گرفتی؟ آماده‌ای!',
  ],
  footerNote:
    'این تست را پیش از شروع دوره انجام بده؛ وقت کلاس برای یادگیری است، نه عیب‌یابی اتصال.',
  badgeText: 'تست شد؟ یک ✅ بفرست',
};

export const EXECUTIVE_LETTER = {
  invocation: 'بسمه تعالی',
  body: 'کارفرمای محترم پروتکل پیوست جهت برگزاری اثربخش سلسله کارگاه‌های آموزشی تربیت متخصص حرفه‌ای راهبری هوش مصنوعی (CPMAI) در آن مجموعه معظم توسط شرکت مشاوران مدیریت کسب و کار اوج آماده‌سازی و تهیه گردیده است. خواهشمند است دستور فرمایید بندهای آن بصورت کامل توسط واحد مجری و ناظر کارگاه‌های آموزشی و جلسات مشاوره‌ای اجرایی گردد. امید است خدمات ثمربخشی را برای آن مجموعه ارائه نموده و در راستای تعالی اهداف والای آن مجموعه تمام تلاش خود را به کارگیریم.',
  signOff: 'با تشکر',
  department: 'دپارتمان کوچینگ',
  company: 'شرکت مشاوران مدیریت کسب و کار اوج',
};

export const PM_CREDENTIALS: CredentialItem[] = [
  {
    id: 'pm-1',
    index: '01',
    titleFa: 'دارای مدرک مدیریت پروژه حرفه‌ای (PMP) از موسسه مدیریت پروژه (PMI) آمریکا',
    code: 'PMP',
    organizationFa: 'موسسه مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'pm',
  },
  {
    id: 'pm-2',
    index: '02',
    titleFa: 'دارای مدرک مدیریت حرفه‌ای پروژه‌های چابک (PMI-ACP) از انستیتو مدیریت پروژه آمریکا',
    code: 'PMI-ACP',
    organizationFa: 'انستیتو مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'pm',
  },
  {
    id: 'pm-3',
    index: '03',
    titleFa: 'دارای مدرک حرفه‌ای دفاتر مدیریت پروژه (PMOCP) از موسسه مدیریت پروژه (PMI) آمریکا',
    code: 'PMOCP',
    organizationFa: 'موسسه مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'pm',
  },
  {
    id: 'pm-4',
    index: '04',
    titleFa: 'دارای مدرک مدیریت پروژه PRINCE2 Practitioner 2017 از موسسه AXELOS انگلستان',
    code: 'PRINCE2 Practitioner',
    organizationFa: 'موسسه AXELOS انگلستان',
    organizationEn: 'AXELOS UK',
    category: 'pm',
  },
  {
    id: 'pm-5',
    index: '05',
    titleFa: 'دارای مدرک تحلیل‌گر حرفه‌ای کسب و کار (PMI-PBA) از موسسه مدیریت پروژه (PMI) آمریکا',
    code: 'PMI-PBA',
    organizationFa: 'موسسه مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'pm',
  },
  {
    id: 'pm-6',
    index: '06',
    titleFa: 'دارای مدرک مدیریت ریسک حرفه‌ای (PMI-RMP) از موسسه مدیریت پروژه (PMI) آمریکا',
    code: 'PMI-RMP',
    organizationFa: 'موسسه مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'pm',
  },
  {
    id: 'pm-7',
    index: '07',
    titleFa: 'دارای مدرک مدیریت زمان‌بندی حرفه‌ای (PMI-SP) از موسسه مدیریت پروژه (PMI) آمریکا',
    code: 'PMI-SP',
    organizationFa: 'موسسه مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'pm',
  },
  {
    id: 'pm-8',
    index: '08',
    titleFa: 'دارای گواهینامه حرفه‌ای مدیریت پروژه (IPMA) از انجمن مدیریت پروژه جهانی (IPMA) اروپا',
    code: 'IPMA',
    organizationFa: 'انجمن مدیریت پروژه جهانی اروپا',
    organizationEn: 'IPMA Europe',
    category: 'pm',
  },
  {
    id: 'pm-9',
    index: '09',
    titleFa: 'همکار آموزشی و مدرس تائید صلاحیت شده انجمن مدیریت پروژه ایران (IranPMA)',
    code: 'IranPMA',
    organizationFa: 'انجمن مدیریت پروژه ایران',
    organizationEn: 'IranPMA',
    category: 'pm',
  },
  {
    id: 'pm-10',
    index: '10',
    titleFa: 'دانشجوی دکتری مهندسی صنایع - دانشگاه تهران',
    code: 'Ph.D. Candidate',
    organizationFa: 'دانشگاه تهران',
    organizationEn: 'University of Tehran',
    category: 'pm',
  },
];

export const AI_CREDENTIALS_13: CredentialItem[] = [
  {
    id: 'ai-1',
    index: '01',
    titleFa: 'متخصص حرفه‌ای راهبری و مدیریت هوش مصنوعی از انستیتو مدیریت پروژه آمریکا (PMI-CPMAI)',
    code: 'PMI-CPMAI',
    organizationFa: 'انستیتو مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'ai',
  },
  {
    id: 'ai-2',
    index: '02',
    titleFa: 'متخصص حرفه‌ای مدیریت پروژه شناختی در پروژه‌های هوش مصنوعی از انستیتو مدیریت پروژه آمریکا (CPMAIv7)',
    code: 'CPMAI v7',
    organizationFa: 'انستیتو مدیریت پروژه آمریکا و Cognilytica',
    organizationEn: 'PMI & Cognilytica',
    category: 'ai',
  },
  {
    id: 'ai-3',
    index: '03',
    titleFa: 'دارای گواهی پایان دوره راهبری و مدیریت هوش مصنوعی از سوی انستیتو مدیریت پروژه آمریکا (PMI-CPMAI)',
    code: 'PMI-CPMAI Course',
    organizationFa: 'انستیتو مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'ai',
  },
  {
    id: 'ai-4',
    index: '04',
    titleFa: 'دارای گواهی پایان دوره مدیریت پروژه شناختی در پروژه‌های هوش مصنوعی از سوی انستیتو مدیریت پروژه آمریکا (CPMAIv7)',
    code: 'CPMAI v7 Course',
    organizationFa: 'انستیتو مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'ai',
  },
  {
    id: 'ai-5',
    index: '05',
    titleFa: 'دارای گواهینامه کاربرد عملی هوش مصنوعی در مدیریت پروژه‌های چابک از انستیتو مدیریت پروژه آمریکا',
    code: 'AI in Agile PM',
    organizationFa: 'انستیتو مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'ai',
  },
  {
    id: 'ai-6',
    index: '06',
    titleFa: 'دارای گواهینامه ملزومات هوش مصنوعی برای متخصصین حرفه‌ای پروژه از انستیتو مدیریت پروژه آمریکا',
    code: 'AI Essentials',
    organizationFa: 'انستیتو مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'ai',
  },
  {
    id: 'ai-7',
    index: '07',
    titleFa: 'دارای گواهینامه متخصص حرفه‌ای هفت الگوی پروژه‌های هوش مصنوعی از انستیتو مدیریت پروژه آمریکا',
    code: 'Seven Patterns of AI',
    organizationFa: 'انستیتو مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'ai',
  },
  {
    id: 'ai-8',
    index: '08',
    titleFa: 'دارای گواهینامه هوش مصنوعی در پروژه‌های زیرساختی و صنعت ساخت از انستیتو مدیریت پروژه آمریکا',
    code: 'AI in Infrastructure & Construction',
    organizationFa: 'انستیتو مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'ai',
  },
  {
    id: 'ai-9',
    index: '09',
    titleFa: 'دارای گواهینامه چشم‌انداز داده‌ای هوش مصنوعی مولد برای مدیران پروژه از انستیتو مدیریت پروژه آمریکا',
    code: 'Data Landscape of GenAI',
    organizationFa: 'انستیتو مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'ai',
  },
  {
    id: 'ai-10',
    index: '10',
    titleFa: 'دارای گواهینامه مروری جامع بر هوش مصنوعی مولد برای مدیران پروژه از انستیتو مدیریت پروژه آمریکا',
    code: 'Generative AI Overview',
    organizationFa: 'انستیتو مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'ai',
  },
  {
    id: 'ai-11',
    index: '11',
    titleFa: 'دارای گواهی پایان دوره مقدمه‌ای بر مدیریت پروژه شناختی در پروژه‌های هوش مصنوعی از انستیتو مدیریت پروژه آمریکا',
    code: 'Intro to CPMAI',
    organizationFa: 'انستیتو مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'ai',
  },
  {
    id: 'ai-12',
    index: '12',
    titleFa: 'دارای گواهینامه کاربردهای عملی هوش مصنوعی مولد برای مدیران پروژه از انستیتو مدیریت پروژه آمریکا',
    code: 'Practical GenAI',
    organizationFa: 'انستیتو مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'ai',
  },
  {
    id: 'ai-13',
    index: '13',
    titleFa: 'دارای گواهینامه مهندسی پرامپت برای مدیران پروژه از انستیتو مدیریت پروژه آمریکا',
    code: 'Prompt Engineering for PMs',
    organizationFa: 'انستیتو مدیریت پروژه آمریکا',
    organizationEn: 'PMI USA',
    category: 'ai',
  },
];

export const OFFICIAL_CERTIFICATES = [
  {
    id: 'cert-cpmai-v7',
    titleEn: 'Cognitive Project Management in AI (CPMAI v7)',
    titleFa: 'گواهینامه رسمی مدیریت پروژه شناختی در هوش مصنوعی (CPMAI v7)',
    recipient: 'Abolfazl Jafari Asl',
    issuer: 'Project Management Institute (PMI)',
    certNumber: '4212856',
    grantDate: '08 October 2025',
    expirationDate: 'Lifetime / Active',
    image: EXTRACTED_ASSETS.certCpmaiV7,
  },
  {
    id: 'cert-pmi-cpmai',
    titleEn: 'PMI Certified Professional in Managing AI (PMI-CPMAI)™',
    titleFa: 'گواهینامه متخصص حرفه‌ای راهبری و مدیریت هوش مصنوعی (PMI-CPMAI)™',
    recipient: 'Abolfazl Jafari Asl',
    issuer: 'Project Management Institute (PMI)',
    certNumber: '4212889',
    grantDate: '08 October 2025',
    expirationDate: '08 October 2028',
    image: EXTRACTED_ASSETS.certPmiCpmai,
  },
];

export const PROTOCOL_INTRO =
  'این پروتکل به منظور آماده‌سازی سالن برگزاری دوره آموزشی پیش‌رو و نیز آمادگی حداکثری شرکت‌کنندگان تدوین شده است. خواهشمند است نسبت به رعایت دقیق موارد ذیل دستور و اقدام لازم را مبذول فرمایید.';

export const PROTOCOL_CLAUSES: ProtocolSectionItem[] = [
  {
    id: 'clause-laptop',
    index: '01',
    title: 'لپ‌تاپ مدرس و تجهیزات تصویری سالن',
    leadText:
      'لپ‌تاپ مدرس از نوع MacBook Pro می‌باشد؛ لذا ضروری است واحد فناوری اطلاعات تنظیمات پروژکتورها را متناسب با این دستگاه انجام دهند. همچنین ضروری است اتصال سیستم‌های تصویری سالن از طریق درگاه HDMI نسخه ۲ یا ۳ فراهم گردد.',
    category: 'hardware',
    checklistLabel: 'تنظیم پروژکتور برای MacBook Pro و تست درگاه HDMI نسخه ۲ یا ۳',
  },
  {
    id: 'clause-system-specs',
    index: '02',
    title: 'مشخصات سیستم شخصی مورد نیاز برای شرکت‌کنندگان در بوت کمپ',
    leadText:
      'پیشنهاد می‌شود شرکت‌کنندگان در بوت کمپ جامع CPMAI اوج؛ در تمام جلسات سیستم (ترجیحاً لپ‌تاپ) با حداقل مشخصات ذیل جهت انجام تمرینات همراه داشته باشند:',
    bullets: [
      'رم: حداقل ۸ گیگ (۱۶ گیگ پیشنهاد می‌شود)',
      'حافظه: ۲۰ گیگ فضای خالی',
      'اینترنت پایدار',
      'سیستم‌عامل: ویندوز ده یا یازده، مک یا لینوکس',
      'کارت گرافیک جدا لازم نیست (گرافیک داخلی کافی است)',
    ],
    highlightNote:
      '* توجه: پیشنهاد می‌شود افراد در تمام جلسات به صورت فردی سیستم با حداقل مشخصات فوق (ترجیحاً لپ‌تاپ) به همراه داشته باشند، در غیر اینصورت، ضروریست سرگروه‌ها در هر گروه حداقل از وجود یک لپ‌تاپ در گروه اطمینان حاصل نمایند.',
    category: 'participants',
    checklistLabel: 'اطلاع‌رسانی مشخصات لپ‌تاپ شرکت‌کنندگان و تامین اینترنت پایدار سالن',
  },
  {
    id: 'clause-whiteboard',
    index: '03',
    title: 'وایت‌برد و ماژیک‌های چهاررنگ',
    leadText:
      'وایت‌برد با ابعاد ۱×۲ متر، ترجیحاً دوطرفه، برای سالن در نظر گرفته شود. همچنین ماژیک وایت‌برد در چهار رنگ آبی، قرمز، سبز و مشکی تهیه شده و پیش از کلاس از سالم بودن آن‌ها اطمینان حاصل گردد.',
    category: 'classroom',
    checklistLabel: 'استقرار وایت‌برد ۱×۲ متر (ترجیحاً دوطرفه) و تست ماژیک‌های ۴ رنگ',
  },
  {
    id: 'clause-packs',
    index: '04',
    title: 'پک‌های آموزشی شرکت‌کنندگان',
    leadText:
      'در روز برگزاری دوره، پک‌های ارائه‌شده بر روی میز هر یک از شرکت‌کنندگان قرار داده شود.',
    category: 'classroom',
    checklistLabel: 'چیدمان پک‌های آموزشی بر روی میز تک‌تک شرکت‌کنندگان پیش از شروع',
  },
  {
    id: 'clause-water',
    index: '05',
    title: 'تأمین آب معدنی حاضران و مدرس',
    leadText:
      'برای تمامی حاضران و نیز مدرس، آب معدنی تأمین گردد (تاکیداً برای مدرس، حداقل ۴ بطری آب معدنی ولرم در نظر گرفته شود).',
    category: 'hospitality',
    checklistLabel: 'تأمین آب معدنی حاضران و حداقل ۴ بطری آب معدنی ولرم برای مدرس',
  },
  {
    id: 'clause-catering',
    index: '06',
    title: 'پذیرایی و زمان‌بندی استاندارد بوت‌کمپ',
    leadText:
      'در صورت نیاز، پذیرایی شامل آب‌جوش، نسکافه و چای برای حاضران فراهم شود. خواهشمند است از قرار دادن هرگونه خوراکی بسته‌بندی‌شده در سالن خودداری شده و پذیرایی صرفاً در زمان استراحت و به شکلی مناسب انجام پذیرد.',
    bullets: [
      'صبحانه از ساعت ۶:۳۰ الی ۷:۱۵',
      'شروع کلاس راس ساعت ۷:۳۰',
      'نماز و ناهار از ساعت ۱۲:۰۰ الی ۱۳:۰۰',
      'اتمام کلاس ساعت ۱۷:۰۰',
    ],
    category: 'hospitality',
    checklistLabel: 'هماهنگی زمان‌بندی پذیرایی (صرفاً در زمان استراحت و بدون خوراکی بسته‌بندی در سالن)',
  },
  {
    id: 'clause-ip',
    index: '07',
    title: 'حفظ حقوق مالکیت معنوی',
    leadText:
      'به منظور حفظ حقوق مالکیت معنوی متعلق به شرکت اوج، ضروری است در فرآیند آماده‌سازی سالن و تجهیزات مورد استفاده، کلیه الزامات و تمهیدات لازم جهت صیانت از محتوای آموزشی و سایر دارایی‌های فکری متعلق به شرکت مشاوران مدیریت کسب و کار اوج و مدرسین متبوع آن رعایت و اجرا گردد.',
    highlightNote:
      '* توجه: خواهشمند است، از هرگونه ضبط صدای مدرسین در طول برگزاری دوره اکیداً خودداری شود.',
    category: 'legal',
    checklistLabel: 'ابلاغ ممنوعیت اکید ضبط صدای مدرسین و صیانت از محتوای آموزشی',
  },
  {
    id: 'clause-media',
    index: '08',
    title: 'مستندسازی بصری جلسه نخست',
    leadText:
      'لطفاً هماهنگی‌های لازم با واحد روابط عمومی به منظور فیلم‌برداری و عکاسی از جلسه نخست صورت پذیرد.',
    category: 'legal',
    checklistLabel: 'هماهنگی با واحد روابط عمومی جهت فیلم‌برداری و عکاسی از جلسه نخست',
  },
  {
    id: 'clause-connection-test',
    index: '09',
    title: 'پروتکل شروع دوره: تست اتصال و ابزارهای هوش مصنوعی پیش از کلاس',
    leadText:
      'بیشتر ابزارهای هوش مصنوعی این دوره به تحریم‌شکن معتبر نیاز دارند. ضروری است شرکت‌کنندگان پیش از شروع دوره در ۳ گام (۱. نصب و روشن کردن تحریم‌شکن مطمئن، ۲. باز کردن آدرس gemini.google.com یا اسکن QR کد، ۳. ورود با ایمیل و ارسال یک پیام تست در چت) از برقراری کامل اتصال خود اطمینان حاصل نمایند.',
    bullets: [
      'گام ۱ (تحریم‌شکن): نصب و روشن کردن تحریم‌شکن مطمئن روی دستگاه',
      'گام ۲ (سایت تست): باز کردن gemini.google.com یا اسکن QR کد پوستر',
      'گام ۳ (تست کامل): ورود با ایمیل، ارسال پیام در چت و دریافت پاسخ',
    ],
    highlightNote:
      '* تاکید: این تست را پیش از شروع دوره انجام دهید؛ وقت کلاس برای یادگیری است، نه عیب‌یابی اتصال. (تست شد؟ یک ✅ بفرست)',
    category: 'participants',
    checklistLabel: 'ارسال پوستر «تست اتصال پیش از کلاس (gemini.google.com)» به شرکت‌کنندگان و دریافت تاییدیه ✅',
  },
];

export const DAILY_SCHEDULE: ScheduleSlot[] = [
  {
    id: 'slot-1',
    timeRange: '۰۶:۳۰ — ۰۷:۱۵',
    title: 'صرف صبحانه و پذیرش اولیه',
    description: 'پذیرایی صبحانه حاضران پیش از ورود به سالن اصلی آموزشی',
  },
  {
    id: 'slot-2',
    timeRange: '۰۷:۳۰ — ۱۲:۰۰',
    title: 'شروع رسمی کلاس و کارگاه نوبت صبح',
    description: 'آغاز راس ساعت ۷:۳۰؛ تدریس مفاهیم CPMAI و انجام تمرینات گروهی بر روی لپ‌تاپ',
  },
  {
    id: 'slot-3',
    timeRange: '۱۲:۰۰ — ۱۳:۰۰',
    title: 'فریضه نماز، ناهار و استراحت میانی',
    description: 'یک ساعت تنفس ظهرگاهی جهت اقامه نماز و صرف ناهار',
  },
  {
    id: 'slot-4',
    timeRange: '۱۳:۰۰ — ۱۷:۰۰',
    title: 'کارگاه عملی نوبت عصر و اتمام کلاس',
    description: 'ادامه مباحث تخصصی، کارگاه‌های عملی و جمع‌بندی روزانه راس ساعت ۱۷:۰۰',
  },
];

export const CONFIDENTIALITY_STATEMENT = {
  body: 'با احترام، به استحضار می‌رساند، تمام حقوق مادی و معنوی این فایل متعلق به "شرکت مشاوران مدیریت کسب و کار اوج" می‌باشد و منحصراً جهت بررسی در آن شرکت/سازمان محترم تهیه شده است و مشمول قوانین حفظ محتوای اختصاصی می‌باشد. خواهشمند است، از اشتراک‌گذاری یا واگذاری آن به دیگران خودداری فرمایید.',
  closing: 'پیشاپیش از حسن توجه شما در حفظ و عدم افشای محتوای این سند سپاسگزاریم.',
};
