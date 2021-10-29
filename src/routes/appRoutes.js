import {
  HOME_PAGE_PATH,
  WIZARD_DETAILS_PAGE_PATH
} from '../constants/routesPaths'
import { Home } from '../pages/Home'
import { WizardDetails } from '../pages/WizardDetails'

const defaultRouteConfig = {
  exact: true
}

const appRoutes = [
  {
    ...defaultRouteConfig,
    path: HOME_PAGE_PATH,
    component: Home
  },
  {
    ...defaultRouteConfig,
    path: WIZARD_DETAILS_PAGE_PATH,
    component: WizardDetails
  }
]

export default appRoutes
