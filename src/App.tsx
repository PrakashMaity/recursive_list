import Builder from "./builder/builder"
import { BuilderProvider } from "./builder/context/builderContext"
import { ModalProvider } from "./components/modal/modalContext"

function App() {
  return (
    <ModalProvider>
      <BuilderProvider>
        <div className="relative">
          <Builder />
        </div>
      </BuilderProvider>
    </ModalProvider>
  )
}

export default App
