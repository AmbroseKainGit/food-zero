import { selectUser } from "@/lib/redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppSelector } from "@/hooks/redux";

const WithAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const AuthComponent: React.FC<P> = (props) => {
    const user = useAppSelector(selectUser);
    const router = useRouter();
    useEffect(() => {
      if (!user) {
        router.push("/login");
      }
    }, [user, router]);
    if (!user) return null; // Render nothing while waiting for the redirect
    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default WithAuth;