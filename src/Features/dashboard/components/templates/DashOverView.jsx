import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PerformanceCard from '../Organisms/PerformanceCard';
import OverCard from '../Organisms/OverCard';
import AverageCard from '../Organisms/AverageCard';
import BudgetCard from '../Organisms/BudgetCard';
import CompanyCard from '../organisms/CompanyCard';

export default function DashOverView() {
  return  <>

    <h4 className='PrimaryText'>Overview</h4>
      <Swiper spaceBetween={5} slidesPerView={'auto'}>

        <SwiperSlide className='card' style={{width:'40%'}}><CompanyCard/></SwiperSlide>
        <SwiperSlide className='card' style={{width:'40%'}}><BudgetCard/></SwiperSlide>
        <SwiperSlide className='card w-25'><AverageCard/></SwiperSlide>
        <SwiperSlide className='card w-25'><OverCard/></SwiperSlide>
        <SwiperSlide className='card w-25'><PerformanceCard/></SwiperSlide>

      </Swiper>

  </>
}




