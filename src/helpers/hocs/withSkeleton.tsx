import React from "react"
import Skeleton from "../../components/Skeleton/Skeleton"
import { DirectionType, SkeletonType } from "../../interfaces"


interface Props {
    isLoading: boolean
}
function withSkeleton<P extends object>(
    Component: React.ComponentType,
    type?: SkeletonType,
    count?: number,
    direction?: DirectionType) {
    
    return function WithSkeketon(props: Props & P) {
        const { isLoading, ...restProps } = props
        
        if (isLoading) {
            return <Skeleton type={type}
                direction={direction}
                count={count} />
        }
        return <Component {...(restProps as P)} />
    }
}


export default withSkeleton