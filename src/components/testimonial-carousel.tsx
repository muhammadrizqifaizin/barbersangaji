import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useI18n } from '../lib/i18n'
import './testimonial-carousel.css'

// Star rating component
function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="testimonial-stars">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={`fas fa-star ${i < rating ? 'filled' : ''}`}
        />
      ))}
    </div>
  )
}

// Verified badge component
function VerifiedBadge() {
  return (
    <svg className="verified-badge" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="11" fill="#1DA1F2" />
      <path d="M9.5 11.5L10.5 12.5L13 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Modal Component
interface TestimonialModalProps {
  isOpen: boolean
  onClose: () => void
  item: TestimonialItemProps
}

function TestimonialModal({ isOpen, onClose, item }: TestimonialModalProps) {
  if (!isOpen) return null

  return createPortal(
    <div className="testimonial-modal-overlay" onClick={onClose}>
      <div className="testimonial-modal-content" onClick={e => e.stopPropagation()}>
        <button className="testimonial-modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="testimonial-modal-header">
          <div className="testimonial-author">
            <div className="testimonial-avatar-wrapper">
              <img
                src={item.image}
                alt={item.name}
                className="testimonial-avatar"
              />
            </div>
            <div className="testimonial-info">
              <div className="testimonial-name">
                {item.name}
                <VerifiedBadge />
              </div>
              <div className="testimonial-role">{item.role}</div>
            </div>
          </div>
        </div>

        <div className="testimonial-modal-body">
          <StarRating rating={item.rating} />
          <p className="testimonial-text full-text">
            {item.text}
          </p>
        </div>
      </div>
    </div>,
    document.body
  )
}

interface TestimonialItemProps {
  name: string
  role: string
  text: string
  image: string
  rating?: number
}

function TestimonialCard(props: TestimonialItemProps) {
  const { text, rating = 5 } = props
  const [isModalOpen, setIsModalOpen] = useState(false)

  const maxLength = 120 // Maximum characters before showing "Read more"
  const shouldTruncate = text.length > maxLength
  const displayText = shouldTruncate
    ? text.slice(0, maxLength) + '...'
    : text

  return (
    <>
      <div className="testimonial-card">
        <div className="testimonial-card-content">
          <StarRating rating={rating} />
          <p className="testimonial-text">
            {displayText}
          </p>
          {shouldTruncate && (
            <button
              className="read-more-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Read more
            </button>
          )}
        </div>
        <div className="testimonial-author">
          <div className="testimonial-avatar-wrapper">
            <img
              src={props.image}
              alt={props.name}
              className="testimonial-avatar"
            />
          </div>
          <div className="testimonial-info">
            <div className="testimonial-name">
              {props.name}
              <VerifiedBadge />
            </div>
            <div className="testimonial-role">{props.role}</div>
          </div>
        </div>
      </div>

      <TestimonialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={props}
      />
    </>
  )
}

export default function TestimonialCarousel() {
  const { t } = useI18n()

  useEffect(() => {
    // Initialize owl carousel with auto-slide every 2 seconds
    $('.testimonial-carousel-new').owlCarousel({
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      smartSpeed: 800,
      loop: true,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
          margin: 15
        },
        576: {
          items: 1,
          margin: 20
        },
        768: {
          items: 2,
          margin: 25
        },
        992: {
          items: 3,
          margin: 30
        }
      }
    })
  }, [])

  // Force re-render just in case translations were not ready during initial render? 
  // Normally useI18n should handle it, but with Owl Carousel initializing manually,
  // we might need to be careful. For now, standard React render is fine.

  const testimonials = [
    {
      name: 'Ivanderr',
      role: t('testimonial.role.student'),
      text: t('testimonial.1.text'),
      image: '/img/testimonial-1.jpg',
      rating: 5
    },
    {
      name: 'Cahya Dwi',
      role: t('testimonial.role.student'),
      text: t('testimonial.2.text'),
      image: '/img/testimonial-2.jpg',
      rating: 5
    },
    {
      name: 'Andi Sujatmiko',
      role: t('testimonial.role.teacher'),
      text: t('testimonial.3.text'),
      image: '/img/testimonial-3.jpg',
      rating: 5
    }
  ]

  return (
    <div
      className='owl-carousel testimonial-carousel-new wow fadeInUp'
      data-wow-delay='0.1s'
    >
      {testimonials.map((item, index) => (
        <TestimonialCard
          key={index}
          {...item}
        />
      ))}
    </div>
  )
}
