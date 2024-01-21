import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoading = () => {
  return (
    <div className="skeleton-cont">
        <div className="skeleton"> <Skeleton count={3}/> </div>
    </div>
  )
}

export default SkeletonLoading