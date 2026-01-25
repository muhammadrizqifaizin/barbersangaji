import { createFileRoute } from '@tanstack/react-router'
import TestimonialCarousel from '../components/testimonial-carousel'
import { useI18n } from '../lib/i18n'

export const Route = createFileRoute('/service')({
  component: Service,
})

export function Service() {
  const { t } = useI18n()
  return (
    <>
      <div
        className='container-fluid page-header py-5 mb-5 wow fadeIn'
        data-wow-delay='0.1s'
      >
        <div className='container text-center py-5'>
          <h1 className='display-3 text-white text-uppercase mb-3 animated slideInDown'>
            {t('page.service')}
          </h1>
          <nav aria-label='breadcrumb animated slideInDown'>
            <ol className='breadcrumb justify-content-center text-uppercase mb-0'>
              <li className='breadcrumb-item'>
                <a className='text-white' href='/'>
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
                {t('page.service')}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className='container-xxl py-5'>
        <div className='container'>
          <div
            className='text-center mx-auto mb-5 wow fadeInUp'
            data-wow-delay='0.1s'
            style={{ maxWidth: '600px' }}
          >
            <p className='d-inline-block bg-secondary text-primary py-1 px-4'>
              {t('home.service.title')}
            </p>
            <h1 className='text-uppercase'>{t('home.service.heading')}</h1>
          </div>
          <div className='row g-4'>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.1s'
            >
              <div className='service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0'>
                <div
                  className='bg-dark d-flex flex-shrink-0 align-items-center justify-content-center'
                  style={{ width: '60px', height: '60px' }}
                >
                  <img
                    className='img-fluid'
                    src='/img/haircut.png'
                    alt='Haircut Image'
                  />
                </div>
                <div className='ps-4'>
                  <h3 className='text-uppercase mb-3'>{t('home.service.haircut')}</h3>
                  <p>
                    {t('home.service.haircut_desc')}
                  </p>
                  <span className='text-uppercase text-primary'>{t('home.service.from')} 15K</span>
                </div>
                <a className='btn btn-square' href='appointment?service=1'>
                  <i className='fa fa-plus text-primary'></i>
                </a>
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.3s'
            >
              <div className='service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0'>
                <div
                  className='bg-dark d-flex flex-shrink-0 align-items-center justify-content-center'
                  style={{ width: '60px', height: '60px' }}
                >
                  <img
                    className='img-fluid'
                    src='/img/beard-trim.png'
                    alt='Beard Trim Image'
                  />
                </div>
                <div className='ps-4'>
                  <h3 className='text-uppercase mb-3'>{t('home.service.beard_trim')}</h3>
                  <p>
                    {t('home.service.beard_trim_desc')}
                  </p>
                  <span className='text-uppercase text-primary'>{t('home.service.from')} 5K</span>
                </div>
                <a className='btn btn-square' href='appointment?service=2'>
                  <i className='fa fa-plus text-primary'></i>
                </a>
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.1s'
            >
              <div className='service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0'>
                <div
                  className='bg-dark d-flex flex-shrink-0 align-items-center justify-content-center'
                  style={{ width: '60px', height: '60px' }}
                >
                  <img className='img-fluid' src='img/hair-dyeing.png' alt='' />
                </div>
                <div className='ps-4'>
                  <h3 className='text-uppercase mb-3'>{t('home.service.hair_dyeing')}</h3>
                  <p>
                    {t('home.service.hair_dyeing_desc')}
                  </p>
                  <span className='text-uppercase text-primary'>{t('home.service.from')} 90K</span>
                </div>
                <a className='btn btn-square' href='appointment?service=3'>
                  <i className='fa fa-plus text-primary'></i>
                </a>
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.3s'
            >
              <div className='service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0'>
                <div
                  className='bg-dark d-flex flex-shrink-0 align-items-center justify-content-center'
                  style={{ width: '60px', height: '60px' }}
                >
                  <img
                    className='img-fluid'
                    src='/img/mustache.png'
                    alt='Mustache Image'
                  />
                </div>
                <div className='ps-4'>
                  <h3 className='text-uppercase mb-3'>{t('home.service.mustache')}</h3>
                  <p>
                    {t('home.service.mustache_desc')}
                  </p>
                  <span className='text-uppercase text-primary'>{t('home.service.from')} 5K</span>
                </div>
                <a className='btn btn-square' href='appointment?service=4'>
                  <i className='fa fa-plus text-primary'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-xxl py-5'>
        <div className='container'>
          <div
            className='text-center mx-auto mb-5 wow fadeInUp'
            data-wow-delay='0.1s'
            style={{ maxWidth: '600px' }}
          >
            <p className='d-inline-block bg-secondary text-primary py-1 px-4'>
              {t('testimonial.title')}
            </p>
            <h1 className='text-uppercase'>{t('testimonial.heading')}</h1>
          </div>
          <TestimonialCarousel />
        </div>
      </div>
    </>
  )
}
