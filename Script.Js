document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------
    // 1. Base de Datos Estática del Menú
    // -----------------------------------------------------------
    const menuData = [
        // Empanadas
        { 
            id: 1, 
            name: "Empanadas caseras - Jamón y Muzza", 
            price: "13.000", 
            category: "Empanadas", 
            icon: "🥟", 
            image: "imagen/empanadas.jpg"
        }, 

        // Papas Fritas
        { 
            id: 2, 
            name: "Papas fritas Chica", 
            price: "4000", 
            category: "Papas Fritas", 
            icon: "🍟", 
            image: "imagen/img30.jpeg"
        }, 
        { 
            id: 3, 
            name: "Papas fritas Mediana", 
            price: "5000", 
            category: "Papas Fritas", 
            icon: "🍟", 
            image: "imagen/img10.jpeg"
        },
        { id: 4, name: "Papas fritas Grande", price: "6000", category: "Papas Fritas", icon: "🍟", image: "imagen/img10.jpeg" },
        { id: 5, name: "Papas Gratinadas", price: "10.000", category: "Papas Fritas", icon: "🍟", image: "imagen/img1.jpeg" },
        { id: 6, name: "Papas Cheddar y verdeo", price: "12.000", category: "Papas Fritas", icon: "🍟", image: "imagen/img1.jpeg" },

        // Sándwiches de Migas
        { id: 7, name: "Carlito", price: "5000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img8.jpeg" }, 
        { id: 8, name: "Triple de verduras", price: "6000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img7.jpeg" },

        // Pizzas
        { id: 9, name: "Pizza Muzza", price: "10.000", category: "Pizzas", icon: "🍕", image: "imagen/img31.jpeg" }, 
        { id: 10, name: "Pizza Muzza y panceta", price: "12.000", category: "Pizzas", icon: "🍕", image: "imagen/img34.jpeg" },
        { id: 11, name: "Pizza Calabresa Esp", price: "14.000", category: "Pizzas", icon: "🍕", image: "imagen/img5.jpeg" },
        { id: 12, name: "Pizza Napolitana", price: "12.000", category: "Pizzas", icon: "🍕", image: "imagen/img6.jpeg" },
        { id: 13, name: "Pizza Jamón y Queso", price: "13.000", category: "Pizzas", icon: "🍕", image: "imagen/img11.jpeg" },
        { id: 14, name: "Pizza Cheddar y panceta", price: "13.000", category: "Pizzas", icon: "🍕", image: "imagen/img11.jpeg" },
        { id: 15, name: "Pizza Lomopizza", price: "35.999", category: "Pizzas", icon: "🍕", image: "imagen/img4.jpeg" },

        // Hamburguesas
        { id: 16, name: "Hamburguesa Simple", price: "5000", category: "Hamburguesas", icon: "🍔", image: "imagen/img28.jpeg" }, 
        { id: 17, name: "Hamburguesa Simple + Papas", price: "6000", category: "Hamburguesas", icon: "🍔", image: "imagen/img29.jpeg" },
        { id: 18, name: "Hamburguesa Especial + Papas", price: "7000", category: "Hamburguesas", icon: "🍔", image: "imagen/img13.jpeg" },
        { id: 19, name: "Hamburguesa Cheddar y panceta + Papas", price: "10.500", category: "Hamburguesas", icon: "🍔", image: "imagen/img32.jpeg" },

        // Sándwiches de Mila
        { id: 20, name: "Sándwich Mila Carne Simple + Papas", price: "15.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/img26.jpeg" }, 
        { id: 21, name: "Sándwich Mila Pollo Especial + Papas", price: "18.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/img26.jpeg" },
    
        // Lomos
        { id: 22, name: "Lomo simple + Papas", price: "18.000", category: "Lomos", icon: "🥩", image: "imagen/img25.jpeg" }, 
        { id: 23, name: "Lomo especial + Papas", price: "19.000", category: "Lomos", icon: "🥩", image: "imagen/img22.jpeg" },
        { id: 24, name: "Lomo cheddar y panceta + Papas", price: "20.000", category: "Lomos", icon: "🥩", image: "imagen/img22.jpeg" },

        // Milanesas Individuales
        { id: 25, name: "Milanesa Napolitana individual + 🍟", price: "15.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/img2.jpeg" }, 
        { id: 26, name: "Milanesa Fugazza individual + 🍟", price: "14.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/img2.jpeg" },

        // Milanesas p/compartir
        { id: 27, name: "Mila p/compartir Cheddar c/ panceta +🍟", price: "26.000", category: "Milanesas p/compartir", icon: "👨‍👩‍👧‍👦", image: "imagen/img27.jpeg" }, 
        { id: 28, name: "Mila napolitana M +🍟 (carne o pollo)", price: "25.000", category: "Milanesas p/compartir", icon: "👨‍👩‍👧‍👦", image: "imagen/img27.jpeg" },

        // Picadas
        { id: 29, name: "Picada Individual", price: "14.000", category: "Picadas", icon: "🧀", image: "imagen/img16.jpeg" }, 
        { id: 30, name: "Picada clásica 2", price: "25.000", category: "Picadas", icon: "🧀", image: "imagen/img16.jpeg" },
        { id: 31, name: "Pic. Completa", price: "30.000", category: "Picadas", icon: "🧀", image: "imagen/img16.jpeg" },
    ];

    // -----------------------------------------------------------
    // 2. Elementos del DOM
    // -----------------------------------------------------------
    const menuContainer = document.getElementById('menu-items'); // Contenedor de la galería
    const categoryButtonsContainer = document.getElementById('category-buttons'); // Contenedor de botones
    const searchInput = document.getElementById('search-input'); // Campo de búsqueda
    
    // Obtener todas las categorías únicas
    const allCategories = ['Todas', ...new Set(menuData.map(item => item.category))];

    // -----------------------------------------------------------
    // 3. Función para renderizar una tarjeta de menú (SIN ENLACES)
    // -----------------------------------------------------------
    function renderMenuItem(item) {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-6 col-lg-3 mb-4'; 
        colDiv.innerHTML = `
            <div class="card menu-card h-100">
                <img src="${item.image}" class="card-img-top menu-item-image" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.icon} ${item.name}</h5>
                    <p class="card-text text-muted small">${item.category}</p>
                    <div class="d-flex justify-content-end align-items-center mt-3">
                        <span class="price">$${item.price}</span>
                    </div>
                </div>
            </div>
        `;
        return colDiv;
    }

    // -----------------------------------------------------------
    // 4. Funciones de inicialización y filtrado
    // -----------------------------------------------------------

    let activeCategory = 'Todas'; // Variable para guardar la categoría activa

    // Crea los botones de categoría
    function initializeCategoryButtons() {
        categoryButtonsContainer.innerHTML = '';
        allCategories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'btn btn-sm me-2 mb-2 category-btn';
            button.textContent = category;
            button.setAttribute('data-category', category);

            // Resalta el botón activo
            if (category === activeCategory) {
                button.classList.add('btn-dark');
            } else {
                button.classList.add('btn-outline-dark');
            }

            button.addEventListener('click', () => {
                activeCategory = category;
                // Vuelve a renderizar los botones para actualizar el estilo activo
                initializeCategoryButtons();
                renderMenu(activeCategory, searchInput.value);
            });
            categoryButtonsContainer.appendChild(button);
        });
    }

    // Renderizar los elementos del menú basados en los filtros
    function renderMenu(category, searchTerm = '') {
        menuContainer.innerHTML = '';
        let filteredData = menuData;

        // 1. Filtrar por categoría
        if (category !== 'Todas') {
            filteredData = filteredData.filter(item => item.category === category);
        }

        // 2. Filtrar por término de búsqueda
        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            filteredData = filteredData.filter(item => 
                item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                item.category.toLowerCase().includes(lowerCaseSearchTerm)
            );
        }

        if (filteredData.length === 0) {
            menuContainer.innerHTML = '<div class="col-12"><p class="text-center text-muted">No se encontraron productos que coincidan con los filtros.</p></div>';
        } else {
            filteredData.forEach(item => {
                menuContainer.appendChild(renderMenuItem(item));
            });
        }
    }

    // -----------------------------------------------------------
    // 5. Manejadores de eventos
    // -----------------------------------------------------------
    
    // Solo manejamos el evento de búsqueda
    searchInput.addEventListener('input', () => {
        // Renderiza el menú cada vez que se escribe, manteniendo la categoría activa
        renderMenu(activeCategory, searchInput.value);
    });

    // -----------------------------------------------------------
    // 6. Ejecución inicial
    // -----------------------------------------------------------
    initializeCategoryButtons();
    renderMenu(activeCategory); // Muestra todos los elementos al cargar la página
});