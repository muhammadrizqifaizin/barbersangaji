import OwlCarousel from 'react-owl-carousel'
import { useI18n } from '../lib/i18n'

export default function TestimonialCarousel() {
  const { t } = useI18n()

  return (
    <OwlCarousel
      className='testimonial-carousel wow fadeInUp'
      data-wow-delay='0.1s'
      autoplay
      smartSpeed={1000}
      loop
      nav={false}
      dots
      items={1}
    >
      <div
        className='testimonial-item text-center'
        data-dot="<img className='img-fluid' src='/img/topi.png' alt=''>"
      >
        <h4 className='text-uppercase'>Ivanderr</h4>
        <p className='text-primary'>{t('testimonial.item1.role')}</p>
        <span className='fs-5'>{t('testimonial.item1.text')}</span>
      </div>
      <div
        className='testimonial-item text-center'
        data-dot="<img className='img-fluid' src='/img/topi.png' alt=''>"
      >
        <h4 className='text-uppercase'>Cahya Dwi</h4>
        <p className='text-primary'>{t('testimonial.item2.role')}</p>
        <span className='fs-5'>{t('testimonial.item2.text')}</span>
      </div>
      <div
        className='testimonial-item text-center'
        data-dot="<img className='img-fluid' src='/img/topi.png' alt=''>"
      >
        <h4 className='text-uppercase'>Andi Sujatmiko</h4>
        <p className='text-primary'>{t('testimonial.item3.role')}</p>
        <span className='fs-5'>{t('testimonial.item3.text')}</span>
      </div>
    </OwlCarousel>
  )
}
