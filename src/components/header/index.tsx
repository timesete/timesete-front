import Link from "next/link";
import { ComponentType, FunctionComponent, HTMLAttributes, useCallback, useState } from "react";
import { IconBaseProps } from "react-icons/lib";
import { Avatar } from "../";
import { useAuth } from "../../context/AuthContext";

import { CreateNewFriend, HeaderHomeWrapper, HeaderWrapper } from "./styles";

interface HeaderProps extends HTMLAttributes<HTMLLIElement> {
  icon?: ComponentType<IconBaseProps>;
  iconColor?: string;
  size?: number;
}

export const Header: FunctionComponent<HeaderProps> = ({ children, icon: Icon, iconColor = "#000", size = 20, ...rest }) => {
  const { signOut } = useAuth();

  return (
    <HeaderWrapper>
      <Link href="/">
          <a><img src="icons/logo.svg" alt="Mundo diverso" /></a>
      </Link>
      <nav>
        {children && (
          <ul>
            <Link href="/">
              <a onClick={signOut}>
                {Icon && <Icon size={size} color={iconColor} />}
                {children}
              </a>
            </Link>
          </ul>
        )}
      </nav>
    </HeaderWrapper>
  )
};

export const HomeHeader: FunctionComponent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <HeaderHomeWrapper>
      <Link href="/">
          <a><img src="icons/logo_home.svg" alt="Mundo diverso" /></a>
      </Link>
      <nav>
        <ul>
          {isAuthenticated ? (
            <li><Link href="/mundo"><a>Mundo</a></Link></li>
          ) : (
            <li><Link href="/entrarnaconta"><a>Conta</a></Link></li>
          )}
          <li><Link href="/criaramigo"><CreateNewFriend>Criar novo amigo</CreateNewFriend></Link></li>
          {isAuthenticated && <li><Link href="/conta"><Avatar /></Link></li>}
        </ul>
      </nav>
    </HeaderHomeWrapper>
  )
}
