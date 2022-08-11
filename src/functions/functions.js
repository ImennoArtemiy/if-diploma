export const getRubleForUsd = (rub) => {
    return Math.round(rub / 76).toFixed(2)
}

export const getDiscountPrice = (currentPrice, discountValue) => {
    return ((currentPrice - ((currentPrice / 100) * discountValue))).toFixed(2)
}

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};


