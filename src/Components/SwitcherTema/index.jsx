import React from "react";
import ThemeOn from '../../assets/images/themeOn.svg';
import ThemeOff from '../../assets/images/themeOff.svg';
import { Icon } from "../UI/icons";

const claro = <Icon src={ThemeOn} alt="Tema Claro" />
const escuro = <Icon src={ThemeOff} alt="Tema Escuro" />

export default ({tema}) => (tema ? escuro : claro)
