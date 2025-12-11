import { Button } from "@/shared/components/atoms/button/button";
import { useAuthStore } from "@/shared/stores/auth.store";
import { Toast } from "@/shared/utils/toast";

export const LogoutButton = () => {
  const logout = useAuthStore((s) => s.clearAuth);

  const handleLogout = () => {
    logout();
    Toast.success("Logged out successfully");
  };
  return (
    <Button variant="danger" onClick={handleLogout} disabled={false}>
      Logout
    </Button>
  );
};
