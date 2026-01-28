import { useEffect } from 'react'
import { useI18n } from '../lib/i18n'

export default function TestimonialCarousel() {
  const { t } = useI18n()
  
  useEffect(() => {
    $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      dotsData: true,
    })
  }, [])

  return (
    <div
      className='owl-carousel testimonial-carousel wow fadeInUp'
      data-wow-delay='0.1s'
    >
      <div
        className='testimonial-item text-center'
        data-dot="<img className='img-fluid' src='/img/topi.png' alt=''>"
      >
        <h4 className='text-uppercase'>Ivanderr</h4>
        <p className='text-primary'>{t('testimonial.role.student')}</p>
        <span className='fs-5'>
          {t('testimonial.1.text')}
        </span>
      </div>
      <div
        className='testimonial-item text-center'
        data-dot="<img className='img-fluid' src='/img/topi.png' alt=''>"
      >
        <h4 className='text-uppercase'>Cahya Dwi</h4>
        <p className='text-primary'>{t('testimonial.role.student')}</p>
        <span className='fs-5'>
          {t('testimonial.2.text')}
        </span>
      </div>
      <div
        className='testimonial-item text-center'
        data-dot="<img className='img-fluid' src='/img/topi.png' alt=''>"
      >
        <h4 className='text-uppercase'>Andi Sujatmiko</h4>
        <p className='text-primary'>{t('testimonial.role.teacher')}</p>
        <span className='fs-5'>{t('testimonial.3.text')}</span>
      </div>
    </div>
  )
}
