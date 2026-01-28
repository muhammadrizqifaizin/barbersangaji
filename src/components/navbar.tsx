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

  // --- LOGIC SCROLL & ANIMASI ---
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const stopTimer = useRef<number | null>(null)
  const lastScrollY = useRef(0)

  // Warna Utilitas
  const utilColor = theme === 'light' ? '#212529' : '#ffffff'

  // Background Navbar
  const navbarBg = theme === 'light' ? 'rgba(255, 255, 255, 0.98)' : 'rgba(25, 28, 36, 0.98)'

  const currentPath = router.location.pathname
  const isPageActive = [
    '/appointment', '/pricing', '/team',
    '/open', '/testimonial', '/content', '/admin/login',
  ].includes(currentPath)

  useEffect(() => {
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
      const isScrolled = y > 50
      setScrolled(isScrolled)

      // 1. Posisi Paling Atas (< 50px)
      if (y < 50) {
        setHidden(false)
        if (stopTimer.current) window.clearTimeout(stopTimer.current)
        lastScrollY.current = y
        return
      }

      // 2. Mobile menu open
      if (menuOpen) {
        setHidden(false)
        return
      }

      // 3. Scroll Down -> HIDDEN
      if (y > lastScrollY.current && y > 100) {
        setHidden(true)
      } else {
        // Scroll Up -> SHOW
        setHidden(false)
      }

      lastScrollY.current = y

      // 4. Stop Timer
      if (stopTimer.current) window.clearTimeout(stopTimer.current)
      stopTimer.current = window.setTimeout(() => {
        setHidden(false)
      }, 400)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (stopTimer.current) window.clearTimeout(stopTimer.current)
    }
  }, [menuOpen])

  // --- SUB-COMPONENT: LOGO ---
  const BrandLogo = ({ fontSize }: { fontSize: string }) => (
    <h1 className='mb-0 text-primary text-uppercase fw-bold text-nowrap'
      style={{ fontSize, lineHeight: 1, padding: '0.2rem 0' }}>
      <i className='fa fa-cut me-3'></i>{t('brand.name')}
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
          style={{ color: utilColor, fontSize: '1.3rem', transition: 'color 0.3s' }}
        >
          <i className='bi bi-globe'></i>
        </button>
        <button
          type='button'
          className='btn btn-link p-0 text-decoration-none border-0'
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          style={{ color: utilColor, fontSize: '1.2rem', transition: 'color 0.3s' }}
        >
          <i className={`bi ${theme === 'light' ? 'bi-moon' : 'bi-sun'}`}></i>
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
    // PERBAIKAN FINAL:
    // 1. Gunakan 'sticky-top'. Ini membuat navbar punya "fisik" sehingga konten di bawahnya turun (tidak tertutup).
    // 2. Tambahkan style "position: sticky" untuk memaksa browser menuruti aturan ini.
    <nav
      className={`navbar navbar-expand-xl align-items-center sticky-top py-1 px-3 px-xl-5 ${theme === 'light' ? 'navbar-light' : 'navbar-dark'} navbar-scrolled`}
      style={{
        position: 'sticky', // PENTING: Agar tidak overlap
        top: hidden ? '-100px' : '0',
        opacity: hidden ? 0 : (isSwitching ? 0.9 : 1),
        pointerEvents: hidden ? 'none' : 'auto',
        transition: 'top 0.4s ease-out, opacity 0.3s ease, background-color 0.3s ease',
        backgroundColor: navbarBg,

        // Glass Effect (Always on)
        backdropFilter: 'saturate(180%) blur(12px)',
        WebkitBackdropFilter: 'saturate(180%) blur(12px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.08)',

        zIndex: 9999
      }}
    >
      <div className="container-fluid p-0">

        {/* LOGO */}
        <Link to='/' resetScroll className='navbar-brand me-0'>
          <div className="d-xl-none">
            <BrandLogo fontSize='1.4rem' />
          </div>
          <div className="d-none d-xl-block">
            <BrandLogo fontSize='2rem' />
          </div>
        </Link>

        {/* BURGER BUTTON */}
        <button
          type='button'
          className={`navbar-toggler border-0 shadow-none ${!router.isLoading ? 'collapsed' : ''}`}
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* MENU WRAPPER */}
        <div className={`collapse navbar-collapse ${router.isLoading ? 'show' : ''}`} id='navbarCollapse'>
          <div className='navbar-nav ms-auto align-items-xl-center p-3 p-xl-0 gap-xl-1'>
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
                  <i className='fa fa-user-shield me-2'></i>Login Admin
                </a>
              </div>
            </div>

            <Link to='/contact' resetScroll className='nav-item nav-link fw-bold text-uppercase mx-2'>
              {t('nav.contact')}
            </Link>
          </div>

          <div className="d-none d-xl-block ms-xl-3">
            <ActionButtons isMobile={false} />
          </div>

          <div className="d-xl-none mt-3 pt-3 border-top border-white border-opacity-10 px-3 mb-3">
            <ActionButtons isMobile={true} />
          </div>
        </div>
      </div>
    </nav>
  )
}