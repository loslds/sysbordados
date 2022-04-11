import { compareValues } from 'mini-helper'

const data = {
  succes: true,
  portifolios: [
    /** registros  Categorias  1 - Artes */
    {
      id: 1,
      grupo: 1, /**  Artes */
      subgrupo: 1,
      name: 'Todas as Artes',
      ref: '001.001-0000001',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 2,
      grupo: 1, /* Artes */
      subgrupo: 2, 
      name: 'Artes com Bordados.',
      ref: '001.002.0000002',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 3,
      grupo: 1, /* Artes */
      subgrupo: 3,
      name: 'Artes com Bordados em Tecidos.',
      ref: '001.003.0000003',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 4,
      grupo: 1, /* Artes */
      subgrupo: 4,
      name: 'Artes com Bordados em Bonés.',
      codref: '001.004.0000004',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 5,
      grupo: 1, /* Artes */
      subgrupo: 5,
      name: 'Artes com Bordados em Vestuários.',
      codref: '001.005.0000005',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 6,
      grupo: 1, /* Artes */
      subgrupo: 6,
      nome: 'Artes com Bordados em Acessórios.',
      ref: '001.006.0000006',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 7,
      grupo: 1, /* Artes */
      subgrupo: 7,
      name: ' Artes com Bordados em outro Material.',
      ref: '001.007-0000007',
      imageUrl: '',
      onclick: () => {}
    },

    {
      id: 8,
      grupo: 1, /* Artes */
      subgrupo: 8,
      name: 'Artes a Lasers.',
      ref: '001.008-0000008',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 9,
      grupo: 1, /* Artes */
      subgrupo: 9,
      name: 'Artes a Lasers com Acrílico.',
      ref: '001.009.0000009',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 10,
      grupo: 1, /* Artes */
      subgrupo: 10,
      name: 'Artes a Lasers com M D F.',
      ref: '001.010-0000010',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 11,
      grupo: 1, /* Artes */
      subgrupo: 11,
      name: 'Artes a Lasers com Madeiras.',
      ref: '000.011-0000011',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 12,
      grupo: 1, /* Artes */
      subgrupo: 12,
      name: 'Artes a Lasers com Tecidos.',
      ref: '001.012-0000012',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 13,
      grupo: 1, /* Artes */
      subgrupo: 13,
      nome: 'Artes a Lasers com Couro, Courino ou Semelhante.',
      ref: '001.013-0000013',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 14,
      grupo: 1,
      subgrupo: 14,
      nome: 'Artes a Lasers com Metais.',
      ref: '001.014-0000014',
      imageUrl: '',
      onclick: () => {}
    },
    { id: 15, 
      grupo: 1, 
      subgrupo: 15, 
      name: 'Artes a Lasers com outros Materiais.', 
      ref: '001.015-0000015',
      imageUrl: '',
      onclick: () => {}
    },
    /** registros  Categorias  2 - Bordados */
    {
      id: 16,
      grupo: 2, /* Bordados */
      subgrupo: 1,
      name: 'Todas os Bordados',
      ref: '002.001-0000016',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 17,
      grupo: 2, /* Bordados */
      subgrupo: 2,
      name: 'Bordados em Tecidos.',
      ref: '002.002-0000017',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 18,
      grupo: 2, /* Bordados */
      subgrupo: 3,
      name: 'Bordados em Bonés.',
      ref: '002.003-0000018',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 19,
      grupo: 2, /* Bordados */
      subgrupo: 4,
      nome: 'Bordados em Vestuários.',
      ref: '002.004-0000019',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 20,
      grupo: 2, /* Bordados */
      subgrupo: 5,
      name: 'Bordados em Acessórios.',
      ref: '002.005.0000020',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 21,
      grupo: 2, /* Bordados */
      subgrupo: 6,
      name: 'Bordados em outro Material.',
      ref: '002.006-0000021',
      imageUrl: '',
      onclick: () => {}
    },
    {
    id: 22,
    grupo: 2, /* Bordados */
    subgrupo: 7,
    name: 'Bordados como uso de Lasers.',
    ref: '002.007-0000022',
    imageUrl: '',
    onclick: () => {}
    },
    /** registros  Categorias  3 - Laser */
    {
      id: 23,
      grupo: 3,  /* Lasers */
      subgrupo: 1,
      name: 'Todos com Laser.',
      ref: '003.001.0000023',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 24,
      grupo: 3,   /* Lasers */
      subgrupo: 2,
      name: 'Laser em Acrílico.',
      ref: '003.002-0000024',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 25,
      grupo: 3,  /* Lasers */
      subgrupo: 3,
      name: 'Laser em M D F.',
      ref: '003.003-0000025',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 26,
      grupo: 3,  /* Lasers */
      subgrupo: 4,
      name: 'Laser em Madeiras.',
      ref: '003.004-0000026',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 27,
      grupo: 3,  /* Lasers */
      subgrupo: 5,
      name: 'Laser em Tecidos.',
      ref: '003.005-0000027',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 28,
      grupo: 3,  /* Lasers */
      subgrupo: 6,
      name: 'Laser em Couro, Courino ou Semelhante.',
      ref: '003.006-0000028',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 29,
      grupo: 3,  /* Lasers */
      subgrupo: 7,
      name: 'Laser em Metais.',
      ref: '003.007-0000029',
      imageUrl: '',
      onclick: () => {}
    },
    {
      id: 30,
      grupo: 3,  /* Lasers */
      subgrupo: 8,
      name: 'Laser em outros Materiais.',
      ref: '003.008-0000030',
      imageUrl: '',
      onclick: () => {}
    }
  ]
}

export async function getProducts(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order, filter = {} } = options
  const resultData = result && result.data

  const { categoryId, subcategoryId } = filter

  if (categoryId) {
    resultData.products = resultData.products.filter(
      p => p.grupo === categoryId
    )
  }
  if (subcategoryId) {
    resultData.products = resultData.products.filter(
      p => p.subgrupo === subcategoryId
    )
  }

  if (resultData.products && order) {
    resultData.products = resultData.products.sort(compareValues(order, 'asc'))
  }

  if (resultData.products && order) {
    resultData.products = resultData.products.sort(compareValues(order, 'asc'))
  }

  return resultData
}
