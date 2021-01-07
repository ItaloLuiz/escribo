<?php

function somarNumerosDivisiveisPorTreseCinco($numero)
{
    if (!is_int($numero)) {
        return 'Você precisa Informar um número.';
        exit;
    }
    $total = 0;
    for ($i = 0; $i < $numero; $i++) {
        if (($i % 3 == 0) || ($i % 5 == 0)) {
            $total += $i;
        }
    }
    return $total;
}

echo somarNumerosDivisiveisPorTreseCinco(10);


