import AppRoutes from "./Routes/Routes";
import { CartProvider } from "./actions/CartContext";
import { AuthProvider } from "./actions/authContext";
function App() {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
        <AppRoutes />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;