let carrito = [];

const menuData = [
    // --- NUEVA SECCIÓN: BEBIDAS ---
    { id: 101, name: "Coca Cola 1L", price: "3.500", category: "Bebidas", icon: "🥤", image: "imagen/img79.png", stock: true },
    { id: 102, name: "Sprite 1L", price: "3.300", category: "Bebidas", icon: "🥤", image: "imagen/img80.png", stock: true },
    { id: 103, name: "Fanta 1L", price: "3.300", category: "Bebidas", icon: "🥤", image: "imagen/img81.png", stock: true },
    { id: 104, name: "Coca Cola 1 1/2 L", price: "4.200", category: "Bebidas", icon: "🥤", image: "imagen/img78.png", stock: true },
    { id: 105, name: "Sprite 2L", price: "4.800", category: "Bebidas", icon: "🥤", image: "imagen/img82.png", stock: true },
    { id: 106, name: "Fanta 2L", price: "4.800", category: "Bebidas", icon: "🥤", image: "imagen/img83.png", stock: true },
    { id: 107, name: "Agua Mineral 1 1/2 L", price: "2.000", category: "Bebidas", icon: "💧", image: "imagen/img84.png", stock: true },
    { id: 108, name: "Aquarius 1 1/2 L", price: "2.500", category: "Bebidas", icon: "🧃", image: "imagen/img85.png", stock: true },
    { id: 109, name: "Cerveza Imperial Golden", price: "4.500", category: "Bebidas", icon: "🍺", image: "imagen/img86.png", stock: true },
    { id: 110, name: "Cerveza Stella", price: "5.000", category: "Bebidas", icon: "🍺", image: "imagen/img87.png", stock: true },

    // --- COMIDAS EXISTENTES ---
    { id: 4, name: "Papas Fritas", price: "6.000", category: "Papas Fritas", icon: "🍟", image: "imagen/img10.jpeg", stock: true },
    { id: 6, name: "Papas Gratinadas con Cheddar y verdeo", price: "12.000", category: "Papas Fritas", icon: "🍟", image: "imagen/img1.jpeg", stock: true },
    { id: 7, name: "Carlito", price: "6.000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img8.jpeg", stock: true }, 
    { id: 8, name: "Triple Frío de Verduras con Jamón y Queso", price: "7.000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img7.jpeg", stock: true },
    { id: 44, name: "Triple Tostado de Verduras con jamón y Queso ", price: "7.000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img65.jpeg", stock: true },
    { id: 43, name: "Miga con Jamón y Queso", price: "6.000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img64.jpeg", stock: true },
    { id: 9, name: "Pizza Muzzarella", price: "12.000", category: "Pizzas", icon: "🍕", image: "imagen/img31.jpeg", stock: true }, 
    { id: 11, name: "Pizza Calabresa ", price: "14.000", category: "Pizzas", icon: "🍕", image: "imagen/img5.jpeg", stock: true },
    { id: 12, name: "Pizza Especial", price: "15.000", category: "Pizzas", icon: "🍕", image: "imagen/img6.jpeg", stock: true },
    { id: 40, name: "Pizza Napolitana ", price: "16.000", category: "Pizzas", icon: "🍕", image: "imagen/img.jpeg", stock: true },
    { id: 5, name: "Pizza Napolitana Completa", price: "17.000", category: "Pizzas", icon: "🍕", image: "imagen/img.jpeg", stock: true },
    { id: 33, name: "Pizza Roquefort y Panceta", price: "16.000", category: "Pizzas", icon: "🍕", image: "imagen/img51.jpeg", stock: true },
    { id: 37, name: "Pizza Cheddar y Panceta ", price: "16.000", category: "Pizzas", icon: "🍕", image: "imagen/img59.jpeg", stock: true },
    { id: 39, name: "Pizza Napolitana con Jamón ", price: "17.000", category: "Pizzas", icon: "🍕", image: "imagen/img61.jpeg", stock: true },
    { id: 46, name: "Pizza Cuatro Sabores", price: "17.000", category: "Pizzas", icon: "🍕", image: "imagen/img69.jpeg", stock: true },
    { id: 16, name: "Hamburguesa Simple", price: "7.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img28.jpeg", stock: true }, 
    { id: 17, name: "Hamburguesa Especial", price: "8.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img.jpeg", stock: true },
    { id: 18, name: "Hamburguesa Gratinada", price: "10.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img.jpeg", stock: true },
    { id: 1, name: "Hamburguesa Gratinada con Cheddar", price: "11.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img.jpeg", stock: true },
    { id: 19, name: "Hamburguesa Roquefort y Panceta", price: "9.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img32.jpeg", stock: true },
    { id: 2, name: "Hamburguesa con Cheddar y Panceta", price: "9.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img32.jpeg", stock: true },
    { id: 32, name: "Hamburguesa al Plato", price: "12.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img50.jpeg", stock: true },
    { id: 20, name: "Sándwich Milanesa de Carne (Simple)", price: "15.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/img26.jpeg", stock: true }, 
    { id: 13, name: "Sándwich Milanesa de Carne (Especial)", price: "17.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/img.jpeg", stock: true },
    { id: 14, name: "Sándwich Milanesa de Pollo (Simple)", price: "15.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/img.jpeg", stock: true },
    { id: 15, name: "Sándwich Milanesa de Pollo(Especial)", price: "17.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/img.jpeg", stock: true },
    { id: 22, name: "Lomo simple", price: "17.000", category: "Lomos", icon: "🥩", image: "imagen/img25.jpeg", stock: true }, 
    { id: 23, name: "Lomo especial", price: "18.000", category: "Lomos", icon: "🥩", image: "imagen/img22.jpeg", stock: true },
    { id: 24, name: "Lomo cheddar y panceta", price: "18.000", category: "Lomos", icon: "🥩", image: "imagen/img.jpeg", stock: true },
    { id: 50, name: "Milanesa Fugazza", price: "24.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/img75.jpeg", stock: true },
    { id: 27, name: "Milanesa Cheddar con Panceta más🍟", price: "26.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img27.jpeg", stock: true }, 
    { id: 28, name: "Milanesa Napolitana más🍟", price: "25.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img73.jpeg", stock: true },
    { id: 29, name: "Picada Individual", price: "14.000", category: "Picadas", icon: "🧀", image: "imagen/img67.jpeg", stock: true }, 
    { id: 30, name: "Picada para 2", price: "25.000", category: "Picadas", icon: "🧀", image: "imagen/img15.jpeg", stock: true },
    { id: 31, name: "Picada Familiar", price: "30.000", category: "Picadas", icon: "🧀", image: "imagen/img16.jpeg", stock: true }
];

document.addEventListener('DOMContentLoaded', () => {

    window.modoAdmin = () => {
        const pass = prompt("Acceso Administrador:");
        if (pass === "1234") {
            document.body.classList.toggle("admin-active");
            alert("Modo Admin: Toca el nombre de un producto para agotar/reponer stock.");
        }
    };

    window.toggleStock = (id) => {
        if (!document.body.classList.contains("admin-active")) return;
        const p = menuData.find(i => i.id === id);
        p.stock = !p.stock;
        displayMenu(document.querySelector('#category-buttons .btn-light').innerText);
    };

    window.agregarAlCarrito = (id) => {
        const prod = menuData.find(i => i.id === id);
        if (!prod.stock) return;
        
        const existente = carrito.find(i => i.id === id);
        if (existente) {
            existente.cantidad++;
        } else {
            carrito.push({ ...prod, cantidad: 1 });
        }
        actualizarInterfaz();
    };

    window.actualizarCantidad = (index, delta) => {
        carrito[index].cantidad += delta;
        if (carrito[index].cantidad <= 0) carrito.splice(index, 1);
        actualizarInterfaz();
    };

    function actualizarInterfaz() {
        const count = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        document.getElementById('cart-count').innerText = count;

        const lista = document.getElementById('lista-carrito');
        lista.innerHTML = '';
        let total = 0;

        carrito.forEach((item, index) => {
            const precio = parseInt(item.price.replace(/\./g, ''));
            const subtotal = precio * item.cantidad;
            total += subtotal;

            lista.innerHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-white border-secondary">
                    <div style="width: 50%">${item.name}</div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-sm btn-outline-warning me-2" onclick="actualizarCantidad(${index}, -1)">-</button>
                        <span>${item.cantidad}</span>
                        <button class="btn btn-sm btn-outline-warning ms-2" onclick="actualizarCantidad(${index}, 1)">+</button>
                    </div>
                    <span class="ms-2 fw-bold">$${subtotal.toLocaleString('es-AR')}</span>
                </li>`;
        });

        document.getElementById('total-pago').innerText = `$${total.toLocaleString('es-AR')}`;
        const pago = document.getElementById('forma-pago').value;
        document.getElementById('contenedor-alias').style.display = (pago === "Transferencia") ? 'block' : 'none';
    }

    document.getElementById('forma-pago').addEventListener('change', actualizarInterfaz);

    window.enviarPedidoWhatsApp = () => {
        const mesa = document.getElementById('cliente-mesa').value;
        if (!mesa || carrito.length === 0) return alert("Completa la mesa y agrega productos.");

        let msg = `*DELEITTESE LOCAL - MESA ${mesa}* 🍽️\n\n`;
        carrito.forEach(i => msg += `• ${i.cantidad}x ${i.name} ($${i.price})\n`);
        msg += `\n*TOTAL: ${document.getElementById('total-pago').innerText}*`;
        msg += `\nPAGO: ${document.getElementById('forma-pago').value}`;
        
        const ticketID = Date.now();
        msg += `\n\n📄 Ver Ticket: https://tu-web.com/ticket?id=${ticketID}`;

        window.open(`https://wa.me/5493644679057?text=${encodeURIComponent(msg)}`, '_blank');
        carrito = [];
        actualizarInterfaz();
    };

    window.imprimirTicket = () => {
        const mesa = document.getElementById('cliente-mesa').value || "S/N";
        let t = `<html><body style="font-family:monospace; width:250px; padding: 20px;">
                <h2 style="text-align:center">DELEITTESE</h2>
                <p style="text-align:center">MESA: ${mesa}</p>
                <hr>`;
        carrito.forEach(i => t += `<p>${i.cantidad}x ${i.name.substring(0,15)}... $${i.price}</p>`);
        t += `<hr><h3 style="text-align:right">TOTAL: ${document.getElementById('total-pago').innerText}</h3>
                <p style="font-size:10px; text-align:center">¡Gracias por su compra!</p>
                <script>window.print(); setTimeout(() => { window.close(); }, 500);</script></body></html>`;
        const v = window.open('', '_blank');
        v.document.write(t);
        v.document.close();
    };

    window.llamarMozo = () => {
        const mesa = document.getElementById('cliente-mesa').value || prompt("Indique su Mesa:");
        if (mesa) window.open(`https://wa.me/5493644679057?text=${encodeURIComponent("*ASISTENCIA:* Mesa " + mesa)}`, '_blank');
    };

    function displayMenu(cat = 'Todas') {
        const container = document.getElementById('menu-list');
        container.innerHTML = '';
        const data = cat === 'Todas' ? menuData : menuData.filter(i => i.category === cat);
        data.forEach(item => {
            // Lógica para no cortar imágenes de bebidas [cite: 2025-10-27]
            const extraClass = item.category === 'Bebidas' ? 'img-bebida' : '';
            
            const div = document.createElement('div');
            div.className = 'col-6 col-md-4 col-lg-3 mb-4'; 
            div.innerHTML = `
                <div class="card menu-card h-100 ${item.stock ? '' : 'sin-stock'}">
                    <img src="${item.image}" class="card-img-top menu-item-image ${extraClass}" alt="${item.name}">
                    <div class="card-body d-flex flex-column text-center p-2">
                        <h6 class="card-title fw-bold small" onclick="toggleStock(${item.id})">${item.icon} ${item.name}</h6>
                        <p class="price mt-auto text-primary fw-bold">$${item.price}</p>
                        <button class="btn ${item.stock ? 'btn-dark' : 'btn-secondary disabled'} btn-sm w-100" onclick="agregarAlCarrito(${item.id})">
                            ${item.stock ? 'Agregar' : 'AGOTADO'}
                        </button>
                    </div>
                </div>`;
            container.appendChild(div);
        });
    }

    const cats = ['Todas', ...new Set(menuData.map(i => i.category))];
    const catContainer = document.getElementById('category-buttons');
    cats.forEach(c => {
        const b = document.createElement('button');
        b.className = 'btn btn-outline-light btn-sm px-3';
        b.innerText = c;
        b.onclick = () => {
            displayMenu(c);
            document.querySelectorAll('#category-buttons button').forEach(btn => {
                btn.classList.remove('btn-light');
                btn.classList.add('btn-outline-light');
            });
            b.classList.remove('btn-outline-light');
            b.classList.add('btn-light');
        };
        if(c==='Todas') b.classList.replace('btn-outline-light', 'btn-light');
        catContainer.appendChild(b);
    });

    displayMenu();
});