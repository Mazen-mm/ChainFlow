import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PerformanceCard from '../Organisms/PerformanceCard';
import OverCard from '../Organisms/OverCard';
import AverageCard from '../Organisms/AverageCard';
import BudgetCard from '../Organisms/BudgetCard';
import CompanyCard from '../organisms/CompanyCard';

export default function DashOverView({ overview }) {
  return (
    <>
      <h4 className='PrimaryText'>Overview</h4>
      <Swiper spaceBetween={5} slidesPerView={'auto'}>
        <SwiperSlide className='card' style={{ width: '40%' }}>
          <CompanyCard data={overview?.company} />
        </SwiperSlide>
        <SwiperSlide className='card' style={{ width: '40%' }}>
          <BudgetCard data={overview?.budget} />
        </SwiperSlide>
        <SwiperSlide className='card w-25'>
          <AverageCard data={overview?.average} />
        </SwiperSlide>
        <SwiperSlide className='card w-25'>
          <OverCard data={overview?.weekly} />
        </SwiperSlide>
        <SwiperSlide className='card w-25'>
          <PerformanceCard data={overview?.performance} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}




