import { CreateStore } from 'redux'

import rootReducer from './reducers/rootReducer'

export const store = CreateStore(rootReducer)
