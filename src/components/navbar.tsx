import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../lib/i18n'

export default function Navbar() {
  const router = useRouterState()
  const { t, lang, setLang, isSwitching } = useI18n()
  
  // --- STATE TEMA ---
  const [theme, setTheme] = useState<'dark' | 'light'>(
    (localStorage.getItem('barber-sangaji.theme') as 'dark' | 'light') || 'light'
  )

  // Warna Utilitas (Text/Icon)
  const utilColor = theme === 'light' ? '#212529' : '#ffffff'
  
  // Background Navbar
  const navbarBg = theme === 'light' 
    ? '#ffffff' 
    : '#212529'

  const currentPath = router.location.pathname
  const isPageActive = [
    '/appointment', '/pricing', '/team', 
    '/open', '/testimonial', '/content', '/admin/login',
  ].includes(currentPath)

  // --- LOGIC SCROLL & ANIMASI ---
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const stopTimer = useRef<number | null>(null)

  useEffect(() => {
    // 1. Logic Tema
    if (theme === 'light') {
      document.body.classList.add('theme-light')
      document.body.classList.remove('theme-dark')
    } else {
      document.body.classList.add('theme-dark')
      document.body.classList.remove('theme-light')
    }
    localStorage.setItem('barber-sangaji.theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      
      // Efek glass/shadow aktif jika scroll > 10px
      setScrolled(y > 10)

      // 1. Posisi Paling Atas (< 80px) -> SELALU MUNCUL
      if (y < 80) {
        setHidden(false)
        if (stopTimer.current) window.clearTimeout(stopTimer.current)
        return
      }

      // 2. Sedang Scroll -> SEMBUNYI
      setHidden(true)

      // 3. Berhenti Scroll (Diam 350ms) -> MUNCUL
      if (stopTimer.current) window.clearTimeout(stopTimer.current)
      
      stopTimer.current = window.setTimeout(() => {
        setHidden(false)
      }, 180)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (stopTimer.current) window.clearTimeout(stopTimer.current)
    }
  }, [])

  // --- SUB-COMPONENT: LOGO ---
  // Font size sedikit diperkecil agar pas dengan navbar yang lebih rapat
  const BrandLogo = ({ fontSize }: { fontSize: string }) => (
    <h1 className='mb-0 text-primary text-uppercase fw-bold text-nowrap' 
        style={{ fontSize, lineHeight: 1, padding: '0.1rem 0' }}>
      <i className='fa fa-cut me-2'></i>{t('brand.name')}
    </h1>
  )

  // --- SUB-COMPONENT: ACTION BUTTONS ---
  const ActionButtons = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`d-flex align-items-center gap-3 ${isMobile ? 'justify-content-between w-100' : ''}`}>
      <div className='d-flex align-items-center gap-3'>
        <button
          type='button'
          className='btn btn-link p-0 text-decoration-none border-0'
          onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
          style={{ color: utilColor, fontSize: '1.2rem' }}
        >
          <i className='bi bi-globe'></i>
        </button>
        <button
          type='button'
          className='btn btn-link p-0 text-decoration-none border-0'
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          style={{ color: utilColor, fontSize: '1.1rem' }}
        >
          <i className='bi bi-moon'></i>
        </button>
      </div>

      <Link
        to='/appointment'
        resetScroll
        className={`btn btn-primary rounded-1 ${isMobile ? 'flex-grow-1 py-3 ms-3' : 'py-2 px-4'}`}
      >
        {t('nav.appointment')} 
        <i className={`fa fa-arrow-right ${isMobile ? 'float-end mt-1' : 'ms-2'}`}></i>
      </Link>
    </div>
  )

  return (
    <nav
      // UBAH DISINI: py-3 diganti py-2 agar lebih rapat secara vertikal
      className={`navbar navbar-expand-lg align-items-center fixed-top py-2 px-3 px-lg-5 ${theme === 'light' ? 'navbar-light' : 'navbar-dark'}`}
      style={{
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isSwitching ? 0.9 : 1,
        transition: 'transform 180ms ease-out, background-color 180ms ease-out',
        willChange: 'transform',
        backgroundColor: navbarBg, 
        
        // UBAH DISINI: Height 'auto' agar tinggi mengikuti konten (tidak dipaksa besar)
        height: 'auto',
        minHeight: '70px', 
        
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.08)' : 'none',
        zIndex: 9999 
      }}
    >
      <div className="container-fluid p-0">
        
        {/* LOGO */}
        <Link to='/' resetScroll className='navbar-brand me-0'>
          <div className="d-lg-none">
             {/* Logo Mobile sedikit diperkecil */}
             <BrandLogo fontSize='1.3rem' />
          </div>
          <div className="d-none d-lg-block">
             {/* Logo Desktop diubah dari 2rem ke 1.7rem agar navbar tidak terlalu tinggi */}
             <BrandLogo fontSize='1.7rem' />
          </div>
        </Link>

        {/* BURGER BUTTON */}
        <button
          type='button'
          className={`navbar-toggler border-0 shadow-none ${!router.isLoading ? 'collapsed' : ''}`}
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* MENU WRAPPER */}
        <div className={`collapse navbar-collapse ${router.isLoading ? 'show' : ''}`} id='navbarCollapse'>
          <div className='navbar-nav ms-auto align-items-lg-center p-3 p-lg-0 gap-lg-1'>
            <Link to='/' resetScroll className='nav-item nav-link fw-bold text-uppercase mx-2' activeProps={{ className: 'active' }}>
              {t('nav.home')}
            </Link>
            <Link to='/about' resetScroll className='nav-item nav-link fw-bold text-uppercase mx-2' activeProps={{ className: 'active' }}>
              {t('nav.about')}
            </Link>
            <Link to='/service' resetScroll className='nav-item nav-link fw-bold text-uppercase mx-2' activeProps={{ className: 'active' }}>
              {t('nav.service')}
            </Link>

            {/* DROPDOWN PAGES */}
            <div className='nav-item dropdown mx-2'>
              <a href='#' className={`nav-link dropdown-toggle fw-bold text-uppercase ${isPageActive ? 'active' : ''}`} data-bs-toggle='dropdown'>
                {t('nav.pages')}
              </a>
              
              <div className='dropdown-menu border-0 shadow-sm m-0 rounded-1 bg-white'>
                <Link to='/appointment' resetScroll className='dropdown-item'>{t('nav.appointment')}</Link>
                <Link to='/pricing' resetScroll className='dropdown-item'>{t('nav.pricing')}</Link>
                <Link to='/team' resetScroll className='dropdown-item'>{t('nav.team')}</Link>
                <Link to='/open' resetScroll className='dropdown-item'>{t('nav.open')}</Link>
                <Link to='/testimonial' resetScroll className='dropdown-item'>{t('nav.testimonial')}</Link>
                <Link to='/content' resetScroll className='dropdown-item'>{t('nav.content')}</Link>
                <div className='dropdown-divider'></div>
                <a href='/admin/login' className='dropdown-item d-flex align-items-center'>
                  <i className='fa fa-user-shield me-2'></i>{t('nav.admin_login')}
                </a>
              </div>
            </div>

            <Link to='/contact' resetScroll className='nav-item nav-link fw-bold text-uppercase mx-2'>
              {t('nav.contact')}
            </Link>
          </div>

          <div className="d-none d-lg-block ms-lg-3">
            <ActionButtons isMobile={false} />
          </div>

          <div className="d-lg-none mt-3 pt-3 border-top border-white border-opacity-10 px-3 mb-3">
             <ActionButtons isMobile={true} />
          </div>
        </div>
      </div>
    </nav>
  )
}