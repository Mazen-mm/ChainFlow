import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Chart from '../Molecules/Chart';
import ChartCard from '../Molecules/ChartCard';
import BudgetOverview from '../Organisms/BudgetOverview';
import WeeklyAverage from './../Organisms/WeeklyAverage';
import WeeklyOverview from '../Organisms/WeeklyOverview';


export default function DashOverView() {

  return  <>
    <h4 className='PrimaryText'>Overview</h4>
    <Swiper spaceBetween={10} slidesPerView={'auto'}>

      <SwiperSlide className='card' style={{width : '35%'}}>
        <BudgetOverview/>
      </SwiperSlide>

      <SwiperSlide className='card w-25'>
        <WeeklyAverage/>
      </SwiperSlide>

      <SwiperSlide className='card w-25'>
        <WeeklyOverview/>
      </SwiperSlide>

      <SwiperSlide className='card w-25'>
        <h1>swipeert</h1>
        <h1>swipeert</h1>
      </SwiperSlide>

    </Swiper>
  </>
}
