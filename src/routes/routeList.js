/**
 *  ====== Layout dos Componentes Paginas
 * */
import { LayoutApp } from '../components/layouts/LayoutApp'
import { PageAccess } from '../pages/Access'
import { PageLogin } from '../pages/Login'
import { PageLoginNew } from '../pages/LoginNew'
import { PageHome } from '../pages/Home'


export const homeRoutes = [
  {
    exact: true,
    label: 'Acesso',
    path: '/',
    component: PageAccess,
    layout: LayoutApp
  },
  {
    exact: true,
    label: 'Home',
    path: '/home',
    component: PageHome,
    layout: LayoutApp
  },
  {
    exact: true,
    label: 'Login',
    path: '/login',
    component: PageLogin,
    layout: LayoutApp
  },
  {
    exact: true,
    label: 'LoginNew',
    path: '/loginnew',
    component: PageLoginNew,
    layout: LayoutApp
  }

]

export const routeList = [
  ...homeRoutes
]


// import { LayoutPages } from '../Pages/layouts/LayoutPages'
// import { LayoutPrd } from '../Pages/layouts/LayoutPrd'

/**
 *  ====== Paginas do Component Menu Principal
 * */
/**
 *  opção Empresa
 * */
// import { PageHome } from '../pages/Home'
// import { PageAbout } from '../Pages/About'
// import { PageLogin } from '../Pages/Login'
// import { PageSystem } from '../Pages/System'
// import {
//   PagePortfolios,
//   PagePfDesigns,
//   PagePfProdutos,
//   PagePfServicos
// } from '../Pages/Portfolios'
// import { PageDocEmpresa, PageDocProduto, PageDocServico } from '../Pages/Docs'
// import { PageSamples } from '../Pages/Samples'
// /**
//  *  Opção Produtos
//  * */
// import { PageDesigns } from '../Pages/Designs'
// import { PageLaserCorta, PageLaserGrava } from '../Pages/Laser'
// import { PageProdutos } from '../Pages/Produtos'
// /**
//  *  opção Serviços
//  * */
// import { PageServicos } from '../Pages/Servicos'
// import { PageBordados } from '../Pages/Bordados'
// /**
//  *  declaração das Routes
//  * */



  // ,
  // {
  //   exact: true,
  //   label: 'Home',
  //   path: '/',
  //   component: PageHome,
  //   layout: LayoutApp
  // }

// /**    rotas do menu principal opção Empresa */
// export const optionCompanyRoutes = [
//   /** Raiz Menu opção empresas */
//   {
//     exact: true,
//     label: 'Login',
//     path: '/login',
//     component: PageLogin,
//     layout: LayoutPages
//   },
//   {
//     exact: true,
//     label: 'About',
//     path: '/about',
//     component: PageAbout,
//     layout: LayoutApp
//   },
//   {
//     exact: true,
//     label: 'System',
//     path: '/system',
//     component: PageSystem,
//     layout: LayoutPages
//   },
//   {
//     exact: true,
//     label: 'Portfólios',
//     path: '/portfolios',
//     component: PagePortfolios,
//     layout: LayoutPages
//   },
//   /** sub-Raiz Menu opção about  */
//   {
//     exact: true,
//     label: 'Empresas',
//     path: '/docs/docempresa',
//     component: PageDocEmpresa,
//     layout: LayoutPages
//   },
//   {
//     exact: true,
//     label: 'Portfólios Produto',
//     path: '/docs/docproduto',
//     component: PageDocProduto,
//     layout: LayoutPages
//   },
//   {
//     exact: true,
//     label: 'Serviços',
//     path: '/docs/docservico',
//     component: PageDocServico,
//     layout: LayoutPages
//   },
//   /** sub-sub-Raiz Menu opção about -> Protifolio  */
//   {
//     exact: true,
//     label: 'Portfolio Design`s',
//     path: '/portfolios/pagepfdesigns',
//     component: PagePfDesigns,
//     layout: LayoutPages
//   },
//   {
//     exact: true,
//     label: 'Portfolio Podutos',
//     path: '/portfolios/pagepfprodutos',
//     component: PagePfProdutos,
//     layout: LayoutPages
//   },
//   {
//     exact: true,
//     label: 'Portfólios Serviços',
//     path: '/portfolios/pagepfservicos',
//     component: PagePfServicos,
//     layout: LayoutPages
//   },
//   /** componentes -> Protifolio  */
//   {
//     exact: true,
//     label: 'Samples',
//     path: '/samples',
//     component: PageSamples,
//     layout: LayoutPages
//   }
// ]

// export const optionProductsRoutes = [
//   {
//     exact: true,
//     label: 'Designs',
//     path: '/designs',
//     component: PageDesigns,
//     layout: LayoutPages
//   },
//   {
//     exact: true,
//     label: 'Bordados',
//     path: '/bordados',
//     component: PageBordados,
//     layout: LayoutPages
//   },
//   {
//     exact: true,
//     label: 'Cortes a Laser',
//     path: '/lasercorta',
//     component: PageLaserCorta,
//     layout: LayoutPages
//   },
//   {
//     exact: true,
//     label: 'Gravações a Laser',
//     path: '/lasergrava',
//     component: PageLaserGrava,
//     layout: LayoutPages
//   },
//   {
//     exact: true,
//     label: 'Produtos',
//     path: '/produtos',
//     component: PageProdutos,
//     layout: LayoutPages
//   }
// ]

// export const optionDevelopersRoutes = [
//   {
//     exact: true,
//     label: 'Serviços',
//     path: '/servicos',
//     component: PageServicos,
//     layout: LayoutPages
//   }
// ]
  // ...optionDevelopersRoutes,
  // ...optionProductsRoutes,
  // ...optionCompanyRoutes,
