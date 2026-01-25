import { createFileRoute } from '@tanstack/react-router'
import { useI18n } from '../lib/i18n'

export const Route = createFileRoute('/content')({
  component: Content,
})

export function Content() {
  const { t } = useI18n()
  function playVideo(imgElement: HTMLImageElement) {
    const videoElement = imgElement.nextElementSibling as HTMLVideoElement // Ambil elemen video
    imgElement.style.display = 'none' // Sembunyikan gambar
    videoElement.style.display = 'block' // Tampilkan video
    videoElement.play() // Putar video
  }

  return (
    <>
      <div
        className='container-fluid page-header py-5 mb-5 wow fadeIn'
        data-wow-delay='0.1s'
      >
        <div className='container text-center py-5'>
          <h1 className='display-3 text-white text-uppercase mb-3 animated slideInDown'>
            {t('page.content')}
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
                {t('page.content')}
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
            <h1 className='text-uppercase'>{t('content.video_heading')}</h1>
          </div>
          <div className='row g-4'>
            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.1s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src='/img/lofo sangaji.png'
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src='/video/video1.mp4' type='video/mp4' />
                  {t('content.browser_no_video')}
                  </video>
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
                    <a
                      className='btn btn-square'
                      href='link_ke_video_lengkap.mp4'
                    >
                      <i className='fas fa-arrow-right'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>{t('content.back_to_process')}</h5>
                  <span className='text-primary'>{t('content.designation')}</span>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.3s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src='/img/lofo sangaji.png'
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src='/video/video2.mp4' type='video/mp4' />
                  {t('content.browser_no_video')}
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='https://www.instagram.com/barber.sangaji/?igsh=MWljNWczdGtvNXp2eA%3D%3D'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>{t('content.back_to_process')}</h5>
                  <span className='text-primary'>{t('content.designation')}</span>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.5s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src='/img/lofo sangaji.png'
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src='/video/video 3.mp4' type='video/mp4' />
                  {t('content.browser_no_video')}
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='https://www.instagram.com/barber.sangaji/?igsh=MWljNWczdGtvNXp2eA%3D%3D'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>{t('content.back_to_process')}</h5>
                  <span className='text-primary'>{t('content.designation')}</span>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.7s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src='/img/lofo sangaji.png'
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src='/video/video4.mp4' type='video/mp4' />
                  {t('content.browser_no_video')}
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='https://www.instagram.com/barber.sangaji/?igsh=MWljNWczdGtvNXp2eA%3D%3D'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>{t('content.back_to_process')}</h5>
                  <span className='text-primary'>{t('content.designation')}</span>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.7s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src='/img/lofo sangaji.png'
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src='/video/video5.mp4' type='video/mp4' />
                  {t('content.browser_no_video')}
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='https://www.instagram.com/barber.sangaji/?igsh=MWljNWczdGtvNXp2eA%3D%3D'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>{t('content.back_to_process')}</h5>
                  <span className='text-primary'>{t('content.designation')}</span>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.7s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src='/img/lofo sangaji.png'
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src='/video/video6.mp4' type='video/mp4' />
                  {t('content.browser_no_video')}
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='https://www.instagram.com/barber.sangaji/?igsh=MWljNWczdGtvNXp2eA%3D%3D'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>{t('content.back_to_process')}</h5>
                  <span className='text-primary'>{t('content.designation')}</span>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.7s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src='/img/lofo sangaji.png'
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src='/video/video7.mp4' type='video/mp4' />
                  {t('content.browser_no_video')}
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='https://www.instagram.com/barber.sangaji/?igsh=MWljNWczdGtvNXp2eA%3D%3D'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>{t('content.back_to_process')}</h5>
                  <span className='text-primary'>{t('content.designation')}</span>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 wow fadeInUp'
              data-wow-delay='0.7s'
            >
              <div className='team-item'>
                <div className='video-container'>
                  <img
                    className='img-fluid'
                    src='/img/lofo sangaji.png'
                    alt='Video Thumbnail'
                    onClick={(event) => playVideo(event.currentTarget)}
                  />
                  <video className='img-fluid' controls>
                    <source src='/video/8.mp4' type='video/mp4' />
                  {t('content.browser_no_video')}
                  </video>
                  <div className='team-social'>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn btn-square' href=''>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-square'
                      href='https://www.instagram.com/barber.sangaji/?igsh=MWljNWczdGtvNXp2eA%3D%3D'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </div>
                </div>
                <div className='bg-secondary text-center p-4'>
                  <h5 className='text-uppercase'>{t('content.back_to_process')}</h5>
                  <span className='text-primary'>{t('content.designation')}</span>
                </div>
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
            <h1 className='text-uppercase'>{t('content.photo_heading')}</h1>
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
                    src='/img/img1.png'
                    alt='Result 1 Image'
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
                  <h5 className='text-uppercase'>{t('content.back_to_process')}</h5>
                  <span className='text-primary'>{t('content.designation')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
