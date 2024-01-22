import AppRoutes from "./Routes/Routes";
import { AuthProvider } from "./actions/authContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
