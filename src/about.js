const createAboutPage = () => {
    const aboutPage = document.createElement('div')
    aboutPage.id = 'about-page'

    const header = document.createElement('h1')
    header.textContent = 'Come dine with us'

    const openingTimes = document.createElement('h2')
    openingTimes.textContent = 'Opening times'

    const para1 = document.createElement('p')
    para1.textContent = 'Monday - Saturday: 8:00am - 3:00pm'

    const para2 = document.createElement('p')
    para2.textContent = 'Sunday: 10:00am - 3:00pm'

    const address = document.createElement('h2')
    address.textContent = 'Address'

    const para3 = document.createElement('p')
    para3.textContent = '27 High Street CF10 8JQ Cardiff'

    const reservations = document.createElement('h2')
    reservations.textContent = 'Reservations'

    const para4 = document.createElement('p')
    para4.textContent = 'For group of 5 or more, contact +44 720 1012030'

    const elements = [header, openingTimes, para1, para2, address, para3, reservations, para4]

    elements.forEach((element) => {
        aboutPage.appendChild(element)
    })

    return aboutPage
}

const loadAboutPage = () => {
    const contentDiv = document.querySelector('#content')
    contentDiv.textContent = ''
    contentDiv.appendChild(createAboutPage())
}

export default loadAboutPage