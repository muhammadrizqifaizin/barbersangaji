import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

import { useI18n } from '../lib/i18n';

export function About() {
  const { t } = useI18n();
  return (
    <>
      {/* Page Header Start */}
      <div
        className='container-fluid page-header py-5 mb-5 wow fadeIn'
        data-wow-delay='0.1s'
      >
        <div className='container text-center py-5'>
          <h1 className='display-3 text-white text-uppercase mb-3 animated slideInDown'>
            {t('page.about')}
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
                {t('page.about')}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Start */}
      <div className='container-xxl py-5'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-6 wow fadeIn' data-wow-delay='0.1s'>
              <div className='d-flex flex-column'>
                <img
                  className='img-fluid w-75 align-self-end'
                  src='/img/about.jpg'
                  alt='About Image'
                />
                <div
                  className='w-50 bg-secondary p-5'
                  style={{ marginTop: '-25%' }}
                >
                  <h1 className='text-uppercase text-primary mb-3'>{t('home.exp.years')}</h1>
                  <h2 className='text-uppercase mb-0'>{t('home.exp.title')}</h2>
                </div>
              </div>
            </div>
            <div className='col-lg-6 wow fadeIn' data-wow-delay='0.5s'>
              <p className='d-inline-block bg-secondary text-primary py-1 px-4'>
                {t('home.about.title')}
              </p>
              <h1 className='text-uppercase mb-4'>
                {t('home.about.heading')}
              </h1>
              <p>
                {t('home.about.desc1')}
              </p>
              <p className='mb-4'>
                {t('home.about.desc2')}
              </p>
              <div className='row g-4'>
                <div className='col-md-6'>
                  <h3 className='text-uppercase mb-3'>{t('home.about.since')}</h3>
                  <p className='mb-0'>
                    {t('home.about.since_desc')}
                  </p>
                </div>
                <div className='col-md-6'>
                  <h3 className='text-uppercase mb-3'>{t('home.about.clients')}</h3>
                  <p className='mb-0'>
                    {t('home.about.clients_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      <div className='container-xxl py-5'>
        <div className='container'>
          <div
            className='text-center mx-auto mb-5 wow fadeInUp'
            data-wow-delay='0.1s'
            style={{ maxWidth: '600px' }}
          >
            <p className='d-inline-block bg-secondary text-primary py-1 px-4'>
              Our Barber
            </p>
            <h1 className='text-uppercase'>Meet Our Barber</h1>
          </div>
          <div className='row g-4'>
            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.1s'
            >
              <div className='team-item'>
                <div className='team-img position-relative overflow-hidden'>
                  <img
                    className='img-fluid'
                    src='/img/team-1.jpg'
                    alt='Team 1 Image'
                  />
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>Mr.z</h5>
                  <span className='text-primary'>capster</span>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.3s'
            >
              <div className='team-item'>
                <div className='team-img position-relative overflow-hidden'>
                  <img
                    className='img-fluid'
                    src='/img/team-2.jpg'
                    alt='Team 2 Image'
                  />
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>Arif </h5>
                  <span className='text-primary'>capster</span>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.5s'
            >
              <div className='team-item'>
                <div className='team-img position-relative overflow-hidden'>
                  <img
                    className='img-fluid'
                    src='/img/team-3.jpg'
                    alt='Team 3 Image'
                  />
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>karol</h5>
                  <span className='text-primary'>capster</span>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.7s'
            >
              <div className='team-item'>
                <div className='team-img position-relative overflow-hidden'>
                  <img
                    className='img-fluid'
                    src='/img/team-4.jpg'
                    alt='Team 4 Image'
                  />
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>Ramadhan</h5>
                  <span className='text-primary'>capster</span>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.7s'
            >
              <div className='team-item'>
                <div className='team-img position-relative overflow-hidden'>
                  <img
                    className='img-fluid'
                    src='/img/team-4.jpg'
                    alt='Team 4 Image'
                  />
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>Ramadhan</h5>
                  <span className='text-primary'>capster</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
