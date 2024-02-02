const createMenuDisplay = () => {
    const menuDisplay = document.createElement('div')
    menuDisplay.id = 'menu-page'

    const menu = [
        {
            name: 'Pancakes',
            description: 'A stack of 6 pancakes served with blueberries, raspberries, cream and syrup',
            price: '£4.95',
            imgSrc: '../assets/pancakes.jpg'
        },
        {
            name: 'Avocado on Toast',
            description: 'Mashed avocado on two slices of sourdough bread topped with tomato salsa',
            price: '£4.95',
            imgSrc: '../assets/avocado-toast.jpg'
        },
        {
            name: 'Eggs Benedict',
            description: 'Ham and poached egg on two English muffins topped with Hollandaise sauce',
            price: '£5.95',
            imgSrc: '../assets/eggs-benedict.jpg'
        },
        {
            name: 'Eggs Royale',
            description: 'Smoked salmon and poached egg two English muffins topped with Hollandaise sauce',
            price: '£5.95',
            imgSrc: '../assets/eggs-royale.jpg'
        },
        {
            name: 'English Breakfast',
            description: 'Two sausages, bacon, fried eggs, hash browns plus tomatoes, mushrooms, beans and toast',
            price: '£6.95',
            imgSrc: '../assets/english-breakfast.jpg'
        },
        {
            name: 'Garden Breakfast',
            description: 'Two vegetarian sausages and hash browns plus sliced avocado, tomatoes, mushrooms, beans and toast',
            price: '£6.95',
            imgSrc: '../assets/garden-breakfast.jpg'
        }
    ]

    menu.forEach((item) => {
        const container = document.createElement('div')
        container.classList.add('menu-item')

        const img = document.createElement('img')
        img.src = item.imgSrc
        img.alt = item.name

        const itemName = document.createElement('h2')
        itemName.textContent = item.name

        const itemDesc = document.createElement('p')
        itemDesc.textContent = item.description

        const itemPrice = document.createElement('h3')
        itemPrice.textContent = item.price

        container.appendChild(img)
        container.appendChild(itemName)
        container.appendChild(itemDesc)
        container.appendChild(itemPrice)

        menuDisplay.appendChild(container)
    })

    return menuDisplay
}

const loadMenu = () => {
    const contentDiv = document.querySelector('#content')
    contentDiv.textContent = ''
    contentDiv.appendChild(createMenuDisplay())
}

export default loadMenu