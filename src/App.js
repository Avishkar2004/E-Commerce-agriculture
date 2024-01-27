import AppRoutes from "./Routes/Routes";
import { AuthProvider } from "./actions/authContext";
import { CartProvider } from "./actions/CartContext";
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