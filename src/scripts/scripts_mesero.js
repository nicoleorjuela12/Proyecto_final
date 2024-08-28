  // Manejar el menú de "Reservas"
  const reservasButton = document.getElementById('reservas-button');
  const reservasMenu = document.getElementById('reservas-menu');
  let reservasMenuVisible = false;

  reservasButton.addEventListener('click', () => {
      reservasMenuVisible = !reservasMenuVisible;
      reservasMenu.style.display = reservasMenuVisible ? 'block' : 'none';
  });

  // Manejar el menú del usuario
  const userMenuButton = document.getElementById('user-menu-button');
  const userMenu = document.getElementById('user-menu');
  let userMenuVisible = false;

  userMenuButton.addEventListener('click', () => {
      userMenuVisible = !userMenuVisible;
      userMenu.style.display = userMenuVisible ? 'block' : 'none';
  });

  // Cerrar los menús si el usuario hace clic fuera de ellos
  document.addEventListener('click', (event) => {
      if (!reservasButton.contains(event.target) && !reservasMenu.contains(event.target)) {
          reservasMenu.style.display = 'none';
          reservasMenuVisible = false;
      }
      if (!userMenuButton.contains(event.target) && !userMenu.contains(event.target)) {
          userMenu.style.display = 'none';
          userMenuVisible = false;
      }
  });

  const toggleButton = document.querySelector('[data-collapse-toggle]');
  const menu = document.getElementById('mobile-menu-2');

  toggleButton.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');
  });

  // Manejar el menú de "Tareas"
  const tareasButton = document.getElementById('tareas-button');
  const tareasMenu = document.getElementById('tareas-menu');

  tareasButton.addEventListener('click', () => {
      tareasMenu.style.display = tareasMenu.style.display === 'flex' ? 'none' : 'flex';
  });

  // Cerrar el menú de "Tareas" si el usuario hace clic fuera de él
  document.addEventListener('click', (event) => {
      if (!tareasButton.contains(event.target) && !tareasMenu.contains(event.target)) {
          tareasMenu.style.display = 'none';
      }
  });