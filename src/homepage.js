const createHomepage = () => {
    const homepage = document.createElement('div')
    homepage.id = 'homepage-content'

    const img = document.createElement('img')
    img.id = 'homepage-img'
    img.src = '../assets/brunch.jpg'
    img.alt = 'Brunch food on a table'

    const header = document.createElement('h1')
    header.textContent = 'Cosy Corner Cardiff'

    const description = document.createElement('p')
    description.textContent = 'Cosy Corner, a brunch haven in the heart of the city, \
        invites you to enjoy a delightful menu featuring classic and innovative brunch options. \
        Our cafe exudes a cozy charm with inviting decor, comfortable seating, and a touch of rustic elegance. \
        Whether indoors or on our outdoor patio, Cosy Corner is the perfect spot for a leisurely brunch any day of the week. \
        Join us for a comforting and flavorful experience where every bite is a delight.'
    
    homepage.appendChild(img)
    homepage.appendChild(header)
    homepage.appendChild(description)

    return homepage
}

const loadHomepage = () => {
    const contentDiv = document.querySelector('#content')
    contentDiv.textContent = ''
    contentDiv.appendChild(createHomepage())
}

export default loadHomepage