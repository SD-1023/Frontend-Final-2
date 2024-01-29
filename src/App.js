import "./index.css";
import AppLayout from "./components/layouts/AppLayout";
import { AuthProvider } from "./components/contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </div>
  );
}

export default App;
