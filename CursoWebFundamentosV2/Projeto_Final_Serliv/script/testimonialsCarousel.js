function setupTestimonials(config){
    const wrapper = document.querySelector(config.wrapper)
    if(!wrapper){
        return
    }

    const items = wrapper.querySelector(config.items)
    if(!items){
        return
    }
}

setupTestimonials({ wrapper: ".testimonials__rating--wrapper", items: "img"})