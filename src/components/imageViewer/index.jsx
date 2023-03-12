import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import { useSelector } from "react-redux"
import LoadingGif from "../../images/loading-gif.gif"

import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core"
import "./index.css"

SwiperCore.use([EffectCoverflow, Pagination])
function ImageViewer() {
  const dataFromApi = useSelector((state) => state.apiSetter.value)
  const isLoading = useSelector((state) => state.isFirstandLoading.isLoading)

  return (
    <div className="top-20 relative">
      <section id="threeDCarasoul" className="main-swiper-wrapper p-0">
        <div className="w-full h-full">
          {dataFromApi ? (
            <Swiper
              effect={"coverflow"}
              grabCursor="true"
              centeredSlides="true"
              slidesPerView="auto"
              coverflowEffect={{
                stretch: 0,
                depth: 100,
                modifier: 6,
                slideShadows: true,
              }}
            >
              {dataFromApi.images.data.map((item, key) => (
                <SwiperSlide key={key}>
                  <img
                    src={item.url}
                    alt={"this is an AI generated Image" + key}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex justify-center items-center py-52">
              {isLoading ? <img src={LoadingGif} /> : <></>}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
export default ImageViewer
