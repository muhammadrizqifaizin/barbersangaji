import { Link } from '@tanstack/react-router'
import { useI18n } from '../lib/i18n'

export default function NotFound() {
  const { t } = useI18n()
  return (
    <>
      <div
        className='container-fluid page-header py-5 mb-5 wow fadeIn'
        data-wow-delay='0.1s'
      >
        <div className='container text-center py-5'>
          <h1 className='display-3 text-white text-uppercase mb-3 animated slideInDown'>
            {t('notfound.header')}
          </h1>
          <nav aria-label='breadcrumb animated slideInDown'>
            <ol className='breadcrumb justify-content-center text-uppercase mb-0'>
              <li className='breadcrumb-item'>
                <a className='text-white' href='#'>
                  {t('nav.home')}
                </a>
              </li>
              <li className='breadcrumb-item'>
                <a className='text-white' href='#'>
                  {t('nav.pages')}
                </a>
              </li>
              <li
                className='breadcrumb-item text-primary active'
                aria-current='page'
              >
                404
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className='container-xxl py-5 wow fadeInUp' data-wow-delay='0.1s'>
        <div className='container text-center'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <i className='bi bi-exclamation-triangle display-1 text-primary'></i>
              <h1 className='display-1'>404</h1>
              <h1 className='mb-4'>{t('notfound.title')}</h1>
              <p className='mb-4'>
                {t('notfound.desc')}
              </p>
              <Link to='/' resetScroll className='btn btn-primary py-3 px-5'>
                {t('notfound.back_home')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
