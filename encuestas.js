/* TABLAS DE POSICIONES HISTÓRICAS */
const TABLAS_GRUPOS = {
    "Grupo A": [
        { pos: 1, equipo: "HMBLE", sets: "2-0", rondas: "6-1" },
        { pos: 2, equipo: "BOUNTY HUNTERS", sets: "1-1", rondas: "4-4" },
        { pos: 3, equipo: "ACE XERO", sets: "0-2", rondas: "1-6" }
    ],
    "Grupo B": [
        { pos: 1, equipo: "ZETA DIVISION", sets: "2-0", rondas: "6-2" },
        { pos: 2, equipo: "ONLY REALM", sets: "5-3", rondas: "5-3" }, // Ajustado según tus datos estáticos
        { pos: 3, equipo: "BC* GAMING SA", sets: "0-2", rondas: "0-6" }
    ],
    "Grupo C": [
        { pos: 1, equipo: "CRAZY RACCOON", sets: "2-0", rondas: "6-0" },
        { pos: 2, equipo: "REVENANT XSPARK", sets: "1-1", rondas: "3-4" },
        { pos: 3, equipo: "ETERNAL ESPORTS", sets: "0-2", rondas: "1-6" }
    ],
    "Grupo D": [
        { pos: 1, equipo: "TRIBE GAMING", sets: "2-0", rondas: "6-4" },
        { pos: 2, equipo: "FUT ESPORTS", sets: "1-1", rondas: "5-3" },
        { pos: 3, equipo: "TOXIC LOTUS", sets: "0-2", rondas: "2-6" }
    ],
};

function renderizarTablasGrupos() {
    const contenedor = document.getElementById('tablas-grupos-container');
    if (!contenedor) return;

    contenedor.innerHTML = Object.keys(TABLAS_GRUPOS).map(nombreGrupo => `
        <div class="tabla-grupo-card">
            <h3 class="titulo-grupo">${nombreGrupo}</h3>
            <table class="tabla-posiciones">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>EQUIPO</th>
                        <th>MATCH</th>
                        <th>SETS</th>
                    </tr>
                </thead>
                <tbody>
                    ${TABLAS_GRUPOS[nombreGrupo].map((e, index) => {
                        let claseFila = index < 2 ? 'fila-verde' : 'fila-roja';
                        return `
                            <tr class="${claseFila}">
                                <td class="col-pos">${e.pos}</td>
                                <td class="col-equipo">${e.equipo}</td>
                                <td class="col-data">${e.sets}</td>
                                <td class="col-data">${e.rondas}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `).join('');
}


document.addEventListener('DOMContentLoaded', renderizarTablasGrupos);
