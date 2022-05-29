const SvgSprite = () => {
    return (
        <svg style={{display: 'none'}}>
            <symbol id='logo' viewBox="0 0 471 54">
                <path
                    d="M35.55 38L20.71 2.02H0.76V52H13.92V11.96H14.06L29.88 52H41.22L57.04 11.96H57.18V52H70.34V2.02H50.39L35.55 38ZM77.0518 27.01C77.0518 37.44 81.2518 53.4 108.132 53.4C135.012 53.4 139.212 37.44 139.212 27.01C139.212 16.58 135.012 0.619998 108.132 0.619998C81.2518 0.619998 77.0518 16.58 77.0518 27.01ZM91.4718 27.01C91.4718 19.24 95.8118 10.14 108.132 10.14C120.452 10.14 124.792 19.24 124.792 27.01C124.792 34.78 120.452 43.88 108.132 43.88C95.8118 43.88 91.4718 34.78 91.4718 27.01ZM159.535 11.54H173.395C183.755 11.54 187.675 17.28 187.675 26.52C187.675 37.09 183.615 42.48 174.655 42.48H159.535V11.54ZM145.955 52H178.295C193.975 52 201.675 42.06 201.675 27.01C201.675 11.96 194.255 2.02 177.105 2.02H145.955V52ZM251.601 36.88H251.461L225.211 2.02H209.461V52H222.621V17.14H222.761L249.991 52H264.761V2.02H251.601V36.88ZM274.266 52H287.846V2.02H274.266V52ZM310.951 23.51V2.02H297.371V52H310.951V37.16L318.861 30.37L335.871 52H354.211L329.501 22.11L352.461 2.02H334.191L310.951 23.51ZM371.86 23.51V2.02H358.28V52H371.86V37.16L379.77 30.37L396.78 52H415.12L390.41 22.11L413.37 2.02H395.1L371.86 23.51ZM434.868 52H448.448V34.57L470.568 2.02H454.608L441.658 23.79L428.708 2.02H412.748L434.868 34.57V52Z"/>
            </symbol>
            <symbol id='searchIcon' viewBox="0 0 20 20">
                <path
                    d="M19.7551 18.5796L14.9469 13.7714C16.1388 12.3184 16.8571 10.4571 16.8571 8.42857C16.8571 3.77551 13.0816 0 8.42857 0C3.77143 0 0 3.77551 0 8.42857C0 13.0816 3.77143 16.8571 8.42857 16.8571C10.4571 16.8571 12.3143 16.1429 13.7673 14.951L18.5755 19.7551C18.902 20.0816 19.4286 20.0816 19.7551 19.7551C20.0816 19.4327 20.0816 18.902 19.7551 18.5796ZM8.42857 15.1796C4.70204 15.1796 1.67347 12.151 1.67347 8.42857C1.67347 4.70612 4.70204 1.67347 8.42857 1.67347C12.151 1.67347 15.1837 4.70612 15.1837 8.42857C15.1837 12.151 12.151 15.1796 8.42857 15.1796Z"/>
            </symbol>
            <symbol id='heartIcon' viewBox="0 0 20 20">
                <path
                    d="M18.3845 1.85676C17.3373 0.665541 15.9508 0.0144683 14.4711 0.0144683C12.9913 0.0144683 11.6006 0.670364 10.5533 1.86159L10.0064 2.48372L9.45092 1.85194C8.40365 0.660719 7.0087 0 5.52895 0C4.05344 0 2.66273 0.655896 1.61969 1.8423C0.57242 3.03352 -0.00421676 4.61539 2.32169e-05 6.29853C2.32169e-05 7.98167 0.5809 9.55872 1.62817 10.7499L9.59084 19.8071C9.70108 19.9325 9.84948 20 9.99364 20C10.1378 20 10.2862 19.9373 10.3964 19.8119L18.3761 10.7692C19.4233 9.57801 20 7.99614 20 6.313C20.0042 4.62985 19.4318 3.04799 18.3845 1.85676ZM17.5705 9.84808L9.99364 18.4326L2.43377 9.83362C1.60273 8.88835 1.14482 7.63444 1.14482 6.29853C1.14482 4.96262 1.59849 3.70871 2.42953 2.76827C3.25632 1.82783 4.35872 1.30697 5.52895 1.30697C6.70342 1.30697 7.81005 1.82783 8.64109 2.77309L9.59932 3.86303C9.82404 4.11864 10.1844 4.11864 10.4092 3.86303L11.3589 2.78273C12.1899 1.83747 13.2966 1.31661 14.4668 1.31661C15.637 1.31661 16.7394 1.83747 17.5705 2.77791C18.4015 3.72317 18.8552 4.97709 18.8552 6.313C18.8594 7.6489 18.4015 8.90282 17.5705 9.84808Z"/>
            </symbol>
            <symbol id='closeIcon' viewBox="0 0 32 33">
                <path
                    d="M14.4697 16.0055L0.305137 30.2696C-0.0883785 30.6659 -0.0883785 31.3079 0.305137 31.7042C0.501645 31.9026 0.759655 32.0012 1.01716 32.0012C1.27517 32.0012 1.53268 31.9026 1.72919 31.7042L16.0002 17.3328L30.2713 31.7042C30.4683 31.9026 30.7258 32.0012 30.9833 32.0012C31.2408 32.0012 31.4989 31.9026 31.6954 31.7042C32.0889 31.3079 32.0889 30.6659 31.6954 30.2696L17.5313 16.0055L31.7049 1.7314C32.0984 1.33512 32.0984 0.693112 31.7049 0.296832C31.3113 -0.0989441 30.6738 -0.0989441 30.2808 0.296832L16.0007 14.6782L1.71919 0.297336C1.32568 -0.0984406 0.688652 -0.0984406 0.295137 0.297336C-0.0983788 0.693616 -0.0983788 1.33562 0.295137 1.7319L14.4697 16.0055Z"/>
            </symbol>
            <symbol id='fillHeartIcon' viewBox="0 0 14 14">
                <path d="M9.727273 2.090909c-1.1454548 0-2.1545457.572727-2.727273 1.472727-.5727273-.9-1.5818182-1.472727-2.7272727-1.472727C2.4727273 2.090909 1 3.563636 1 5.363636c0 3.245455 6 6.545455 6 6.545455s6-3.272727 6-6.545455c0-1.8-1.472727-3.272727-3.272727-3.272727z"/>
            </symbol>
            <symbol id='arrowIcon' viewBox="0 0 32 52">
                <path d="M6.08907 0L0 6.08907L19.7787 25.9109L0 45.7328L6.08907 51.8219L32 25.9109L6.08907 0Z"/>
            </symbol>
        </svg>
    )
}

export default SvgSprite
