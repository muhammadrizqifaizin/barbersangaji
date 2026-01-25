import { useState, useEffect } from 'react'
import { useAppointment } from '../lib/appointment-provider'
import { useI18n } from '../lib/i18n'

export default function CustomerInfo() {
  const { customerInfo, handleSetCustomerInfo, handleBookNow } = useAppointment()
  const { t } = useI18n()

  const [save, setSave] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (/^\d*$/.test(value)) {
      handleSetCustomerInfo({ phone: value })
    } else {
      setToastMessage(t('customer.error.phone_number'))
      setShowToast(true)
    }
  }

  const validateForm = () => {
    const { name, email, phone } = customerInfo || {}

    if (!name || !email || !phone) {
      setToastMessage(t('customer.error.required'))
      setShowToast(true)
      return false
    }

    if (phone.length < 10) {
      setToastMessage(t('customer.error.phone_invalid'))
      setShowToast(true)
      return false
    }

    return true
  }

  const handleBooking = () => {
    if (validateForm()) {
      handleBookNow()
    }
  }

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  return (
    <>
      <form>
        <div className='row'>
          <div className='col'>
            <label htmlFor='name' className='text-theme mb-1'>
              {t('customer.name')} <span className='text-danger'>*</span>
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder={t('customer.placeholder.name')}
              onChange={(event) => handleSetCustomerInfo({ name: event.target.value })}
              value={customerInfo?.name || ''}
              required
            />
          </div>
          <div className='col'>
            <label htmlFor='email' className='text-theme mb-1'>
              {t('customer.email')} <span className='text-danger'>*</span>
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder={t('customer.placeholder.email')}
              onChange={(event) => handleSetCustomerInfo({ email: event.target.value })}
              value={customerInfo?.email || ''}
              required
            />
          </div>
        </div>

        <div className='row mt-3'>
          <div className='col'>
            <label htmlFor='phone' className='text-theme mb-1'>
              {t('customer.phone')} <span className='text-danger'>*</span>
            </label>
            <input
              type='tel'
              className='form-control'
              id='phone'
              placeholder={t('customer.placeholder.phone')}
              onChange={handlePhoneChange}
              value={customerInfo?.phone || ''}
              required
            />
          </div>
          <div className='col'>
            <label htmlFor='allergies' className='text-theme mb-1'>
              {t('customer.allergies')}
            </label>
            <input
              type='text'
              className='form-control'
              id='allergies'
              placeholder={t('customer.placeholder.allergies')}
              onChange={(event) => handleSetCustomerInfo({ allergies: event.target.value })}
              value={customerInfo?.allergies || ''}
            />
          </div>
        </div>

        <div className='form-group mt-3'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              id='gridCheck'
              onChange={(event) => setSave(event.target.checked)}
              checked={save}
            />
            <label className='form-check-label text-theme' htmlFor='gridCheck'>
              {t('customer.save')}
            </label>
          </div>
        </div>

        <div className='d-flex justify-content-end'>
          <button
            type='button'
            className='btn btn-primary mt-3'
            onClick={handleBooking}
          >
            {t('customer.book_now')}
          </button>
        </div>
      </form>

      {/* Toast Notification */}
      {showToast && (
        <div className='fixed bottom-5 right-5 z-50 animate-slide-in'>
          <div className='bg-red-600 text-theme px-4 py-3 rounded-lg shadow-md text-sm'>
            {toastMessage}
          </div>
        </div>
      )}
    </>
  )
}
