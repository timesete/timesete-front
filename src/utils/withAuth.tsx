//HOC "Higher-Order Component".

import { useRouter } from "next/router";
import { ElementType, useEffect } from "react";
import Cookie from "js-cookie";

const withAuth = (WrappedComponent: ElementType) => {
  const Wrapper = (props: unknown) => {
    const router = useRouter();

    useEffect(()=>{
      const { token } = Cookie.get();

      if (!token) {
        router.replace('/entrarnaconta');
      };
    },[]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
}

export default withAuth;
