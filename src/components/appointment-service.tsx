import { useEffect, useState } from 'react'
import { serviceData } from '../routes/appointment'
import { useAppointment } from '../lib/appointment-provider'
import { Link } from '@tanstack/react-router'
import { ServiceData } from './card-service'
import ChooseExtras from './choose-extras'
import ChooseBarber from './choose-barber'
import ChooseLocation from './choose-location'
import ChooseDateTime from './choose-date-time'
import CustomerInfo from './customer-info'
import DetailAppointment from './detail-appointment'
import { useI18n } from '../lib/i18n'

export type TabPage =
  | 'Choose Extras'
  | 'Choose Barber'
  | 'Choose Location'
  | 'Choose Datetime'
  | 'Customer Info'

const TabPageData: TabPage[] = [
  'Choose Extras',
  'Choose Barber',
  'Choose Location',
  'Choose Datetime',
  'Customer Info',
]

export default function AppointmentService({ service }: { service: number }) {
  const { handleSelectedService } = useAppointment()
  const { t } = useI18n()

  const [activeTab, setActiveTab] = useState<TabPage>('Choose Extras')
  const data = serviceData[service! - 1]

  useEffect(() => {
    handleSelectedService(data)
  }, [])

  return (
    <div className='w-100 appointment wow fadeInTop' data-wow-delay='0.4s'>
      <div className='d-flex gap-4 mw-100 container-appointment'>
        <div className='flex-grow-1 bg-secondary p-3'>
          <div className='d-flex gap-3 align-items-center'>
            {activeTab == 'Choose Extras' ? (
              <Link to='/appointment'>
                <button
                  type='button'
                  className='btn border py-2 px-3 button-back'
                >
                  <i className='fa fa-arrow-left'></i>
                </button>
              </Link>
            ) : (
              <button
                type='button'
                className='btn border py-2 px-3 button-back'
                onClick={() =>
                  setActiveTab(
                    (prev) => TabPageData[TabPageData.indexOf(prev) - 1]
                  )
                }
              >
                <i className='fa fa-arrow-left'></i>
              </button>
            )}
            <h4>
              {activeTab === 'Choose Extras'
                ? t('booking.tab.choose_extras')
                : activeTab === 'Choose Barber'
                ? t('booking.tab.choose_barber')
                : activeTab === 'Choose Location'
                ? t('booking.tab.choose_location')
                : activeTab === 'Choose Datetime'
                ? t('booking.tab.choose_datetime')
                : t('booking.tab.customer_info')}
            </h4>
          </div>
          <div className='mt-3'>
            <TabContent
              activeTab={activeTab}
              data={data}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
        <DetailAppointment />
      </div>
    </div>
  )
}

const TabContent = ({
  activeTab,
  data,
  setActiveTab,
}: {
  activeTab: string
  data: ServiceData
  setActiveTab: React.Dispatch<React.SetStateAction<TabPage>>
}) => {
  switch (activeTab) {
    case 'Choose Extras':
      return <ChooseExtras data={data} setActiveTab={setActiveTab} />
    case 'Choose Barber':
      return <ChooseBarber setActiveTab={setActiveTab} />
    case 'Choose Location':
      return <ChooseLocation setActiveTab={setActiveTab} />
    case 'Choose Datetime':
      return <ChooseDateTime setActiveTab={setActiveTab} />
    case 'Customer Info':
      return <CustomerInfo />
    default:
      return <div>Silakan pilih tab</div>
  }
}
