// document.addEventListener('DOMContentLoaded', function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     const userId = urlParams.get('user_id');
//     const catId = urlParams.get('catid');
//     const categoria = urlParams.get('categoria');
//     console.log(userId, catId, categoria);

//     fetch('main.php')
//         .then(response => response.json())
//         .then(data => {
//             loadBanners(data.banners);
//             loadLancamentos(data.lancamentos);
//             loadMaisProcuradas(data.maisProcuradas);
//             loadModelosPremium(data.modelosPremium);
//             loadTop10Brasil(data.top10Brasil);
//             loadTop10Gringas(data.top10Gringas);
//             loadTop10Loiras(data.top10Loiras);
//             loadTop10Gamers(data.top10Gamers);
//             loadModelos(); // Carregar modelos

//             if (userId) {
//                 loadCompras(userId);
//             }
//             if (catId) {
//                 fetchItemDetails(catId, userId);
//             }
//         });

//     function loadBanners(banners) {
//         const bannerContainer = document.getElementById('banner-container');
//         banners.forEach((banner, index) => {
//             const bannerElement = document.createElement('div');
//             bannerElement.classList.add('banner');
//             if (index === 0) {
//                 bannerElement.classList.add('active');
//             }
//             bannerElement.style.backgroundImage = `url(${banner.image})`;
//             bannerElement.innerHTML = `
//                 <div class="banner-content">
//                     <h1 class="movie-title">${banner.title}</h1>
//                     <div class="price-and-button">
//                         <span class="price">R${formatNumber(banner.price)}</span>
//                         <button class="btn" data-id="${banner.id}">Detalhes</button>
//                     </div>
//                 </div>
//             `;
//             bannerContainer.appendChild(bannerElement);
//         });

//         initializeCarousel();

//         const bannerButtons = document.querySelectorAll('.banner .btn');
//         bannerButtons.forEach(button => {
//             button.addEventListener('click', function (event) {
//                 event.preventDefault();
//                 const itemId = this.dataset.id;
//                 fetchItemDetails(itemId, userId);
//             });
//         });
//     }

//     function initializeCarousel() {
//         const banners = document.querySelectorAll('.banner');
//         let currentBanner = 0;

//         function showBanner(index) {
//             banners.forEach((banner, i) => {
//                 banner.classList.remove('active');
//                 if (i === index) {
//                     banner.classList.add('active');
//                 }
//             });
//         }

//         function nextBanner() {
//             currentBanner = (currentBanner + 1) % banners.length;
//             showBanner(currentBanner);
//         }

//         showBanner(currentBanner);
//         setInterval(nextBanner, 5000);
//     }

//     function loadLancamentos(lancamentos) {
//         const lancamentosContainer = document.getElementById('lancamentos-container');
//         const limitedLancamentos = lancamentos.slice(0, 10); // Limitar a 10 itens

//         limitedLancamentos.forEach(item => {
//             const card = document.createElement('div');
//             card.classList.add('card');
//             card.innerHTML = `<a href="#" class="catalog-item" data-id="${item.id}"><img src="${item.image}" alt="${item.title}"></a>`;
//             lancamentosContainer.appendChild(card);
//         });
//     }

//     function loadMaisProcuradas(maisProcuradas) {
//         const container = document.getElementById('mais-procuradas-container');
//         maisProcuradas.forEach(item => {
//             const card = document.createElement('div');
//             card.classList.add('card');
//             card.innerHTML = `<a href="#" class="catalog-item" data-id="${item.id}"><img src="${item.image}" alt="${item.title}"></a>`;
//             container.appendChild(card);
//         });
//     }

//     function loadModelosPremium(modelosPremium) {
//         const container = document.getElementById('modelos-premium-container');
//         modelosPremium.forEach(item => {
//             const card = document.createElement('div');
//             card.classList.add('card');
//             card.innerHTML = `<a href="#" class="catalog-item" data-id="${item.id}"><img src="${item.image}" alt="${item.title}"></a>`;
//             container.appendChild(card);
//         });
//     }

//     function loadTop10Brasil(top10Brasil) {
//         const container = document.getElementById('top-10-brasil-container');
//         top10Brasil.forEach(item => {
//             const card = document.createElement('div');
//             card.classList.add('card');
//             card.innerHTML = `<a href="#" class="catalog-item" data-id="${item.id}"><img src="${item.image}" alt="${item.title}"></a>`;
//             container.appendChild(card);
//         });
//     }

//     function loadTop10Gringas(top10Gringas) {
//         const container = document.getElementById('top-10-gringas-container');
//         top10Gringas.forEach(item => {
//             const card = document.createElement('div');
//             card.classList.add('card');
//             card.innerHTML = `<a href="#" class="catalog-item" data-id="${item.id}"><img src="${item.image}" alt="${item.title}"></a>`;
//             container.appendChild(card);
//         });
//     }

//     function loadTop10Loiras(top10Loiras) {
//         const container = document.getElementById('top-10-loiras-container');
//         top10Loiras.forEach(item => {
//             const card = document.createElement('div');
//             card.classList.add('card');
//             card.innerHTML = `<a href="#" class="catalog-item" data-id="${item.id}"><img src="${item.image}" alt="${item.title}"></a>`;
//             container.appendChild(card);
//         });
//     }

//     function loadTop10Gamers(top10Gamers) {
//         const container = document.getElementById('top-10-gamers-container');
//         top10Gamers.forEach(item => {
//             const card = document.createElement('div');
//             card.classList.add('card');
//             card.innerHTML = `<a href="#" class="catalog-item" data-id="${item.id}"><img src="${item.image}" alt="${item.title}"></a>`;
//             container.appendChild(card);
//         });
//     }

//     function loadModelos() {
//         fetch('listModelos.php') // Supondo que este script PHP retorna a lista de modelos
//             .then(response => response.json())
//             .then(data => {
//                 const modelosContainer = document.getElementById('todas-as-modelos-container');
//                 modelosContainer.innerHTML = ''; // Limpa o container antes de adicionar novos itens

//                 data.slice(0, 10).forEach(modelo => { // Limitar a 10 modelos
//                     const card = document.createElement('div');
//                     card.classList.add('card');
//                     card.innerHTML = `
//                         <a href="#" class="catalog-item" data-id="${modelo.id}">
//                             <img src="${modelo.image}" alt="${modelo.name}" style="width: 133.99px; height: 204.32px;">
//                         </a>`;
//                     modelosContainer.appendChild(card);
//                 });
//             });
//     }

//     function loadCompras(userId) {
//         fetch(`main.php?action=loadCompras&user_id=${userId}`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 const compras = document.getElementById('compras');
//                 const comprasContainer = document.getElementById('compras-container');
//                 comprasContainer.innerHTML = ''; // Limpa o container antes de adicionar novos itens

//                 if (data.length > 0) {
//                     compras.style.display = 'block';
//                     data.forEach(item => {
//                         const card = document.createElement('div');
//                         card.classList.add('card');
//                         card.innerHTML = `<a href="#" class="catalog-item" data-id="${item.id}"><img src="${item.image}" alt="${item.title}"></a>`;
//                         comprasContainer.appendChild(card);
//                     });
//                 } else {
//                     compras.style.display = 'none';
//                 }
//             });
//     }

//     document.addEventListener('click', function (event) {
//         if (event.target.matches('.catalog-item, .catalog-item img')) {
//             event.preventDefault();
//             const itemId = event.target.closest('.catalog-item').dataset.id;
//             fetchItemDetails(itemId, userId);
//         }
//     });

//     function formatNumber(num) {
//         return num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
//     }

//     function fetchItemDetails(itemId, userId) {
//         fetch(`main.php?catid=${itemId}&user_id=${userId}`)
//             .then(response => response.json())
//             .then(data => {
//                 const popup = document.getElementById('popup');
//                 document.getElementById('popup-image').src = data.imagem;
//                 document.getElementById('popup-title').textContent = data.nome;

//                 let synopsis = data.sinopse;
//                 if (data.categoria === 'Reels') {
//                     synopsis = "⭐️SÉRIE COMPLETA⭐️<br>" + synopsis;
//                 }
//                 document.getElementById('popup-synopsis').innerHTML = synopsis;

//                 const oldPriceElement = document.getElementById('popup-old-price');
//                 const newPriceElement = document.getElementById('popup-new-price');
//                 const popupSpan = document.getElementById('popup-price-span');
//                 const oldPriceWrapper = document.querySelector('.old-price-wrapper');
//                 const brElement = oldPriceWrapper.nextElementSibling;

//                 let newPrice = data.preco_real;

//                 if (data.promo > 0) {
//                     const discount = (data.preco_real * data.promo) / 100;
//                     newPrice = data.preco_real - discount;

//                     oldPriceElement.textContent = `De: R${formatNumber(data.preco_real)}`;
//                     oldPriceElement.style.display = 'block';
//                     if (brElement.tagName === 'BR') {
//                         brElement.style.display = 'block';
//                     }
//                     newPriceElement.textContent = `Por: R${formatNumber(newPrice)}`;
//                 } else {
//                     oldPriceElement.style.display = 'none';
//                     if (brElement.tagName === 'BR') {
//                         brElement.style.display = 'none';
//                     }
//                     newPriceElement.textContent = `Por: R${formatNumber(newPrice)}`;
//                 }

//                 if (data.comprado) {
//                     popupSpan.style.display = 'none';
//                     document.querySelector('.popup-btn').textContent = 'Acessar';
//                     document.querySelector('.popup-btn').setAttribute('onclick', `sendDataToBot("${data.id}", "${data.nome}", "True", "${data.canal_id}"); return false;`);
//                 } else {
//                     popupSpan.style.display = 'block';
//                     document.querySelector('.popup-btn').textContent = 'Comprar';
//                     document.querySelector('.popup-btn').setAttribute('onclick', `sendDataToBot("${data.id}", "${data.nome}", "${newPrice.toFixed(2)}", "${data.canal_id}"); return false;`);
//                 }

//                 popup.classList.add('show');
//                 popup.classList.remove('hide');
//                 popup.style.display = 'flex';
//             });
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    fetch('listModelos.php')
        .then(response => response.json())
        .then(data => {
            loadModelos(data, 'mais-procuradas-container');
            loadModelos(data, 'modelos-premium-container');
            loadModelos(data, 'top-10-brasil-container');
            loadModelos(data, 'top-10-gringas-container');
            loadModelos(data, 'top-10-loiras-container');
            loadModelos(data, 'top-10-gamers-container');
            loadModelos(data, 'todas-as-modelos-container');
        })
        .catch(error => console.error('Erro ao carregar modelos:', error));

    function loadModelos(data, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Limpa o container antes de adicionar novos itens

        data.slice(0, 10).forEach(modelo => { // Limitar a 10 modelos
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <a href="#" class="catalog-item" data-id="${modelo.id}">
                    <img src="${modelo.image}" alt="${modelo.name}" style="width: 133.99px; height: 204.32px;">
                </a>`;
            container.appendChild(card);
        });
    }
});