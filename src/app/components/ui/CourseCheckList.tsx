import React from 'react'
import ThirdTitle from './ThirdTitle'
import CourseFactItem from './CourseFactItem'
import { Statistics } from '@/interface/interface'

interface MediaProps {
  statistics?:Statistics[]
}


export default function CourseCheckList({ statistics }: MediaProps) {
  return (
    <div className="px-0 py-4 md:px-4">
          <div className="py-2 ">
            <ThirdTitle>এই কোর্সে যা থাকছে</ThirdTitle>
            {statistics?.map((item,index)=>{
              return (
                <CourseFactItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                />
              )
            })}
          </div>
        </div>
  )
}
