let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    const menuData = [
        { id: 1, name: "Empanadas caseras - Jamón y Muzza", price: "13.000", category: "Empanadas", icon: "🥟", image: "imagen/empanadas.jpg" }, 
        { id: 2, name: "Papas fritas Chica", price: "4000", category: "Papas Fritas", icon: "🍟", image: "imagen/img30.jpeg" }, 
        { id: 3, name: "Papas fritas Mediana", price: "5000", category: "Papas Fritas", icon: "🍟", image: "imagen/img10.jpeg" },
        { id: 4, name: "Papas fritas Grande", price: "6000", category: "Papas Fritas", icon: "🍟", image: "imagen/img10.jpeg" },
        { id: 5, name: "Papas Gratinadas", price: "10.000", category: "Papas Fritas", icon: "🍟", image: "imagen/img1.jpeg" },
        { id: 6, name: "Papas Cheddar y verdeo", price: "12.000", category: "Papas Fritas", icon: "🍟", image: "imagen/img1.jpeg" },
        { id: 7, name: "Carlito", price: "5000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img8.jpeg" }, 
        { id: 8, name: "Triple de verduras", price: "6000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img7.jpeg" },
        { id: 9, name: "Pizza Muzza", price: "10.000", category: "Pizzas", icon: "🍕", image: "imagen/img31.jpeg" }, 
        { id: 10, name: "Pizza Muzza y panceta", price: "12.000", category: "Pizzas", icon: "🍕", image: "imagen/img34.jpeg" },
        { id: 11, name: "Pizza Calabresa Esp", price: "14.000", category: "Pizzas", icon: "🍕", image: "imagen/img5.jpeg" },
        { id: 12, name: "Pizza Napolitana", price: "12.000", category: "Pizzas", icon: "🍕", image: "imagen/img6.jpeg" },
        { id: 13, name: "Pizza Jamón y Queso", price: "13.000", category: "Pizzas", icon: "🍕", image: "imagen/img11.jpeg" },
        { id: 14, name: "Pizza Cheddar y panceta", price: "13.000", category: "Pizzas", icon: "🍕", image: "imagen/img11.jpeg" },
        { id: 15, name: "Pizza Lomopizza", price: "35.999", category: "Pizzas", icon: "🍕", image: "imagen/img4.jpeg" },
        { id: 16, name: "Hamburguesa Simple", price: "5000", category: "Hamburguesas", icon: "🍔", image: "imagen/img28.jpeg" }, 
        { id: 17, name: "Hamburguesa Simple + Papas", price: "6000", category: "Hamburguesas", icon: "🍔", image: "imagen/img29.jpeg" },
        { id: 18, name: "Hamburguesa Especial + Papas", price: "7000", category: "Hamburguesas", icon: "🍔", image: "imagen/img13.jpeg" },
        { id: 19, name: "Hamburguesa Cheddar y panceta + Papas", price: "10.500", category: "Hamburguesas", icon: "🍔", image: "imagen/img32.jpeg" },
        { id: 20, name: "Sándwich Mila Carne Simple + Papas", price: "15.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/img26.jpeg" }, 
        { id: 21, name: "Sándwich Mila Pollo Especial + Papas", price: "18.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/img26.jpeg" },
        { id: 22, name: "Lomo simple + Papas", price: "18.000", category: "Lomos", icon: "🥩", image: "imagen/img25.jpeg" }, 
        { id: 23, name: "Lomo especial + Papas", price: "19.000", category: "Lomos", icon: "🥩", image: "imagen/img22.jpeg" },
        { id: 24, name: "Lomo cheddar y panceta + Papas", price: "20.000", category: "Lomos", icon: "🥩", image: "imagen/img22.jpeg" },
        { id: 25, name: "Milanesa Napolitana individual + 🍟", price: "15.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/img2.jpeg" }, 
        { id: 26, name: "Milanesa Fugazza individual + 🍟", price: "14.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/img2.jpeg" },
        { id: 27, name: "Mila p/compartir Cheddar c/ panceta +🍟", price: "26.000", category: "Milanesas p/compartir", icon: "👨‍👩‍👧‍👦", image: "imagen/img27.jpeg" }, 
        { id: 28, name: "Mila napolitana M +🍟 (carne o pollo)", price: "25.000", category: "Milanesas p/compartir", icon: "👨‍👩‍👧‍👦", image: "imagen/img27.jpeg" },
        { id: 29, name: "Picada Individual", price: "14.000", category: "Picadas", icon: "🧀", image: "imagen/img16.jpeg" }, 
        { id: 30, name: "Picada clásica 2", price: "25.000", category: "Picadas", icon: "🧀", image: "imagen/img16.jpeg" },
        { id: 31, name: "Pic. Completa", price: "30.000", category: "Picadas", icon: "🧀", image: "imagen/img16.jpeg" }
    ];

    const menuContainer = document.getElementById('menu-list');
    const categoryButtonsContainer = document.getElementById('category-buttons');

    window.agregarAlCarrito = (id) => {
        const producto = menuData.find(item => item.id === id);
        carrito.push(producto);
        actualizarInterfaz();
    };

    window.eliminarDelCarrito = (index) => {
        carrito.splice(index, 1);
        actualizarInterfaz();
    };

    function actualizarInterfaz() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) cartCount.innerText = carrito.length;

        const lista = document.getElementById('lista-carrito');
        if (lista) {
            lista.innerHTML = '';
            let total = 0;
            carrito.forEach((item, index) => {
                const precioLimpio = parseInt(item.price.replace(/\./g, '').replace(/,/g, ''));
                total += precioLimpio;
                lista.innerHTML += `
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <div>${item.name}</div>
                        <div>
                            <span class="badge bg-primary rounded-pill me-2">$${item.price}</span>
                            <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito(${index})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </li>`;
            });
            document.getElementById('total-pago').innerText = `$${total.toLocaleString('es-AR')}`;
        }

        // Lógica corregida para mostrar Alias y ocultar botón de pago
        const selectorPago = document.getElementById('forma-pago');
        const cuadroAlias = document.getElementById('contenedor-alias');

        if (selectorPago && cuadroAlias) {
            cuadroAlias.style.display = (selectorPago.value === "Transferencia") ? 'block' : 'none';
        }
    }

    const formaPagoSelect = document.getElementById('forma-pago');
    if (formaPagoSelect) {
        formaPagoSelect.addEventListener('change', actualizarInterfaz);
    }

    window.enviarPedidoWhatsApp = () => {
        const nombre = document.getElementById('cliente-nombre').value;
        const tel = document.getElementById('cliente-tel').value;
        const dir = document.getElementById('cliente-dir').value;
        const pago = document.getElementById('forma-pago').value;
        const total = document.getElementById('total-pago').innerText;

        if (!nombre || !dir || !tel) {
            alert("Por favor completa Nombre, Teléfono y Dirección.");
            return;
        }

        if (carrito.length === 0) {
            alert("El carrito está vacío.");
            return;
        }

        let mensaje = `*DELEITTESE - NUEVO PEDIDO* 👨🏾‍🍳\n\n`;
        mensaje += `*CLIENTE:* ${nombre}\n`;
        mensaje += `*TEL:* ${tel}\n`;
        mensaje += `*DIR:* ${dir}\n`;
        mensaje += `*PAGO:* ${pago}\n\n`;
        mensaje += `*PRODUCTOS:*\n`;
        
        carrito.forEach((item, index) => {
            mensaje += `${index + 1}. ${item.name} - $${item.price}\n`;
        });

        mensaje += `\n*TOTAL: ${total}*\n`;

        if (pago === "Transferencia") {
            mensaje += `\n--------------------------\n`;
            mensaje += `*DATOS DE TRANSFERENCIA*\n`;
            mensaje += `*Titular:* Facundo Omar Torrez\n`;
            mensaje += `*Alias:* facu.deleittese\n`;
            mensaje += `--------------------------\n`;
            mensaje += `_Por favor, envía el comprobante por aquí._`;
        }

        const numeroDuenio = "5493644679057"; 
        const url = `https://wa.me/${numeroDuenio}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');

        carrito = [];
        actualizarInterfaz();
        document.getElementById('cliente-nombre').value = '';
        document.getElementById('cliente-tel').value = '';
        document.getElementById('cliente-dir').value = '';
        const modalEl = document.getElementById('modalCarrito');
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
    };

    function renderMenuItem(item) {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-3 col-md-6 col-sm-12 mb-4'; 
        colDiv.innerHTML = `
            <div class="card menu-card h-100">
                <img src="${item.image}" class="card-img-top menu-item-image" alt="${item.name}" style="height: 250px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title fw-bold">${item.icon} ${item.name}</h6>
                    <p class="card-text text-muted small">${item.category}</p>
                    <div class="mt-auto">
                        <p class="price mb-2">$${item.price}</p>
                        <button class="btn btn-dark btn-sm w-100" onclick="agregarAlCarrito(${item.id})">
                            <i class="fas fa-plus"></i> Agregar
                        </button>
                    </div>
                </div>
            </div>`;
        return colDiv;
    }

    function displayMenu(category = 'Todas') {
        const menuContainer = document.getElementById('menu-list');
        menuContainer.innerHTML = '';
        const filtered = category === 'Todas' ? menuData : menuData.filter(i => i.category === category);
        filtered.forEach(item => menuContainer.appendChild(renderMenuItem(item)));
    }

    function setupButtons() {
        const categories = ['Todas', ...new Set(menuData.map(i => i.category))];
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-outline-dark btn-sm me-2 mb-2';
            btn.innerText = cat;
            btn.onclick = () => {
                displayMenu(cat);
                document.querySelectorAll('#category-buttons button').forEach(b => b.classList.replace('btn-dark', 'btn-outline-dark'));
                btn.classList.replace('btn-outline-dark', 'btn-dark');
            };
            if(cat === 'Todas') btn.classList.replace('btn-outline-dark', 'btn-dark');
            categoryButtonsContainer.appendChild(btn);
        });
    }

    setupButtons();
    displayMenu();
});
