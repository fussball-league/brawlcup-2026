// 1. CONFIGURACIÓN DE TUS PARTIDAS
const TIEMPO_APERTURA_D1 = 1768752800;
const TIEMPO_APERTURA_D2 = 1778839200;
const TIEMPO_APERTURA_D3 = 1778950800;

const TIEMPO_CLAUSURA_D1 = 1778839200;
const TIEMPO_CLAUSURA_D2 = 1778950800;
const TIEMPO_CLAUSURA_D3 = 1779012000;

const PARTIDAS = [
    {
        dia: "Dia 1 - Brawl Cup",
        titulo: "Grupo A - Partida #1",
        id_db: '1d472a11-16fa-4cac-bbe3-a5eb9c99dd39',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D1,
        clausura: TIEMPO_CLAUSURA_D1,
        opciones: [
            {
                id: '9ed9f893-ded6-451c-ac56-d2d315e7b699',
                nombre: 'BOUNTY HUNTERS',
                imagen: 'https://imgur.com/Hif4pNK.png'
            },
            {
                id: '1213d015-d66c-458e-8d20-909e956e062c',
                nombre: 'HMBLE',
                imagen: 'https://i.imgur.com/mmZ8KAq.png'
            }
        ]
    },
    {
        dia: "Dia 1 - Brawl Cup",
        titulo: "Grupo A - Partida #2",
        id_db: '2e2cec6d-83cc-4b06-8a7e-c046d21ca4b2',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D1,
        clausura: TIEMPO_CLAUSURA_D1,
        opciones: [
            {
                id: 'b96a21e0-6ab6-491f-ae5c-fb5d2810b71a',
                nombre: 'BOUNTY HUNTERS',
                imagen: 'https://imgur.com/Hif4pNK.png'
            },
            {
                id: 'c3846148-2ea9-42f4-9552-6c8745bd509f',
                nombre: 'ACE XERO',
                imagen: 'https://i.imgur.com/I3kgK1G.png'
            }
        ]
    },
    {
        dia: "Dia 1 - Brawl Cup",
        titulo: "Grupo A - Partida #3",
        id_db: '68e33f71-0f86-43ec-8889-b204dc93944e',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D1,
        clausura: TIEMPO_CLAUSURA_D1,
        opciones: [
            {
                id: '03da3827-bc1b-4794-8396-5bdf0e52d82b',
                nombre: 'HMBLE',
                imagen: 'https://i.imgur.com/mmZ8KAq.png'
            },
            {
                id: '4a0beb10-642a-4507-934a-89148d00be0f',
                nombre: 'ACE XERO',
                imagen: 'https://i.imgur.com/I3kgK1G.png'
            }
        ]
    },
    {
        dia: "Dia 1 - Brawl Cup",
        titulo: "Grupo B - Partida #1",
        id_db: '03a1f84b-c9ea-4637-88e4-361792af25ae',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D1,
        clausura: TIEMPO_CLAUSURA_D1,
        opciones: [
            {
                id: '2f26a5df-036d-4b24-92cf-cca57159a2e0',
                nombre: 'ONLY REALM',
                imagen: 'https://imgur.com/FrlpICP.png'
            },
            {
                id: 'd21c38ff-1212-43e7-aaf6-6d05e42857a8',
                nombre: 'ZETA DIVISION',
                imagen: 'https://imgur.com/EVy6P4Q.png'
            }
        ]
    },
    {
        dia: "Dia 1 - Brawl Cup",
        titulo: "Grupo B - Partida #2",
        id_db: '226ef38a-090a-4e1d-95a2-e4de8cb92ad2',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D1,
        clausura: TIEMPO_CLAUSURA_D1,
        opciones: [
            {
                id: '7d9d7377-d5dc-46d9-99f1-255067316b76',
                nombre: 'ONLY REALM',
                imagen: 'https://imgur.com/FrlpICP.png'
            },
            {
                id: 'ef19aac7-7f41-4973-97b2-453d5a539fbb',
                nombre: 'BC* GAMING SA',
                imagen: 'https://imgur.com/mpWGNak.png'
            }
        ]
    },
    {
        dia: "Dia 1 - Brawl Cup",
        titulo: "Grupo B - Partida #3",
        id_db: '9eb89d68-dea6-4010-8603-0aeab0a5abdd',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D1,
        clausura: TIEMPO_CLAUSURA_D1,
        opciones: [
            {
                id: 'c8f29ae3-445d-465e-a03d-e69915773694',
                nombre: 'ZETA DIVISION',
                imagen: 'https://imgur.com/EVy6P4Q.png'
            },
            {
                id: 'a7049651-b709-40f2-829f-7f4db016fc3a',
                nombre: 'BC* GAMING SA',
                imagen: 'https://imgur.com/mpWGNak.png'
            }
        ]
    },
    {
        dia: "Dia 2 - Brawl Cup",
        titulo: "Grupo C - Partida #1",
        id_db: 'd9a43a99-af1f-4466-9388-637691c50a44',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D2,
        clausura: TIEMPO_CLAUSURA_D2,
        opciones: [
            {
                id: '441524f3-4cbf-4141-9e59-8878d4f51ff0',
                nombre: 'CRAZY RACCOON',
                imagen: 'https://imgur.com/o0mDON8.png'
            },
            {
                id: '9fd1a2f6-eb29-4a9a-9990-6589da381672',
                nombre: 'ETERNAL ESPORTS',
                imagen: 'https://imgur.com/QpJcL7y.png'
            }
        ]
    },
    {
        dia: "Dia 2 - Brawl Cup",
        titulo: "Grupo C - Partida #2",
        id_db: '18c22022-9225-4702-be58-f8a15dc7eff9',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D2,
        clausura: TIEMPO_CLAUSURA_D2,
        opciones: [
            {
                id: 'af04c4d4-3f6d-4ae1-bb8a-25f96c867817',
                nombre: 'CRAZY RACCOON',
                imagen: 'https://imgur.com/o0mDON8.png'
            },
            {
                id: 'd04a9fdd-3571-494c-b973-359254bd75c3',
                nombre: 'REVENANT XSPARK',
                imagen: 'https://imgur.com/L5Q0Mqs.png'
            }
        ]
    },
    {
        dia: "Dia 2 - Brawl Cup",
        titulo: "Grupo C - Partida #3",
        id_db: '8cb55192-c819-4570-9a1a-5a849b7589dc',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D2,
        clausura: TIEMPO_CLAUSURA_D2,
        opciones: [
            {
                id: '6fc410ee-a4cf-4ed2-bedf-b830d87d6dcb',
                nombre: 'ETERNAL ESPORTS',
                imagen: 'https://imgur.com/QpJcL7y.png'
            },
            {
                id: '783fc1d5-8bb6-451d-a104-b1e57d5e513e',
                nombre: 'REVENANT XSPARK',
                imagen: 'https://imgur.com/L5Q0Mqs.png'
            }
        ]
    },
    {
        dia: "Dia 2 - Brawl Cup",
        titulo: "Grupo D - Partida #1",
        id_db: 'c87ab9c7-5041-4549-80d7-838c7a6f8904',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D2,
        clausura: TIEMPO_CLAUSURA_D2,
        opciones: [
            {
                id: '9740f23d-cfa5-4c38-beb3-d930d12a746d',
                nombre: 'FUT ESPORTS',
                imagen: 'https://imgur.com/M5RcvX5.png'
            },
            {
                id: '2f2706f7-b62f-4905-8cac-7be0c180d7c3',
                nombre: 'TRIBE GAMING',
                imagen: 'https://imgur.com/YAt1lmp.png'
            }
        ]
    },
    {
        dia: "Dia 2 - Brawl Cup",
        titulo: "Grupo D - Partida #2",
        id_db: '3b8c3a47-b779-4b06-a0ec-bb991f0da365',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D2,
        clausura: TIEMPO_CLAUSURA_D2,
        opciones: [
            {
                id: '60dc4499-af60-4192-bcaf-9fc0eef66bf6',
                nombre: 'FUT ESPORTS',
                imagen: 'https://imgur.com/M5RcvX5.png'
            },
            {
                id: 'aefc66f3-5f8f-4222-b09e-c1d27734b501',
                nombre: 'TOXIC LOTUS',
                imagen: 'https://imgur.com/EQcGWUM.png'
            }
        ]
    },
    {
        dia: "Dia 2 - Brawl Cup",
        titulo: "Grupo D - Partida #3",
        id_db: '717ebf01-8804-4542-964c-1bc523eec1c9',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D2,
        clausura: TIEMPO_CLAUSURA_D2,
        opciones: [
            {
                id: '91c499c5-77e9-4ad6-8acd-023e9945a984',
                nombre: 'TRIBE GAMING',
                imagen: 'https://imgur.com/YAt1lmp.png'
            },
            {
                id: 'a8392619-2963-4a8c-92cc-a5df0fe4f73a',
                nombre: 'TOXIC LOTUS',
                imagen: 'https://imgur.com/EQcGWUM.png'
            }
        ]
    },
    {
        dia: "Dia 3 - Brawl Cup",
        titulo: "Cuartos de Final #1",
        id_db: '5d797cfa-7ba4-4477-b616-aa772e28a013',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D3,
        clausura: TIEMPO_CLAUSURA_D3,
        opciones: [
            {
                id: '0ee86279-8bd4-4e63-8032-0e0bc61966cc',
                nombre: 'A1',
                imagen: 'https://imgur.com/5Wm3uA4.png'
            },
            {
                id: 'ca207860-0d47-4828-843f-7162b5ba5497',
                nombre: 'B2',
                imagen: 'https://imgur.com/5Wm3uA4.png'
            }
        ]
    },
    {
        dia: "Dia 3 - Brawl Cup",
        titulo: "Cuartos de Final #2",
        id_db: '7c30cb12-c47a-4925-8f9f-568b6ec68560',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D3,
        clausura: TIEMPO_CLAUSURA_D3,
        opciones: [
            {
                id: 'bbbfa33b-0f65-4274-9ed7-a8226951cb43',
                nombre: 'D1',
                imagen: 'https://imgur.com/5Wm3uA4.png'
            },
            {
                id: '573edfc1-d901-4d61-8eb2-e20b9b93cf08',
                nombre: 'C2',
                imagen: 'https://imgur.com/5Wm3uA4.png'
            }
        ]
    },
    {
        dia: "Dia 3 - Brawl Cup",
        titulo: "Cuartos de Final #3",
        id_db: '54173a7d-cd30-474d-abf7-555fee6f9677',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D3,
        clausura: TIEMPO_CLAUSURA_D3,
        opciones: [
            {
                id: 'ce42e428-4e54-44d3-8451-c38cea6e9496',
                nombre: 'B1',
                imagen: 'https://imgur.com/5Wm3uA4.png'
            },
            {
                id: 'c056d34a-a0c8-4a76-9f5d-ae253b9da626',
                nombre: 'A2',
                imagen: 'https://imgur.com/5Wm3uA4.png'
            }
        ]
    },
    {
        dia: "Dia 3 - Brawl Cup",
        titulo: "Cuartos de Final #4",
        id_db: '6b8a09c5-8fba-4c7b-b6ef-792613367525',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D3,
        clausura: TIEMPO_CLAUSURA_D3,
        opciones: [
            {
                id: '34d1672e-35dd-4cd6-8800-e237ba7bb492',
                nombre: 'C1',
                imagen: 'https://imgur.com/5Wm3uA4.png'
            },
            {
                id: 'b28a7659-2488-4fb3-843c-dea3c6d4de1f',
                nombre: 'D2',
                imagen: 'https://imgur.com/5Wm3uA4.png'
            }
        ]
    },
    {
        dia: "Dia 3 - Brawl Cup",
        titulo: "Semifinal #1",
        id_db: '2126890f-89bd-41c8-abc7-ce49628d6c0f',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D3,
        clausura: TIEMPO_CLAUSURA_D3,
        opciones: [
            {
                id: 'b39d7719-2dad-494c-808e-eb61a9f59317',
                nombre: 'QF1',
                imagen: 'https://imgur.com/5Wm3uA4.png'
            },
            {
                id: 'e3ab02eb-f560-431e-9850-ad561e9f2c68',
                nombre: 'QF2',
                imagen: 'https://imgur.com/5Wm3uA4.png'
            }
        ]
    },
    {
        dia: "Dia 3 - Brawl Cup",
        titulo: "Semifinal #2",
        id_db: '667c3759-61e6-467b-8bf3-19ad2a18b5bc',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D3,
        clausura: TIEMPO_CLAUSURA_D3,
        opciones: [
            {
                id: '3b1deb49-3edb-4503-8a12-5dfc0407cce2',
                nombre: 'QF3',
                imagen: 'https://imgur.com/5Wm3uA4.png'
            },
            {
                id: '35224446-b4c8-4bfd-b1cc-560d9b9041ea',
                nombre: 'QF4',
                imagen: 'https://imgur.com/5Wm3uA4.png'
            }
        ]
    },
    {
        dia: "Dia 3 - Brawl Cup",
        titulo: "Gran Final",
        id_db: '25699301-b8a8-4799-9c5b-caee81cbfcdc',
        ganador_id: '',
        apertura: TIEMPO_APERTURA_D3,
        clausura: TIEMPO_CLAUSURA_D3,
        opciones: [
            {
                id: '12c70354-7336-4b44-b2a8-189f15c81f87',
                nombre: 'SF1',
                imagen: 'https://imgur.com/5Wm3uA4.png'
            },
            {
                id: '142f17b3-f364-4bc4-b46c-499e2a3ee87e',
                nombre: 'SF2',
                imagen: 'https://imgur.com/5Wm3uA4.png'
            }
        ]
    },
];

function renderizarEncuestas() {
    const contenedor = document.getElementById('panel-votaciones');
    if (!contenedor) return;

    const ahoraUnix = Math.floor(Date.now() / 1000);

    // Agrupamos las partidas por día en un objeto
    const gruposPorDia = PARTIDAS.reduce((acc, partida) => {
        if (!acc[partida.dia]) acc[partida.dia] = [];
        acc[partida.dia].push(partida);
        return acc;
    }, {});

    contenedor.innerHTML = Object.keys(gruposPorDia).map(nombreDia => {
        const partidasDelDia = gruposPorDia[nombreDia];

        const timestampApertura = partidasDelDia[0].apertura * 1000;
        const fechaLocal = new Date(timestampApertura).toLocaleString(undefined, {
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
        });

        return `
            <div class="seccion-dia">
                <div class="contenedor-titulo-dia">
                    <h2 class="encabezado-dia">${nombreDia}</h2>
                    <span class="fecha-apertura">${fechaLocal}</span>
                </div>
                <div class="contenedor-partidas-dia">
                    ${partidasDelDia.map(partida => {
            const estaAbierta = ahoraUnix >= partida.apertura;
            return `
                            <div class="grupo-encuesta ${estaAbierta ? '' : 'encuesta-bloqueada'}">
                                <h4 class="titulo-partida">${partida.titulo}</h4>
                                <section class="contenedor-votos">
                                    ${partida.opciones.map((opc, index) => {
                const esGanador = partida.ganador_id === opc.id;
                const colorClase = index === 0 ? 'ganador-azul' : 'ganador-rojo';

                return `
        <div class="opcion-voto ${estaAbierta ? '' : 'deshabilitada'} ${esGanador ? colorClase : ''}" 
             ${estaAbierta ? `onclick="votar('${opc.id}')"` : ''}>
            ${opc.imagen ? `
                <img src="${opc.imagen}" class="opcion-logo" 
                style="${estaAbierta || esGanador ? '' : 'filter: grayscale(1); opacity: 0.5;'}">` : ''}
            
            <div class="opcion-info">
                <h3>${opc.nombre}</h3>
                <p>
                    ${esGanador ? '<i class="fa-solid fa-trophy"></i> GANADOR' :
                        (estaAbierta ? 'Haz clic para votar' : '<i class="fa-solid fa-lock"></i> Próximamente')}
                </p>
            </div>
            ${estaAbierta && !esGanador ? '<i class="fa-solid fa-chevron-right icon-flecha"></i>' : ''}
            ${esGanador ? '<i class="fa-solid fa-check-circle icon-ganador"></i>' : ''}
        </div>
    `;
            }).join('')}
                                </section>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('panel-votaciones')) {
        renderizarEncuestas();
    }
});
