//HOC "Higher-Order Component".

import { useRouter } from "next/router";
import { ElementType, useEffect } from "react";
import { parseCookies } from "nookies";

const withAuth = (WrappedComponent: ElementType) => {
  const Wrapper = (props: unknown) => {
    const router = useRouter();

    useEffect(() => {
      const { mundodiverso_token } = parseCookies();
      console.log()

      if (!mundodiverso_token) {
        router.replace('/entrarnaconta');
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
}

export default withAuth;
