import './App.css'
import {Counter} from "../features/counter/ui/Counter/Counter.tsx";
import {ThemeProvider} from "@/common/theme/ThemePprovider.tsx";
import {ModeToggle} from "@/common/components/mood-toggle.tsx";

function App() {

  return (
      <ThemeProvider defaultTheme={"dark"} storageKey={'vite-ui-theme'}>
        <div className='App'>
          <ModeToggle/>
          <Counter/>
        </div>
      </ThemeProvider>
  )
}

export default App
