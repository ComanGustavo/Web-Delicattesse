let carrito = [];
const COSTO_ENVIO = 1800; // Valor del envío ajustable

document.addEventListener('DOMContentLoaded', () => {
    const menuData = [
        { id: 1, name: "Empanadas caseras - Jamón y Muzza", price: "15.000", category: "Empanadas", icon: "🥟", image: "imagen/empanadas.jpg" }, 
        { id: 2, name: "Papas Fritas Chica", price: "4000", category: "Papas Fritas", icon: "🍟", image: "imagen/img58.jpeg" }, 
        { id: 3, name: "Papas Fritas Mediana", price: "5000", category: "Papas Fritas", icon: "🍟", image: "imagen/img57.jpeg" },
        { id: 4, name: "Papas Fritas Grande", price: "6000", category: "Papas Fritas", icon: "🍟", image: "imagen/img10.jpeg" },
        { id: 5, name: "Papas con Cheddar", price: "12.000", category: "Papas Fritas", icon: "🍟", image: "imagen/img55.jpeg" },
        
        { id: 7, name: "Carlito", price: "6000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img8.jpeg" }, 
        { id: 8, name: "Triple Frío de Verduras con Jamón y Queso", price: "7000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img7.jpeg" },
        { id: 44, name: "Triple Tostado con Verduras", price: "7000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img65.jpeg" },
        { id: 43, name: "Miga con Jamón y Queso", price: "6000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img64.jpeg" },
        { id: 47, name: "Psicodélico con Papas", price: "23000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img70.jpeg" },

        { id: 9, name: "Pizza Muzzarella", price: "12.000", category: "Pizzas", icon: "🍕", image: "imagen/img31.jpeg" }, 
        { id: 10, name: "Pizza Muzzarella y Panceta", price: "14.000", category: "Pizzas", icon: "🍕", image: "imagen/img34.jpeg" },
        { id: 11, name: "Pizza Calabresa ", price: "14.000", category: "Pizzas", icon: "🍕", image: "imagen/img5.jpeg" },
        { id: 6, name:  "Pizza Especial Calabresa  ", price: "15.500", category: "Pizzas", icon: "🍕", image: "imagen/img85.jpeg" },
        { id: 12, name: "Pizza Especial", price: "15.000", category: "Pizzas", icon: "🍕", image: "imagen/img6.jpeg" },
        { id: 13, name: "Pizza Jamón y Huevos", price: "16.000", category: "Pizzas", icon: "🍕", image: "imagen/img11.jpeg" },
        { id: 14, name: "Pizza Jamón y Morrones", price: "16.000", category: "Pizzas", icon: "🍕", image: "imagen/img14.jpeg" },
        { id: 35, name: "Media Pizza Especial Calabresa y  Media Pizza Especial Cheddar y Panceta", price: "18.000", category: "Pizzas", icon: "🍕", image: "imagen/img53.jpeg" },
        { id: 33, name: "Pizza Roquefort y Panceta ", price: "16.000", category: "Pizzas", icon: "🍕", image: "imagen/img51.jpeg" },
        { id: 37, name: "Pizza Cheddar y Panceta ", price: "16.000", category: "Pizzas", icon: "🍕", image: "imagen/img59.jpeg" },
        { id: 60, name: "Pizza Napolitana ", price: "16.000", category: "Pizzas", icon: "🍕", image: "imagen/.jpeg" },
        { id: 39, name: "Pizza Napolitana Completa ", price: "19.000", category: "Pizzas", icon: "🍕", image: "imagen/img83.jpeg" },
        { id: 84, name: "Pizza Napolitana con Jamón ", price: "17.000", category: "Pizzas", icon: "🍕", image: "imagen/img61.jpeg" },
        { id: 40, name: "Pizza Especial de Palmitos ", price: "19.000", category: "Pizzas", icon: "🍕", image: "imagen/img62.jpeg" },
        { id: 41, name: "Pizza Jamón y Queso", price: "14.000", category: "Pizzas", icon: "🍕", image: "imagen/img84.jpeg" },
        { id: 46, name: "Pizza Cuatro Sabores", price: "17.000", category: "Pizzas", icon: "🍕", image: "imagen/img69.jpeg" },
        { id: 15, name: "Lomopizza", price: "40.000", category: "Pizzas", icon: "🍕", image: "imagen/img4.jpeg" },

        { id: 16, name: "Hamburguesa Simple", price: "7.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img28.jpeg" }, 
        { id: 17, name: "Hamburguesa Simple + Papas", price: "9.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img29.jpeg" },
        { id: 18, name: "Hamburguesa Doble Especial con Panceta", price: "13.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img13.jpeg" },
        { id: 61, name: "Hamburguesa Especial ", price: "8.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img90.jpeg" },
        { id: 45, name: "Hamburguesa Especial con Papas", price: "10.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img68.jpeg" },
        { id: 19, name: "Hamburguesa Roquefort y Panceta", price: "9.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img32.jpeg" },
       
        { id: 20, name: "Sándwich Milanesa de Carne Simple + Papas(Económico)", price: "00.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/img26.jpeg" },
        { id: 62, name: "Sándwich Milanesa de Carne Simple + Papas(Premium)", price: "15.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/" },
        { id: 63, name: "Sándwich Milanesa de Carne Especial + Papas(Económico)", price: "00.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/" }, 
        { id: 64, name: "Sándwich Milanesa de Carne Especial + Papas(Premium)", price: "00.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/" },   
        { id: 65, name: "Sándwich Milanesa de Pollo Simple + Papas (Económico)", price: "00.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/" },
        { id: 66, name: "Sándwich Milanesa de Pollo Especial + Papas(Económico)", price: "00.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/" },   
        { id: 21, name: "Sándwich Milanesa de Pollo Especial + Papas (Premium)", price: "19.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/" },
       
        { id: 67, name: "Lomo simple + Papas (Económica)", price: "00.000", category: "Lomos", icon: "🥩", image: "imagen/" }, 
        { id: 68, name: "Lomo especial + Papas (Económica)", price: "00.000", category: "Lomos", icon: "🥩", image: "imagen/" },
        { id: 22, name: "Lomo simple + Papas (Premium)", price: "19.000", category: "Lomos", icon: "🥩", image: "imagen/img25.jpeg" }, 
        { id: 23, name: "Lomo especial + Papas (Premium)", price: "20.000", category: "Lomos", icon: "🥩", image: "imagen/img22.jpeg" },
        { id: 24, name: "Lomo con cheddar y panceta + Papas(Económico)", price: "00.000", category: "Lomos", icon: "🥩", image: "imagen/img.jpeg" },
        { id: 34, name: "Lomo con Cheddar y Panceta (Premuim)", price: "20.000", category: "Lomos", icon: "🥩", image: "imagen/img52.jpeg" },
        { id: 69, name: "Lomo Encebollado + Papas (Económica)", price: "00.000", category: "Lomos", icon: "🥩", image: "imagen/" }, 
        { id: 70, name: "Lomo Enceballado + Papas (Premium)", price: "19.500", category: "Lomos", icon: "🥩", image: "imagen/" },
        { id: 71, name: "Lomo Roquefort + Papas (Económica)", price: "00.000", category: "Lomos", icon: "🥩", image: "imagen/" }, 
        { id: 72, name: "Lomo Roquefort + Papas (Premium)", price: "20.000", category: "Lomos", icon: "🥩", image: "imagen/" },


        { id: 25, name: "Milanesa Napolitana de Carne XL + Papas", price: "27.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img2.jpeg" }, 
        { id: 76, name: "Milanesa Napolitana de Carne Individual + Papas", price: "16.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/" }, 
        { id: 28, name: "Milanesa Napolitana de Pollo XL + Papas ", price: "27.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img73.jpeg" },
        { id: 73, name: "Milanesa con Cheddar y Panceta Individual + Papas", price: "16.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/" }, 
        { id: 74, name: "Milanesa con Cheddar y Panceta XL + Papas", price: "28.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img27.jpeg" },
        { id: 26, name: "Milanesa Calabresa XL + Papas", price: "27.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img56.jpeg" },
        { id: 75, name: "Milanesa Fugazza Individual + Papas", price: "14.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/" },
        { id: 50, name: "Milanesa Fugazza XL + Papas", price: "26.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img75.jpeg" },
        { id: 48, name: "Milanesa Napolitana de Pollo (Promoción)", price: "25.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/img71.jpeg" }, 
        { id: 78, name: "Milanesa Individual con Roquefort y Panceta + Papas", price: "16.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/img76.jpeg" },
        { id: 77, name: "Milanesa con Roquefort y Panceta XL + Papas", price: "28.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/.jpeg" },
        { id: 51, name: "Milanesa Muzzarella XL con Panceta y Huevos + Papas", price: "27.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img76.jpeg" },
        { id: 52, name: "Milanesa a Caballo XL + Papas", price: "22.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img77.jpeg" },

        { id: 29, name: "Picada Individual", price: "15.000", category: "Picadas", icon: "🧀", image: "imagen/img67.jpeg" }, 
        { id: 79, name: "Picada Nueva", price: "15.000", category: "Picadas", icon: "🧀", image: "imagen/img78.jpeg" },
        { id: 80, name: "Picada 5", price: "16.000", category: "Picadas", icon: "🧀", image: "imagen/img79.jpeg" },
        { id: 81, name: "Media Picada Clásica 2", price: "16.000", category: "Picadas", icon: "🧀", image: "imagen/img80.jpeg" },
        { id: 83, name: "Media Picada Clásica 3", price: "00.000", category:"Picadas" , icon:"🧀" , image:"imagen/img82.jpeg" },
        { id: 82, name: "Media Picada Clásica 4", price: "16.000", category: "Picadas", icon: "🧀", image: "imagen/img81.jpeg" },
        { id: 31, name: "Picada Completa", price: "32.000", category: "Picadas", icon: "🧀", image: "imagen/img16.jpeg" },
        { id: 42, name: "Picada 2", price: "15.000", category: "Picadas", icon: "🧀", image: "imagen/img63.jpeg" },
        { id: 86, name: "Picada Clásica ", price: "28.000", category: "Picadas", icon: "🧀", image: "imagen/img88.jpeg" },
        { id: 87, name: "Picada Clásica Completa", price: "32.000", category: "Picadas", icon: "🧀", image: "imagen/img88.jpeg" },
        { id: 85, name: "Picada Clásica 1", price: "25.000", category: "Picadas", icon: "🧀", image: "imagen/img87.jpeg" },
        { id: 49, name: "Picada Clásica 3", price: "26.000", category: "Picadas", icon: "🧀", image: "imagen/img72.jpeg" },
        { id: 84, name: "Picada Clásica 4", price: "28.000", category: "Picadas", icon: "🧀", image: "imagen/img86.jpeg" }
    ];

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
            let subtotal = 0;
            carrito.forEach((item, index) => {
                const precioLimpio = parseInt(item.price.replace(/\./g, '').replace(/,/g, ''));
                subtotal += precioLimpio;
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

            let totalFinal = subtotal > 0 ? subtotal + COSTO_ENVIO : 0;
            
            if (carrito.length > 0) {
                lista.innerHTML += `
                    <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-info">
                        <div><strong>Costo de Envío</strong></div>
                        <div><span class="badge bg-info text-dark rounded-pill me-5">$${COSTO_ENVIO.toLocaleString('es-AR')}</span></div>
                    </li>`;
            }
            document.getElementById('total-pago').innerText = `$${totalFinal.toLocaleString('es-AR')}`;
        }

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

        mensaje += `\n*COSTO DE ENVÍO:* $${COSTO_ENVIO.toLocaleString('es-AR')}\n`;
        mensaje += `*TOTAL FINAL: ${total}*\n`;

        if (pago === "Transferencia") {
            mensaje += `\n--------------------------\n`;
            mensaje += `⚠️ *AVISO SOBRE EL PAGO* ⚠️\n`;
            mensaje += `*El pedido no será procesado hasta recibir el comprobante de pago.*\n\n`;
            mensaje += `*Alias:* facu.deleittese\n`;
            mensaje += `*Titular:* Facundo Omar Torrez\n`;
            mensaje += `--------------------------\n`;
            mensaje += `✅ *Enviando comprobante en breve...*`;
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
            const catButtons = document.getElementById('category-buttons');
            if(catButtons) catButtons.appendChild(btn);
        });
    }

    setupButtons();
    displayMenu();
});