import React from "react";
import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import { IconTema } from '../Components/UI/icons'

export default (type) => {
  const Images = {
    Restaurante: <IconTema src={alimentacao} alt="Restaurante" />,
    Utilidades: <IconTema src={utilidades} alt="Utilidades" />,
    Saude: <IconTema src={saude} alt="Saúde" />,
    Transporte: <IconTema src={transporte} alt="Transporte" />,
    default: <IconTema src={outros} alt="Outro" />,
  };

  return Images[type] || Images.default;
}
