import { GlobalStyle } from "./styles/GlobalStyle"
import { Greetings } from "./components/Greetings"
import { Provider } from "react-redux"
import store from "./redux/store"

export function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Greetings />
    </Provider>
  )
}
