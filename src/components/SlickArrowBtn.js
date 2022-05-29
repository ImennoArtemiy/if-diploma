import arrow from '../assets/img/arrow.png'

const SlickArrowBtn = ({className, onClick}) => {
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <img src={arrow} alt="arrow"/>
        </div>
    )
}

export default SlickArrowBtn
