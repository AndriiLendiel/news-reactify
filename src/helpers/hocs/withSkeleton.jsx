import Skeleton from "../../components/Skeleton/Skeleton"

function withSkeleton(Component, type, count,direction) {
    

    return function WithSkeketon(props) {
        const { isLoading, ...restProps } = props
        
        if (isLoading) {
            return <Skeleton type={type}
                direction={direction}
                count={count} />
        }
        return <Component {...restProps} />
    }
}


export default withSkeleton