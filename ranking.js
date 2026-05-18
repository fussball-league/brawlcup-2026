const RANKING_FINAL = [
    // --- TOP 3 (PODIO OLÍMPICO) ---
    { nombre: "jaison360", avatar: "https://cdn.discordapp.com/avatars/1489688413971021835/6c5996770c985bcd6e5b68131ff2ba04.png", aciertos: 15, puntos: 1600 },
    { nombre: "zomb3r03", avatar: "https://cdn.discordapp.com/avatars/608104916095074318/c2c5bb612e8af626b56bfbb0d29fa030.png", aciertos: 15, puntos: 1600 },
    { nombre: "morgangx10", avatar: "https://cdn.discordapp.com/embed/avatars/0.png", aciertos: 14, puntos: 1525 },

    // --- TABLA DE POSICIONES (RESTO DE JUGADORES) ---
    { nombre: "facundo08r", avatar: "https://cdn.discordapp.com/avatars/798384051190759455/171fb527b80339ca5ccb384e8ad29d1f.png", aciertos: 14, puntos: 1525 },
    { nombre: "teeosnt_", avatar: "https://cdn.discordapp.com/avatars/788423742699077672/8b2a90ad89fd2ece931603826e99ef70.png", aciertos: 14, puntos: 1500 },
    { nombre: "wally.1603", avatar: "https://cdn.discordapp.com/avatars/878968118892978207/15cf0a4b5bf0e815811318e948524cfd.png", aciertos: 14, puntos: 1500 },
    { nombre: "damianmsj", avatar: "https://cdn.discordapp.com/avatars/1277580100958818376/8611acea03daeaf4611e66438a1fea52.png", aciertos: 14, puntos: 1500 },
    { nombre: "alonso_xd.", avatar: "https://cdn.discordapp.com/avatars/1053132285853048892/e88937340f89944eb81453e3cbf15617.png", aciertos: 14, puntos: 1475 },
    { nombre: "borjiitaaaaa", avatar: "https://cdn.discordapp.com/avatars/1170680107271192677/8158d13f8f169690879b30bf8c7fec5d.png", aciertos: 14, puntos: 1475 },
    { nombre: "snow31", avatar: "https://cdn.discordapp.com/avatars/915583916998557767/1ad9e74962a651c6901c1d3270831e9e.png", aciertos: 12, puntos: 1325 },
    { nombre: "kilersanvi_77148", avatar: "https://cdn.discordapp.com/avatars/1381694885480108083/f390061bc6cfcd492c08f3d9ba7c5a55.png", aciertos: 12, puntos: 1300 },
    { nombre: "isyctox", avatar: "https://cdn.discordapp.com/embed/avatars/0.png", aciertos: 12, puntos: 1300 },
    { nombre: "fenixzz__", avatar: "https://cdn.discordapp.com/avatars/651537256905048065/624c8c28ebccbd4f34ea8b81b8dd3b6b.png", aciertos: 12, puntos: 1300 },
    { nombre: "diego088695", avatar: "https://cdn.discordapp.com/avatars/1169321568938233927/6c5996770c985bcd6e5b68131ff2ba04.png", aciertos: 11, puntos: 1250 },
    { nombre: "guillelolo05", avatar: "https://cdn.discordapp.com/avatars/629976713660596226/d4500ae36e586347e500ec86e8c5ee91.png", aciertos: 11, puntos: 1150 },
    { nombre: "alejandrillo._", avatar: "https://cdn.discordapp.com/avatars/826188285025714246/f79ceb08c8d23a8978222a38fe679a6e.png", aciertos: 10, puntos: 1050 },
    { nombre: "hyshiu", avatar: "https://cdn.discordapp.com/avatars/1462874026123722980/450abf2e0d2d266aeb4b777908a69f7e.png", aciertos: 10, puntos: 1050 },
    { nombre: "vg537_yt", avatar: "https://cdn.discordapp.com/avatars/1182704557046907023/a0d2d2ed82c24b8289b133cff3187c7c.png", aciertos: 9, puntos: 975 },
    { nombre: "rub19dor", avatar: "https://cdn.discordapp.com/embed/avatars/0.png", aciertos: 9, puntos: 975 },
    { nombre: "alexander059287", avatar: "https://cdn.discordapp.com/avatars/1121407658579218503/602620c7047a62431ff4c54acabf4bd0.png", aciertos: 6, puntos: 850 },
    { nombre: "leoo0626_91975", avatar: "https://cdn.discordapp.com/avatars/1207359224670322698/68d9fb875e3933fea778f132a838885f.png", aciertos: 6, puntos: 600 },
    { nombre: "dani00612", avatar: "https://cdn.discordapp.com/avatars/749915604735230033/5c77ed1104d5233bb8ce9e35a352d44e.png", aciertos: 6, puntos: 600 },
    { nombre: "savxy", avatar: "https://cdn.discordapp.com/avatars/718509777822679133/441c229bbb0fcdec868e046b150f7453.png", aciertos: 6, puntos: 600 },
    { nombre: "rafx45.", avatar: "https://cdn.discordapp.com/avatars/1435292564378091717/c712d7f7abe2a88fbedd04a940975a93.png", aciertos: 6, puntos: 600 },
    { nombre: "wally029219", avatar: "https://cdn.discordapp.com/embed/avatars/0.png", aciertos: 5, puntos: 525 },
    { nombre: "mrppp1", avatar: "https://cdn.discordapp.com/avatars/832228932065427527/9df54488b4973ed6e55d27e9369f5c9e.png", aciertos: 5, puntos: 525 },
    { nombre: "ratflam", avatar: "https://cdn.discordapp.com/avatars/673639824917266442/fab13ccd280d374013764f43056fc279.png", aciertos: 5, puntos: 525 },
    { nombre: "elhormigo201", avatar: "https://cdn.discordapp.com/avatars/1067815934254927903/06d3dc25cc4112aaeeb7302b14e3cc31.png", aciertos: 4, puntos: 450 },
    { nombre: "novex_yt", avatar: "https://cdn.discordapp.com/avatars/640589876676526113/aa5177de7837ec8d2fe03dd8a72bcfa6.png", aciertos: 3, puntos: 325 },
    { nombre: "pedriporro87", avatar: "https://cdn.discordapp.com/avatars/1077931914750595094/637ba99e09595d443f430eaffcac5787.png", aciertos: 3, puntos: 325 },
    { nombre: "evacount", avatar: "https://cdn.discordapp.com/avatars/964801892511272960/612959355c59686168ca88aaf03e0d8b.png", aciertos: 3, puntos: 325 },
    { nombre: "gooooga", avatar: "https://cdn.discordapp.com/avatars/614652623026520065/a0cf713af9d3cc2ab10ce3879fa7f78b.png", aciertos: 2, puntos: 250 },
    { nombre: "themoonisrising", avatar: "https://cdn.discordapp.com/avatars/869310137674924042/d3cb07fce7a0387d618464df76522389.png", aciertos: 1, puntos: 225 },
    { nombre: "kileito", avatar: "https://cdn.discordapp.com/avatars/1461076509233250599/ac2208c40b8da7491476b21fe08d46b9.png", aciertos: 1, puntos: 100 }
];

function renderizarPodioEstatico(lista) {
    const contenedor = document.getElementById('podio-container');
    if (!contenedor || lista.length === 0) return;

    const tops = [
        { ...lista[0], rank: 1, medal: '🥇' },
        { ...lista[1], rank: 2, medal: '🥈' },
        { ...lista[2], rank: 3, medal: '🥉' }
    ].filter(user => user.nombre !== undefined);

    contenedor.innerHTML = tops.map(user => `
        <div class="podio-item podio-${user.rank}">
            <div class="podio-medal">
                ${user.medal} 
                <span style="font-size: 1.2rem; font-weight: 900; margin-left: 6px;">${user.puntos}</span>
            </div>
            <img src="${user.avatar || 'https://via.placeholder.com/80'}" class="podio-avatar">
            <span class="podio-name">${user.nombre}</span>
            <div class="podio-stats">
                <p><i class="fa-solid fa-trophy"></i> ${user.aciertos} Aciertos</p>
            </div>
        </div>
    `).join('');
}

function renderizarTablaEstatica(lista) {
    const tbody = document.getElementById('ranking-body');
    if (!tbody) return;

    tbody.innerHTML = lista.map((user, index) => {
        const posicion = index + 4;
        return `
            <tr class="fila-ranking">
                <td class="col-centrada">${posicion}</td>
                <td class="usuario-info">
                    <img src="${user.avatar || 'https://via.placeholder.com/40'}" class="avatar-ranking">
                    <span class="user-name-table">${user.nombre}</span>
                </td>
                <td class="col-centrada">
                    <i class="fa-solid fa-trophy" style="color: rgba(255, 215, 0, 0.3); font-size: 0.75rem; margin-right: 3px;"></i> 
                    ${user.aciertos}
                </td>
                <td class="votos-count col-centrada">${user.puntos} <small style="font-size: 0.6rem; color: #444;">PTS</small></td>
            </tr>
        `;
    }).join('');
}

function iniciarContadores() {
    const contadores = document.querySelectorAll('.contador-animado');
    const velocidad = 60;

    contadores.forEach(contador => {
        const actualizarContador = () => {
            const destino = +contador.getAttribute('data-target');
            const valorActual = +contador.innerText;
            const incremento = Math.ceil(destino / velocidad);

            if (valorActual < destino) {
                contador.innerText = Math.min(valorActual + incremento, destino);
                setTimeout(actualizarContador, 25);
            } else {
                contador.innerText = destino;
            }
        };
        actualizarContador();
    });
}

function cargarRankingEstatico() {
    renderizarPodioEstatico(RANKING_FINAL);
    renderizarTablaEstatica(RANKING_FINAL.slice(3));
    iniciarContadores()
}


document.addEventListener('DOMContentLoaded', cargarRankingEstatico);
