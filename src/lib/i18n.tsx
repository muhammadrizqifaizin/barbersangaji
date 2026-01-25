import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'en' | 'id'

type I18nContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
  isSwitching: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations: Record<Lang, Record<string, string>> = {
  en: {
    'brand.name': 'Barber Sangaji',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.service': 'Service',
    'nav.pages': 'Pages',
    'nav.appointment': 'Appointment',
    'nav.pricing': 'Pricing Plan',
    'nav.team': 'Our Barber',
    'nav.open': 'Working Hours',
    'nav.testimonial': 'Testimonial',
    'nav.content': 'Content',
    'nav.contact': 'Contact',
    'nav.admin_login': 'Admin Login',
    
    // Home & General
    'btn.read_more': 'Read More',
    'btn.book_now': 'Book Now',
    'btn.signup': 'SignUp',
    'btn.learn_more': 'Learn More',

    'home.exp.years': '5 Years',
    'home.exp.title': 'Experience',
    'home.about.title': 'About Us',
    'home.about.heading': 'More Than Just A Haircut. Learn More About Us!',
    'home.about.desc1': 'Welcome to Barber Sangaji! We are a barbershop that prioritizes quality and detail in every haircut. With flexible on-call services, we are here to fulfill your grooming needs wherever and whenever. Our team of professional barbers are equipped with adequate skills and experience, so that every cut is not just a style, but also a work of art.',
    'home.about.desc2': 'At Barber Sangaji, we believe that a neat and well-groomed appearance can boost your confidence. We are committed to providing a satisfying and personalized cutting experience, making every visit memorable. Join us and experience the difference in service and quality of cuts we offer!',
    'home.about.since': 'Since 2018',
    'home.about.since_desc': '2018 began to hold a clipper and continue to hone skills for a trendy and attractive cut in all circles, until at school time there was unrest in the regulations that required short cuts, and Barber Sangaji appeared to overcome the students who were subjected to hair raids, we overcame with short cuts but still attractive because of the detailed haircuts that we provide to increase self-confidence.',
    'home.about.clients': '101+ clients',
    'home.about.clients_desc': 'Customers ranging from school children to adults who want to tidy up their hair to look attractive and fresh.',
    
    'home.service.title': 'Services',
    'home.service.heading': 'What We Provide',
    'home.service.haircut': 'Haircut',
    'home.service.haircut_desc': 'Various haircut models are ready for us to serve wholeheartedly',
    'home.service.beard_trim': 'Beard Trim',
    'home.service.beard_trim_desc': 'At Barber Sangaji, our Beard Trim service trims and shapes your beard with great precision.',
    'home.service.hair_dyeing': 'Hair Dyeing',
    'home.service.hair_dyeing_desc': 'We have two hair colors, highlighting and full coloring.',
    'home.service.mustache': 'Mustache',
    'home.service.mustache_desc': 'Trim and shape your moustache with high precision, ensuring your moustache looks neat and stylish.',
    'home.service.from': 'From',
    
    'home.price.title': 'Price & Plan',
    'home.price.heading': 'Check Out Our Barber Services And Prices',
    
    'home.team.title': 'Our Barber',
    'home.team.heading': 'Meet Our Barber',
    
    'home.open.title': 'Working Hours',
    'home.open.heading': 'Professional Barbers Are Waiting For You',
    'home.open.mon': 'Monday',
    'home.open.tue': 'Tuesday',
    'home.open.wed': 'Wednesday',
    'home.open.thu': 'Thursday',
    'home.open.fri': 'Friday',
    'home.open.sat': 'Saturday',
    'home.open.sun': 'Sunday',
    'home.open.closed_msg': "when time doesn't allow for opening",
    'home.open.closed': 'Will Closed',

    // Footer
    'footer.touch': 'Get In Touch',
    'footer.links': 'Quick Links',
    'footer.newsletter': 'Newsletter',
    'footer.email_placeholder': 'Your email',
    'footer.copyright': 'All Right Reserved.',
    'footer.designed': 'Designed By',
    'footer.terms': 'Terms & Condition',
    'footer.support': 'Support',
    'footer.our_services': 'Our Services',

    // Pages Headers
    'page.about': 'About',
    'page.service': 'Service',
    'page.pricing': 'Pricing Plan',
    'page.team': 'Our Barber',
    'page.open': 'Working Hours',
    'page.testimonial': 'Testimonial',
    'page.contact': 'Contact',
    'page.content': 'Content',
    
    'testimonial.title': 'Testimonial',
    'testimonial.heading': 'What Our Clients Say!',
    'testimonial.item1.role': 'student',
    'testimonial.item1.text': 'A neat and shapely cut, like a professional haircut at an affordable price!',
    'testimonial.item2.role': 'student',
    'testimonial.item2.text': 'Good service, good man, and neat haircut. Suitable for haircut subscription',
    'testimonial.item3.role': 'teacher',
    'testimonial.item3.text': 'Recommended. Top service',
    
    'contact.title': 'Contact Us',
    'contact.heading': 'Have Any Query? Please Contact Us!',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.inactive': 'The contact form is currently inactive.',

    // Booking
    'booking.details': 'Booking Details',
    'booking.service': 'Service',
    'booking.barber': 'Barber',
    'booking.location': 'Location',
    'booking.date_time': 'Date & Time',
    'booking.total_price': 'Total Price',
    'booking.your_choice': 'Your Choice',
    'booking.duration': 'Duration',
    'booking.no_reviews': 'No reviews yet',
    'booking.free': 'FREE',
    'booking.choose': 'Choose',
    'booking.extras_available': 'Extras Available',
    'booking.continue': 'Continue',
    'booking.choose_time': 'Choose Time',
    'booking.morning': 'Morning',
    'booking.afternoon': 'Afternoon',
    // Tabs
    'booking.tab.choose_extras': 'Choose Extras',
    'booking.tab.choose_barber': 'Choose Barber',
    'booking.tab.choose_location': 'Choose Location',
    'booking.tab.choose_datetime': 'Choose Datetime',
    'booking.tab.customer_info': 'Customer Info',

    'extra.highlight': '(Hair Dyeing) Highlight',
    'extra.full_color': '(Hair Dyeing) Full Colouring',
    'barber.desc.mrz': 'With 8 years of experience, Mr.z specializes in classic and modern cuts. His precision and expertise make every customer satisfied and confident.',
    'barber.desc.arif': 'Arif focuses on mens hair and beards, giving recommendations according to face shape. His styling skills keep customers looking on point.',
    'barber.desc.karol': 'Karol proficient in modern coloring and styling techniques. She keeps up with the latest trends and helps customers look bold with stunning results.',

    // Location
    'location.distance': 'Distance in kilometers',
    'location.km': 'Kilometer',
    'location.not_found': 'Location not found.',
    'location.walkthrough': 'Walkthrough',
    'location.allow': 'Allow location',
    'location.office': 'Barber Sangaji Office',
    'location.your_location': 'Your Location',
    'location.step1': "In Chrome, click the menu button and then 'Settings' (or just visit 'chrome://settings/').",
    'location.step2': "In Settings, start typing 'clear browsing data' into the search bar and select 'Clear browsing data' under 'Privacy and Security' when it appears.",
    'location.step3': "In the 'Clear Browsing Data' pop-up, click on the 'Advanced' tab.",
    'location.step4': "Set time range to 'Last hour' (or longer depending on when you think Chrome began to block geolocation).",
    'location.step5': "Check the 'Hosted app data' checkbox (it should be at the bottom of the list), and deselect all of the other checkboxes.",
    'location.step6': "Click 'Clear Data'.",
    'location.step7': "Go back to the page which is trying to request geolocation. The geolocation permission dialogue should appear next time you attempt to trigger it.",

    // Customer Info
    'customer.name': 'Name',
    'customer.email': 'Email',
    'customer.phone': 'Phone Number',
    'customer.allergies': 'Allergies',
    'customer.save': 'Save your information',
    'customer.book_now': 'Booking Now',
    'customer.placeholder.name': 'Enter your name',
    'customer.placeholder.email': 'Enter your email',
    'customer.placeholder.phone': 'Example: 089262570335',
    'customer.placeholder.allergies': 'Your allergies',
    'customer.error.phone_number': 'Phone numbers can only contain numbers.',
    'customer.error.required': 'All fields are required!',
    'customer.error.phone_invalid': 'Incorrect number',
    // Carousel / Hero
    'hero.slide1.title': 'You Call Me And I Will Come',
    'hero.slide2.title': 'Premium Haircut at Affordable Price',
    'hero.location': 'Yogyakarta City Special Region of Yogyakarta',
    'hero.prev': 'Previous',
    'hero.next': 'Next',
    // Content Page
    'content.header': 'Content Barber Sangaji',
    'content.video_heading': 'Video of Barber Sangaji results',
    'content.photo_heading': 'Photo of the result of Barber Sangaji',
    'content.back_to_process': 'Back to the process',
    'content.designation': 'Designation',
    'content.browser_no_video': 'Your browser does not support the video tag.',
    // Not Found
    'notfound.header': '404 Error',
    'notfound.title': 'Page Not Found',
    'notfound.desc': "We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?",
    'notfound.back_home': 'Go Back To Home',
  },
  id: {
    'brand.name': 'Barber Sangaji',
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.service': 'Layanan',
    'nav.pages': 'Halaman',
    'nav.appointment': 'Janji Temu',
    'nav.pricing': 'Paket Harga',
    'nav.team': 'Barber Kami',
    'nav.open': 'Jam Buka',
    'nav.testimonial': 'Testimoni',
    'nav.content': 'Konten',
    'nav.contact': 'Kontak',
    'nav.admin_login': 'Login Admin',

    // Home & General
    'btn.read_more': 'Baca Selengkapnya',
    'btn.book_now': 'Booking Sekarang',
    'btn.signup': 'Daftar',
    'btn.learn_more': 'Pelajari Lebih Lanjut',

    'home.exp.years': '5 Tahun',
    'home.exp.title': 'Pengalaman',
    'home.about.title': 'Tentang Kami',
    'home.about.heading': 'Lebih Dari Sekadar Potong Rambut. Pelajari Lebih Lanjut Tentang Kami!',
    'home.about.desc1': 'Selamat datang di Barber Sangaji! Kami adalah barbershop yang mengutamakan kualitas dan detail dalam setiap potongan rambut. Dengan layanan panggilan fleksibel, kami hadir untuk memenuhi kebutuhan penampilan Anda kapan saja dan di mana saja. Tim barber profesional kami dilengkapi dengan keterampilan dan pengalaman memadai, sehingga setiap potongan bukan hanya sekadar gaya, tetapi juga karya seni.',
    'home.about.desc2': 'Di Barber Sangaji, kami percaya bahwa penampilan yang rapi dan terawat dapat meningkatkan kepercayaan diri Anda. Kami berkomitmen memberikan pengalaman potong rambut yang memuaskan dan personal, membuat setiap kunjungan berkesan. Bergabunglah bersama kami dan rasakan perbedaan layanan serta kualitas potongan yang kami tawarkan!',
    'home.about.since': 'Sejak 2018',
    'home.about.since_desc': '2018 mulai memegang clipper dan terus mengasah kemampuan untuk potongan trendi dan menarik di semua kalangan, hingga saat sekolah ada keresahan aturan yang mengharuskan potongan pendek, dan Barber Sangaji muncul mengatasi siswa yang terkena razia rambut, kami atasi dengan potongan pendek namun tetap menarik karena detail potongan rambut yang kami berikan untuk meningkatkan kepercayaan diri.',
    'home.about.clients': '101+ klien',
    'home.about.clients_desc': 'Pelanggan mulai dari anak sekolah hingga dewasa yang ingin merapikan rambut agar terlihat menarik dan segar.',
    
    'home.service.title': 'Layanan',
    'home.service.heading': 'Apa Yang Kami Sediakan',
    'home.service.haircut': 'Potong Rambut',
    'home.service.haircut_desc': 'Berbagai model potongan rambut siap kami layani dengan sepenuh hati',
    'home.service.beard_trim': 'Cukur Jenggot',
    'home.service.beard_trim_desc': 'Di Barber Sangaji, layanan Cukur Jenggot kami merapikan dan membentuk jenggot Anda dengan presisi tinggi.',
    'home.service.hair_dyeing': 'Pewarnaan Rambut',
    'home.service.hair_dyeing_desc': 'Kami memiliki dua warna rambut, highlight dan pewarnaan penuh.',
    'home.service.mustache': 'Kumis',
    'home.service.mustache_desc': 'Rapikan dan bentuk kumis Anda dengan presisi tinggi, memastikan kumis Anda terlihat rapi dan bergaya.',
    'home.service.from': 'Mulai',
    
    'home.price.title': 'Harga & Paket',
    'home.price.heading': 'Cek Layanan dan Harga Barber Kami',
    
    'home.team.title': 'Barber Kami',
    'home.team.heading': 'Temui Barber Kami',
    
    'home.open.title': 'Jam Buka',
    'home.open.heading': 'Barber Profesional Menunggu Anda',
    'home.open.mon': 'Senin',
    'home.open.tue': 'Selasa',
    'home.open.wed': 'Rabu',
    'home.open.thu': 'Kamis',
    'home.open.fri': 'Jumat',
    'home.open.sat': 'Sabtu',
    'home.open.sun': 'Minggu',
    'home.open.closed_msg': "ketika waktu tidak memungkinkan untuk buka",
    'home.open.closed': 'Akan Tutup',

    // Footer
    'footer.touch': 'Hubungi Kami',
    'footer.links': 'Tautan Cepat',
    'footer.newsletter': 'Buletin',
    'footer.email_placeholder': 'Email Anda',
    'footer.copyright': 'Hak Cipta Dilindungi.',
    'footer.designed': 'Didesain Oleh',
    'footer.terms': 'Syarat & Ketentuan',
    'footer.support': 'Dukungan',
    'footer.our_services': 'Layanan Kami',

    // Pages Headers
    'page.about': 'Tentang',
    'page.service': 'Layanan',
    'page.pricing': 'Paket Harga',
    'page.team': 'Barber Kami',
    'page.open': 'Jam Buka',
    'page.testimonial': 'Testimoni',
    'page.contact': 'Kontak',
    'page.content': 'Konten',
    
    'testimonial.title': 'Testimoni',
    'testimonial.heading': 'Apa Kata Klien Kami!',
    'testimonial.item1.role': 'pelajar',
    'testimonial.item1.text': 'Potongan rapi dan proporsional, seperti barbershop profesional dengan harga terjangkau!',
    'testimonial.item2.role': 'pelajar',
    'testimonial.item2.text': 'Pelayanan bagus, orangnya ramah, dan potongan rapi. Cocok untuk langganan potong rambut',
    'testimonial.item3.role': 'guru',
    'testimonial.item3.text': 'Rekomendasi. Pelayanan mantap',
    
    'contact.title': 'Hubungi Kami',
    'contact.heading': 'Punya Pertanyaan? Silakan Hubungi Kami!',
    'contact.name': 'Nama Anda',
    'contact.email': 'Email Anda',
    'contact.subject': 'Subjek',
    'contact.message': 'Pesan',
    'contact.send': 'Kirim Pesan',
    'contact.inactive': 'Form kontak saat ini tidak aktif.',

    // Booking
    'booking.details': 'Detail Pesanan',
    'booking.service': 'Layanan',
    'booking.barber': 'Barber',
    'booking.location': 'Lokasi',
    'booking.date_time': 'Tanggal & Waktu',
    'booking.total_price': 'Total Harga',
    'booking.your_choice': 'Pilihan Anda',
    'booking.duration': 'Durasi',
    'booking.no_reviews': 'Belum ada ulasan',
    'booking.free': 'GRATIS',
    'booking.choose': 'Pilih',
    'booking.extras_available': 'Ekstra Tersedia',
    'booking.continue': 'Lanjutkan',
    'booking.choose_time': 'Pilih Waktu',
    'booking.morning': 'Pagi',
    'booking.afternoon': 'Siang/Sore',

    // Barbers
    'barber.desc.mrz': 'Dengan pengalaman 8 tahun, Mr.z ahli dalam potongan klasik dan modern. Ketelitian dan keahliannya membuat setiap pelanggan puas dan percaya diri.',
    'barber.desc.arif': 'Arif fokus pada rambut pria dan jenggot, memberikan rekomendasi sesuai bentuk wajah. Keterampilan styling-nya membuat pelanggan selalu tampil maksimal.',
    'barber.desc.karol': 'Karol mahir dalam teknik pewarnaan dan styling modern. Dia mengikuti tren terbaru dan membantu pelanggan tampil berani dengan hasil yang memukau.',

    // Extras
    'extra.oil': 'Minyak',
    'extra.wash': 'Cuci Rambut',
    'extra.massage': 'Pijat Kepala',
    'extra.highlight': '(Pewarnaan) Highlight',
    'extra.full_color': '(Pewarnaan) Full Colouring',
    // Tabs
    'booking.tab.choose_extras': 'Pilih Ekstra',
    'booking.tab.choose_barber': 'Pilih Barber',
    'booking.tab.choose_location': 'Pilih Lokasi',
    'booking.tab.choose_datetime': 'Pilih Tanggal & Waktu',
    'booking.tab.customer_info': 'Data Pelanggan',
    // Location
    'location.distance': 'Jarak dalam kilometer',
    'location.km': 'Kilometer',
    'location.not_found': 'Lokasi tidak ditemukan.',
    'location.walkthrough': 'Panduan',
    'location.allow': 'Izinkan lokasi',
    'location.office': 'Kantor Barber Sangaji',
    'location.your_location': 'Lokasi Anda',
    // Customer Info
    'customer.name': 'Nama',
    'customer.email': 'Email',
    'customer.phone': 'Nomor Telepon',
    'customer.allergies': 'Alergi',
    'customer.save': 'Simpan informasi Anda',
    'customer.book_now': 'Booking Sekarang',
    'customer.placeholder.name': 'Masukkan nama Anda',
    'customer.placeholder.email': 'Masukkan email Anda',
    'customer.placeholder.phone': 'Contoh: 089262570335',
    'customer.placeholder.allergies': 'Alergi Anda',
    'customer.error.phone_number': 'Nomor telepon hanya boleh angka.',
    'customer.error.required': 'Semua field wajib diisi!',
    'customer.error.phone_invalid': 'Nomor tidak valid',
    // Carousel / Hero
    'hero.slide1.title': 'Anda Panggil Saya, Saya Datang',
    'hero.slide2.title': 'Potongan Premium dengan Harga Terjangkau',
    'hero.location': 'Kota Yogyakarta, Daerah Istimewa Yogyakarta',
    'hero.prev': 'Sebelumnya',
    'hero.next': 'Berikutnya',
    // Content Page
    'content.header': 'Konten Barber Sangaji',
    'content.video_heading': 'Video hasil Barber Sangaji',
    'content.photo_heading': 'Foto hasil Barber Sangaji',
    'content.back_to_process': 'Kembali ke proses',
    'content.designation': 'Penamaan',
    'content.browser_no_video': 'Browser Anda tidak mendukung video tag.',
    // Not Found
    'notfound.header': 'Kesalahan 404',
    'notfound.title': 'Halaman Tidak Ditemukan',
    'notfound.desc': 'Maaf, halaman yang Anda cari tidak ada di website kami! Silakan kembali ke beranda atau coba gunakan pencarian.',
    'notfound.back_home': 'Kembali ke Beranda',
  },
}

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(
    (localStorage.getItem('barber-sangaji.lang') as Lang) || 'en'
  )
  const [isSwitching, setIsSwitching] = useState(false)

  const setLang = (newLang: Lang) => {
    setIsSwitching(true)
    setLangState(newLang)
    try {
      localStorage.setItem('barber-sangaji.lang', newLang)
    } catch (e) {
      void e
    }
    setTimeout(() => setIsSwitching(false), 300) // Simulate transition effect
  }

  const t = (key: string) => {
    return translations[lang][key] || key
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t, isSwitching }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
