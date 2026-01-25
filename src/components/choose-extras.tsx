import { useAppointment } from '../lib/appointment-provider'
import { TabPage } from './appointment-service'
import CardService, { ServiceData } from './card-service'
import { useI18n } from '../lib/i18n'

export type Extra = {
  image: string
  alt: string
  title: string
  price: number
}

export default function ChooseExtras({
  data,
  setActiveTab,
}: {
  data: ServiceData
  setActiveTab: React.Dispatch<React.SetStateAction<TabPage>>
}) {
  const { t } = useI18n()

  const extraData: Extra[] = [
    {
      image: '/img/oil.jpeg',
      alt: 'Oil Image',
      title: t('extra.oil'),
      price: 7,
    },
    {
      image: '/img/wash-hair.jpeg',
      alt: 'Wash Hair Image',
      title: t('extra.wash'),
      price: 5,
    },
    {
      image: '/img/pijat.jpg',
      alt: 'Scalp Massage Image',
      title: t('extra.massage'),
      price: 10,
    },
    {
      image: '/img/high.jpg',
      alt: 'Highlight Image',
      title: t('extra.highlight'),
      price: 150,
    },
    {
      image: '/img/fullnih.png',
      alt: 'Full Colouring Image',
      title: t('extra.full_color'),
      price: 250,
    },
  ]

  return (
    <>
      <CardService
        image={data.image}
        alt={data.alt}
        title={data.title}
        duration={data.duration}
        price={data.price}
      />
      <p className='mt-4 mb-0'>{extraData.length} {t('booking.extras_available')}</p>
      {extraData.map((data, index) => (
        <Extra data={data} name={`extra-${index}`} key={index} />
      ))}
      <div className='w-100 d-flex justify-content-end'>
        <button
          className='btn btn-primary mt-4'
          onClick={() => setActiveTab('Choose Barber')}
        >
          {t('booking.continue')}
        </button>
      </div>
    </>
  )
}

export function Extra({ data, name }: { data: Extra; name: string }) {
  const { handleAddExtras, handleRemoveExtras, extras } = useAppointment()

  return (
    <label htmlFor={name} className='w-100 mt-3'>
      <div className='bg-light-subtle p-4'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex gap-2 align-items-center'>
            <img
              src={data.image}
              alt={data.alt}
              style={{ width: '50px', height: '50px', borderRadius: '6px' }}
            />
            <div className='d-flex flex-column justify-content-center'>
              <h6 className='fs-medium'>{data.title}</h6>
              <p className='text-primary mb-0'>{data.price}K</p>
            </div>
          </div>
          <input
            type='checkbox'
            id={name}
            style={{
              width: '30px',
              height: '20px',
              accentColor: 'var(--primary)',
            }}
            onChange={(event) => {
              if (event.target.checked) handleAddExtras(data)
              else if (!event.target.checked) handleRemoveExtras(data)
            }}
            checked={extras.includes(data)}
          />
        </div>
      </div>
    </label>
  )
}
