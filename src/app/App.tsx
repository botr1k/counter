import './App.css'
import {Counter} from "../features/counter/ui/Counter/Counter.tsx";
import {ThemeProvider} from "@/common/theme/ThemePprovider.tsx";

function App() {

  return (
      <ThemeProvider defaultTheme={"dark"} storageKey={'vite-ui-theme'}>
        <div className='App'>
          <Counter/>
        </div>
      </ThemeProvider>
  )
}

export default App
