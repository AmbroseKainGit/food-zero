"use client";
import React from "react";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/redux";
import { changeVisibilityMenu } from "@/lib/redux";
import { useAppSelector } from "@/hooks/redux";
import { selectParams } from "@/lib/redux";

export const NavComponent = () => {
  const dispatch = useAppDispatch();
  const { data: params } = useAppSelector(selectParams);
  return (
    <nav className="nav-header">
      <div className="nav-header__left">
        <div className="nav-header__left__logo">
          <Image
            src="/images/logo.svg"
            width={307}
            height={115}
            alt="Food zero logo"
          />
        </div>
        <div
          className="nav-header__left__button"
          onClick={() => dispatch(changeVisibilityMenu())}
        >
          <Image
            src="/images/hamburger.svg"
            width={94}
            height={71}
            alt="Nav button"
          />
        </div>
      </div>
      <div className="nav-header__right">
        <div className="nav-header__right__phone">{params?.getParams.phone || '+01 123 456 780'}</div>
        <div className="nav-header__right__button">
          <button>Reservaciones</button>
        </div>
      </div>
    </nav>
  );
};
